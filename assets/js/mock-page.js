/*
 * Página de simulados do JLPT.
 *
 * Fluxo: início (opções, simulado em andamento e histórico) -> prova (sem correção até o fim,
 * com cronômetro opcional e navegação livre) -> resultado com nota estimada e correção explicada.
 * O simulado em andamento fica no Store ("mockdraft"): dá para fechar a página e continuar.
 * Ao terminar, grava-se uma tentativa "mock" em "attempts" (só ids e respostas); a correção do
 * histórico é remontada do banco, então melhora junto com as explicações.
 */
(function () {
    "use strict";

    var root = document.getElementById("mock-root");
    var QB = window.QuestionBank, Mock = window.Mock, Attempts = window.Attempts, QV = window.QuizView;
    var level = document.body.dataset.level || "N5";
    var bank = QB.create({ verbs: window.JLPT_N5_VERBS, kanji: window.JLPT_N5_KANJI, grammar: window.JLPT_N5_QUESTIONS, exam: window.JLPT_N5_EXAM });
    var esc = QV.esc, rubyText = QV.rubyText;
    function T(key, vars) { return window.I18n ? window.I18n.t(key, vars) : key; }
    var L = function (v) { return window.I18n ? window.I18n.localize(v, window.I18n.lang()) : v; };
    var BLUEPRINT = L(Mock.BLUEPRINT), REAL = L(Mock.REAL), SIZES = L(Mock.SIZES), TOPICS = L(bank.topics);
    QV.setKnown((window.JLPT_N5_KANJI || []).map(function (e) { return e.k; }).join(""));

    var topicLabel = {}, realTopic = {};
    TOPICS.forEach(function (t) { topicLabel[t.id] = t.label; realTopic[t.id] = Boolean(t.real); });

    var settings = { format: "real", parts: ["moji", "bunpo", "choukai"], furigana: false, size: "full", timed: true, listening: true };
    var exam = null;        // simulado em andamento (rascunho)
    var cur = 0;            // questão exibida
    var view = "home";
    var timerId = null;
    var review = null;      // { attempt, summary, fresh, filter }

    /* ---------- Store ---------- */

    function store() { return window.Store || null; }
    function attemptsDoc() { return store() ? store().peek("attempts") : null; }
    function draftOnDisk() {
        var d = store() ? store().peek("mockdraft") : null;
        return d && d.active ? d : null;
    }
    function saveDraft() { if (store() && exam) { try { store().set("mockdraft", exam); } catch (e) { /* sem armazenamento */ } } }
    function clearDraft() { if (store()) { try { store().set("mockdraft", { active: false }); } catch (e) { /* sem armazenamento */ } } }
    function speechOff() { return document.documentElement.dataset.speech === "off"; }
    function newSeed() { return (Date.now() % 4294967295) + 1; }
    function pct(a, b) { return b ? Math.round((a / b) * 100) : 0; }
    function fmtDate(iso) { return new Date(iso).toLocaleDateString((window.I18n ? window.I18n.t("lang.locale") : "pt-BR")) + " " + new Date(iso).toLocaleTimeString((window.I18n ? window.I18n.t("lang.locale") : "pt-BR"), { hour: "2-digit", minute: "2-digit" }); }
    function fmtDuration(sec) { var m = Math.floor(sec / 60), s = sec % 60; return m + " min " + (s < 10 ? "0" : "") + s + " s"; }

    /* ---------- Início ---------- */

    function renderHome() {
        view = "home";
        stopTimer();
        var draft = draftOnDisk();
        var history = Attempts.list(attemptsDoc()).filter(function (a) { return a.kind === "mock"; });

        var sizes = Object.keys(SIZES).map(function (id) {
            var info = SIZES[id];
            return '<label class="seg"><input type="radio" name="size" value="' + id + '"' + (settings.size === id ? " checked" : "") + '><span id="size-label-' + id + '">' +
                info.label + " (" + Mock.totalFor(id, listeningOn()) + ")</span></label>";
        }).join("");

        var resume = "";
        if (draft) {
            var answered = draft.answers.filter(function (a) { return a !== null; }).length;
            var left = Mock.remainingMs(draft, Date.now());
            resume = '<section class="card practice-setup mock-resume"><h2>' + T("mock.inProgress") + '</h2>' +
                "<p>" + T("mock.answeredOf", { a: answered, n: draft.ids.length }) + (left === null ? "" : " • " + T("mock.left", { t: Mock.formatClock(left) })) + ".</p>" +
                '<div class="practice-actions"><button type="button" class="btn btn-check" data-act="resume">' + T("mock.resume") + '</button>' +
                '<button type="button" class="btn btn-reveal" data-act="discard">' + T("mock.discard") + '</button></div></section>';
        }

        var rows = history.slice(0, 8).map(function (a, i) {
            return '<li class="history-row"><div class="history-main"><strong>' + a.score.correct + " de " + a.score.total + "</strong>" +
                '<span class="history-est">' + (a.score.totalEstimate !== undefined && a.score.totalEstimate !== null
                    ? "≈ " + a.score.totalEstimate + " / 180"
                    : (a.score.knowledge !== undefined && a.score.knowledge !== null ? "≈ " + a.score.knowledge + " / 120" : pct(a.score.correct, a.score.total) + "%")) + "</span></div>" +
                '<div class="history-meta">' + esc(fmtDate(a.startedAt)) + " • " + fmtDuration(a.seconds) + (a.format === "real" ? " • " + T("mock.jlptFormat") : (a.size === "short" ? " • " + T("mock.short") : "")) + "</div>" +
                '<button type="button" class="btn btn-reveal" data-act="review" data-index="' + i + '">' + T("mock.seeReview") + '</button></li>';
        }).join("");

        var formats = [["real", T("mock.fmtReal")], ["quick", T("mock.fmtQuick")]].map(function (f) {
            return '<label class="seg"><input type="radio" name="format" value="' + f[0] + '"' + (settings.format === f[0] ? " checked" : "") + "><span>" + f[1] + "</span></label>";
        }).join("");

        var setup;
        if (settings.format === "real") {
            var parts = REAL.sections.map(function (sec) {
                var usable = sec.ready && !(sec.needsSpeech && speechOff());
                var on = usable && settings.parts.indexOf(sec.id) !== -1;
                return '<label class="topic-check' + (usable ? "" : " is-disabled") + '"><input type="checkbox" name="part" value="' + sec.id + '"' + (on ? " checked" : "") + (usable ? "" : " disabled") + ">" +
                    '<span class="topic-name"><span lang="ja">' + esc(sec.jp) + "</span> <small>" + esc(sec.label) +
                        (!sec.ready ? " (" + T("status.soon").toLowerCase() + ")" : (!usable ? " (" + T("practice.needVoice") + ")" : "")) + "</small></span>" +
                    '<span class="topic-count">' + sec.minutes + " min</span></label>";
            }).join("");
            setup = '<p class="practice-lead">' + T("mock.leadReal") + '</p>' +
                '<fieldset class="practice-field"><legend>' + T("mock.parts") + '</legend>' + parts + "</fieldset>" +
                '<label class="topic-check"><input type="checkbox" id="mock-timed"' + (settings.timed ? " checked" : "") + '><span class="topic-name">' + T("mock.timedReal") + '</span><span class="topic-count" id="mock-minutes"></span></label>' +
                '<label class="topic-check"><input type="checkbox" id="mock-furigana"' + (settings.furigana ? " checked" : "") + '><span class="topic-name">' + T("mock.furiganaHelp") + '</span></label>' +
                '<ul class="mock-facts"><li>' + T("mock.factFaithful") + "</li>" +
                "<li>" + T("mock.factScoreReal") + "</li></ul>";
        } else {
            setup = '<p class="practice-lead">' + T("mock.leadQuick") + '</p>' +
                '<ul class="mock-facts"><li><strong>' + T("mock.sections") + ':</strong> ' + BLUEPRINT.map(function (sec) { return rubyText(sec.jp) + " (" + esc(sec.label.toLowerCase()) + ")"; }).join(" " + T("mock.and") + " ") + ".</li>" +
                "<li>" + T("mock.factListening") + "</li>" +
                "<li>" + T("mock.factScoreQuick") + "</li></ul>" +
                '<fieldset class="practice-field"><legend>' + T("mock.size") + '</legend><div class="segmented" role="group">' + sizes + "</div></fieldset>" +
                '<label class="topic-check"><input type="checkbox" id="mock-timed"' + (settings.timed ? " checked" : "") + '><span class="topic-name">' + T("mock.timed") + '</span><span class="topic-count" id="mock-minutes"></span></label>' +
                '<label class="topic-check' + (speechOff() ? " is-disabled" : "") + '"><input type="checkbox" id="mock-listening"' + (listeningOn() ? " checked" : "") + (speechOff() ? " disabled" : "") + '><span class="topic-name">' + T("mock.includeListening") +
                    (speechOff() ? ' <small>(' + T("practice.needVoice") + ')</small>' : "") + "</span></label>";
        }

        root.innerHTML = resume +
            '<section class="card practice-setup">' +
                "<h2>" + T("mock.title", { level: level }) + "</h2>" +
                '<fieldset class="practice-field"><legend>' + T("mock.type") + '</legend><div class="segmented" role="group">' + formats + "</div></fieldset>" +
                setup +
                '<div class="practice-actions"><button type="button" class="btn btn-check" data-act="start">' + T("mock.start") + '</button></div>' +
            "</section>" +
            (rows ? '<section class="card practice-setup"><h2>' + T("mock.yours") + '</h2><ul class="history-list">' + rows + "</ul></section>" : "");
        updateMinutes();
    }

    function listeningOn() { return settings.listening && !speechOff(); }

    // Partes da prova real que valem agora: a escuta precisa de voz em japonês no aparelho.
    function activeParts() {
        var parts = settings.parts.filter(function (id) {
            var sec = REAL.sections.filter(function (s) { return s.id === id; })[0];
            return sec && sec.ready && !(sec.needsSpeech && speechOff());
        });
        return parts.length ? parts : ["moji"];
    }

    function updateMinutes() {
        var el = document.getElementById("mock-minutes");
        if (el) el.textContent = (settings.format === "real" ? Mock.realMinutes(activeParts()) : Mock.minutesFor(settings.size, listeningOn())) + " min";
        Object.keys(SIZES).forEach(function (id) {
            var label = document.getElementById("size-label-" + id);
            if (label) label.textContent = SIZES[id].label + " (" + Mock.totalFor(id, listeningOn()) + ")";
        });
    }

    function readSetup() {
        var format = (root.querySelector('input[name="format"]:checked') || {}).value || settings.format;
        var size = (root.querySelector('input[name="size"]:checked') || {}).value || settings.size;
        var timed = document.getElementById("mock-timed");
        var listening = document.getElementById("mock-listening");
        var furigana = document.getElementById("mock-furigana");
        var parts = Array.prototype.slice.call(root.querySelectorAll('input[name="part"]:checked')).map(function (i) { return i.value; });
        settings = {
            format: format, size: size, timed: timed ? timed.checked : settings.timed,
            listening: listening && !listening.disabled ? listening.checked : settings.listening,
            furigana: furigana ? furigana.checked : settings.furigana,
            parts: root.querySelector('input[name="part"]') ? (parts.length ? parts : settings.parts) : settings.parts
        };
    }

    /* ---------- Prova ---------- */

    function start() {
        readSetup();
        var avoid = Attempts.recentIds(attemptsDoc(), 3);
        var plan = settings.format === "real"
            ? Mock.buildReal(bank, { parts: activeParts(), seed: newSeed(), avoid: avoid })
            : Mock.build(bank, { size: settings.size, seed: newSeed(), avoid: avoid, listening: listeningOn() });
        exam = Mock.newDraft(plan, { timed: settings.timed, furigana: settings.furigana }, Date.now());
        cur = 0;
        saveDraft();
        renderExam();
        startTimer();
        window.scrollTo(0, 0);
    }

    function resume() {
        exam = draftOnDisk();
        if (!exam) return renderHome();
        var left = Mock.remainingMs(exam, Date.now());
        if (left === 0) { finish(true); return; }
        cur = Math.max(0, exam.answers.findIndex(function (a) { return a === null; }));
        renderExam();
        startTimer();
    }

    function sectionLabel(q) {
        var id = Mock.sectionOf(q.topic);
        var real = Mock.realMondaiOf(q.topic);
        if (real) return real.section.jp;
        var sec = BLUEPRINT.filter(function (s) { return s.id === id; })[0];
        return sec ? sec.label : "";
    }

    // Cabeçalho do mondai (como na prova): "もんだい 1" + enunciado em japonês + tradução recolhida.
    function mondaiHtml(q) {
        var real = Mock.realMondaiOf(q.topic);
        if (!real) return "";
        var m = real.mondai;
        return '<div class="exam-mondai"><div class="exam-mondai-no" lang="ja">もんだい ' + m.no + "</div>" +
            '<p class="exam-instr" lang="ja">' + QV.examInstruction(m) + "</p>" +
            '<details class="exam-trans"><summary>' + T("mock.translation") + '</summary><p>' + esc(L(m).pt) + "</p></details></div>";
    }

    // Nas questões só de áudio (もんだい 3 e 4) o texto das alternativas fica escondido, como na prova.
    function optionHtml(q, o) {
        if (q.hideOptions && !exam.showText) return '<span class="opt-hidden">' + T("mock.audioOnly") + '</span>';
        return q.exam ? QV.examText(o, exam.furigana) : rubyText(o);
    }

    function renderExam() {
        view = "exam";
        var q = bank.get(exam.ids[cur]);
        var total = exam.ids.length;
        var answered = exam.answers.filter(function (a) { return a !== null; }).length;

        var nav = exam.ids.map(function (id, i) {
            var cls = "nav-dot" + (exam.answers[i] !== null ? " answered" : "") + (i === cur ? " current" : "");
            return '<button type="button" class="' + cls + '" data-goto="' + i + '" aria-label="' + T("mock.goTo", { n: i + 1 }) +
                (exam.answers[i] !== null ? " (" + T("mock.answered1") + ")" : "") + '"' + (i === cur ? ' aria-current="true"' : "") + ">" + (i + 1) + "</button>";
        }).join("");

        root.innerHTML =
            '<section class="card practice-card mock-exam">' +
                '<div class="practice-top"><span lang="ja">' + esc(sectionLabel(q)) + '</span><span class="mock-timer" id="mock-timer" role="timer"></span></div>' +
                '<div class="practice-bar" aria-hidden="true"><span style="width:' + pct(answered, total) + '%"></span></div>' +
                '<p class="mock-count">' + T("mock.questionOf", { i: cur + 1, n: total }) + " • " + T(answered === 1 ? "mock.answeredN1" : "mock.answeredN", { a: answered }) + "</p>" +
                (q.exam ? mondaiHtml(q) : "") +
                (q.scene ? '<div class="exam-scene" role="img" aria-label="' + T("mock.figure") + '">' + q.scene + "</div>" : "") +
                (q.glyph ? '<div class="quiz-glyph" lang="ja">' + esc(q.glyph) + "</div>" : "") +
                (q.prompt ? '<p class="practice-prompt">' + rubyText(q.prompt) + "</p>" : "") +
                (q.speak ? QV.listenHtml(q) : "") +
                (q.exam ? QV.examPassageHtml(q, exam.furigana) + (q.sentence ? '<div class="practice-sentence exam-sentence" lang="ja">' + QV.examSentenceHtml(q, exam.furigana) + "</div>" : "")
                    : (q.sentence ? '<div class="practice-sentence" lang="ja">' + QV.sentenceHtml(q, null) + "</div>" : "")) +
                (q.hint ? '<div class="pt-line practice-hint">' + T("tr.flag") + ' ' + esc(q.hint) + "</div>" : "") +
                '<div class="quiz-options">' + q.options.map(function (o, i) {
                    var on = exam.answers[cur] === i;
                    return '<button type="button" class="quiz-option' + (on ? " selected" : "") + '" data-option="' + i + '" aria-pressed="' + on + '" lang="ja">' +
                        '<span class="opt-key" aria-hidden="true">' + (i + 1) + "</span>" + optionHtml(q, o) + "</button>";
                }).join("") + "</div>" +
                '<div class="mock-nav-row">' +
                    '<button type="button" class="btn btn-reveal" data-act="prev"' + (cur === 0 ? " disabled" : "") + ">← " + T("mock.prev") + "</button>" +
                    '<button type="button" class="btn btn-reveal" data-act="next"' + (cur === total - 1 ? " disabled" : "") + ">" + T("kanji.next2") + " →</button>" +
                "</div>" +
            "</section>" +
            '<section class="card practice-card mock-map"><h3 class="practice-sub">' + T("mock.questions") + '</h3><div class="nav-grid">' + nav + "</div>" +
                '<div class="practice-actions"><button type="button" class="btn btn-check" data-act="finish">' + T("mock.finish") + '</button>' +
                (exam.format === "real" && exam.parts.indexOf("choukai") !== -1 ? '<button type="button" class="btn btn-reveal" data-act="showtext" aria-pressed="' + Boolean(exam.showText) + '">' + (exam.showText ? T("mock.hideText") : T("mock.showText")) + "</button>" : "") +
                (exam.format === "real" ? '<button type="button" class="btn btn-reveal" data-act="furigana" aria-pressed="' + Boolean(exam.furigana) + '">' + (exam.furigana ? T("mock.hideFurigana") : T("mock.showFurigana")) + "</button>" : "") +
                '<button type="button" class="btn btn-reveal" data-act="pause">' + T("mock.pause") + '</button></div></section>';
        tick();
    }

    function select(i) {
        if (view !== "exam") return;
        exam = Mock.setAnswer(exam, cur, exam.answers[cur] === i ? null : i);
        saveDraft();
        renderExam();
    }

    function go(i) {
        if (i < 0 || i >= exam.ids.length) return;
        cur = i;
        renderExam();
        window.scrollTo(0, 0);
    }

    /* ---------- Cronômetro ---------- */

    function tick() {
        var el = document.getElementById("mock-timer");
        if (!el || !exam) return;
        var left = Mock.remainingMs(exam, Date.now());
        if (left === null) { el.textContent = T("mock.noTimer"); return; }
        el.textContent = "⏱ " + Mock.formatClock(left);
        el.classList.toggle("low", left <= 5 * 60000);
        if (left === 0) finish(true);
    }

    function startTimer() { stopTimer(); timerId = setInterval(tick, 1000); }
    function stopTimer() { if (timerId) { clearInterval(timerId); timerId = null; } }

    /* ---------- Fim e resultado ---------- */

    function finish(timeUp) {
        if (view !== "exam" && !timeUp) return;
        var blanks = exam.answers.filter(function (a) { return a === null; }).length;
        if (!timeUp && blanks && !window.confirm(T("mock.confirmBlank", { n: blanks }))) return;
        if (!timeUp && !blanks && !window.confirm(T("mock.confirmFinish"))) return;
        stopTimer();

        var items = exam.ids.map(function (id, i) { return { id: id, chosen: exam.answers[i] }; });
        var summary = Mock.summarize(bank, items);
        var started = new Date(exam.startedAt).getTime();
        var elapsed = Math.round((Math.min(Date.now(), exam.deadline || Infinity) - started) / 1000);
        var attempt = {
            id: exam.id, kind: "mock", level: level, startedAt: exam.startedAt, seconds: Math.max(0, elapsed),
            size: exam.size, seed: exam.seed,
            items: summary.items.map(function (it) { return { q: it.id, a: it.chosen, ok: it.ok }; }),
            score: { correct: summary.correct, total: summary.total, knowledge: summary.knowledge, estimated: true,
                     sections: summary.sections }
        };
        if (summary.format === "real") { attempt.format = "real"; attempt.parts = exam.parts; attempt.score.mondai = summary.mondai; }
        if (summary.listening !== null) { attempt.score.listening = summary.listening; attempt.score.totalEstimate = summary.totalEstimate; }
        if (store()) { try { store().set("attempts", Attempts.add(attemptsDoc(), attempt)); } catch (e) { /* segue sem salvar */ } }
        clearDraft();
        exam = null;
        showResult(attempt, true, timeUp);
    }

    function showResult(attempt, fresh, timeUp) {
        var items = attempt.items.map(function (it) { return { id: it.q, chosen: it.a }; });
        var summary = Mock.summarize(bank, items);
        review = { attempt: attempt, summary: summary, fresh: fresh, timeUp: Boolean(timeUp), filter: summary.correct < summary.total ? "wrong" : "all" };
        renderResult();
        window.scrollTo(0, 0);
    }

    function bar(correct, total) {
        return '<div class="score-bar" role="img" aria-label="' + correct + ' de ' + total + '"><span style="width:' + pct(correct, total) + '%"></span></div>';
    }

    // Prova real com poucas partes: sem nota estimada (ela exige língua, leitura e escuta).
    function partialHtml() {
        return '<div class="mock-estimate"><p class="estimate-note">' + T("mock.partial") + "</p></div>";
    }

    function estimateHtml(v) {
        if (v.partial) return partialHtml();
        var intro = v.hasListening
            ? '<div class="estimate-grid"><div><div class="estimate-num">≈ ' + v.knowledge + " <span>/ " + Mock.OFFICIAL.knowledgeMax + '</span></div><div class="estimate-label">' + T("mock.knowledge") + '</div></div>' +
                '<div><div class="estimate-num">≈ ' + v.listening + " <span>/ " + Mock.OFFICIAL.listeningMax + '</span></div><div class="estimate-label">' + T("mock.listening") + '</div></div>' +
                '<div><div class="estimate-num">≈ ' + v.total + " <span>/ " + Mock.OFFICIAL.total + '</span></div><div class="estimate-label">' + T("mock.total") + '</div></div></div>'
            : '<div class="estimate-num">≈ ' + v.knowledge + " <span>/ " + Mock.OFFICIAL.knowledgeMax + '</span></div><div class="estimate-label">' + T("mock.estKnowledge") + '</div>';
        var verdict;
        if (v.hasListening) {
            verdict = (v.passEstimate
                ? T("mock.verdictPass", { min: v.min, lmin: v.listeningMin, pass: v.passMin }) + " "
                : T("mock.verdictFail", { min: v.min, lmin: v.listeningMin, pass: v.passMin, total: Mock.OFFICIAL.total }) + " ");
        } else {
            verdict = T(v.aboveMin ? "mock.above" : "mock.below", { min: v.min }) + " " +
                T("mock.officialNeeds", { lmin: v.listeningMin, pass: v.passMin, total: Mock.OFFICIAL.total }) + " ";
        }
        return '<div class="mock-estimate">' + intro + '<p class="estimate-note">' + verdict +
            (v.hasListening ? T("mock.estNoteListening") : T("mock.estNote")) + "</p></div>";
    }

    function renderResult() {
        view = "result";
        var a = review.attempt, s = review.summary, v = Mock.verdict(s);
        var wrong = s.items.filter(function (it) { return it.chosen !== null && !it.ok; }).length;
        var counts = { all: s.total, wrong: wrong, blank: s.blank, right: s.correct };
        var FILTERS = [["wrong", T("review.wrong")], ["blank", T("review.blank")], ["right", T("review.right")], ["all", T("review.all")]];

        var sections = BLUEPRINT.concat(REAL.sections).filter(function (sec) { return s.sections[sec.id].total > 0; }).map(function (sec) {
            var st = s.sections[sec.id];
            return '<div class="score-row"><div class="score-label"><span lang="ja">' + rubyText(sec.jp) + "</span> <span>" + esc(sec.label) + '</span></div>' +
                bar(st.correct, st.total) + '<div class="score-num">' + st.correct + "/" + st.total + "</div></div>";
        }).join("");

        var mondaiRows = s.format === "real" ? REAL.sections.reduce(function (all, sec) { return all.concat(sec.mondai); }, [])
            .filter(function (m) { return s.mondai[m.id] && s.mondai[m.id].total > 0; }).map(function (m) {
                var st = s.mondai[m.id];
                return '<div class="score-row"><div class="score-label"><span lang="ja">もんだい ' + m.no + " " + esc(m.name) + "</span></div>" +
                    bar(st.correct, st.total) + '<div class="score-num">' + st.correct + "/" + st.total + "</div></div>";
            }).join("") : "";

        var topics = Object.keys(s.topics).sort(function (x, y) {
            return pct(s.topics[x].correct, s.topics[x].total) - pct(s.topics[y].correct, s.topics[y].total);
        }).map(function (t) {
            var st = s.topics[t], p = pct(st.correct, st.total);
            return '<div class="score-row"><div class="score-label">' + esc(topicLabel[t] || t) +
                (p < 70 && !realTopic[t] ? ' <a class="topic-train" href="n5-practice.html?topics=' + encodeURIComponent(t) + '">' + T("mock.train") + '</a>' : "") + "</div>" +
                bar(st.correct, st.total) + '<div class="score-num">' + st.correct + "/" + st.total + "</div></div>";
        }).join("");

        var list = s.items.filter(function (it) {
            var st = QV.statusOf(bank.get(it.id), it.chosen);
            return review.filter === "all" || (review.filter === "wrong" && st === "bad") || (review.filter === "blank" && st === "blank") || (review.filter === "right" && st === "ok");
        });
        var numberOf = {};
        s.items.forEach(function (it, i) { numberOf[it.id] = i + 1; });

        root.innerHTML =
            '<section class="card practice-card">' +
                (review.timeUp ? '<p class="mock-timeup" role="status">' + T("mock.timeUp") + "</p>" : "") +
                '<div class="quiz-score">' + s.correct + " / " + s.total + "</div>" +
                '<p class="practice-prompt">' + T("mock.pctCorrect", { p: pct(s.correct, s.total) }) + " • " + fmtDuration(a.seconds) + "</p>" +
                estimateHtml(v) +
                '<h3 class="practice-sub">' + T("mock.bySection") + '</h3>' + sections +
                (mondaiRows ? '<h3 class="practice-sub">' + T("mock.byMondai") + '</h3>' + mondaiRows : '<h3 class="practice-sub">' + T("mock.byTopic") + '</h3>' + topics) +
            "</section>" +
            '<section class="card practice-card"><h3 class="practice-sub">' + T("mock.review") + '</h3>' +
                '<div class="kanji-chips review-filters" role="group" aria-label="' + T("mock.filter") + '">' + FILTERS.map(function (f) {
                    return '<button type="button" class="chip' + (review.filter === f[0] ? " active" : "") + '" data-filter="' + f[0] + '" aria-pressed="' + (review.filter === f[0]) + '">' + f[1] + " (" + counts[f[0]] + ")</button>";
                }).join("") + "</div>" +
                (list.length ? '<div class="verb-list">' + list.map(function (it) {
                    return QV.reviewItem(bank.get(it.id), it.chosen, { number: numberOf[it.id] });
                }).join("") + "</div>" : '<p class="practice-prompt">' + T("mock.emptyList") + '</p>') +
                '<div class="practice-actions"><button type="button" class="btn btn-check" data-act="home">' + (review.fresh ? T("mock.newMock") : T("mock.backBtn")) + "</button></div>" +
            "</section>";
    }

    /* ---------- Eventos ---------- */

    root.addEventListener("click", function (e) {
        var opt = e.target.closest("[data-option]");
        if (opt) { select(Number(opt.dataset.option)); return; }
        var dot = e.target.closest("[data-goto]");
        if (dot) { go(Number(dot.dataset.goto)); return; }
        var f = e.target.closest("[data-filter]");
        if (f) { review.filter = f.dataset.filter; renderResult(); return; }
        var btn = e.target.closest("[data-act]");
        if (!btn) return;
        switch (btn.dataset.act) {
            case "start": start(); break;
            case "resume": resume(); break;
            case "discard": if (window.confirm(T("mock.confirmDiscard"))) { clearDraft(); renderHome(); } break;
            case "prev": go(cur - 1); break;
            case "next": go(cur + 1); break;
            case "finish": finish(false); break;
            case "pause": stopTimer(); renderHome(); break;
            case "showtext": exam.showText = !exam.showText; saveDraft(); renderExam(); break;
            case "furigana": exam.furigana = !exam.furigana; saveDraft(); renderExam(); break;
            case "review": {
                var mocks = Attempts.list(attemptsDoc()).filter(function (x) { return x.kind === "mock"; });
                showResult(mocks[Number(btn.dataset.index)], false, false);
                break;
            }
            case "home": renderHome(); window.scrollTo(0, 0); break;
        }
    });

    root.addEventListener("change", function (e) {
        if (e.target.name === "format") { readSetup(); renderHome(); }
        else if (e.target.name === "size" || e.target.name === "part" || e.target.id === "mock-timed" || e.target.id === "mock-listening" || e.target.id === "mock-furigana") { readSetup(); updateMinutes(); }
    });

    document.addEventListener("keydown", function (e) {
        if (view !== "exam" || e.ctrlKey || e.metaKey || e.altKey) return;
        var n = Number(e.key);
        var q = bank.get(exam.ids[cur]);
        if (n >= 1 && n <= q.options.length) select(n - 1);
        else if (e.key === "ArrowRight") go(cur + 1);
        else if (e.key === "ArrowLeft") go(cur - 1);
    });

    // Sair da página no meio da prova: a resposta já está salva a cada clique; o aviso evita fechar sem querer.
    window.addEventListener("beforeunload", function (e) {
        if (view === "exam") { e.preventDefault(); e.returnValue = ""; }
    });

    // O aparelho só informa se há voz japonesa depois de carregar as vozes: refaz o início se mudar.
    new MutationObserver(function () { if (view === "home") renderHome(); })
        .observe(document.documentElement, { attributes: true, attributeFilter: ["data-speech"] });

    // Simulado cujo tempo acabou com a página fechada: corrige ao abrir.
    (function init() {
        var d = draftOnDisk();
        if (d && Mock.remainingMs(d, Date.now()) === 0) { exam = d; view = "exam"; finish(true); return; }
        renderHome();
    })();
})();
