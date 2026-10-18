/*
 * Cabeçalho compartilhado do site.
 *
 *   SiteHeader.render(<header>, opções)
 *
 * Página interna (lição, JLPT):
 *   {
 *     stamp: "17",                      carimbo vermelho (texto curto)
 *     title: "ない<ruby>形</ruby>",     título da página (HTML; aceita <ruby>)
 *     back: { href, label },            seta de voltar (só aparece no celular)
 *     crumbs: [{ label, href }, ...]    caminho de migalhas; o último não tem href
 *   }
 * Página inicial:
 *   { variant: "home", base: "" }       logotipo + atalhos (base = prefixo até a raiz)
 *
 * O botão "Ajustes" (settings-panel.js) é montado no cabeçalho, a menos que
 * se passe settings: false. Os rótulos são texto fixo do projeto, não dados
 * do usuário.
 */
(function (root) {
    "use strict";

    var BACK_ICON =
        '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' +
        'stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
        '<path d="M15 5l-7 7 7 7"/></svg>';

    function breadcrumb(crumbs) {
        if (!crumbs || !crumbs.length) return "";
        var items = crumbs.map(function (c, i) {
            var last = i === crumbs.length - 1;
            return last
                ? '<li aria-current="page">' + c.label + "</li>"
                : '<li><a href="' + c.href + '">' + c.label + "</a></li>";
        }).join("");
        return '<nav class="breadcrumb" aria-label="Você está em"><ol>' + items + "</ol></nav>";
    }

    function pageHeader(o) {
        var back = o.back
            ? '<a class="topbar-back" href="' + o.back.href + '" aria-label="' + o.back.label + '">' + BACK_ICON + "</a>"
            : "";
        return breadcrumb(o.crumbs) +
            '<div class="topbar-inner">' +
                back +
                '<div class="topbar-title">' +
                    (o.stamp ? '<span class="stamp" aria-hidden="true">' + o.stamp + "</span>" : "") +
                    "<h1>" + o.title + "</h1>" +
                "</div>" +
                '<div class="settings-slot"></div>' +
            "</div>";
    }

    function homeHeader(o) {
        var base = o.base || "";
        return '<div class="topbar-inner">' +
            '<a class="brand" href="' + base + 'index.html">' +
                '<span class="stamp stamp-logo" aria-hidden="true">日</span>' +
                '<span class="brand-text">' +
                    '<span class="brand-name">みんなの<ruby>日<rt>に</rt></ruby><ruby>本<rt>ほん</rt></ruby><ruby>語<rt>ご</rt></ruby></span>' +
                    '<span class="brand-sub">Estudo na web</span>' +
                "</span>" +
            "</a>" +
            '<nav class="topbar-nav" aria-label="Principal">' +
                '<a href="#licoes">Lições</a>' +
                '<a href="' + base + 'jlpt/index.html">JLPT</a>' +
            "</nav>" +
            '<div class="settings-slot"></div>' +
        "</div>";
    }

    function render(header, options) {
        var o = options || {};
        header.classList.add("topbar");
        header.innerHTML = o.variant === "home" ? homeHeader(o) : pageHeader(o);
        if (o.settings !== false && root.SettingsPanel) {
            root.SettingsPanel.mount(header.querySelector(".settings-slot"));
        }
        return header;
    }

    root.SiteHeader = { render: render };
})(window);
