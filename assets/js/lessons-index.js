/*
 * Lista de lições do site.
 *
 * Este é o único lugar que precisa ser editado para uma lição aparecer no
 * índice e nos botões "anterior / próxima". Mantenha em ordem numérica.
 *
 *   number      número da lição
 *   file        nome do arquivo dentro de lessons/
 *   topic       tema principal (aceita <ruby> para furigana)
 *   description pontos gramaticais ou resumo curto (aceita <ruby>)
 */
window.LESSONS = [
    {
        number: 16,
        file: "lesson-16.html",
        topic: "<ruby>持<rt>も</rt></ruby>ち<ruby>物<rt>もの</rt></ruby>・<ruby>行<rt>こう</rt></ruby><ruby>動<rt>どう</rt></ruby>の<ruby>順<rt>じゅん</rt></ruby><ruby>序<rt>じょ</rt></ruby>",
        description: "Vocabulário, gramática e exercícios interativos."
    },
    {
        number: 17,
        file: "lesson-17.html",
        topic: "ない<ruby>形<rt>けい</rt></ruby> (Forma NAI)",
        description: "ないでください • なければなりません • なくてもいいです. 100% Furigana e exercícios interativos."
    },
    {
        number: 18,
        file: "lesson-18.html",
        topic: "<ruby>辞<rt>じ</rt></ruby><ruby>書<rt>しょ</rt></ruby><ruby>形<rt>けい</rt></ruby> (Forma de Dicionário)",
        description: "ことができます • <ruby>趣<rt>しゅ</rt></ruby><ruby>味<rt>み</rt></ruby> • <ruby>前<rt>まえ</rt></ruby>に"
    },
    {
        number: 19,
        file: "lesson-19.html",
        topic: "た<ruby>形<rt>けい</rt></ruby> (Forma TA)",
        description: "<ruby>経<rt>けい</rt></ruby><ruby>験<rt>けん</rt></ruby> (Experiência) • 〜たり〜たりします • なります"
    }
];

/* Rótulo "第N課" com furigana, usado no índice e nas lições. */
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
        label: "<ruby>初<rt>しょ</rt></ruby><ruby>級<rt>きゅう</rt></ruby> I",
        range: "Lições 1 a 25",
        from: 1,
        to: 25
    },
    {
        id: "shokyu-2",
        label: "<ruby>初<rt>しょ</rt></ruby><ruby>級<rt>きゅう</rt></ruby> II",
        range: "Lições 26 a 50",
        from: 26,
        to: 50
    }
];
