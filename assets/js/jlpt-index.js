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
    { id: "estudo", title: "Estudo", title_en: "Study", intro: "Consulte o conteúdo e marque o que você já sabe.", intro_en: "Browse the content and mark what you already know." },
    { id: "praticar", title: "Praticar", title_en: "Practice", intro: "Treinos e simulados com correção explicada.", intro_en: "Practice sets and mock exams with explained corrections." }
];

window.JLPT_PAGES = [
    {
        group: "estudo",
        level: "N5",
        file: "n5-kanji.html",
        topic: "<ruby>漢字<rt>かんじ</rt></ruby> (Lista de Kanji)",
        topic_en: "<ruby>漢字<rt>かんじ</rt></ruby> (Kanji list)",
        description: "Os 103 kanji do N5 com significados, leituras on'yomi e kun'yomi e frases de exemplo para as principais leituras.",
        description_en: "The 103 N5 kanji with meanings, on'yomi and kun'yomi readings, and example sentences for the main readings."
    },
    {
        group: "estudo",
        level: "N5",
        file: "n5-verbs.html",
        topic: "<ruby>動詞<rt>どうし</rt></ruby> (Verbos)",
        topic_en: "<ruby>動詞<rt>どうし</rt></ruby> (Verbs)",
        description: "Os verbos do N5 divididos nos três grupos, cada um com as 12 formas que mais caem na prova: ます, て, ない, た e outras.",
        description_en: "The N5 verbs split into the three groups, each with the 12 forms that show up most on the exam: ます, て, ない, た and more."
    },
    {
        group: "estudo",
        level: "N5",
        file: "n5-grammar.html",
        topic: "<ruby>文法<rt>ぶんぽう</rt></ruby> (Gramática)",
        topic_en: "<ruby>文法<rt>ぶんぽう</rt></ruby> (Grammar)",
        description: "Os pontos de gramática do N5 em cartões curtos, com exemplos e link para a lição do Minna no Nihongo quando ela existe.",
        description_en: "The N5 grammar points in short cards, with examples and a link to the Minna no Nihongo lesson when there is one."
    },
    {
        group: "praticar",
        level: "N5",
        file: "n5-practice.html",
        topic: "Treino",
        topic_en: "Practice",
        description: "Escolha os temas (gramática, verbos, kanji) e a quantidade. Cada resposta é corrigida na hora, com explicação, e o resultado fica salvo.",
        description_en: "Pick the topics (grammar, verbs, kanji) and how many questions. Each answer is corrected right away, with an explanation, and the result is saved."
    },
    {
        group: "praticar",
        level: "N5",
        file: "n5-mock.html",
        topic: "Simulados",
        topic_en: "Mock exams",
        description: "Faça uma prova com cronômetro, sem ver a correção. No fim, receba a nota estimada e a explicação de cada erro. Seu histórico fica salvo.",
        description_en: "Take a timed exam without seeing the answers. At the end, get an estimated score and an explanation for each mistake. Your history is saved."
    },
    {
        group: "praticar",
        level: "N5",
        file: "n5-progress.html",
        topic: "<ruby>成績<rt>せいせき</rt></ruby> (Meu desempenho)",
        topic_en: "<ruby>成績<rt>せいせき</rt></ruby> (My performance)",
        description: "Veja onde você mais erra, treine seus pontos fracos e acompanhe a nota dos simulados. Também exporta e importa seus dados em um arquivo.",
        description_en: "See where you miss the most, train your weak spots and follow your mock exam scores. You can also export and import your data as a file."
    }
];

// O idioma escolhido (assets/js/i18n.js) troca "topic" por "topic_en" etc.
if (window.I18n) {
    window.JLPT_GROUPS = window.I18n.localize(window.JLPT_GROUPS, window.I18n.lang());
    window.JLPT_PAGES = window.I18n.localize(window.JLPT_PAGES, window.I18n.lang());
}
