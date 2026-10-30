/*
 * Backup dos dados do aluno em JSON (funções puras, testadas com node --test).
 *
 *   Backup.build(read, agora)      { app, version, exportedAt, data } a partir de read(chave) (o Store.peek)
 *   Backup.parse(texto)            { ok: true, data, summary, dropped } ou { ok: false, error }
 *   Backup.merge(local, entrada)   { chave: valor } com o que fica ao juntar os dois
 *   Backup.describe(data)          { attempts, mocks, lessons, kanji, prefs } para mostrar antes de importar
 *
 * Chaves do Store que entram no backup: prefs, progress, attempts. O simulado em andamento
 * (mockdraft) não entra de propósito. O arquivo é lido como DADO: só as chaves conhecidas passam,
 * objetos são copiados sem as chaves perigosas (__proto__, constructor, prototype) e as tentativas
 * inválidas são descartadas.
 *
 * Juntar (merge): tentativas = união por id (50 mais recentes); progresso = o que está concluído
 * ou marcado "já sei" em qualquer um dos lados fica; preferências = o documento mais recente.
 */
(function (root) {
    "use strict";

    var APP = "minna-no-nihongo";
    var VERSION = 1;
    var KEYS = ["prefs", "progress", "attempts"];
    var MAX_CHARS = 5000000;
    var MAX_ATTEMPTS = 50;
    var DANGEROUS = { "__proto__": true, "constructor": true, "prototype": true };

    function isObject(v) { return v !== null && typeof v === "object" && !Array.isArray(v); }

    // Cópia profunda só com dados simples (JSON), sem as chaves perigosas e com profundidade limitada.
    function clean(value, depth) {
        if (depth > 8) return null;
        if (Array.isArray(value)) return value.map(function (v) { return clean(v, depth + 1); });
        if (isObject(value)) {
            var out = {};
            Object.keys(value).forEach(function (k) {
                if (!DANGEROUS[k]) out[k] = clean(value[k], depth + 1);
            });
            return out;
        }
        return typeof value === "function" || value === undefined ? null : value;
    }

    function validAttempt(a) {
        return isObject(a) && typeof a.id === "string" && (a.kind === "practice" || a.kind === "mock") &&
            typeof a.startedAt === "string" && !isNaN(Date.parse(a.startedAt)) &&
            Array.isArray(a.items) &&
            a.items.every(function (it) {
                return isObject(it) && typeof it.q === "string" && typeof it.ok === "boolean" && (it.a === null || Number.isInteger(it.a));
            }) &&
            isObject(a.score) && isFinite(a.score.correct) && isFinite(a.score.total) &&
            (a.seconds === undefined || isFinite(a.seconds));
    }

    function cleanAttempts(doc) {
        var list = isObject(doc) && Array.isArray(doc.list) ? doc.list : [];
        var kept = list.filter(validAttempt).slice(0, MAX_ATTEMPTS);
        return { value: { list: clean(kept, 0) }, dropped: list.length - kept.length };
    }

    function build(read, now) {
        var data = {};
        KEYS.forEach(function (k) {
            var v = read(k);
            if (isObject(v)) data[k] = clean(v, 0);
        });
        return { app: APP, version: VERSION, exportedAt: new Date(now === undefined ? Date.now() : now).toISOString(), data: data };
    }

    // Mensagem no idioma da página; fora do navegador (testes) fica o texto em português.
    function msg(key, fallback) { return root.I18n ? root.I18n.t(key) : fallback; }

    function parse(text) {
        if (typeof text !== "string" || !text.trim()) return { ok: false, error: msg("backup.empty", "O arquivo está vazio.") };
        if (text.length > MAX_CHARS) return { ok: false, error: msg("backup.tooBig", "O arquivo é grande demais para ser um backup deste site.") };
        var obj;
        try { obj = JSON.parse(text); } catch (e) { return { ok: false, error: msg("backup.badJson", "O arquivo não é um JSON válido.") }; }
        if (!isObject(obj) || obj.app !== APP) return { ok: false, error: msg("backup.notBackup", "Este arquivo não é um backup deste site.") };
        if (obj.version !== VERSION) {
            return { ok: false, error: obj.version > VERSION ? msg("backup.newer", "O backup é de uma versão mais nova do site. Atualize a página e tente de novo.") : msg("backup.unknownVersion", "Versão de backup desconhecida.") };
        }
        if (!isObject(obj.data)) return { ok: false, error: msg("backup.noData", "O backup não tem dados.") };

        var data = {}, dropped = 0;
        KEYS.forEach(function (k) {
            var v = obj.data[k];
            if (!isObject(v)) return;
            if (k === "attempts") {
                var res = cleanAttempts(v);
                dropped += res.dropped;
                if (res.value.list.length) data.attempts = res.value;
            } else {
                data[k] = clean(v, 0);
            }
        });
        if (!Object.keys(data).length) return { ok: false, error: msg("backup.nothing", "O backup não tem nada para importar.") };
        return { ok: true, data: data, summary: describe(data), dropped: dropped, exportedAt: typeof obj.exportedAt === "string" ? obj.exportedAt : null };
    }

    function describe(data) {
        var attempts = data.attempts && Array.isArray(data.attempts.list) ? data.attempts.list : [];
        var lessons = isObject(data.progress) && isObject(data.progress.lessons) ? Object.keys(data.progress.lessons).length : 0;
        var kanji = 0;
        if (isObject(data.progress) && isObject(data.progress.kanji)) {
            Object.keys(data.progress.kanji).forEach(function (level) {
                var lv = data.progress.kanji[level];
                if (isObject(lv)) kanji += Object.keys(lv).filter(function (k) { return isObject(lv[k]) && lv[k].known; }).length;
            });
        }
        return {
            attempts: attempts.length,
            mocks: attempts.filter(function (a) { return a.kind === "mock"; }).length,
            lessons: lessons, kanji: kanji, prefs: isObject(data.prefs)
        };
    }

    /* ---------- Juntar ---------- */

    function stamp(doc) { return isObject(doc) ? String(doc.updatedAt || "") : ""; }

    function mergeAttempts(a, b) {
        var byId = {};
        [b, a].forEach(function (doc) {   // local (a) por último: vence em caso de mesmo id
            (isObject(doc) && Array.isArray(doc.list) ? doc.list : []).forEach(function (t) { byId[t.id] = t; });
        });
        var list = Object.keys(byId).map(function (k) { return byId[k]; });
        list.sort(function (x, y) { return x.startedAt < y.startedAt ? 1 : x.startedAt > y.startedAt ? -1 : 0; });
        return { list: list.slice(0, MAX_ATTEMPTS) };
    }

    function mergeLesson(a, b) {
        var older = stamp(a) <= stamp(b) ? a : b, newer = older === a ? b : a;
        var out = Object.assign({}, older, newer);
        out.sections = Object.assign({}, isObject(a.sections) ? a.sections : {}, isObject(b.sections) ? b.sections : {});
        // "concluída" em qualquer um dos lados continua concluída
        [a, b].forEach(function (l) {
            if (!isObject(l.sections)) return;
            Object.keys(l.sections).forEach(function (s) { if (l.sections[s] === "done") out.sections[s] = "done"; });
        });
        out.exercises = {};
        [a, b].forEach(function (l) {
            if (!isObject(l.exercises)) return;
            Object.keys(l.exercises).forEach(function (k) {
                var e = l.exercises[k], prev = out.exercises[k];
                if (!isObject(e)) return;
                out.exercises[k] = prev
                    ? { correct: Boolean(prev.correct || e.correct), attempts: Math.max(prev.attempts || 0, e.attempts || 0) }
                    : { correct: Boolean(e.correct), attempts: e.attempts || 0 };
            });
        });
        return out;
    }

    function mergeProgress(a, b) {
        var older = stamp(a) <= stamp(b) ? a : b, newer = older === a ? b : a;
        var out = Object.assign({}, older, newer);
        var la = isObject(a.lessons) ? a.lessons : {}, lb = isObject(b.lessons) ? b.lessons : {};
        out.lessons = {};
        Object.keys(la).concat(Object.keys(lb)).forEach(function (n) {
            if (out.lessons[n]) return;
            out.lessons[n] = isObject(la[n]) && isObject(lb[n]) ? mergeLesson(la[n], lb[n]) : (isObject(la[n]) ? la[n] : lb[n]);
        });
        var ka = isObject(a.kanji) ? a.kanji : {}, kb = isObject(b.kanji) ? b.kanji : {};
        if (Object.keys(ka).length || Object.keys(kb).length) {
            out.kanji = {};
            Object.keys(ka).concat(Object.keys(kb)).forEach(function (level) {
                if (out.kanji[level]) return;
                var va = isObject(ka[level]) ? ka[level] : {}, vb = isObject(kb[level]) ? kb[level] : {};
                var merged = {};
                Object.keys(va).concat(Object.keys(vb)).forEach(function (k) {
                    if (merged[k]) return;
                    var x = va[k], y = vb[k];
                    merged[k] = isObject(x) && isObject(y) ? (String(x.updatedAt || "") >= String(y.updatedAt || "") ? x : y) : (isObject(x) ? x : y);
                });
                out.kanji[level] = merged;
            });
        }
        return out;
    }

    function merge(local, incoming) {
        var out = {};
        KEYS.forEach(function (k) {
            if (!isObject(incoming[k])) return;
            var mine = isObject(local[k]) ? local[k] : null;
            if (!mine) { out[k] = incoming[k]; return; }
            if (k === "attempts") out[k] = mergeAttempts(mine, incoming[k]);
            else if (k === "progress") out[k] = mergeProgress(mine, incoming[k]);
            else out[k] = stamp(incoming[k]) > stamp(mine) ? incoming[k] : mine;
        });
        return out;
    }

    var api = { APP: APP, VERSION: VERSION, KEYS: KEYS, build: build, parse: parse, merge: merge, describe: describe };

    if (typeof module !== "undefined" && module.exports) { module.exports = api; return; }
    root.Backup = api;
})(typeof window !== "undefined" ? window : globalThis);
