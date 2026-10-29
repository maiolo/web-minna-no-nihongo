/*
 * Conjugador de verbos (funções puras, testadas com node --test).
 *
 *   Verbs.FORMS                       as formas geradas: [{ id, jp, pt }] (jp com furigana, em HTML)
 *   Verbs.conjugate(verbo, forma)     texto na notação das frases ({漢字|かんじ}), ou null se a forma não se aplica
 *   Verbs.supports(verbo, forma)      a forma faz sentido para este verbo?
 *   Verbs.validate(verbo)             texto do erro, ou null se o verbo está bem escrito
 *   Verbs.GROUPS                      { 1: {...}, 2: {...}, 3: {...} } rótulos e regra de cada grupo
 *
 * Verbo (veja jlpt/data/n5-verbs.js):
 *   { jp: "{書|か}く", g: 1, pt: "escrever", skip: ["tai"] }
 *   jp    forma de dicionário na notação das frases
 *   g     grupo (1, 2 ou 3). Vem sempre dos dados: 帰る, 入る, 走る... terminam como o grupo 2, mas são do 1
 *   skip  formas que não se usam com este verbo (ex.: ある não tem 〜たい)
 *
 * O que muda numa conjugação fica sempre no fim do verbo (o okurigana), fora das
 * chaves; a exceção é 来る, tratado à parte (a leitura do kanji muda: く, き, こ).
 */
(function (root) {
    "use strict";

    // Colunas da fila de cada terminação do grupo 1: [あ (ない), い (ます), え, お]
    var COLUMNS = {
        "う": ["わ", "い", "え", "お"],
        "く": ["か", "き", "け", "こ"],
        "ぐ": ["が", "ぎ", "げ", "ご"],
        "す": ["さ", "し", "せ", "そ"],
        "つ": ["た", "ち", "て", "と"],
        "ぬ": ["な", "に", "ね", "の"],
        "ぶ": ["ば", "び", "べ", "ぼ"],
        "む": ["ま", "み", "め", "も"],
        "る": ["ら", "り", "れ", "ろ"]
    };
    var A = 0, I = 1;

    // て形 / た形 do grupo 1 (a terminação de cima vira o que está embaixo).
    var TE = { "う": "って", "つ": "って", "る": "って", "む": "んで", "ぶ": "んで", "ぬ": "んで", "く": "いて", "ぐ": "いで", "す": "して" };
    var TA = { "う": "った", "つ": "った", "る": "った", "む": "んだ", "ぶ": "んだ", "ぬ": "んだ", "く": "いた", "ぐ": "いだ", "す": "した" };

    var FORMS = [
        { id: "dict", jp: "<ruby>辞書形<rt>じしょけい</rt></ruby>", pt: "Forma de dicionário", en: "Dictionary form" },
        { id: "masu", jp: "ます<ruby>形<rt>けい</rt></ruby>", pt: "Educada, afirmativa", en: "Polite, affirmative" },
        { id: "masen", jp: "ません", pt: "Educada, negativa", en: "Polite, negative" },
        { id: "mashita", jp: "ました", pt: "Educada, passado", en: "Polite, past" },
        { id: "masendeshita", jp: "ませんでした", pt: "Educada, passado negativo", en: "Polite, past negative" },
        { id: "te", jp: "て<ruby>形<rt>けい</rt></ruby>", pt: "Forma em て (ligar frases, pedidos)", en: "て form (linking sentences, requests)" },
        { id: "teiru", jp: "ています", pt: "Ação em andamento ou estado", en: "Ongoing action or state" },
        { id: "ta", jp: "た<ruby>形<rt>けい</rt></ruby>", pt: "Passado informal", en: "Informal past" },
        { id: "nai", jp: "ない<ruby>形<rt>けい</rt></ruby>", pt: "Negativa informal", en: "Informal negative" },
        { id: "nakatta", jp: "なかった", pt: "Passado negativo informal", en: "Informal past negative" },
        { id: "tai", jp: "たい", pt: "Querer fazer", en: "Want to do" },
        { id: "mashou", jp: "ましょう", pt: "Vamos fazer (convite)", en: "Let's do it (invitation)" }
    ];

    var GROUPS = {
        1: {
            label: "Grupo 1",
            label_en: "Group 1",
            jp: "<ruby>五段<rt>ごだん</rt></ruby>",
            title: "Verbos de consoante (五段)",
            title_en: "Consonant verbs (五段)",
            rule: "Terminam em う, く, ぐ, す, つ, ぬ, ぶ, む ou る. A última sílaba muda de coluna: 書く → 書きます, 書かない. O て形 muda por terminação (書いて, 読んで, 待って).",
            rule_en: "They end in う, く, ぐ, す, つ, ぬ, ぶ, む or る. The last syllable changes column: 書く → 書きます, 書かない. The て form changes by ending (書いて, 読んで, 待って)."
        },
        2: {
            label: "Grupo 2",
            label_en: "Group 2",
            jp: "<ruby>一段<rt>いちだん</rt></ruby>",
            title: "Verbos de vogal (一段)",
            title_en: "Vowel verbs (一段)",
            rule: "Terminam em いる ou える. Tira-se る e acrescenta-se o resto: 食べる → 食べます, 食べて, 食べない.",
            rule_en: "They end in いる or える. Drop る and add the rest: 食べる → 食べます, 食べて, 食べない."
        },
        3: {
            label: "Grupo 3",
            label_en: "Group 3",
            jp: "<ruby>不規則<rt>ふきそく</rt></ruby>",
            title: "Verbos irregulares (不規則)",
            title_en: "Irregular verbs (不規則)",
            rule: "Só dois: する (fazer) e 来る (くる, vir). Todo verbo «substantivo + する», como 勉強する, conjuga como する.",
            rule_en: "Only two: する (to do) and 来る (くる, to come). Every “noun + する” verb, like 勉強する, conjugates like する."
        }
    };

    var KURU = /\{来\|く\}る$/;

    function endsWithSuru(jp) { return /する$/.test(jp); }
    function lastChar(jp) { return jp.charAt(jp.length - 1); }

    function supports(verb, form) {
        return !(verb.skip && verb.skip.indexOf(form) !== -1);
    }

    function conjugate(verb, form) {
        if (!supports(verb, form)) return null;

        var jp = verb.jp, g = verb.g;
        var head, stemMasu, stemNai, te, ta;

        if (g === 3 && KURU.test(jp)) {
            head = jp.replace(KURU, "");
            stemMasu = head + "{来|き}";
            stemNai = head + "{来|こ}";
            te = stemMasu + "て";
            ta = stemMasu + "た";
        } else if (g === 3 && endsWithSuru(jp)) {
            head = jp.slice(0, -2);
            stemMasu = head + "し";
            stemNai = stemMasu;
            te = stemMasu + "て";
            ta = stemMasu + "た";
        } else if (g === 2) {
            head = jp.slice(0, -1);
            stemMasu = head;
            stemNai = head;
            te = head + "て";
            ta = head + "た";
        } else if (g === 1) {
            var last = lastChar(jp);
            var cols = COLUMNS[last];
            head = jp.slice(0, -1);
            stemMasu = head + cols[I];
            stemNai = head + cols[A];
            te = head + TE[last];
            ta = head + TA[last];
            // 行く é a exceção do grupo 1: 行って / 行った (não 行いて).
            if (verb.jp === "{行|い}く") { te = head + "って"; ta = head + "った"; }
        } else {
            return null;
        }

        switch (form) {
            case "dict": return jp;
            case "masu": return stemMasu + "ます";
            case "masen": return stemMasu + "ません";
            case "mashita": return stemMasu + "ました";
            case "masendeshita": return stemMasu + "ませんでした";
            case "te": return te;
            case "teiru": return te + "います";
            case "ta": return ta;
            // ある não tem negativa regular: ない, なかった (não あらない).
            case "nai": return jp === "ある" ? "ない" : stemNai + "ない";
            case "nakatta": return jp === "ある" ? "なかった" : stemNai + "なかった";
            case "tai": return stemMasu + "たい";
            case "mashou": return stemMasu + "ましょう";
            default: return null;
        }
    }

    // Leitura em kana de um texto na notação ({漢字|かんじ} -> かんじ).
    function reading(notation) { return notation.replace(/\{[^|}]+\|([^}]+)\}/g, "$1"); }

    var I_E_ROW = /[いきしちにひみりぎじぢびぴえけせてねへめれげぜでべぺ]/;

    function validate(verb) {
        if (!verb || typeof verb.jp !== "string" || !verb.jp) return "sem jp";
        if ([1, 2, 3].indexOf(verb.g) === -1) return "grupo inválido: " + verb.g;
        if (!verb.pt) return "sem significado";
        var opens = (verb.jp.match(/\{/g) || []).length, closes = (verb.jp.match(/\}/g) || []).length;
        if (opens !== closes) return "chaves desbalanceadas";
        if (/[一-鿿]/.test(verb.jp.replace(/\{[^}]*\}/g, ""))) return "kanji sem furigana";

        var kana = reading(verb.jp);
        if (verb.g === 3) {
            return endsWithSuru(verb.jp) || KURU.test(verb.jp) ? null : "grupo 3 só aceita する e 来る";
        }
        if (verb.g === 2) {
            if (!/る$/.test(kana)) return "grupo 2 termina em る";
            var before = kana.charAt(kana.length - 2);
            return I_E_ROW.test(before) ? null : "grupo 2 precisa de i ou e antes de る";
        }
        return COLUMNS[lastChar(verb.jp)] ? null : "terminação inválida para o grupo 1: " + lastChar(verb.jp);
    }

    var api = {
        FORMS: FORMS,
        GROUPS: GROUPS,
        conjugate: conjugate,
        supports: supports,
        validate: validate,
        reading: reading
    };

    if (typeof module !== "undefined" && module.exports) { module.exports = api; return; }
    root.Verbs = api;
})(typeof window !== "undefined" ? window : globalThis);
