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
        number: 6,
        file: "lesson-6.html",
        topic: "{食|た}べる・{見|み}る・{誘|さそ}う",
        topic_en: "Eating, watching, inviting",
        description: "Nを Vます • Nで Vます • Vませんか • Vましょう",
        description_en: "Nを Vます • Nで Vます • Vませんか • Vましょう"
    },
    {
        number: 7,
        file: "lesson-7.html",
        topic: "どうぐと あげる・もらう",
        topic_en: "Tools, giving and receiving",
        description: "Nで Vます • あげます・もらいます • もう・まだ",
        description_en: "Nで Vます • あげます・もらいます • もう・まだ"
    },
    {
        number: 8,
        file: "lesson-8.html",
        topic: "{形容詞|けいようし} (Adjetivos)",
        topic_en: "Adjectives",
        description: "い{形容詞|けいようし} • な{形容詞|けいようし} • とても・あまり • どんな",
        description_en: "い-adjectives • な-adjectives • とても・あまり • どんな"
    },
    {
        number: 9,
        file: "lesson-9.html",
        topic: "{好|す}き・{上手|じょうず}・わかります",
        topic_en: "Likes, skills and understanding",
        description: "Nが {好|す}きです • Nが わかります • どうして・から",
        description_en: "Nが {好|す}きです • Nが わかります • どうして・から"
    },
    {
        number: 10,
        file: "lesson-10.html",
        topic: "あります・います (Existência)",
        topic_en: "Existence: あります and います",
        description: "Nが あります・います • {場所|ばしょ}に あります • {位置|いち}の ことば • や",
        description_en: "Nが あります・います • {場所|ばしょ}に あります • position words • や"
    },
    {
        number: 11,
        file: "lesson-11.html",
        topic: "{数|かぞ}える・かかる{時間|じかん}",
        topic_en: "Counting and how long things take",
        description: "{数|かぞ}え{方|かた} • {数量|すうりょう} • {時間|じかん}の{長|なが}さ • {回数|かいすう}",
        description_en: "Counters • quantities • duration • frequency"
    },
    {
        number: 12,
        file: "lesson-12.html",
        topic: "{比|くら}べる ({比較|ひかく})",
        topic_en: "Comparing",
        description: "Nでした • より • どちらが • いちばん",
        description_en: "Nでした • より • どちらが • いちばん"
    },
    {
        number: 13,
        file: "lesson-13.html",
        topic: "ほしい・〜たい・{目的|もくてき}",
        topic_en: "Wanting and purpose",
        description: "Nが ほしい • Vたい • Vに {行|い}きます • {何|なに}か・どこか",
        description_en: "Nが ほしい • Vたい • Vに {行|い}きます • {何|なに}か・どこか"
    },
    {
        number: 14,
        file: "lesson-14.html",
        topic: "て{形|けい} (Forma TE)",
        topic_en: "The て form",
        description: "てください • ています • ましょうか",
        description_en: "てください • ています • ましょうか"
    },
    {
        number: 15,
        file: "lesson-15.html",
        topic: "{許可|きょか}・{禁止|きんし}・{状態|じょうたい}",
        topic_en: "Permission, prohibition and states",
        description: "てもいいです • てはいけません • ています ({状態|じょうたい}) • {知|し}っています",
        description_en: "てもいいです • てはいけません • ています (state) • {知|し}っています"
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
    },
    {
        number: 20,
        file: "lesson-20.html",
        topic: "{夏休|なつやす}み ({普通形|ふつうけい})",
        topic_en: "{夏休|なつやす}み (plain form)",
        description: "{普通形|ふつうけい} (fala informal) • だ／じゃない・だった • {会話|かいわ} casual",
        description_en: "{普通形|ふつうけい} (plain speech) • だ／じゃない・だった • casual talk"
    },
    {
        number: 21,
        file: "lesson-21.html",
        topic: "{思|おも}います・{言|い}います・でしょう",
        topic_en: "I think / I say / probably",
        description: "{意見|いけん} • {引用|いんよう} • {確信|かくしん}の{程度|ていど} (opinião, citação, probabilidade)",
        description_en: "{意見|いけん} • {引用|いんよう} • {確信|かくしん}の{程度|ていど} (opinion, quoting, probability)"
    },
    {
        number: 22,
        file: "lesson-22.html",
        topic: "{名詞修飾|めいししゅうしょく}",
        topic_en: "Noun modification",
        description: "{名詞修飾|めいししゅうしょく} • が • 〜て いる／〜た (descrever com uma frase)",
        description_en: "{名詞修飾|めいししゅうしょく} • が • 〜て いる／〜た (describing with a clause)"
    },
    {
        number: 23,
        file: "lesson-23.html",
        topic: "〜とき・〜と",
        topic_en: "〜とき and 〜と (when and natural consequence)",
        description: "{図書館|としょかん}で {本|ほん}を {借|か}りるとき • {自然|しぜん}な {結果|けっか} • {条件|じょうけん}",
        description_en: "When (とき) • natural consequence (と) • conditions"
    },
    {
        number: 24,
        file: "lesson-24.html",
        topic: "てあげます・てくれます・てもらいます",
        topic_en: "Doing favours (てあげます / てくれます / てもらいます)",
        description: "{手伝|てつだ}って くれます • お{礼|れい} • が と に",
        description_en: "Doing a favour • someone does for me • receiving a favour • が and に"
    },
    {
        number: 25,
        file: "lesson-25.html",
        topic: "〜たら・〜ても",
        topic_en: "If and even if (たら, ても)",
        description: "{条件|じょうけん} • もし • 〜たら どうですか",
        description_en: "Conditions • even if • suggestions with たら"
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
