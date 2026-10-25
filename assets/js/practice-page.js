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

    var settings = { topics: bank.topics.map(function (t) { return t.id; }), count: 10 };
    // n5-practice.html?topics=gramatica,verbo-forma abre com esses temas marcados (links do simulado).
    (function () {
        var match = /[?&]topics=([^&]*)/.exec(location.search);
        if (!match) return;
        var wanted = decodeURIComponent(match[1]).split(",").filter(function (id) { return settings.topics.indexOf(id) !== -1; });
        if (wanted.length) settings.topics = wanted;
    })();
    var run = null;   // { ids, index, answers: [{id, chosen}], startedAt, seed, label }
    var view = "setup";

    /* ---------- Utilidades (trechos compartilhados com o simulado: quiz-view.js) ---------- */

    var QV = window.QuizView;
    var esc = QV.esc, rubyText = QV.rubyText, speakButton = QV.speakButton, sentenceHtml = QV.sentenceHtml, linkFor = QV.linkFor;
    function attemptsDoc() { return window.Store ? window.Store.peek("attempts") : null; }
    // Sem voz em japonês no aparelho, as questões de escuta não funcionam (speech.js marca data-speech="off").
    function speechOff() { return document.documentElement.dataset.speech === "off"; }
    function listeningTopic(id) { return bank.topics.filter(function (t) { return t.id === id; })[0].listening === true; }
    function playable(id) { return !(speechOff() && bank.get(id).speak); }

    /* ---------- Início ---------- */

    function renderSetup() {
        view = "setup";
        var doc = attemptsDoc();
        var last = Attempts.list(doc).filter(function (a) { return a.kind === "practice"; })[0];
        var missed = Attempts.missedIds(doc).filter(function (id) { return bank.get(id) && playable(id); });
        var weak = window.Stats ? window.Stats.compute(doc, bank).weakIds.filter(playable) : [];

        var topics = bank.topics.map(function (t) {
            var off = t.listening && speechOff();
            var checked = !off && settings.topics.indexOf(t.id) !== -1;
            return '<label class="topic-check' + (off ? " is-disabled" : "") + '"><input type="checkbox" name="topic" value="' + t.id + '"' + (checked ? " checked" : "") + (off ? " disabled" : "") + ">" +
                '<span class="topic-name">' + esc(t.label) + (off ? ' <small>(precisa de voz em japonês no aparelho)</small>' : "") + '</span><span class="topic-count">' + bank.ids(t.id).length + "</span></label>";
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
                    (weak.length ? '<button type="button" class="btn btn-reveal" data-act="weak">Treinar pontos fracos (' + weak.length + ")</button>" : "") +
                    (missed.length ? '<button type="button" class="btn btn-reveal" data-act="missed">Refazer erros anteriores (' + missed.length + ")</button>" : "") +
                "</div>" +
                '<p class="practice-last"><a class="lesson-link" href="n5-progress.html">Ver meu desempenho →</a></p>' +
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

    function startWeak() {
        var ids = window.Stats.compute(attemptsDoc(), bank).weakIds.filter(playable).slice(0, settings.count || 10);
        if (!ids.length) return renderSetup();
        startRun(QB.shuffle(ids, newSeed()), "pontos fracos");
    }

    function startMissed() {
        var ids = Attempts.missedIds(attemptsDoc()).filter(function (id) { return bank.get(id) && playable(id); }).slice(0, 20);
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
                (q.speak ? QV.listenHtml(q) : "") +
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

        var filled = q.sentence ? q.sentence.replace("＿＿", q.options[q.answer]) : (q.heard || null);
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
            return QV.reviewItem(bank.get(it.id), it.chosen, { open: true });
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
            case "weak": startWeak(); break;
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

    // O aparelho só diz se tem voz japonesa depois de carregar as vozes: refaz o início se mudar.
    new MutationObserver(function () { if (view === "setup") renderSetup(); })
        .observe(document.documentElement, { attributes: true, attributeFilter: ["data-speech"] });

    if (/[?&]weak=1/.test(location.search) && window.Stats && window.Stats.compute(attemptsDoc(), bank).weakIds.filter(playable).length) startWeak();
    else renderSetup();
})();
