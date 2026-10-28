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
        number: 16,
        file: "lesson-16.html",
        topic: "{持|も}ち{物|もの}・{行動|こうどう}の{順序|じゅんじょ}",
        description: "Vocabulário, gramática e exercícios interativos."
    },
    {
        number: 17,
        file: "lesson-17.html",
        topic: "ない{形|けい} (Forma NAI)",
        description: "ないでください • なければなりません • なくてもいいです. 100% Furigana e exercícios interativos."
    },
    {
        number: 18,
        file: "lesson-18.html",
        topic: "{辞書形|じしょけい} (Forma de Dicionário)",
        description: "ことができます • {趣味|しゅみ} • {前|まえ}に"
    },
    {
        number: 19,
        file: "lesson-19.html",
        topic: "た{形|けい} (Forma TA)",
        description: "{経験|けいけん} (Experiência) • 〜たり〜たりします • なります"
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
        from: 1,
        to: 25
    },
    {
        id: "shokyu-2",
        label: "{初級|しょきゅう} II",
        range: "Lições 26 a 50",
        from: 26,
        to: 50
    }
];

/* Rótulo de cada seção da lição: kanji com furigana (jp) e português (pt). */
window.SECTION_LABELS = {
        vocab: { jp: "{語彙|ごい}", pt: "Vocabulário" },
        gramatica: { jp: "{文法|ぶんぽう}", pt: "Gramática" },
        renshuuA: { jp: "{練習|れんしゅう} A", pt: "Exercícios" },
        renshuuB: { jp: "{練習|れんしゅう} B", pt: "Exercícios" },
        renshuuC: { jp: "{練習|れんしゅう} C", pt: "Exercícios" },
        mondai: { jp: "{問題|もんだい}", pt: "Problemas" },
        montar: { jp: "{組|く}み{立|た}て", pt: "Montar frase" }
};

/*
 * Os textos acima usam {漢字|かんじ}. Aqui viram <ruby>. As páginas que carregam este
 * arquivo precisam carregar assets/js/notation.js antes dele.
 */
if (window.Notation) {
    window.LESSONS = window.Notation.convertDeep(window.LESSONS);
    window.VOLUMES = window.Notation.convertDeep(window.VOLUMES);
    window.SECTION_LABELS = window.Notation.convertDeep(window.SECTION_LABELS);
}
