/*
 * Funções puras dos exercícios (sem DOM, testadas com node --test).
 *
 *   Exercises.romajiToKana(texto)   -> { kana, pending }  digitar romaji, ver hiragana
 *   Exercises.finalize(texto)       como romajiToKana, mas um "n" final vira ん (usar ao verificar)
 *   Exercises.toHiragana(texto)     katakana -> hiragana (para comparar leituras)
 *   Exercises.diff(digitado, certo) -> [{ t: "same"|"del"|"ins", ch }]  diferença por caractere
 *   Exercises.readingOf(html)       texto com cada <ruby> trocado pela leitura (furigana)
 *   Exercises.baseOf(html)          texto com o kanji, sem furigana
 *   Exercises.normalize(texto)      ignora espaços e pontuação
 *   Exercises.shuffleSeeded(lista, semente)   embaralha sempre do mesmo jeito (e nunca na ordem original)
 */
(function (root) {
    "use strict";

    /* ---------- romaji -> hiragana ---------- */

    var TABLE = {};
    function row(consonant, kana) {
        ["a", "i", "u", "e", "o"].forEach(function (v, n) { if (kana[n]) TABLE[consonant + v] = kana[n]; });
    }
    row("", "あいうえお");
    row("k", "かきくけこ"); row("g", "がぎぐげご"); row("s", "さしすせそ"); row("z", "ざじずぜぞ");
    row("t", "たちつてと"); row("d", "だぢづでど"); row("n", "なにぬねの"); row("h", "はひふへほ");
    row("b", "ばびぶべぼ"); row("p", "ぱぴぷぺぽ"); row("m", "まみむめも"); row("r", "らりるれろ");
    row("w", ["わ", "", "う", "", "を"]); row("y", ["や", "", "ゆ", "", "よ"]); row("f", ["ふぁ", "ふぃ", "ふ", "ふぇ", "ふぉ"]);
    row("j", ["じゃ", "じ", "じゅ", "じぇ", "じょ"]);
    ["ky:き", "gy:ぎ", "ny:に", "hy:ひ", "by:び", "py:ぴ", "my:み", "ry:り"].forEach(function (s) {
        var c = s.split(":"); row(c[0], [c[1] + "ゃ", "", c[1] + "ゅ", c[1] + "ぇ", c[1] + "ょ"]);
    });
    row("sh", ["しゃ", "し", "しゅ", "しぇ", "しょ"]); row("sy", ["しゃ", "", "しゅ", "しぇ", "しょ"]);
    row("ch", ["ちゃ", "ち", "ちゅ", "ちぇ", "ちょ"]); row("ty", ["ちゃ", "", "ちゅ", "ちぇ", "ちょ"]); row("cy", ["ちゃ", "", "ちゅ", "ちぇ", "ちょ"]);
    row("jy", ["じゃ", "", "じゅ", "じぇ", "じょ"]); row("zy", ["じゃ", "", "じゅ", "じぇ", "じょ"]); row("dy", ["ぢゃ", "", "ぢゅ", "ぢぇ", "ぢょ"]);
    TABLE.tsu = "つ"; TABLE.xtu = "っ"; TABLE.ltu = "っ"; TABLE.xya = "ゃ"; TABLE.xyu = "ゅ"; TABLE.xyo = "ょ";
    TABLE.si = "し"; TABLE.ti = "ち"; TABLE.tu = "つ"; TABLE.hu = "ふ"; TABLE.zi = "じ";
    var PUNCT = { ".": "。", ",": "、", "-": "ー", "?": "？", "!": "！" };

    var KEYS = Object.keys(TABLE);
    function isPrefix(s) { return s === "n" || KEYS.some(function (k) { return k.indexOf(s) === 0; }); }
    function isVowel(c) { return "aiueo".indexOf(c) !== -1; }

    function romajiToKana(input) {
        var s = String(input).toLowerCase();
        var out = "";
        var i = 0;
        while (i < s.length) {
            var c = s.charAt(i);
            if (PUNCT[c]) { out += PUNCT[c]; i++; continue; }
            if (!/[a-z']/.test(c)) { out += s.charAt(i); i++; continue; }   // já é kana, kanji, espaço...

            // Consoante dobrada (kka, tte): vira っ.
            if (c !== "n" && !isVowel(c) && c !== "'" && s.charAt(i + 1) === c) { out += "っ"; i++; continue; }

            if (c === "n") {
                var next = s.charAt(i + 1);
                if (next === "") return { kana: out, pending: "n" };
                if (next === "'" || next === "n") { out += "ん"; i += 2; continue; }
                if (!isVowel(next) && next !== "y") { out += "ん"; i++; continue; }
            }

            var hit = false;
            for (var len = 3; len >= 1 && !hit; len--) {
                var chunk = s.substr(i, len);
                if (chunk.length === len && TABLE[chunk]) { out += TABLE[chunk]; i += len; hit = true; }
            }
            if (hit) continue;

            // Sem correspondência: se ainda pode virar sílaba, aguarda; senão mantém a letra.
            var rest = s.slice(i);
            if (isPrefix(rest)) return { kana: out, pending: rest };
            out += s.charAt(i); i++;
        }
        return { kana: out, pending: "" };
    }

    // Ao verificar a resposta: um "n" que ficou pendente no fim vira ん.
    function finalize(input) {
        var r = romajiToKana(input);
        return r.kana + (r.pending === "n" ? "ん" : r.pending);
    }

    function toHiragana(text) {
        return String(text).replace(/[ァ-ヶ]/g, function (ch) { return String.fromCharCode(ch.charCodeAt(0) - 0x60); });
    }

    /* ---------- comparação ---------- */

    function normalize(str) { return String(str).replace(/[\s　、。！？,.!?]/g, ""); }

    // Diferença por caractere (maior subsequência comum): "del" = só no que foi digitado,
    // "ins" = só na resposta certa (faltou), "same" = nos dois.
    function diff(typed, correct) {
        var a = Array.from(typed), b = Array.from(correct);
        var m = a.length, n = b.length, i, j;
        var dp = [];
        for (i = 0; i <= m; i++) { dp.push(new Array(n + 1).fill(0)); }
        for (i = m - 1; i >= 0; i--) {
            for (j = n - 1; j >= 0; j--) {
                dp[i][j] = a[i] === b[j] ? dp[i + 1][j + 1] + 1 : Math.max(dp[i + 1][j], dp[i][j + 1]);
            }
        }
        var ops = [];
        i = 0; j = 0;
        while (i < m && j < n) {
            if (a[i] === b[j]) { ops.push({ t: "same", ch: a[i] }); i++; j++; }
            else if (dp[i + 1][j] >= dp[i][j + 1]) { ops.push({ t: "del", ch: a[i] }); i++; }
            else { ops.push({ t: "ins", ch: b[j] }); j++; }
        }
        while (i < m) { ops.push({ t: "del", ch: a[i++] }); }
        while (j < n) { ops.push({ t: "ins", ch: b[j++] }); }
        return ops;
    }

    function textOfHtml(html, keepReading) {
        var doc = root.document;
        var box = doc.createElement("div");
        box.innerHTML = html;
        box.querySelectorAll("ruby").forEach(function (ruby) {
            var rt = ruby.querySelector("rt");
            var reading = rt ? rt.textContent : "";
            var base = Array.from(ruby.childNodes).filter(function (nd) { return !(nd.nodeType === 1 && nd.tagName === "RT"); })
                .map(function (nd) { return nd.textContent; }).join("");
            ruby.replaceWith(doc.createTextNode(keepReading ? reading : base));
        });
        return box.textContent || "";
    }
    function baseOf(html) { return textOfHtml(html, false); }
    function readingOf(html) { return textOfHtml(html, true); }

    /* ---------- embaralhar ---------- */

    function shuffleSeeded(list, seed) {
        var n = list.length;
        var state = (Number(seed) || 1) >>> 0;
        function rand() { state = (Math.imul(state, 1664525) + 1013904223) >>> 0; return state / 4294967296; }
        var arr = list.slice();
        for (var attempt = 0; attempt < 8; attempt++) {
            for (var i = n - 1; i > 0; i--) {
                var j = Math.floor(rand() * (i + 1));
                var tmp = arr[i]; arr[i] = arr[j]; arr[j] = tmp;
            }
            if (n < 2 || arr.some(function (v, k) { return v !== list[k]; })) break;
        }
        return arr;
    }

    var api = {
        romajiToKana: romajiToKana, finalize: finalize, toHiragana: toHiragana, diff: diff, normalize: normalize,
        baseOf: baseOf, readingOf: readingOf, shuffleSeeded: shuffleSeeded
    };

    if (typeof module !== "undefined" && module.exports) { module.exports = api; return; }
    root.Exercises = api;
})(typeof window !== "undefined" ? window : globalThis);
