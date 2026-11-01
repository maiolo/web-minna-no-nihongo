// Dados da lição 6. Formato descrito no README.md.
window.lessonData = {
  vocab: {
    title: "{語彙|ごい} (Vocabulário)", title_en: "{語彙|ごい} (Vocabulary)",
    items: [
      { jp: "{食|た}べます", romaji: "tabemasu", pt: "Comer", en: "To eat" },
      { jp: "{飲|の}みます", romaji: "nomimasu", pt: "Beber", en: "To drink" },
      { jp: "{見|み}ます", romaji: "mimasu", pt: "Ver, assistir", en: "To see, to watch" },
      { jp: "{聞|き}きます", romaji: "kikimasu", pt: "Ouvir, escutar", en: "To listen, to hear" },
      { jp: "{読|よ}みます", romaji: "yomimasu", pt: "Ler", en: "To read" },
      { jp: "{書|か}きます", romaji: "kakimasu", pt: "Escrever", en: "To write" },
      { jp: "{買|か}います", romaji: "kaimasu", pt: "Comprar", en: "To buy" },
      { jp: "{撮|と}ります", romaji: "torimasu", pt: "Tirar (foto)", en: "To take (a photo)" },
      { jp: "します", romaji: "shimasu", pt: "Fazer, praticar (esporte, jogo)", en: "To do, to play (sport, game)" },
      { jp: "{朝|あさ}ごはん", romaji: "asagohan", pt: "Café da manhã", en: "Breakfast" },
      { jp: "{昼|ひる}ごはん", romaji: "hirugohan", pt: "Almoço", en: "Lunch" },
      { jp: "{晩|ばん}ごはん", romaji: "bangohan", pt: "Jantar", en: "Dinner" },
      { jp: "パン", romaji: "pan", pt: "Pão", en: "Bread" },
      { jp: "{卵|たまご}", romaji: "tamago", pt: "Ovo", en: "Egg" },
      { jp: "{肉|にく}", romaji: "niku", pt: "Carne", en: "Meat" },
      { jp: "{魚|さかな}", romaji: "sakana", pt: "Peixe", en: "Fish" },
      { jp: "{野菜|やさい}", romaji: "yasai", pt: "Verdura, legume", en: "Vegetables" },
      { jp: "{果物|くだもの}", romaji: "kudamono", pt: "Fruta", en: "Fruit" },
      { jp: "{水|みず}", romaji: "mizu", pt: "Água", en: "Water" },
      { jp: "お{茶|ちゃ}", romaji: "ocha", pt: "Chá", en: "Tea" },
      { jp: "ジュース", romaji: "juusu", pt: "Suco", en: "Juice" },
      { jp: "{映画|えいが}", romaji: "eiga", pt: "Filme, cinema", en: "Movie, cinema" },
      { jp: "{手紙|てがみ}", romaji: "tegami", pt: "Carta", en: "Letter" },
      { jp: "サッカー", romaji: "sakkaa", pt: "Futebol", en: "Soccer, football" },
      { jp: "テニス", romaji: "tenisu", pt: "Tênis", en: "Tennis" },
      { jp: "{図書館|としょかん}", romaji: "toshokan", pt: "Biblioteca", en: "Library" },
      { jp: "{公園|こうえん}", romaji: "kouen", pt: "Parque", en: "Park" },
      { jp: "{何|なに}", romaji: "nani", pt: "O que (antes de を, が, も)", en: "What (before を, が, も)" },
      { jp: "いっしょに", romaji: "issho ni", pt: "Juntos, junto", en: "Together" },
      { jp: "ちょっと", romaji: "chotto", pt: "Um pouco; (recusa suave) é que…", en: "A little; (soft refusal) it is just that…" },
      { jp: "いいですね", romaji: "ii desu ne", pt: "Que bom!, boa ideia!", en: "Sounds good!, nice!" }
    ]
  },
  gramatica: {
    title: "{文法|ぶんぽう} (Gramática)", title_en: "{文法|ぶんぽう} (Grammar)",
    intro: "Quatro pontos para dizer o que se faz, onde se faz e como convidar alguém. Cada cartão traz o modelo de frase, a explicação, os exemplos, uma comparação com o que é parecido e os erros mais comuns.", intro_en: "Four points for saying what you do, where you do it and how to invite someone. Each card gives the sentence pattern, the explanation, the examples, a comparison with what looks similar and the most common mistakes.",
    points: [
      {
        id: "o-verbo",
        title: "N を V ます (objeto direto)", title_en: "N を V ます (direct object)",
        pat: "N を V ます",
        short: "o que sofre a ação", short_en: "what receives the action",
        mean: "<strong>を</strong> marca o objeto direto: aquilo sobre o qual o verbo age. “Como pão”, “leio um livro”, “vejo um filme”.", mean_en: "<strong>を</strong> marks the direct object: what the verb acts on. “I eat bread”, “I read a book”, “I watch a movie”.",
        rule: "Como partícula, を lê-se <strong>o</strong>. A pergunta é {何|なに}を V ますか。 Atenção: {何|なに} antes de を (e de が, も) é <strong>なに</strong>; antes de です é <strong>なん</strong>.", rule_en: "As a particle, を is read <strong>o</strong>. The question is {何|なに}を V ますか。 Note: {何|なに} before を (and が, も) is <strong>なに</strong>; before です it is <strong>なん</strong>.",
        ex: [
          { jp: "パンを {食|た}べます。", romaji: "Pan o tabemasu.", pt: "Eu como pão.", en: "I eat bread." },
          { jp: "{毎朝|まいあさ} お{茶|ちゃ}を {飲|の}みます。", romaji: "Maiasa ocha o nomimasu.", pt: "Toda manhã tomo chá.", en: "Every morning I drink tea." },
          { jp: "{昨日|きのう}、{映画|えいが}を {見|み}ました。", romaji: "Kinou, eiga o mimashita.", pt: "Ontem vi um filme.", en: "I watched a movie yesterday." },
          { jp: "{何|なに}を {食|た}べますか。<br>…{魚|さかな}を {食|た}べます。", romaji: "Nani o tabemasu ka. ...Sakana o tabemasu.", pt: "O que você come? ...Como peixe.", en: "What do you eat? ...I eat fish." }
        ],
        contrast: {
          rows: [
            { label: "を (o que sofre a ação)", label_en: "を (what receives the action)", jp: "パンを {食|た}べます。", pt: "Como pão.", en: "I eat bread." },
            { label: "は (objeto como tema, em contraste)", label_en: "は (object as topic, in contrast)", jp: "パン^は {食|た}べません。", pt: "Pão eu não como (mas outra coisa sim).", en: "Bread I do not eat (but something else I do)." }
          ],
          note: "Na frase negativa, o japonês costuma trocar を por は para contrastar: “pão não, mas outra coisa sim”.", note_en: "In negative sentences Japanese often swaps を for は to contrast: “not bread, but something else”."
        },
        trap: [
          "を só aparece como partícula e lê-se “o”: パンを = pan <strong>o</strong>.",
          "{何|なに} (antes de を) e {何|なん} (antes de です) têm leituras diferentes: {何|なに}を {食|た}べますか, mas これは {何|なん}ですか."
        ],
        trap_en: [
          "を only appears as a particle and is read “o”: パンを = pan <strong>o</strong>.",
          "{何|なに} (before を) and {何|なん} (before です) are read differently: {何|なに}を {食|た}べますか, but これは {何|なん}ですか."
        ]
      },
      {
        id: "de-lugar",
        title: "N (lugar) で V ます", title_en: "N (place) で V ます",
        pat: "{場所|ばしょ}で V ます",
        short: "onde a ação acontece", short_en: "where the action takes place",
        mean: "<strong>で</strong> marca o lugar onde a ação se realiza: “estudo <em>na</em> biblioteca”, “almoço <em>no</em> refeitório”.", mean_en: "<strong>で</strong> marks the place where the action is carried out: “I study <em>in</em> the library”, “I have lunch <em>in</em> the cafeteria”.",
        ex: [
          { jp: "{食堂|しょくどう}で ごはんを {食|た}べます。", romaji: "Shokudou de gohan o tabemasu.", pt: "Como no refeitório.", en: "I eat at the cafeteria." },
          { jp: "{図書館|としょかん}で {本|ほん}を {読|よ}みます。", romaji: "Toshokan de hon o yomimasu.", pt: "Leio livros na biblioteca.", en: "I read books at the library." },
          { jp: "{公園|こうえん}で サッカーを します。", romaji: "Kouen de sakkaa o shimasu.", pt: "Jogo futebol no parque.", en: "I play soccer in the park." },
          { jp: "どこで {写真|しゃしん}を {撮|と}りましたか。<br>…{京都|きょうと}で {撮|と}りました。", romaji: "Doko de shashin o torimashita ka. ...Kyouto de torimashita.", pt: "Onde você tirou a foto? ...Tirei em Kyoto.", en: "Where did you take the photo? ...I took it in Kyoto." }
        ],
        contrast: {
          rows: [
            { label: "で (onde acontece)", label_en: "で (where it happens)", jp: "{学校|がっこう}で {勉強|べんきょう}します。", pt: "Estudo na escola (a ação ocorre lá).", en: "I study at school (the action takes place there)." },
            { label: "へ (para onde vai)", label_en: "へ (where to)", jp: "{学校|がっこう}^へ {行|い}きます。", pt: "Vou à escola (movimento até lá).", en: "I go to school (movement toward it)." }
          ],
          note: "Pergunte: o lugar é o palco da ação (で) ou o destino do movimento (へ)? Com ir, vir e voltar, o destino leva へ.", note_en: "Ask: is the place the stage of the action (で) or the destination of the movement (へ)? With go, come and return, the destination takes へ."
        },
        trap: [
          "Não use に para o palco da ação: errado {図書館|としょかん}に {本|ほん}を {読|よ}みます。 Certo: {図書館|としょかん}で.",
          "O mesmo で aparece com meio de transporte (lição 5) e com ferramenta (lição 7): é o substantivo que mostra qual é o sentido."
        ],
        trap_en: [
          "Do not use に for the stage of the action: wrong {図書館|としょかん}に {本|ほん}を {読|よ}みます。 Right: {図書館|としょかん}で.",
          "The same で appears with means of transport (lesson 5) and with tools (lesson 7): the noun shows which sense is meant."
        ]
      },
      {
        id: "masen-ka-mashou",
        title: "V ませんか ・ V ましょう (convite e proposta)", title_en: "V ませんか ・ V ましょう (invitation and proposal)",
        pat: "V ませんか。<br>V ましょう。",
        short: "convidar e aceitar: “que tal…?”, “vamos!”", short_en: "inviting and accepting: “how about…?”, “let's!”",
        mean: "<strong>V ませんか</strong> é um convite suave: “você não gostaria de…?”. <strong>V ましょう</strong> propõe ou aceita: “vamos…!”.", mean_en: "<strong>V ませんか</strong> is a gentle invitation: “would you like to…?”. <strong>V ましょう</strong> proposes or accepts: “let's…!”.",
        rule: "Aceite com ええ、いいですね。 ou ええ、V ましょう。 Para recusar com delicadeza: すみません、ちょっと…。 (sem dizer o motivo completo). Com <strong>いっしょに</strong> (juntos), o convite fica mais claro.", rule_en: "Accept with ええ、いいですね。 or ええ、V ましょう。 To decline politely: すみません、ちょっと…。 (without giving the full reason). With <strong>いっしょに</strong> (together), the invitation is clearer.",
        ex: [
          { jp: "いっしょに {映画|えいが}を {見|み}ませんか。<br>…ええ、{見|み}ましょう。", romaji: "Issho ni eiga o mimasen ka. ...Ee, mimashou.", pt: "Que tal assistirmos a um filme juntos? ...Sim, vamos!", en: "How about watching a movie together? ...Yes, let's!" },
          { jp: "{明日|あした}、{友達|ともだち}と テニスを しませんか。<br>…すみません、{明日|あした}^は ちょっと…。", romaji: "Ashita, tomodachi to tenisu o shimasen ka. ...Sumimasen, ashita wa chotto...", pt: "Amanhã vou jogar tênis com amigos; quer vir? ...Desculpe, amanhã é que...", en: "I am playing tennis with friends tomorrow; would you like to join? ...Sorry, tomorrow is a bit..." },
          { jp: "{昼|ひる}ごはんを {食|た}べましょう。", romaji: "Hirugohan o tabemashou.", pt: "Vamos almoçar.", en: "Let's have lunch." }
        ],
        contrast: {
          rows: [
            { label: "V ますか (pergunta comum)", label_en: "V ますか (ordinary question)", jp: "{映画|えいが}を {見|み}ますか。", pt: "Você vê filmes? / Vai ver um filme?", en: "Do you watch movies? / Are you going to watch a movie?" },
            { label: "V ませんか (convite)", label_en: "V ませんか (invitation)", jp: "{映画|えいが}を {見|み}ませんか。", pt: "Quer ver um filme (comigo)?", en: "Would you like to watch a movie (with me)?" }
          ],
          note: "A forma negativa em pergunta soa mais delicada: deixa o outro livre para recusar. É por isso que o japonês convida assim.", note_en: "The negative form in a question sounds more tactful: it leaves the other person free to refuse. That is why Japanese invites this way."
        },
        trap: [
          "V ませんか é um convite, não uma pergunta sobre algo que a pessoa não faz. A resposta positiva é ええ、いいですね, e não はい、{見|み}ません。",
          "Para recusar, evite um “não” seco (いいえ、{見|み}ません)。 Prefira すみません、ちょっと…。"
        ],
        trap_en: [
          "V ませんか is an invitation, not a question about something the person does not do. The positive answer is ええ、いいですね, not はい、{見|み}ません。",
          "To decline, avoid a blunt “no” (いいえ、{見|み}ません)。 Prefer すみません、ちょっと…。"
        ]
      },
      {
        id: "o-shimasu",
        title: "N を します (praticar, fazer)", title_en: "N を します (to do, to play)",
        pat: "N を します",
        short: "esportes, jogos e atividades", short_en: "sports, games and activities",
        mean: "します é “fazer”, mas com esportes e jogos corresponde a “jogar/praticar”: サッカーを します = jogar futebol.", mean_en: "します is “to do”, but with sports and games it works as “to play”: サッカーを します = to play soccer.",
        rule: "Com substantivos de ação (<strong>{勉強|べんきょう}</strong>, <strong>{掃除|そうじ}</strong>, <strong>{洗濯|せんたく}</strong>), o を pode ser omitido: {勉強|べんきょう}します = {勉強|べんきょう}を します.", rule_en: "With action nouns (<strong>{勉強|べんきょう}</strong>, <strong>{掃除|そうじ}</strong>, <strong>{洗濯|せんたく}</strong>), を can be omitted: {勉強|べんきょう}します = {勉強|べんきょう}を します.",
        ex: [
          { jp: "{日曜日|にちようび}に サッカーを します。", romaji: "Nichiyoubi ni sakkaa o shimasu.", pt: "No domingo jogo futebol.", en: "On Sundays I play soccer." },
          { jp: "{何|なに}を しますか。<br>…テニスを します。", romaji: "Nani o shimasu ka. ...Tenisu o shimasu.", pt: "O que você vai fazer? ...Vou jogar tênis.", en: "What are you going to do? ...I am going to play tennis." },
          { jp: "{毎晩|まいばん} {日本語|にほんご}を {勉強|べんきょう}します。", romaji: "Maiban nihongo o benkyou shimasu.", pt: "Toda noite estudo japonês.", en: "Every evening I study Japanese." }
        ],
        contrast: {
          rows: [
            { label: "N を します", label_en: "N を します", jp: "{勉強|べんきょう}を します。", pt: "Faço estudo (estudo).", en: "I do study (I study)." },
            { label: "N します (sem を)", label_en: "N します (without を)", jp: "{勉強|べんきょう}します。", pt: "Estudo.", en: "I study." }
          ],
          note: "Com substantivos de ação, as duas formas significam o mesmo. Com esportes e jogos, o を é obrigatório.", note_en: "With action nouns the two forms mean the same. With sports and games, を is required."
        },
        trap: [
          "Para esportes e jogos use sempre を: サッカーを します, e não サッカーに します。",
          "します muda de sentido com o objeto: {勉強|べんきょう}を します (estudar), テニスを します (jogar), {何|なに}を しますか (o que fazer)."
        ],
        trap_en: [
          "For sports and games always use を: サッカーを します, not サッカーに します。",
          "します changes meaning with the object: {勉強|べんきょう}を します (to study), テニスを します (to play), {何|なに}を しますか (what to do)."
        ]
      }
    ]
  },
  renshuuA: {
    title: "{練習|れんしゅう} A", title_en: "{練習|れんしゅう} A",
    exercises: [
      {
        desc: "1. Complete com を, で ou へ", desc_en: "1. Fill in with を, で or へ",
        questions: [
          { q: "パン（　　）{食|た}べます。", a: "を", romaji: "o", pt: "Objeto direto", en: "Direct object" },
          { q: "{図書館|としょかん}（　　）{本|ほん}を {読|よ}みます。", a: "で", romaji: "de", pt: "Lugar da ação", en: "Place of the action" },
          { q: "{明日|あした}、{学校|がっこう}（　　）{行|い}きます。", a: "へ", romaji: "e", pt: "Destino do movimento", en: "Destination of the movement" },
          { q: "{公園|こうえん}（　　）サッカーを します。", a: "で", romaji: "de", pt: "Lugar da ação", en: "Place of the action" },
          { q: "{毎朝|まいあさ} {水|みず}（　　）{飲|の}みます。", a: "を", romaji: "o", pt: "Objeto direto", en: "Direct object" }
        ]
      },
      {
        desc: "2. Transforme em convite (V ませんか)", desc_en: "2. Turn it into an invitation (V ませんか)",
        questions: [
          { q: "{映画|えいが}を {見|み}ます ➔", a: "{映画|えいが}を {見|み}ませんか", romaji: "eiga o mimasen ka", pt: "Quer ver um filme?", en: "Would you like to watch a movie?" },
          { q: "テニスを します ➔", a: "テニスを しませんか", romaji: "tenisu o shimasen ka", pt: "Quer jogar tênis?", en: "Would you like to play tennis?" },
          { q: "{昼|ひる}ごはんを {食|た}べます ➔", a: "{昼|ひる}ごはんを {食|た}べませんか", romaji: "hirugohan o tabemasen ka", pt: "Quer almoçar?", en: "Would you like to have lunch?" },
          { q: "お{茶|ちゃ}を {飲|の}みます ➔", a: "お{茶|ちゃ}を {飲|の}みませんか", romaji: "ocha o nomimasen ka", pt: "Quer tomar um chá?", en: "Would you like some tea?" }
        ]
      }
    ]
  },
  renshuuB: {
    title: "{練習|れんしゅう} B", title_en: "{練習|れんしゅう} B",
    exercises: [
      {
        desc: "1. Aceite o convite com V ましょう", desc_en: "1. Accept the invitation with V ましょう",
        questions: [
          { q: "A: いっしょに {映画|えいが}を {見|み}ませんか。<br>B: ええ、＿＿＿＿＿＿＿＿。", a: "{見|み}ましょう", romaji: "mimashou", pt: "Sim, vamos ver!", en: "Yes, let's watch!" },
          { q: "A: {昼|ひる}ごはんを {食|た}べませんか。<br>B: ええ、＿＿＿＿＿＿＿＿。", a: "{食|た}べましょう", romaji: "tabemashou", pt: "Sim, vamos comer!", en: "Yes, let's eat!" },
          { q: "A: テニスを しませんか。<br>B: ええ、＿＿＿＿＿＿＿＿。", a: "しましょう", romaji: "shimashou", pt: "Sim, vamos jogar!", en: "Yes, let's play!" }
        ]
      },
      {
        desc: "2. Responda à pergunta com a informação do parêntese", desc_en: "2. Answer the question with the information in the parentheses",
        questions: [
          { q: "A: {何|なに}を {飲|の}みますか。<br>B: （お{茶|ちゃ}）＿＿＿＿＿＿＿＿＿＿。", a: "お{茶|ちゃ}を {飲|の}みます", romaji: "ocha o nomimasu", pt: "Tomo chá", en: "I drink tea" },
          { q: "A: どこで {勉強|べんきょう}しますか。<br>B: （{図書館|としょかん}）＿＿＿＿＿＿＿＿＿＿。", a: "{図書館|としょかん}で {勉強|べんきょう}します", romaji: "toshokan de benkyou shimasu", pt: "Estudo na biblioteca", en: "I study at the library" },
          { q: "A: {日曜日|にちようび}に {何|なに}を しますか。<br>B: （サッカー）＿＿＿＿＿＿＿＿＿＿。", a: "サッカーを します", romaji: "sakkaa o shimasu", pt: "Jogo futebol", en: "I play soccer" }
        ]
      }
    ]
  },
  mondai: {
    title: "{問題|もんだい} (Problemas / Avaliação)", title_en: "{問題|もんだい} (Problems / Assessment)",
    exercises: [
      {
        desc: "1. (　　) に {正|ただ}しい ことばを {入|い}れなさい。 (を・で・へ・に・なに・なん)", desc_en: "1. Fill in the blank with the right word. (を・で・へ・に・なに・なん)",
        questions: [
          { q: "（　　）を {食|た}べますか。…{魚|さかな}を {食|た}べます。", a: "なに", romaji: "nani", pt: "「{何|なに}」 antes de を", en: "「{何|なに}」 before を" },
          { q: "これ^は （　　）ですか。…{辞書|じしょ}です。", a: "なん", romaji: "nan", pt: "「{何|なん}」 antes de です", en: "「{何|なん}」 before です" },
          { q: "{食堂|しょくどう}（　　）ごはんを {食|た}べます。", a: "で", romaji: "de", pt: "Lugar da ação", en: "Place of the action" },
          { q: "{友達|ともだち}と {映画|えいが}（　　）{見|み}ました。", a: "を", romaji: "o", pt: "Objeto direto", en: "Direct object" }
        ]
      },
      {
        desc: "2. {読|よ}み{物|もの} (Leitura): {日曜日|にちようび}", desc_en: "2. Reading: Sunday",
        questions: [
          {
            q: `<div class="reading-box">{日曜日|にちようび}に {友達|ともだち}と {公園|こうえん}で サッカーを します。それから、{食堂|しょくどう}で {昼|ひる}ごはんを {食|た}べます。{晩|ばん}ごはんの あとで、{一人|ひとり}で {映画|えいが}を {見|み}ます。</div>{質問|しつもん}: {昼|ひる}ごはん^は どこで {食|た}べますか。<br>➔ ＿＿＿＿＿＿＿＿で {食|た}べます。`,
            a: "{食堂|しょくどう}",
            romaji: "shokudou",
            pt: "No refeitório.", en: "At the cafeteria."
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
          { tokens: ["{図書館|としょかん}で", "{本|ほん}を", "{読|よ}みます。"], pt: "Leio livros na biblioteca.", en: "I read books at the library.", romaji: "Toshokan de hon o yomimasu." },
          { tokens: ["いっしょに", "{映画|えいが}を", "{見|み}ませんか。"], pt: "Quer ver um filme comigo?", en: "Would you like to watch a movie with me?", romaji: "Issho ni eiga o mimasen ka." },
          { tokens: ["{公園|こうえん}で", "サッカーを", "しましょう。"], pt: "Vamos jogar futebol no parque.", en: "Let's play soccer in the park.", romaji: "Kouen de sakkaa o shimashou." },
          { tokens: ["{何|なに}を", "{飲|の}みますか。"], pt: "O que você vai beber?", en: "What are you going to drink?", romaji: "Nani o nomimasu ka." }
        ]
      }
    ]
  }
};
