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

    var P = window.Progress;
    function T(key, vars) { return window.I18n ? window.I18n.t(key, vars) : key; }
    function statusText(st) { return T(st === "done" ? "status.done" : st === "in_progress" ? "status.inProgress" : "status.available"); }

    // O total de seções de cada lição é gravado pela própria lição ao ser aberta.
    function summary(n) {
        if (!P) return { status: "todo", percent: 0 };
        var l = P.get().lessons[n];
        var known = l && l.sections ? Object.keys(l.sections) : [];
        if (!known.length) return { status: "todo", percent: 0 };
        var total = Number(l.total) || known.length;
        var done = known.filter(function (id) { return l.sections[id] === "done"; }).length;
        var pct = Math.min(100, Math.round(done / total * 100));
        return { status: pct === 100 ? "done" : "in_progress", percent: pct };
    }

    function cell(n) {
        var l = byNumber[n];
        var st = l ? summary(n).status : "todo";
        return l
            ? '<li><a class="map-cell ' + st + '" href="lessons/' + l.file + '" aria-label="' + T("home.lessonN", { n: n }) + ': ' + plain(l.topic) +
                (st === "todo" ? "" : " (" + statusText(st).toLowerCase() + ")") + '">' + n + "</a></li>"
            : '<li><span class="map-cell" aria-label="' + T("home.lessonN", { n: n }) + ', ' + T("status.soon").toLowerCase() + '">' + n + "</span></li>";
    }

    function card(l) {
        var sm = summary(l.number);
        var status = '<span class="lesson-status ' + sm.status + '">' + statusText(sm.status) + "</span>";
        var bar = sm.status === "todo" ? "" :
            '<div class="progress" role="progressbar" aria-label="' + T("lesson.progress") + ' ' + l.number +
            '" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + sm.percent + '"><span style="width:' + sm.percent + '%"></span></div>';
        return '<li><a class="lesson-card" href="lessons/' + l.file + '">' +
            '<div class="lesson-number">' + window.lessonLabel(l.number) + "</div>" +
            '<div class="lesson-topic">' + l.topic + "</div>" +
            '<p class="lesson-desc">' + l.description + "</p>" +
            status + bar +
            '<div class="lesson-go">' + T(sm.status === "todo" ? "home.open" : sm.status === "done" ? "home.review" : "home.continue") + "</div>" +
        "</a></li>";
    }

    function render() {
    var html = volumes.map(function (v) {
        var cells = "", cards = "";
        for (var n = v.from; n <= v.to; n++) cells += cell(n);
        lessons.filter(function (l) { return l.number >= v.from && l.number <= v.to; })
               .forEach(function (l) { cards += card(l); });
        return '<section class="volume" aria-labelledby="vol-' + v.id + '">' +
            '<div class="volume-head"><h2 id="vol-' + v.id + '">' + v.label + '</h2>' +
            '<span class="volume-range">' + v.range + "</span>" +
            '<div class="map-legend" aria-hidden="true"><span><i class="legend-swatch available"></i>' + T("status.available") + '</span><span><i class="legend-swatch in_progress"></i>' + T("status.inProgress") + '</span><span><i class="legend-swatch done"></i>' + T("status.done") + '</span>' +
            '<span><i class="legend-swatch soon"></i>' + T("status.soon") + '</span></div></div>' +
            '<ol class="lesson-map">' + cells + "</ol>" +
            (cards ? '<ul class="lesson-grid">' + cards + "</ul>" : "") +
        "</section>";
    }).join("");

    document.getElementById("licoes").innerHTML = continueCard() + (html || '<p class="empty-state">' + T("home.none") + '</p>') + resetButton();
    }

    // "Continue de onde parou": última seção aberta, se a lição ainda existe.
    function continueCard() {
        var last = P && P.last();
        var l = last && byNumber[last.id];
        var label = last && window.SECTION_LABELS && window.SECTION_LABELS[last.section];
        if (!l || !label) return "";
        return '<a class="continue-card" href="lessons/' + l.file + '#' + last.section + '">' +
            '<div class="continue-text"><div class="continue-eyebrow">' + T("home.resume") + '</div>' +
            '<div class="continue-title">' + window.lessonLabel(l.number) + " · " + label.pt + "</div></div>" +
            '<span class="continue-go">' + T("home.continue") + '</span></a>';
    }

    function resetButton() {
        if (!P || !Object.keys(P.get().lessons).length) return "";
        return '<button type="button" class="reset-progress" id="reset-progress">' + T("home.clear") + '</button>';
    }

    document.addEventListener("click", function (e) {
        if (!e.target.closest("#reset-progress")) return;
        if (window.confirm(T("home.confirmClear"))) P.clear();
    });

    render();
    if (P) P.subscribe(render);
})();
