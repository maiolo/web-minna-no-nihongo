// Dados da lição 12. Formato descrito no README.md.
window.lessonData = {
  vocab: {
    title: "{語彙|ごい} (Vocabulário)", title_en: "{語彙|ごい} (Vocabulary)",
    items: [
      { jp: "{雨|あめ}", romaji: "ame", pt: "Chuva", en: "Rain" },
      { jp: "{雪|ゆき}", romaji: "yuki", pt: "Neve", en: "Snow" },
      { jp: "{曇|くも}り", romaji: "kumori", pt: "Tempo nublado", en: "Cloudy weather" },
      { jp: "{季節|きせつ}", romaji: "kisetsu", pt: "Estação do ano", en: "Season" },
      { jp: "{春|はる}", romaji: "haru", pt: "Primavera", en: "Spring" },
      { jp: "{夏|なつ}", romaji: "natsu", pt: "Verão", en: "Summer" },
      { jp: "{秋|あき}", romaji: "aki", pt: "Outono", en: "Autumn" },
      { jp: "{冬|ふゆ}", romaji: "fuyu", pt: "Inverno", en: "Winter" },
      { jp: "{世界|せかい}", romaji: "sekai", pt: "Mundo", en: "World" },
      { jp: "お{祭|まつ}り", romaji: "omatsuri", pt: "Festival", en: "Festival" },
      { jp: "ホテル", romaji: "hoteru", pt: "Hotel", en: "Hotel" },
      { jp: "{速|はや}い", romaji: "hayai", pt: "Rápido", en: "Fast" },
      { jp: "{遅|おそ}い", romaji: "osoi", pt: "Lento; tarde", en: "Slow; late" },
      { jp: "{近|ちか}い", romaji: "chikai", pt: "Perto", en: "Near" },
      { jp: "{遠|とお}い", romaji: "tooi", pt: "Longe", en: "Far" },
      { jp: "{重|おも}い", romaji: "omoi", pt: "Pesado", en: "Heavy" },
      { jp: "{軽|かる}い", romaji: "karui", pt: "Leve", en: "Light" },
      { jp: "{多|おお}い", romaji: "ooi", pt: "Muitos, em grande quantidade", en: "Many, a large amount" },
      { jp: "{少|すく}ない", romaji: "sukunai", pt: "Poucos, em pequena quantidade", en: "Few, a small amount" },
      { jp: "{暖|あたた}かい", romaji: "atatakai", pt: "Morno, ameno", en: "Warm, mild" },
      { jp: "{涼|すず}しい", romaji: "suzushii", pt: "Fresco (agradável)", en: "Cool (pleasant)" },
      { jp: "{甘|あま}い", romaji: "amai", pt: "Doce", en: "Sweet" },
      { jp: "{簡単|かんたん}", romaji: "kantan", pt: "Simples, fácil", en: "Simple, easy" },
      { jp: "〜より", romaji: "yori", pt: "Mais do que 〜 (padrão de comparação)", en: "Than 〜 (standard of comparison)" },
      { jp: "ほう", romaji: "hou", pt: "Lado, a opção (em comparações)", en: "Side, the option (in comparisons)" },
      { jp: "どちら", romaji: "dochira", pt: "Qual (de dois)", en: "Which (of two)" },
      { jp: "どれ", romaji: "dore", pt: "Qual (de três ou mais)", en: "Which (of three or more)" },
      { jp: "いちばん", romaji: "ichiban", pt: "O mais, o melhor", en: "The most, the best" },
      { jp: "ずっと", romaji: "zutto", pt: "Muito mais (com comparação)", en: "Much more (with a comparison)" },
      { jp: "どちらも", romaji: "dochira mo", pt: "Os dois, ambos", en: "Both" }
    ]
  },
  gramatica: {
    title: "{文法|ぶんぽう} (Gramática)", title_en: "{文法|ぶんぽう} (Grammar)",
    intro: "Quatro pontos: o passado de substantivos e な-adjetivos, e depois as três formas de comparar. Cada cartão traz o modelo de frase, a explicação, os exemplos, uma comparação com o que é parecido e os erros mais comuns.", intro_en: "Four points: the past of nouns and な-adjectives, and then the three ways of comparing. Each card gives the sentence pattern, the explanation, the examples, a comparison with what looks similar and the most common mistakes.",
    points: [
      {
        id: "meishi-kako",
        title: "N・Adj-な でした・じゃ ありませんでした (passado de substantivo e な-adjetivo)", title_en: "N・Adj-な でした・じゃ ありませんでした (past of nouns and な-adjectives)",
        pat: "N／Adj-な です ➔ でした<br>N／Adj-な じゃ ありません ➔ じゃ ありませんでした",
        short: "o passado de “é” para substantivos e な-adjetivos", short_en: "the past of “is” for nouns and な-adjectives",
        mean: "O passado de <strong>です</strong> é <strong>でした</strong>; o de <strong>じゃ ありません</strong> é <strong>じゃ ありませんでした</strong>. Vale para substantivos e para な-adjetivos. Os い-adjetivos têm a sua forma própria (〜かったです), da lição 8.", mean_en: "The past of <strong>です</strong> is <strong>でした</strong>; that of <strong>じゃ ありません</strong> is <strong>じゃ ありませんでした</strong>. It works for nouns and な-adjectives. い-adjectives have their own form (〜かったです), from lesson 8.",
        form: [
          { label: "Substantivo e な-adjetivo", label_en: "Noun and な-adjective", text: "Só o final muda.", text_en: "Only the ending changes.", ex: [
            { tag: "presente", tag_en: "present", jp: "{雨|あめ}です", pt: "é chuva", en: "it is rain" },
            { tag: "passado", tag_en: "past", jp: "{雨|あめ}でした", pt: "era chuva (choveu)", en: "it was rain (it rained)" },
            { tag: "negativo", tag_en: "negative", jp: "{雨|あめ}じゃ ありません", pt: "não é chuva", en: "it is not rain" },
            { tag: "passado negativo", tag_en: "past negative", jp: "{雨|あめ}じゃ ありませんでした", pt: "não era chuva", en: "it was not rain" }
          ] }
        ],
        ex: [
          { jp: "{昨日|きのう}^は {雨|あめ}でした。", romaji: "Kinou wa ame deshita.", pt: "Ontem choveu.", en: "It rained yesterday." },
          { jp: "{去年|きょねん}の {冬|ふゆ}^は {雪|ゆき}じゃ ありませんでした。", romaji: "Kyonen no fuyu wa yuki ja arimasen deshita.", pt: "No inverno passado não nevou.", en: "Last winter it did not snow." },
          { jp: "お{祭|まつ}り^は にぎやかでした。", romaji: "Omatsuri wa nigiyaka deshita.", pt: "O festival foi animado.", en: "The festival was lively." }
        ],
        contrast: {
          rows: [
            { label: "presente (です)", label_en: "present (です)", jp: "{今日|きょう}^は {曇|くも}りです。", pt: "Hoje está nublado.", en: "It is cloudy today." },
            { label: "passado (でした)", label_en: "past (でした)", jp: "{昨日|きのう}^は {曇|くも}りでした。", pt: "Ontem estava nublado.", en: "It was cloudy yesterday." }
          ],
          note: "Só o final muda; a palavra de tempo ({今日|きょう}, {昨日|きのう}) ajuda a conferir.", note_en: "Only the ending changes; the time word ({今日|きょう}, {昨日|きのう}) helps you check."
        },
        trap: [
          "Não use ました com substantivo: errado {雨|あめ}ました。 O passado de です é でした.",
          "Cuidado para não misturar: い-adjetivo faz 〜かったです ({暑|あつ}かったです), e não 〜いでした."
        ],
        trap_en: [
          "Do not use ました with a noun: wrong {雨|あめ}ました。 The past of です is でした.",
          "Be careful not to mix them: an い-adjective makes 〜かったです ({暑|あつ}かったです), not 〜いでした."
        ]
      },
      {
        id: "yori",
        title: "A は B より Adj です", title_en: "A は B より Adj です",
        pat: "A は B より Adj です",
        short: "A é mais ... do que B", short_en: "A is more … than B",
        mean: "<strong>より</strong> marca o <em>padrão</em> de comparação (B). O adjetivo não muda de forma: a ordem das palavras mostra quem é “mais”. Para reforçar, use <strong>ずっと</strong> (muito mais).", mean_en: "<strong>より</strong> marks the <em>standard</em> of comparison (B). The adjective does not change form: the word order shows who is “more”. To reinforce, use <strong>ずっと</strong> (much more).",
        ex: [
          { jp: "{東京|とうきょう}^は {京都|きょうと}より {大|おお}きいです。", romaji: "Toukyou wa Kyouto yori ookii desu.", pt: "Tóquio é maior do que Kyoto.", en: "Tokyo is bigger than Kyoto." },
          { jp: "{電車|でんしゃ}^は バスより {速|はや}いです。", romaji: "Densha wa basu yori hayai desu.", pt: "O trem é mais rápido do que o ônibus.", en: "The train is faster than the bus." },
          { jp: "{飛行機|ひこうき}^は {電車|でんしゃ}より ずっと {速|はや}いです。", romaji: "Hikouki wa densha yori zutto hayai desu.", pt: "O avião é muito mais rápido do que o trem.", en: "The plane is much faster than the train." }
        ],
        contrast: {
          rows: [
            { label: "A は B より (A é mais)", label_en: "A は B より (A is more)", jp: "{夏|なつ}^は {冬|ふゆ}より {暑|あつ}いです。", pt: "O verão é mais quente do que o inverno.", en: "Summer is hotter than winter." },
            { label: "B は A より (inverte)", label_en: "B は A より (reversed)", jp: "{冬|ふゆ}^は {夏|なつ}より {暑|あつ}く ないです。", pt: "O inverno não é mais quente do que o verão.", en: "Winter is not hotter than summer." }
          ],
          note: "Inverter os dois lados muda a ideia. Para dizer “B é menos que A”, normalmente se põe A no lugar de B e usa a negativa ou o adjetivo oposto.", note_en: "Swapping the two sides changes the idea. To say “B is less than A”, you normally put A in B's place and use the negative or the opposite adjective."
        },
        trap: [
          "O adjetivo não vira “mais” (não há comparativo): continua {大|おお}きい. A ordem A は B より é que dá o sentido.",
          "より vem depois do padrão B, e não depois do maior: “A é maior que B” é A は B より {大|おお}きい, e não A より B は…"
        ],
        trap_en: [
          "The adjective does not become “more” (there is no comparative): it stays {大|おお}きい. The order A は B より gives the meaning.",
          "より comes after the standard B, not after the bigger one: “A is bigger than B” is A は B より {大|おお}きい, not A より B は…"
        ]
      },
      {
        id: "dochira-ga",
        title: "A と B と どちらが Adj ですか ・ A の ほうが", title_en: "A と B と どちらが Adj ですか ・ A の ほうが",
        pat: "A と B と どちらが Adj ですか。<br>…A の ほうが Adj です。",
        short: "perguntar e escolher entre duas opções", short_en: "asking and choosing between two options",
        mean: "Para escolher entre <strong>duas</strong> opções, pergunta-se どちらが. A resposta repete a escolhida com <strong>の ほうが</strong> (“o lado de A”). Se as duas servem, <strong>どちらも</strong>.", mean_en: "To choose between <strong>two</strong> options, ask どちらが. The answer repeats the chosen one with <strong>の ほうが</strong> (“the A side”). If both do, <strong>どちらも</strong>.",
        ex: [
          { jp: "{電車|でんしゃ}と バスと どちらが {速|はや}いですか。<br>…{電車|でんしゃ}の ほうが {速|はや}いです。", romaji: "Densha to basu to dochira ga hayai desu ka. ...Densha no hou ga hayai desu.", pt: "Entre o trem e o ônibus, qual é mais rápido? ...O trem é mais rápido.", en: "Which is faster, the train or the bus? ...The train is faster." },
          { jp: "{夏|なつ}と {冬|ふゆ}と どちらが {好|す}きですか。<br>…{夏|なつ}の ほうが {好|す}きです。", romaji: "Natsu to fuyu to dochira ga suki desu ka. ...Natsu no hou ga suki desu.", pt: "Entre o verão e o inverno, de qual você gosta mais? ...Gosto mais do verão.", en: "Which do you like better, summer or winter? ...I like summer better." },
          { jp: "{肉|にく}と {魚|さかな}と どちらが {好|す}きですか。<br>…どちらも {好|す}きです。", romaji: "Niku to sakana to dochira ga suki desu ka. ...Dochira mo suki desu.", pt: "Carne ou peixe, de qual você gosta mais? ...Gosto dos dois.", en: "Which do you like better, meat or fish? ...I like both." }
        ],
        contrast: {
          rows: [
            { label: "com より (afirma)", label_en: "with より (states)", jp: "{電車|でんしゃ}^は バスより {速|はや}いです。", pt: "O trem é mais rápido do que o ônibus.", en: "The train is faster than the bus." },
            { label: "com どちら (pergunta e escolhe)", label_en: "with どちら (asks and chooses)", jp: "{電車|でんしゃ}と バスと どちらが {速|はや}いですか。", pt: "Qual é mais rápido: o trem ou o ônibus?", en: "Which is faster, the train or the bus?" }
          ],
          note: "A pergunta dá as duas opções e a resposta escolhe uma. Quem pergunta não sabe qual é maior.", note_en: "The question gives the two options and the answer picks one. The asker does not know which one is greater."
        },
        trap: [
          "どちら é só para <em>duas</em> opções. Para três ou mais, use {何|なに}／どれ／いつ… com いちばん (próximo cartão).",
          "Na resposta, prefira の ほうが: {電車|でんしゃ}の ほうが {速|はや}いです。{電車|でんしゃ}が {速|はや}いです também é possível, mas の ほうが deixa a comparação explícita."
        ],
        trap_en: [
          "どちら is only for <em>two</em> options. For three or more, use {何|なに}／どれ／いつ… with いちばん (next card).",
          "In the answer, prefer の ほうが: {電車|でんしゃ}の ほうが {速|はや}いです。{電車|でんしゃ}が {速|はや}いです is also possible, but の ほうが makes the comparison explicit."
        ]
      },
      {
        id: "ichiban",
        title: "N の {中|なか}で ・ いちばん", title_en: "N の {中|なか}で ・ いちばん",
        pat: "N の {中|なか}で {何|なに}／どれ／いつ／だれ／どこ が いちばん Adj ですか",
        short: "o mais, o melhor (entre três ou mais)", short_en: "the most, the best (among three or more)",
        mean: "<strong>いちばん</strong> antes do adjetivo dá o grau máximo: “o mais…”. A faixa de comparação é marcada por <strong>で</strong> (“dentro de”): {季節|きせつ}の {中|なか}で, {日本|にほん}で.", mean_en: "<strong>いちばん</strong> before the adjective gives the highest degree: “the most…”. The range of comparison is marked by <strong>で</strong> (“among”): {季節|きせつ}の {中|なか}で, {日本|にほん}で.",
        ex: [
          { jp: "{日本|にほん}で どこが いちばん {寒|さむ}いですか。<br>…{北海道|ほっかいどう}です。", romaji: "Nihon de doko ga ichiban samui desu ka. ...Hokkaidou desu.", pt: "Onde é mais frio no Japão? ...Em Hokkaido.", en: "Where is the coldest in Japan? ...Hokkaido." },
          { jp: "{季節|きせつ}の {中|なか}で いつが いちばん {好|す}きですか。<br>…{春|はる}が いちばん {好|す}きです。", romaji: "Kisetsu no naka de itsu ga ichiban suki desu ka. ...Haru ga ichiban suki desu.", pt: "Qual estação você mais gosta? ...A primavera.", en: "Which season do you like best? ...Spring." },
          { jp: "{家族|かぞく}の {中|なか}で だれが いちばん {速|はや}く {走|はし}りますか。<br>…{弟|おとうと}が いちばん {速|はや}いです。", romaji: "Kazoku no naka de dare ga ichiban hayaku hashirimasu ka. ...Otouto ga ichiban hayai desu.", pt: "Na sua família, quem corre mais rápido? ...Meu irmão mais novo.", en: "Who runs fastest in your family? ...My younger brother." }
        ],
        contrast: {
          rows: [
            { label: "どちら (entre dois)", label_en: "どちら (between two)", jp: "{夏|なつ}と {冬|ふゆ}と どちらが {好|す}きですか。", pt: "Verão ou inverno: qual você prefere?", en: "Summer or winter: which do you like better?" },
            { label: "いちばん (entre três ou mais)", label_en: "いちばん (among three or more)", jp: "{季節|きせつ}の {中|なか}で いつが いちばん {好|す}きですか。", pt: "Entre as estações, qual você mais gosta?", en: "Among the seasons, which do you like best?" }
          ],
          note: "Dois elementos: どちら. Três ou mais: palavra interrogativa (なに, どれ, いつ, だれ, どこ) ＋ いちばん.", note_en: "Two items: どちら. Three or more: a question word (なに, どれ, いつ, だれ, どこ) ＋ いちばん."
        },
        trap: [
          "O grupo de comparação leva で (“entre”), não に: {日本|にほん}で, e não {日本|にほん}に.",
          "A escolha leva が: いつが いちばん, e não いつを. Quem é o mais ... é o sujeito do adjetivo."
        ],
        trap_en: [
          "The comparison group takes で (“among”), not に: {日本|にほん}で, not {日本|にほん}に.",
          "The choice takes が: いつが いちばん, not いつを. The one that is the “most …” is the subject of the adjective."
        ]
      }
    ]
  },
  renshuuA: {
    title: "{練習|れんしゅう} A", title_en: "{練習|れんしゅう} A",
    exercises: [
      {
        desc: "1. Passe para o passado (でした／じゃ ありませんでした)", desc_en: "1. Put it in the past (でした／じゃ ありませんでした)",
        questions: [
          { q: "{雨|あめ}です ➔", a: "{雨|あめ}でした", romaji: "ame deshita", pt: "Choveu", en: "It rained" },
          { q: "{雪|ゆき}です ➔", a: "{雪|ゆき}でした", romaji: "yuki deshita", pt: "Nevou", en: "It snowed" },
          { q: "{曇|くも}りじゃ ありません ➔", a: "{曇|くも}りじゃ ありませんでした", romaji: "kumori ja arimasen deshita", pt: "Não estava nublado", en: "It was not cloudy" },
          { q: "にぎやかです ➔", a: "にぎやかでした", romaji: "nigiyaka deshita", pt: "Estava animado", en: "It was lively" }
        ]
      },
      {
        desc: "2. Escolha: より, どちら, いちばん ou ほう", desc_en: "2. Choose: より, どちら, いちばん or ほう",
        questions: [
          { q: "{電車|でんしゃ}^は バス（　　）{速|はや}いです。", a: "より", romaji: "yori", pt: "Padrão de comparação", en: "Standard of comparison" },
          { q: "{夏|なつ}と {冬|ふゆ}と （　　）が {好|す}きですか。", a: "どちら", romaji: "dochira", pt: "Entre duas opções", en: "Between two options" },
          { q: "{夏|なつ}の （　　）が {好|す}きです。", a: "ほう", romaji: "hou", pt: "O lado do verão", en: "The summer side" },
          { q: "{季節|きせつ}の {中|なか}で {春|はる}が （　　）{好|す}きです。", a: "いちばん", romaji: "ichiban", pt: "O mais", en: "The most" }
        ]
      }
    ]
  },
  renshuuB: {
    title: "{練習|れんしゅう} B", title_en: "{練習|れんしゅう} B",
    exercises: [
      {
        desc: "1. Complete a comparação", desc_en: "1. Complete the comparison",
        questions: [
          { q: "A: {東京|とうきょう}と {京都|きょうと}と どちらが {大|おお}きいですか。<br>B: {東京|とうきょう}の ＿＿＿＿ {大|おお}きいです。", a: "ほうが", romaji: "hou ga", pt: "O lado de Tóquio", en: "The Tokyo side" },
          { q: "A: {果物|くだもの}の {中|なか}で {何|なに}が いちばん {好|す}きですか。<br>B: りんご＿＿ いちばん {好|す}きです。", a: "が／は", romaji: "ga / wa", pt: "が (ou は, tópico)", en: "が (or は, topic)" },
          { q: "A: {肉|にく}と {魚|さかな}と どちらが {好|す}きですか。<br>B: ＿＿＿＿＿ {好|す}きです。(os dois)", q_en: "A: {肉|にく}と {魚|さかな}と どちらが {好|す}きですか。<br>B: ＿＿＿＿＿ {好|す}きです。(both)", a: "どちらも", romaji: "dochira mo", pt: "Gosto dos dois", en: "I like both" }
        ]
      }
    ]
  },
  mondai: {
    title: "{問題|もんだい} (Problemas / Avaliação)", title_en: "{問題|もんだい} (Problems / Assessment)",
    exercises: [
      {
        desc: "1. (　　) に {正|ただ}しい ことばを {入|い}れなさい。 (より・ずっと・どちら・いちばん・で)", desc_en: "1. Fill in the blank with the right word. (より・ずっと・どちら・いちばん・で)",
        questions: [
          { q: "{飛行機|ひこうき}^は {電車|でんしゃ}より （　　）{速|はや}いです。(muito mais)", q_en: "{飛行機|ひこうき}^は {電車|でんしゃ}より （　　）{速|はや}いです。(much)", a: "ずっと", romaji: "zutto", pt: "Muito mais", en: "Much more" },
          { q: "{日本|にほん}（　　）どこが いちばん {寒|さむ}いですか。", a: "で", romaji: "de", pt: "Faixa de comparação: で", en: "Range of comparison: で" },
          { q: "{肉|にく}と {魚|さかな}と （　　）が {好|す}きですか。", a: "どちら", romaji: "dochira", pt: "Entre dois", en: "Between two" },
          { q: "{家族|かぞく}の {中|なか}で だれが （　　）{速|はや}いですか。", a: "いちばん", romaji: "ichiban", pt: "O mais", en: "The most" }
        ]
      },
      {
        desc: "2. {読|よ}み{物|もの} (Leitura): {季節|きせつ}", desc_en: "2. Reading: seasons",
        questions: [
          {
            q: `<div class="reading-box">わたし^は {四|よっ}つの {季節|きせつ}の {中|なか}で {春|はる}が いちばん {好|す}きです。{冬|ふゆ}^は {寒|さむ}いですから、{好|す}きじゃ ありません。{夏|なつ}^は {秋|あき}より {暑|あつ}いです。{去年|きょねん}の {夏|なつ}^は とても {暑|あつ}かったです。</div>{質問|しつもん}: {夏|なつ}と {秋|あき}と どちらが {暑|あつ}いですか。<br>➔ ＿＿＿＿の ほうが {暑|あつ}いです。`,
            a: "{夏|なつ}",
            romaji: "natsu",
            pt: "O verão.", en: "Summer."
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
          { tokens: ["{昨日|きのう}^は", "{雨|あめ}でした。"], pt: "Ontem choveu.", en: "It rained yesterday.", romaji: "Kinou wa ame deshita." },
          { tokens: ["{電車|でんしゃ}^は", "バスより", "{速|はや}いです。"], pt: "O trem é mais rápido do que o ônibus.", en: "The train is faster than the bus.", romaji: "Densha wa basu yori hayai desu." },
          { tokens: ["{夏|なつ}と", "{冬|ふゆ}と", "どちらが", "{好|す}きですか。"], pt: "Verão ou inverno: de qual você gosta mais?", en: "Which do you like better, summer or winter?", romaji: "Natsu to fuyu to dochira ga suki desu ka." },
          { tokens: ["{季節|きせつ}の", "{中|なか}で", "{春|はる}が", "いちばん", "{好|す}きです。"], pt: "Entre as estações, gosto mais da primavera.", en: "Of the seasons, I like spring best.", romaji: "Kisetsu no naka de haru ga ichiban suki desu." }
        ]
      }
    ]
  }
};
