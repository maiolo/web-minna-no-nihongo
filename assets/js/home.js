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
    var STATUS = { done: "Concluída", in_progress: "Em andamento", todo: "Disponível" };

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
            ? '<li><a class="map-cell ' + st + '" href="lessons/' + l.file + '" aria-label="Lição ' + n + ': ' + plain(l.topic) +
                (st === "todo" ? "" : " (" + STATUS[st].toLowerCase() + ")") + '">' + n + "</a></li>"
            : '<li><span class="map-cell" aria-label="Lição ' + n + ', em breve">' + n + "</span></li>";
    }

    function card(l) {
        var sm = summary(l.number);
        var status = '<span class="lesson-status ' + sm.status + '">' + STATUS[sm.status] + "</span>";
        var bar = sm.status === "todo" ? "" :
            '<div class="progress" role="progressbar" aria-label="Progresso da lição ' + l.number +
            '" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + sm.percent + '"><span style="width:' + sm.percent + '%"></span></div>';
        return '<li><a class="lesson-card" href="lessons/' + l.file + '">' +
            '<div class="lesson-number">' + window.lessonLabel(l.number) + "</div>" +
            '<div class="lesson-topic">' + l.topic + "</div>" +
            '<p class="lesson-desc">' + l.description + "</p>" +
            status + bar +
            '<div class="lesson-go">' + (sm.status === "todo" ? "Abrir lição →" : sm.status === "done" ? "Revisar →" : "Continuar →") + "</div>" +
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
            '<div class="map-legend" aria-hidden="true"><span><i class="legend-swatch available"></i>Disponível</span><span><i class="legend-swatch in_progress"></i>Em andamento</span><span><i class="legend-swatch done"></i>Concluída</span>' +
            '<span><i class="legend-swatch soon"></i>Em breve</span></div></div>' +
            '<ol class="lesson-map">' + cells + "</ol>" +
            (cards ? '<ul class="lesson-grid">' + cards + "</ul>" : "") +
        "</section>";
    }).join("");

    document.getElementById("licoes").innerHTML = continueCard() + (html || '<p class="empty-state">Nenhuma lição disponível ainda.</p>') + resetButton();
    }

    // "Continue de onde parou": última seção aberta, se a lição ainda existe.
    function continueCard() {
        var last = P && P.last();
        var l = last && byNumber[last.id];
        var label = last && window.SECTION_LABELS && window.SECTION_LABELS[last.section];
        if (!l || !label) return "";
        return '<a class="continue-card" href="lessons/' + l.file + '#' + last.section + '">' +
            '<div class="continue-text"><div class="continue-eyebrow">CONTINUE DE ONDE PAROU</div>' +
            '<div class="continue-title">' + window.lessonLabel(l.number) + " · " + label.pt + "</div></div>" +
            '<span class="continue-go">Continuar →</span></a>';
    }

    function resetButton() {
        if (!P || !Object.keys(P.get().lessons).length) return "";
        return '<button type="button" class="reset-progress" id="reset-progress">Limpar meu progresso</button>';
    }

    document.addEventListener("click", function (e) {
        if (!e.target.closest("#reset-progress")) return;
        if (window.confirm("Apagar todo o seu progresso neste aparelho?")) P.clear();
    });

    render();
    if (P) P.subscribe(render);
})();
