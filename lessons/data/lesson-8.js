// Dados da lição 8. Formato descrito no README.md.
window.lessonData = {
  vocab: {
    title: "{語彙|ごい} (Vocabulário)", title_en: "{語彙|ごい} (Vocabulary)",
    items: [
      { jp: "{大|おお}きい", romaji: "ookii", pt: "Grande", en: "Big" },
      { jp: "{小|ちい}さい", romaji: "chiisai", pt: "Pequeno", en: "Small" },
      { jp: "{新|あたら}しい", romaji: "atarashii", pt: "Novo", en: "New" },
      { jp: "{古|ふる}い", romaji: "furui", pt: "Velho (coisa)", en: "Old (thing)" },
      { jp: "いい", romaji: "ii", pt: "Bom", en: "Good" },
      { jp: "{悪|わる}い", romaji: "warui", pt: "Ruim, mau", en: "Bad" },
      { jp: "{暑|あつ}い", romaji: "atsui", pt: "Quente (tempo)", en: "Hot (weather)" },
      { jp: "{寒|さむ}い", romaji: "samui", pt: "Frio (tempo)", en: "Cold (weather)" },
      { jp: "{高|たか}い", romaji: "takai", pt: "Caro; alto", en: "Expensive; tall, high" },
      { jp: "{安|やす}い", romaji: "yasui", pt: "Barato", en: "Cheap" },
      { jp: "{難|むずか}しい", romaji: "muzukashii", pt: "Difícil", en: "Difficult" },
      { jp: "{易|やさ}しい", romaji: "yasashii", pt: "Fácil", en: "Easy" },
      { jp: "おいしい", romaji: "oishii", pt: "Gostoso, saboroso", en: "Delicious, tasty" },
      { jp: "{面白|おもしろ}い", romaji: "omoshiroi", pt: "Interessante, divertido", en: "Interesting, fun" },
      { jp: "{忙|いそが}しい", romaji: "isogashii", pt: "Ocupado", en: "Busy" },
      { jp: "{楽|たの}しい", romaji: "tanoshii", pt: "Agradável, divertido", en: "Enjoyable, fun" },
      { jp: "きれい", romaji: "kirei", pt: "Bonito; limpo", en: "Pretty; clean" },
      { jp: "{元気|げんき}", romaji: "genki", pt: "Bem, com saúde, animado", en: "Well, healthy, lively" },
      { jp: "{有名|ゆうめい}", romaji: "yuumei", pt: "Famoso", en: "Famous" },
      { jp: "{親切|しんせつ}", romaji: "shinsetsu", pt: "Gentil, atencioso", en: "Kind, considerate" },
      { jp: "{静|しず}か", romaji: "shizuka", pt: "Calmo, silencioso", en: "Quiet, calm" },
      { jp: "にぎやか", romaji: "nigiyaka", pt: "Animado, movimentado", en: "Lively, bustling" },
      { jp: "{便利|べんり}", romaji: "benri", pt: "Prático, conveniente", en: "Convenient" },
      { jp: "とても", romaji: "totemo", pt: "Muito", en: "Very" },
      { jp: "あまり", romaji: "amari", pt: "Não muito (com negativa)", en: "Not very (with a negative)" },
      { jp: "どう", romaji: "dou", pt: "Como (é)", en: "How (is it)" },
      { jp: "どんな", romaji: "donna", pt: "Que tipo de, como é", en: "What kind of" },
      { jp: "{天気|てんき}", romaji: "tenki", pt: "Tempo (clima)", en: "Weather" },
      { jp: "{仕事|しごと}", romaji: "shigoto", pt: "Trabalho, emprego", en: "Work, job" },
      { jp: "ラーメン", romaji: "raamen", pt: "Lámen", en: "Ramen" },
      { jp: "{店|みせ}", romaji: "mise", pt: "Loja", en: "Shop" }
    ]
  },
  gramatica: {
    title: "{文法|ぶんぽう} (Gramática)", title_en: "{文法|ぶんぽう} (Grammar)",
    intro: "Quatro pontos para descrever pessoas, lugares e coisas. Cada cartão traz o modelo de frase, a explicação, os exemplos, uma comparação com o que é parecido e os erros mais comuns.", intro_en: "Four points for describing people, places and things. Each card gives the sentence pattern, the explanation, the examples, a comparison with what looks similar and the most common mistakes.",
    points: [
      {
        id: "i-keiyoushi",
        title: "い{形容詞|けいようし} (adjetivos em い)", title_en: "い{形容詞|けいようし} (い-adjectives)",
        pat: "N は Adj-い です／〜く ないです／〜かった です",
        short: "adjetivos que terminam em い", short_en: "adjectives ending in い",
        mean: "Adjetivos como {大|おお}きい, {新|あたら}しい, おいしい. O い final faz parte da palavra e é ele que muda para negar ou passar para o passado.", mean_en: "Adjectives like {大|おお}きい, {新|あたら}しい, おいしい. The final い is part of the word and it is what changes to negate or go to the past.",
        rule: "Troque o い final: <strong>〜い</strong> (é), <strong>〜くないです</strong> (não é), <strong>〜かったです</strong> (era), <strong>〜くなかったです</strong> (não era). O adjetivo já faz o trabalho do verbo “ser”: o です só dá educação.", rule_en: "Change the final い: <strong>〜い</strong> (is), <strong>〜くないです</strong> (is not), <strong>〜かったです</strong> (was), <strong>〜くなかったです</strong> (was not). The adjective already does the work of “to be”: です only adds politeness.",
        form: [
          { label: "おもしろい (interessante)", label_en: "おもしろい (interesting)", text: "Troque só o final.", text_en: "Only the ending changes.", ex: [
            { tag: "presente", tag_en: "present", jp: "{面白|おもしろ}いです", pt: "é interessante", en: "is interesting" },
            { tag: "negativo", tag_en: "negative", jp: "{面白|おもしろ}く ないです", pt: "não é interessante", en: "is not interesting" },
            { tag: "passado", tag_en: "past", jp: "{面白|おもしろ}かったです", pt: "era interessante", en: "was interesting" },
            { tag: "passado negativo", tag_en: "past negative", jp: "{面白|おもしろ}く なかったです", pt: "não era interessante", en: "was not interesting" }
          ] },
          { label: "Exceção: いい (bom)", label_en: "Exception: いい (good)", text: "Na conjugação, いい vira <strong>よい</strong>.", text_en: "In conjugation, いい becomes <strong>よい</strong>.", ex: [
            { tag: "negativo", tag_en: "negative", jp: "いい ➔ よく ないです", pt: "não é bom", en: "is not good" },
            { tag: "passado", tag_en: "past", jp: "いい ➔ よかったです", pt: "era bom", en: "was good" }
          ] }
        ],
        ex: [
          { jp: "この {本|ほん}^は おもしろいです。", romaji: "Kono hon wa omoshiroi desu.", pt: "Este livro é interessante.", en: "This book is interesting." },
          { jp: "{今日|きょう}^は {寒|さむ}く ないです。", romaji: "Kyou wa samuku nai desu.", pt: "Hoje não está frio.", en: "It is not cold today." },
          { jp: "{昨日|きのう}^は {暑|あつ}かったです。", romaji: "Kinou wa atsukatta desu.", pt: "Ontem estava quente.", en: "It was hot yesterday." },
          { jp: "{試験|しけん}^は {難|むずか}しく なかったです。", romaji: "Shiken wa muzukashiku nakatta desu.", pt: "A prova não foi difícil.", en: "The exam was not difficult." }
        ],
        contrast: {
          rows: [
            { label: "afirmativa (〜いです)", label_en: "affirmative (〜いです)", jp: "この ラーメン^は おいしいです。", pt: "Este lámen é gostoso.", en: "This ramen is tasty." },
            { label: "negativa (〜くないです)", label_en: "negative (〜くないです)", jp: "この ラーメン^は おいしく ないです。", pt: "Este lámen não é gostoso.", en: "This ramen is not tasty." }
          ],
          note: "No い-adjetivo a negação entra dentro da palavra (くない), sem trocar です por じゃ ありません.", note_en: "In an い-adjective the negation goes inside the word (くない), without swapping です for じゃ ありません."
        },
        trap: [
          "いい vira よく ないです, e não いく ないです (e no passado, よかったです).",
          "Com い-adjetivo não se usa じゃ ありません: errado おもしろいじゃ ありません。 Certo: おもしろく ないです。"
        ],
        trap_en: [
          "いい becomes よく ないです, not いく ないです (and in the past, よかったです).",
          "With an い-adjective you do not use じゃ ありません: wrong おもしろいじゃ ありません。 Right: おもしろく ないです。"
        ]
      },
      {
        id: "na-keiyoushi",
        title: "な{形容詞|けいようし} (adjetivos em な)", title_en: "な{形容詞|けいようし} (な-adjectives)",
        pat: "N は Adj-な です／じゃ ありません／でした／じゃ ありませんでした",
        short: "adjetivos que se comportam como substantivos", short_en: "adjectives that behave like nouns",
        mean: "Adjetivos como きれい, {元気|げんき}, {静|しず}か, {便利|べんり}. Na frase, comportam-se como substantivos: usam です e <strong>じゃ ありません</strong>.", mean_en: "Adjectives like きれい, {元気|げんき}, {静|しず}か, {便利|べんり}. In the sentence they behave like nouns: they use です and <strong>じゃ ありません</strong>.",
        rule: "O な só aparece quando o adjetivo vem antes de um substantivo (próximo cartão). No fim da frase, não há な.", rule_en: "The な only appears when the adjective comes before a noun (next card). At the end of a sentence there is no な.",
        form: [
          { label: "きれい (bonito)", label_en: "きれい (pretty)", text: "Igual ao substantivo.", text_en: "Same as a noun.", ex: [
            { tag: "presente", tag_en: "present", jp: "きれいです", pt: "é bonito", en: "is pretty" },
            { tag: "negativo", tag_en: "negative", jp: "きれいじゃ ありません", pt: "não é bonito", en: "is not pretty" },
            { tag: "passado", tag_en: "past", jp: "きれいでした", pt: "era bonito", en: "was pretty" },
            { tag: "passado negativo", tag_en: "past negative", jp: "きれいじゃ ありませんでした", pt: "não era bonito", en: "was not pretty" }
          ] }
        ],
        ex: [
          { jp: "{東京|とうきょう}^は にぎやかです。", romaji: "Toukyou wa nigiyaka desu.", pt: "Tóquio é animada.", en: "Tokyo is lively." },
          { jp: "この {町|まち}^は {静|しず}かじゃ ありません。", romaji: "Kono machi wa shizuka ja arimasen.", pt: "Esta cidade não é calma.", en: "This town is not quiet." },
          { jp: "{昨日|きのう}^は {元気|げんき}でした。", romaji: "Kinou wa genki deshita.", pt: "Ontem eu estava bem.", en: "I was well yesterday." }
        ],
        contrast: {
          rows: [
            { label: "い-adjetivo (おいしい)", label_en: "い-adjective (おいしい)", jp: "ラーメン^は おいしく ないです。", pt: "O lámen não é gostoso (negação dentro da palavra).", en: "The ramen is not tasty (negation inside the word)." },
            { label: "な-adjetivo (きれい)", label_en: "な-adjective (きれい)", jp: "{町|まち}^は きれいじゃ ありません。", pt: "A cidade não é bonita (como um substantivo).", en: "The town is not pretty (like a noun)." }
          ],
          note: "Pergunte: a palavra termina em い e se conjuga por dentro? É い-adjetivo. Termina em outro som, ou se comporta como substantivo? É な-adjetivo.", note_en: "Ask: does the word end in い and conjugate internally? It is an い-adjective. Does it end in another sound or behave like a noun? It is a な-adjective."
        },
        trap: [
          "Algumas palavras terminam em い mas são な-adjetivos: <strong>きれい</strong> (e <strong>きらい</strong>, “não gostar”, na próxima lição). Negativa: きれいじゃ ありません, e não きれくないです。",
          "Não ponha な no fim da frase: errado {町|まち}は きれいなです。 Certo: きれいです。"
        ],
        trap_en: [
          "Some words end in い but are な-adjectives: <strong>きれい</strong> (and <strong>きらい</strong>, “dislike”, in the next lesson). Negative: きれいじゃ ありません, not きれくないです。",
          "Do not put な at the end of the sentence: wrong {町|まち}は きれいなです。 Right: きれいです。"
        ]
      },
      {
        id: "keiyoushi-meishi",
        title: "Adj ＋ N (adjetivo antes do substantivo)", title_en: "Adj ＋ N (adjective before a noun)",
        pat: "Adj-い ＋ N<br>Adj-な な ＋ N",
        short: "“uma casa nova”, “uma cidade bonita”", short_en: "“a new house”, “a pretty town”",
        mean: "O adjetivo vem antes do substantivo e o descreve. Com い-adjetivo, basta colocar o adjetivo; com な-adjetivo, acrescenta-se <strong>な</strong>.", mean_en: "The adjective comes before the noun and describes it. With an い-adjective, just place the adjective; with a な-adjective, add <strong>な</strong>.",
        rule: "Para perguntar “que tipo de N?”, use <strong>どんな N</strong>.", rule_en: "To ask “what kind of N?”, use <strong>どんな N</strong>.",
        ex: [
          { jp: "{新|あたら}しい {車|くるま}です。", romaji: "Atarashii kuruma desu.", pt: "É um carro novo.", en: "It is a new car." },
          { jp: "{有名|ゆうめい}な {先生|せんせい}です。", romaji: "Yuumeina sensei desu.", pt: "É um professor famoso.", en: "He is a famous teacher." },
          { jp: "きれいな {町|まち}ですね。", romaji: "Kireina machi desune.", pt: "Que cidade bonita!", en: "What a pretty town!" },
          { jp: "{富士山|ふじさん}^は どんな {山|やま}ですか。<br>…{高|たか}い {山|やま}です。", romaji: "Fujisan wa donna yama desu ka. ...Takai yama desu.", pt: "Que tipo de montanha é o Monte Fuji? ...É uma montanha alta.", en: "What kind of mountain is Mt. Fuji? ...It is a tall mountain." }
        ],
        contrast: {
          rows: [
            { label: "い ＋ N", label_en: "い ＋ N", jp: "{安|やす}い {店|みせ}です。", pt: "É uma loja barata.", en: "It is a cheap shop." },
            { label: "な ＋ N", label_en: "な ＋ N", jp: "{静|しず}かな {店|みせ}です。", pt: "É uma loja calma.", en: "It is a quiet shop." }
          ],
          note: "A diferença é só o な: い-adjetivo vai direto; な-adjetivo precisa dele para ligar ao substantivo.", note_en: "The only difference is な: an い-adjective goes straight on; a な-adjective needs it to link to the noun."
        },
        trap: [
          "Não ponha な depois de い-adjetivo: errado {新|あたら}しいな {車|くるま}。",
          "Não esqueça o な: errado きれい {町|まち}。 Certo: きれいな {町|まち}。"
        ],
        trap_en: [
          "Do not add な after an い-adjective: wrong {新|あたら}しいな {車|くるま}。",
          "Do not forget the な: wrong きれい {町|まち}。 Right: きれいな {町|まち}。"
        ]
      },
      {
        id: "totemo-amari",
        title: "とても・あまり・どう・〜が、〜", title_en: "とても・あまり・どう・〜が、〜",
        pat: "とても Adj<br>あまり Adj-ない<br>S1 が、S2",
        short: "intensidade, “como é?” e “mas”", short_en: "degree, “how is it?” and “but”",
        mean: "<strong>とても</strong> = muito. <strong>あまり</strong> = não muito (sempre com negativa). <strong>どうですか</strong> pergunta “como é?”. <strong>が</strong> entre duas frases liga uma ideia contrastante: “mas”.", mean_en: "<strong>とても</strong> = very. <strong>あまり</strong> = not very (always with a negative). <strong>どうですか</strong> asks “how is it?”. <strong>が</strong> between two sentences links a contrasting idea: “but”.",
        ex: [
          { jp: "この ラーメン^は とても おいしいです。", romaji: "Kono raamen wa totemo oishii desu.", pt: "Este lámen é muito gostoso.", en: "This ramen is very tasty." },
          { jp: "この {町|まち}^は あまり にぎやかじゃ ありません。", romaji: "Kono machi wa amari nigiyaka ja arimasen.", pt: "Esta cidade não é muito animada.", en: "This town is not very lively." },
          { jp: "{日本|にほん}の {生活|せいかつ}^は どうですか。<br>…{楽|たの}しいです。", romaji: "Nihon no seikatsu wa dou desu ka. ...Tanoshii desu.", pt: "Como é a vida no Japão? ...É divertida.", en: "How is life in Japan? ...It is fun." },
          { jp: "この {部屋|へや}^は {新|あたら}しいですが、{小|ちい}さいです。", romaji: "Kono heya wa atarashii desu ga, chiisai desu.", pt: "Este quarto é novo, mas pequeno.", en: "This room is new, but small." }
        ],
        contrast: {
          rows: [
            { label: "とても (afirmativa)", label_en: "とても (affirmative)", jp: "とても {忙|いそが}しいです。", pt: "Estou muito ocupado.", en: "I am very busy." },
            { label: "あまり (negativa)", label_en: "あまり (negative)", jp: "あまり {忙|いそが}しく ないです。", pt: "Não estou muito ocupado.", en: "I am not very busy." }
          ],
          note: "とても pede frase afirmativa; あまり pede frase negativa. Eles não se trocam.", note_en: "とても goes with an affirmative sentence; あまり goes with a negative one. They are not interchangeable."
        },
        trap: [
          "あまり sem negativa é erro: errado あまり おいしいです。 Certo: あまり おいしく ないです。",
          "が (mas) vem no meio da frase, depois da primeira parte: {安|やす}いですが、おいしく ないです。 No começo de uma frase nova usa-se でも."
        ],
        trap_en: [
          "あまり without a negative is an error: wrong あまり おいしいです。 Right: あまり おいしく ないです。",
          "が (but) comes in the middle of a sentence, after the first part: {安|やす}いですが、おいしく ないです。 At the start of a new sentence you use でも."
        ]
      }
    ]
  },
  renshuuA: {
    title: "{練習|れんしゅう} A", title_en: "{練習|れんしゅう} A",
    exercises: [
      {
        desc: "1. い-adjetivo: forma negativa (〜く ないです)", desc_en: "1. い-adjective: negative form (〜く ないです)",
        questions: [
          { q: "{大|おお}きいです ➔", a: "{大|おお}きく ないです", romaji: "ookiku nai desu", pt: "Não é grande", en: "Is not big" },
          { q: "{安|やす}いです ➔", a: "{安|やす}く ないです", romaji: "yasuku nai desu", pt: "Não é barato", en: "Is not cheap" },
          { q: "{難|むずか}しいです ➔", a: "{難|むずか}しく ないです", romaji: "muzukashiku nai desu", pt: "Não é difícil", en: "Is not difficult" },
          { q: "いいです ➔", a: "よく ないです", romaji: "yoku nai desu", pt: "Não é bom", en: "Is not good" }
        ]
      },
      {
        desc: "2. い-adjetivo: passado (〜かったです)", desc_en: "2. い-adjective: past (〜かったです)",
        questions: [
          { q: "{暑|あつ}いです ➔", a: "{暑|あつ}かったです", romaji: "atsukatta desu", pt: "Estava quente", en: "It was hot" },
          { q: "{楽|たの}しいです ➔", a: "{楽|たの}しかったです", romaji: "tanoshikatta desu", pt: "Foi divertido", en: "It was fun" },
          { q: "おいしいです ➔", a: "おいしかったです", romaji: "oishikatta desu", pt: "Estava gostoso", en: "It was tasty" },
          { q: "いいです ➔", a: "よかったです", romaji: "yokatta desu", pt: "Foi bom", en: "It was good" }
        ]
      }
    ]
  },
  renshuuB: {
    title: "{練習|れんしゅう} B", title_en: "{練習|れんしゅう} B",
    exercises: [
      {
        desc: "1. な-adjetivo: forma negativa (じゃ ありません)", desc_en: "1. な-adjective: negative form (じゃ ありません)",
        questions: [
          { q: "きれいです ➔", a: "きれいじゃ ありません", romaji: "kirei ja arimasen", pt: "Não é bonito", en: "Is not pretty" },
          { q: "{静|しず}かです ➔", a: "{静|しず}かじゃ ありません", romaji: "shizuka ja arimasen", pt: "Não é calmo", en: "Is not quiet" },
          { q: "{元気|げんき}です ➔", a: "{元気|げんき}じゃ ありません", romaji: "genki ja arimasen", pt: "Não está bem", en: "Is not well" },
          { q: "{便利|べんり}です ➔", a: "{便利|べんり}じゃ ありません", romaji: "benri ja arimasen", pt: "Não é prático", en: "Is not convenient" }
        ]
      },
      {
        desc: "2. Adjetivo ＋ substantivo (acrescente な ou corrija)", desc_en: "2. Adjective ＋ noun (add な or correct it)",
        questions: [
          { q: "{新|あたら}しいな {車|くるま} ➔ (corrija)", q_en: "{新|あたら}しいな {車|くるま} ➔ (correct it)", a: "{新|あたら}しい {車|くるま}", romaji: "atarashii kuruma", pt: "い-adjetivo: sem な", en: "い-adjective: no な" },
          { q: "{有名|ゆうめい}（　　）{先生|せんせい}", a: "な", romaji: "na", pt: "な-adjetivo: com な", en: "な-adjective: with な" },
          { q: "{静|しず}か（　　）{町|まち}", a: "な", romaji: "na", pt: "な-adjetivo: com な", en: "な-adjective: with な" }
        ]
      }
    ]
  },
  mondai: {
    title: "{問題|もんだい} (Problemas / Avaliação)", title_en: "{問題|もんだい} (Problems / Assessment)",
    exercises: [
      {
        desc: "1. (　　) に {正|ただ}しい ことばを {入|い}れなさい。 (とても・あまり・が・どう・どんな)", desc_en: "1. Fill in the blank with the right word. (とても・あまり・が・どう・どんな)",
        questions: [
          { q: "この ラーメンは （　　）おいしいです。", a: "とても", romaji: "totemo", pt: "Muito (afirmativa)", en: "Very (affirmative)" },
          { q: "この {町|まち}は （　　）にぎやかじゃ ありません。", a: "あまり", romaji: "amari", pt: "Não muito (negativa)", en: "Not very (negative)" },
          { q: "{日本|にほん}の {生活|せいかつ}は （　　）ですか。…{楽|たの}しいです。", a: "どう", romaji: "dou", pt: "Como é?", en: "How is it?" },
          { q: "{安|やす}いです（　　）、おいしく ないです。", a: "が", romaji: "ga", pt: "Mas", en: "But" }
        ]
      },
      {
        desc: "2. {読|よ}み{物|もの} (Leitura): {新|あたら}しい {町|まち}", desc_en: "2. Reading: the new town",
        questions: [
          {
            q: `<div class="reading-box">わたしは {先月|せんげつ}、{新|あたら}しい {町|まち}に {来|き}ました。この {町|まち}は あまり {大|おお}きく ないですが、とても きれいです。そして、{静|しず}かです。{町|まち}の ラーメンの {店|みせ}は {安|やす}いですが、おいしいです。</div>{質問|しつもん}: この {町|まち}は にぎやかですか。<br>➔ いいえ、＿＿＿＿＿＿＿＿＿＿。`,
            a: "にぎやかじゃ ありません",
            romaji: "nigiyaka ja arimasen",
            pt: "Não, não é animada (é calma).", en: "No, it is not lively (it is quiet)."
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
          { tokens: ["この", "ラーメンは", "とても", "おいしいです。"], pt: "Este lámen é muito gostoso.", en: "This ramen is very tasty.", romaji: "Kono raamen wa totemo oishii desu." },
          { tokens: ["きれいな", "{町|まち}ですね。"], pt: "Que cidade bonita!", en: "What a pretty town!", romaji: "Kirei na machi desu ne." },
          { tokens: ["{昨日|きのう}は", "{暑|あつ}かったです。"], pt: "Ontem estava quente.", en: "It was hot yesterday.", romaji: "Kinou wa atsukatta desu." },
          { tokens: ["この", "{町|まち}は", "あまり", "{静|しず}かじゃ", "ありません。"], pt: "Esta cidade não é muito calma.", en: "This town is not very quiet.", romaji: "Kono machi wa amari shizuka ja arimasen." }
        ]
      }
    ]
  }
};
