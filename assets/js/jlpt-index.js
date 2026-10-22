/*
 * Páginas da seção JLPT, agrupadas. Este é o único lugar a editar para uma
 * página nova aparecer em jlpt/index.html.
 *
 * Grupo (JLPT_GROUPS):
 *   id, title  identificador e título da seção
 *   intro      frase curta sob o título
 *
 * Página (JLPT_PAGES):
 *   group        id do grupo
 *   level        nível do JLPT (aparece em destaque no cartão)
 *   file         nome do arquivo dentro de jlpt/
 *   topic        título da página (aceita <ruby> para furigana)
 *   description  resumo curto (aceita <ruby>)
 *   status       "soon" mostra o cartão apagado, sem link ("Em breve")
 */
window.JLPT_GROUPS = [
    { id: "estudo", title: "Estudo", intro: "Consulte o conteúdo e marque o que você já sabe." },
    { id: "praticar", title: "Praticar", intro: "Treinos e simulados com correção explicada." }
];

window.JLPT_PAGES = [
    {
        group: "estudo",
        level: "N5",
        file: "n5-kanji.html",
        topic: "<ruby>漢字<rt>かんじ</rt></ruby> (Lista de Kanji)",
        description: "Os 103 kanji do N5 com significados, leituras on'yomi e kun'yomi e frases de exemplo para as principais leituras."
    },
    {
        group: "estudo",
        level: "N5",
        file: "n5-verbs.html",
        topic: "<ruby>動詞<rt>どうし</rt></ruby> (Verbos)",
        description: "Os verbos do N5 divididos nos três grupos, cada um com as 12 formas que mais caem na prova: ます, て, ない, た e outras."
    },
    {
        group: "estudo",
        level: "N5",
        file: "n5-grammar.html",
        status: "soon",
        topic: "<ruby>文法<rt>ぶんぽう</rt></ruby> (Gramática)",
        description: "Os pontos de gramática do N5 em cartões curtos, com link para a lição do Minna no Nihongo onde cada um é explicado."
    },
    {
        group: "praticar",
        level: "N5",
        file: "n5-practice.html",
        status: "soon",
        topic: "Treino",
        description: "Gere um treino de verbos, gramática e kanji no tamanho que quiser e veja a resposta na hora."
    },
    {
        group: "praticar",
        level: "N5",
        file: "n5-mock.html",
        status: "soon",
        topic: "Simulados",
        description: "Faça uma prova completa, receba a nota estimada e a correção com a explicação de cada erro. Seu histórico fica salvo."
    }
];
