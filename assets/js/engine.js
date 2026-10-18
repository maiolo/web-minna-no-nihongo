/*
 * Motor das lições.
 *
 * Monta a página de uma lição a partir de window.lessonData (arquivo em
 * lessons/data/) e da lista window.LESSONS (assets/js/lessons-index.js).
 * O número da lição vem de <body data-lesson="N">.
 */
(function () {
    "use strict";

    var lessons = window.LESSONS || [];
    var data = window.lessonData;
    var lessonNumber = Number(document.body.dataset.lesson);

    var LABELS = {
        vocab: "<ruby>語彙<rt>ごい</rt></ruby>",
        bunkei: "<ruby>文型<rt>ぶんけい</rt></ruby>・<ruby>例文<rt>れいぶん</rt></ruby>",
        gramatica: "<ruby>文法<rt>ぶんぽう</rt></ruby>",
        renshuuA: "<ruby>練習<rt>れんしゅう</rt></ruby> A",
        renshuuB: "<ruby>練習<rt>れんしゅう</rt></ruby> B",
        renshuuC: "<ruby>練習<rt>れんしゅう</rt></ruby> C",
        mondai: "<ruby>問題<rt>もんだい</rt></ruby>"
    };

    // Ordem fixa das abas; seções ausentes nos dados são omitidas.
    var SECTION_ORDER = ["vocab", "bunkei", "gramatica", "renshuuA", "renshuuB", "renshuuC", "mondai"];
    var EXERCISE_SECTIONS = ["renshuuA", "renshuuB", "renshuuC", "mondai"];

    /* ---------- Cabeçalho ---------- */

    function lessonLink(lesson, isNext) {
        var label = window.lessonLabel(lesson.number);
        var content = isNext ? label + " ➡️" : "⬅️ " + label;
        return '<a class="nav-link" href="' + lesson.file + '">' + content + "</a>";
    }

    function renderHeader() {
        var header = document.getElementById("lesson-header");
        var index = lessons.findIndex(function (l) { return l.number === lessonNumber; });
        var current = lessons[index];
        var prev = index > 0 ? lessons[index - 1] : null;
        var next = index >= 0 && index < lessons.length - 1 ? lessons[index + 1] : null;

        header.innerHTML =
            '<div class="header-top">' +
                '<div class="header-links">' +
                    '<a class="nav-link" href="../index.html">🏠 <ruby>目次<rt>もくじ</rt></ruby></a>' +
                    (prev ? lessonLink(prev, false) : "") +
                "</div>" +
                (next ? lessonLink(next, true) : "") +
            "</div>" +
            '<div class="header-content">' +
                '<div class="header-title">' +
                    "<h1>みんなの<ruby>日<rt>に</rt></ruby><ruby>本<rt>ほん</rt></ruby><ruby>語<rt>ご</rt></ruby> - " +
                        window.lessonLabel(lessonNumber) + "</h1>" +
                    "<p>" + (current ? current.topic : "") + "</p>" +
                "</div>" +
                '<div class="settings-slot"></div>' +
            "</div>";

        // Furigana, romaji e tamanho do texto (assets/js/settings-panel.js).
        if (window.SettingsPanel) window.SettingsPanel.mount(header.querySelector(".settings-slot"));
    }

    /* ---------- Abas ---------- */

    function availableSections() {
        return SECTION_ORDER.filter(function (id) { return Boolean(data[id]); });
    }

    function renderNav(sections) {
        document.getElementById("main-nav").innerHTML = sections.map(function (id) {
            return '<button type="button" class="tab-btn" data-tab="' + id + '">' + LABELS[id] + "</button>";
        }).join("");
    }

    function switchTab(id) {
        document.querySelectorAll(".tab-btn").forEach(function (btn) {
            btn.classList.toggle("active", btn.dataset.tab === id);
        });
        document.querySelectorAll(".section-container").forEach(function (sec) {
            sec.classList.toggle("active", sec.id === "sec-" + id);
        });
        window.scrollTo({ top: 0, behavior: "smooth" });
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

    function renderSections(sections) {
        var html = "";
        sections.forEach(function (id) {
            if (id === "vocab") html += renderVocab();
            else if (id === "bunkei") html += renderBunkei();
            else if (id === "gramatica") html += renderGramatica();
            else if (EXERCISE_SECTIONS.indexOf(id) !== -1) html += renderExercises(id);
        });
        document.getElementById("main-container").innerHTML = html;
        wrapTables();
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

    function bindEvents() {
        document.getElementById("main-nav").addEventListener("click", function (e) {
            var btn = e.target.closest(".tab-btn");
            if (btn) switchTab(btn.dataset.tab);
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
        var sections = availableSections();
        renderNav(sections);
        renderSections(sections);
        bindEvents();
        switchTab(sections[0]);
    }

    init();
})();
