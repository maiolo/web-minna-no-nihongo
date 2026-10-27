/*
 * Notação das frases e conversão kana -> romaji (funções puras, testadas com node --test).
 *
 * As frases do projeto usam uma notação de texto simples:
 *   {漢字|かんじ}   kanji com a leitura (vira <ruby> com furigana)
 *   ^は  ^へ        partícula lida "wa" / "e" (no romaji e no áudio)
 *   espaço          separa palavras no romaji e não aparece no japonês
 *
 *   Notation.toRomaji(kana)             kana (hiragana ou katakana) -> romaji (Hepburn simples, sem macron)
 *   Notation.sentenceRomaji(notação)    romaji da frase, com as palavras separadas
 *   Notation.plainText(notação)         só o texto japonês (kanji), sem marcadores
 *   Notation.readingText(notação)       só as leituras (kana), sem marcadores de partícula tratados
 *   Notation.toRuby(notação, alvo)      HTML com <ruby>; o bloco que contém "alvo" ganha class="hl"
 *   Notation.spaceWords(notação)        insere espaços entre palavras (usado pelo sentenceRomaji)
 *   Notation.toExam(notação, { furigana, known })
 *                                       HTML no estilo da prova: kanji da lista `known` (texto com os kanji do N5)
 *                                       aparecem SEM furigana; os outros, e todos se furigana for true, ganham <ruby>.
 *                                       *texto* vira <u>, ＿＿ vira （　　） e os espaços ficam (como no N5 em hiragana);
 *                                       □ e ★ (ordenar peças) viram caixas e ［1］ a ［5］ (lacunas de texto) viram marcas;
 *                                       com { current: n } a lacuna n do texto fica em destaque
 *   Notation.katakanaToHiragana(texto)
 *   Notation.toHtml(texto)              troca {漢字|かんじ} por <ruby> e tira o marcador ^ de ^は e ^へ; o resto (HTML, espaços) fica como está.
 *                                       É o formato único dos dados de lição: os arquivos em lessons/data/ não levam <ruby>
 *   Notation.convertDeep(dados)         cópia de um objeto/lista com toHtml aplicado a todos os textos (o motor das lições usa)
 */
(function (root) {
    "use strict";

    /* ---------- Kana → romaji (Hepburn simples, sem macron) ---------- */

    var BASE = {
        "あ": "a", "い": "i", "う": "u", "え": "e", "お": "o",
        "か": "ka", "き": "ki", "く": "ku", "け": "ke", "こ": "ko",
        "さ": "sa", "し": "shi", "す": "su", "せ": "se", "そ": "so",
        "た": "ta", "ち": "chi", "つ": "tsu", "て": "te", "と": "to",
        "な": "na", "に": "ni", "ぬ": "nu", "ね": "ne", "の": "no",
        "は": "ha", "ひ": "hi", "ふ": "fu", "へ": "he", "ほ": "ho",
        "ま": "ma", "み": "mi", "む": "mu", "め": "me", "も": "mo",
        "や": "ya", "ゆ": "yu", "よ": "yo",
        "ら": "ra", "り": "ri", "る": "ru", "れ": "re", "ろ": "ro",
        "わ": "wa", "を": "o", "ん": "n",
        "が": "ga", "ぎ": "gi", "ぐ": "gu", "げ": "ge", "ご": "go",
        "ざ": "za", "じ": "ji", "ず": "zu", "ぜ": "ze", "ぞ": "zo",
        "だ": "da", "ぢ": "ji", "づ": "zu", "で": "de", "ど": "do",
        "ば": "ba", "び": "bi", "ぶ": "bu", "べ": "be", "ぼ": "bo",
        "ぱ": "pa", "ぴ": "pi", "ぷ": "pu", "ぺ": "pe", "ぽ": "po"
    };
    var SMALL_Y = { "ゃ": "ya", "ゅ": "yu", "ょ": "yo" };
    var YOON_SPECIAL = {
        "し": { "ゃ": "sha", "ゅ": "shu", "ょ": "sho" },
        "ち": { "ゃ": "cha", "ゅ": "chu", "ょ": "cho" },
        "じ": { "ゃ": "ja", "ゅ": "ju", "ょ": "jo" },
        "ぢ": { "ゃ": "ja", "ゅ": "ju", "ょ": "jo" }
    };
    var SMALL_VOWEL_COMBOS = {
        "てぃ": "ti", "でぃ": "di", "ふぁ": "fa", "ふぃ": "fi", "ふぇ": "fe", "ふぉ": "fo",
        "うぃ": "wi", "うぇ": "we", "うぉ": "wo", "しぇ": "she", "ちぇ": "che", "じぇ": "je"
    };
    var PUNCT = { "。": ".", "、": ",", "！": "!", "？": "?", "・": " / ", "　": " " };

    function katakanaToHiragana(str) {
        return str.replace(/[ァ-ヶ]/g, function (c) {
            return String.fromCharCode(c.charCodeAt(0) - 0x60);
        });
    }

    // Converte texto em kana para romaji. "^は" e "^へ" marcam partículas (wa, e).
    function toRomaji(text) {
        var s = katakanaToHiragana(text);
        var out = [];
        var geminate = false;
        var i = 0;

        function push(token) {
            if (geminate) {
                token = token.indexOf("ch") === 0 ? "t" + token : token.charAt(0) + token;
                geminate = false;
            }
            out.push(token);
        }

        while (i < s.length) {
            var c = s.charAt(i);
            var next = s.charAt(i + 1);

            if (c === "^") {
                if (next === "は") { push("wa"); i += 2; continue; }
                if (next === "へ") { push("e"); i += 2; continue; }
                i += 1;
                continue;
            }
            if (c === "っ") { geminate = true; i += 1; continue; }
            if (c === "ー") {
                var last = out.length ? out[out.length - 1] : "";
                out.push(last.charAt(last.length - 1));
                i += 1;
                continue;
            }
            if (SMALL_VOWEL_COMBOS[c + next]) { push(SMALL_VOWEL_COMBOS[c + next]); i += 2; continue; }
            if (BASE[c] && SMALL_Y[next]) {
                if (YOON_SPECIAL[c]) push(YOON_SPECIAL[c][next]);
                else push(BASE[c].slice(0, -1) + SMALL_Y[next]);
                i += 2;
                continue;
            }
            if (c === "ん") {
                // "n'" antes de vogal ou y evita ler "ni" em palavras como しんいち.
                var after = s.charAt(i + 1);
                push(/[あいうえおやゆよ]/.test(after) ? "n'" : "n");
                i += 1;
                continue;
            }
            if (BASE[c]) { push(BASE[c]); i += 1; continue; }
            if (PUNCT[c] !== undefined) { push(PUNCT[c]); i += 1; continue; }
            push(c);
            i += 1;
        }
        if (geminate) out.push("t"); // っ no fim (ex.: ジッ)
        return out.join("");
    }

    /* ---------- Notação das frases ---------- */

    // "{今日|きょう}^は" -> só o texto japonês, sem marcadores.
    function plainText(notation) {
        return notation
            .replace(/\{([^|}]+)\|([^}]+)\}/g, "$1")
            .replace(/\^/g, "")
            .replace(/ /g, "");
    }

    // Texto só com as leituras (kana), usado para o romaji.
    function readingText(notation) {
        return notation.replace(/\{([^|}]+)\|([^}]+)\}/g, "$2");
    }

    function toRuby(notation, target) {
        return notation
            .replace(/\^/g, "")
            .replace(/ /g, "")
            .replace(/\{([^|}]+)\|([^}]+)\}/g, function (_, base, reading) {
                var cls = target && base.indexOf(target) !== -1 ? ' class="hl"' : "";
                return "<ruby" + cls + ">" + base + "<rt>" + reading + "</rt></ruby>";
            });
    }

    function toHtml(text) {
        return String(text)
            .replace(/\^(?=[はへ])/g, "")
            .replace(/\{([^|}]+)\|([^}]+)\}/g, "<ruby>$1<rt>$2</rt></ruby>");
    }

    function convertDeep(value) {
        if (typeof value === "string") return toHtml(value);
        if (Array.isArray(value)) return value.map(convertDeep);
        if (value && typeof value === "object") {
            var out = {};
            Object.keys(value).forEach(function (k) { out[k] = convertDeep(value[k]); });
            return out;
        }
        return value;
    }

    function escapeHtml(text) {
        return String(text).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
    }

    function toExam(notation, options) {
        var o = options || {};
        var known = o.known || "";
        return escapeHtml(notation)
            .replace(/\^/g, "")
            .replace(/\{([^|}]+)\|([^}]+)\}/g, function (_, base, reading) {
                var easy = !o.furigana && base.split("").every(function (c) { return known.indexOf(c) !== -1 || !/[一-鿿]/.test(c); });
                return easy ? base : "<ruby>" + base + "<rt>" + reading + "</rt></ruby>";
            })
            .replace(/\*([^*]+)\*/g, "<u>$1</u>")
            .replace(/＿＿/g, '<span class="blank" aria-label="lacuna">（　　）</span>')
            .replace(/□/g, '<span class="o-blank" aria-label="peça">　　</span>')
            .replace(/★/g, '<span class="o-star" aria-label="estrela">★</span>')
            .replace(/［(\d)］/g, function (_, n) {
                return '<span class="p-blank' + (Number(n) === o.current ? " is-current" : "") + '">［' + n + "］</span>";
            });
    }

    // Separa as palavras do romaji com regras simples (partículas depois de
    // um bloco {kanji|leitura}, です/ください, pontuação). Não é perfeito, mas
    // deixa a leitura bem mais fácil do que um bloco colado.
    function spaceWords(s) {
        // Partículas marcadas com ^ (wa / e).
        s = s.replace(/\^([はへ])/g, " ^$1 ");
        // Partículas coladas logo depois de um bloco {kanji|leitura}.
        s = s.replace(/(\{[^|}]+\|[^}]+\})([にでとがのもを])/g, function (m, group, p, off, str) {
            var next = str.charAt(off + m.length);
            if (p === "で" && /[すし]/.test(next)) return m;          // です, でした
            if (p === "が" && /^\{[上下]\|/.test(group)) return m;     // 上がる, 下がる
            return group + " " + p + " ";
        });
        // Partículas depois de palavras em katakana (カメラが) e de palavras
        // comuns em hiragana (りんごを, ともだちが, さんが).
        s = s.replace(/([゠-ヿー]|りんご|みかん|だち|ごはん|さん|ちゃん)([がをとにでのも])(?=(.?))/g,
            function (m, word, p, next) {
                if (p === "で" && /[すし]/.test(next)) return m;
                return word + " " + p + " ";
            });
        // です / でした / でしょう e ください viram palavras separadas.
        s = s.replace(/(\S)(です|でした|でしょう|ください)/g, "$1 $2");
        // "desu ka", "masu ka", "masen ka".
        s = s.replace(/(です|ます|ません|ました)か/g, "$1 か");
        // Espaço depois de pontuação.
        s = s.replace(/([。！？、])(?=\S)/g, "$1 ");
        return s;
    }

    function sentenceRomaji(notation) {
        return toRomaji(readingText(spaceWords(notation)))
            .replace(/\s+/g, " ")
            .replace(/ ([.,!?])/g, "$1")
            .trim();
    }

    var api = {
        katakanaToHiragana: katakanaToHiragana,
        toRomaji: toRomaji,
        plainText: plainText,
        readingText: readingText,
        toRuby: toRuby,
        toHtml: toHtml,
        convertDeep: convertDeep,
        toExam: toExam,
        spaceWords: spaceWords,
        sentenceRomaji: sentenceRomaji
    };

    if (typeof module !== "undefined" && module.exports) { module.exports = api; return; }
    root.Notation = api;
})(typeof window !== "undefined" ? window : globalThis);
