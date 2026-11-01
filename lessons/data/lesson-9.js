// Dados da lição 9. Formato descrito no README.md.
window.lessonData = {
  vocab: {
    title: "{語彙|ごい} (Vocabulário)", title_en: "{語彙|ごい} (Vocabulary)",
    items: [
      { jp: "{好|す}き", romaji: "suki", pt: "Gostar (de); ser querido", en: "To like; liked" },
      { jp: "{嫌|きら}い", romaji: "kirai", pt: "Não gostar (de); desgostar", en: "To dislike; disliked" },
      { jp: "{上手|じょうず}", romaji: "jouzu", pt: "Bom em, habilidoso", en: "Good at, skilled" },
      { jp: "{下手|へた}", romaji: "heta", pt: "Ruim em, sem habilidade", en: "Bad at, unskilled" },
      { jp: "わかります", romaji: "wakarimasu", pt: "Entender, compreender", en: "To understand" },
      { jp: "あります", romaji: "arimasu", pt: "Ter (tempo, compromisso, dinheiro)", en: "To have (time, an appointment, money)" },
      { jp: "{料理|りょうり}", romaji: "ryouri", pt: "Culinária, prato", en: "Cooking, dish" },
      { jp: "{音楽|おんがく}", romaji: "ongaku", pt: "Música", en: "Music" },
      { jp: "{歌|うた}", romaji: "uta", pt: "Canção", en: "Song" },
      { jp: "{絵|え}", romaji: "e", pt: "Desenho, pintura", en: "Drawing, painting" },
      { jp: "{字|じ}", romaji: "ji", pt: "Letra, caractere", en: "Letter, character" },
      { jp: "スポーツ", romaji: "supootsu", pt: "Esporte", en: "Sport" },
      { jp: "{野球|やきゅう}", romaji: "yakyuu", pt: "Beisebol", en: "Baseball" },
      { jp: "カラオケ", romaji: "karaoke", pt: "Caraoquê", en: "Karaoke" },
      { jp: "{約束|やくそく}", romaji: "yakusoku", pt: "Compromisso, promessa", en: "Appointment, promise" },
      { jp: "{用事|ようじ}", romaji: "youji", pt: "Assunto a resolver, compromisso", en: "Errand, something to do" },
      { jp: "{時間|じかん}", romaji: "jikan", pt: "Tempo, horário", en: "Time" },
      { jp: "よく", romaji: "yoku", pt: "Bem; frequentemente", en: "Well; often" },
      { jp: "だいたい", romaji: "daitai", pt: "Mais ou menos, em geral", en: "Roughly, mostly" },
      { jp: "すこし", romaji: "sukoshi", pt: "Um pouco", en: "A little" },
      { jp: "ぜんぜん", romaji: "zenzen", pt: "Nada, de jeito nenhum (com negativa)", en: "Not at all (with a negative)" },
      { jp: "たくさん", romaji: "takusan", pt: "Muito, muitos", en: "A lot, many" },
      { jp: "どうして", romaji: "doushite", pt: "Por quê", en: "Why" },
      { jp: "〜から", romaji: "kara", pt: "Porque 〜 (depois de uma frase)", en: "Because 〜 (after a clause)" },
      { jp: "ざんねんですね", romaji: "zannen desune", pt: "Que pena!", en: "That is too bad!" }
    ]
  },
  gramatica: {
    title: "{文法|ぶんぽう} (Gramática)", title_en: "{文法|ぶんぽう} (Grammar)",
    intro: "Três pontos: gostos e habilidades, entender e ter, e dar uma razão. Cada cartão traz o modelo de frase, a explicação, os exemplos, uma comparação com o que é parecido e os erros mais comuns.", intro_en: "Three points: likes and skills, understanding and having, and giving a reason. Each card gives the sentence pattern, the explanation, the examples, a comparison with what looks similar and the most common mistakes.",
    points: [
      {
        id: "ga-suki",
        title: "N が {好|す}きです・{嫌|きら}いです・{上手|じょうず}です・{下手|へた}です", title_en: "N が {好|す}きです・{嫌|きら}いです・{上手|じょうず}です・{下手|へた}です",
        pat: "N が {好|す}き／{嫌|きら}い／{上手|じょうず}／{下手|へた} です",
        short: "gostos e habilidades", short_en: "likes and skills",
        mean: "Para dizer do que se gosta ou se desgosta, e em que se é bom ou ruim, o objeto leva <strong>が</strong>. As quatro palavras são な-adjetivos.", mean_en: "To say what you like or dislike, and what you are good or bad at, the object takes <strong>が</strong>. The four words are な-adjectives.",
        rule: "Pergunta: どんな N が {好|す}きですか。 Para gradar: とても, あまり (com negativa), ぜんぜん (com negativa).", rule_en: "Question: どんな N が {好|す}きですか。 To grade: とても, あまり (with a negative), ぜんぜん (with a negative).",
        ex: [
          { jp: "わたし^は {音楽|おんがく}が {好|す}きです。", romaji: "Watashi wa ongaku ga suki desu.", pt: "Eu gosto de música.", en: "I like music." },
          { jp: "{田中|たなか}さん^は {料理|りょうり}が {上手|じょうず}です。", romaji: "Tanaka-san wa ryouri ga jouzu desu.", pt: "O Sr. Tanaka cozinha bem.", en: "Mr. Tanaka is good at cooking." },
          { jp: "ジョンさん^は {日本語|にほんご}が あまり {上手|じょうず}じゃ ありません。", romaji: "Jon-san wa nihongo ga amari jouzu ja arimasen.", pt: "O John não é muito bom em japonês.", en: "John is not very good at Japanese." },
          { jp: "どんな スポーツが {好|す}きですか。<br>…サッカーが {好|す}きです。", romaji: "Donna supootsu ga suki desu ka. ...Sakkaa ga suki desu.", pt: "De que esporte você gosta? ...Gosto de futebol.", en: "What sports do you like? ...I like soccer." }
        ],
        contrast: {
          rows: [
            { label: "が ({好|す}き, {上手|じょうず}…)", label_en: "が ({好|す}き, {上手|じょうず}…)", jp: "{音楽|おんがく}が {好|す}きです。", pt: "Gosto de música.", en: "I like music." },
            { label: "を (ação direta)", label_en: "を (direct action)", jp: "{音楽|おんがく}を {聞|き}きます。", pt: "Escuto música.", en: "I listen to music." }
          ],
          note: "{好|す}き e {上手|じょうず} são adjetivos: falam de um estado, e não de uma ação sobre o objeto. Por isso o objeto leva が, não を.", note_en: "{好|す}き and {上手|じょうず} are adjectives: they describe a state, not an action on the object. That is why the object takes が, not を."
        },
        trap: [
          "Não use を com {好|す}き: errado {音楽|おんがく}を {好|す}きです。 Certo: {音楽|おんがく}が {好|す}きです。",
          "{嫌|きら}い e {好|す}き são な-adjetivos: a negativa é {好|す}きじゃ ありません (e não {好|す}く ないです)."
        ],
        trap_en: [
          "Do not use を with {好|す}き: wrong {音楽|おんがく}を {好|す}きです。 Right: {音楽|おんがく}が {好|す}きです。",
          "{嫌|きら}い and {好|す}き are な-adjectives: the negative is {好|す}きじゃ ありません (not {好|す}く ないです)."
        ]
      },
      {
        id: "ga-wakarimasu",
        title: "N が わかります・あります", title_en: "N が わかります・あります",
        pat: "N が わかります<br>N が あります",
        short: "entender e ter", short_en: "to understand and to have",
        mean: "<strong>わかります</strong> (entender) e <strong>あります</strong> (ter) também pedem <strong>が</strong>: o que se entende ou se tem leva が.", mean_en: "<strong>わかります</strong> (to understand) and <strong>あります</strong> (to have) also take <strong>が</strong>: what you understand or have takes が.",
        rule: "Para “o quanto” se entende: <strong>よく</strong> (bem), <strong>だいたい</strong> (mais ou menos), <strong>すこし</strong> (um pouco), <strong>あまり</strong> ～ない (não muito), <strong>ぜんぜん</strong> ～ない (nada).", rule_en: "For “how much” you understand: <strong>よく</strong> (well), <strong>だいたい</strong> (roughly), <strong>すこし</strong> (a little), <strong>あまり</strong> ～ない (not much), <strong>ぜんぜん</strong> ～ない (not at all).",
        form: [
          { label: "Grau de compreensão", label_en: "Degree of understanding", text: "Do mais ao menos, com わかります.", text_en: "From most to least, with わかります.", ex: [
            { jp: "よく わかります", romaji: "yoku wakarimasu", pt: "entendo bem", en: "I understand well" },
            { jp: "だいたい わかります", romaji: "daitai wakarimasu", pt: "entendo mais ou menos", en: "I mostly understand" },
            { jp: "すこし わかります", romaji: "sukoshi wakarimasu", pt: "entendo um pouco", en: "I understand a little" },
            { jp: "あまり わかりません", romaji: "amari wakarimasen", pt: "não entendo muito", en: "I do not understand much" },
            { jp: "ぜんぜん わかりません", romaji: "zenzen wakarimasen", pt: "não entendo nada", en: "I do not understand at all" }
          ] }
        ],
        ex: [
          { jp: "{日本語|にほんご}が すこし わかります。", romaji: "Nihongo ga sukoshi wakarimasu.", pt: "Entendo um pouco de japonês.", en: "I understand a little Japanese." },
          { jp: "{漢字|かんじ}が ぜんぜん わかりません。", romaji: "Kanji ga zenzen wakarimasen.", pt: "Não entendo nada de kanji.", en: "I do not understand kanji at all." },
          { jp: "{明日|あした}、{約束|やくそく}が あります。", romaji: "Ashita, yakusoku ga arimasu.", pt: "Amanhã tenho um compromisso.", en: "I have an appointment tomorrow." },
          { jp: "{今日|きょう}^は {時間|じかん}が ありません。", romaji: "Kyou wa jikan ga arimasen.", pt: "Hoje não tenho tempo.", en: "I do not have time today." }
        ],
        contrast: {
          rows: [
            { label: "N が わかります (estado)", label_en: "N が わかります (state)", jp: "{日本語|にほんご}が わかります。", pt: "Entendo japonês.", en: "I understand Japanese." },
            { label: "N を V ます (ação)", label_en: "N を V ます (action)", jp: "{日本語|にほんご}を {勉強|べんきょう}します。", pt: "Estudo japonês.", en: "I study Japanese." }
          ],
          note: "わかります não é uma ação que se faz sobre o objeto: é um estado. Por isso, が.", note_en: "わかります is not an action performed on the object: it is a state. That is why it takes が."
        },
        trap: [
          "Não use を com わかります: errado {日本語|にほんご}を わかります。 Certo: {日本語|にほんご}が わかります。",
          "あります aqui é “ter” (tempo, compromisso, dinheiro). “Existir num lugar” é outro uso, que vem na lição 10."
        ],
        trap_en: [
          "Do not use を with わかります: wrong {日本語|にほんご}を わかります。 Right: {日本語|にほんご}が わかります。",
          "あります here is “to have” (time, appointment, money). “To exist in a place” is another use, in lesson 10."
        ]
      },
      {
        id: "kara-doushite",
        title: "どうして ・ S から (razão)", title_en: "どうして ・ S から (reason)",
        pat: "S1 から、S2。<br>どうして S ですか。…S から です。",
        short: "perguntar e dar a razão", short_en: "asking and giving the reason",
        mean: "<strong>どうして</strong> pergunta “por quê?”. A resposta termina em <strong>から</strong>: “porque…”. A razão sempre vem antes de から.", mean_en: "<strong>どうして</strong> asks “why?”. The answer ends in <strong>から</strong>: “because…”. The reason always comes before から.",
        rule: "Há duas ordens: <strong>razão から、resultado</strong> (“como não tenho tempo, não vou”) e a resposta a どうして: <strong>razão から です</strong> (“é porque…”).", rule_en: "There are two orders: <strong>reason から, result</strong> (“since I have no time, I will not go”) and the answer to どうして: <strong>reason から です</strong> (“it is because…”).",
        ex: [
          { jp: "{時間|じかん}が ありませんから、{行|い}きません。", romaji: "Jikan ga arimasen kara, ikimasen.", pt: "Como não tenho tempo, não vou.", en: "I do not have time, so I will not go." },
          { jp: "どうして {昨日|きのう}^は {来|き}ませんでしたか。<br>…{用事|ようじ}が ありましたから。", romaji: "Doushite kinou wa kimasen deshita ka. ...Youji ga arimashita kara.", pt: "Por que você não veio ontem? ...Porque tinha um compromisso.", en: "Why did you not come yesterday? ...Because I had something to do." },
          { jp: "どうして {日本語|にほんご}を {勉強|べんきょう}しますか。<br>…{日本|にほん}が {好|す}きですから。", romaji: "Doushite nihongo o benkyou shimasu ka. ...Nihon ga suki desu kara.", pt: "Por que você estuda japonês? ...Porque gosto do Japão.", en: "Why do you study Japanese? ...Because I like Japan." }
        ],
        contrast: {
          rows: [
            { label: "razão primeiro", label_en: "reason first", jp: "{寒|さむ}いですから、ジュースを {飲|の}みません。", pt: "Está frio, por isso não bebo suco.", en: "It is cold, so I do not drink juice." },
            { label: "resposta a どうして", label_en: "answer to どうして", jp: "どうして {飲|の}みませんか。…{寒|さむ}いですから。", pt: "Por que não bebe? ...Porque está frio.", en: "Why do you not drink it? ...Because it is cold." }
          ],
          note: "Nos dois casos a razão vem antes de から. O que muda é onde o resultado entra (depois, ou já foi perguntado).", note_en: "In both cases the reason comes before から. What changes is where the result goes (after it, or already asked)."
        },
        trap: [
          "から vai depois da razão, não antes: errado から {寒|さむ}いです。",
          "から (porque) não é o から (a partir de) da lição 4: este vem depois de uma frase com ですます, aquele, depois de um horário ou substantivo."
        ],
        trap_en: [
          "から goes after the reason, not before: wrong から {寒|さむ}いです。",
          "から (because) is not the から (from) of lesson 4: this one follows a full clause with ですます, that one follows a time or noun."
        ]
      }
    ]
  },
  renshuuA: {
    title: "{練習|れんしゅう} A", title_en: "{練習|れんしゅう} A",
    exercises: [
      {
        desc: "1. Complete com が ou を", desc_en: "1. Fill in with が or を",
        questions: [
          { q: "わたしは {音楽|おんがく}（　　）{好|す}きです。", a: "が", romaji: "ga", pt: "Gostar: が", en: "Liking: が" },
          { q: "わたしは {音楽|おんがく}（　　）{聞|き}きます。", a: "を", romaji: "o", pt: "Ação direta: を", en: "Direct action: を" },
          { q: "{日本語|にほんご}（　　）わかります。", a: "が", romaji: "ga", pt: "Entender: が", en: "Understanding: が" },
          { q: "{田中|たなか}さんは {料理|りょうり}（　　）{上手|じょうず}です。", a: "が", romaji: "ga", pt: "Habilidade: が", en: "Skill: が" },
          { q: "{明日|あした}、{約束|やくそく}（　　）あります。", a: "が", romaji: "ga", pt: "Ter: が", en: "Having: が" }
        ]
      },
      {
        desc: "2. Forma negativa (な-adjetivo)", desc_en: "2. Negative form (な-adjective)",
        questions: [
          { q: "{好|す}きです ➔", a: "{好|す}きじゃ ありません", romaji: "suki ja arimasen", pt: "Não gosto", en: "I do not like" },
          { q: "{上手|じょうず}です ➔", a: "{上手|じょうず}じゃ ありません", romaji: "jouzu ja arimasen", pt: "Não é bom em", en: "Is not good at" },
          { q: "{下手|へた}です ➔", a: "{下手|へた}じゃ ありません", romaji: "heta ja arimasen", pt: "Não é ruim em", en: "Is not bad at" }
        ]
      }
    ]
  },
  renshuuB: {
    title: "{練習|れんしゅう} B", title_en: "{練習|れんしゅう} B",
    exercises: [
      {
        desc: "1. Dê a razão com から", desc_en: "1. Give the reason with から",
        questions: [
          { q: "A: どうして {行|い}きませんか。<br>B: {時間|じかん}が ありません＿＿＿。", a: "から", romaji: "kara", pt: "Porque não tenho tempo", en: "Because I have no time" },
          { q: "A: どうして {日本語|にほんご}を {勉強|べんきょう}しますか。<br>B: {日本|にほん}が {好|す}きです＿＿＿。", a: "から", romaji: "kara", pt: "Porque gosto do Japão", en: "Because I like Japan" },
          { q: "A: どうして {昨日|きのう}は {来|き}ませんでしたか。<br>B: {用事|ようじ}が ありました＿＿＿。", a: "から", romaji: "kara", pt: "Porque tinha um compromisso", en: "Because I had something to do" }
        ]
      },
      {
        desc: "2. Grau de compreensão: escolha a palavra certa", desc_en: "2. Degree of understanding: choose the right word",
        questions: [
          { q: "{漢字|かんじ}が （　　）わかりません。(nada)", q_en: "{漢字|かんじ}が （　　）わかりません。(not at all)", a: "ぜんぜん", romaji: "zenzen", pt: "Não entendo nada de kanji", en: "I do not understand kanji at all" },
          { q: "{日本語|にほんご}が （　　）わかります。(bem)", q_en: "{日本語|にほんご}が （　　）わかります。(well)", a: "よく", romaji: "yoku", pt: "Entendo bem japonês", en: "I understand Japanese well" },
          { q: "{日本語|にほんご}が （　　）わかります。(um pouco)", q_en: "{日本語|にほんご}が （　　）わかります。(a little)", a: "すこし", romaji: "sukoshi", pt: "Entendo um pouco de japonês", en: "I understand a little Japanese" }
        ]
      }
    ]
  },
  mondai: {
    title: "{問題|もんだい} (Problemas / Avaliação)", title_en: "{問題|もんだい} (Problems / Assessment)",
    exercises: [
      {
        desc: "1. (　　) に {正|ただ}しい ことばを {入|い}れなさい。 (が・を・から・どうして・ぜんぜん)", desc_en: "1. Fill in the blank with the right word. (が・を・から・どうして・ぜんぜん)",
        questions: [
          { q: "わたしは カラオケ（　　）{上手|じょうず}じゃ ありません。", a: "が", romaji: "ga", pt: "Habilidade: が", en: "Skill: が" },
          { q: "（　　）{勉強|べんきょう}しますか。…{好|す}きですから。", a: "どうして", romaji: "doushite", pt: "Por quê", en: "Why" },
          { q: "{寒|さむ}いです（　　）、ジュースを {飲|の}みません。", a: "から", romaji: "kara", pt: "Razão antes de から", en: "The reason comes before から" },
          { q: "{漢字|かんじ}が （　　）わかりません。", a: "ぜんぜん", romaji: "zenzen", pt: "Não entendo nada", en: "I do not understand at all" }
        ]
      },
      {
        desc: "2. {読|よ}み{物|もの} (Leitura): どうして?", desc_en: "2. Reading: why?",
        questions: [
          {
            q: `<div class="reading-box">マリアさんは {日本|にほん}の {料理|りょうり}が {好|す}きです。{毎週|まいしゅう} {日曜日|にちようび}に {料理|りょうり}を します。でも、{漢字|かんじ}が ぜんぜん わかりませんから、{毎日|まいにち} {勉強|べんきょう}します。</div>{質問|しつもん}: どうして マリアさんは {毎日|まいにち} {勉強|べんきょう}しますか。<br>➔ ＿＿＿＿＿＿＿＿＿＿＿＿＿から です。`,
            a: "{漢字|かんじ}が ぜんぜん わかりません",
            romaji: "kanji ga zenzen wakarimasen",
            pt: "Porque não entende nada de kanji.", en: "Because she does not understand kanji at all."
          }
        ]
      }
    ]
  },
  montar: {
    title: "{組|く}み{立|た}て (Montar a frase)", title_en: "{組|く}み{立|た}て (Build the sentence)",
    exercises: [
      {
        desc: "Toque nas palavras na ordem certa para montar a frase.", desc_en: "Tap the words in the right order to build the sentence.",
        questions: [
          { tokens: ["{音楽|おんがく}が", "{好|す}きです。"], pt: "Eu gosto de música.", en: "I like music.", romaji: "Ongaku ga suki desu." },
          { tokens: ["{日本語|にほんご}が", "すこし", "わかります。"], pt: "Entendo um pouco de japonês.", en: "I understand a little Japanese.", romaji: "Nihongo ga sukoshi wakarimasu." },
          { tokens: ["{時間|じかん}が", "ありませんから、", "{行|い}きません。"], pt: "Como não tenho tempo, não vou.", en: "I do not have time, so I will not go.", romaji: "Jikan ga arimasen kara, ikimasen." },
          { tokens: ["どうして", "{日本語|にほんご}を", "{勉強|べんきょう}しますか。"], pt: "Por que você estuda japonês?", en: "Why do you study Japanese?", romaji: "Doushite nihongo o benkyou shimasu ka." }
        ]
      }
    ]
  }
};
