/*
 * Página de gramática do JLPT.
 *
 * Lista os pontos de jlpt/data/n5-grammar.js (window.JLPT_N5_GRAMMAR). Cada ponto é um
 * <details> independente; o corpo é montado na primeira abertura. O link "Ver na lição"
 * só aparece quando o ponto tem `lesson` e a lição existe em window.LESSONS.
 * Dá para abrir direto um ponto com #id (ex.: n5-grammar.html#te-kara).
 */
(function () {
    "use strict";

    var body = document.body;
    var points = (window.I18n ? window.I18n.localize(window[body.dataset.global] || [], window.I18n.lang()) : (window[body.dataset.global] || []));
    function T(key, vars) { return window.I18n ? window.I18n.t(key, vars) : key; }
    var N = window.Notation;
    var lessons = window.LESSONS || [];

    var CATEGORIES = [
        { id: "all", label: T("common.all") },
        { id: "particulas", label: T("gram.cat.particulas") },
        { id: "frases", label: T("gram.cat.frases") },
        { id: "verbos", label: T("gram.cat.verbos") },
        { id: "adjetivos", label: T("gram.cat.adjetivos") }
    ];

    var SPEAKER =
        '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" ' +
        'stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 9v6h4l5 4V5L8 9H4z"/>' +
        '<path d="M16.5 8.5a5 5 0 0 1 0 7M19 6a8.5 8.5 0 0 1 0 12"/></svg>';

    var state = { query: "", cat: "all" };

    function esc(s) {
        return String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    }
    function fold(s) {
        return String(s).toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
    }

    // Como toRuby, mas mantém os espaços (padrões como "V ます / ません").
    function ruby(text) {
        return text.replace(/\^/g, "").replace(/\{([^|}]+)\|([^}]+)\}/g, "<ruby>$1<rt>$2</rt></ruby>");
    }

    function speakButton(notation) {
        var text = N.readingText(notation).replace(/\^は/g, "わ").replace(/\^へ/g, "え").replace(/\^/g, "").replace(/ /g, "");
        return '<button type="button" class="speak-btn" data-speak="' + esc(text) + '" aria-label="' + T("kanji.listenSentence") + '" title="' + T("lesson.listen") + '">' + SPEAKER + "</button>";
    }

    function lessonOf(p) {
        if (!p.lesson) return null;
        return lessons.filter(function (l) { return l.number === p.lesson; })[0] || null;
    }

    function searchText(p) {
        var jp = [p.pat, p.title].concat(p.ex.map(function (e) { return e[0]; })).join(" ");
        return fold([N.plainText(jp), N.readingText(jp), N.toRomaji(N.readingText(jp).replace(/\^/g, "").replace(/ /g, "")), N.plainText(p.mean + p.rule), p.mean, p.rule, p.ex.map(function (e) { return e[1]; }).join(" ")].join(" "));
    }

    function catLabel(id) {
        return CATEGORIES.filter(function (c) { return c.id === id; })[0].label;
    }

    function visiblePoints() {
        var q = fold(state.query.trim());
        return points.filter(function (p) {
            if (state.cat !== "all" && p.cat !== state.cat) return false;
            return !q || searchText(p).indexOf(q) !== -1;
        });
    }

    function renderItem(p) {
        var tag = lessonOf(p) ? '<span class="group-badge g2">' + T("home.lessonN", { n: p.lesson }) + "</span>" : "";
        return '<details class="verb-item gram-item" id="' + p.id + '" data-id="' + p.id + '">' +
            "<summary>" +
                '<span class="gram-head"><span class="gram-pat" lang="ja">' + ruby(p.pat) + "</span>" +
                '<span class="gram-title">' + ruby(p.title) + "</span></span>" + tag +
            "</summary>" +
            '<div class="verb-body"></div>' +
        "</details>";
    }

    function renderBody(p) {
        var lesson = lessonOf(p);
        var examples = p.ex.map(function (e) {
            return '<li class="example"><div class="jp-row"><div class="jp-example" lang="ja">' + N.toRuby(e[0]) + "</div>" + speakButton(e[0]) + "</div>" +
                '<div class="romaji">' + N.sentenceRomaji(e[0]) + "</div>" +
                '<div class="pt-line">' + T("tr.flag") + ' ' + esc(e[1]) + "</div></li>";
        }).join("");
        return '<p class="gram-mean"><strong>' + ruby(esc(p.mean)) + "</strong></p>" +
            '<p class="gram-rule">' + ruby(esc(p.rule)) + "</p>" +
            '<ul class="example-list">' + examples + "</ul>" +
            (p.note ? '<div class="kanji-note">' + ruby(esc(p.note)) + "</div>" : "") +
            (lesson ? '<a class="lesson-link" href="../lessons/' + lesson.file + '#gramatica">' + T("gram.seeLesson", { n: lesson.number }) + "</a>" : "");
    }

    function fill(item) {
        if (item.dataset.ready) return;
        var p = points.filter(function (x) { return x.id === item.dataset.id; })[0];
        item.querySelector(".verb-body").innerHTML = renderBody(p);
        item.dataset.ready = "1";
    }

    function renderList() {
        var found = visiblePoints();
        document.getElementById("gram-list").innerHTML = found.map(renderItem).join("");
        document.getElementById("gram-count").textContent =
            found.length === points.length ? T("gram.count", { n: points.length }) : T("gram.countOf", { n: found.length, total: points.length });
        document.getElementById("gram-empty").hidden = found.length > 0;
    }

    function renderChips() {
        document.getElementById("gram-chips").innerHTML = CATEGORIES.map(function (c) {
            return '<button type="button" class="chip' + (state.cat === c.id ? " active" : "") +
                '" data-cat="' + c.id + '" aria-pressed="' + (state.cat === c.id) + '">' + c.label + "</button>";
        }).join("");
    }

    document.getElementById("gram-list").addEventListener("toggle", function (e) {
        if (e.target.open) fill(e.target);
    }, true);

    document.getElementById("gram-chips").addEventListener("click", function (e) {
        var btn = e.target.closest("[data-cat]");
        if (!btn) return;
        state.cat = btn.dataset.cat;
        renderChips();
        renderList();
    });

    document.getElementById("gram-search").addEventListener("input", function (e) {
        state.query = e.target.value;
        renderList();
    });

    renderChips();
    renderList();

    // #id abre o ponto (e mostra todos, se o filtro escondê-lo).
    function openFromHash() {
        var id = decodeURIComponent(location.hash.slice(1));
        if (!id) return;
        var item = document.getElementById(id);
        if (!item || !item.classList.contains("gram-item")) return;
        item.open = true;
        fill(item);
        item.scrollIntoView({ block: "start" });
    }
    window.addEventListener("hashchange", openFromHash);
    openFromHash();
})();
