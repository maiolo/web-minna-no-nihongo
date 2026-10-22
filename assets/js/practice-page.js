/*
 * Página de treino do JLPT.
 *
 * Fluxo: escolher temas e quantidade -> responder (correção e explicação na hora) -> resultado
 * com os erros explicados. O resultado é guardado no Store (chave "attempts", assets/js/attempts.js).
 * As questões vêm de assets/js/question-bank.js; o sorteio, de assets/js/practice.js.
 */
(function () {
    "use strict";

    var root = document.getElementById("practice-root");
    var N = window.Notation, QB = window.QuestionBank, Practice = window.Practice, Attempts = window.Attempts;
    var level = document.body.dataset.level || "N5";

    var bank = QB.create({ verbs: window.JLPT_N5_VERBS, kanji: window.JLPT_N5_KANJI, grammar: window.JLPT_N5_QUESTIONS });
    var COUNTS = [5, 10, 20];

    var SPEAKER =
        '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" ' +
        'stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 9v6h4l5 4V5L8 9H4z"/>' +
        '<path d="M16.5 8.5a5 5 0 0 1 0 7M19 6a8.5 8.5 0 0 1 0 12"/></svg>';

    var settings = { topics: bank.topics.map(function (t) { return t.id; }), count: 10 };
    var run = null;   // { ids, index, answers: [{id, chosen}], startedAt, seed, label }
    var view = "setup";

    /* ---------- Utilidades ---------- */

    function esc(s) {
        return String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    }
    // Notação -> <ruby>, mantendo os espaços (enunciados, alternativas e explicações).
    function rubyText(text) {
        return esc(text).replace(/\^/g, "").replace(/\{([^|}]+)\|([^}]+)\}/g, "<ruby>$1<rt>$2</rt></ruby>");
    }
    function speakButton(notation) {
        var text = N.readingText(notation).replace(/\^は/g, "わ").replace(/\^へ/g, "え").replace(/\^/g, "").replace(/ /g, "");
        return '<button type="button" class="speak-btn" data-speak="' + esc(text) + '" aria-label="Ouvir" title="Ouvir">' + SPEAKER + "</button>";
    }
    function attemptsDoc() { return window.Store ? window.Store.peek("attempts") : null; }

    function sentenceHtml(q, filled) {
        var parts = q.sentence.split("＿＿");
        var middle = filled === null
            ? '<span class="blank" aria-label="lacuna">＿＿</span>'
            : '<span class="blank filled">' + N.toRuby(filled) + "</span>";
        return N.toRuby(parts[0]) + middle + N.toRuby(parts[1] || "");
    }

    function linkFor(q) {
        if (q.ref) return '<a class="lesson-link" href="n5-grammar.html#' + encodeURIComponent(q.ref) + '">Ver o ponto de gramática →</a>';
        if (q.topic.indexOf("verbo") === 0) return '<a class="lesson-link" href="n5-verbs.html">Ver a página de verbos →</a>';
        return '<a class="lesson-link" href="n5-kanji.html">Ver a lista de kanji →</a>';
    }

    /* ---------- Início ---------- */

    function renderSetup() {
        view = "setup";
        var doc = attemptsDoc();
        var last = Attempts.list(doc).filter(function (a) { return a.kind === "practice"; })[0];
        var missed = Attempts.missedIds(doc).filter(function (id) { return bank.get(id); });

        var topics = bank.topics.map(function (t) {
            var checked = settings.topics.indexOf(t.id) !== -1;
            return '<label class="topic-check"><input type="checkbox" name="topic" value="' + t.id + '"' + (checked ? " checked" : "") + ">" +
                '<span class="topic-name">' + esc(t.label) + '</span><span class="topic-count">' + bank.ids(t.id).length + "</span></label>";
        }).join("");
        var counts = COUNTS.map(function (n) {
            return '<label class="seg"><input type="radio" name="count" value="' + n + '"' + (settings.count === n ? " checked" : "") + "><span>" + n + "</span></label>";
        }).join("");

        root.innerHTML =
            '<section class="card practice-setup">' +
                "<h2>Monte seu treino</h2>" +
                '<p class="practice-lead">Escolha o que praticar. Cada resposta é corrigida na hora, com a explicação, e o resultado fica salvo neste aparelho.</p>' +
                '<fieldset class="practice-field"><legend>Temas</legend>' + topics + "</fieldset>" +
                '<fieldset class="practice-field"><legend>Quantidade de perguntas</legend><div class="segmented" role="group">' + counts + "</div></fieldset>" +
                '<p class="practice-error" id="practice-error" role="alert" hidden>Marque pelo menos um tema.</p>' +
                '<div class="practice-actions"><button type="button" class="btn btn-check" data-act="start">Começar</button>' +
                    (missed.length ? '<button type="button" class="btn btn-reveal" data-act="missed">Refazer erros anteriores (' + missed.length + ")</button>" : "") +
                "</div>" +
                (last ? '<p class="practice-last">Último treino: <strong>' + last.score.correct + " de " + last.score.total + "</strong>, " + esc(new Date(last.startedAt).toLocaleDateString("pt-BR")) + ".</p>" : "") +
            "</section>";
    }

    function readSetup() {
        var topics = Array.prototype.map.call(root.querySelectorAll('input[name="topic"]:checked'), function (i) { return i.value; });
        var count = Number((root.querySelector('input[name="count"]:checked') || {}).value) || 10;
        settings = { topics: topics, count: count };
        return settings;
    }

    function startRun(ids, label) {
        run = { ids: ids, index: 0, answers: [], startedAt: new Date(), seed: 0, label: label || "" };
        renderQuestion();
    }

    function newSeed() { return (Date.now() % 4294967295) + 1; }

    function startFromSetup() {
        var s = readSetup();
        if (!s.topics.length) { document.getElementById("practice-error").hidden = false; return; }
        var seed = newSeed();
        var ids = Practice.pick(bank, { topics: s.topics, count: s.count, seed: seed, avoid: Attempts.recentIds(attemptsDoc(), 2) });
        startRun(ids);
        run.seed = seed;
    }

    function startMissed() {
        var ids = Attempts.missedIds(attemptsDoc()).filter(function (id) { return bank.get(id); }).slice(0, 20);
        startRun(QB.shuffle(ids, newSeed()), "erros anteriores");
    }

    /* ---------- Pergunta ---------- */

    function renderQuestion() {
        view = "question";
        var q = bank.get(run.ids[run.index]);
        var total = run.ids.length;
        var percent = Math.round((run.index / total) * 100);
        root.innerHTML =
            '<section class="card practice-card">' +
                '<div class="practice-top"><span>Pergunta ' + (run.index + 1) + " de " + total + (run.label ? " • " + esc(run.label) : "") + "</span>" +
                    '<button type="button" class="detail-btn" data-act="quit" aria-label="Sair do treino">✕</button></div>' +
                '<div class="practice-bar" role="progressbar" aria-valuemin="0" aria-valuemax="' + total + '" aria-valuenow="' + run.index + '"><span style="width:' + percent + '%"></span></div>' +
                (q.glyph ? '<div class="quiz-glyph" lang="ja">' + esc(q.glyph) + "</div>" : "") +
                '<p class="practice-prompt">' + rubyText(q.prompt) + "</p>" +
                (q.sentence ? '<div class="practice-sentence" lang="ja">' + sentenceHtml(q, null) + "</div>" : "") +
                (q.hint ? '<div class="pt-line practice-hint">🇧🇷 ' + esc(q.hint) + "</div>" : "") +
                '<div class="quiz-options" id="practice-options">' + q.options.map(function (o, i) {
                    return '<button type="button" class="quiz-option" data-option="' + i + '" lang="ja"><span class="opt-key" aria-hidden="true">' + (i + 1) + "</span>" + rubyText(o) + "</button>";
                }).join("") + "</div>" +
                '<div class="practice-feedback" id="practice-feedback" aria-live="polite"></div>' +
            "</section>";
    }

    function answer(i) {
        if (view !== "question" || run.answers.length > run.index) return;
        var q = bank.get(run.ids[run.index]);
        var ok = i === q.answer;
        run.answers.push({ id: q.id, chosen: i });

        root.querySelectorAll(".quiz-option").forEach(function (btn, n) {
            btn.disabled = true;
            if (n === q.answer) btn.classList.add("correct");
            else if (n === i) btn.classList.add("wrong");
        });
        if (q.sentence) {
            root.querySelector(".practice-sentence").innerHTML = sentenceHtml(q, q.options[q.answer]);
        }

        var filled = q.sentence ? q.sentence.replace("＿＿", q.options[q.answer]) : null;
        var speakText = filled || (q.topic === "verbo-forma" ? q.options[q.answer] : null);
        var last = run.index + 1 >= run.ids.length;
        document.getElementById("practice-feedback").innerHTML =
            '<p class="feedback-line ' + (ok ? "ok" : "bad") + '"><strong>' + (ok ? "Correto!" : "Não foi dessa vez.") + "</strong>" +
                (ok ? "" : " A resposta certa é <span lang=\"ja\">" + rubyText(q.options[q.answer]) + "</span>.") + "</p>" +
            '<div class="kanji-note">' + rubyText(q.explain) + "</div>" +
            (filled ? '<div class="jp-row"><div class="romaji">' + N.sentenceRomaji(filled) + "</div>" + speakButton(filled) + "</div>"
                    : speakText ? '<div class="jp-row"><div class="romaji">' + N.toRomaji(N.readingText(speakText)) + "</div>" + speakButton(speakText) + "</div>" : "") +
            linkFor(q) +
            '<div class="practice-actions"><button type="button" class="btn btn-check" data-act="next" id="practice-next">' + (last ? "Ver resultado" : "Próxima") + "</button></div>";
        var next = document.getElementById("practice-next");
        if (next) next.focus();
    }

    function next() {
        if (view !== "question" || run.answers.length <= run.index) return;
        run.index += 1;
        if (run.index >= run.ids.length) finish(); else renderQuestion();
        window.scrollTo(0, 0);
    }

    /* ---------- Resultado ---------- */

    function finish() {
        view = "result";
        var graded = Practice.grade(bank, run.answers);
        var attempt = {
            id: run.startedAt.toISOString(), kind: "practice", level: level,
            startedAt: run.startedAt.toISOString(),
            seconds: Math.round((Date.now() - run.startedAt.getTime()) / 1000),
            topics: run.label ? [] : settings.topics.slice(),
            items: graded.items.map(function (it) { return { q: it.id, a: it.chosen, ok: it.ok }; }),
            score: { correct: graded.correct, total: graded.total }
        };
        run.result = graded;
        if (window.Store) { try { window.Store.set("attempts", Attempts.add(attemptsDoc(), attempt)); } catch (e) { /* sem armazenamento: segue sem salvar */ } }
        renderResult();
    }

    function renderResult() {
        var g = run.result;
        var missed = g.items.filter(function (it) { return !it.ok; });
        var percent = g.total ? Math.round((g.correct / g.total) * 100) : 0;
        var message = percent === 100 ? "Perfeito!" : percent >= 70 ? "Muito bem!" : percent >= 40 ? "Está no caminho." : "Vale rever com calma.";

        var list = missed.map(function (it) {
            var q = bank.get(it.id);
            return '<details class="verb-item missed-item" open><summary><span class="verb-pt">' + rubyText(q.prompt) + (q.sentence ? "" : "") + "</span></summary>" +
                '<div class="verb-body">' +
                (q.glyph ? '<div class="missed-glyph" lang="ja">' + esc(q.glyph) + "</div>" : "") +
                (q.sentence ? '<div class="practice-sentence" lang="ja">' + sentenceHtml(q, q.options[q.answer]) + "</div>" : "") +
                '<p class="missed-line">Você respondeu: <span class="wrong-text" lang="ja">' + (it.chosen === null ? "(em branco)" : rubyText(q.options[it.chosen])) + "</span></p>" +
                '<p class="missed-line">Certa: <strong lang="ja">' + rubyText(q.options[q.answer]) + "</strong></p>" +
                '<div class="kanji-note">' + rubyText(q.explain) + "</div>" + linkFor(q) +
                "</div></details>";
        }).join("");

        root.innerHTML =
            '<section class="card practice-card">' +
                '<div class="quiz-score">' + g.correct + " / " + g.total + "</div>" +
                '<p class="practice-prompt">' + message + " (" + percent + "%)</p>" +
                (missed.length ? '<h3 class="practice-sub">Para rever (' + missed.length + ')</h3><div class="verb-list">' + list + "</div>" : '<p class="practice-prompt">Nenhum erro neste treino.</p>') +
                '<div class="practice-actions">' +
                    '<button type="button" class="btn btn-check" data-act="again">Treinar de novo</button>' +
                    (missed.length ? '<button type="button" class="btn btn-reveal" data-act="retry-missed">Treinar só os erros</button>' : "") +
                    '<button type="button" class="btn btn-reveal" data-act="setup">Mudar temas</button>' +
                "</div>" +
            "</section>";
        window.scrollTo(0, 0);
    }

    /* ---------- Eventos ---------- */

    root.addEventListener("click", function (e) {
        var opt = e.target.closest("[data-option]");
        if (opt) { answer(Number(opt.dataset.option)); return; }
        var btn = e.target.closest("[data-act]");
        if (!btn) return;
        switch (btn.dataset.act) {
            case "start": startFromSetup(); break;
            case "missed": startMissed(); break;
            case "next": next(); break;
            case "quit": if (window.confirm("Sair do treino? O progresso desta rodada não será salvo.")) renderSetup(); break;
            case "again": {
                var seed = newSeed();
                startRun(Practice.pick(bank, { topics: settings.topics, count: settings.count, seed: seed, avoid: run.ids }));
                run.seed = seed;
                break;
            }
            case "retry-missed": {
                var ids = run.result.items.filter(function (it) { return !it.ok; }).map(function (it) { return it.id; });
                startRun(QB.shuffle(ids, newSeed()), "só os erros");
                break;
            }
            case "setup": renderSetup(); break;
        }
    });

    root.addEventListener("change", function (e) {
        if (e.target.name === "topic") document.getElementById("practice-error").hidden = true;
    });

    document.addEventListener("keydown", function (e) {
        if (view !== "question" || e.ctrlKey || e.metaKey || e.altKey) return;
        var n = Number(e.key);
        if (n >= 1 && n <= 9 && run.answers.length === run.index) {
            var q = bank.get(run.ids[run.index]);
            if (n <= q.options.length) answer(n - 1);
        }
    });

    renderSetup();
})();
