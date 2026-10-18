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

    // Rótulo de cada aba: kanji com furigana em cima, português embaixo.
    var LABELS = {
        vocab: { jp: "<ruby>語彙<rt>ごい</rt></ruby>", pt: "Vocabulário" },
        bunkei: { jp: "<ruby>文型<rt>ぶんけい</rt></ruby>", pt: "Padrões" },
        gramatica: { jp: "<ruby>文法<rt>ぶんぽう</rt></ruby>", pt: "Gramática" },
        renshuuA: { jp: "<ruby>練習<rt>れんしゅう</rt></ruby> A", pt: "Exercícios" },
        renshuuB: { jp: "<ruby>練習<rt>れんしゅう</rt></ruby> B", pt: "Exercícios" },
        renshuuC: { jp: "<ruby>練習<rt>れんしゅう</rt></ruby> C", pt: "Exercícios" },
        mondai: { jp: "<ruby>問題<rt>もんだい</rt></ruby>", pt: "Problemas" }
    };

    // Ordem fixa das abas; seções ausentes nos dados são omitidas.
    var SECTION_ORDER = ["vocab", "bunkei", "gramatica", "renshuuA", "renshuuB", "renshuuC", "mondai"];
    var EXERCISE_SECTIONS = ["renshuuA", "renshuuB", "renshuuC", "mondai"];

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

    function renderSections() {
        var html = "";
        sections.forEach(function (id) {
            if (id === "vocab") html += renderVocab();
            else if (id === "bunkei") html += renderBunkei();
            else if (id === "gramatica") html += renderGramatica();
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

    function checkAnswer(box) {
        var input = box.querySelector(".input-text");
        var feedback = box.querySelector(".feedback-box");
        var user = normalize(input.value);
        var correct = normalize(extractBaseText(findQuestion(box).a));

        if (!user) {
            feedback.innerHTML = "⚠️ <ruby>入力<rt>にゅうりょく</rt></ruby>してください。(Por favor, digite a resposta)";
            feedback.className = "feedback-box feedback-incorrect";
        } else if (user === correct) {
            feedback.innerHTML = "⭕ <ruby>正解<rt>せいかい</rt></ruby>です！ (Correto!)";
            feedback.className = "feedback-box feedback-correct";
        } else {
            feedback.innerHTML = "❌ <ruby>不正解<rt>ふせいかい</rt></ruby>です。(Incorreto). Você digitou: ";
            feedback.appendChild(document.createTextNode(input.value));
            feedback.className = "feedback-box feedback-incorrect";
        }
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
            var box = btn.closest("[data-exercise]");
            if (btn.dataset.action === "check") checkAnswer(box);
            else if (btn.dataset.action === "reveal") box.querySelector(".answer-box").classList.toggle("visible");
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
        bindEvents();
        activate(sectionFromHash() || sections[0], false);
    }

    init();
})();
