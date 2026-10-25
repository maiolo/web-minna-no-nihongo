/*
 * Trechos de HTML compartilhados pelas páginas de treino e de simulado
 * (funções puras que devolvem texto, testadas com node --test).
 *
 *   QuizView.esc(texto)                  escapa &, ", < e >
 *   QuizView.rubyText(notação)           {漢字|かんじ} -> <ruby>, mantendo os espaços
 *   QuizView.sentenceHtml(q, preenchida) frase da questão; lacuna vazia ou preenchida
 *   QuizView.speakButton(notação)        botão de áudio (veja speech.js)
 *   QuizView.listenHtml(q)               botão grande "Ouvir" das questões de escuta (o japonês fica escondido)
 *   QuizView.linkFor(q)                  "Ver o ponto de gramática →" etc.
 *   QuizView.reviewItem(q, escolhida, { open, number })   um item da correção (certo, errado ou em branco)
 *   QuizView.setKnown(kanji)             kanji do N5 (texto): na prova, esses aparecem sem furigana
 *   QuizView.examText(notação, furigana) texto no estilo da prova (Notation.toExam com os kanji conhecidos)
 *   QuizView.examInstruction(mondai)     enunciado do mondai em japonês (＿＿＿ vira um sublinhado em branco)
 *   QuizView.examSentenceHtml(q, furigana) frase de uma questão "ex:" (sublinhada ou com lacuna)
 */
(function (root) {
    "use strict";

    var N = typeof module !== "undefined" && module.exports ? require("./notation.js") : root.Notation;

    var SPEAKER =
        '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" ' +
        'stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 9v6h4l5 4V5L8 9H4z"/>' +
        '<path d="M16.5 8.5a5 5 0 0 1 0 7M19 6a8.5 8.5 0 0 1 0 12"/></svg>';

    function esc(s) {
        return String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    }

    // Notação -> <ruby>, mantendo os espaços (enunciados, alternativas e explicações).
    function rubyText(text) {
        return esc(text).replace(/\^/g, "").replace(/\{([^|}]+)\|([^}]+)\}/g, "<ruby>$1<rt>$2</rt></ruby>");
    }

    var known = "";
    function setKnown(kanji) { known = String(kanji || ""); }
    function examText(text, furigana) { return N.toExam(text, { furigana: Boolean(furigana), known: known }); }
    function examInstruction(mondai) {
        // ＿＿＿ do enunciado é um sublinhado em branco (o ＿＿ de lacuna só vale nas frases das questões).
        return N.toExam(mondai.instr.replace(/＿＿＿/g, "\u0001"), { furigana: false, known: known }).replace(/\u0001/g, '<u class="blank-u">　　　</u>');
    }
    function examSentenceHtml(q, furigana) { return examText(q.sentence, furigana); }

    function speakButton(notation) {
        var text = N.readingText(notation).replace(/\^は/g, "わ").replace(/\^へ/g, "え").replace(/\^/g, "").replace(/ /g, "");
        return '<button type="button" class="speak-btn" data-speak="' + esc(text) + '" aria-label="Ouvir" title="Ouvir">' + SPEAKER + "</button>";
    }

    function sentenceHtml(q, filled) {
        var parts = q.sentence.split("＿＿");
        var middle = filled === null || filled === undefined
            ? '<span class="blank" aria-label="lacuna">＿＿</span>'
            : '<span class="blank filled">' + N.toRuby(filled) + "</span>";
        return N.toRuby(parts[0]) + middle + N.toRuby(parts[1] || "");
    }

    function listenHtml(q) {
        return '<div class="listen-box"><button type="button" class="speak-btn listen-btn" data-speak="' + esc(q.speak) + '" aria-label="Ouvir">' +
            SPEAKER + "<span>Ouvir</span></button>" +
            '<p class="listen-hint">Toque para ouvir. Toque de novo para repetir.</p></div>';
    }

    function linkFor(q) {
        if (q.ref) return '<a class="lesson-link" href="n5-grammar.html#' + encodeURIComponent(q.ref) + '">Ver o ponto de gramática →</a>';
        if (q.topic.indexOf("verbo") === 0) return '<a class="lesson-link" href="n5-verbs.html">Ver a página de verbos →</a>';
        return '<a class="lesson-link" href="n5-kanji.html">Ver a lista de kanji →</a>';
    }

    var MARK = { ok: "✓", bad: "✗", blank: "–" };
    var STATUS_TEXT = { ok: "Certa", bad: "Errada", blank: "Em branco" };

    function statusOf(q, chosen) {
        if (chosen === null || chosen === undefined) return "blank";
        return chosen === q.answer ? "ok" : "bad";
    }

    // Item da correção de uma questão da prova (formato JLPT): o furigana fica ligado, para estudar.
    function examReviewItem(q, chosen, options) {
        var status = statusOf(q, chosen);
        var open = options && options.open !== undefined ? options.open : status !== "ok";
        var yours = status === "blank" ? "(em branco)" : examText(q.options[chosen], true);
        return '<details class="verb-item review-item ' + status + '"' + (open ? " open" : "") + ">" +
            '<summary>' + (options && options.number ? '<span class="review-num">' + options.number + "</span>" : "") +
            '<span class="review-mark ' + status + '" role="img" aria-label="' + STATUS_TEXT[status] + '">' + MARK[status] + "</span>" +
            '<span class="verb-pt" lang="ja">' + examSentenceHtml(q, true) + "</span></summary>" +
            '<div class="verb-body">' +
                '<div class="practice-sentence" lang="ja">' + examSentenceHtml(q, true) + "</div>" +
                '<ol class="review-options" lang="ja">' + q.options.map(function (o, i) {
                    return '<li class="' + (i === q.answer ? "is-right" : (i === chosen ? "is-wrong" : "")) + '">' + examText(o, true) + "</li>";
                }).join("") + "</ol>" +
                '<p class="missed-line">Você respondeu: <span class="' + (status === "ok" ? "right-text" : "wrong-text") + '" lang="ja">' + yours + "</span></p>" +
                (status === "ok" ? "" : '<p class="missed-line">Certa: <strong lang="ja">' + examText(q.options[q.answer], true) + "</strong></p>") +
                '<div class="kanji-note">' + rubyText(q.explain) + "</div>" +
            "</div></details>";
    }

    function reviewItem(q, chosen, options) {
        if (q.exam) return examReviewItem(q, chosen, options);
        var status = statusOf(q, chosen);
        var open = options && options.open !== undefined ? options.open : status !== "ok";
        var filled = q.sentence ? q.sentence.replace("＿＿", q.options[q.answer]) : (q.heard || null);
        var summary = q.speak ? '<span class="verb-pt">' + rubyText(q.prompt) + "</span>" : q.sentence ? '<span class="verb-pt" lang="ja">' + sentenceHtml(q, null) + "</span>" : '<span class="verb-pt">' + rubyText(q.prompt) + "</span>";
        var yours = status === "blank"
            ? "(em branco)"
            : rubyText(q.options[chosen]);
        return '<details class="verb-item review-item ' + status + '"' + (open ? " open" : "") + ">" +
            '<summary>' + (options && options.number ? '<span class="review-num">' + options.number + "</span>" : "") + '<span class="review-mark ' + status + '" role="img" aria-label="' + STATUS_TEXT[status] + '">' + MARK[status] + "</span>" + summary + "</summary>" +
            '<div class="verb-body">' +
                (q.glyph ? '<div class="missed-glyph" lang="ja">' + esc(q.glyph) + "</div>" : "") +
                (q.sentence ? '<div class="practice-sentence" lang="ja">' + sentenceHtml(q, q.options[q.answer]) + "</div>" : "") +
                (q.hint ? '<div class="pt-line">🇧🇷 ' + esc(q.hint) + "</div>" : "") +
                (q.heard ? '<div class="practice-sentence" lang="ja">' + N.toRuby(q.heard) + "</div>" : "") +
                '<p class="missed-line">Você respondeu: <span class="' + (status === "ok" ? "right-text" : "wrong-text") + '" lang="ja">' + yours + "</span></p>" +
                (status === "ok" ? "" : '<p class="missed-line">Certa: <strong lang="ja">' + rubyText(q.options[q.answer]) + "</strong></p>") +
                '<div class="kanji-note">' + rubyText(q.explain) + "</div>" +
                (filled ? '<div class="jp-row"><div class="romaji">' + N.sentenceRomaji(filled) + "</div>" + speakButton(filled) + "</div>" : "") +
                linkFor(q) +
            "</div></details>";
    }

    var api = {
        esc: esc, rubyText: rubyText, speakButton: speakButton, sentenceHtml: sentenceHtml, listenHtml: listenHtml, linkFor: linkFor,
        reviewItem: reviewItem, statusOf: statusOf, setKnown: setKnown, examText: examText, examInstruction: examInstruction, examSentenceHtml: examSentenceHtml
    };

    if (typeof module !== "undefined" && module.exports) { module.exports = api; return; }
    root.QuizView = api;
})(typeof window !== "undefined" ? window : globalThis);
