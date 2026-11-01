// Dados da lição 7. Formato descrito no README.md.
window.lessonData = {
  vocab: {
    title: "{語彙|ごい} (Vocabulário)", title_en: "{語彙|ごい} (Vocabulary)",
    items: [
      { jp: "あげます", romaji: "agemasu", pt: "Dar (a outra pessoa)", en: "To give (to someone)" },
      { jp: "もらいます", romaji: "moraimasu", pt: "Receber", en: "To receive" },
      { jp: "{貸|か}します", romaji: "kashimasu", pt: "Emprestar", en: "To lend" },
      { jp: "{借|か}ります", romaji: "karimasu", pt: "Pegar emprestado", en: "To borrow" },
      { jp: "{教|おし}えます", romaji: "oshiemasu", pt: "Ensinar", en: "To teach" },
      { jp: "{習|なら}います", romaji: "naraimasu", pt: "Aprender (com alguém)", en: "To learn (from someone)" },
      { jp: "{切|き}ります", romaji: "kirimasu", pt: "Cortar", en: "To cut" },
      { jp: "{送|おく}ります", romaji: "okurimasu", pt: "Enviar, mandar", en: "To send" },
      { jp: "はし", romaji: "hashi", pt: "Hashi (palitos para comer)", en: "Chopsticks" },
      { jp: "ナイフ", romaji: "naifu", pt: "Faca", en: "Knife" },
      { jp: "フォーク", romaji: "fooku", pt: "Garfo", en: "Fork" },
      { jp: "スプーン", romaji: "supuun", pt: "Colher", en: "Spoon" },
      { jp: "はさみ", romaji: "hasami", pt: "Tesoura", en: "Scissors" },
      { jp: "パソコン", romaji: "pasokon", pt: "Computador", en: "Computer" },
      { jp: "メール", romaji: "meeru", pt: "E-mail", en: "Email" },
      { jp: "プレゼント", romaji: "purezento", pt: "Presente", en: "Present, gift" },
      { jp: "{花|はな}", romaji: "hana", pt: "Flor", en: "Flower" },
      { jp: "{紙|かみ}", romaji: "kami", pt: "Papel", en: "Paper" },
      { jp: "{荷物|にもつ}", romaji: "nimotsu", pt: "Bagagem, pacote", en: "Luggage, parcel" },
      { jp: "お{金|かね}", romaji: "okane", pt: "Dinheiro", en: "Money" },
      { jp: "{父|ちち}", romaji: "chichi", pt: "Meu pai (ao falar da própria família)", en: "My father (when speaking of your own family)" },
      { jp: "{母|はは}", romaji: "haha", pt: "Minha mãe (ao falar da própria família)", en: "My mother (when speaking of your own family)" },
      { jp: "{何語|なにご}", romaji: "nanigo", pt: "Que língua", en: "What language" },
      { jp: "もう", romaji: "mou", pt: "Já (com ました)", en: "Already (with ました)" },
      { jp: "まだ", romaji: "mada", pt: "Ainda (não)", en: "Not yet, still" },
      { jp: "これから", romaji: "korekara", pt: "A partir de agora, daqui em diante", en: "From now on, from here" },
      { jp: "ありがとう ございます", romaji: "arigatou gozaimasu", pt: "Muito obrigado(a)", en: "Thank you very much" }
    ]
  },
  gramatica: {
    title: "{文法|ぶんぽう} (Gramática)", title_en: "{文法|ぶんぽう} (Grammar)",
    intro: "Três pontos: com que instrumento ou língua se faz algo, como dar e receber, e se algo já foi feito. Cada cartão traz o modelo de frase, a explicação, os exemplos, uma comparação com o que é parecido e os erros mais comuns.", intro_en: "Three points: with what tool or language something is done, how to give and receive, and whether something has already been done. Each card gives the sentence pattern, the explanation, the examples, a comparison with what looks similar and the most common mistakes.",
    points: [
      {
        id: "de-guu",
        title: "N で V ます (ferramenta, língua, meio)", title_en: "N で V ます (tool, language, means)",
        pat: "N (instrumento／língua) で V ます",
        short: "com o quê, em que língua", short_en: "with what, in what language",
        mean: "<strong>で</strong> também marca o instrumento (com o quê se faz) e a língua em que se faz: “como <em>com</em> hashi”, “escrevo <em>em</em> japonês”.", mean_en: "<strong>で</strong> also marks the instrument (what you do it with) and the language it is done in: “I eat <em>with</em> chopsticks”, “I write <em>in</em> Japanese”.",
        rule: "Pergunta do instrumento: {何|なに}で V ますか（なにで = com quê; なんで = por quê）。 Pergunta da língua: {何語|なにご}で V ますか。", rule_en: "Question about the instrument: {何|なに}で V ますか (なにで = with what; なんで = why). Question about the language: {何語|なにご}で V ますか。",
        ex: [
          { jp: "はしで ごはんを {食|た}べます。", romaji: "hashi de gohan o tabemasu.", pt: "Como com hashi.", en: "I eat with chopsticks." },
          { jp: "パソコンで レポートを {書|か}きました。", romaji: "Pasokon de repooto o kakimashita.", pt: "Escrevi o relatório no computador.", en: "I wrote the report on the computer." },
          { jp: "{日本語|にほんご}で メールを {書|か}きます。", romaji: "Nihongo de meeru o kakimasu.", pt: "Escrevo e-mails em japonês.", en: "I write emails in Japanese." },
          { jp: "{紙|かみ}を はさみで {切|き}ります。", romaji: "Kami o hasami de kirimasu.", pt: "Corto o papel com a tesoura.", en: "I cut the paper with scissors." }
        ],
        contrast: {
          rows: [
            { label: "で (lugar da ação)", label_en: "で (place of the action)", jp: "{食堂|しょくどう}で {食|た}べます。", pt: "Como no refeitório.", en: "I eat at the cafeteria." },
            { label: "で (instrumento)", label_en: "で (instrument)", jp: "はしで {食|た}べます。", pt: "Como com hashi.", en: "I eat with chopsticks." }
          ],
          note: "É a mesma partícula. Se o substantivo é um lugar, é “onde”; se é uma ferramenta ou língua, é “com o quê” ou “em que língua”.", note_en: "It is the same particle. If the noun is a place, it means “where”; if it is a tool or language, it means “with what” or “in what language”."
        },
        trap: [
          "Não use と para instrumento: “com hashi” é はしで, e não はしと. O と de companhia vale para pessoas ({友達|ともだち}と); para listar coisas usa-se と também (lição 10).",
          "“Em japonês” é {日本語|にほんご}で, e não {日本語|にほんご}に.",
          "{何|なに}で = なにで pergunta o instrumento; {何|なん}で é “por quê”."
        ],
        trap_en: [
          "Do not use と for an instrument: “with chopsticks” is はしで, not はしと. The と of company is for people ({友達|ともだち}と); と is also used to list things (lesson 10).",
          "“In Japanese” is {日本語|にほんご}で, not {日本語|にほんご}に.",
          "{何|なに}で = なにで asks about the instrument; {何|なん}で means “why”."
        ]
      },
      {
        id: "ageru-morau",
        title: "N1 に N2 を あげます・もらいます・{貸|か}します・{借|か}ります・{教|おし}えます・{習|なら}います", title_en: "N1 に N2 を あげます・もらいます・{貸|か}します・{借|か}ります・{教|おし}えます・{習|なら}います",
        pat: "(pessoa) に N を あげます<br>(pessoa) に N を もらいます",
        short: "dar e receber, emprestar, ensinar", short_en: "giving and receiving, lending, teaching",
        mean: "Seis verbos de troca com a mesma estrutura: a pessoa que está do outro lado leva <strong>に</strong> e a coisa leva <strong>を</strong>.", mean_en: "Six exchange verbs with the same structure: the person on the other side takes <strong>に</strong> and the thing takes <strong>を</strong>.",
        rule: "O ponto de vista é do sujeito: quem dá usa あげます, quem recebe usa もらいます. Com もらいます, a pessoa de quem se recebe pode levar に ou <strong>から</strong> (de). Com uma empresa ou escola, use から.", rule_en: "The point of view is the subject's: the giver uses あげます, the receiver uses もらいます. With もらいます, the person you receive from can take に or <strong>から</strong> (from). With a company or school, use から.",
        form: [
          { label: "Do lado de quem dá", label_en: "From the giver's side", text: "A coisa vai para o outro.", text_en: "The thing goes to the other person.", ex: [
            { jp: "あげます", romaji: "agemasu", pt: "dar", en: "to give" },
            { jp: "{貸|か}します", romaji: "kashimasu", pt: "emprestar", en: "to lend" },
            { jp: "{教|おし}えます", romaji: "oshiemasu", pt: "ensinar", en: "to teach" }
          ] },
          { label: "Do lado de quem recebe", label_en: "From the receiver's side", text: "A coisa vem do outro.", text_en: "The thing comes from the other person.", ex: [
            { jp: "もらいます", romaji: "moraimasu", pt: "receber", en: "to receive" },
            { jp: "{借|か}ります", romaji: "karimasu", pt: "pegar emprestado", en: "to borrow" },
            { jp: "{習|なら}います", romaji: "naraimasu", pt: "aprender (com alguém)", en: "to learn (from someone)" }
          ] }
        ],
        ex: [
          { jp: "わたし^は マリアさんに {花|はな}を あげました。", romaji: "Watashi wa Maria-san ni hana o agemashita.", pt: "Eu dei flores à Maria.", en: "I gave flowers to Maria." },
          { jp: "わたし^は {友達|ともだち}に {本|ほん}を {貸|か}しました。", romaji: "Watashi wa tomodachi ni hon o kashimashita.", pt: "Emprestei um livro a um amigo.", en: "I lent a book to a friend." },
          { jp: "{母|はは}に プレゼントを もらいました。", romaji: "Haha ni purezento o moraimashita.", pt: "Ganhei um presente da minha mãe.", en: "I received a present from my mother." },
          { jp: "{田中|たなか}さん^は わたしに {日本語|にほんご}を {教|おし}えます。", romaji: "Tanaka-san wa watashi ni nihongo o oshiemasu.", pt: "O Sr. Tanaka me ensina japonês.", en: "Mr. Tanaka teaches me Japanese." },
          { jp: "だれに {手紙|てがみ}を {送|おく}りましたか。<br>…{父|ちち}に {送|おく}りました。", romaji: "Dare ni tegami o okurimashita ka. ...Chichi ni okurimashita.", pt: "Para quem você enviou a carta? ...Enviei para o meu pai.", en: "Who did you send the letter to? ...I sent it to my father." }
        ],
        contrast: {
          rows: [
            { label: "あげます (quem dá)", label_en: "あげます (the giver)", jp: "わたし^は {田中|たなか}さんに {花|はな}を あげました。", pt: "Eu dei flores ao Sr. Tanaka.", en: "I gave flowers to Mr. Tanaka." },
            { label: "もらいます (quem recebe)", label_en: "もらいます (the receiver)", jp: "{田中|たなか}さん^は わたしに {花|はな}を もらいました。", pt: "O Sr. Tanaka recebeu flores de mim.", en: "Mr. Tanaka received flowers from me." }
          ],
          note: "É o mesmo acontecimento, visto de dois lados. Escolha o verbo conforme o sujeito da frase.", note_en: "It is the same event, seen from two sides. Choose the verb according to the subject of the sentence."
        },
        trap: [
          "Não use あげます quando alguém dá algo <em>a você</em>: para isso há outro verbo (em japonês usa-se くれます, que não é ensinado nestas lições). Aqui, quem recebe é o sujeito e usa もらいます.",
          "Em もらいます, quem dá leva に (ou から). Não use を para a pessoa: errado {友達|ともだち}を {本|ほん}を もらいました。"
        ],
        trap_en: [
          "Do not use あげます when someone gives something <em>to you</em>: there is another verb for that (Japanese uses くれます, which is not taught in these lessons). Here, the receiver is the subject and uses もらいます.",
          "With もらいます, the giver takes に (or から). Do not use を for the person: wrong {友達|ともだち}を {本|ほん}を もらいました。"
        ]
      },
      {
        id: "mou-mada",
        title: "もう V ました ・ まだです", title_en: "もう V ました ・ まだです",
        pat: "もう V ましたか。<br>はい、もう V ました。／いいえ、まだです。",
        short: "já fez? / ainda não", short_en: "have you already? / not yet",
        mean: "<strong>もう</strong> ＋ ました quer dizer “já”. A resposta negativa para “já fez?” é <strong>まだです</strong> (“ainda não”).", mean_en: "<strong>もう</strong> ＋ ました means “already”. The negative answer to “have you already…?” is <strong>まだです</strong> (“not yet”).",
        ex: [
          { jp: "もう ごはんを {食|た}べましたか。<br>…はい、もう {食|た}べました。", romaji: "Mou gohan o tabemashita ka. ...Hai, mou tabemashita.", pt: "Você já comeu? ...Sim, já comi.", en: "Have you eaten already? ...Yes, I have." },
          { jp: "もう {手紙|てがみ}を {書|か}きましたか。<br>…いいえ、まだです。", romaji: "Mou tegami o kakimashita ka. ...Iie, mada desu.", pt: "Você já escreveu a carta? ...Não, ainda não.", en: "Have you written the letter yet? ...No, not yet." },
          { jp: "もう {荷物|にもつ}を {送|おく}りましたか。<br>…いいえ、これから {送|おく}ります。", romaji: "Mou nimotsu o okurimashita ka. ...Iie, korekara okurimasu.", pt: "Você já enviou o pacote? ...Não, vou enviar agora.", en: "Have you sent the parcel yet? ...No, I am going to send it now." }
        ],
        contrast: {
          rows: [
            { label: "もう (já)", label_en: "もう (already)", jp: "もう {食|た}べました。", pt: "Já comi.", en: "I have already eaten." },
            { label: "まだ (ainda não)", label_en: "まだ (not yet)", jp: "まだです。", pt: "Ainda não.", en: "Not yet." }
          ],
          note: "Para o que vai fazer logo depois, use これから: 「これから {食|た}べます」 = “vou comer agora”.", note_en: "For what you are about to do, use これから: 「これから {食|た}べます」 = “I am about to eat”."
        },
        trap: [
          "A resposta negativa não é いいえ、{食|た}べませんでした (isso é “não comi” no passado). Para “ainda não”, diga まだです。",
          "もう aqui é “já”; em outras frases também pode ser “mais”. O sentido vem da frase."
        ],
        trap_en: [
          "The negative answer is not いいえ、{食|た}べませんでした (that means “I did not eat”, simple past). For “not yet”, say まだです。",
          "もう here is “already”; in other sentences it can also be “more”. The sentence tells you which."
        ]
      }
    ]
  },
  renshuuA: {
    title: "{練習|れんしゅう} A", title_en: "{練習|れんしゅう} A",
    exercises: [
      {
        desc: "1. Complete com で, に ou を", desc_en: "1. Fill in with で, に or を",
        questions: [
          { q: "はし（　　）ごはんを {食|た}べます。", a: "で", romaji: "de", pt: "Instrumento", en: "Instrument" },
          { q: "{友達|ともだち}（　　）{花|はな}を あげました。", a: "に", romaji: "ni", pt: "Quem recebe", en: "The receiver" },
          { q: "わたし^は {母|はは}に プレゼント（　　）もらいました。", a: "を", romaji: "o", pt: "O que recebeu", en: "What was received" },
          { q: "{日本語|にほんご}（　　）メールを {書|か}きます。", a: "で", romaji: "de", pt: "Língua", en: "Language" }
        ]
      },
      {
        desc: "2. あげます ou もらいます?", desc_en: "2. あげます or もらいます?",
        questions: [
          { q: "わたし^は {田中|たなか}さんに {花|はな}を ＿＿＿＿＿＿。(dei)", q_en: "わたし^は {田中|たなか}さんに {花|はな}を ＿＿＿＿＿＿。(I gave)", a: "あげました", romaji: "agemashita", pt: "Dei", en: "I gave" },
          { q: "わたし^は {母|はは}に プレゼントを ＿＿＿＿＿＿。(recebi)", q_en: "わたし^は {母|はは}に プレゼントを ＿＿＿＿＿＿。(I received)", a: "もらいました", romaji: "moraimashita", pt: "Recebi", en: "I received" },
          { q: "わたし^は {友達|ともだち}に {本|ほん}を ＿＿＿＿＿＿。(emprestei)", q_en: "わたし^は {友達|ともだち}に {本|ほん}を ＿＿＿＿＿＿。(I lent)", a: "{貸|か}しました", romaji: "kashimashita", pt: "Emprestei", en: "I lent" },
          { q: "わたし^は {先生|せんせい}に {日本語|にほんご}を ＿＿＿＿＿＿。(aprendi)", q_en: "わたし^は {先生|せんせい}に {日本語|にほんご}を ＿＿＿＿＿＿。(I learned)", a: "{習|なら}いました", romaji: "naraimashita", pt: "Aprendi", en: "I learned" }
        ]
      }
    ]
  },
  renshuuB: {
    title: "{練習|れんしゅう} B", title_en: "{練習|れんしゅう} B",
    exercises: [
      {
        desc: "1. Responda: já fez? (sim ou ainda não)", desc_en: "1. Answer: have you done it already? (yes or not yet)",
        questions: [
          { q: "A: もう ごはんを {食|た}べましたか。<br>B: はい、＿＿＿＿＿＿＿＿。", a: "もう {食|た}べました／{食|た}べました", romaji: "mou tabemashita / tabemashita", pt: "Sim, já comi", en: "Yes, I have already eaten" },
          { q: "A: もう {手紙|てがみ}を {書|か}きましたか。<br>B: いいえ、＿＿＿＿＿＿＿＿。", a: "まだです", romaji: "mada desu", pt: "Não, ainda não", en: "No, not yet" },
          { q: "A: もう {荷物|にもつ}を {送|おく}りましたか。<br>B: いいえ、＿＿＿＿＿＿＿＿。", a: "まだです", romaji: "mada desu", pt: "Não, ainda não", en: "No, not yet" }
        ]
      }
    ]
  },
  mondai: {
    title: "{問題|もんだい} (Problemas / Avaliação)", title_en: "{問題|もんだい} (Problems / Assessment)",
    exercises: [
      {
        desc: "1. (　　) に {正|ただ}しい ことばを {入|い}れなさい。 (で・に・を・から・もう・まだ)", desc_en: "1. Fill in the blank with the right word. (で・に・を・から・もう・まだ)",
        questions: [
          { q: "{何語|なにご}（　　）{書|か}きますか。…{日本語|にほんご}で {書|か}きます。", a: "で", romaji: "de", pt: "Em que língua", en: "In what language" },
          { q: "{会社|かいしゃ}（　　）{荷物|にもつ}を もらいました。", a: "から", romaji: "kara", pt: "De uma empresa", en: "From a company" },
          { q: "（　　）{宿題|しゅくだい}を しましたか。…はい、もう しました。", a: "もう", romaji: "mou", pt: "Já", en: "Already" },
          { q: "もう {食|た}べましたか。…いいえ、（　　）です。", a: "まだ", romaji: "mada", pt: "Ainda não", en: "Not yet" }
        ]
      },
      {
        desc: "2. {読|よ}み{物|もの} (Leitura): たんじょうび", desc_en: "2. Reading: the birthday",
        questions: [
          {
            q: `<div class="reading-box">きのう、{友達|ともだち}の マリアさんの {誕生日|たんじょうび}でした。わたし^は マリアさんに {花|はな}を あげました。それから、いっしょに ケーキを {食|た}べました。マリアさん^は {母|はは}にも プレゼントを もらいました。</div>{質問|しつもん}: わたし^は マリアさんに {何|なに}を あげましたか。<br>➔ ＿＿＿＿＿＿を あげました。`,
            a: "{花|はな}",
            romaji: "hana",
            pt: "Flores.", en: "Flowers."
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
          { tokens: ["はしで", "ごはんを", "{食|た}べます。"], pt: "Como com hashi.", en: "I eat with chopsticks.", romaji: "Hashi de gohan o tabemasu." },
          { tokens: ["{友達|ともだち}に", "{本|ほん}を", "{貸|か}しました。"], pt: "Emprestei um livro a um amigo.", en: "I lent a book to a friend.", romaji: "Tomodachi ni hon o kashimashita." },
          { tokens: ["もう", "{手紙|てがみ}を", "{書|か}きましたか。"], pt: "Você já escreveu a carta?", en: "Have you written the letter yet?", romaji: "Mou tegami o kakimashita ka." },
          { tokens: ["{母|はは}に", "プレゼントを", "もらいました。"], pt: "Ganhei um presente da minha mãe.", en: "I received a present from my mother.", romaji: "Haha ni purezento o moraimashita." }
        ]
      }
    ]
  }
};
