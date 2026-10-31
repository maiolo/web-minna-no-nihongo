/*
 * Lista de lições do site.
 *
 * Este é o único lugar que precisa ser editado para uma lição aparecer no
 * índice e nos botões "anterior / próxima". Mantenha em ordem numérica.
 *
 *   number      número da lição
 *   file        nome do arquivo dentro de lessons/
 *   topic       tema principal (furigana com {漢字|かんじ})
 *   description pontos gramaticais ou resumo curto (também com {漢字|かんじ})
 */
window.LESSONS = [
    {
        number: 1,
        file: "lesson-1.html",
        topic: "{自己紹介|じこしょうかい}",
        topic_en: "Introducing yourself",
        description: "N1は N2です • ですか • も • の • さん",
        description_en: "N1は N2です • ですか • も • の • さん"
    },
    {
        number: 2,
        file: "lesson-2.html",
        topic: "これ・それ・あれ",
        topic_en: "This, that, that over there",
        description: "この・その・あの • N1の N2 • {何|なん}ですか • そうです",
        description_en: "この・その・あの • N1の N2 • {何|なん}ですか • そうです"
    },
    {
        number: 3,
        file: "lesson-3.html",
        topic: "ここ・そこ・あそこ",
        topic_en: "Here, there, over there",
        description: "どこですか • こちら • N1の N2 • いくら ({値段|ねだん})",
        description_en: "どこですか • こちら • N1の N2 • いくら ({値段|ねだん}: prices)"
    },
    {
        number: 4,
        file: "lesson-4.html",
        topic: "{時間|じかん}と {毎日|まいにち}の {生活|せいかつ}",
        topic_en: "Time and daily life",
        description: "{何時|なんじ}ですか • Vます・ません・ました • から・まで • に",
        description_en: "{何時|なんじ}ですか • Vます・ません・ました • から・まで • に"
    },
    {
        number: 5,
        file: "lesson-5.html",
        topic: "{行|い}きます・{来|き}ます・{帰|かえ}ります",
        topic_en: "To go, to come, to return",
        description: "Nへ {行|い}きます • Nで • Nと • いつ ({日付|ひづけ})",
        description_en: "Nへ {行|い}きます • Nで • Nと • いつ ({日付|ひづけ}: dates)"
    },
    {
        number: 16,
        file: "lesson-16.html",
        topic: "{持|も}ち{物|もの}・{行動|こうどう}の{順序|じゅんじょ}",
        description: "Vocabulário, gramática e exercícios interativos.",
        description_en: "Vocabulary, grammar and interactive exercises."
    },
    {
        number: 17,
        file: "lesson-17.html",
        topic: "ない{形|けい} (Forma NAI)",
        topic_en: "ない{形|けい} (NAI form)",
        description: "ないでください • なければなりません • なくてもいいです. 100% Furigana e exercícios interativos.",
        description_en: "ないでください • なければなりません • なくてもいいです. 100% furigana and interactive exercises."
    },
    {
        number: 18,
        file: "lesson-18.html",
        topic: "{辞書形|じしょけい} (Forma de Dicionário)",
        topic_en: "{辞書形|じしょけい} (Dictionary form)",
        description: "ことができます • {趣味|しゅみ} • {前|まえ}に"
    },
    {
        number: 19,
        file: "lesson-19.html",
        topic: "た{形|けい} (Forma TA)",
        topic_en: "た{形|けい} (TA form)",
        description: "{経験|けいけん} (Experiência) • 〜たり〜たりします • なります",
        description_en: "{経験|けいけん} (Experience) • 〜たり〜たりします • なります"
    }
];

/* Rótulo "第N課" com furigana, usado no índice e nas lições. Devolve HTML pronto (não passa por Notation). */
window.lessonLabel = function (number) {
    return "<ruby>第<rt>だい</rt></ruby>" + number + "<ruby>課<rt>か</rt></ruby>";
};

/*
 * Volumes do livro, usados pelo mapa de lições da página inicial.
 * Cada volume vai de "from" a "to"; as lições que ainda não estão em
 * window.LESSONS aparecem no mapa como "em breve".
 */
window.VOLUMES = [
    {
        id: "shokyu-1",
        label: "{初級|しょきゅう} I",
        range: "Lições 1 a 25",
        range_en: "Lessons 1 to 25",
        from: 1,
        to: 25
    },
    {
        id: "shokyu-2",
        label: "{初級|しょきゅう} II",
        range: "Lições 26 a 50",
        range_en: "Lessons 26 to 50",
        from: 26,
        to: 50
    }
];

/* Rótulo de cada seção da lição: kanji com furigana (jp) e português (pt). */
window.SECTION_LABELS = {
        vocab: { jp: "{語彙|ごい}", pt: "Vocabulário", en: "Vocabulary" },
        gramatica: { jp: "{文法|ぶんぽう}", pt: "Gramática", en: "Grammar" },
        renshuuA: { jp: "{練習|れんしゅう} A", pt: "Exercícios", en: "Exercises" },
        renshuuB: { jp: "{練習|れんしゅう} B", pt: "Exercícios", en: "Exercises" },
        renshuuC: { jp: "{練習|れんしゅう} C", pt: "Exercícios", en: "Exercises" },
        mondai: { jp: "{問題|もんだい}", pt: "Problemas", en: "Problems" },
        montar: { jp: "{組|く}み{立|た}て", pt: "Montar frase", en: "Build the sentence" }
};

/*
 * Os textos acima usam {漢字|かんじ}. Aqui viram <ruby>. As páginas que carregam este
 * arquivo precisam carregar assets/js/notation.js antes dele. O idioma escolhido (assets/js/i18n.js)
 * troca "pt" por "en", "topic" por "topic_en" etc. antes disso.
 */
if (window.I18n) {
    window.LESSONS = window.I18n.localize(window.LESSONS, window.I18n.lang());
    window.VOLUMES = window.I18n.localize(window.VOLUMES, window.I18n.lang());
    window.SECTION_LABELS = window.I18n.localize(window.SECTION_LABELS, window.I18n.lang());
}
if (window.Notation) {
    window.LESSONS = window.Notation.convertDeep(window.LESSONS);
    window.VOLUMES = window.Notation.convertDeep(window.VOLUMES);
    window.SECTION_LABELS = window.Notation.convertDeep(window.SECTION_LABELS);
}
