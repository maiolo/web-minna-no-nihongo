/*
 * Página de kanji do JLPT.
 *
 * Monta a lista de cartões a partir de uma variável global com os dados
 * (jlpt/data/n5-kanji-*.js). Configuração vem de <body>:
 *   data-global  nome da variável global com a lista (ex.: JLPT_N5_KANJI)
 *   data-level   nível mostrado no cabeçalho (ex.: N5)
 *
 * O furigana e o romaji das frases são gerados a partir da notação
 * {漢字|かんじ} (veja o cabeçalho dos arquivos de dados).
 */
(function () {
    "use strict";

    var body = document.body;
    var kanjiList = window[body.dataset.global] || [];
    var level = body.dataset.level || "N5";

    var CATEGORIES = [
        { id: "numeros", label: "Números" },
        { id: "tempo", label: "Tempo" },
        { id: "natureza", label: "Natureza" },
        { id: "pessoas", label: "Pessoas" },
        { id: "corpo", label: "Corpo" },
        { id: "posicao", label: "Posição e direção" },
        { id: "verbos", label: "Verbos" },
        { id: "adjetivos", label: "Adjetivos" },
        { id: "sociedade", label: "Lugares, estudo e coisas" }
    ];

    var state = { query: "", category: "all" };

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
                var cls = base.indexOf(target) !== -1 ? ' class="hl"' : "";
                return "<ruby" + cls + ">" + base + "<rt>" + reading + "</rt></ruby>";
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

    /* ---------- Leituras ---------- */

    function readingKind(tag) {
        var first = tag.charAt(0);
        return /[゠-ヿ]/.test(first) ? "on" : "kun";
    }

    // Remove o comentário entre parênteses de um rótulo ("ズ (especial)" -> "ズ").
    function tagKana(tag) {
        return tag.replace(/\s*\(.*$/, "");
    }

    function readingChips(readings) {
        if (!readings.length) return '<span class="read-none">—</span>';
        return readings.map(function (r) {
            return '<span class="read-chip">' + r +
                ' <span class="romaji">' + toRomaji(r) + "</span></span>";
        }).join("");
    }

    /* ---------- Renderização ---------- */

    function renderCard(entry) {
        var examples = entry.ex.map(function (e) {
            var kind = readingKind(e[0]);
            return '<li class="example">' +
                '<span class="read-tag ' + kind + '">' + e[0] + "</span>" +
                '<div class="jp-example">' + toRuby(e[1], entry.k) + "</div>" +
                '<div class="romaji">' + sentenceRomaji(e[1]) + "</div>" +
                '<div class="pt-line">🇧🇷 ' + e[2] + "</div>" +
            "</li>";
        }).join("");

        return '<article class="kanji-card" data-kanji="' + entry.k + '">' +
            '<div class="kanji-head" role="button" tabindex="0" aria-expanded="false" ' +
                'title="Clique para ver os exemplos">' +
                '<div class="kanji-glyph" lang="ja">' + entry.k + "</div>" +
                '<div class="kanji-info">' +
                    '<div class="kanji-meaning">' + entry.pt + "</div>" +
                    '<div class="kanji-readings">' +
                        '<div class="read-row"><span class="read-label on" title="On\'yomi: leitura de origem chinesa">音 On</span>' +
                            readingChips(entry.on) + "</div>" +
                        '<div class="read-row"><span class="read-label kun" title="Kun\'yomi: leitura japonesa">訓 Kun</span>' +
                            readingChips(entry.kun) + "</div>" +
                    "</div>" +
                    '<div class="kanji-more" aria-hidden="true">' +
                        '<span class="more-closed">▾ Ver ' + entry.ex.length +
                            (entry.ex.length === 1 ? " exemplo" : " exemplos") + "</span>" +
                        '<span class="more-open">▴ Ocultar exemplos</span>' +
                    "</div>" +
                "</div>" +
            "</div>" +
            '<ul class="example-list">' + examples + "</ul>" +
            (entry.note ? '<p class="kanji-note">💡 ' + entry.note + "</p>" : "") +
        "</article>";
    }

    /* ---------- Busca e filtros ---------- */

    function normalize(str) {
        return katakanaToHiragana(String(str))
            .normalize("NFD")
            .replace(/[̀-ͯ]/g, "")
            .toLowerCase();
    }

    function buildSearchIndex() {
        kanjiList.forEach(function (entry) {
            var readings = entry.on.concat(entry.kun);
            var parts = [entry.k, entry.pt].concat(readings).concat(readings.map(toRomaji));
            entry.search = normalize(parts.join(" ").replace(/[()]/g, ""));
        });
    }

    function matches(entry) {
        if (state.category !== "all" && entry.cat !== state.category) return false;
        if (!state.query) return true;
        return entry.search.indexOf(normalize(state.query).replace(/[()]/g, "")) !== -1;
    }

    function applyFilters() {
        var visible = 0;
        document.querySelectorAll(".kanji-card").forEach(function (card, idx) {
            var show = matches(kanjiList[idx]);
            card.hidden = !show;
            if (show) visible += 1;
        });
        document.getElementById("kanji-count").textContent =
            "Mostrando " + visible + " de " + kanjiList.length + " kanji";
        document.getElementById("kanji-empty").hidden = visible !== 0;
    }

    function renderChips() {
        var counts = {};
        kanjiList.forEach(function (e) { counts[e.cat] = (counts[e.cat] || 0) + 1; });
        var html = '<button type="button" class="chip active" data-cat="all">Todos (' + kanjiList.length + ")</button>";
        CATEGORIES.forEach(function (c) {
            if (counts[c.id]) {
                html += '<button type="button" class="chip" data-cat="' + c.id + '">' +
                    c.label + " (" + counts[c.id] + ")</button>";
            }
        });
        document.getElementById("kanji-chips").innerHTML = html;
    }

    /* ---------- Cabeçalho e controles ---------- */

    // Abre ou fecha os exemplos de um cartão (cada cartão é independente).
    function toggleCard(card) {
        var open = card.classList.toggle("open");
        card.querySelector(".kanji-head").setAttribute("aria-expanded", open ? "true" : "false");
    }

    function bindEvents() {
        // Clique no kanji ou na parte de cima do cartão abre/fecha os exemplos.
        // Se a pessoa estiver selecionando texto (para copiar), não alterna.
        // Tocar numa leitura em romaji só a revela (veja prefs.js), sem abrir o cartão.
        var list = document.getElementById("kanji-list");
        list.addEventListener("click", function (e) {
            var head = e.target.closest(".kanji-head");
            if (!head) return;
            if (e.target.closest(".romaji") && document.documentElement.dataset.romaji === "touch") return;
            var selection = window.getSelection && window.getSelection().toString();
            if (selection) return;
            toggleCard(head.closest(".kanji-card"));
        });
        list.addEventListener("keydown", function (e) {
            if ((e.key === "Enter" || e.key === " ") && e.target.classList.contains("kanji-head")) {
                e.preventDefault();
                toggleCard(e.target.closest(".kanji-card"));
            }
        });

        document.getElementById("kanji-search").addEventListener("input", function (e) {
            state.query = e.target.value.trim();
            applyFilters();
        });

        document.getElementById("kanji-chips").addEventListener("click", function (e) {
            var btn = e.target.closest(".chip");
            if (!btn) return;
            state.category = btn.dataset.cat;
            document.querySelectorAll("#kanji-chips .chip").forEach(function (chip) {
                chip.classList.toggle("active", chip === btn);
            });
            applyFilters();
        });
    }

    function init() {
        document.getElementById("level-label").textContent = level;
        if (!kanjiList.length) {
            document.getElementById("kanji-list").innerHTML =
                '<p class="empty-state">Não foi possível carregar os dados dos kanji.</p>';
            return;
        }
        buildSearchIndex();
        renderChips();
        document.getElementById("kanji-list").innerHTML = kanjiList.map(renderCard).join("");
        bindEvents();
        applyFilters();
    }

    // Exposto para testes e para reaproveitar em outras páginas.
    window.KanjiPage = { toRomaji: toRomaji, sentenceRomaji: sentenceRomaji, plainText: plainText };

    init();
})();
