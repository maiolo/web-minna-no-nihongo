/*
 * Página de verbos do JLPT.
 *
 * Lista os verbos de jlpt/data/n5-verbs.js (window.JLPT_N5_VERBS). Cada verbo é um
 * <details> que abre sozinho (um não fecha o outro) e monta a tabela de formas só
 * na primeira abertura. As formas vêm de assets/js/verbs.js.
 * Configuração em <body>: data-global (nome da lista) e data-level (ex.: N5).
 */
(function () {
    "use strict";

    var body = document.body;
    var verbs = (window.I18n ? window.I18n.localize(window[body.dataset.global] || [], window.I18n.lang()) : (window[body.dataset.global] || []));
    var V = window.Verbs, N = window.Notation;
    function T(key, vars) { return window.I18n ? window.I18n.t(key, vars) : key; }
    var FORMS = window.I18n ? window.I18n.localize(V.FORMS, window.I18n.lang()) : V.FORMS;
    var GROUPS = window.I18n ? window.I18n.localize(V.GROUPS, window.I18n.lang()) : V.GROUPS;

    var GROUP_FILTERS = [
        { id: "all", label: T("common.all") },
        { id: "1", label: T("verbs.group", { n: 1 }) },
        { id: "2", label: T("verbs.group", { n: 2 }) },
        { id: "3", label: T("verbs.group", { n: 3 }) }
    ];

    var SPEAKER =
        '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" ' +
        'stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 9v6h4l5 4V5L8 9H4z"/>' +
        '<path d="M16.5 8.5a5 5 0 0 1 0 7M19 6a8.5 8.5 0 0 1 0 12"/></svg>';

    var state = { query: "", group: "all" };

    function esc(s) {
        return String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    }

    // Sem acento e minúsculo, para a busca em português.
    function fold(s) {
        return String(s).toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
    }

    // Notação -> <ruby>, mantendo os espaços (textos explicativos).
    function rubyText(text) {
        return text.replace(/\^/g, "").replace(/\{([^|}]+)\|([^}]+)\}/g, "<ruby>$1<rt>$2</rt></ruby>");
    }

    function speakButton(notation) {
        var text = N.readingText(notation).replace(/\^は/g, "わ").replace(/\^へ/g, "え").replace(/\^/g, "").replace(/ /g, "");
        return '<button type="button" class="speak-btn" data-speak="' + esc(text) + '" aria-label="' + T("lesson.listen") + '" title="' + T("lesson.listen") + '">' + SPEAKER + "</button>";
    }

    function romajiOf(notation) { return N.toRomaji(V.reading(notation)); }

    function searchText(v) {
        var kana = V.reading(v.jp);
        return fold([N.plainText(v.jp), kana, N.toRomaji(kana), v.pt].join(" "));
    }

    /* ---------- Explicação dos grupos ---------- */

    var GROUP_SAMPLES = { 1: "{書|か}く", 2: "{食|た}べる", 3: "する" };

    function renderGroups() {
        var host = document.getElementById("verb-groups");
        if (!host) return;
        host.innerHTML = [1, 2, 3].map(function (g) {
            var info = GROUPS[g];
            var sample = verbs.filter(function (v) { return v.jp === GROUP_SAMPLES[g]; })[0] ||
                { jp: GROUP_SAMPLES[g], g: g, pt: "" };
            var chain = ["dict", "masu", "te", "nai"].map(function (id) {
                return '<span class="chain-step">' + N.toRuby(V.conjugate(sample, id)) + "</span>";
            }).join('<span class="chain-arrow" aria-hidden="true">→</span>');
            return '<div class="group-card g' + g + '">' +
                '<div class="group-head"><span class="group-badge g' + g + '">' + info.label + "</span>" +
                '<span class="group-jp">' + info.jp + "</span></div>" +
                "<p>" + info.rule + "</p>" +
                '<div class="group-chain" lang="ja">' + chain + "</div>" +
            "</div>";
        }).join("");
    }

    /* ---------- Lista ---------- */

    function visibleVerbs() {
        var q = fold(state.query.trim());
        return verbs.filter(function (v) {
            if (state.group !== "all" && String(v.g) !== state.group) return false;
            return !q || searchText(v).indexOf(q) !== -1;
        });
    }

    function renderItem(v) {
        var index = verbs.indexOf(v);
        return '<details class="verb-item" data-index="' + index + '">' +
            "<summary>" +
                '<span class="verb-jp" lang="ja">' + N.toRuby(v.jp) + "</span>" +
                '<span class="verb-pt">' + esc(v.pt) + "</span>" +
                '<span class="group-badge g' + v.g + '">G' + v.g + "</span>" +
            "</summary>" +
            '<div class="verb-body"></div>' +
        "</details>";
    }

    function renderList() {
        var list = document.getElementById("verb-list");
        var found = visibleVerbs();
        list.innerHTML = found.map(renderItem).join("");
        document.getElementById("verb-count").textContent =
            found.length === verbs.length ? T("verbs.count", { n: verbs.length }) : T("verbs.countOf", { n: found.length, total: verbs.length });
        document.getElementById("verb-empty").hidden = found.length > 0;
    }

    function renderBody(v) {
        var example = "";
        if (v.ex) {
            example = '<div class="verb-example">' +
                '<div class="jp-row"><div class="jp-example" lang="ja">' + N.toRuby(v.ex[0]) + "</div>" + speakButton(v.ex[0]) + "</div>" +
                '<div class="romaji">' + N.sentenceRomaji(v.ex[0]) + "</div>" +
                '<div class="pt-line">' + T("tr.flag") + ' ' + esc(v.ex[1]) + "</div>" +
            "</div>";
        }
        var note = v.note ? '<div class="kanji-note">' + rubyText(esc(v.note)) + "</div>" : "";
        var rows = FORMS.map(function (f) {
            var out = V.conjugate(v, f.id);
            if (out === null) {
                return '<li class="form-row is-na"><div class="form-label"><span class="form-name" lang="ja">' + f.jp +
                    '</span><span class="form-desc">' + f.pt + '</span></div><div class="form-value">' + T("verbs.notUsed") + '</div></li>';
            }
            return '<li class="form-row"><div class="form-label"><span class="form-name" lang="ja">' + f.jp +
                '</span><span class="form-desc">' + f.pt + "</span></div>" +
                '<div class="form-value"><span class="form-jp" lang="ja">' + N.toRuby(out) + "</span>" +
                '<span class="romaji">' + romajiOf(out) + "</span></div>" +
                speakButton(out) + "</li>";
        }).join("");
        return example + note + '<ul class="verb-forms">' + rows + "</ul>";
    }

    // Monta o corpo só na primeira abertura (o evento toggle não borbulha: captura).
    document.getElementById("verb-list").addEventListener("toggle", function (e) {
        var item = e.target;
        if (!item.open || item.dataset.ready) return;
        item.querySelector(".verb-body").innerHTML = renderBody(verbs[Number(item.dataset.index)]);
        item.dataset.ready = "1";
    }, true);

    /* ---------- Controles ---------- */

    function renderChips() {
        var host = document.getElementById("verb-chips");
        host.innerHTML = GROUP_FILTERS.map(function (c) {
            return '<button type="button" class="chip' + (state.group === c.id ? " active" : "") +
                '" data-group="' + c.id + '" aria-pressed="' + (state.group === c.id) + '">' + c.label + "</button>";
        }).join("");
    }

    document.getElementById("verb-chips").addEventListener("click", function (e) {
        var btn = e.target.closest("[data-group]");
        if (!btn) return;
        state.group = btn.dataset.group;
        renderChips();
        renderList();
    });

    document.getElementById("verb-search").addEventListener("input", function (e) {
        state.query = e.target.value;
        renderList();
    });

    renderGroups();
    renderChips();
    renderList();
})();
