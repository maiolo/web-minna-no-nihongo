/*
 * Motor das lições.
 *
 * Monta a página de uma lição a partir de window.lessonData (arquivo em
 * lessons/data/) e da lista window.LESSONS (assets/js/lessons-index.js).
 * O número da lição vem de <body data-lesson="N">.
 *
 * Abas: cada seção tem uma URL (lesson-17.html#gramatica); o botão voltar do
 * navegador percorre as abas. Teclado: setas, Home e End.
 * Rodapé: "anterior / próxima" percorre as seções e, no fim, passa para a
 * lição vizinha.
 */
(function () {
    "use strict";

    var lessons = window.LESSONS || [];
    var data = window.lessonData;
    var lessonNumber = Number(document.body.dataset.lesson);

    // Rótulo de cada aba (window.SECTION_LABELS, em lessons-index.js).
    // Se um rótulo faltar (por exemplo, lessons-index.js antigo em cache), a aba
    // aparece com o próprio nome da seção em vez de quebrar a página.
    var LABELS = new Proxy(window.SECTION_LABELS || {}, {
        get: function (labels, id) { return labels[id] || { jp: String(id), pt: String(id) }; }
    });
    var P = window.Progress;

    // Ordem fixa das abas; seções ausentes nos dados são omitidas.
    var SECTION_ORDER = ["vocab", "bunkei", "gramatica", "renshuuA", "renshuuB", "renshuuC", "mondai", "montar"];
    var EXERCISE_SECTIONS = ["renshuuA", "renshuuB", "renshuuC", "mondai", "montar"];
    var E = window.Exercises;

    var sections = [];
    var currentTab = null;

    function lessonIndex() {
        return lessons.findIndex(function (l) { return l.number === lessonNumber; });
    }

    function prefersReducedMotion() {
        return window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    }

    /* ---------- Cabeçalho ---------- */

    function renderHeader() {
        var current = lessons[lessonIndex()];
        window.SiteHeader.render(document.getElementById("lesson-header"), {
            stamp: String(lessonNumber),
            title: current ? current.topic : window.lessonLabel(lessonNumber),
            back: { href: "../index.html#licoes", label: "Voltar às lições" },
            crumbs: [
                { label: "Início", href: "../index.html" },
                { label: "Lições", href: "../index.html#licoes" },
                { label: window.lessonLabel(lessonNumber) }
            ]
        });
    }

    /* ---------- Abas ---------- */

    function availableSections() {
        return SECTION_ORDER.filter(function (id) { return Boolean(data[id]); });
    }

    function renderNav() {
        var nav = document.getElementById("main-nav");
        nav.setAttribute("role", "tablist");
        nav.setAttribute("aria-label", "Seções da lição");
        nav.innerHTML = sections.map(function (id) {
            return '<button type="button" role="tab" class="tab-btn" id="tab-' + id + '" data-tab="' + id + '" ' +
                'aria-controls="sec-' + id + '" aria-selected="false" tabindex="-1">' +
                '<span class="tab-jp">' + LABELS[id].jp + "</span>" +
                '<span class="tab-pt">' + LABELS[id].pt + "</span>" +
                '<span class="tab-mark" aria-hidden="true"></span>' +
                '<span class="sr-only tab-state"></span>' +
            "</button>";
        }).join("");
    }

    function markPanels() {
        document.querySelectorAll(".section-container").forEach(function (panel) {
            var id = panel.id.replace(/^sec-/, "");
            panel.setAttribute("role", "tabpanel");
            panel.setAttribute("aria-labelledby", "tab-" + id);
            panel.tabIndex = 0;
        });
    }

    function sectionFromHash() {
        var id = decodeURIComponent(location.hash.replace(/^#/, ""));
        return sections.indexOf(id) !== -1 ? id : null;
    }

    // Mostra a seção. "scroll" leva a página ao topo (troca feita pela pessoa).
    function activate(id, scroll) {
        currentTab = id;
        var nav = document.getElementById("main-nav");

        document.querySelectorAll(".tab-btn").forEach(function (btn) {
            var on = btn.dataset.tab === id;
            btn.classList.toggle("active", on);
            btn.setAttribute("aria-selected", on ? "true" : "false");
            btn.tabIndex = on ? 0 : -1;
            if (on) {
                // Centraliza a aba ativa na barra, que rola na horizontal no celular.
                var left = btn.offsetLeft - (nav.clientWidth - btn.offsetWidth) / 2;
                nav.scrollTo({ left: Math.max(0, left), behavior: prefersReducedMotion() ? "auto" : "smooth" });
            }
        });
        document.querySelectorAll(".section-container").forEach(function (sec) {
            sec.classList.toggle("active", sec.id === "sec-" + id);
        });

        renderPager();
        if (P) { P.visit(lessonNumber, id, sections.length); refreshProgress(); }
        if (scroll) window.scrollTo({ top: 0, behavior: prefersReducedMotion() ? "auto" : "smooth" });
    }

    // Troca de aba pedida pela pessoa: grava a URL (o evento hashchange ativa a aba).
    function go(id) {
        if (id === currentTab) return;
        if (decodeURIComponent(location.hash.replace(/^#/, "")) !== id) location.hash = id;
        else activate(id, true);
    }

    /* ---------- Rodapé: anterior / próxima ---------- */

    function pagerButton(target, side) {
        var arrowLeft = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 5l-7 7 7 7"/></svg>';
        var arrowRight = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 5l7 7-7 7"/></svg>';
        if (!target) return '<span class="pager-btn pager-empty"></span>';
        var inner = side === "prev" ? arrowLeft + target.label : target.label + arrowRight;
        var cls = "pager-btn pager-" + side;
        return target.href
            ? '<a class="' + cls + '" href="' + target.href + '">' + inner + "</a>"
            : '<button type="button" class="' + cls + '" data-go="' + target.id + '">' + inner + "</button>";
    }

    function renderPager() {
        var pager = document.getElementById("lesson-pager");
        if (!pager) {
            pager = document.createElement("nav");
            pager.id = "lesson-pager";
            pager.className = "lesson-pager";
            pager.setAttribute("aria-label", "Navegação da lição");
            document.body.appendChild(pager);
            pager.addEventListener("click", function (e) {
                // Avançar a partir de uma seção de leitura conta como concluí-la.
                if (P && e.target.closest(".pager-next") && CONTENT_SECTIONS.indexOf(currentTab) !== -1) {
                    P.setSection(lessonNumber, currentTab, true);
                }
                var btn = e.target.closest("[data-go]");
                if (btn) go(btn.dataset.go);
            });
        }

        var i = sections.indexOf(currentTab);
        var li = lessonIndex();
        var prevLesson = li > 0 ? lessons[li - 1] : null;
        var nextLesson = li >= 0 && li < lessons.length - 1 ? lessons[li + 1] : null;

        var prev = i > 0
            ? { id: sections[i - 1], label: LABELS[sections[i - 1]].pt }
            : (prevLesson ? { href: prevLesson.file, label: window.lessonLabel(prevLesson.number) } : null);
        var next = i < sections.length - 1
            ? { id: sections[i + 1], label: LABELS[sections[i + 1]].pt }
            : (nextLesson ? { href: nextLesson.file, label: window.lessonLabel(nextLesson.number) } : null);

        var dots = sections.map(function (id, n) {
            return '<span class="pager-dot' + (n === i ? " current" : "") + '"></span>';
        }).join("");

        pager.innerHTML = pagerButton(prev, "prev") +
            '<div class="pager-dots" role="img" aria-label="Seção ' + (i + 1) + " de " + sections.length + '">' + dots + "</div>" +
            pagerButton(next, "next");
    }

    /* ---------- Progresso ---------- */

    var CONTENT_SECTIONS = ["vocab", "bunkei", "gramatica"];
    var STATE_TEXT = { done: " (concluída)", in_progress: " (em andamento)", todo: "" };

    function questionKeys(sectionId) {
        var keys = [];
        data[sectionId].exercises.forEach(function (group, g) {
            group.questions.forEach(function (q, n) { keys.push(sectionId + ":" + g + ":" + n); });
        });
        return keys;
    }

    // Seção de exercícios conclui sozinha quando todas as questões estão certas.
    function syncExerciseSection(id) {
        var total = questionKeys(id).length;
        var done = P.correctCount(lessonNumber, id);
        if (total && done === total && P.sectionStatus(lessonNumber, id) !== "done") P.setSection(lessonNumber, id, true);
        return { done: done, total: total };
    }

    function progressBar(percent, label) {
        return '<div class="progress" role="progressbar" aria-label="' + label + '" aria-valuemin="0" aria-valuemax="100" ' +
            'aria-valuenow="' + percent + '"><span style="width:' + percent + '%"></span></div>';
    }

    function refreshProgress() {
        if (!P) return;
        sections.forEach(function (id) {
            var status = P.sectionStatus(lessonNumber, id);
            var tab = document.getElementById("tab-" + id);
            tab.classList.toggle("done", status === "done");
            tab.classList.toggle("seen", status === "in_progress");
            tab.querySelector(".tab-state").textContent = STATE_TEXT[status];

            if (EXERCISE_SECTIONS.indexOf(id) !== -1) {
                var c = syncExerciseSection(id);
                var holder = document.querySelector("#sec-" + id + " .ex-progress");
                if (holder) {
                    var pct = c.total ? Math.round(c.done / c.total * 100) : 0;
                    var tries = P.attemptCount(lessonNumber, id);
                    holder.innerHTML = progressBar(pct, "Questões corretas") +
                        '<span class="ex-progress-text">' + c.done + " de " + c.total + " corretas" +
                        (tries ? " · " + tries + (tries === 1 ? " tentativa" : " tentativas") : "") + "</span>";
                    var reset = document.querySelector("#sec-" + id + " .ex-reset");
                    if (reset) reset.hidden = !tries;
                }
                document.querySelectorAll("#sec-" + id + " [data-exercise]").forEach(function (box) {
                    var ex = P.get().lessons[lessonNumber];
                    var rec = ex && ex.exercises && ex.exercises[box.dataset.exercise];
                    box.classList.toggle("answered-ok", Boolean(rec && rec.correct));
                });
            } else {
                var btn = document.querySelector("#sec-" + id + " .section-done-btn");
                if (btn) {
                    btn.setAttribute("aria-pressed", status === "done" ? "true" : "false");
                    btn.textContent = status === "done" ? "✓ Seção concluída" : "Marcar como concluída";
                }
            }
        });

        var sum = P.lessonSummary(lessonNumber, sections);
        var bar = document.getElementById("lesson-progress");
        if (bar) {
            bar.setAttribute("aria-valuenow", sum.percent);
            bar.firstElementChild.style.width = sum.percent + "%";
        }
    }

    function kanaOn() {
        var prefs = window.Store && window.Store.peek("prefs");
        return !(prefs && prefs.kanaInput === "off");
    }

    function exTools(id) {
        var kana = id === "montar" ? "" :
            '<button type="button" class="btn btn-toggle kana-toggle" data-action="kana-toggle" aria-pressed="true">' +
            "あ Digitar em romaji</button>";
        return '<div class="ex-tools">' + kana +
            '<button type="button" class="btn btn-reveal ex-reset" data-action="reset-section" hidden>↺ Refazer seção</button></div>';
    }

    function refreshKanaToggle() {
        var on = kanaOn();
        document.querySelectorAll(".kana-toggle").forEach(function (btn) {
            btn.setAttribute("aria-pressed", on ? "true" : "false");
            btn.title = on ? "Letras do alfabeto viram hiragana enquanto você digita (ex.: kaku → かく)" : "Digitação normal";
        });
        document.querySelectorAll("#main-container .input-text").forEach(function (input) {
            input.placeholder = on ? "romaji → かな (ou 答えを入力...)" : "答えを入力...";
        });
    }

    function addProgressUi() {
        if (!P) return;
        var header = document.getElementById("lesson-header");
        header.insertAdjacentHTML("beforeend",
            '<div class="topbar-progress"><div id="lesson-progress" class="progress thin" role="progressbar" ' +
            'aria-label="Progresso da lição" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0"><span></span></div></div>');
        sections.forEach(function (id) {
            var panel = document.getElementById("sec-" + id);
            if (CONTENT_SECTIONS.indexOf(id) !== -1) {
                panel.insertAdjacentHTML("beforeend",
                    '<div class="section-done"><button type="button" class="btn btn-toggle section-done-btn" ' +
                    'data-action="section-done" aria-pressed="false">Marcar como concluída</button></div>');
            } else {
                var head = panel.querySelector(".card-header");
                if (head) head.insertAdjacentHTML("afterend", '<div class="ex-progress"></div>' + exTools(id));
            }
        });
        P.subscribe(refreshProgress);
        refreshKanaToggle();
    }

    /* ---------- Seções ---------- */

    function textBlock(item, jpClass) {
        return '<div class="item-box">' +
            '<div class="' + jpClass + '">' + item.jp + "</div>" +
            '<div class="romaji">' + item.romaji + "</div>" +
            '<div class="pt-line">🇧🇷 ' + item.pt + "</div>" +
        "</div>";
    }

    function renderVocab() {
        return '<div id="sec-vocab" class="section-container card">' +
            '<h2 class="card-header">' + data.vocab.title + "</h2>" +
            '<div class="vocab-grid">' +
                data.vocab.items.map(function (v) { return textBlock(v, "jp-term"); }).join("") +
            "</div>" +
        "</div>";
    }

    function renderBunkei() {
        var patterns = data.bunkei.patterns;
        var examples = data.bunkei.examples;
        return '<div id="sec-bunkei" class="section-container">' +
            '<div class="card">' +
                '<h2 class="card-header">' + patterns.title + "</h2>" +
                patterns.items.map(function (b) { return textBlock(b, "jp-pattern"); }).join("") +
            "</div>" +
            '<div class="card">' +
                '<h2 class="card-header">' + examples.title + "</h2>" +
                examples.items.map(function (r) { return textBlock(r, "jp-example"); }).join("") +
            "</div>" +
        "</div>";
    }

    function renderGramatica() {
        return '<div id="sec-gramatica" class="section-container">' + data.gramatica.content + "</div>";
    }

    function renderExercises(sectionId) {
        var section = data[sectionId];
        var html = '<div id="sec-' + sectionId + '" class="section-container">' +
            '<div class="card">' +
                '<h2 class="card-header">' + section.title + "</h2>";

        section.exercises.forEach(function (group, groupIdx) {
            html += '<h3 class="exercise-group-title">' + group.desc + "</h3>";
            group.questions.forEach(function (q, qIdx) {
                html += '<div class="item-box" data-exercise="' + sectionId + ":" + groupIdx + ":" + qIdx + '">' +
                    '<div class="exercise-prompt">' + q.q + "</div>" +
                    '<div class="exercise-controls">' +
                        '<input type="text" class="input-text" autocomplete="off" autocapitalize="off" ' +
                            'placeholder="答えを入力...">' +
                        '<button type="button" class="btn btn-check" data-action="check">' +
                            "✅ Verificar (<ruby>確認<rt>かくにん</rt></ruby>)</button>" +
                        '<button type="button" class="btn btn-reveal" data-action="reveal">' +
                            "💡 Revelar (<ruby>答<rt>こた</rt></ruby>え)</button>" +
                    "</div>" +
                    '<div class="feedback-box"></div>' +
                    '<div class="answer-box">' +
                        '<div class="answer-correct"><ruby>正解<rt>せいかい</rt></ruby>: ' + q.a + "</div>" +
                        '<div class="romaji">' + q.romaji + "</div>" +
                        '<div class="answer-translation">Tradução: ' + q.pt + "</div>" +
                    "</div>" +
                "</div>";
            });
        });

        return html + "</div></div>";
    }

    // "Montar a frase": palavras embaralhadas para tocar na ordem certa.
    function renderMontar(sectionId) {
        var section = data[sectionId];
        var html = '<div id="sec-' + sectionId + '" class="section-container"><div class="card">' +
            '<h2 class="card-header">' + section.title + "</h2>";
        section.exercises.forEach(function (group, g) {
            html += '<h3 class="exercise-group-title">' + group.desc + "</h3>";
            group.questions.forEach(function (q, n) {
                var order = E.shuffleSeeded(q.tokens.map(function (t, i) { return i; }), (g + 1) * 100 + n + lessonNumber);
                html += '<div class="item-box" data-exercise="' + sectionId + ":" + g + ":" + n + '" data-kind="assemble">' +
                    '<div class="exercise-prompt">' + q.pt + "</div>" +
                    '<div class="assemble-answer" aria-label="Sua frase" aria-live="polite"></div>' +
                    '<div class="assemble-bank" aria-label="Palavras disponíveis">' +
                        order.map(function (i) {
                            return '<button type="button" class="word-chip" data-i="' + i + '">' + q.tokens[i] + "</button>";
                        }).join("") +
                    "</div>" +
                    '<div class="exercise-controls">' +
                        '<button type="button" class="btn btn-check" data-action="check">✅ Verificar (<ruby>確認<rt>かくにん</rt></ruby>)</button>' +
                        '<button type="button" class="btn btn-reveal" data-action="retry">↺ Limpar</button>' +
                        '<button type="button" class="btn btn-reveal" data-action="reveal">💡 Revelar (<ruby>答<rt>こた</rt></ruby>え)</button>' +
                    "</div>" +
                    '<div class="feedback-box"></div>' +
                    '<div class="answer-box">' +
                        '<div class="answer-correct"><ruby>正解<rt>せいかい</rt></ruby>: ' + q.tokens.join("") + "</div>" +
                        '<div class="romaji">' + q.romaji + "</div>" +
                    "</div>" +
                "</div>";
            });
        });
        return html + "</div></div>";
    }

    function renderSections() {
        var html = "";
        sections.forEach(function (id) {
            if (id === "vocab") html += renderVocab();
            else if (id === "bunkei") html += renderBunkei();
            else if (id === "gramatica") html += renderGramatica();
            else if (id === "montar") html += renderMontar(id);
            else if (EXERCISE_SECTIONS.indexOf(id) !== -1) html += renderExercises(id);
        });
        document.getElementById("main-container").innerHTML = html;
        wrapTables();
        markPanels();
    }

    // Tabelas largas rolam na horizontal dentro de um contêiner focável, em
    // vez de estourar a tela do celular.
    function wrapTables() {
        document.querySelectorAll("#main-container table").forEach(function (table) {
            var wrapper = document.createElement("div");
            wrapper.className = "table-scroll";
            wrapper.tabIndex = 0;
            wrapper.setAttribute("role", "region");
            wrapper.setAttribute("aria-label", "Tabela (role para ver tudo)");
            table.parentNode.insertBefore(wrapper, table);
            wrapper.appendChild(table);
        });
    }

    /* ---------- Exercícios ---------- */

    // Remove o furigana (<rt>) e devolve só o texto base da resposta.
    function extractBaseText(html) {
        var tmp = document.createElement("div");
        tmp.innerHTML = html;
        tmp.querySelectorAll("rt").forEach(function (rt) { rt.remove(); });
        return tmp.textContent || "";
    }

    // Ignora espaços e pontuação ao comparar.
    function normalize(str) {
        return str.replace(/[\s　、。！？,!?]/g, "");
    }

    function findQuestion(box) {
        var parts = box.dataset.exercise.split(":");
        return data[parts[0]].exercises[Number(parts[1])].questions[Number(parts[2])];
    }

    function say(feedback, ok, nodes) {
        feedback.className = "feedback-box " + (ok ? "feedback-correct" : "feedback-incorrect");
        feedback.textContent = "";
        nodes.forEach(function (n) { feedback.appendChild(typeof n === "string" ? document.createTextNode(n) : n); });
    }

    function el(tag, cls, text) {
        var n = document.createElement(tag);
        if (cls) n.className = cls;
        if (text !== undefined) n.textContent = text;
        return n;
    }

    function html(markup) {
        var n = document.createElement("span");
        n.innerHTML = markup;
        return n;
    }

    function retryButton() {
        var b = el("button", "btn btn-reveal feedback-retry", "↺ Tentar de novo");
        b.type = "button";
        b.dataset.action = "retry";
        return b;
    }

    // Linha com os caracteres da diferença: "del" (a mais/errado) ou "ins" (faltou) destacados.
    function diffLine(label, ops, mark) {
        var line = el("div", "diff-line");
        line.appendChild(el("span", "diff-label", label));
        var text = el("span", "diff-text jp");
        ops.forEach(function (o) {
            if (o.t === "same") text.appendChild(document.createTextNode(o.ch));
            else if (o.t === mark) text.appendChild(el("mark", "diff-" + mark, o.ch));
        });
        line.appendChild(text);
        return line;
    }

    function recordAnswer(box, correct) {
        if (P) P.recordAnswer(lessonNumber, box.dataset.exercise.split(":")[0], box.dataset.exercise, correct);
        refreshProgress();
    }

    function checkAnswer(box) {
        if (box.dataset.kind === "assemble") return checkAssemble(box);
        var input = box.querySelector(".input-text");
        var feedback = box.querySelector(".feedback-box");
        if (kanaOn()) input.value = E.finalize(input.value);
        var typed = E.normalize(input.value);
        var answer = findQuestion(box).a;
        var base = E.normalize(E.baseOf(answer));
        var reading = E.normalize(E.toHiragana(E.readingOf(answer)));

        if (!typed) {
            say(feedback, false, [html("⚠️ <ruby>入力<rt>にゅうりょく</rt></ruby>してください。(Por favor, digite a resposta)")]);
            return;
        }
        if (typed === base || E.toHiragana(typed) === reading) {
            var inKana = typed !== base && base !== reading;
            say(feedback, true, [html("⭕ <ruby>正解<rt>せいかい</rt></ruby>です！ (Correto!)")].concat(
                inKana ? [el("div", "feedback-note", "Em kana. Com kanji: " + base)] : []));
            recordAnswer(box, true);
            return;
        }
        // Compara com a forma (kanji ou kana) mais parecida com o que a pessoa digitou.
        var candidates = [base, reading].map(function (c) {
            var ops = E.diff(c === reading ? E.toHiragana(typed) : typed, c);
            return { text: c, ops: ops, cost: ops.filter(function (o) { return o.t !== "same"; }).length };
        });
        // Empate: quem digitou em kana (sem kanji) é comparado com a leitura.
        var hasKanji = /[一-龯]/.test(typed);
        var best = candidates[0].cost < candidates[1].cost || (candidates[0].cost === candidates[1].cost && hasKanji)
            ? candidates[0] : candidates[1];
        var box1 = el("div", "diff");
        box1.appendChild(diffLine("Você digitou", best.ops, "del"));
        box1.appendChild(diffLine("Esperado", best.ops, "ins"));
        say(feedback, false, [html("❌ <ruby>不正解<rt>ふせいかい</rt></ruby>です。(Incorreto)"), box1, retryButton()]);
        recordAnswer(box, false);
    }

    /* ---------- Montar a frase ---------- */

    function chipsOf(container) { return Array.prototype.slice.call(container.querySelectorAll(".word-chip")); }

    function moveChip(chip) {
        var box = chip.closest("[data-exercise]");
        var answer = box.querySelector(".assemble-answer");
        var bank = box.querySelector(".assemble-bank");
        var target = chip.parentNode === bank ? answer : bank;
        target.appendChild(chip);
        chip.classList.remove("wrong", "right");
        chip.focus();
        var fb = box.querySelector(".feedback-box");
        fb.className = "feedback-box";
        fb.textContent = "";
    }

    function checkAssemble(box) {
        var q = findQuestion(box);
        var feedback = box.querySelector(".feedback-box");
        var chosen = chipsOf(box.querySelector(".assemble-answer"));
        if (!chosen.length) {
            say(feedback, false, ["⚠️ Toque nas palavras para montar a frase."]);
            return;
        }
        var expected = q.tokens.map(function (t) { return E.normalize(E.baseOf(t)); });
        var marks = chosen.map(function (chip, i) {
            return E.normalize(E.baseOf(q.tokens[Number(chip.dataset.i)])) === expected[i];
        });
        var complete = chosen.length === expected.length;
        chosen.forEach(function (chip, i) {
            chip.classList.toggle("right", marks[i]);
            chip.classList.toggle("wrong", !marks[i]);
        });
        if (complete && marks.every(Boolean)) {
            say(feedback, true, [html("⭕ <ruby>正解<rt>せいかい</rt></ruby>です！ (Correto!)")]);
            box.querySelector(".answer-box").classList.add("visible");
            recordAnswer(box, true);
            return;
        }
        var wrong = marks.filter(function (ok) { return !ok; }).length;
        var msg = !complete && !wrong ? "Está certo até aqui, mas faltam palavras."
            : (!complete ? "Faltam palavras e algumas estão fora do lugar (em vermelho)."
                         : wrong + (wrong === 1 ? " palavra está" : " palavras estão") + " fora do lugar (em vermelho).");
        say(feedback, false, [html("❌ <ruby>不正解<rt>ふせいかい</rt></ruby>です。(Incorreto) "), msg, " ", retryButton()]);
        recordAnswer(box, false);
    }

    function retry(box) {
        var feedback = box.querySelector(".feedback-box");
        feedback.className = "feedback-box";
        feedback.textContent = "";
        if (box.dataset.kind === "assemble") {
            var bank = box.querySelector(".assemble-bank");
            chipsOf(box.querySelector(".assemble-answer")).forEach(function (chip) {
                chip.classList.remove("wrong", "right");
                bank.appendChild(chip);
            });
            var first = bank.querySelector(".word-chip");
            if (first) first.focus();
        } else {
            var input = box.querySelector(".input-text");
            input.value = "";
            input.focus();
        }
    }

    function resetSection(id) {
        if (!window.confirm("Apagar suas respostas desta seção e refazer?")) return;
        document.querySelectorAll("#sec-" + id + " [data-exercise]").forEach(function (box) {
            retry(box);
            box.querySelector(".answer-box").classList.remove("visible");
            var input = box.querySelector(".input-text");
            if (input) input.blur();
        });
        P.resetSection(lessonNumber, id);
        refreshProgress();
    }

    /* ---------- Eventos ---------- */

    function bindEvents() {
        var nav = document.getElementById("main-nav");

        nav.addEventListener("click", function (e) {
            var btn = e.target.closest(".tab-btn");
            if (btn) go(btn.dataset.tab);
        });

        // Teclado nas abas: setas, Home e End movem o foco e ativam a aba.
        nav.addEventListener("keydown", function (e) {
            var keys = { ArrowRight: 1, ArrowLeft: -1, Home: "first", End: "last" };
            if (!(e.key in keys)) return;
            e.preventDefault();
            var i = sections.indexOf(currentTab);
            var step = keys[e.key];
            var target = step === "first" ? 0 : step === "last" ? sections.length - 1
                : (i + step + sections.length) % sections.length;
            go(sections[target]);
            document.getElementById("tab-" + sections[target]).focus();
        });

        window.addEventListener("hashchange", function () {
            var id = sectionFromHash();
            if (id && id !== currentTab) activate(id, true);
        });

        var container = document.getElementById("main-container");

        container.addEventListener("click", function (e) {
            var btn = e.target.closest("[data-action]");
            if (!btn) return;
            if (btn.dataset.action === "section-done") {
                P.setSection(lessonNumber, currentTab, P.sectionStatus(lessonNumber, currentTab) !== "done");
                refreshProgress();
                return;
            }
            if (btn.dataset.action === "kana-toggle") {
                window.Prefs.set({ kanaInput: kanaOn() ? "off" : "on" });
                refreshKanaToggle();
                return;
            }
            if (btn.dataset.action === "reset-section") { resetSection(currentTab); return; }
            var box = btn.closest("[data-exercise]");
            if (btn.dataset.action === "retry") retry(box);
            else if (btn.dataset.action === "check") checkAnswer(box);
            else if (btn.dataset.action === "reveal") box.querySelector(".answer-box").classList.toggle("visible");
        });

        container.addEventListener("click", function (e) {
            var chip = e.target.closest(".word-chip");
            if (chip) moveChip(chip);
        });

        // Romaji → kana enquanto digita (não mexe se o teclado já está compondo kana).
        container.addEventListener("input", function (e) {
            var input = e.target;
            if (!input.classList.contains("input-text") || e.isComposing || !kanaOn()) return;
            var r = E.romajiToKana(input.value);
            var next = r.kana + r.pending;
            if (next !== input.value) input.value = next;
        });

        container.addEventListener("keydown", function (e) {
            if (e.key === "Enter" && e.target.classList.contains("input-text")) {
                checkAnswer(e.target.closest("[data-exercise]"));
            }
        });
    }

    /* ---------- Início ---------- */

    function init() {
        renderHeader();
        if (!data) {
            document.getElementById("main-container").innerHTML =
                '<p class="empty-state">Não foi possível carregar os dados desta lição.</p>';
            return;
        }
        sections = availableSections();
        renderNav();
        renderSections();
        addProgressUi();
        bindEvents();
        activate(sectionFromHash() || sections[0], false);
    }

    init();
})();
