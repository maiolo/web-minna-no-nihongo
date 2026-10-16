/*
 * Lista de páginas da seção JLPT.
 *
 * Este é o único lugar que precisa ser editado para uma página nova aparecer
 * em jlpt/index.html. Mantenha agrupado por nível (N5, N4...).
 *
 *   level        nível do JLPT (texto curto, aparece em destaque no cartão)
 *   file         nome do arquivo dentro de jlpt/
 *   topic        título da página (aceita <ruby> para furigana)
 *   description  resumo curto (aceita <ruby>)
 */
window.JLPT_PAGES = [
    {
        level: "N5",
        file: "n5-kanji.html",
        topic: "<ruby>漢字<rt>かんじ</rt></ruby> (Lista de Kanji)",
        description: "Os 103 kanji do N5 com significados, leituras on'yomi e kun'yomi e frases de exemplo para as principais leituras."
    }
];
