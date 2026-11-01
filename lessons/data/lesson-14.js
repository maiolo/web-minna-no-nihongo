// Dados da lição 14. Formato descrito no README.md.
window.lessonData = {
  vocab: {
    title: "{語彙|ごい} (Vocabulário)", title_en: "{語彙|ごい} (Vocabulary)",
    items: [
      { jp: "{付|つ}けます", romaji: "tsukemasu", pt: "Ligar (luz, ar-condicionado)", en: "To turn on (light, A/C)" },
      { jp: "{消|け}します", romaji: "keshimasu", pt: "Apagar, desligar", en: "To turn off, to erase" },
      { jp: "{開|あ}けます", romaji: "akemasu", pt: "Abrir", en: "To open (something)" },
      { jp: "{閉|し}めます", romaji: "shimemasu", pt: "Fechar", en: "To close (something)" },
      { jp: "{急|いそ}ぎます", romaji: "isogimasu", pt: "Apressar-se", en: "To hurry" },
      { jp: "{待|ま}ちます", romaji: "machimasu", pt: "Esperar", en: "To wait" },
      { jp: "{持|も}ちます", romaji: "mochimasu", pt: "Segurar, carregar", en: "To hold, to carry" },
      { jp: "{取|と}ります", romaji: "torimasu", pt: "Pegar", en: "To take" },
      { jp: "{手伝|てつだ}います", romaji: "tetsudaimasu", pt: "Ajudar", en: "To help" },
      { jp: "{呼|よ}びます", romaji: "yobimasu", pt: "Chamar", en: "To call" },
      { jp: "{話|はな}します", romaji: "hanashimasu", pt: "Falar, conversar", en: "To speak, to talk" },
      { jp: "{使|つか}います", romaji: "tsukaimasu", pt: "Usar", en: "To use" },
      { jp: "{止|と}めます", romaji: "tomemasu", pt: "Parar, estacionar", en: "To stop, to park" },
      { jp: "{見|み}せます", romaji: "misemasu", pt: "Mostrar", en: "To show" },
      { jp: "{教|おし}えます", romaji: "oshiemasu", pt: "Dizer, ensinar", en: "To tell, to teach" },
      { jp: "{座|すわ}ります", romaji: "suwarimasu", pt: "Sentar-se", en: "To sit down" },
      { jp: "{立|た}ちます", romaji: "tachimasu", pt: "Ficar de pé, levantar-se", en: "To stand" },
      { jp: "{入|はい}ります", romaji: "hairimasu", pt: "Entrar", en: "To enter" },
      { jp: "{出|で}ます", romaji: "demasu", pt: "Sair", en: "To leave, to go out" },
      { jp: "{降|ふ}ります", romaji: "furimasu", pt: "Cair (chuva, neve)", en: "To fall (rain, snow)" },
      { jp: "コピーします", romaji: "kopii shimasu", pt: "Tirar cópia", en: "To make a copy" },
      { jp: "{住所|じゅうしょ}", romaji: "juusho", pt: "Endereço", en: "Address" },
      { jp: "{地図|ちず}", romaji: "chizu", pt: "Mapa", en: "Map" },
      { jp: "{電気|でんき}", romaji: "denki", pt: "Luz elétrica", en: "Electric light" },
      { jp: "{窓|まど}", romaji: "mado", pt: "Janela", en: "Window" },
      { jp: "{塩|しお}", romaji: "shio", pt: "Sal", en: "Salt" },
      { jp: "{砂糖|さとう}", romaji: "satou", pt: "Açúcar", en: "Sugar" },
      { jp: "ゆっくり", romaji: "yukkuri", pt: "Devagar, com calma", en: "Slowly, at ease" },
      { jp: "すぐ", romaji: "sugu", pt: "Logo, imediatamente", en: "Right away" },
      { jp: "もう{一度|いちど}", romaji: "mou ichido", pt: "Mais uma vez", en: "Once more" }
    ]
  },
  gramatica: {
    title: "{文法|ぶんぽう} (Gramática)", title_en: "{文法|ぶんぽう} (Grammar)",
    intro: "Esta lição apresenta a forma て, a base de muitas frases. Primeiro como formá-la; depois três usos: pedir, dizer que algo está acontecendo e oferecer ajuda.", intro_en: "This lesson introduces the て-form, the base of many sentences. First how to form it; then three uses: asking, saying that something is going on, and offering help.",
    points: [
      {
        id: "te-kei",
        title: "Forma て ({形|けい}) dos verbos", title_en: "The て-form of verbs",
        pat: "V-ます ➔ V-て",
        short: "como formar a forma て por grupo", short_en: "how to form the て-form by group",
        mean: "A forma て depende do grupo do verbo. <strong>Grupo 1</strong> (ます precedido de som “i”) muda a terminação; <strong>Grupo 2</strong> (ます precedido de “e”, ou poucos em “i”) troca ます por て; <strong>Grupo 3</strong> ({来|き}ます, します) é irregular.", mean_en: "The て-form depends on the verb group. <strong>Group 1</strong> (ます preceded by an “i” sound) changes its ending; <strong>Group 2</strong> (ます preceded by “e”, or a few with “i”) replaces ます with て; <strong>Group 3</strong> ({来|き}ます, します) is irregular.",
        form: [
          { label: "Grupo 1: い・ち・り ➔ って", label_en: "Group 1: い・ち・り ➔ って", text: "", text_en: "", ex: [
            { tag: "{会|あ}います", jp: "{会|あ}って", pt: "encontrar", en: "to meet" },
            { tag: "{待|ま}ちます", jp: "{待|ま}って", pt: "esperar", en: "to wait" },
            { tag: "{帰|かえ}ります", jp: "{帰|かえ}って", pt: "voltar", en: "to return" }
          ] },
          { label: "Grupo 1: み・び ➔ んで", label_en: "Group 1: み・び ➔ んで", text: "", text_en: "", ex: [
            { tag: "{飲|の}みます", jp: "{飲|の}んで", pt: "beber", en: "to drink" },
            { tag: "{呼|よ}びます", jp: "{呼|よ}んで", pt: "chamar", en: "to call" }
          ] },
          { label: "Grupo 1: き ➔ いて ・ ぎ ➔ いで ・ し ➔ して", label_en: "Group 1: き ➔ いて ・ ぎ ➔ いで ・ し ➔ して", text: "{行|い}きます é exceção: {行|い}って.", text_en: "{行|い}きます is an exception: {行|い}って.", ex: [
            { tag: "{書|か}きます", jp: "{書|か}いて", pt: "escrever", en: "to write" },
            { tag: "{急|いそ}ぎます", jp: "{急|いそ}いで", pt: "apressar-se", en: "to hurry" },
            { tag: "{話|はな}します", jp: "{話|はな}して", pt: "falar", en: "to speak" },
            { tag: "{行|い}きます", jp: "{行|い}って", pt: "ir (exceção)", en: "to go (exception)" }
          ] },
          { label: "Grupo 2 e Grupo 3", label_en: "Group 2 and Group 3", text: "", text_en: "", ex: [
            { tag: "{食|た}べます", jp: "{食|た}べて", pt: "comer", en: "to eat" },
            { tag: "{見|み}ます", jp: "{見|み}て", pt: "ver", en: "to see" },
            { tag: "{来|き}ます", jp: "{来|き}て", pt: "vir", en: "to come" },
            { tag: "します", jp: "して", pt: "fazer", en: "to do" }
          ] }
        ],
        ex: [
          { jp: "{水|みず}を {飲|の}んで ください。", romaji: "Mizu o nonde kudasai.", pt: "Beba água, por favor.", en: "Please drink water." },
          { jp: "ここに {名前|なまえ}を {書|か}いて ください。", romaji: "Koko ni namae o kaite kudasai.", pt: "Escreva seu nome aqui, por favor.", en: "Please write your name here." },
          { jp: "{朝|あさ}ごはんを {食|た}べて、{学校|がっこう}^へ {行|い}きます。", romaji: "Asagohan o tabete, gakkou e ikimasu.", pt: "Tomo café da manhã e vou à escola.", en: "I eat breakfast and go to school." }
        ],
        contrast: {
          rows: [
            { label: "forma ます", label_en: "ます form", jp: "{待|ま}ちます", pt: "esperar (polido)", en: "to wait (polite)" },
            { label: "forma て", label_en: "て-form", jp: "{待|ま}って", pt: "esperar (base da frase)", en: "to wait (sentence base)" }
          ],
          note: "A forma て não tem tempo nem polidez por si só: quem decide isso é o final da frase.", note_en: "The て-form carries no tense or politeness by itself: the end of the sentence decides that."
        },
        trap: [
          "{行|い}きます é irregular: {行|い}って, e não {行|い}いて.",
          "Confira o grupo antes: {帰|かえ}ります e {入|はい}ります terminam em る mas são do Grupo 1 ({帰|かえ}って, {入|はい}って)."
        ],
        trap_en: [
          "{行|い}きます is irregular: {行|い}って, not {行|い}いて.",
          "Check the group first: {帰|かえ}ります and {入|はい}ります end in る but are Group 1 ({帰|かえ}って, {入|はい}って)."
        ]
      },
      {
        id: "te-kudasai",
        title: "V-て ください", title_en: "V-て ください",
        pat: "V-て ください",
        short: "por favor, faça…", short_en: "please do…",
        mean: "Forma educada de pedir ou instruir. Pode-se suavizar com <strong>ちょっと</strong> ou com {名前|なまえ}／objeto: {塩|しお}を {取|と}って ください.", mean_en: "A polite way of asking or instructing. It can be softened with <strong>ちょっと</strong> or with a name/object: {塩|しお}を {取|と}って ください.",
        ex: [
          { jp: "ここに {住所|じゅうしょ}を {書|か}いて ください。", romaji: "Koko ni juusho o kaite kudasai.", pt: "Escreva o endereço aqui, por favor.", en: "Please write your address here." },
          { jp: "ちょっと {待|ま}って ください。", romaji: "Chotto matte kudasai.", pt: "Espere um pouco, por favor.", en: "Please wait a moment." },
          { jp: "もう {一度|いちど} {言|い}って ください。", romaji: "Mou ichido itte kudasai.", pt: "Diga mais uma vez, por favor.", en: "Please say it once more." }
        ],
        contrast: {
          rows: [
            { label: "pedir um objeto", label_en: "asking for an object", jp: "{地図|ちず}を ください。", pt: "Me dê o mapa, por favor.", en: "Please give me the map." },
            { label: "pedir uma ação", label_en: "asking for an action", jp: "{地図|ちず}を {見|み}せて ください。", pt: "Mostre o mapa, por favor.", en: "Please show me the map." }
          ],
          note: "Nを ください pede uma coisa; V-て ください pede uma ação.", note_en: "Nを ください asks for a thing; V-て ください asks for an action."
        },
        trap: [
          "Não use com superiores em tom de ordem seca; ちょっと {待|ま}って ください soa mais suave.",
          "O verbo antes de ください precisa estar na forma て, e não na forma ます."
        ],
        trap_en: [
          "Do not use it with superiors as a blunt order; ちょっと {待|ま}って ください sounds softer.",
          "The verb before ください must be in the て-form, not the ます form."
        ]
      },
      {
        id: "te-imasu",
        title: "V-て います (ação em andamento)", title_en: "V-て います (ongoing action)",
        pat: "V-て います",
        short: "estar fazendo", short_en: "be doing",
        mean: "Mostra que a ação está <em>acontecendo agora</em>. Na pergunta, {何|なに}を して いますか. O passado é V-て いました.", mean_en: "Shows that the action is <em>happening now</em>. In the question: {何|なに}を して いますか. The past is V-て いました.",
        ex: [
          { jp: "{今|いま}、{雨|あめ}が {降|ふ}って います。", romaji: "Ima, ame ga futte imasu.", pt: "Agora está chovendo.", en: "It is raining now." },
          { jp: "{先生|せんせい}^は {話|はな}して います。", romaji: "Sensei wa hanashite imasu.", pt: "O professor está falando.", en: "The teacher is talking." },
          { jp: "ミラーさん^は {何|なに}を して いますか。<br>…{電話|でんわ}を して います。", romaji: "Miraa-san wa nani o shite imasu ka. ...Denwa o shite imasu.", pt: "O que o Miller está fazendo? ...Está telefonando.", en: "What is Miller doing? ...He is on the phone." }
        ],
        contrast: {
          rows: [
            { label: "ます (hábito/futuro)", label_en: "ます (habit/future)", jp: "まいにち {本|ほん}を {読|よ}みます。", pt: "Leio livros todo dia.", en: "I read books every day." },
            { label: "て います (agora)", label_en: "て います (now)", jp: "{今|いま}、{本|ほん}を {読|よ}んで います。", pt: "Agora estou lendo um livro.", en: "Now I am reading a book." }
          ],
          note: "Para hábitos, ます; para o que está acontecendo agora, て います.", note_en: "For habits, ます; for what is happening now, て います."
        },
        trap: [
          "Não acrescente outro final depois de います: errado {読|よ}んで いますです／{読|よ}んで いますました。A frase termina em います (passado: いました).",
          "Cuidado: com alguns verbos (como {住|す}む), て います indica estado, não ação (lição 15)."
        ],
        trap_en: [
          "Do not add another ending after います: wrong {読|よ}んで いますです／{読|よ}んで いますました。The sentence ends in います (past: いました).",
          "Careful: with some verbs (like {住|す}む), て います marks a state, not an action (lesson 15)."
        ]
      },
      {
        id: "mashouka",
        title: "V-ましょうか", title_en: "V-ましょうか",
        pat: "V-ましょうか",
        short: "oferecer ajuda: “quer que eu…?”", short_en: "offering help: “shall I…?”",
        mean: "Quem fala <strong>se oferece</strong> para fazer algo. A resposta pode aceitar com お{願|ねが}いします ou recusar com けっこうです／だいじょうぶです.", mean_en: "The speaker <strong>offers</strong> to do something. The answer may accept with お{願|ねが}いします or decline with けっこうです／だいじょうぶです.",
        ex: [
          { jp: "{荷物|にもつ}を {持|も}ちましょうか。<br>…お{願|ねが}いします。", romaji: "Nimotsu o mochimashou ka. ...Onegai shimasu.", pt: "Quer que eu leve a bagagem? ...Por favor.", en: "Shall I carry your luggage? ...Yes, please." },
          { jp: "{窓|まど}を {閉|し}めましょうか。<br>…ええ、お{願|ねが}いします。", romaji: "Mado o shimemashou ka. ...Ee, onegai shimasu.", pt: "Quer que eu feche a janela? ...Sim, por favor.", en: "Shall I close the window? ...Yes, please." },
          { jp: "{手伝|てつだ}いましょうか。<br>…だいじょうぶです。", romaji: "Tetsudaimashou ka. ...Daijoubu desu.", pt: "Quer ajuda? ...Não precisa.", en: "Shall I help? ...I'm fine." }
        ],
        contrast: {
          rows: [
            { label: "ませんか (convida)", label_en: "ませんか (invites)", jp: "いっしょに {行|い}きませんか。", pt: "Vamos juntos?", en: "Shall we go together?" },
            { label: "ましょうか (oferece)", label_en: "ましょうか (offers)", jp: "{荷物|にもつ}を {持|も}ちましょうか。", pt: "Quer que eu leve a bagagem?", en: "Shall I carry the luggage?" }
          ],
          note: "ませんか convida o outro a fazer junto; ましょうか oferece que eu faça.", note_en: "ませんか invites the other to do it together; ましょうか offers that I do it."
        },
        trap: [
          "Não use ましょうか para pedir algo ao outro: para pedir, use V-て ください.",
          "A resposta “けっこうです” recusa com educação, mas pode soar seca; だいじょうぶです é mais suave."
        ],
        trap_en: [
          "Do not use ましょうか to ask something of the other person: to ask, use V-て ください.",
          "The answer “けっこうです” refuses politely but can sound curt; だいじょうぶです is softer."
        ]
      }
    ]
  },
  renshuuA: {
    title: "{練習|れんしゅう} A", title_en: "{練習|れんしゅう} A",
    exercises: [
      {
        desc: "1. Passe para a forma て", desc_en: "1. Change to the て-form",
        questions: [
          { q: "{飲|の}みます ➔", a: "{飲|の}んで", romaji: "nonde", pt: "Grupo 1: み ➔ んで", en: "Group 1: み ➔ んで" },
          { q: "{書|か}きます ➔", a: "{書|か}いて", romaji: "kaite", pt: "Grupo 1: き ➔ いて", en: "Group 1: き ➔ いて" },
          { q: "{待|ま}ちます ➔", a: "{待|ま}って", romaji: "matte", pt: "Grupo 1: ち ➔ って", en: "Group 1: ち ➔ って" },
          { q: "{食|た}べます ➔", a: "{食|た}べて", romaji: "tabete", pt: "Grupo 2", en: "Group 2" },
          { q: "{行|い}きます ➔", a: "{行|い}って", romaji: "itte", pt: "Exceção", en: "Exception" },
          { q: "{来|き}ます ➔", a: "{来|き}て", romaji: "kite", pt: "Grupo 3", en: "Group 3" }
        ]
      },
      {
        desc: "2. Complete com a forma て certa", desc_en: "2. Fill in the right て-form",
        questions: [
          { q: "ちょっと {待|ま}（　　）ください。", a: "って", romaji: "tte", pt: "Grupo 1: ち ➔ って", en: "Group 1: ち ➔ って" },
          { q: "ここに {名前|なまえ}を {書|か}（　　）ください。", a: "いて", romaji: "ite", pt: "Grupo 1: き ➔ いて", en: "Group 1: き ➔ いて" }
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
          { q: "A: {荷物|にもつ}を {持|も}ちましょうか。<br>B: ＿＿＿＿＿＿＿。(aceite)", q_en: "A: {荷物|にもつ}を {持|も}ちましょうか。<br>B: ＿＿＿＿＿＿＿。(accept)", a: "お{願|ねが}いします", romaji: "onegaishimasu", pt: "Aceitar a oferta", en: "Accepting the offer" },
          { q: "A: {今|いま}、{何|なに}を して いますか。<br>B: {本|ほん}を ＿＿＿＿ います。", a: "{読|よ}んで", romaji: "yonde", pt: "Estou lendo", en: "I am reading" }
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
          { q: "ここに {住所|じゅうしょ}を {書|か}いて（　　）。", a: "ください", romaji: "kudasai", pt: "Pedido polido", en: "Polite request" },
          { q: "{今|いま}、{雨|あめ}が {降|ふ}って（　　）。", a: "います", romaji: "imasu", pt: "Ação em andamento", en: "Ongoing action" },
          { q: "{窓|まど}を {閉|し}め（　　）か。", a: "ましょう", romaji: "mashou", pt: "Oferecer", en: "Offering" }
        ]
      },
      {
        desc: "2. {読|よ}み{物|もの} (Leitura): {教室|きょうしつ}", desc_en: "2. Reading: classroom",
        questions: [
          {
            q: `<div class="reading-box">{教室|きょうしつ}^は {暑|あつ}いです。{窓|まど}を {開|あ}けて ください。ミラーさん^は {電話|でんわ}を して います。</div>{質問|しつもん}: ミラーさん^は {何|なに}を して いますか。<br>➔ ＿＿＿＿を して います。`,
            a: "{電話|でんわ}",
            romaji: "denwa",
            pt: "Telefonando.", en: "Phoning."
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
          { tokens: ["ちょっと", "{待|ま}って", "ください。"], pt: "Espere um pouco, por favor.", en: "Please wait a moment.", romaji: "Chotto matte kudasai." },
          { tokens: ["{今|いま}、", "{雨|あめ}が", "{降|ふ}って", "います。"], pt: "Agora está chovendo.", en: "It is raining now.", romaji: "Ima, ame ga futte imasu." },
          { tokens: ["{窓|まど}を", "{閉|し}めましょうか。"], pt: "Quer que eu feche a janela?", en: "Shall I close the window?", romaji: "Mado o shimemashou ka." }
        ]
      }
    ]
  }
};
