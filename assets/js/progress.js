/*
 * Progresso do aluno: seções concluídas, respostas dos exercícios e
 * "onde parou". Guardado pelo Store (chave "progress"), no formato descrito
 * em docs/ROADMAP.md, então vai para o back end junto com o resto.
 *
 *   Progress.get()                          o objeto inteiro (sempre válido)
 *   Progress.visit(lição, seção, total)     marca "em andamento", lembra onde parou e guarda
 *                                           quantas seções a lição tem (a home usa para a barra)
 *   Progress.setSection(lição, seção, ok)   marca/desmarca a seção como concluída
 *   Progress.recordAnswer(lição, seção, chave, correta)   guarda uma resposta
 *   Progress.sectionStatus(lição, seção)    "done" | "in_progress" | "todo"
 *   Progress.lessonSummary(lição, seções)   { done, total, percent, status }
 *   Progress.last()                         { type, id, section } ou null
 *   Progress.clear()                        apaga tudo
 *   Progress.subscribe(fn)                  mudanças (outra aba, sincronização)
 */
(function (root) {
    "use strict";

    var KEY = "progress";

    function isObject(v) { return v && typeof v === "object" && !Array.isArray(v); }

    // Aceita dado velho ou editado à mão sem quebrar a página.
    function sanitize(raw) {
        var r = isObject(raw) ? raw : {};
        var out = Object.assign({}, r, { lessons: isObject(r.lessons) ? r.lessons : {} });
        if (!(isObject(out.last) && out.last.type === "lesson" && out.last.id && out.last.section)) delete out.last;
        return out;
    }

    function createProgress(store, now) {
        var clock = now || function () { return new Date().toISOString(); };

        function read() { return sanitize(store.peek(KEY)); }

        function lessonOf(data, n) {
            var l = isObject(data.lessons[n]) ? data.lessons[n] : {};
            l.sections = isObject(l.sections) ? l.sections : {};
            l.exercises = isObject(l.exercises) ? l.exercises : {};
            data.lessons[n] = l;
            return l;
        }

        // Aplica uma alteração e grava só se algo mudou (evita escritas à toa).
        function change(fn) {
            var data = read();
            var before = JSON.stringify(data);
            fn(data);
            if (JSON.stringify(data) === before) return Promise.resolve(data);
            return store.set(KEY, data);
        }

        var progress = {
            KEY: KEY,
            sanitize: sanitize,

            get: read,

            last: function () { return read().last || null; },

            visit: function (n, section, total) {
                return change(function (data) {
                    var l = lessonOf(data, n);
                    if (!l.sections[section]) l.sections[section] = "in_progress";
                    l.lastSection = section;
                    if (total) l.total = Number(total);
                    l.updatedAt = clock();
                    data.last = { type: "lesson", id: Number(n), section: section };
                });
            },

            setSection: function (n, section, done) {
                return change(function (data) {
                    var l = lessonOf(data, n);
                    l.sections[section] = done ? "done" : "in_progress";
                    l.updatedAt = clock();
                });
            },

            // "key" identifica a questão (ex.: "renshuuB:0:2"). Uma vez correta, fica correta.
            recordAnswer: function (n, section, key, correct) {
                return change(function (data) {
                    var l = lessonOf(data, n);
                    var prev = isObject(l.exercises[key]) ? l.exercises[key] : { correct: false, attempts: 0 };
                    l.exercises[key] = { correct: prev.correct || Boolean(correct), attempts: prev.attempts + 1 };
                    if (!l.sections[section]) l.sections[section] = "in_progress";
                    l.updatedAt = clock();
                });
            },

            sectionStatus: function (n, section) {
                var l = read().lessons[n];
                var s = l && isObject(l.sections) ? l.sections[section] : null;
                return s === "done" || s === "in_progress" ? s : "todo";
            },

            // Quantas das questões da seção já estão corretas (para a barra dos exercícios).
            correctCount: function (n, section) {
                var l = read().lessons[n];
                if (!l || !isObject(l.exercises)) return 0;
                return Object.keys(l.exercises).filter(function (k) {
                    return k.indexOf(section + ":") === 0 && l.exercises[k].correct;
                }).length;
            },

            lessonSummary: function (n, sectionIds) {
                var done = sectionIds.filter(function (id) { return progress.sectionStatus(n, id) === "done"; }).length;
                var touched = sectionIds.some(function (id) { return progress.sectionStatus(n, id) !== "todo"; });
                var total = sectionIds.length;
                return {
                    done: done,
                    total: total,
                    percent: total ? Math.round(done / total * 100) : 0,
                    status: total && done === total ? "done" : (touched ? "in_progress" : "todo")
                };
            },

            clear: function () { return store.set(KEY, { lessons: {} }); },

            subscribe: function (fn) { return store.subscribe(KEY, function () { fn(read()); }); }
        };
        return progress;
    }

    var api = { createProgress: createProgress, sanitize: sanitize };

    if (typeof module !== "undefined" && module.exports) {
        module.exports = api;
        return;
    }
    root.Progress = createProgress(root.Store);
})(typeof window !== "undefined" ? window : globalThis);
