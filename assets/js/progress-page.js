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
    var grammar = {};
    (window.JLPT_N5_GRAMMAR || []).forEach(function (p) { grammar[p.id] = p; });
    var pending = null;     // arquivo lido, esperando o aluno escolher mesclar/substituir
    var notice = "";

    function esc(s) { return String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;"); }
    function rubyText(t) { return String(t).replace(/\^/g, "").replace(/\{([^|}]+)\|([^}]+)\}/g, "<ruby>$1<rt>$2</rt></ruby>"); }
    function pct(a, b) { return b ? Math.round((a / b) * 100) : 0; }
    function peek(key) { return window.Store ? window.Store.peek(key) : null; }
    function dateLabel(iso) {
        var d = new Date(iso);
        return isNaN(d) ? "" : d.toLocaleDateString("pt-BR", { day: "2-digit", month: "2-digit" });
    }

    function bar(p) {
        return '<div class="perf-bar" role="img" aria-label="' + p + '% de acerto"><span style="width:' + p + '%"></span></div>';
    }

    function summaryHtml(st) {
        return '<div class="perf-cards">' +
            '<div class="perf-card"><strong>' + st.attempts + "</strong><span>tentativas</span></div>" +
            '<div class="perf-card"><strong>' + st.answered + "</strong><span>respostas</span></div>" +
            '<div class="perf-card"><strong>' + st.pct + "%</strong><span>de acerto</span></div></div>";
    }

    function topicsHtml(st) {
        var rows = bank.topics.filter(function (t) { return st.topics[t.id] && st.topics[t.id].total > 0; }).map(function (t) {
            var s = st.topics[t.id], p = pct(s.correct, s.total);
            return '<li class="perf-row"><div class="perf-head"><span>' + esc(t.label) + '</span><span class="perf-num">' + s.correct + "/" + s.total + " · " + p + "%</span></div>" +
                bar(p) + (t.real ? '<a class="lesson-link" href="n5-mock.html">Fazer um simulado →</a>' : '<a class="lesson-link" href="n5-practice.html?topics=' + t.id + '">Treinar este tema →</a>') + "</li>";
        }).join("");
        return '<section class="card perf-section"><h2>Por tema</h2><ul class="perf-list">' + rows + "</ul></section>";
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
            ? '<p><a class="btn btn-reveal" href="n5-practice.html?weak=1">Treinar pontos fracos (' + trainable.length + ")</a></p>" : "";
        var body = rows ? '<ul class="perf-list">' + rows + "</ul>" : '<p class="practice-last">Nenhum ponto de gramática abaixo de 70% por enquanto.</p>';
        return '<section class="card perf-section"><h2>Pontos fracos</h2>' + body + train + "</section>";
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
        return '<section class="card perf-section"><h2>Simulados</h2><p class="practice-last">Notas estimadas, não oficiais (a prova real é equalizada). Quando a prova teve só uma parte, aparecem os acertos.</p><ul class="trend-list">' + rows + "</ul></section>";
    }

    function backupHtml() {
        var preview = "";
        if (pending) {
            var s = pending.summary;
            preview = '<div class="backup-preview"><p><strong>' + esc(pending.name) + "</strong>: " + s.attempts + " tentativas (" + s.mocks + " simulados), " +
                s.lessons + " lições com progresso, " + s.kanji + " kanji marcados" + (s.prefs ? ", preferências" : "") + "." +
                (pending.dropped ? " " + pending.dropped + " tentativa(s) inválida(s) foram ignoradas." : "") + "</p>" +
                '<div class="practice-actions"><button type="button" class="btn btn-check" data-act="merge">Mesclar (recomendado)</button>' +
                '<button type="button" class="btn btn-reveal" data-act="replace">Substituir tudo</button>' +
                '<button type="button" class="btn btn-reveal" data-act="cancel">Cancelar</button></div>' +
                '<p class="practice-last">Mesclar junta o arquivo com o que já está aqui e não apaga nada. Substituir troca os dados deste aparelho pelos do arquivo.</p></div>';
        }
        return '<section class="card perf-section"><h2>Backup dos dados</h2>' +
            '<p>Seu progresso, histórico e preferências ficam só neste aparelho. Exporte um arquivo para guardar ou levar para outro aparelho.</p>' +
            '<div class="practice-actions"><button type="button" class="btn btn-check" data-act="export">Exportar dados</button>' +
            '<label class="btn btn-reveal backup-file">Importar arquivo<input type="file" accept="application/json,.json" id="backup-file" hidden></label></div>' +
            (notice ? '<p class="backup-notice" role="status">' + esc(notice) + "</p>" : "") + preview + "</section>";
    }

    function render() {
        var st = Stats.compute(peek("attempts"), bank);
        var main = st.attempts
            ? summaryHtml(st) + weakHtml(st) + topicsHtml(st) + trendHtml(st)
            : '<section class="card perf-section"><h2>Ainda sem dados</h2><p>Faça um <a href="n5-practice.html">treino</a> ou um <a href="n5-mock.html">simulado</a> e seu desempenho aparece aqui.</p></section>';
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
        notice = "Arquivo gerado.";
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
            apply(Backup.merge(local, pending.data), "Dados mesclados.");
        } else if (act === "replace" && pending) {
            if (!window.confirm("Substituir os dados deste aparelho pelos do arquivo?")) return;
            apply(pending.data, "Dados substituídos.");
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
        reader.onerror = function () { notice = "Não consegui ler o arquivo."; render(); };
        reader.readAsText(file);
    });

    if (window.Store && window.Store.subscribe) window.Store.subscribe(function () { if (!pending) render(); });
    render();
})();
