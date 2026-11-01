// Dados da lição 20. Formato descrito no README.md.
window.lessonData = {
  vocab: {
    title: "{語彙|ごい} (Vocabulário)", title_en: "{語彙|ごい} (Vocabulary)",
    items: [
      { jp: "{夏休|なつやす}み", romaji: "natsuyasumi", pt: "Férias de verão", en: "Summer holidays" },
      { jp: "{国|くに}", romaji: "kuni", pt: "País, terra natal", en: "Country, home country" },
      { jp: "{帰|かえ}ります", romaji: "kaerimasu", pt: "Voltar (para casa, para o país)", en: "To go back (home, to one's country)" },
      { jp: "{予定|よてい}", romaji: "yotei", pt: "Plano, previsão", en: "Plan, schedule" },
      { jp: "{予約|よやく}", romaji: "yoyaku", pt: "Reserva", en: "Reservation, booking" },
      { jp: "{予約|よやく}します", romaji: "yoyaku shimasu", pt: "Reservar", en: "To reserve, to book" },
      { jp: "{海|うみ}", romaji: "umi", pt: "Mar", en: "Sea" },
      { jp: "{山|やま}", romaji: "yama", pt: "Montanha", en: "Mountain" },
      { jp: "{天気|てんき}", romaji: "tenki", pt: "Tempo (clima)", en: "Weather" },
      { jp: "{雨|あめ}", romaji: "ame", pt: "Chuva", en: "Rain" },
      { jp: "{降|ふ}ります", romaji: "furimasu", pt: "Cair (chuva, neve)", en: "To fall (rain, snow)" },
      { jp: "{晴|は}れます", romaji: "haremasu", pt: "O tempo abrir, fazer sol", en: "To clear up, to be sunny" },
      { jp: "{雪|ゆき}", romaji: "yuki", pt: "Neve", en: "Snow" },
      { jp: "{楽|たの}しい", romaji: "tanoshii", pt: "Divertido, agradável", en: "Fun, enjoyable" },
      { jp: "{忙|いそが}しい", romaji: "isogashii", pt: "Ocupado", en: "Busy" },
      { jp: "{暇|ひま}", romaji: "hima", pt: "Livre, sem nada para fazer", en: "Free, with time to spare" },
      { jp: "{家族|かぞく}", romaji: "kazoku", pt: "Família", en: "Family" },
      { jp: "お{土産|みやげ}", romaji: "omiyage", pt: "Lembrança de viagem", en: "Souvenir" },
      { jp: "{写真|しゃしん}", romaji: "shashin", pt: "Foto, fotografia", en: "Photograph" },
      { jp: "{花火|はなび}", romaji: "hanabi", pt: "Fogos de artifício", en: "Fireworks" },
      { jp: "お{祭|まつ}り", romaji: "omatsuri", pt: "Festival, festa tradicional", en: "Festival" }
    ]
  },
  gramatica: {
    title: "{文法|ぶんぽう} (Gramática)", title_en: "{文法|ぶんぽう} (Grammar)",
    intro: "Três pontos nesta lição. Até aqui, todas as frases eram em です／ます. Agora entra a forma {普通|ふつう}, a mesma que os japoneses usam em casa, entre amigos e nas mensagens do dia a dia. Cada cartão traz o modelo, a explicação, os exemplos, uma comparação e as armadilhas.", intro_en: "Three points in this lesson. Until now every sentence was in です／ます. Now comes the {普通|ふつう} form, the one Japanese people use at home, with friends and in everyday messages. Each card gives the pattern, the explanation, the examples, a comparison and the pitfalls.",
    points: [
      {
        id: "futsuukei",
        title: "{普通形|ふつうけい} ({動詞|どうし}と い{形容詞|けいようし})", title_en: "{普通形|ふつうけい} ({動詞|どうし} and い-adjectives)",
        pat: "V-ます ➔ V-る／V-ない／V-た／V-なかった<br>い{形容詞|けいようし} ➔ 〜い／〜くない", title_en: "V-ます ➔ V-る／V-ない／V-た／V-なかった<br>い{形容詞|けいようし} ➔ 〜い／〜くない",
        short: "a forma da conversa (presente e passado)", short_en: "the form of everyday talk (present and past)",
        mean: "A forma {普通|ふつう} é a forma informal: a mesma frase, sem です e sem ます. Ela tem quatro casas — presente afirmativo, presente negativo, passado afirmativo e passado negativo — e é usada com amigos, família e colegas próximos.", mean_en: "The {普通|ふつう} form is the informal form: the same sentence, without です and ます. It has four slots — present affirmative, present negative, past affirmative and past negative — and it is used with friends, family and close colleagues.",
        rule: "Verbos: a base é a forma de dicionário (V-る). O negativo termina em ない, o passado em た e o passado negativo em なかった. Adjetivos い: o próprio adjetivo já é o presente afirmativo; o negativo troca い por くない.", rule_en: "Verbs: the base is the dictionary form (V-る). The negative ends in ない, the past in た and the past negative in なかった. い-adjectives: the adjective itself is already the present affirmative; the negative changes い to くない.",
        form: [
          { label: "{第|だい}２グループ (Grupo 2)", label_en: "{第|だい}２グループ (Group 2)", text: "Tire ます e acrescente <strong>る</strong>.", text_en: "Drop ます and add <strong>る</strong>.", ex: [
            { tag: "presente", tag_en: "present", jp: "{食|た}べます ➔ {食|た}べ<strong>る</strong>", pt: "comer", en: "to eat" },
            { tag: "negativo", tag_en: "negative", jp: "{食|た}べません ➔ {食|た}べ<strong>ない</strong>", pt: "não comer", en: "not to eat" },
            { tag: "passado", tag_en: "past", jp: "{食|た}べました ➔ {食|た}べ<strong>た</strong>", pt: "comeu", en: "ate" },
            { tag: "passado negativo", tag_en: "past negative", jp: "{食|た}べませんでした ➔ {食|た}べ<strong>なかった</strong>", pt: "não comeu", en: "did not eat" }
          ] },
          { label: "{第|だい}１グループ (Grupo 1)", label_en: "{第|だい}１グループ (Group 1)", text: "A base é a forma de dicionário: a sílaba antes de ます passa para a linha <strong>う</strong>.", text_en: "The base is the dictionary form: the syllable before ます moves to the <strong>u</strong> line.", ex: [
            { tag: "presente", tag_en: "present", jp: "{書|か}きます ➔ {書|か}<strong>く</strong>", pt: "escrever", en: "to write" },
            { tag: "negativo", tag_en: "negative", jp: "{書|か}きません ➔ {書|か}<strong>かない</strong>", pt: "não escrever", en: "not to write" },
            { tag: "passado", tag_en: "past", jp: "{書|か}きました ➔ {書|か}<strong>いた</strong>", pt: "escreveu", en: "wrote" },
            { tag: "passado negativo", tag_en: "past negative", jp: "{書|か}きませんでした ➔ {書|か}<strong>かなかった</strong>", pt: "não escreveu", en: "did not write" },
            { tag: "exceção", tag_en: "exception", jp: "{行|い}きます ➔ {行|い}<strong>く</strong>", pt: "ir", en: "to go" }
          ] },
          { label: "{第|だい}３グループ (Grupo 3)", label_en: "{第|だい}３グループ (Group 3)", text: "Dois verbos irregulares.", text_en: "Two irregular verbs.", ex: [
            { tag: "presente", tag_en: "present", jp: "します ➔ <strong>する</strong>", pt: "fazer", en: "to do" },
            { tag: "negativo", tag_en: "negative", jp: "しません ➔ <strong>しない</strong>", pt: "não fazer", en: "not to do" },
            { tag: "presente", tag_en: "present", jp: "{来|き}ます ➔ {来|く}<strong>る</strong>", pt: "vir (lê-se くる)", en: "to come (read くる)" }
          ] },
          { label: "い{形容詞|けいようし} (Adj-i)", label_en: "い{形容詞|けいようし} (i-adjective)", text: "O adjetivo é o presente; o negativo troca い por <strong>くない</strong>.", text_en: "The adjective is the present; the negative changes い to <strong>くない</strong>.", ex: [
            { tag: "presente", tag_en: "present", jp: "{高|たか}いです ➔ {高|たか}い", pt: "caro", en: "expensive" },
            { tag: "negativo", tag_en: "negative", jp: "{高|たか}くないです ➔ {高|たか}<strong>くない</strong>", pt: "não é caro", en: "not expensive" },
            { tag: "passado", tag_en: "past", jp: "{高|たか}かったです ➔ {高|たか}<strong>かった</strong>", pt: "era caro", en: "was expensive" },
            { tag: "passado negativo", tag_en: "past negative", jp: "{高|たか}くなかったです ➔ {高|たか}<strong>くなかった</strong>", pt: "não era caro", en: "was not expensive" }
          ] }
        ],
        ex: [
          { jp: "{夏休|なつやす}み^は {国|くに}^へ {帰|かえ}る。", romaji: "Natsuyasumi wa kuni e kaeru.", pt: "Nas férias de verão, volto para o meu país.", en: "In the summer holidays I go back to my country." },
          { jp: "{明日|あした}、{友達|ともだち}に {会|あ}う。", romaji: "Ashita, tomodachi ni au.", pt: "Amanhã encontro um amigo.", en: "Tomorrow I meet a friend." },
          { jp: "{今日|きょう}^は {忙|いそが}しくない。", romaji: "Kyou wa isogashikunai.", pt: "Hoje não estou ocupado.", en: "I am not busy today." },
          { jp: "{昨日|きのう}の パーティー^は {楽|たの}しかった。", romaji: "Kinou no paatii wa tanoshikatta.", pt: "A festa de ontem foi divertida.", en: "Yesterday's party was fun." }
        ],
        contrast: {
          rows: [
            { label: "{丁寧形|ていねいけい} (です・ます)", label_en: "{丁寧形|ていねいけい} (です・ます)", jp: "{明日|あした}、{友達|ともだち}に {会|あ}います。", pt: "Com quem não é próximo: professor, chefe, desconhecido.", en: "With people you are not close to: teachers, bosses, strangers." },
            { label: "{普通形|ふつうけい}", label_en: "{普通形|ふつうけい}", jp: "{明日|あした}、{友達|ともだち}に {会|あ}う。", pt: "Com amigos e família.", en: "With friends and family." }
          ],
          note: "O sentido é o mesmo: muda só o nível de formalidade. O erro clássico é misturar as duas formas na mesma frase ({会|あ}う ですか).", note_en: "The meaning is the same: only the level of formality changes. The classic mistake is to mix the two forms in one sentence ({会|あ}う ですか)."
        },
        trap: [
          "Grupo 1 não é só trocar ます por る: {行|い}きます ➔ {行|い}く, e não {行|い}きる.",
          "{来|き}ます vira {来|く}る: a leitura do kanji muda de き para く.",
          "Adjetivo い não leva だ no presente afirmativo: {高|たか}い, e não {高|たか}いだ."
        ],
        trap_en: [
          "Group 1 is not just swapping ます for る: {行|い}きます ➔ {行|い}く, not {行|い}きる.",
          "{来|き}ます becomes {来|く}る: the reading of the kanji changes from き to く.",
          "い-adjectives take no だ in the present affirmative: {高|たか}い, not {高|たか}いだ."
        ]
      },
      {
        id: "da-janai",
        title: "N ・ な{形容詞|けいようし}: だ／じゃない／だった／じゃなかった", title_en: "Nouns and な-adjectives: だ／じゃない／だった／じゃなかった",
        pat: "N だ<br>N じゃない<br>N だった<br>N じゃなかった", title_en: "N だ<br>N じゃない<br>N だった<br>N じゃなかった",
        short: "as quatro casas do substantivo e do adjetivo な", short_en: "the four slots of nouns and な-adjectives",
        mean: "Substantivos e adjetivos な não se conjugam: quem carrega o tempo e a negativa é o だ do fim. São quatro combinações, e o だ só aparece no presente afirmativo.", mean_en: "Nouns and な-adjectives do not conjugate: the だ at the end carries the tense and the negative. There are four combinations, and だ appears only in the present affirmative.",
        rule: "Presente: だ／じゃない. Passado: だった／じゃなかった. Antes de です o だ não aparece ({学生|がくせい}です), e o adjetivo な perde o な antes de だ.", rule_en: "Present: だ／じゃない. Past: だった／じゃなかった. Before です the だ does not appear ({学生|がくせい}です), and な-adjectives drop the な before だ.",
        form: [
          { label: "{名詞|めいし} (Substantivo)", label_en: "{名詞|めいし} (Noun)", text: "O substantivo fica igual; só o fim muda.", text_en: "The noun stays the same; only the ending changes.", ex: [
            { tag: "presente", tag_en: "present", jp: "{学生|がくせい}だ", pt: "é estudante", en: "is a student" },
            { tag: "negativo", tag_en: "negative", jp: "{学生|がくせい}じゃない", pt: "não é estudante", en: "is not a student" },
            { tag: "passado", tag_en: "past", jp: "{学生|がくせい}だった", pt: "era estudante", en: "was a student" },
            { tag: "passado negativo", tag_en: "past negative", jp: "{学生|がくせい}じゃなかった", pt: "não era estudante", en: "was not a student" }
          ] },
          { label: "な{形容詞|けいようし} (Adj-na)", label_en: "な{形容詞|けいようし} (na-adjective)", text: "Tire o な e use as mesmas quatro terminações.", text_en: "Drop the な and use the same four endings.", ex: [
            { tag: "presente", tag_en: "present", jp: "{元気|げんき}だ", pt: "está bem", en: "is well" },
            { tag: "negativo", tag_en: "negative", jp: "{元気|げんき}じゃない", pt: "não está bem", en: "is not well" },
            { tag: "passado", tag_en: "past", jp: "{元気|げんき}だった", pt: "estava bem", en: "was well" },
            { tag: "passado negativo", tag_en: "past negative", jp: "{元気|げんき}じゃなかった", pt: "não estava bem", en: "was not well" }
          ] },
          { label: "{丁寧形|ていねいけい} (para comparar)", label_en: "{丁寧形|ていねいけい} (for comparison)", text: "Na forma educada, o だ sai e entra です.", text_en: "In the polite form the だ goes away and です comes in.", ex: [
            { jp: "{学生|がくせい}だ ➔ {学生|がくせい}です", romaji: "gakuseida ➔ gakusei desu", pt: "é estudante", en: "is a student" },
            { jp: "{学生|がくせい}じゃない ➔ {学生|がくせい}じゃありません", romaji: "gakuseijanai ➔ gakuseijaarimasen", pt: "não é estudante", en: "is not a student" }
          ] }
        ],
        ex: [
          { jp: "{田中|たなか}さん^は {日本人|にほんじん}だ。", romaji: "Tanaka-san wa nihonjin da.", pt: "O Tanaka é japonês.", en: "Tanaka is Japanese." },
          { jp: "{今日|きょう}^は {元気|げんき}じゃない。", romaji: "Kyou wa genkijanai.", pt: "Hoje não estou bem.", en: "I am not well today." },
          { jp: "{昔|むかし}、ここ^は {海|うみ}だった。", romaji: "Mukashi, koko wa umidatta.", pt: "Antigamente, aqui era mar.", en: "Long ago, this place was the sea." },
          { jp: "A: {学生|がくせい}？<br>B: ううん、{学生|がくせい}じゃない。{会社員|かいしゃいん}だ。", romaji: "Gakusei? ...Uun, gakusei ja nai. Kaishain da.", pt: "A: Você é estudante? B: Não, não sou estudante. Sou funcionário de empresa.", en: "A: Are you a student? B: No, I'm not. I'm a company employee." }
        ],
        contrast: {
          rows: [
            { label: "afirmativo, presente", label_en: "affirmative, present", jp: "{元気|げんき}だ。", pt: "Estou bem.", en: "I am well." },
            { label: "negativo, presente", label_en: "negative, present", jp: "{元気|げんき}じゃない。", pt: "Não estou bem.", en: "I am not well." },
            { label: "afirmativo, passado", label_en: "affirmative, past", jp: "{元気|げんき}だった。", pt: "Eu estava bem.", en: "I was well." },
            { label: "negativo, passado", label_en: "negative, past", jp: "{元気|げんき}じゃなかった。", pt: "Eu não estava bem.", en: "I was not well." }
          ],
          note: "じゃない e じゃなかった servem tanto para substantivo quanto para adjetivo な. O que muda é só a palavra da frente.", note_en: "じゃない and じゃなかった work both for nouns and for な-adjectives. Only the word in front changes."
        },
        trap: [
          "{高|たか}いだ é errado: adjetivo い não leva だ. Só substantivo e adjetivo な levam.",
          "な{形容詞|けいようし} perde o な antes de だ: {元気|げんき}だ, e não {元気|げんき}なだ.",
          "Não use だ antes de です: {学生|がくせい}だです é errado; é {学生|がくせい}です."
        ],
        trap_en: [
          "{高|たか}いだ is wrong: い-adjectives take no だ. Only nouns and な-adjectives do.",
          "な-adjectives drop the な before だ: {元気|げんき}だ, not {元気|げんき}なだ.",
          "Do not use だ before です: {学生|がくせい}だです is wrong; it is {学生|がくせい}です."
        ]
      },
      {
        id: "kaiwa",
        title: "{普通形|ふつうけい}の {会話|かいわ} (conversa casual)", title_en: "{普通形|ふつうけい}の {会話|かいわ} (casual talk)",
        pat: "V-る？<br>N だよ／だね<br>うん／ううん", title_en: "V-る？<br>N だよ／だね<br>うん／ううん",
        short: "falar com amigos e família", short_en: "talking with friends and family",
        mean: "Na conversa casual a frase fica mais curta: o か da pergunta some e a entonação sobe; よ e ね aparecem no fim para dar ênfase ou pedir concordância; うん／ううん substituem はい／いいえ.", mean_en: "In casual talk the sentence gets shorter: the question か disappears and the intonation rises; よ and ね come at the end to emphasise or ask for agreement; うん／ううん replace はい／いいえ.",
        rule: "Use com amigos, família e colegas próximos. Na fala, partículas como は、を、が podem cair ({何|なに} {食|た}べる？). Na escrita informal (mensagem, diário) a frase continua com as partículas.", rule_en: "Use it with friends, family and close colleagues. In speech, particles like は、を、が can be dropped ({何|なに} {食|た}べる？). In informal writing (messages, diaries) the sentence keeps its particles.",
        ex: [
          { jp: "A: {夏休|なつやす}み、{国|くに}^へ {帰|かえ}る？<br>B: うん、{来月|らいげつ} {帰|かえ}る。", romaji: "Natsuyasumi, kuni e kaeru? ...Un, raigetsu kaeru.", pt: "A: Você volta para o seu país nas férias? B: Sim, volto no mês que vem.", en: "A: Are you going back to your country for the summer holidays? B: Yes, next month." },
          { jp: "A: {元気|げんき}？<br>B: うん、{元気|げんき}だよ。", romaji: "Genki? ...Un, genki da yo.", pt: "A: Tudo bem? B: Sim, tudo bem.", en: "A: How are you? B: I'm fine." },
          { jp: "A: {明日|あした}^は {雨|あめ}？<br>B: ううん、{晴|は}れだよ。", romaji: "Ashita wa ame? ...Uun, hare da yo.", pt: "A: Amanhã vai chover? B: Não, vai fazer sol.", en: "A: Is it going to rain tomorrow? B: No, it will be sunny." },
          { jp: "{今日|きょう}^は {寒|さむ}いね。", romaji: "Kyou wa samui ne.", pt: "Hoje está frio, né.", en: "It's cold today, isn't it." }
        ],
        contrast: {
          rows: [
            { label: "com o professor", label_en: "with the teacher", jp: "{明日|あした}、{学校|がっこう}^へ {行|い}きますか。", pt: "Pergunta completa, com か e ます.", en: "Full question, with か and ます." },
            { label: "com um amigo", label_en: "with a friend", jp: "{明日|あした}、{学校|がっこう} {行|い}く？", pt: "Forma {普通|ふつう}, sem か e sem a partícula へ.", en: "Plain form, no か and no へ particle." }
          ],
          note: "A mesma pergunta em dois registros. Trocar de registro no meio soa estranho: {行|い}きます？ parece quem esqueceu metade da frase.", note_en: "The same question in two registers. Switching registers mid-sentence sounds odd: {行|い}きます？ sounds like someone forgot half the sentence."
        },
        trap: [
          "Não use a forma {普通|ふつう} com professor, chefe ou desconhecido: soa infantil ou grosseiro.",
          "Pergunta casual não leva か: {行|い}くか？ soa de livro ou de briga. Use {行|い}く？",
          "うん／ううん são de conversa. Em situação educada, responda はい／いいえ."
        ],
        trap_en: [
          "Do not use the {普通|ふつう} form with teachers, bosses or strangers: it sounds childish or rude.",
          "A casual question takes no か: {行|い}くか？ sounds like a book or a fight. Use {行|い}く？",
          "うん／ううん belong to conversation. In a polite situation answer はい／いいえ."
        ]
      }
    ]
  },
  renshuuA: {
    title: "{練習|れんしゅう} A", title_en: "{練習|れんしゅう} A",
    exercises: [
      {
        desc: "1. ます{形|けい} ➔ {普通形|ふつうけい} ({動詞|どうし})", desc_en: "1. ます{形|けい} ➔ {普通形|ふつうけい} (verbs)",
        questions: [
          { q: "{書|か}きます ➔", a: "{書|か}く", romaji: "kaku", pt: "escrevo", en: "I write" },
          { q: "{行|い}きます ➔", a: "{行|い}く", romaji: "iku", pt: "vou", en: "I go" },
          { q: "{帰|かえ}ります ➔", a: "{帰|かえ}る", romaji: "kaeru", pt: "volto", en: "I go back" },
          { q: "{食|た}べます ➔", a: "{食|た}べる", romaji: "taberu", pt: "como", en: "I eat" },
          { q: "{見|み}ます ➔", a: "{見|み}る", romaji: "miru", pt: "vejo", en: "I see" },
          { q: "します ➔", a: "する", romaji: "suru", pt: "faço", en: "I do" },
          { q: "{来|き}ます ➔", a: "{来|く}る", romaji: "kuru", pt: "venho (lê-se くる)", en: "I come (read くる)" }
        ]
      },
      {
        desc: "2. {普通形|ふつうけい}: formas negativa e passada", desc_en: "2. {普通形|ふつうけい}: negative and past forms",
        questions: [
          { q: "{書|か}きません ➔", a: "{書|か}かない", romaji: "kakanai", pt: "não escrevo", en: "I do not write" },
          { q: "{飲|の}みません ➔", a: "{飲|の}まない", romaji: "nomanai", pt: "não bebo", en: "I do not drink" },
          { q: "{待|ま}ちました ➔", a: "{待|ま}った", romaji: "matta", pt: "esperei", en: "I waited" },
          { q: "{買|か}いませんでした ➔", a: "{買|か}わなかった", romaji: "kawanakatta", pt: "não comprei", en: "I did not buy" },
          { q: "{食|た}べませんでした ➔", a: "{食|た}べなかった", romaji: "tabenakatta", pt: "não comi", en: "I did not eat" }
        ]
      },
      {
        desc: "3. い{形容詞|けいようし}の {普通形|ふつうけい}", desc_en: "3. い-adjectives in the {普通|ふつう} form",
        questions: [
          { q: "{高|たか}いです ➔", a: "{高|たか}い", romaji: "takai", pt: "é caro", en: "it is expensive" },
          { q: "{高|たか}くないです ➔", a: "{高|たか}くない", romaji: "takakunai", pt: "não é caro", en: "it is not expensive" },
          { q: "{寒|さむ}かったです ➔", a: "{寒|さむ}かった", romaji: "samukatta", pt: "estava frio", en: "it was cold" },
          { q: "{忙|いそが}しくなかったです ➔", a: "{忙|いそが}しくなかった", romaji: "isogashikunakatta", pt: "não estava ocupado", en: "I was not busy" }
        ]
      },
      {
        desc: "4. {名詞|めいし}・な{形容詞|けいようし}: だ／じゃない／だった／じゃなかった", desc_en: "4. Nouns and な-adjectives: だ／じゃない／だった／じゃなかった",
        questions: [
          { q: "{学生|がくせい}です ➔", a: "{学生|がくせい}だ", romaji: "gakusei da", pt: "é estudante", en: "is a student" },
          { q: "{学生|がくせい}じゃありません ➔", a: "{学生|がくせい}じゃない", romaji: "gakusei ja nai", pt: "não é estudante", en: "is not a student" },
          { q: "{元気|げんき}でした ➔", a: "{元気|げんき}だった", romaji: "genki datta", pt: "estava bem", en: "was well" },
          { q: "{元気|げんき}じゃありませんでした ➔", a: "{元気|げんき}じゃなかった", romaji: "genki ja nakatta", pt: "não estava bem", en: "was not well" }
        ]
      }
    ]
  },
  renshuuB: {
    title: "{練習|れんしゅう} B", title_en: "{練習|れんしゅう} B",
    exercises: [
      {
        desc: "1. {文|ぶん}を {普通形|ふつうけい}に しなさい。(Passe a frase para a forma {普通|ふつう})", desc_en: "1. {文|ぶん}を {普通形|ふつうけい}に しなさい。(Put the sentence into the {普通|ふつう} form)",
        questions: [
          { q: "{明日|あした}、{友達|ともだち}に {会|あ}います。➔", a: "{明日|あした}、{友達|ともだち}に {会|あ}う。", romaji: "Ashita, tomodachi ni au.", pt: "Amanhã encontro um amigo.", en: "Tomorrow I meet a friend." },
          { q: "{今日|きょう}^は {寒|さむ}いです。➔", a: "{今日|きょう}^は {寒|さむ}い。", romaji: "Kyou wa samui.", pt: "Hoje está frio.", en: "It is cold today." },
          { q: "{昨日|きのう}^は {日曜日|にちようび}でした。➔", a: "{昨日|きのう}^は {日曜日|にちようび}だった。", romaji: "Kinou wa nichiyoubi datta.", pt: "Ontem foi domingo.", en: "Yesterday was Sunday." },
          { q: "その {本|ほん}^は {面白|おもしろ}くなかったです。➔", a: "その {本|ほん}^は {面白|おもしろ}くなかった。", romaji: "Sono hon wa omoshirokunakatta.", pt: "Aquele livro não era interessante.", en: "That book was not interesting." }
        ]
      },
      {
        desc: "2. {丁寧|ていねい}な {質問|しつもん} ➔ {普通形|ふつうけい}の {質問|しつもん}", desc_en: "2. Polite question ➔ {普通|ふつう} form question",
        questions: [
          { q: "{夏休|なつやす}みに {国|くに}^へ {帰|かえ}りますか。➔", a: "{夏休|なつやす}みに {国|くに}^へ {帰|かえ}る？", romaji: "Natsuyasumi ni kuni e kaeru?", pt: "Você volta para o seu país nas férias?", en: "Are you going back to your country for the summer holidays?" },
          { q: "{毎日|まいにち} {日本語|にほんご}を {勉強|べんきょう}しますか。➔", a: "{毎日|まいにち} {日本語|にほんご}を {勉強|べんきょう}する？", romaji: "Mainichi nihongo o benkyou suru?", pt: "Você estuda japonês todos os dias?", en: "Do you study Japanese every day?" },
          { q: "{日曜日|にちようび}、{何|なに}を しますか。➔", a: "{日曜日|にちようび}、{何|なに}を する？", romaji: "Nichiyoubi, nani o suru?", pt: "O que você faz no domingo?", en: "What do you do on Sundays?" }
        ]
      },
      {
        desc: "3. うん／ううん で {答|こた}えなさい。(Responda com うん／ううん)", desc_en: "3. Answer with うん／ううん",
        questions: [
          { q: "{明日|あした}、{雨|あめ}が {降|ふ}りますか。（いいえ・{晴|は}れ）➔", a: "ううん、{晴|は}れだよ。", romaji: "Uun, hare da yo.", pt: "Não, vai fazer sol.", en: "No, it will be sunny." },
          { q: "{元気|げんき}？（はい）➔", a: "うん、{元気|げんき}だよ。", romaji: "Un, genki da yo.", pt: "Sim, tudo bem.", en: "Yes, I'm fine." },
          { q: "{夏休|なつやす}み^は {海|うみ}に {行|い}きますか。（はい・{家族|かぞく}と）➔", a: "うん、{家族|かぞく}と {行|い}く。", romaji: "Un, kazoku to iku.", pt: "Sim, vou com a família.", en: "Yes, I'm going with my family." }
        ]
      }
    ]
  },
  renshuuC: {
    title: "{練習|れんしゅう} C (Diálogos)", title_en: "{練習|れんしゅう} C (Dialogues)",
    exercises: [
      {
        desc: "1. {夏休|なつやす}みの {予定|よてい} (Planos de férias)", desc_en: "1. {夏休|なつやす}みの {予定|よてい} (Holiday plans)",
        questions: [
          { q: "A: {夏休|なつやす}み、どこか <strong>[{行|い}きます]</strong>？<br>B: うん、{国|くに}^へ {帰|かえ}る。", a: "{行|い}く", romaji: "iku", pt: "vou (forma {普通|ふつう})", en: "I go (plain form)" },
          { q: "A: {海|うみ}と {山|やま}と、どっちが {好|す}き？<br>B: {海|うみ}が <strong>[{好|す}きです]</strong>。", a: "{好|す}きだ", romaji: "suki da", pt: "gosto (forma {普通|ふつう})", en: "I like (plain form)" },
          { q: "A: {予約|よやく}^は もう しましたか。<br>B: ううん、まだ。<strong>[します]</strong>。", a: "する", romaji: "suru", pt: "faço (forma {普通|ふつう})", en: "I do (plain form)" }
        ]
      },
      {
        desc: "2. {天気|てんき}の {話|はなし} (Falando do tempo)", desc_en: "2. {天気|てんき}の {話|はなし} (Talking about the weather)",
        questions: [
          { q: "A: {今日|きょう}^は {寒|さむ}いね。<br>B: うん、{昨日|きのう}^は もっと <strong>[{寒|さむ}いでした]</strong>。", a: "{寒|さむ}かった", romaji: "samukatta", pt: "estava mais frio (forma {普通|ふつう})", en: "was colder (plain form)" },
          { q: "A: {明日|あした}、{雪|ゆき}が {降|ふ}る？<br>B: ううん、<strong>[{降|ふ}りません]</strong>。", a: "{降|ふ}らない", romaji: "furanai", pt: "não cai (forma {普通|ふつう})", en: "it does not fall (plain form)" }
        ]
      }
    ]
  },
  mondai: {
    title: "{問題|もんだい} (Problemas / Avaliação)", title_en: "{問題|もんだい} (Problems / Assessment)",
    exercises: [
      {
        desc: "1. (　　) に {正|ただ}しい {形|かたち}を {入|い}れなさい。(Complete com a forma {普通|ふつう})", desc_en: "1. (　　) に {正|ただ}しい {形|かたち}を {入|い}れなさい。(Complete with the {普通|ふつう} form)",
        questions: [
          { q: "{明日|あした}、{友達|ともだち}に （{会|あ}います ➔ ＿＿＿）。", a: "{会|あ}う", romaji: "au", pt: "encontro (forma {普通|ふつう}, presente)", en: "meet (plain form, present)" },
          { q: "{昨日|きのう}^は {寒|さむ}い （です ➔ ＿＿＿）。", a: "{寒|さむ}かった", romaji: "samukatta", pt: "estava frio (forma {普通|ふつう}, passado)", en: "was cold (plain form, past)" },
          { q: "{田中|たなか}さん^は {学生|がくせい} （です ➔ ＿＿＿）。", a: "{学生|がくせい}だ", romaji: "gakusei da", pt: "é estudante (substantivo + だ)", en: "is a student (noun + だ)" },
          { q: "{今日|きょう}^は {元気|げんき} （です ➔ ＿＿＿）。", a: "{元気|げんき}じゃない", romaji: "genki ja nai", pt: "não estou bem (adjetivo な, negativo)", en: "am not well (na-adjective, negative)" }
        ]
      },
      {
        desc: "2. {正|ただ}しい ものを {選|えら}びなさい。(Escolha a resposta certa)", desc_en: "2. {正|ただ}しい ものを {選|えら}びなさい。(Choose the right answer)",
        questions: [
          { q: "{夏休|なつやす}み、{国|くに} （　　） {帰|かえ}る？", a: "へ", romaji: "e", pt: "Partícula de direção (para o país)", en: "Direction particle (to the country)" },
          { q: "{昨日|きのう}^は {日曜日|にちようび} （　　）。", a: "だった", romaji: "datta", pt: "Substantivo no passado afirmativo", en: "Noun in the past affirmative" },
          { q: "{今日|きょう}^は {忙|いそが}しい？　…ううん、 （　　） 。", a: "{忙|いそが}しくない", romaji: "isogashikunai", pt: "Adjetivo い no negativo", en: "い-adjective in the negative" }
        ]
      },
      {
        desc: "3. {読|よ}み{物|もの} (Leitura): サントスさんの {夏休|なつやす}み", desc_en: "3. {読|よ}み{物|もの} (Reading): Santos's summer holidays",
        questions: [
          {
            q: `<div class="reading-box">
                                            {来月|らいげつ}、サントスさん^は {夏休|なつやす}みに なります。{国|くに}^へ {帰|かえ}る {予定|よてい}です。でも、ひこうきの {予約|よやく}^は まだ して いません。{家族|かぞく}に お{土産|みやげ}も まだ {買|か}って いません。
                                        </div>
                                        {質問|しつもん}: サントスさん^は これから {何|なに}を しますか。`,
            a: "ひこうきの {予約|よやく}を します。",
            pt: "Ele vai reservar a passagem de avião.", en: "He is going to book the plane ticket."
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
          { tokens: ["{夏休|なつやす}み^は", "{国|くに}^へ", "{帰|かえ}ります。"], pt: "Nas férias de verão, volto para o meu país.", en: "In the summer holidays I go back to my country.", romaji: "Natsuyasumi wa kuni e kaerimasu." },
          { tokens: ["{明日|あした}^は", "{友達|ともだち}に", "{会|あ}う。"], pt: "Amanhã encontro um amigo.", en: "Tomorrow I meet a friend.", romaji: "Ashita wa tomodachi ni au." },
          { tokens: ["{昨日|きのう}の", "パーティー^は", "{楽|たの}しかった。"], pt: "A festa de ontem foi divertida.", en: "Yesterday's party was fun.", romaji: "Kinou no paatii wa tanoshikatta." },
          { tokens: ["{田中|たなか}さん^は", "{日本人|にほんじん}", "じゃない。"], pt: "O Tanaka não é japonês.", en: "Tanaka is not Japanese.", romaji: "Tanaka-san wa nihonjin ja nai." },
          { tokens: ["{今日|きょう}^は", "{寒|さむ}くないね。"], pt: "Hoje não está frio, né.", en: "It's not cold today, is it.", romaji: "Kyou wa samukunai ne." }
        ]
      }
    ]
  }
};
