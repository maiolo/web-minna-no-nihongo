// Dados da lição 2. Formato descrito no README.md.
window.lessonData = {
  vocab: {
    title: "{語彙|ごい} (Vocabulário)", title_en: "{語彙|ごい} (Vocabulary)",
    items: [
      { jp: "これ", romaji: "kore", pt: "Isto (perto de quem fala)", en: "This (near the speaker)" },
      { jp: "それ", romaji: "sore", pt: "Isso (perto de quem ouve)", en: "That (near the listener)" },
      { jp: "あれ", romaji: "are", pt: "Aquilo (longe dos dois)", en: "That over there (far from both)" },
      { jp: "この", romaji: "kono", pt: "Este… (antes de um substantivo)", en: "This… (before a noun)" },
      { jp: "その", romaji: "sono", pt: "Esse… (antes de um substantivo)", en: "That… (before a noun)" },
      { jp: "あの", romaji: "ano", pt: "Aquele… (antes de um substantivo)", en: "That… over there (before a noun)" },
      { jp: "{本|ほん}", romaji: "hon", pt: "Livro", en: "Book" },
      { jp: "{辞書|じしょ}", romaji: "jisho", pt: "Dicionário", en: "Dictionary" },
      { jp: "{雑誌|ざっし}", romaji: "zasshi", pt: "Revista", en: "Magazine" },
      { jp: "{新聞|しんぶん}", romaji: "shinbun", pt: "Jornal", en: "Newspaper" },
      { jp: "ノート", romaji: "nooto", pt: "Caderno", en: "Notebook" },
      { jp: "{鉛筆|えんぴつ}", romaji: "enpitsu", pt: "Lápis", en: "Pencil" },
      { jp: "ペン", romaji: "pen", pt: "Caneta", en: "Pen" },
      { jp: "かばん", romaji: "kaban", pt: "Bolsa, mochila", en: "Bag, backpack" },
      { jp: "かさ", romaji: "kasa", pt: "Guarda-chuva", en: "Umbrella" },
      { jp: "{時計|とけい}", romaji: "tokei", pt: "Relógio", en: "Watch, clock" },
      { jp: "{携帯電話|けいたいでんわ}", romaji: "keitaidenwa", pt: "Celular", en: "Mobile phone" },
      { jp: "{写真|しゃしん}", romaji: "shashin", pt: "Fotografia", en: "Photograph" },
      { jp: "{車|くるま}", romaji: "kuruma", pt: "Carro", en: "Car" },
      { jp: "{自転車|じてんしゃ}", romaji: "jitensha", pt: "Bicicleta", en: "Bicycle" },
      { jp: "{日本語|にほんご}", romaji: "nihongo", pt: "Língua japonesa", en: "Japanese language" },
      { jp: "{英語|えいご}", romaji: "eigo", pt: "Língua inglesa", en: "English language" },
      { jp: "ポルトガル{語|ご}", romaji: "porutogarugo", pt: "Língua portuguesa", en: "Portuguese language" },
      { jp: "{何|なん}", romaji: "nan", pt: "O que", en: "What" },
      { jp: "そうです", romaji: "sou desu", pt: "É isso mesmo, sim", en: "That is right, yes" },
      { jp: "ちがいます", romaji: "chigaimasu", pt: "Não é isso, é diferente", en: "That is not right, it is different" },
      { jp: "そうですか", romaji: "sou desu ka", pt: "Ah, é? Entendi (reação a uma informação nova)", en: "Oh, I see (reaction to new information)" }
    ]
  },
  gramatica: {
    title: "{文法|ぶんぽう} (Gramática)", title_en: "{文法|ぶんぽう} (Grammar)",
    intro: "Quatro pontos para apontar e perguntar sobre objetos. Cada cartão traz o modelo de frase, a explicação, os exemplos, uma comparação com o que é parecido e os erros mais comuns.", intro_en: "Four points for pointing at and asking about objects. Each card gives the sentence pattern, the explanation, the examples, a comparison with what looks similar and the most common mistakes.",
    points: [
      {
        id: "kore-sore-are",
        title: "これ・それ・あれ", title_en: "これ・それ・あれ",
        pat: "これ／それ／あれ は N です",
        short: "isto / isso / aquilo (objetos)", short_en: "this / that / that over there (things)",
        mean: "Três pronomes para apontar objetos, de acordo com a distância em relação a quem fala e a quem ouve.", mean_en: "Three pronouns for pointing at things, depending on the distance from the speaker and from the listener.",
        rule: "<strong>これ</strong>: perto de quem fala. <strong>それ</strong>: perto de quem ouve. <strong>あれ</strong>: longe dos dois. Eles são pronomes e ficam sozinhos: não vêm com substantivo atrás. A pergunta é これ^は {何|なん}ですか。", rule_en: "<strong>これ</strong>: near the speaker. <strong>それ</strong>: near the listener. <strong>あれ</strong>: far from both. They are pronouns and stand alone: no noun follows. The question is これ^は {何|なん}ですか。",
        ex: [
          { jp: "これ^は {本|ほん}です。", romaji: "Kore wa hon desu.", pt: "Isto é um livro.", en: "This is a book." },
          { jp: "それ^は {辞書|じしょ}ですか。<br>…はい、そうです。", romaji: "Sore wa jisho desu ka. ...Hai, sou desu.", pt: "Isso é um dicionário? ...Sim, é.", en: "Is that a dictionary? ...Yes, it is." },
          { jp: "あれ^は {何|なん}ですか。<br>…{大学|だいがく}です。", romaji: "Are wa nan desu ka. ...Daigaku desu.", pt: "O que é aquilo? ...É uma universidade.", en: "What is that over there? ...It is a university." }
        ],
        contrast: {
          rows: [
            { label: "これ (perto de mim)", label_en: "これ (near me)", jp: "これ^は {時計|とけい}です。", pt: "Isto é um relógio (na minha mão).", en: "This is a watch (in my hand)." },
            { label: "それ (perto de você)", label_en: "それ (near you)", jp: "それ^は {時計|とけい}ですか。", pt: "Isso é um relógio? (na sua mão)", en: "Is that a watch? (in your hand)" },
            { label: "あれ (longe dos dois)", label_en: "あれ (far from both)", jp: "あれ^は {時計|とけい}です。", pt: "Aquilo é um relógio (na parede, longe).", en: "That is a clock (on the wall, far away)." }
          ],
          note: "O que conta é a distância de quem fala e de quem ouve. Quando você entrega algo ao outro, o seu “isto” vira o “isso” dele.", note_en: "What counts is the distance from the speaker and the listener. When you hand something to the other person, your “this” becomes their “that”."
        },
        trap: [
          "Quem responde troca o pronome: A: それ^は {何|なん}ですか。 B: これ^は {辞書|じしょ}です。 (o que está perto de B, para B, é これ).",
          "これ não leva substantivo atrás: errado これ {本|ほん}です。 Para “este livro” use この {本|ほん} (próximo cartão)."
        ],
        trap_en: [
          "The answerer switches the pronoun: A: それ^は {何|なん}ですか。 B: これ^は {辞書|じしょ}です。 (what is near B is これ for B).",
          "これ takes no noun after it: wrong これ {本|ほん}です。 For “this book” use この {本|ほん} (next card)."
        ]
      },
      {
        id: "kono-sono-ano",
        title: "この・その・あの ＋ N", title_en: "この・その・あの ＋ N",
        pat: "この／その／あの N",
        short: "este / esse / aquele N", short_en: "this / that / that over there + N",
        mean: "Os mesmos três graus de distância, mas agora antes de um substantivo: “este livro”, “esse relógio”, “aquela pessoa”.", mean_en: "The same three degrees of distance, but now before a noun: “this book”, “that watch”, “that person over there”.",
        rule: "このN, そのN, あのN <strong>nunca</strong> ficam sozinhos: sempre pedem um substantivo logo depois. Funcionam também para pessoas: あの {人|ひと}.", rule_en: "このN, そのN, あのN <strong>never</strong> stand alone: they always need a noun right after. They work for people too: あの {人|ひと}.",
        ex: [
          { jp: "この {時計|とけい}^は {日本|にほん}の {時計|とけい}です。", romaji: "Kono tokei wa Nihon no tokei desu.", pt: "Este relógio é japonês.", en: "This watch is Japanese." },
          { jp: "その {新聞|しんぶん}^は {日本語|にほんご}の {新聞|しんぶん}ですか。", romaji: "Sono shinbun wa nihongo no shinbun desu ka.", pt: "Esse jornal é em japonês?", en: "Is that newspaper in Japanese?" },
          { jp: "あの {人|ひと}^は {先生|せんせい}です。あの {車|くるま}^は {先生|せんせい}の {車|くるま}です。", romaji: "Ano hito wa sensei desu. Ano kuruma wa sensei no kuruma desu.", pt: "Aquela pessoa é professora. Aquele carro é da professora.", en: "That person is a teacher. That car is the teacher's." }
        ],
        contrast: {
          rows: [
            { label: "これ (pronome, sozinho)", label_en: "これ (pronoun, alone)", jp: "これ^は {本|ほん}です。", pt: "Isto é um livro.", en: "This is a book." },
            { label: "この ＋ N (acompanha um substantivo)", label_en: "この ＋ N (goes with a noun)", jp: "この {本|ほん}^は {日本語|にほんご}の {本|ほん}です。", pt: "Este livro é de japonês.", en: "This book is a Japanese book." }
          ],
          note: "Pronome ou acompanhante: これ/それ/あれ nomeiam a coisa; この/その/あの descrevem o substantivo que vem depois.", note_en: "Pronoun or modifier: これ/それ/あれ name the thing; この/その/あの describe the noun that follows."
        },
        trap: [
          "Errado: この です / あの です. Sem substantivo, use これ ou あれ.",
          "あの {人|ひと} serve para “aquela pessoa” (ele/ela) quando ela está à vista, mas longe. Para pessoas mais respeitadas, usa-se あの {方|かた}."
        ],
        trap_en: [
          "Wrong: この です / あの です. Without a noun, use これ or あれ.",
          "あの {人|ひと} means “that person” (he/she) when she is in sight but far away. For more respected people, あの {方|かた} is used."
        ]
      },
      {
        id: "no-posse",
        title: "N1 の N2 (posse, assunto, tipo) ・ N の", title_en: "N1 の N2 (possession, subject, kind) ・ N の",
        pat: "N1 の N2<br>N1 の (N2 omitido)",
        short: "N2 de N1 / o de N1", short_en: "N1's N2 / N2 of N1 / the one of N1",
        mean: "の liga dois substantivos. N1 pode ser o dono (“livro da Maria”), o assunto (“livro de japonês”) ou o tipo. Se N2 já está claro, ele cai: わたしの = “o meu”.", mean_en: "の links two nouns. N1 can be the owner (“Maria's book”), the subject (“Japanese book”) or the kind. If N2 is already clear, it is dropped: わたしの = “mine”.",
        rule: "A ordem é sempre N1 (descrição) ＋ の ＋ N2 (coisa). Para perguntar de quem é, use <strong>だれの</strong>. Para perguntar de que assunto, use <strong>{何|なん}の</strong>.", rule_en: "The order is always N1 (description) ＋ の ＋ N2 (the thing). To ask whose it is, use <strong>だれの</strong>. To ask what subject it is about, use <strong>{何|なん}の</strong>.",
        ex: [
          { jp: "これ^は わたしの {本|ほん}です。", romaji: "Kore wa watashi no hon desu.", pt: "Este é o meu livro.", en: "This is my book." },
          { jp: "それ^は {日本語|にほんご}の {辞書|じしょ}ですか。", romaji: "Sore wa nihongo no jisho desu ka.", pt: "Isso é um dicionário de japonês?", en: "Is that a Japanese dictionary?" },
          { jp: "この かばん^は だれのですか。<br>…マリアさんのです。", romaji: "Kono kaban wa dare no desu ka. ...Maria-san no desu.", pt: "De quem é esta bolsa? ...É da Maria.", en: "Whose bag is this? ...It is Maria's." },
          { jp: "これ^は {何|なん}の {雑誌|ざっし}ですか。<br>…{車|くるま}の {雑誌|ざっし}です。", romaji: "Kore wa nan no zasshi desu ka. ...Kuruma no zasshi desu.", pt: "Que tipo de revista é esta? ...É uma revista de carros.", en: "What kind of magazine is this? ...It is a car magazine." }
        ],
        contrast: {
          rows: [
            { label: "N2 presente", label_en: "N2 present", jp: "この {本|ほん}^は わたしの {本|ほん}です。", pt: "Este livro é o meu livro.", en: "This book is my book." },
            { label: "N2 omitido (já claro)", label_en: "N2 omitted (already clear)", jp: "この {本|ほん}^は わたしのです。", pt: "Este livro é meu.", en: "This book is mine." }
          ],
          note: "Omite-se N2 só quando ele acabou de ser dito. É o que torna 「わたしのです」 natural.", note_en: "N2 is dropped only when it has just been mentioned. That is what makes 「わたしのです」 natural."
        },
        trap: [
          "A ordem é o inverso do português: “livro de japonês” é {日本語|にほんご}の {本|ほん} (assunto primeiro) e “livro da Maria” é マリアさんの {本|ほん}.",
          "Não repita o substantivo ao omitir: errado わたしの {本|ほん}のです。 Certo: わたしのです。"
        ],
        trap_en: [
          "The order is the reverse of English: “Japanese book” is {日本語|にほんご}の {本|ほん} (subject first) and “Maria's book” is マリアさんの {本|ほん}.",
          "Do not repeat the noun when omitting it: wrong わたしの {本|ほん}のです。 Right: わたしのです。"
        ]
      },
      {
        id: "souda-chigau",
        title: "そうです・ちがいます ・ N1 ですか、N2 ですか", title_en: "そうです・ちがいます ・ N1 ですか、N2 ですか",
        pat: "N1 ですか、N2 ですか。<br>はい、そうです。／いいえ、ちがいます。",
        short: "respostas curtas e perguntas de escolha", short_en: "short answers and either-or questions",
        mean: "<strong>そうです</strong> confirma (“é isso”); <strong>ちがいます</strong> nega e corrige (“não é, é diferente”). Quando a pergunta oferece duas opções, escolha repetindo a opção certa.", mean_en: "<strong>そうです</strong> confirms (“that is right”); <strong>ちがいます</strong> denies and corrects (“no, it is different”). When the question offers two options, choose by repeating the right one.",
        rule: "Pergunta de sim ou não: はい、そうです。／いいえ、ちがいます。 (e, se quiser, a informação certa). Pergunta de escolha (N1 ですか、N2 ですか): responda só com a opção, sem はい nem いいえ. <strong>そうですか</strong> reage a uma informação nova: “ah, é?”.", rule_en: "Yes-or-no question: はい、そうです。／いいえ、ちがいます。 (plus the right information if you like). Either-or question (N1 ですか、N2 ですか): answer with just the option, without はい or いいえ. <strong>そうですか</strong> reacts to new information: “oh, I see”.",
        ex: [
          { jp: "これ^は {鉛筆|えんぴつ}ですか。<br>…はい、そうです。", romaji: "Kore wa enpitsu desu ka. ...Hai, sou desu.", pt: "Isto é um lápis? ...Sim, é.", en: "Is this a pencil? ...Yes, it is." },
          { jp: "それ^は {辞書|じしょ}ですか。<br>…いいえ、ちがいます。{雑誌|ざっし}です。", romaji: "Sore wa jisho desu ka. ...Iie, chigaimasu. Zasshi desu.", pt: "Isso é um dicionário? ...Não, é uma revista.", en: "Is that a dictionary? ...No, it is a magazine." },
          { jp: "それ^は ペンですか、{鉛筆|えんぴつ}ですか。<br>…{鉛筆|えんぴつ}です。", romaji: "Sore wa pen desu ka, enpitsu desu ka. ...Enpitsu desu.", pt: "Isso é uma caneta ou um lápis? ...É um lápis.", en: "Is that a pen or a pencil? ...It is a pencil." },
          { jp: "これ^は {田中|たなか}さんの かさです。<br>…そうですか。", romaji: "Kore wa Tanaka-san no kasa desu. ...Sou desu ka.", pt: "Este é o guarda-chuva do Sr. Tanaka. ...Ah, é?", en: "This is Mr. Tanaka's umbrella. ...Oh, I see." }
        ],
        contrast: {
          rows: [
            { label: "pergunta de sim ou não", label_en: "yes-or-no question", jp: "これ^は {車|くるま}の {雑誌|ざっし}ですか。", pt: "Esta é uma revista de carros? (はい／いいえ)", en: "Is this a car magazine? (はい／いいえ)" },
            { label: "pergunta de escolha", label_en: "either-or question", jp: "これ^は {車|くるま}の {雑誌|ざっし}ですか、{自転車|じてんしゃ}の {雑誌|ざっし}ですか。", pt: "Esta é revista de carros ou de bicicletas? (responde a opção)", en: "Is this a car magazine or a bicycle magazine? (answer with the option)" }
          ],
          note: "A pergunta de escolha já traz as respostas possíveis: responda com a opção certa, sem はい ou いいえ.", note_en: "The either-or question already contains the possible answers: answer with the right option, without はい or いいえ."
        },
        trap: [
          "Na pergunta de escolha não responda はい: errado それ^は ペンですか、{鉛筆|えんぴつ}ですか。…はい。",
          "ちがいます quer dizer “é diferente”, não “eu discordo”. Para dar a informação certa, acrescente depois: ちがいます。{雑誌|ざっし}です。"
        ],
        trap_en: [
          "Do not answer はい to an either-or question: wrong それ^は ペンですか、{鉛筆|えんぴつ}ですか。…はい。",
          "ちがいます means “it is different”, not “I disagree”. To give the right information, add it afterwards: ちがいます。{雑誌|ざっし}です。"
        ]
      }
    ]
  },
  renshuuA: {
    title: "{練習|れんしゅう} A", title_en: "{練習|れんしゅう} A",
    exercises: [
      {
        desc: "1. これ, それ ou あれ? (o objeto está perto de você, perto do outro ou longe dos dois)", desc_en: "1. これ, それ or あれ? (the object is near you, near the other person or far from both)",
        questions: [
          { q: "Está na sua mão: ＿＿は {本|ほん}です。", q_en: "In your hand: ＿＿は {本|ほん}です。", a: "これ", romaji: "kore", pt: "Isto é um livro", en: "This is a book" },
          { q: "Está na mão do outro: ＿＿は {辞書|じしょ}ですか。", q_en: "In the other person's hand: ＿＿は {辞書|じしょ}ですか。", a: "それ", romaji: "sore", pt: "Isso é um dicionário?", en: "Is that a dictionary?" },
          { q: "Está longe dos dois: ＿＿は {大学|だいがく}です。", q_en: "Far from both of you: ＿＿は {大学|だいがく}です。", a: "あれ", romaji: "are", pt: "Aquilo é uma universidade", en: "That over there is a university" },
          { q: "Você pergunta sobre o que está na mão do outro: ＿＿は {何|なん}ですか。", q_en: "You ask about what is in the other person's hand: ＿＿は {何|なん}ですか。", a: "それ", romaji: "sore", pt: "O que é isso?", en: "What is that?" }
        ]
      },
      {
        desc: "2. この, その ou あの ＋ N", desc_en: "2. この, その or あの ＋ N",
        questions: [
          { q: "Perto de você: ＿＿ かばん", q_en: "Near you: ＿＿ かばん", a: "この", romaji: "kono", pt: "Esta bolsa", en: "This bag" },
          { q: "Perto do outro: ＿＿ {時計|とけい}", q_en: "Near the other person: ＿＿ {時計|とけい}", a: "その", romaji: "sono", pt: "Esse relógio", en: "That watch" },
          { q: "Longe dos dois: ＿＿ {車|くるま}", q_en: "Far from both: ＿＿ {車|くるま}", a: "あの", romaji: "ano", pt: "Aquele carro", en: "That car over there" },
          { q: "Perto de você: ＿＿ {写真|しゃしん}", q_en: "Near you: ＿＿ {写真|しゃしん}", a: "この", romaji: "kono", pt: "Esta foto", en: "This photo" }
        ]
      }
    ]
  },
  renshuuB: {
    title: "{練習|れんしゅう} B", title_en: "{練習|れんしゅう} B",
    exercises: [
      {
        desc: "1. Complete com の ou の ＋ です (omissão)", desc_en: "1. Fill in with の or the shortened form",
        questions: [
          { q: "これは わたし（　　）{本|ほん}です。", a: "の", romaji: "no", pt: "Este é o meu livro", en: "This is my book" },
          { q: "それは {日本語|にほんご}（　　）{辞書|じしょ}ですか。", a: "の", romaji: "no", pt: "Isso é um dicionário de japonês?", en: "Is that a Japanese dictionary?" },
          { q: "この かばんは だれ（　　）ですか。", a: "の", romaji: "no", pt: "De quem é esta bolsa?", en: "Whose bag is this?" },
          { q: "この かさは マリアさん（　　）です。", a: "の", romaji: "no", pt: "Este guarda-chuva é da Maria", en: "This umbrella is Maria's" }
        ]
      },
      {
        desc: "2. Responda à pergunta de escolha", desc_en: "2. Answer the either-or question",
        questions: [
          { q: "A: これは {本|ほん}ですか、{雑誌|ざっし}ですか。<br>B: （{雑誌|ざっし}）＿＿＿＿＿＿＿＿。", a: "{雑誌|ざっし}です", romaji: "zasshi desu", pt: "É uma revista", en: "It is a magazine" },
          { q: "A: それは ペンですか、{鉛筆|えんぴつ}ですか。<br>B: （ペン）＿＿＿＿＿＿＿＿。", a: "ペンです", romaji: "pen desu", pt: "É uma caneta", en: "It is a pen" },
          { q: "A: あの {人|ひと}は {先生|せんせい}ですか、{学生|がくせい}ですか。<br>B: （{学生|がくせい}）＿＿＿＿＿＿＿＿。", a: "{学生|がくせい}です", romaji: "gakusei desu", pt: "É estudante", en: "A student" }
        ]
      }
    ]
  },
  mondai: {
    title: "{問題|もんだい} (Problemas / Avaliação)", title_en: "{問題|もんだい} (Problems / Assessment)",
    exercises: [
      {
        desc: "1. (　　) に {正|ただ}しい ことばを {入|い}れなさい。 (これ・この・それ・その・あれ・あの・の)", desc_en: "1. Fill in the blank with the right word. (これ・この・それ・その・あれ・あの・の)",
        questions: [
          { q: "（　　）は {辞書|じしょ}です。（na sua mão）", q_en: "（　　）は {辞書|じしょ}です。(in your hand)", a: "これ", romaji: "kore", pt: "Pronome para o que está na sua mão", en: "Pronoun for what is in your hand" },
          { q: "（　　）{時計|とけい}は {日本|にほん}の {時計|とけい}ですか。（perto do outro）", q_en: "（　　）{時計|とけい}は {日本|にほん}の {時計|とけい}ですか。(near the other person)", a: "その", romaji: "sono", pt: "Antes de substantivo, perto do outro", en: "Before a noun, near the other person" },
          { q: "これは {車|くるま}（　　）{雑誌|ざっし}です。", a: "の", romaji: "no", pt: "Revista de carros", en: "A car magazine" },
          { q: "（　　）{人|ひと}は だれですか。（pessoa longe）", q_en: "（　　）{人|ひと}は だれですか。(a person far away)", a: "あの", romaji: "ano", pt: "Aquela pessoa, longe", en: "That person, far away" }
        ]
      },
      {
        desc: "2. {読|よ}み{物|もの} (Leitura): {教室|きょうしつ}で", desc_en: "2. Reading: in the classroom",
        questions: [
          {
            q: `<div class="reading-box">A: これは {何|なん}ですか。<br>B: それは {辞書|じしょ}です。{日本語|にほんご}の {辞書|じしょ}です。<br>A: そうですか。その {辞書|じしょ}は だれのですか。<br>B: わたしのです。</div>{質問|しつもん}: {辞書|じしょ}は だれのですか。<br>➔ ＿＿＿＿＿＿＿＿＿＿。`,
            a: "Bさんのです",
            romaji: "B-san no desu",
            pt: "É de B.", en: "It is B's."
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
          { tokens: ["これは", "{何|なん}ですか。"], pt: "O que é isto?", en: "What is this?", romaji: "Kore wa nan desu ka." },
          { tokens: ["その", "かばんは", "だれのですか。"], pt: "De quem é essa bolsa?", en: "Whose bag is that?", romaji: "Sono kaban wa dare no desu ka." },
          { tokens: ["それは", "{日本語|にほんご}の", "{辞書|じしょ}ですか。"], pt: "Isso é um dicionário de japonês?", en: "Is that a Japanese dictionary?", romaji: "Sore wa nihongo no jisho desu ka." },
          { tokens: ["ペンですか、", "{鉛筆|えんぴつ}ですか。"], pt: "É uma caneta ou um lápis?", en: "Is it a pen or a pencil?", romaji: "Pen desu ka, enpitsu desu ka." }
        ]
      }
    ]
  }
};
