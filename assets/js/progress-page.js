/*
 * Página "Meu desempenho" do JLPT.
 *
 * Mostra o que o histórico de tentativas diz (assets/js/stats.js), leva aos pontos fracos e
 * exporta/importa os dados do aluno em JSON (assets/js/backup.js). Tudo fica no aparelho.
 */
(function () {
    "use strict";

    var root = document.getElementById("progress-root");
    var QB = window.QuestionBank, Stats = window.Stats, Backup = window.Backup;
    var bank = QB.create({ verbs: window.JLPT_N5_VERBS, kanji: window.JLPT_N5_KANJI, grammar: window.JLPT_N5_QUESTIONS, exam: window.JLPT_N5_EXAM });
    var TOPICS = window.I18n ? window.I18n.localize(bank.topics, window.I18n.lang()) : bank.topics;
    var GRAMMAR = window.I18n ? window.I18n.localize(window.JLPT_N5_GRAMMAR || [], window.I18n.lang()) : (window.JLPT_N5_GRAMMAR || []);
    function T(key, vars) { return window.I18n ? window.I18n.t(key, vars) : key; }
    var grammar = {};
    GRAMMAR.forEach(function (p) { grammar[p.id] = p; });
    var pending = null;     // arquivo lido, esperando o aluno escolher mesclar/substituir
    var notice = "";

    function esc(s) { return String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;"); }
    function rubyText(t) { return String(t).replace(/\^/g, "").replace(/\{([^|}]+)\|([^}]+)\}/g, "<ruby>$1<rt>$2</rt></ruby>"); }
    function pct(a, b) { return b ? Math.round((a / b) * 100) : 0; }
    function peek(key) { return window.Store ? window.Store.peek(key) : null; }
    function dateLabel(iso) {
        var d = new Date(iso);
        return isNaN(d) ? "" : d.toLocaleDateString((window.I18n ? window.I18n.t("lang.locale") : "pt-BR"), { day: "2-digit", month: "2-digit" });
    }

    function bar(p) {
        return '<div class="perf-bar" role="img" aria-label="' + T("perf.accuracyAria", { p: p }) + '"><span style="width:' + p + '%"></span></div>';
    }

    function summaryHtml(st) {
        return '<div class="perf-cards">' +
            '<div class="perf-card"><strong>' + st.attempts + "</strong><span>" + T("perf.attempts") + "</span></div>" +
            '<div class="perf-card"><strong>' + st.answered + "</strong><span>" + T("perf.answers") + "</span></div>" +
            '<div class="perf-card"><strong>' + st.pct + "%</strong><span>" + T("perf.accuracy") + "</span></div></div>";
    }

    function topicsHtml(st) {
        var rows = TOPICS.filter(function (t) { return st.topics[t.id] && st.topics[t.id].total > 0; }).map(function (t) {
            var s = st.topics[t.id], p = pct(s.correct, s.total);
            return '<li class="perf-row"><div class="perf-head"><span>' + esc(t.label) + '</span><span class="perf-num">' + s.correct + "/" + s.total + " · " + p + "%</span></div>" +
                bar(p) + (t.real ? '<a class="lesson-link" href="n5-mock.html">' + T("perf.doMock") + '</a>' : '<a class="lesson-link" href="n5-practice.html?topics=' + t.id + '">' + T("perf.trainTopic") + '</a>') + "</li>";
        }).join("");
        return '<section class="card perf-section"><h2>' + T("perf.byTopic") + '</h2><ul class="perf-list">' + rows + "</ul></section>";
    }

    function weakHtml(st) {
        var rows = st.weakRefs.map(function (w) {
            var g = grammar[w.ref];
            var title = g ? g.title : w.ref;
            return '<li class="perf-row"><div class="perf-head"><span>' + (g ? '<a href="n5-grammar.html#' + esc(w.ref) + '">' + esc(title) + "</a>" : esc(title)) +
                '</span><span class="perf-num">' + w.correct + "/" + w.total + " · " + w.pct + "%</span></div>" + bar(w.pct) + "</li>";
        }).join("");
        // Questões da prova no formato JLPT não entram no treino: só as dos outros temas.
        var trainable = st.weakIds.filter(function (id) { var q = bank.get(id); return q && !q.exam; });
        var train = trainable.length
            ? '<p><a class="btn btn-reveal" href="n5-practice.html?weak=1">' + T("practice.weak") + " (" + trainable.length + ")</a></p>" : "";
        var body = rows ? '<ul class="perf-list">' + rows + "</ul>" : '<p class="practice-last">' + T("perf.noWeak") + '</p>';
        return '<section class="card perf-section"><h2>' + T("perf.weak") + '</h2>' + body + train + "</section>";
    }

    function trendHtml(st) {
        if (!st.trend.length) return "";
        var rows = st.trend.map(function (m) {
            var hasTotal = m.totalEstimate !== null && m.totalEstimate !== undefined;
            var hasKnowledge = m.knowledge !== null && m.knowledge !== undefined;
            var label = hasTotal ? "≈ " + m.totalEstimate + " / 180" : (hasKnowledge ? "≈ " + m.knowledge + " / 120" : m.correct + " / " + m.total);
            var share = hasTotal ? pct(m.totalEstimate, 180) : (hasKnowledge ? pct(m.knowledge, 120) : pct(m.correct, m.total));
            return '<li class="trend-row"><span class="trend-date">' + dateLabel(m.startedAt) + "</span>" + bar(share) +
                '<span class="perf-num">' + label + "</span></li>";
        }).join("");
        return '<section class="card perf-section"><h2>' + T("perf.mocks") + '</h2><p class="practice-last">' + T("perf.mocksNote") + '</p><ul class="trend-list">' + rows + "</ul></section>";
    }

    function backupHtml() {
        var preview = "";
        if (pending) {
            var s = pending.summary;
            preview = '<div class="backup-preview"><p><strong>' + esc(pending.name) + "</strong>: " + T("backup.summary", { attempts: s.attempts, mocks: s.mocks, lessons: s.lessons, kanji: s.kanji }) + (s.prefs ? T("backup.withPrefs") : "") + "." +
                (pending.dropped ? " " + T("backup.dropped", { n: pending.dropped }) : "") + "</p>" +
                '<div class="practice-actions"><button type="button" class="btn btn-check" data-act="merge">' + T("backup.merge") + '</button>' +
                '<button type="button" class="btn btn-reveal" data-act="replace">' + T("backup.replace") + '</button>' +
                '<button type="button" class="btn btn-reveal" data-act="cancel">' + T("backup.cancel") + '</button></div>' +
                '<p class="practice-last">' + T("backup.mergeNote") + '</p></div>';
        }
        return '<section class="card perf-section"><h2>' + T("backup.title") + '</h2>' +
            '<p>' + T("backup.lead") + '</p>' +
            '<div class="practice-actions"><button type="button" class="btn btn-check" data-act="export">' + T("backup.export") + '</button>' +
            '<label class="btn btn-reveal backup-file">' + T("backup.import") + '<input type="file" accept="application/json,.json" id="backup-file" hidden></label></div>' +
            (notice ? '<p class="backup-notice" role="status">' + esc(notice) + "</p>" : "") + preview + "</section>";
    }

    function render() {
        var st = Stats.compute(peek("attempts"), bank);
        var main = st.attempts
            ? summaryHtml(st) + weakHtml(st) + topicsHtml(st) + trendHtml(st)
            : '<section class="card perf-section"><h2>' + T("perf.noData") + '</h2><p>' + T("perf.noDataText", { practice: '<a href="n5-practice.html">' + T("perf.practice") + "</a>", mock: '<a href="n5-mock.html">' + T("perf.mock") + "</a>" }) + '</p></section>';
        root.innerHTML = '<div class="perf-wrap">' + main + backupHtml() + "</div>";
    }

    function exportFile() {
        var data = Backup.build(peek, new Date().toISOString());
        var blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
        var a = document.createElement("a");
        a.href = URL.createObjectURL(blob);
        a.download = "minna-backup-" + new Date().toISOString().slice(0, 10) + ".json";
        document.body.appendChild(a);
        a.click();
        a.remove();
        setTimeout(function () { URL.revokeObjectURL(a.href); }, 1000);
        notice = T("backup.generated");
        render();
    }

    function apply(values, label) {
        Object.keys(values).forEach(function (key) { window.Store.set(key, values[key]); });
        pending = null;
        notice = label;
        render();
    }

    root.addEventListener("click", function (e) {
        var btn = e.target.closest("[data-act]");
        if (!btn) return;
        var act = btn.dataset.act;
        if (act === "export") exportFile();
        else if (act === "cancel") { pending = null; notice = ""; render(); }
        else if (act === "merge" && pending) {
            var local = {};
            Backup.KEYS.forEach(function (k) { local[k] = peek(k); });
            apply(Backup.merge(local, pending.data), T("backup.merged"));
        } else if (act === "replace" && pending) {
            if (!window.confirm(T("backup.confirmReplace"))) return;
            apply(pending.data, T("backup.replaced"));
        }
    });

    root.addEventListener("change", function (e) {
        if (e.target.id !== "backup-file" || !e.target.files.length) return;
        var file = e.target.files[0];
        var reader = new FileReader();
        reader.onload = function () {
            var res = Backup.parse(String(reader.result));
            if (!res.ok) { pending = null; notice = res.error; }
            else { pending = { data: res.data, summary: res.summary, dropped: res.dropped, name: file.name }; notice = ""; }
            render();
        };
        reader.onerror = function () { notice = T("backup.readError"); render(); };
        reader.readAsText(file);
    });

    if (window.Store && window.Store.subscribe) window.Store.subscribe(function () { if (!pending) render(); });
    render();
})();
