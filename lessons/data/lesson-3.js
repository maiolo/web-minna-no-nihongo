// Dados da lição 3. Formato descrito no README.md.
window.lessonData = {
  vocab: {
    title: "{語彙|ごい} (Vocabulário)", title_en: "{語彙|ごい} (Vocabulary)",
    items: [
      { jp: "ここ", romaji: "koko", pt: "Aqui", en: "Here" },
      { jp: "そこ", romaji: "soko", pt: "Aí (perto de quem ouve)", en: "There (near the listener)" },
      { jp: "あそこ", romaji: "asoko", pt: "Ali, lá (longe dos dois)", en: "Over there (far from both)" },
      { jp: "どこ", romaji: "doko", pt: "Onde", en: "Where" },
      { jp: "こちら", romaji: "kochira", pt: "Aqui, este lado; esta pessoa (educado)", en: "This way, here; this person (polite)" },
      { jp: "そちら", romaji: "sochira", pt: "Aí, esse lado (educado)", en: "That way, there (polite)" },
      { jp: "あちら", romaji: "achira", pt: "Ali, aquele lado (educado)", en: "Over there, that way (polite)" },
      { jp: "どちら", romaji: "dochira", pt: "Onde, qual lado, qual dos dois (educado)", en: "Where, which way, which of the two (polite)" },
      { jp: "{教室|きょうしつ}", romaji: "kyoushitsu", pt: "Sala de aula", en: "Classroom" },
      { jp: "{食堂|しょくどう}", romaji: "shokudou", pt: "Refeitório, restaurante simples", en: "Cafeteria, dining hall" },
      { jp: "{受付|うけつけ}", romaji: "uketsuke", pt: "Recepção", en: "Reception desk" },
      { jp: "お{手洗|てあら}い", romaji: "otearai", pt: "Banheiro (educado)", en: "Restroom (polite)" },
      { jp: "{階段|かいだん}", romaji: "kaidan", pt: "Escada", en: "Stairs" },
      { jp: "{部屋|へや}", romaji: "heya", pt: "Quarto, sala, cômodo", en: "Room" },
      { jp: "{駅|えき}", romaji: "eki", pt: "Estação de trem", en: "Train station" },
      { jp: "{会社|かいしゃ}", romaji: "kaisha", pt: "Empresa", en: "Company" },
      { jp: "{銀行|ぎんこう}", romaji: "ginkou", pt: "Banco", en: "Bank" },
      { jp: "デパート", romaji: "depaato", pt: "Loja de departamentos", en: "Department store" },
      { jp: "お{国|くに}", romaji: "okuni", pt: "País de origem (do outro, educado)", en: "Your country (polite, of the other person)" },
      { jp: "{靴|くつ}", romaji: "kutsu", pt: "Sapatos", en: "Shoes" },
      { jp: "いくら", romaji: "ikura", pt: "Quanto custa", en: "How much" },
      { jp: "〜{円|えん}", romaji: "en", pt: "〜 ienes", en: "〜 yen" },
      { jp: "{百|ひゃく}", romaji: "hyaku", pt: "Cem", en: "Hundred" },
      { jp: "{千|せん}", romaji: "sen", pt: "Mil", en: "Thousand" },
      { jp: "{万|まん}", romaji: "man", pt: "Dez mil", en: "Ten thousand" },
      { jp: "ください", romaji: "kudasai", pt: "Por favor, dê-me (depois de を)", en: "Please give me (after を)" },
      { jp: "じゃ", romaji: "ja", pt: "Então, nesse caso", en: "Well then, in that case" }
    ]
  },
  gramatica: {
    title: "{文法|ぶんぽう} (Gramática)", title_en: "{文法|ぶんぽう} (Grammar)",
    intro: "Quatro pontos para dizer onde as coisas ficam, de onde são e quanto custam. Cada cartão traz o modelo de frase, a explicação, os exemplos, uma comparação com o que é parecido e os erros mais comuns.", intro_en: "Four points for saying where things are, where they are from and how much they cost. Each card gives the sentence pattern, the explanation, the examples, a comparison with what looks similar and the most common mistakes.",
    points: [
      {
        id: "koko-soko-asoko",
        title: "ここ・そこ・あそこ・どこ", title_en: "ここ・そこ・あそこ・どこ",
        pat: "N^は ここ／そこ／あそこ です<br>ここ／そこ／あそこ^は N です",
        short: "lugares: aqui, aí, ali", short_en: "places: here, there, over there",
        mean: "Quatro palavras para lugares, com a mesma lógica de distância de これ・それ・あれ: <strong>ここ</strong> perto de quem fala, <strong>そこ</strong> perto de quem ouve, <strong>あそこ</strong> longe dos dois. <strong>どこ</strong> pergunta “onde”.", mean_en: "Four words for places, with the same distance logic as これ・それ・あれ: <strong>ここ</strong> near the speaker, <strong>そこ</strong> near the listener, <strong>あそこ</strong> far from both. <strong>どこ</strong> asks “where”.",
        rule: "Para dizer onde algo fica, a ordem é N^は ＋ lugar ＋ です. Para dizer o que é um lugar, inverta: lugar^は ＋ N ＋ です. A pergunta é N^は どこですか。", rule_en: "To say where something is, the order is N^は ＋ place ＋ です. To say what a place is, swap it: place^は ＋ N ＋ です. The question is N^は どこですか。",
        ex: [
          { jp: "ここ^は {教室|きょうしつ}です。", romaji: "Koko wa kyoushitsu desu.", pt: "Aqui é a sala de aula.", en: "This is the classroom." },
          { jp: "{食堂|しょくどう}^は あそこです。", romaji: "Shokudou wa asoko desu.", pt: "O refeitório fica ali.", en: "The cafeteria is over there." },
          { jp: "お{手洗|てあら}い^は どこですか。<br>…そこです。", romaji: "Otearai wa doko desu ka. ...Soko desu.", pt: "Onde é o banheiro? ...É aí.", en: "Where is the restroom? ...It is there." }
        ],
        contrast: {
          rows: [
            { label: "onde algo fica (N^は lugar)", label_en: "where something is (N^は place)", jp: "お{手洗|てあら}い^は あそこです。", pt: "O banheiro fica ali.", en: "The restroom is over there." },
            { label: "o que é um lugar (lugar^は N)", label_en: "what a place is (place^は N)", jp: "あそこ^は お{手洗|てあら}いです。", pt: "Ali é o banheiro.", en: "Over there is the restroom." }
          ],
          note: "É a mesma informação, mas o que vem no início é o tema, aquilo de que se fala. Escolha de acordo com o que o outro quer saber.", note_en: "It is the same information, but what comes first is the topic, what you are talking about. Choose according to what the other person wants to know."
        },
        trap: [
          "Não há verbo “estar” aqui: o japonês usa です (os verbos de existência あります・います vêm numa lição posterior).",
          "Para perguntar onde N fica, o tema é N: N^は どこですか。 Não coloque どこ no começo."
        ],
        trap_en: [
          "There is no verb “to be located” here: Japanese uses です (the existence verbs あります・います come in a later lesson).",
          "To ask where N is, the topic is N: N^は どこですか。 Do not put どこ at the start."
        ]
      },
      {
        id: "kochira",
        title: "こちら・そちら・あちら・どちら", title_en: "こちら・そちら・あちら・どちら",
        pat: "こちら／そちら／あちら／どちら",
        short: "lado ou lugar, de modo educado; apresentar pessoas", short_en: "side or place, politely; introducing people",
        mean: "São as formas educadas de ここ・そこ・あそこ・どこ. Também servem para direção (“por este lado”) e, no caso de こちら, para apresentar uma pessoa.", mean_en: "They are the polite forms of ここ・そこ・あそこ・どこ. They also work for direction (“this way”) and, in the case of こちら, for introducing a person.",
        rule: "Use no trabalho, com clientes, com desconhecidos. <strong>どちら</strong> também pergunta “de que país”: お{国|くに}^は どちらですか。", rule_en: "Use them at work, with customers and with strangers. <strong>どちら</strong> also asks “which country”: お{国|くに}^は どちらですか。",
        ex: [
          { jp: "お{手洗|てあら}い^は あちらです。", romaji: "Otearai wa achira desu.", pt: "O banheiro é por ali (educado).", en: "The restroom is that way (polite)." },
          { jp: "{食堂|しょくどう}^は どちらですか。<br>…そちらです。", romaji: "Shokudou wa dochira desu ka. ...Sochira desu.", pt: "Onde fica o refeitório? ...É por aí.", en: "Where is the cafeteria? ...It is that way." },
          { jp: "こちら^は {田中|たなか}さんです。<br>はじめまして。どうぞ よろしく。", romaji: "Kochira wa Tanaka-san desu. Hajimemashite. Douzo yoroshiku.", pt: "Este é o Sr. Tanaka. Muito prazer.", en: "This is Mr. Tanaka. Nice to meet you." },
          { jp: "お{国|くに}^は どちらですか。<br>…ブラジルです。", romaji: "Okuni wa dochira desu ka. ...Burajiru desu.", pt: "De que país o senhor é? ...Do Brasil.", en: "Which country are you from? ...Brazil." }
        ],
        contrast: {
          rows: [
            { label: "ここ (comum)", label_en: "ここ (everyday)", jp: "お{手洗|てあら}い^は そこです。", pt: "O banheiro é aí (comum).", en: "The restroom is there (casual)." },
            { label: "こちら (educado)", label_en: "こちら (polite)", jp: "お{手洗|てあら}い^は そちらです。", pt: "O banheiro é por aí (educado).", en: "The restroom is that way (polite)." }
          ],
          note: "A informação é a mesma. No balcão de uma loja ou ao receber visitas, a forma educada passa mais respeito.", note_en: "The information is the same. At a shop counter or when receiving guests, the polite form shows more respect."
        },
        trap: [
          "Para apresentar uma pessoa use こちら, não ここ: こちら^は {田中|たなか}さんです。",
          "どちら serve para “qual dos dois?” e “onde?”: o sentido sai da frase."
        ],
        trap_en: [
          "To introduce a person use こちら, not ここ: こちら^は {田中|たなか}さんです。",
          "どちら means both “which of the two?” and “where?”: the sentence tells you which."
        ]
      },
      {
        id: "no-origem",
        title: "N1 の N2 (origem, marca) ・ どこの", title_en: "N1 の N2 (origin, brand) ・ どこの",
        pat: "País／empresa の N",
        short: "de onde é, quem fabrica", short_en: "where it is from, who makes it",
        mean: "A mesma の da lição anterior serve para origem e fabricante: {日本|にほん}の {車|くるま} (carro japonês), {会社|かいしゃ}の {時計|とけい} (relógio da empresa). Para perguntar a origem, use <strong>どこの</strong>.", mean_en: "The same の as in the previous lesson works for origin and maker: {日本|にほん}の {車|くるま} (a Japanese car), {会社|かいしゃ}の {時計|とけい} (the company's watch). To ask the origin, use <strong>どこの</strong>.",
        ex: [
          { jp: "これ^は イタリアの {靴|くつ}です。", romaji: "Kore wa itaria no kutsu desu.", pt: "Estes são sapatos italianos.", en: "These are Italian shoes." },
          { jp: "この {時計|とけい}^は どこの {時計|とけい}ですか。<br>…{日本|にほん}の {時計|とけい}です。", romaji: "Kono tokei wa doko no tokei desu ka. ...Nihon no tokei desu.", pt: "De onde é este relógio? ...É japonês.", en: "Where is this watch from? ...It is Japanese." },
          { jp: "あの {車|くるま}^は {日本|にほん}の {車|くるま}じゃ ありません。アメリカの {車|くるま}です。", romaji: "Ano kuruma wa Nihon no kuruma ja arimasen. Amerika no kuruma desu.", pt: "Aquele carro não é japonês. É americano.", en: "That car is not Japanese. It is American." }
        ],
        contrast: {
          rows: [
            { label: "だれの (de quem é)", label_en: "だれの (whose)", jp: "それ^は だれの {靴|くつ}ですか。", pt: "De quem são esses sapatos? (o dono)", en: "Whose shoes are those? (the owner)" },
            { label: "どこの (de onde é)", label_en: "どこの (where from)", jp: "それ^は どこの {靴|くつ}ですか。", pt: "De onde são esses sapatos? (origem ou marca)", en: "Where are those shoes from? (origin or brand)" }
          ],
          note: "A mesma estrutura, perguntas diferentes: だれの procura o dono; どこの procura a origem ou a marca.", note_en: "The same structure, different questions: だれの looks for the owner; どこの looks for the origin or brand."
        },
        trap: [
          "Confundir だれの e どこの muda a pergunta inteira: だれの é pessoa, どこの é lugar ou empresa.",
          "“Japonês” (coisa) é {日本|にほん}の, não {日本人|にほんじん}の: {日本人|にほんじん} é só para pessoas."
        ],
        trap_en: [
          "Mixing up だれの and どこの changes the whole question: だれの is a person, どこの is a place or company.",
          "“Japanese” (a thing) is {日本|にほん}の, not {日本人|にほんじん}の: {日本人|にほんじん} is only for people."
        ]
      },
      {
        id: "ikura",
        title: "いくらですか ・ N を ください ・ 〜{円|えん}", title_en: "いくらですか ・ N を ください ・ 〜{円|えん}",
        pat: "N^は いくらですか。<br>これを ください。",
        short: "preço e pedido de compra", short_en: "price and asking to buy",
        mean: "<strong>いくら</strong> pergunta o preço. <strong>N を ください</strong> é como se pede algo numa loja: “quero N, por favor”. A moeda é o iene: 〜{円|えん}.", mean_en: "<strong>いくら</strong> asks the price. <strong>N を ください</strong> is how you ask for something in a shop: “I would like N, please”. The currency is the yen: 〜{円|えん}.",
        rule: "Os números 100, 1000 e 10000 têm leituras especiais, principalmente 300, 600 e 800 (centenas) e 3000 e 8000 (milhares). O japonês conta de 10 mil em 10 mil: 12000 é “1 man 2 mil”.", rule_en: "The numbers 100, 1000 and 10000 have special readings, especially 300, 600 and 800 (hundreds) and 3000 and 8000 (thousands). Japanese counts in units of 10,000: 12,000 is “1 man 2 thousand”.",
        form: [
          { label: "Centenas", label_en: "Hundreds", text: "Cuidado com 300, 600 e 800.", text_en: "Watch out for 300, 600 and 800.", ex: [
            { tag: "100", jp: "{百|ひゃく}", romaji: "hyaku", pt: "cem", en: "one hundred" },
            { tag: "300", jp: "{三百|さんびゃく}", romaji: "sanbyaku", pt: "trezentos", en: "three hundred" },
            { tag: "600", jp: "{六百|ろっぴゃく}", romaji: "roppyaku", pt: "seiscentos", en: "six hundred" },
            { tag: "800", jp: "{八百|はっぴゃく}", romaji: "happyaku", pt: "oitocentos", en: "eight hundred" }
          ] },
          { label: "Milhares e dezenas de milhar", label_en: "Thousands and ten-thousands", text: "3000 e 8000 mudam; 10000 é “ichiman”.", text_en: "3,000 and 8,000 change; 10,000 is “ichiman”.", ex: [
            { tag: "1000", jp: "{千|せん}", romaji: "sen", pt: "mil", en: "one thousand" },
            { tag: "3000", jp: "{三千|さんぜん}", romaji: "sanzen", pt: "três mil", en: "three thousand" },
            { tag: "8000", jp: "{八千|はっせん}", romaji: "hassen", pt: "oito mil", en: "eight thousand" },
            { tag: "10000", jp: "{一万|いちまん}", romaji: "ichiman", pt: "dez mil", en: "ten thousand" }
          ] }
        ],
        ex: [
          { jp: "この {時計|とけい}^は いくらですか。<br>…{五千円|ごせんえん}です。", romaji: "Kono tokei wa ikura desu ka. ...Gosen-en desu.", pt: "Quanto custa este relógio? ...Custa 5000 ienes.", en: "How much is this watch? ...It is 5,000 yen." },
          { jp: "あの {靴|くつ}^は いくらですか。<br>…{八千円|はっせんえん}です。", romaji: "Ano kutsu wa ikura desu ka. ...Hassen-en desu.", pt: "Quanto custam aqueles sapatos? ...8000 ienes.", en: "How much are those shoes? ...8,000 yen." },
          { jp: "この かばん^は いくらですか。<br>…{一万二千円|いちまんにせんえん}です。<br>じゃ、これを ください。", romaji: "Kono kaban wa ikura desu ka. ...Ichiman nisen-en desu. Ja, kore o kudasai.", pt: "Quanto custa esta bolsa? ...12 000 ienes. Então, vou levar esta.", en: "How much is this bag? ...12,000 yen. Then I will take this one." }
        ],
        contrast: {
          rows: [
            { label: "いくら (preço)", label_en: "いくら (price)", jp: "それ^は いくらですか。", pt: "Quanto custa isso?", en: "How much is that?" },
            { label: "{何|なん} (o que é)", label_en: "{何|なん} (what it is)", jp: "それ^は {何|なん}ですか。", pt: "O que é isso?", en: "What is that?" }
          ],
          note: "いくら só pergunta preço (ou valor em dinheiro). Para o que a coisa é, use {何|なん}.", note_en: "いくら only asks about price (or an amount of money). To ask what something is, use {何|なん}."
        },
        trap: [
          "Leituras especiais: 300 é さんびゃく (não さんひゃく), 600 é ろっぴゃく, 800 é はっぴゃく, 3000 é さんぜん e 8000 é はっせん.",
          "O japonês agrupa de 10 mil em 10 mil: 12000 é {一万二千|いちまんにせん} (1 man + 2 mil), e não “doze mil”."
        ],
        trap_en: [
          "Special readings: 300 is さんびゃく (not さんひゃく), 600 is ろっぴゃく, 800 is はっぴゃく, 3000 is さんぜん and 8000 is はっせん.",
          "Japanese groups by 10,000: 12,000 is {一万二千|いちまんにせん} (1 man + 2 thousand), not “twelve thousand”."
        ]
      }
    ]
  },
  renshuuA: {
    title: "{練習|れんしゅう} A", title_en: "{練習|れんしゅう} A",
    exercises: [
      {
        desc: "1. Os números: escreva a leitura em hiragana", desc_en: "1. Numbers: write the reading in hiragana",
        questions: [
          { q: "300 ➔", a: "さんびゃく", romaji: "sanbyaku", pt: "300", en: "300" },
          { q: "600 ➔", a: "ろっぴゃく", romaji: "roppyaku", pt: "600", en: "600" },
          { q: "800 ➔", a: "はっぴゃく", romaji: "happyaku", pt: "800", en: "800" },
          { q: "3000 ➔", a: "さんぜん", romaji: "sanzen", pt: "3000", en: "3,000" },
          { q: "8000 ➔", a: "はっせん", romaji: "hassen", pt: "8000", en: "8,000" },
          { q: "10000 ➔", a: "いちまん", romaji: "ichiman", pt: "10 000", en: "10,000" }
        ]
      }
    ]
  },
  renshuuB: {
    title: "{練習|れんしゅう} B", title_en: "{練習|れんしゅう} B",
    exercises: [
      {
        desc: "1. ここ, そこ, あそこ ou どこ?", desc_en: "1. ここ, そこ, あそこ or どこ?",
        questions: [
          { q: "お{手洗|てあら}いは （　　）ですか。 (você não sabe onde fica)", q_en: "お{手洗|てあら}いは （　　）ですか。 (you do not know where it is)", a: "どこ", romaji: "doko", pt: "Onde é o banheiro?", en: "Where is the restroom?" },
          { q: "（　　）は {教室|きょうしつ}です。 (o lugar onde você está)", q_en: "（　　）は {教室|きょうしつ}です。 (the place where you are)", a: "ここ", romaji: "koko", pt: "Aqui é a sala de aula", en: "This is the classroom" },
          { q: "{食堂|しょくどう}は （　　）です。 (longe dos dois)", q_en: "{食堂|しょくどう}は （　　）です。 (far from both)", a: "あそこ", romaji: "asoko", pt: "O refeitório fica ali", en: "The cafeteria is over there" }
        ]
      },
      {
        desc: "2. Responda sobre o preço (escreva o valor por extenso, em hiragana ou kanji)", desc_en: "2. Answer about the price (write the amount out, in hiragana or kanji)",
        questions: [
          { q: "A: この {靴|くつ}は いくらですか。<br>B: （3000{円|えん}）＿＿＿＿＿＿＿＿。", a: "{三千円|さんぜんえん}です", romaji: "sanzen-en desu", pt: "3000 ienes", en: "3,000 yen" },
          { q: "A: この かばんは いくらですか。<br>B: （600{円|えん}）＿＿＿＿＿＿＿＿。", a: "{六百円|ろっぴゃくえん}です", romaji: "roppyaku-en desu", pt: "600 ienes", en: "600 yen" },
          { q: "A: その {時計|とけい}は いくらですか。<br>B: （12000{円|えん}）＿＿＿＿＿＿＿＿。", a: "{一万二千円|いちまんにせんえん}です", romaji: "ichiman nisen-en desu", pt: "12 000 ienes", en: "12,000 yen" }
        ]
      }
    ]
  },
  mondai: {
    title: "{問題|もんだい} (Problemas / Avaliação)", title_en: "{問題|もんだい} (Problems / Assessment)",
    exercises: [
      {
        desc: "1. (　　) に {正|ただ}しい ことばを {入|い}れなさい。 (どこ・どこの・だれの・いくら・こちら)", desc_en: "1. Fill in the blank with the right word. (どこ・どこの・だれの・いくら・こちら)",
        questions: [
          { q: "この {時計|とけい}は （　　）ですか。…{五千円|ごせんえん}です。", a: "いくら", romaji: "ikura", pt: "Pergunta pelo preço", en: "Asks for the price" },
          { q: "この かばんは （　　）かばんですか。…イタリアの かばんです。", a: "どこの", romaji: "doko no", pt: "Pergunta pela origem", en: "Asks for the origin" },
          { q: "その かさは （　　）ですか。…マリアさんのです。", a: "だれの", romaji: "dare no", pt: "Pergunta pelo dono", en: "Asks for the owner" },
          { q: "（　　）は {田中|たなか}さんです。 (ao apresentar uma pessoa)", q_en: "（　　）は {田中|たなか}さんです。 (when introducing a person)", a: "こちら", romaji: "kochira", pt: "Este é o Sr. Tanaka", en: "This is Mr. Tanaka" }
        ]
      },
      {
        desc: "2. {読|よ}み{物|もの} (Leitura): デパートで", desc_en: "2. Reading: at the department store",
        questions: [
          {
            q: `<div class="reading-box">A: すみません。{靴|くつ}は どこですか。<br>B: {靴|くつ}は あちらです。<br>A: ありがとう ございます。…この {靴|くつ}は いくらですか。<br>B: {八千円|はっせんえん}です。<br>A: じゃ、これを ください。</div>{質問|しつもん}: {靴|くつ}は いくらですか。<br>➔ ＿＿＿＿＿＿＿＿。`,
            a: "{八千円|はっせんえん}です",
            romaji: "hassen-en desu",
            pt: "São 8000 ienes.", en: "It is 8,000 yen."
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
          { tokens: ["お{手洗|てあら}いは", "どこですか。"], pt: "Onde é o banheiro?", en: "Where is the restroom?", romaji: "Otearai wa doko desu ka." },
          { tokens: ["{食堂|しょくどう}は", "あちらです。"], pt: "O refeitório é por ali.", en: "The cafeteria is that way.", romaji: "Shokudou wa achira desu." },
          { tokens: ["この", "{時計|とけい}は", "いくらですか。"], pt: "Quanto custa este relógio?", en: "How much is this watch?", romaji: "Kono tokei wa ikura desu ka." },
          { tokens: ["じゃ、", "これを", "ください。"], pt: "Então, vou levar este.", en: "Then I will take this one.", romaji: "Ja, kore o kudasai." }
        ]
      }
    ]
  }
};
