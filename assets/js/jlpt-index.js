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
        topic: "<ruby>文法<rt>ぶんぽう</rt></ruby> (Gramática)",
        description: "Os pontos de gramática do N5 em cartões curtos, com exemplos e link para a lição do Minna no Nihongo quando ela existe."
    },
    {
        group: "praticar",
        level: "N5",
        file: "n5-practice.html",
        topic: "Treino",
        description: "Escolha os temas (gramática, verbos, kanji) e a quantidade. Cada resposta é corrigida na hora, com explicação, e o resultado fica salvo."
    },
    {
        group: "praticar",
        level: "N5",
        file: "n5-mock.html",
        topic: "Simulados",
        description: "Faça uma prova com cronômetro, sem ver a correção. No fim, receba a nota estimada e a explicação de cada erro. Seu histórico fica salvo."
    },
    {
        group: "praticar",
        level: "N5",
        file: "n5-progress.html",
        topic: "<ruby>成績<rt>せいせき</rt></ruby> (Meu desempenho)",
        description: "Veja onde você mais erra, treine seus pontos fracos e acompanhe a nota dos simulados. Também exporta e importa seus dados em um arquivo."
    }
];
