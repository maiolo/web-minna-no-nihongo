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
    function T(key, vars) { return window.I18n ? window.I18n.t(key, vars) : key; }
    // Os dados das lições usam {漢字|かんじ}; aqui viram <ruby> antes de tudo (Notation.convertDeep).
    var raw = window.lessonData && window.I18n ? window.I18n.localize(window.lessonData, window.I18n.lang()) : window.lessonData;
    var data = raw && window.Notation ? window.Notation.convertDeep(withRomaji(raw)) : raw;

    // Exemplos de gramatica.points sem "romaji" ganham um, gerado da própria frase (use ^は e ^へ nas partículas).
    // Roda antes da conversão da notação, porque o romaji sai das leituras de {漢字|かんじ}.
    function withRomaji(raw) {
        var points = raw.gramatica && raw.gramatica.points;
        if (!points || !window.Notation) return raw;
        points.forEach(function (p) {
            (p.ex || []).forEach(function (e) {
                if (e.romaji) return;
                var r = window.Notation.sentenceRomaji(e.jp.replace(/<br\s*\/?>/gi, " "));
                e.romaji = r.charAt(0).toUpperCase() + r.slice(1);
            });
            // Linhas de formação (form[].ex): aceitam texto puro ou { tag, jp, pt, romaji }; o romaji sai da frase sem as tags HTML.
            (p.form || []).forEach(function (row) {
                row.ex = (row.ex || []).map(function (line) {
                    var l = typeof line === "string" ? { jp: line } : line;
                    if (!l.romaji) l.romaji = window.Notation.sentenceRomaji(l.jp.replace(/<[^>]+>/g, ""));
                    return l;
                });
            });
        });
        return raw;
    }
    var lessonNumber = Number(document.body.dataset.lesson);

    // Rótulo de cada aba (window.SECTION_LABELS, em lessons-index.js).
    // Se um rótulo faltar (por exemplo, lessons-index.js antigo em cache), a aba
    // aparece com o próprio nome da seção em vez de quebrar a página.
    var LABELS = new Proxy(window.SECTION_LABELS || {}, {
        get: function (labels, id) { return labels[id] || { jp: String(id), pt: String(id) }; }
    });
    var P = window.Progress;

    // Ordem fixa das abas; seções ausentes nos dados são omitidas.
    var SECTION_ORDER = ["vocab", "gramatica", "renshuuA", "renshuuB", "renshuuC", "mondai", "montar"];
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
            back: { href: "../index.html#licoes", label: T("lesson.back") },
            crumbs: [
                { label: T("lesson.home"), href: "../index.html" },
                { label: T("header.lessons"), href: "../index.html#licoes" },
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
        nav.setAttribute("aria-label", T("lesson.sections"));
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
            pager.setAttribute("aria-label", T("lesson.navigation"));
            document.body.appendChild(pager);
            pager.addEventListener("click", function (e) {
                // Avançar a partir de uma seção de leitura conta como concluí-la.
                if (P && e.target.closest(".pager-next") && !isExercise(currentTab)) {
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
            '<div class="pager-dots" role="img" aria-label="' + T("lesson.sectionOf", { i: i + 1, n: sections.length }) + '">' + dots + "</div>" +
            pagerButton(next, "next");
    }

    /* ---------- Progresso ---------- */

    // Seção com "exercises" é de exercícios; as demais (vocab, gramatica ou
    // qualquer uma com "content") são de leitura e têm o botão "Marcar como concluída".
    function isExercise(id) { return Boolean(data[id] && data[id].exercises); }
    function stateText(status) { return status === "todo" ? "" : " (" + T(status === "done" ? "status.done" : "status.inProgress").toLowerCase() + ")"; }

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
            tab.querySelector(".tab-state").textContent = stateText(status);

            if (isExercise(id)) {
                var c = syncExerciseSection(id);
                var holder = document.querySelector("#sec-" + id + " .ex-progress");
                if (holder) {
                    var pct = c.total ? Math.round(c.done / c.total * 100) : 0;
                    var tries = P.attemptCount(lessonNumber, id);
                    holder.innerHTML = progressBar(pct, T("ex.correctAnswers")) +
                        '<span class="ex-progress-text">' + T("ex.progress", { done: c.done, total: c.total }) +
                        (tries ? " · " + T(tries === 1 ? "ex.attempt1" : "ex.attempts", { n: tries }) : "") + "</span>";
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
                    btn.textContent = status === "done" ? T("lesson.sectionDone") : T("lesson.markDone");
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
            "あ " + T("ex.kanaToggle") + "</button>";
        return '<div class="ex-tools">' + kana +
            '<button type="button" class="btn btn-reveal ex-reset" data-action="reset-section" hidden>↺ ' + T("ex.redoSection") + '</button></div>';
    }

    function refreshKanaToggle() {
        var on = kanaOn();
        document.querySelectorAll(".kana-toggle").forEach(function (btn) {
            btn.setAttribute("aria-pressed", on ? "true" : "false");
            btn.title = on ? T("ex.kanaOn") : T("ex.kanaOff");
        });
        document.querySelectorAll("#main-container .input-text").forEach(function (input) {
            input.placeholder = on ? T("ex.placeholderKana") : "答えを入力...";
        });
    }

    function addProgressUi() {
        if (!P) return;
        var header = document.getElementById("lesson-header");
        header.insertAdjacentHTML("beforeend",
            '<div class="topbar-progress"><div id="lesson-progress" class="progress thin" role="progressbar" ' +
            'aria-label="' + T("lesson.progress") + '" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0"><span></span></div></div>');
        sections.forEach(function (id) {
            var panel = document.getElementById("sec-" + id);
            if (!isExercise(id)) {
                panel.insertAdjacentHTML("beforeend",
                    '<div class="section-done"><button type="button" class="btn btn-toggle section-done-btn" ' +
                    'data-action="section-done" aria-pressed="false">' + T("lesson.markDone") + '</button></div>');
            } else {
                var head = panel.querySelector(".card-header");
                if (head) head.insertAdjacentHTML("afterend", '<div class="ex-progress"></div>' + exTools(id));
            }
        });
        P.subscribe(refreshProgress);
        refreshKanaToggle();
    }

    /* ---------- Seções ---------- */

    var SPEAKER =
        '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" ' +
        'stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 9v6h4l5 4V5L8 9H4z"/>' +
        '<path d="M16.5 8.5a5 5 0 0 1 0 7M19 6a8.5 8.5 0 0 1 0 12"/></svg>';

    // Botão de áudio: fala a leitura em kana (do furigana), que não erra o kanji.
    function speakButton(html) {
        var text = E.readingOf(html.replace(/<br\s*\/?>/gi, " "))
            .replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
        return '<button type="button" class="speak-btn" data-speak="' + text + '" aria-label="' + T("lesson.listen") + '" title="' + T("lesson.listen") + '">' + SPEAKER + "</button>";
    }

    function textBlock(item, jpClass) {
        return '<div class="item-box">' +
            '<div class="jp-row"><div class="' + jpClass + '">' + item.jp + "</div>" + speakButton(item.jp) + "</div>" +
            '<div class="romaji">' + item.romaji + "</div>" +
            '<div class="pt-line">' + T("tr.flag") + ' ' + item.pt + "</div>" +
        "</div>";
    }

    // vocab.items (lista simples) ou vocab.groups ([{ title, items }]) para separar por tema.
    function renderVocab() {
        var groups = data.vocab.groups || [{ items: data.vocab.items || [] }];
        return '<div id="sec-vocab" class="section-container card">' +
            '<h2 class="card-header">' + data.vocab.title + "</h2>" +
            groups.map(function (g) {
                return (g.title ? '<h3 class="exercise-group-title">' + g.title + "</h3>" : "") +
                    '<div class="vocab-grid">' + g.items.map(function (v) { return textBlock(v, "jp-term"); }).join("") + "</div>";
            }).join("") +
        "</div>";
    }

    // Seção de leitura: gramática por pontos, ou HTML pronto (tabelas de substituição do Renshuu A...).
    function renderContentSection(id) {
        if (data[id].points) return renderGrammarPoints(id);
        return '<div id="sec-' + id + '" class="section-container">' + data[id].content + "</div>";
    }

    /* ---------- Gramática por pontos (gramatica.points) ----------
     * Cada ponto: { id, title, pat, short, mean, rule?, form?: [{label, text}], ex: [{jp, pt, romaji?}],
     *               contrast?: { rows: [{label, jp, pt}], note? }, trap?: texto | [texto], note? }
     * No topo da aba fica o resumo com os modelos de frase e um salto para cada cartão. */

    function asList(v) { return Array.isArray(v) ? v : (v ? [v] : []); }

    // Uma linha de conjugação: etiqueta da regra, forma, tradução e romaji (borrado; segue o painel Ajustes).
    function formLine(l) {
        return '<div class="gp-fl"><div class="gp-fl-main">' +
            (l.tag ? '<span class="gp-tag">' + l.tag + "</span>" : "") +
            '<span class="gp-fl-jp">' + l.jp + "</span>" +
            (l.pt ? '<span class="gp-fl-pt">' + l.pt + "</span>" : "") +
            '</div><div class="romaji">' + l.romaji + "</div></div>";
    }

    function renderPoint(p, n) {
        var html = '<div class="card gp" id="gp-' + p.id + '">' +
            '<h3 class="card-header"><span class="gp-num" aria-hidden="true">' + n + '</span><span class="gp-title">' + p.title + "</span></h3>" +
            '<p class="gp-pattern">' + p.pat + "</p>" +
            '<p class="gp-mean">' + p.mean + "</p>";
        if (p.rule) html += "<p>" + p.rule + "</p>";
        if (p.form) {
            html += '<div class="gp-form">' + p.form.map(function (r) {
                return '<div class="gp-cmp"><div class="gp-cmp-label">' + r.label + "</div>" +
                    (r.text ? '<div class="gp-form-text">' + r.text + "</div>" : "") +
                    (r.ex || []).map(formLine).join("") + "</div>";
            }).join("") + "</div>";
        }
        html += '<h4 class="gp-sub">Exemplos</h4>' + p.ex.map(function (e) { return textBlock(e, "jp-example"); }).join("");
        if (p.contrast) {
            // Blocos empilhados (e não tabela): no celular a frase inteira cabe sem rolar na horizontal.
            html += '<h4 class="gp-sub">Compare</h4><div class="gp-compare">' + p.contrast.rows.map(function (r) {
                return '<div class="gp-cmp"><div class="gp-cmp-label">' + r.label + '</div><div class="jp-example">' + r.jp +
                    '</div><div class="pt-line">' + r.pt + "</div></div>";
            }).join("") + "</div>";
            if (p.contrast.note) html += '<p class="gp-contrast-note">' + p.contrast.note + "</p>";
        }
        if (p.trap) {
            html += '<div class="gp-trap"><strong>⚠️ ' + T("gp.trap") + '</strong><ul>' +
                asList(p.trap).map(function (t) { return "<li>" + t + "</li>"; }).join("") + "</ul></div>";
        }
        if (p.note) html += '<div class="gp-note"><strong>💡 ' + T("gp.tip") + '</strong> ' + p.note + "</div>";
        return html + "</div>";
    }

    function renderGrammarPoints(id) {
        var g = data[id];
        var html = '<div id="sec-' + id + '" class="section-container">' +
            '<div class="card gp-summary"><h2 class="card-header">' + g.title + "</h2>" +
            (g.intro ? '<p class="page-intro">' + g.intro + "</p>" : "") +
            '<ol class="gp-index">' + g.points.map(function (p, i) {
                return '<li><button type="button" class="gp-jump" data-goto="gp-' + p.id + '">' +
                    '<span class="gp-num" aria-hidden="true">' + (i + 1) + "</span>" +
                    '<span class="gp-jump-text"><span class="gp-pat">' + p.pat + "</span>" +
                    (p.short ? '<span class="gp-short">' + p.short + "</span>" : "") + "</span></button></li>";
            }).join("") + "</ol></div>";
        g.points.forEach(function (p, i) { html += renderPoint(p, i + 1); });
        return html + "</div>";
    }

    function renderExercises(sectionId) {
        var section = data[sectionId];
        var html = '<div id="sec-' + sectionId + '" class="section-container">' +
            '<div class="card">' +
                '<h2 class="card-header">' + section.title + "</h2>";

        section.exercises.forEach(function (group, groupIdx) {
            html += '<h3 class="exercise-group-title">' + group.desc + "</h3>";
            if (group.intro) html += '<div class="exercise-intro">' + group.intro + "</div>";
            group.questions.forEach(function (q, qIdx) {
                html += '<div class="item-box" data-exercise="' + sectionId + ":" + groupIdx + ":" + qIdx + '">' +
                    '<div class="exercise-prompt">' + q.q + "</div>" +
                    '<div class="exercise-controls">' +
                        '<input type="text" class="input-text" autocomplete="off" autocapitalize="off" ' +
                            'placeholder="答えを入力...">' +
                        '<button type="button" class="btn btn-check" data-action="check">' +
                            "✅ " + T("ex.check") + " (<ruby>確認<rt>かくにん</rt></ruby>)</button>" +
                        '<button type="button" class="btn btn-reveal" data-action="reveal">' +
                            "💡 " + T("ex.reveal") + " (<ruby>答<rt>こた</rt></ruby>え)</button>" +
                    "</div>" +
                    '<div class="feedback-box"></div>' +
                    '<div class="answer-box">' +
                        '<div class="jp-row"><div class="answer-correct"><ruby>正解<rt>せいかい</rt></ruby>: ' + q.a + "</div>" + speakButton(q.a) + "</div>" +
                        '<div class="romaji">' + q.romaji + "</div>" +
                        (q.pt ? '<div class="answer-translation">' + T("ex.translation") + ': ' + q.pt + "</div>" : "") +
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
                    '<div class="assemble-answer" aria-label="' + T("ex.yourSentence") + '" aria-live="polite"></div>' +
                    '<div class="assemble-bank" aria-label="' + T("ex.availableWords") + '">' +
                        order.map(function (i) {
                            return '<button type="button" class="word-chip" data-i="' + i + '">' + q.tokens[i] + "</button>";
                        }).join("") +
                    "</div>" +
                    '<div class="exercise-controls">' +
                        '<button type="button" class="btn btn-check" data-action="check">✅ ' + T("ex.check") + ' (<ruby>確認<rt>かくにん</rt></ruby>)</button>' +
                        '<button type="button" class="btn btn-reveal" data-action="retry">↺ ' + T("ex.clear") + '</button>' +
                        '<button type="button" class="btn btn-reveal" data-action="reveal">💡 ' + T("ex.reveal") + ' (<ruby>答<rt>こた</rt></ruby>え)</button>' +
                    "</div>" +
                    '<div class="feedback-box"></div>' +
                    '<div class="answer-box">' +
                        '<div class="jp-row"><div class="answer-correct"><ruby>正解<rt>せいかい</rt></ruby>: ' + q.tokens.join("") + "</div>" + speakButton(q.tokens.join("")) + "</div>" +
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
            else if (data[id].content || data[id].points) html += renderContentSection(id);
            else if (id === "montar") html += renderMontar(id);
            else if (isExercise(id)) html += renderExercises(id);
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
        var b = el("button", "btn btn-reveal feedback-retry", "↺ " + T("ex.retry"));
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
        // Mais de uma resposta aceita: separe com "／" nos dados (ex.: "すぐ／直ぐ").
        var variants = findQuestion(box).a.split("／").map(function (v) {
            return { base: E.normalize(E.baseOf(v)), reading: E.normalize(E.toHiragana(E.readingOf(v))) };
        });
        var matched = variants.filter(function (v) { return typed === v.base || E.toHiragana(typed) === v.reading; })[0];

        if (!typed) {
            say(feedback, false, [html("⚠️ <ruby>入力<rt>にゅうりょく</rt></ruby>してください。(" + T("ex.typeAnswer") + ")")]);
            return;
        }
        if (matched) {
            var inKana = typed !== matched.base && matched.base !== matched.reading;
            say(feedback, true, [html("⭕ <ruby>正解<rt>せいかい</rt></ruby>です！ (" + T("ex.correct") + ")")].concat(
                inKana ? [el("div", "feedback-note", T("ex.inKana") + " " + matched.base)] : []));
            recordAnswer(box, true);
            return;
        }
        // Compara com a forma (kanji ou kana) mais parecida com o que a pessoa digitou.
        var hasKanji = /[一-龯]/.test(typed);
        var candidates = [];
        variants.forEach(function (v) {
            [[v.base, typed], [v.reading, E.toHiragana(typed)]].forEach(function (pair) {
                var ops = E.diff(pair[1], pair[0]);
                // Empate: quem digitou em kana (sem kanji) é comparado com a leitura, quem usou kanji com o texto.
                candidates.push({ ops: ops, cost: ops.filter(function (o) { return o.t !== "same"; }).length,
                                  pref: (pair[0] === v.reading) === !hasKanji ? 0 : 1 });
            });
        });
        var best = candidates.sort(function (x, y) { return x.cost - y.cost || x.pref - y.pref; })[0];
        var box1 = el("div", "diff");
        box1.appendChild(diffLine(T("ex.youTyped"), best.ops, "del"));
        box1.appendChild(diffLine(T("ex.expected"), best.ops, "ins"));
        say(feedback, false, [html("❌ <ruby>不正解<rt>ふせいかい</rt></ruby>です。(" + T("ex.incorrect") + ")"), box1, retryButton()]);
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
            say(feedback, false, ["⚠️ " + T("ex.tapWords")]);
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
            say(feedback, true, [html("⭕ <ruby>正解<rt>せいかい</rt></ruby>です！ (" + T("ex.correct") + ")")]);
            box.querySelector(".answer-box").classList.add("visible");
            recordAnswer(box, true);
            return;
        }
        var wrong = marks.filter(function (ok) { return !ok; }).length;
        var msg = !complete && !wrong ? T("ex.missing")
            : (!complete ? T("ex.missingAndMisplaced")
                         : T(wrong === 1 ? "ex.misplaced1" : "ex.misplacedN", { n: wrong }));
        say(feedback, false, [html("❌ <ruby>不正解<rt>ふせいかい</rt></ruby>です。(" + T("ex.incorrect") + ") "), msg, " ", retryButton()]);
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
        if (!window.confirm(T("ex.confirmReset"))) return;
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

        // Resumo da gramática: leva ao cartão do ponto (sem mexer na URL, que guarda só a aba).
        container.addEventListener("click", function (e) {
            var jump = e.target.closest("[data-goto]");
            var target = jump && document.getElementById(jump.dataset.goto);
            if (target) target.scrollIntoView({ behavior: prefersReducedMotion() ? "auto" : "smooth", block: "start" });
        });

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
                '<p class="empty-state">' + T("lesson.loadError") + '</p>';
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
