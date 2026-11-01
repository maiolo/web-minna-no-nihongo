// Dados da lição 15. Formato descrito no README.md.
window.lessonData = {
  vocab: {
    title: "{語彙|ごい} (Vocabulário)", title_en: "{語彙|ごい} (Vocabulary)",
    items: [
      { jp: "{立|た}ちます", romaji: "tachimasu", pt: "Ficar de pé", en: "To stand" },
      { jp: "{座|すわ}ります", romaji: "suwarimasu", pt: "Sentar-se", en: "To sit" },
      { jp: "{使|つか}います", romaji: "tsukaimasu", pt: "Usar", en: "To use" },
      { jp: "{置|お}きます", romaji: "okimasu", pt: "Colocar, pôr", en: "To put, to place" },
      { jp: "{作|つく}ります", romaji: "tsukurimasu", pt: "Fazer, fabricar", en: "To make" },
      { jp: "{売|う}ります", romaji: "urimasu", pt: "Vender", en: "To sell" },
      { jp: "{知|し}ります", romaji: "shirimasu", pt: "Saber, ficar sabendo", en: "To get to know" },
      { jp: "{住|す}みます", romaji: "sumimasu", pt: "Morar", en: "To live (reside)" },
      { jp: "{研究|けんきゅう}します", romaji: "kenkyuu shimasu", pt: "Pesquisar, estudar a fundo", en: "To research" },
      { jp: "{写真|しゃしん}", romaji: "shashin", pt: "Fotografia", en: "Photograph" },
      { jp: "{名前|なまえ}", romaji: "namae", pt: "Nome", en: "Name" },
      { jp: "{住所|じゅうしょ}", romaji: "juusho", pt: "Endereço", en: "Address" },
      { jp: "{電話番号|でんわばんごう}", romaji: "denwabangou", pt: "Número de telefone", en: "Phone number" },
      { jp: "{家族|かぞく}", romaji: "kazoku", pt: "Família", en: "Family" },
      { jp: "{国|くに}", romaji: "kuni", pt: "País", en: "Country" },
      { jp: "{町|まち}", romaji: "machi", pt: "Cidade, bairro", en: "Town" },
      { jp: "{大学|だいがく}", romaji: "daigaku", pt: "Universidade", en: "University" },
      { jp: "{会社|かいしゃ}", romaji: "kaisha", pt: "Empresa", en: "Company" },
      { jp: "{病院|びょういん}", romaji: "byouin", pt: "Hospital", en: "Hospital" },
      { jp: "{図書館|としょかん}", romaji: "toshokan", pt: "Biblioteca", en: "Library" },
      { jp: "{写真|しゃしん}を {撮|と}ります", romaji: "shashin o torimasu", pt: "Tirar uma foto", en: "To take a photo" },
      { jp: "{独身|どくしん}", romaji: "dokushin", pt: "Solteiro", en: "Single (unmarried)" },
      { jp: "{結婚|けっこん}して います", romaji: "kekkon shite imasu", pt: "Ser casado", en: "To be married" },
      { jp: "{太|ふと}って います", romaji: "futotte imasu", pt: "Estar gordo", en: "To be heavy-set" },
      { jp: "{眼鏡|めがね}", romaji: "megane", pt: "Óculos", en: "Glasses" },
      { jp: "ここで", romaji: "kokode", pt: "Aqui (lugar da ação)", en: "Here (place of action)" },
      { jp: "もちろん", romaji: "mochiron", pt: "Claro, com certeza", en: "Of course" },
      { jp: "{少|すこ}し", romaji: "sukoshi", pt: "Um pouco", en: "A little" },
      { jp: "{全然|ぜんぜん}", romaji: "zenzen", pt: "Nem um pouco (com negativa)", en: "Not at all (with a negative)" }
    ]
  },
  gramatica: {
    title: "{文法|ぶんぽう} (Gramática)", title_en: "{文法|ぶんぽう} (Grammar)",
    intro: "Três pontos com a forma て: pedir e dar permissão, proibir e descrever um estado que continua. Cada cartão traz o modelo, a explicação, exemplos, uma comparação e os erros mais comuns.", intro_en: "Three points with the て-form: asking for and giving permission, prohibiting, and describing a state that continues. Each card gives the pattern, the explanation, examples, a comparison and the most common mistakes.",
    points: [
      {
        id: "temo-ii",
        title: "V-ても いいです", title_en: "V-ても いいです",
        pat: "V-て も いいです",
        short: "permissão: “pode…”", short_en: "permission: “you may…”",
        mean: "A forma て ＋ <strong>も</strong> ＋ いいです dá ou pede <strong>permissão</strong>. Na pergunta, V-ても いいですか (“posso…?”). Para recusar, usa-se V-ては いけません.", mean_en: "The て-form ＋ <strong>も</strong> ＋ いいです gives or asks for <strong>permission</strong>. As a question: V-ても いいですか (“may I…?”). To refuse, use V-ては いけません.",
        ex: [
          { jp: "ここで {写真|しゃしん}を {撮|と}っても いいですか。<br>…ええ、いいですよ。", romaji: "Koko de shashin o tottemo ii desu ka. ...Ee, ii desu yo.", pt: "Posso tirar fotos aqui? ...Sim, pode.", en: "May I take photos here? ...Yes, you may." },
          { jp: "{窓|まど}を {開|あ}けても いいですか。<br>…はい、どうぞ。", romaji: "Mado o aketemo ii desu ka. ...Hai, douzo.", pt: "Posso abrir a janela? ...Sim, fique à vontade.", en: "May I open the window? ...Yes, go ahead." },
          { jp: "ここに {座|すわ}っても いいです。", romaji: "Kokoni suwattemo ii desu.", pt: "Pode sentar aqui.", en: "You may sit here." }
        ],
        contrast: {
          rows: [
            { label: "V-て ください (pedido)", label_en: "V-て ください (request)", jp: "{窓|まど}を {開|あ}けて ください。", pt: "Abra a janela, por favor.", en: "Please open the window." },
            { label: "V-ても いいですか (permissão)", label_en: "V-ても いいですか (permission)", jp: "{窓|まど}を {開|あ}けても いいですか。", pt: "Posso abrir a janela?", en: "May I open the window?" }
          ],
          note: "ください pede ao outro que faça; ても いいですか pede licença para eu fazer.", note_en: "ください asks the other to do it; ても いいですか asks leave for me to do it."
        },
        trap: [
          "Não se esqueça do も: errado {開|あ}けて いいですか. O correto é {開|あ}けても いいですか.",
          "Na resposta negativa, não diga いいえ、いいです (confuso): use いいえ、いけません ou ちょっと…"
        ],
        trap_en: [
          "Do not forget も: wrong {開|あ}けて いいですか. The right form is {開|あ}けても いいですか.",
          "In a negative answer, do not say いいえ、いいです (confusing): use いいえ、いけません or ちょっと…"
        ]
      },
      {
        id: "tewa-ikemasen",
        title: "V-ては いけません", title_en: "V-ては いけません",
        pat: "V-て は いけません",
        short: "proibição: “não pode…”", short_en: "prohibition: “you must not…”",
        mean: "A forma て ＋ <strong>は</strong> (lido <em>wa</em>) ＋ いけません indica <strong>proibição</strong>. É direta; para recusar com mais suavidade, prefira ちょっと… ou すみません、ちょっと.", mean_en: "The て-form ＋ <strong>は</strong> (read <em>wa</em>) ＋ いけません indicates <strong>prohibition</strong>. It is direct; to refuse more softly, prefer ちょっと… or すみません、ちょっと.",
        ex: [
          { jp: "ここで {写真|しゃしん}を {撮|と}って^は いけません。", romaji: "Koko de shashin o totte wa ikemasen.", pt: "Aqui não se pode tirar fotos.", en: "You must not take photos here." },
          { jp: "ここに {車|くるま}を {止|と}めて^は いけません。", romaji: "Koko ni kuruma o tomete wa ikemasen.", pt: "Não se pode estacionar o carro aqui.", en: "You must not park the car here." },
          { jp: "{図書館|としょかん}で {話|はな}して^は いけません。", romaji: "Toshokan de hanashite wa ikemasen.", pt: "Não se pode conversar na biblioteca.", en: "You must not talk in the library." }
        ],
        contrast: {
          rows: [
            { label: "ても いいです (pode)", label_en: "ても いいです (may)", jp: "ここで {食|た}べても いいです。", pt: "Pode comer aqui.", en: "You may eat here." },
            { label: "ては いけません (não pode)", label_en: "ては いけません (must not)", jp: "ここで {食|た}べて^は いけません。", pt: "Não se pode comer aqui.", en: "You must not eat here." }
          ],
          note: "Só muda も ➔ は e いいです ➔ いけません.", note_en: "Only も ➔ は and いいです ➔ いけません change."
        },
        trap: [
          "Esse は se lê wa: ... て^は いけません (te-wa), e não te-ha.",
          "É forte: não use com superiores. Prefira avisar com すみません、ここは ちょっと…"
        ],
        trap_en: [
          "This は is read wa: … て^は いけません (te-wa), not te-ha.",
          "It is strong: do not use it with superiors. Prefer a softer すみません、ここは ちょっと…"
        ]
      },
      {
        id: "te-imasu-joutai",
        title: "V-て います (estado e resultado)", title_en: "V-て います (state and result)",
        pat: "V-て います",
        short: "estado que continua: morar, ser casado, saber", short_en: "a continuing state: to live, to be married, to know",
        mean: "Com certos verbos, V-て います não mostra ação em andamento, mas um <strong>estado</strong> que resulta de uma ação: {住|す}んで います (moro), {結婚|けっこん}して います (sou casado), {知|し}って います (sei). O contrário de {知|し}って います é <strong>{知|し}りません</strong>.", mean_en: "With certain verbs, V-て います does not show an ongoing action but a <strong>state</strong> that results from an action: {住|す}んで います (I live), {結婚|けっこん}して います (I'm married), {知|し}って います (I know). The opposite of {知|し}って います is <strong>{知|し}りません</strong>.",
        ex: [
          { jp: "わたしは {東京|とうきょう}に {住|す}んで います。", romaji: "Watashiha Toukyou ni sunde imasu.", pt: "Eu moro em Tóquio.", en: "I live in Tokyo." },
          { jp: "マリアさんは {結婚|けっこん}して います。", romaji: "Maria-san wa kekkon shite imasu.", pt: "A Maria é casada.", en: "Maria is married." },
          { jp: "あの {人|ひと}を {知|し}って いますか。<br>…いいえ、{知|し}りません。", romaji: "Ano hito o shitte imasu ka. ...Iie, shirimasen.", pt: "Você conhece aquela pessoa? ...Não, não conheço.", en: "Do you know that person? ...No, I don't." }
        ],
        contrast: {
          rows: [
            { label: "ação em andamento", label_en: "ongoing action", jp: "{今|いま}、{食|た}べて います。", pt: "Agora estou comendo.", en: "I am eating now." },
            { label: "estado", label_en: "state", jp: "{大阪|おおさか}に {住|す}んで います。", pt: "Moro em Osaka.", en: "I live in Osaka." }
          ],
          note: "Para saber qual é, veja o verbo: comer pode ser “em andamento”; morar, casar e saber indicam estado.", note_en: "To tell which one it is, look at the verb: eat can be “ongoing”; live, marry and know mark a state."
        },
        trap: [
          "O contrário de {知|し}って います não é {知|し}って いません: diz-se {知|し}りません.",
          "Com {住|す}みます, o presente fala de “vou morar”; para “moro”, use sempre {住|す}んで います."
        ],
        trap_en: [
          "The opposite of {知|し}って います is not {知|し}って いません: say {知|し}りません.",
          "With {住|す}みます, the plain present sounds like “will live”; for “I live”, always use {住|す}んで います."
        ]
      }
    ]
  },
  renshuuA: {
    title: "{練習|れんしゅう} A", title_en: "{練習|れんしゅう} A",
    exercises: [
      {
        desc: "1. Passe para V-ても いいですか", desc_en: "1. Change to V-ても いいですか",
        questions: [
          { q: "{座|すわ}ります ➔", a: "{座|すわ}っても いいですか", romaji: "suwattemo ii desu ka", pt: "Posso sentar?", en: "May I sit?" },
          { q: "{撮|と}ります ➔", a: "{撮|と}っても いいですか", romaji: "tottemo ii desu ka", pt: "Posso tirar?", en: "May I take?" },
          { q: "{飲|の}みます ➔", a: "{飲|の}んでも いいですか", romaji: "nondemo ii desu ka", pt: "Posso beber?", en: "May I drink?" }
        ]
      },
      {
        desc: "2. Escolha: も, は, ください ou います", desc_en: "2. Choose: も, は, ください or います",
        questions: [
          { q: "ここで {写真|しゃしん}を {撮|と}っても（　　）ですか。(pode?)", q_en: "ここで {写真|しゃしん}を {撮|と}っても（　　）ですか。(may I?)", a: "いい", romaji: "ii", pt: "いい", en: "いい" },
          { q: "{私|わたし}は {大阪|おおさか}に {住|す}んで（　　）。", a: "います", romaji: "imasu", pt: "Estado", en: "State" }
        ]
      }
    ]
  },
  renshuuB: {
    title: "{練習|れんしゅう} B", title_en: "{練習|れんしゅう} B",
    exercises: [
      {
        desc: "1. Responda", desc_en: "1. Answer",
        questions: [
          { q: "A: あの {人|ひと}を {知|し}って いますか。<br>B: いいえ、＿＿＿＿＿＿。", a: "{知|し}りません", romaji: "shirimasen", pt: "Não conheço", en: "I don't know" },
          { q: "A: ここで {写真|しゃしん}を {撮|と}っても いいですか。<br>B: すみません、＿＿＿＿ いけません。(tirar)", q_en: "A: ここで {写真|しゃしん}を {撮|と}っても いいですか。<br>B: すみません、＿＿＿＿ いけません。(take)", a: "{撮|と}っては", romaji: "totteha", pt: "Proibição", en: "Prohibition" }
        ]
      }
    ]
  },
  mondai: {
    title: "{問題|もんだい} (Problemas / Avaliação)", title_en: "{問題|もんだい} (Problems / Assessment)",
    exercises: [
      {
        desc: "1. (　　) に {正|ただ}しい ことばを {入|い}れなさい。", desc_en: "1. Fill in the blank with the right word.",
        questions: [
          { q: "ここで {食|た}べて（　　）いいですか。", a: "も", romaji: "mo", pt: "Permissão: も", en: "Permission: も" },
          { q: "{私|わたし}は {結婚|けっこん}して（　　）。", a: "います", romaji: "imasu", pt: "Estado", en: "State" },
          { q: "{先生|せんせい}の {名前|なまえ}を {知|し}って いますか。<br>…いいえ、（　　）。", a: "{知|し}りません", romaji: "shirimasen", pt: "Não sei", en: "I don't know" }
        ]
      },
      {
        desc: "2. {読|よ}み{物|もの} (Leitura): {図書館|としょかん}", desc_en: "2. Reading: library",
        questions: [
          {
            q: `<div class="reading-box">ここは {図書館|としょかん}です。ここで {話|はな}して^は いけません。{本|ほん}を {読|よ}んでも いいです。わたしは {近|ちか}くに {住|す}んで います。</div>{質問|しつもん}: {図書館|としょかん}で {何|なに}を しても いいですか。<br>➔ ＿＿＿＿＿＿＿＿ いいです。`,
            a: "{本|ほん}を {読|よ}んでも",
            romaji: "hon o yondemo",
            pt: "Ler livros.", en: "Reading books."
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
          { tokens: ["{写真|しゃしん}を", "{撮|と}っても", "いいですか。"], pt: "Posso tirar uma foto?", en: "May I take a photo?", romaji: "Shashin o tottemo ii desu ka." },
          { tokens: ["ここで", "{話|はな}して^は", "いけません。"], pt: "Aqui não se pode conversar.", en: "You must not talk here.", romaji: "Koko de hanashite wa ikemasen." },
          { tokens: ["{東京|とうきょう}に", "{住|す}んで", "います。"], pt: "Moro em Tóquio.", en: "I live in Tokyo.", romaji: "Toukyou ni sunde imasu." }
        ]
      }
    ]
  }
};
