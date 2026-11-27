/*
 * Ligações entre as lições do site e o JLPT N5 (fonte única, usada nos dois sentidos).
 *
 *   grammar  id do cartão de n5-grammar.js -> [[lição, id do ponto na lição], ...]
 *            O primeiro par é o link "Ver na lição" do cartão; todos viram a etiqueta
 *            "Lição N". O id do ponto é o `id` de gramatica.points em lessons/data/lesson-NN.js.
 *   forms    id da forma de verbs.js -> [lição, id do ponto na lição]  (onde a forma é ensinada)
 *
 * Nas lições, cada ponto mostra "No JLPT N5" com os cartões e as formas que apontam para ele.
 * Os testes (tests/links.test.js) conferem que cada id existe nos dois lados.
 */
window.JLPT_N5_LINKS = {
    grammar: {
        /* partículas */
        "wa": [[1, "wa-desu"]],
        "ga": [[9, "ga-suki"], [10, "ga-arimasu"]],
        "wo": [[6, "o-verbo"]],
        "ni": [[4, "ni-tempo"], [10, "ga-arimasu"]],
        "e": [[5, "he-ikimasu"]],
        "de": [[6, "de-lugar"], [5, "de-norimono"], [7, "de-guu"]],
        "to": [[5, "to-hitoride"]],
        "mo": [[1, "mo"]],
        "no": [[1, "no-san-jin"], [2, "no-posse"]],
        "kara-made": [[4, "kara-made"]],
        "ya": [[10, "ya"]],
        "ka": [[1, "ka"]],
        "yori": [[12, "yori"]],
        "ichiban": [[12, "ichiban"]],
        /* frases */
        "desu": [[1, "wa-desu"], [1, "ja-arimasen"], [12, "meishi-kako"]],
        "aru-iru": [[10, "ga-arimasu"]],
        "kudasai": [[3, "ikura"]],
        "hoshii": [[13, "hoshii"]],
        "kara-reason": [[9, "kara-doushite"]],
        "ga-but": [[8, "totemo-amari"]],
        /* formas verbais */
        "masu": [[4, "masu-masen"]],
        "mashou": [[6, "masen-ka-mashou"]],
        "tai": [[13, "tai"]],
        "te-kudasai": [[14, "te-kudasai"]],
        "te-iru": [[14, "te-imasu"], [15, "te-imasu-joutai"]],
        "te-sequence": [[16, "te-sequencia"]],
        "te-kara": [[16, "tekara"]],
        "te-mo-ii": [[15, "temo-ii"], [15, "tewa-ikemasen"]],
        "nai-de-kudasai": [[17, "nai-de-kudasai"]],
        "nakereba": [[17, "nakereba"]],
        "nakutemo": [[17, "nakutemo"]],
        "koto-ga-dekiru": [[18, "koto-ga-dekiru"]],
        "shumi": [[18, "shumi"]],
        "mae-ni": [[18, "mae-ni"]],
        "ta-koto": [[19, "koto-ga-aru"]],
        "tari-tari": [[19, "tari"]],
        /* adjetivos */
        "i-adj": [[8, "i-keiyoushi"]],
        "na-adj": [[8, "na-keiyoushi"]],
        "kute-de": [[16, "ligar-adjetivos"]],
        "wa-ga-adj": [[16, "n1-wa-n2-ga"]],
        "naru": [[19, "naru"]]
    },
    forms: {
        "dict": [18, "jisho-kei"],
        "masu": [4, "masu-masen"],
        "masen": [4, "masu-masen"],
        "mashita": [4, "masu-masen"],
        "masendeshita": [4, "masu-masen"],
        "te": [14, "te-kei"],
        "teiru": [14, "te-imasu"],
        "ta": [19, "ta-kei"],
        "nai": [17, "nai-kei"],
        "nakatta": [20, "futsuukei"],
        "tai": [13, "tai"],
        "mashou": [6, "masen-ka-mashou"]
    }
};
