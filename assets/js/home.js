/*
 * Página inicial: monta o cabeçalho, o mapa de lições por volume e os cartões.
 * Tudo vem de window.LESSONS e window.VOLUMES (assets/js/lessons-index.js),
 * então uma lição nova aparece sozinha assim que entra na lista.
 */
(function () {
    "use strict";

    SiteHeader.render(document.getElementById("site-header"), { variant: "home", base: "" });

    var lessons = window.LESSONS || [];
    var volumes = window.VOLUMES || [];
    var byNumber = {};
    lessons.forEach(function (l) { byNumber[l.number] = l; });

    function plain(html) { return html.replace(/<rt>.*?<\/rt>/g, "").replace(/<[^>]+>/g, ""); }

    function cell(n) {
        var l = byNumber[n];
        return l
            ? '<li><a class="map-cell" href="lessons/' + l.file + '" aria-label="Lição ' + n + ': ' + plain(l.topic) + '">' + n + "</a></li>"
            : '<li><span class="map-cell" aria-label="Lição ' + n + ', em breve">' + n + "</span></li>";
    }

    function card(l) {
        return '<li><a class="lesson-card" href="lessons/' + l.file + '">' +
            '<div class="lesson-number">' + window.lessonLabel(l.number) + "</div>" +
            '<div class="lesson-topic">' + l.topic + "</div>" +
            '<p class="lesson-desc">' + l.description + "</p>" +
            '<span class="lesson-go">Abrir lição →</span>' +
        "</a></li>";
    }

    var html = volumes.map(function (v) {
        var cells = "", cards = "";
        for (var n = v.from; n <= v.to; n++) cells += cell(n);
        lessons.filter(function (l) { return l.number >= v.from && l.number <= v.to; })
               .forEach(function (l) { cards += card(l); });
        return '<section class="volume" aria-labelledby="vol-' + v.id + '">' +
            '<div class="volume-head"><h2 id="vol-' + v.id + '">' + v.label + '</h2>' +
            '<span class="volume-range">' + v.range + "</span>" +
            '<div class="map-legend" aria-hidden="true"><span><i class="legend-swatch available"></i>Disponível</span>' +
            '<span><i class="legend-swatch soon"></i>Em breve</span></div></div>' +
            '<ol class="lesson-map">' + cells + "</ol>" +
            (cards ? '<ul class="lesson-grid">' + cards + "</ul>" : "") +
        "</section>";
    }).join("");

    document.getElementById("licoes").innerHTML = html || '<p class="empty-state">Nenhuma lição disponível ainda.</p>';
})();
