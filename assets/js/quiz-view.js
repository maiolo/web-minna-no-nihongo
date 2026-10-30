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
 *   QuizView.examPassageHtml(q, furigana)  texto, tabela e pergunta de uma questão de leitura ou de texto com lacunas
 *   QuizView.examScriptHtml(q)             transcrição de uma questão de escuta (pergunta e falas), para a correção
 */
(function (root) {
    "use strict";

    // No navegador, o idioma vem de assets/js/i18n.js; no node (testes), os textos saem em português.
    var I18N = root.I18n || (typeof module !== "undefined" && module.exports ? (function () {
        var i18n = require("./i18n.js"), strings = require("./i18n-strings.js");
        i18n.add("pt", strings.pt); i18n.add("en", strings.en);
        return i18n;
    })() : null);
    function T(key, vars) { return I18N ? I18N.t(key, vars) : key; }

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
    function examSentenceHtml(q, furigana) { return q.sentence ? examText(q.sentence, furigana) : ""; }

    // Texto (parágrafos), tabela e pergunta. Nos textos com lacunas, a lacuna da questão fica em destaque.
    function examPassageHtml(q, furigana) {
        var html = "";
        if (q.passage) {
            html += '<div class="exam-passage" lang="ja">' + String(q.passage).split("\n").map(function (line) {
                return "<p>" + N.toExam(line, { furigana: Boolean(furigana), known: known, current: q.blankNo }) + "</p>";
            }).join("") + "</div>";
        }
        if (q.table) {
            html += '<div class="exam-table-wrap" lang="ja"><table class="exam-table"><thead><tr>' + q.table.head.map(function (h) { return "<th>" + examText(h, furigana) + "</th>"; }).join("") +
                "</tr></thead><tbody>" + q.table.rows.map(function (r) {
                    return "<tr>" + r.map(function (c) { return "<td>" + examText(c, furigana) + "</td>"; }).join("") + "</tr>";
                }).join("") + "</tbody></table></div>";
        }
        if (q.question) html += '<p class="exam-question" lang="ja">' + examText(q.question, furigana) + "</p>";
        return html;
    }

    // Transcrição de uma questão de escuta: ♀ vira 女 e ♂ vira 男. Só aparece na correção (furigana ligado).
    function examScriptHtml(q) {
        if (!q.transcriptQ && !(q.script && q.script.length)) return "";
        var lines = (q.script || []).map(function (line) {
            var m = /^([♀♂])\s*(.*)$/.exec(line);
            return "<p>" + (m ? '<b class="who">' + (m[1] === "♀" ? "女" : "男") + "</b> " : "") + examText(m ? m[2] : line, true) + "</p>";
        }).join("");
        return '<div class="exam-script" lang="ja"><p class="exam-script-q">' + examText(q.transcriptQ || "", true) + "</p>" + lines + "</div>";
    }

    function examSummary(q) {
        if (q.speak && q.transcriptQ) return examText(q.transcriptQ, true);
        if (q.sentence) return examSentenceHtml(q, true);
        if (q.blankNo) return "［" + q.blankNo + "］ " + examText(q.passage.split("\n")[0].slice(0, 14), true) + "…";
        return examText(q.question, true);
    }

    function speakButton(notation) {
        var text = N.readingText(notation).replace(/\^は/g, "わ").replace(/\^へ/g, "え").replace(/\^/g, "").replace(/ /g, "");
        return '<button type="button" class="speak-btn" data-speak="' + esc(text) + '" aria-label="Ouvir" title="Ouvir">' + SPEAKER + "</button>";
    }

    function sentenceHtml(q, filled) {
        var parts = q.sentence.split("＿＿");
        var middle = filled === null || filled === undefined
            ? '<span class="blank" aria-label="' + T("quiz.blank") + '">＿＿</span>'
            : '<span class="blank filled">' + N.toRuby(filled) + "</span>";
        return N.toRuby(parts[0]) + middle + N.toRuby(parts[1] || "");
    }

    function listenHtml(q) {
        return '<div class="listen-box"><button type="button" class="speak-btn listen-btn" data-speak="' + esc(q.speak) + '" aria-label="' + T("lesson.listen") + '">' +
            SPEAKER + "<span>" + T("lesson.listen") + "</span></button>" +
            '<p class="listen-hint">' + T("quiz.listenHint") + "</p></div>";
    }

    function linkFor(q) {
        if (q.ref) return '<a class="lesson-link" href="n5-grammar.html#' + encodeURIComponent(q.ref) + '">' + T("quiz.seeGrammar") + '</a>';
        if (q.topic.indexOf("verbo") === 0) return '<a class="lesson-link" href="n5-verbs.html">' + T("quiz.seeVerbs") + '</a>';
        return '<a class="lesson-link" href="n5-kanji.html">' + T("quiz.seeKanji") + '</a>';
    }

    var MARK = { ok: "✓", bad: "✗", blank: "–" };
    function statusText(s) { return T(s === "ok" ? "review.rightOne" : s === "bad" ? "review.wrongOne" : "review.blank"); }

    function statusOf(q, chosen) {
        if (chosen === null || chosen === undefined) return "blank";
        return chosen === q.answer ? "ok" : "bad";
    }

    // Item da correção de uma questão da prova (formato JLPT): o furigana fica ligado, para estudar.
    function examReviewItem(q, chosen, options) {
        var status = statusOf(q, chosen);
        var open = options && options.open !== undefined ? options.open : status !== "ok";
        var yours = status === "blank" ? T("quiz.blankAnswer") : examText(q.options[chosen], true);
        return '<details class="verb-item review-item ' + status + '"' + (open ? " open" : "") + ">" +
            '<summary>' + (options && options.number ? '<span class="review-num">' + options.number + "</span>" : "") +
            '<span class="review-mark ' + status + '" role="img" aria-label="' + statusText(status) + '">' + MARK[status] + "</span>" +
            '<span class="verb-pt" lang="ja">' + examSummary(q) + "</span></summary>" +
            '<div class="verb-body">' + (q.scene ? '<div class="exam-scene" aria-hidden="true">' + q.scene + "</div>" : "") + examScriptHtml(q) + examPassageHtml(q, true) +
                (q.sentence ? '<div class="practice-sentence" lang="ja">' + examSentenceHtml(q, true) + "</div>" : "") +
                '<ol class="review-options" lang="ja">' + q.options.map(function (o, i) {
                    return '<li class="' + (i === q.answer ? "is-right" : (i === chosen ? "is-wrong" : "")) + '">' + examText(o, true) + "</li>";
                }).join("") + "</ol>" +
                '<p class="missed-line">' + T("quiz.youAnswered") + ' <span class="' + (status === "ok" ? "right-text" : "wrong-text") + '" lang="ja">' + yours + "</span></p>" +
                (status === "ok" ? "" : '<p class="missed-line">' + T("quiz.right") + ' <strong lang="ja">' + examText(q.options[q.answer], true) + "</strong></p>") +
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
            ? T("quiz.blankAnswer")
            : rubyText(q.options[chosen]);
        return '<details class="verb-item review-item ' + status + '"' + (open ? " open" : "") + ">" +
            '<summary>' + (options && options.number ? '<span class="review-num">' + options.number + "</span>" : "") + '<span class="review-mark ' + status + '" role="img" aria-label="' + statusText(status) + '">' + MARK[status] + "</span>" + summary + "</summary>" +
            '<div class="verb-body">' +
                (q.glyph ? '<div class="missed-glyph" lang="ja">' + esc(q.glyph) + "</div>" : "") +
                (q.sentence ? '<div class="practice-sentence" lang="ja">' + sentenceHtml(q, q.options[q.answer]) + "</div>" : "") +
                (q.hint ? '<div class="pt-line">' + T("tr.flag") + ' ' + esc(q.hint) + "</div>" : "") +
                (q.heard ? '<div class="practice-sentence" lang="ja">' + N.toRuby(q.heard) + "</div>" : "") +
                '<p class="missed-line">' + T("quiz.youAnswered") + ' <span class="' + (status === "ok" ? "right-text" : "wrong-text") + '" lang="ja">' + yours + "</span></p>" +
                (status === "ok" ? "" : '<p class="missed-line">' + T("quiz.right") + ' <strong lang="ja">' + rubyText(q.options[q.answer]) + "</strong></p>") +
                '<div class="kanji-note">' + rubyText(q.explain) + "</div>" +
                (filled ? '<div class="jp-row"><div class="romaji">' + N.sentenceRomaji(filled) + "</div>" + speakButton(filled) + "</div>" : "") +
                linkFor(q) +
            "</div></details>";
    }

    var api = {
        esc: esc, rubyText: rubyText, speakButton: speakButton, sentenceHtml: sentenceHtml, listenHtml: listenHtml, linkFor: linkFor,
        reviewItem: reviewItem, statusOf: statusOf, setKnown: setKnown, examText: examText, examInstruction: examInstruction, examSentenceHtml: examSentenceHtml, examPassageHtml: examPassageHtml, examScriptHtml: examScriptHtml
    };

    if (typeof module !== "undefined" && module.exports) { module.exports = api; return; }
    root.QuizView = api;
})(typeof window !== "undefined" ? window : globalThis);
