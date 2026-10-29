/*
 * Página de kanji do JLPT.
 *
 * Monta a lista de cartões a partir de uma variável global com os dados
 * (jlpt/data/n5-kanji-*.js). Configuração vem de <body>:
 *   data-global  nome da variável global com a lista (ex.: JLPT_N5_KANJI)
 *   data-level   nível mostrado no cabeçalho (ex.: N5)
 *
 * O furigana e o romaji das frases são gerados a partir da notação
 * {漢字|かんじ} (veja o cabeçalho dos arquivos de dados).
 */
(function () {
    "use strict";

    var body = document.body;
    var kanjiList = (window.I18n ? window.I18n.localize(window[body.dataset.global] || [], window.I18n.lang()) : (window[body.dataset.global] || []));
    function T(key, vars) { return window.I18n ? window.I18n.t(key, vars) : key; }
    var level = body.dataset.level || "N5";

    var CATEGORIES = [
        { id: "numeros", label: T("kanji.cat.numeros") },
        { id: "tempo", label: T("kanji.cat.tempo") },
        { id: "natureza", label: T("kanji.cat.natureza") },
        { id: "pessoas", label: T("kanji.cat.pessoas") },
        { id: "corpo", label: T("kanji.cat.corpo") },
        { id: "posicao", label: T("kanji.cat.posicao") },
        { id: "verbos", label: T("kanji.cat.verbos") },
        { id: "adjetivos", label: T("kanji.cat.adjetivos") },
        { id: "sociedade", label: T("kanji.cat.sociedade") }
    ];

    /* ---------- Notação e romaji (assets/js/notation.js) ---------- */

    var N = window.Notation;
    var katakanaToHiragana = N.katakanaToHiragana;
    var toRomaji = N.toRomaji;
    var plainText = N.plainText;
    var readingText = N.readingText;
    var toRuby = N.toRuby;
    var sentenceRomaji = N.sentenceRomaji;

    /* ---------- Leituras ---------- */

    function readingKind(tag) {
        var first = tag.charAt(0);
        return /[゠-ヿ]/.test(first) ? "on" : "kun";
    }

    // Remove o comentário entre parênteses de um rótulo ("ズ (especial)" -> "ズ").
    function tagKana(tag) {
        return tag.replace(/\s*\(.*$/, "");
    }

    function readingChips(readings) {
        if (!readings.length) return '<span class="read-none">—</span>';
        return readings.map(function (r) {
            return '<span class="read-chip">' + r +
                ' <span class="romaji">' + toRomaji(r) + "</span></span>";
        }).join("");
    }

    /* ---------- Renderização ---------- */

    var P = window.Progress;
    var desktopQuery = window.matchMedia("(min-width: 900px)");
    var state = { query: "", category: "all", status: "all", selected: null };
    var lastTile = null;

    function isKnown(k) { return Boolean(P && P.isKnown(level, k)); }

    var SPEAKER =
        '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" ' +
        'stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 9v6h4l5 4V5L8 9H4z"/>' +
        '<path d="M16.5 8.5a5 5 0 0 1 0 7M19 6a8.5 8.5 0 0 1 0 12"/></svg>';

    // Áudio da frase: leitura em kana; ^は e ^へ são partículas (wa, e).
    function speakButton(notation) {
        var text = readingText(notation).replace(/\^は/g, "わ").replace(/\^へ/g, "え").replace(/\^/g, "").replace(/ /g, "")
            .replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
        return '<button type="button" class="speak-btn" data-speak="' + text + '" aria-label="' + T("kanji.listenSentence") + '" title="' + T("lesson.listen") + '">' + SPEAKER + "</button>";
    }

    function renderTile(entry) {
        return '<button type="button" class="kanji-tile" data-kanji="' + entry.k + '" aria-pressed="false">' +
            '<span class="tile-glyph" lang="ja">' + entry.k + "</span>" +
            '<span class="tile-meaning">' + entry.pt + "</span>" +
            '<span class="sr-only tile-state"></span>' +
        "</button>";
    }

    function renderDetail(entry) {
        var visible = visibleEntries();
        var i = visible.indexOf(entry);
        var examples = entry.ex.map(function (e) {
            var kind = readingKind(e[0]);
            return '<li class="example">' +
                '<span class="read-tag ' + kind + '">' + e[0] + "</span>" +
                '<div class="jp-row"><div class="jp-example">' + toRuby(e[1], entry.k) + "</div>" + speakButton(e[1]) + "</div>" +
                '<div class="romaji">' + sentenceRomaji(e[1]) + "</div>" +
                '<div class="pt-line">' + T("tr.flag") + ' ' + e[2] + "</div>" +
            "</li>";
        }).join("");
        var known = isKnown(entry.k);
        return '<div class="detail-top">' +
                '<div class="detail-nav">' +
                    '<button type="button" class="detail-btn" data-step="-1" aria-label="' + T("kanji.prev") + '"' + (i <= 0 ? " disabled" : "") + ">‹</button>" +
                    '<button type="button" class="detail-btn" data-step="1" aria-label="' + T("kanji.next") + '"' + (i === -1 || i >= visible.length - 1 ? " disabled" : "") + ">›</button>" +
                "</div>" +
                '<button type="button" class="detail-btn detail-close" aria-label="' + T("kanji.close") + '">' + T("kanji.close") + ' ✕</button>' +
            "</div>" +
            '<div class="detail-hero">' +
                '<div class="detail-glyph" lang="ja">' + entry.k + "</div>" +
                '<div class="kanji-meaning">' + entry.pt + "</div>" +
            "</div>" +
            '<div class="detail-readings">' +
                '<div class="read-row"><span class="read-label on" title="' + T("kanji.onTip") + '">音 On</span>' + readingChips(entry.on) + "</div>" +
                '<div class="read-row"><span class="read-label kun" title="' + T("kanji.kunTip") + '">訓 Kun</span>' + readingChips(entry.kun) + "</div>" +
            "</div>" +
            '<button type="button" class="btn btn-toggle known-btn" data-action="known" aria-pressed="' + known + '">' +
                (known ? T("kanji.knownOn") : T("kanji.knownOff")) + "</button>" +
            '<ul class="example-list">' + examples + "</ul>" +
            (entry.note ? '<p class="kanji-note">💡 ' + entry.note + "</p>" : "");
    }

    /* ---------- Busca e filtros ---------- */

    function normalize(str) {
        return katakanaToHiragana(String(str))
            .normalize("NFD")
            .replace(/[̀-ͯ]/g, "")
            .toLowerCase();
    }

    function buildSearchIndex() {
        kanjiList.forEach(function (entry) {
            var readings = entry.on.concat(entry.kun);
            var parts = [entry.k, entry.pt].concat(readings).concat(readings.map(toRomaji));
            entry.search = normalize(parts.join(" ").replace(/[()]/g, ""));
        });
    }

    function matches(entry) {
        if (state.category !== "all" && entry.cat !== state.category) return false;
        if (state.status !== "all" && (state.status === "known") !== isKnown(entry.k)) return false;
        if (!state.query) return true;
        return entry.search.indexOf(normalize(state.query).replace(/[()]/g, "")) !== -1;
    }

    function visibleEntries() { return kanjiList.filter(matches); }

    function tileOf(k) { return document.querySelector('.kanji-tile[data-kanji="' + k + '"]'); }

    function applyFilters() {
        var visible = 0;
        document.querySelectorAll(".kanji-tile").forEach(function (tile, idx) {
            var entry = kanjiList[idx];
            var show = matches(entry);
            tile.hidden = !show;
            if (show) visible += 1;
        });
        refreshTiles();
        var known = P ? P.knownCount(level) : 0;
        document.getElementById("kanji-count").textContent =
            T("kanji.showing", { shown: visible, total: kanjiList.length, known: known });
        document.getElementById("kanji-empty").hidden = visible !== 0;
        if (state.selected) refreshDetail();
    }

    // Marca de "já sei" e seleção nos quadrados.
    function refreshTiles() {
        document.querySelectorAll(".kanji-tile").forEach(function (tile) {
            var k = tile.dataset.kanji;
            var known = isKnown(k);
            tile.classList.toggle("known", known);
            tile.setAttribute("aria-pressed", k === state.selected ? "true" : "false");
            tile.querySelector(".tile-state").textContent = known ? " (" + T("kanji.knownShort") + ")" : "";
        });
    }

    function renderChips() {
        var counts = {};
        kanjiList.forEach(function (e) { counts[e.cat] = (counts[e.cat] || 0) + 1; });
        var html = '<button type="button" class="chip active" data-cat="all">' + T("common.all") + ' (' + kanjiList.length + ")</button>";
        CATEGORIES.forEach(function (c) {
            if (counts[c.id]) {
                html += '<button type="button" class="chip" data-cat="' + c.id + '">' +
                    c.label + " (" + counts[c.id] + ")</button>";
            }
        });
        document.getElementById("kanji-chips").innerHTML = html;
    }

    /* ---------- Painel de detalhes ---------- */

    var detail = document.getElementById("kanji-detail");
    var backdrop = document.getElementById("sheet-backdrop");

    function entryOf(k) {
        return kanjiList.filter(function (e) { return e.k === k; })[0] || null;
    }

    function refreshDetail() {
        var entry = entryOf(state.selected);
        if (!entry) {
            detail.innerHTML = '<p class="detail-empty">Escolha um kanji ao lado para ver as leituras e as frases de exemplo.</p>';
            return;
        }
        var keepScroll = detail.scrollTop;
        detail.innerHTML = renderDetail(entry);
        detail.scrollTop = keepScroll;
    }

    function setSheet(open) {
        var sheet = open && !desktopQuery.matches;
        detail.classList.toggle("open", sheet);
        backdrop.hidden = !sheet;
        document.body.classList.toggle("sheet-lock", sheet);
        if (sheet) {
            detail.setAttribute("role", "dialog");
            detail.setAttribute("aria-modal", "true");
        } else {
            detail.removeAttribute("role");
            detail.removeAttribute("aria-modal");
        }
    }

    // push: grava o kanji na URL (#食) para o botão voltar fechar o painel.
    function select(k, push) {
        state.selected = k;
        if (push) history.pushState(null, "", "#" + encodeURIComponent(k));
        refreshTiles();
        refreshDetail();
        setSheet(true);
        var tile = tileOf(k);
        if (tile) {
            lastTile = tile;
            if (desktopQuery.matches) tile.scrollIntoView({ block: "nearest" });
        }
        if (!desktopQuery.matches) {
            var close = detail.querySelector(".detail-close");
            if (close) close.focus();
        }
    }

    function closeDetail(push) {
        var tile = lastTile;
        state.selected = null;
        if (push && location.hash) history.pushState(null, "", location.pathname + location.search);
        refreshTiles();
        refreshDetail();
        setSheet(false);
        if (tile && !tile.hidden && !desktopQuery.matches) tile.focus();
    }

    function stepDetail(delta) {
        var visible = visibleEntries();
        var i = visible.indexOf(entryOf(state.selected)) + delta;
        if (i >= 0 && i < visible.length) {
            select(visible[i].k, true);
            if (!desktopQuery.matches) detail.scrollTop = 0;
            var btn = detail.querySelector('[data-step="' + delta + '"]');
            if (btn && !btn.disabled) btn.focus();
        }
    }

    function syncFromHash() {
        var k = decodeURIComponent(location.hash.replace(/^#/, ""));
        if (k && entryOf(k)) select(k, false);
        else if (state.selected) closeDetail(false);
    }

    function toggleKnown() {
        var k = state.selected;
        if (!k || !P) return;
        P.setKnown(level, k, !isKnown(k));
        applyFilters();
        var btn = detail.querySelector(".known-btn");
        if (btn) btn.focus();
    }

    // Setas movem o foco entre os quadrados visíveis (além do Tab).
    function arrowNav(e, tile) {
        var tiles = Array.prototype.slice.call(document.querySelectorAll(".kanji-tile:not([hidden])"));
        var i = tiles.indexOf(tile);
        var target = null;
        if (e.key === "ArrowRight") target = tiles[i + 1];
        else if (e.key === "ArrowLeft") target = tiles[i - 1];
        else if (e.key === "ArrowDown" || e.key === "ArrowUp") {
            var dir = e.key === "ArrowDown" ? 1 : -1;
            var rect = tile.getBoundingClientRect();
            var best = Infinity;
            tiles.forEach(function (t) {
                var r = t.getBoundingClientRect();
                if ((r.top - rect.top) * dir > rect.height / 2) {
                    var dist = (r.top - rect.top) * dir * 1000 + Math.abs(r.left - rect.left);
                    if (dist < best) { best = dist; target = t; }
                }
            });
        } else return;
        e.preventDefault();
        if (target) target.focus();
    }

    // Mantém o foco dentro do painel quando ele é uma gaveta (modal).
    function trapFocus(e) {
        if (e.key !== "Tab" || !detail.classList.contains("open")) return;
        var items = detail.querySelectorAll("button:not([disabled])");
        if (!items.length) return;
        var first = items[0], last = items[items.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }

    /* ---------- Quiz ---------- */

    var quiz = { mode: "meaning", questions: [], index: 0, results: [] };
    var dialog = document.getElementById("quiz-dialog");

    function quizPool() {
        var pool = kanjiList.filter(function (e) { return !isKnown(e.k); });
        return pool.length >= 1 ? pool : kanjiList;
    }

    function quizStart(mode) {
        quiz.mode = mode || quiz.mode;
        quiz.questions = window.KanjiQuiz.buildQuestions(kanjiList, { mode: quiz.mode, count: 10, pool: quizPool() });
        quiz.index = 0;
        quiz.results = [];
        quizRender();
    }

    function modeSwitch() {
        return '<div class="segmented quiz-modes" role="group" aria-label="' + T("kanji.quizType") + '">' +
            ["meaning:" + T("kanji.meaning"), "reading:" + T("kanji.reading")].map(function (m) {
                var parts = m.split(":");
                return '<label class="seg"><input type="radio" name="quiz-mode" value="' + parts[0] + '"' +
                    (quiz.mode === parts[0] ? " checked" : "") + "><span>" + parts[1] + "</span></label>";
            }).join("") + "</div>";
    }

    function quizRender() {
        var head = '<div class="quiz-head"><h2 id="quiz-title">' + T("kanji.quizTitle", { level: level }) + '</h2>' +
            '<button type="button" class="detail-btn" data-quiz="close" aria-label="' + T("kanji.closeQuiz") + '">✕</button></div>';
        if (!quiz.questions.length) {
            dialog.innerHTML = head + modeSwitch() + '<p class="detail-empty">' + T("kanji.quizNone") + '</p>';
            return;
        }
        if (quiz.index >= quiz.questions.length) {
            var right = quiz.results.filter(function (r) { return r.ok; });
            var missed = quiz.results.filter(function (r) { return !r.ok; });
            dialog.innerHTML = head +
                '<div class="quiz-score">' + right.length + " / " + quiz.results.length + "</div>" +
                (missed.length
                    ? '<p>' + T("kanji.review") + '</p><ul class="quiz-missed">' + missed.map(function (r) {
                        var e = entryOf(r.k);
                        return '<li><span lang="ja">' + r.k + "</span> · " + e.pt + "</li>";
                    }).join("") + "</ul>"
                    : "<p>" + T("kanji.perfect") + "</p>") +
                '<div class="quiz-foot">' +
                    (right.length && P ? '<button type="button" class="btn btn-reveal" data-quiz="mark">' + T("kanji.markRight", { n: right.length }) + '</button>' : "") +
                    '<button type="button" class="btn btn-check" data-quiz="again">' + T("kanji.again") + '</button>' +
                "</div>";
            return;
        }
        var q = quiz.questions[quiz.index];
        var prompt = q.mode === "meaning" ? T("kanji.qMeaning") : T("kanji.qReading");
        dialog.innerHTML = head + modeSwitch() +
            '<p class="quiz-prompt">' + T("kanji.questionOf", { i: quiz.index + 1, n: quiz.questions.length }) + "</p>" +
            '<div class="quiz-glyph" lang="ja">' + q.k + "</div>" +
            '<p class="quiz-prompt">' + prompt + "</p>" +
            '<div class="quiz-options">' + q.options.map(function (o, i) {
                return '<button type="button" class="quiz-option" data-option="' + i + '">' + o + "</button>";
            }).join("") + "</div>" +
            '<div class="quiz-foot"><span class="quiz-prompt" id="quiz-feedback" aria-live="polite"></span>' +
                '<button type="button" class="btn btn-check" data-quiz="next" hidden>' + T("kanji.next2") + '</button></div>';
    }

    function quizAnswer(i) {
        var q = quiz.questions[quiz.index];
        if (quiz.results.length > quiz.index) return;
        var ok = i === q.answer;
        quiz.results.push({ k: q.k, ok: ok });
        dialog.querySelectorAll(".quiz-option").forEach(function (btn, n) {
            btn.disabled = true;
            if (n === q.answer) btn.classList.add("correct");
            else if (n === i) btn.classList.add("wrong");
        });
        document.getElementById("quiz-feedback").textContent = ok ? T("ex.correct") : T("kanji.notThisTime");
        var next = dialog.querySelector('[data-quiz="next"]');
        next.hidden = false;
        next.textContent = quiz.index + 1 >= quiz.questions.length ? T("kanji.seeResult") : T("kanji.next2");
        next.focus();
    }

    function bindQuiz() {
        document.getElementById("quiz-open").addEventListener("click", function () {
            quizStart();
            if (typeof dialog.showModal === "function") dialog.showModal();
            else dialog.setAttribute("open", "");
        });
        dialog.addEventListener("click", function (e) {
            var opt = e.target.closest("[data-option]");
            if (opt) { quizAnswer(Number(opt.dataset.option)); return; }
            var act = e.target.closest("[data-quiz]");
            if (!act) { if (e.target === dialog) dialog.close(); return; }
            if (act.dataset.quiz === "close") dialog.close();
            else if (act.dataset.quiz === "next") { quiz.index += 1; quizRender(); var f = dialog.querySelector(".quiz-option, [data-quiz]"); if (f) f.focus(); }
            else if (act.dataset.quiz === "again") quizStart();
            else if (act.dataset.quiz === "mark") {
                quiz.results.forEach(function (r) { if (r.ok) P.setKnown(level, r.k, true); });
                applyFilters();
                act.disabled = true;
                act.textContent = T("kanji.marked");
            }
        });
        dialog.addEventListener("change", function (e) {
            if (e.target.name === "quiz-mode") quizStart(e.target.value);
        });
    }

    /* ---------- Eventos ---------- */

    function bindEvents() {
        var list = document.getElementById("kanji-list");
        list.addEventListener("click", function (e) {
            var tile = e.target.closest(".kanji-tile");
            if (tile) select(tile.dataset.kanji, true);
        });
        list.addEventListener("keydown", function (e) {
            var tile = e.target.closest(".kanji-tile");
            if (tile) arrowNav(e, tile);
        });

        detail.addEventListener("click", function (e) {
            if (e.target.closest(".detail-close")) { closeDetail(true); return; }
            var step = e.target.closest("[data-step]");
            if (step) { stepDetail(Number(step.dataset.step)); return; }
            if (e.target.closest('[data-action="known"]')) toggleKnown();
        });
        detail.addEventListener("keydown", trapFocus);
        backdrop.addEventListener("click", function () { closeDetail(true); });
        document.addEventListener("keydown", function (e) {
            if (e.key === "Escape" && state.selected && detail.classList.contains("open")) closeDetail(true);
        });
        window.addEventListener("popstate", syncFromHash);
        desktopQuery.addEventListener("change", function () { setSheet(Boolean(state.selected)); });

        document.getElementById("kanji-search").addEventListener("input", function (e) {
            state.query = e.target.value.trim();
            applyFilters();
        });

        document.getElementById("kanji-chips").addEventListener("click", function (e) {
            var btn = e.target.closest(".chip");
            if (!btn) return;
            state.category = btn.dataset.cat;
            document.querySelectorAll("#kanji-chips .chip").forEach(function (chip) {
                chip.classList.toggle("active", chip === btn);
            });
            applyFilters();
        });

        document.querySelector(".status-filter").addEventListener("change", function (e) {
            state.status = e.target.value;
            applyFilters();
        });

        if (P) P.subscribe(applyFilters);
        bindQuiz();
    }

    // Alturas do cabeçalho e dos filtros, usadas para fixar o painel abaixo deles.
    function measure() {
        var header = document.getElementById("page-header");
        var controls = document.getElementById("kanji-controls");
        var root = document.documentElement.style;
        root.setProperty("--topbar-h", header.offsetHeight + "px");
        root.setProperty("--controls-h", controls.offsetHeight + "px");
    }

    function init() {
        document.getElementById("level-label").textContent = level;
        if (!kanjiList.length) {
            document.getElementById("kanji-list").innerHTML =
                '<p class="empty-state">' + T("kanji.loadError") + '</p>';
            return;
        }
        buildSearchIndex();
        renderChips();
        document.getElementById("kanji-list").innerHTML = kanjiList.map(renderTile).join("");
        bindEvents();
        applyFilters();
        measure();
        window.addEventListener("resize", measure);
        refreshDetail();
        syncFromHash();
        measure();
    }

    // Exposto para testes e para reaproveitar em outras páginas.
    window.KanjiPage = { toRomaji: toRomaji, sentenceRomaji: sentenceRomaji, plainText: plainText };

    init();
})();
