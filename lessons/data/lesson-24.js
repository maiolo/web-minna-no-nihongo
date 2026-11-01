// Dados da lição 24. Formato descrito no README.md.
window.lessonData = {
  vocab: {
    title: "{語彙|ごい} (Vocabulário)", title_en: "{語彙|ごい} (Vocabulary)",
    items: [
      { jp: "{手伝|てつだ}います", romaji: "tetsudaimasu", pt: "Ajudar (em um trabalho)", en: "To help (with a task)" },
      { jp: "{案内|あんない}します", romaji: "annai shimasu", pt: "Guiar, levar para conhecer", en: "To show someone around, to guide" },
      { jp: "{説明|せつめい}します", romaji: "setsumei shimasu", pt: "Explicar", en: "To explain" },
      { jp: "{直|なお}します", romaji: "naoshimasu", pt: "Consertar, corrigir", en: "To fix, to correct" },
      { jp: "{運|はこ}びます", romaji: "hakobimasu", pt: "Carregar, transportar", en: "To carry, to transport" },
      { jp: "{片付|かたづ}けます", romaji: "katazukemasu", pt: "Arrumar, guardar (a bagunça)", en: "To tidy up, to put away" },
      { jp: "{貸|か}します", romaji: "kashimasu", pt: "Emprestar (algo a alguém)", en: "To lend (something to someone)" },
      { jp: "{借|か}ります", romaji: "karimasu", pt: "Pegar emprestado", en: "To borrow" },
      { jp: "{教|おし}えます", romaji: "oshiemasu", pt: "Ensinar, avisar", en: "To teach, to tell" },
      { jp: "{呼|よ}びます", romaji: "yobimasu", pt: "Chamar", en: "To call" },
      { jp: "{持|も}ちます", romaji: "mochimasu", pt: "Segurar, carregar", en: "To hold, to carry" },
      { jp: "{作|つく}ります", romaji: "tsukurimasu", pt: "Fazer, preparar", en: "To make, to prepare" },
      { jp: "{洗|あら}います", romaji: "araimasu", pt: "Lavar", en: "To wash" },
      { jp: "{迎|むか}えます", romaji: "mukaemasu", pt: "Ir buscar, receber", en: "To pick up, to welcome" },
      { jp: "お{礼|れい}", romaji: "orei", pt: "Agradecimento", en: "Thanks, gratitude" },
      { jp: "{誕生日|たんじょうび}", romaji: "tanjoubi", pt: "Aniversário", en: "Birthday" },
      { jp: "プレゼント", romaji: "purezento", pt: "Presente", en: "Present, gift" },
      { jp: "{荷物|にもつ}", romaji: "nimotsu", pt: "Bagagem, pacote", en: "Luggage, package" },
      { jp: "{自分|じぶん}", romaji: "jibun", pt: "Eu mesmo, o próprio", en: "Myself, one's own" },
      { jp: "もちろん", romaji: "mochiron", pt: "Claro, evidentemente", en: "Of course" }
    ]
  },
  gramatica: {
    title: "{文法|ぶんぽう} (Gramática)", title_en: "{文法|ぶんぽう} (Grammar)",
    intro: "Quatro pontos nesta lição: fazer um favor (〜て あげます), alguém faz um favor por mim (〜て くれます) e receber um favor (〜て もらいます), mais um resumo das partículas が e に.", intro_en: "Four points in this lesson: doing a favour (〜て あげます), having a favour done for you (〜て くれます) and receiving a favour (〜て もらいます), plus a summary of who takes が and who takes に.",
    points: [
      {
        id: "te-agemasu",
        title: "V-て あげます (faço um favor a alguém)", title_en: "V-て あげます (I do a favour for someone)",
        pat: "A ^は B に V-て あげます",
        short: "eu faço algo por outra pessoa", short_en: "I do something for another person",
        mean: "Diz que uma pessoa faz algo em benefício de outra: um favor, uma ajuda. Quem faz é o sujeito; quem recebe leva に.", mean_en: "It says that one person does something for the benefit of another: a favour, a help. The doer is the subject; the receiver takes に.",
        rule: "Use a forma て do verbo + あげます. O tempo e a negativa ficam em あげます: あげました, あげません. O favor pode ser para um amigo, um colega ou um familiar — evite com o professor ou o chefe: dito diretamente a um superior, てあげます soa presunçoso (o livro recomenda não usar).", rule_en: "Use the て form of the verb + あげます. Tense and negative stay in あげます: あげました, あげません. The favour can be for a friend, a colleague or a family member — avoid it with the teacher or the boss: said directly to a superior, てあげます sounds presumptuous (the book recommends not using it).",
        form: [
          { label: "{動詞|どうし} (forma て) + あげます", label_en: "{動詞|どうし} (て form) + あげます", text: "O verbo fica na forma て; nada muda em あげます.", text_en: "The verb stays in the て form; nothing changes in あげます.", ex: [
            { jp: "{貸|か}して あげます", romaji: "kashite agemasu", pt: "empresto (para alguém)", en: "I lend (to someone)" },
            { jp: "{作|つく}って あげました", romaji: "tsukutte agemashita", pt: "fiz (para alguém)", en: "I made (for someone)" },
            { jp: "{持|も}って あげます", romaji: "motte agemasu", pt: "carrego (para alguém)", en: "I carry (for someone)" }
          ] }
        ],
        ex: [
          { jp: "{私|わたし}^は {山田|やまだ}さんに この {本|ほん}を {貸|か}して あげました。", romaji: "Watashi wa Yamada-san ni kono hon o kashite agemashita.", pt: "Emprestei este livro para o Yamada (fiz esse favor).", en: "I lent this book to Yamada (I did him that favour)." },
          { jp: "{私|わたし}^は {妹|いもうと}に ケーキを {作|つく}って あげました。", romaji: "Watashi wa imouto ni keeki o tsukutte agemashita.", pt: "Fiz um bolo para a minha irmã mais nova.", en: "I made a cake for my little sister." },
          { jp: "{田中|たなか}さんは {木村|きむら}さんに {日本語|にほんご}を {教|おし}えて あげました。", romaji: "Tanaka-san wa Kimura-san ni nihongo o oshiete agemashita.", pt: "O Tanaka ensinou japonês para o Kimura.", en: "Tanaka taught Japanese to Kimura." },
          { jp: "{友達|ともだち}に {荷物|にもつ}を {持|も}って あげました。", romaji: "Tomodachi ni nimotsu o motte agemashita.", pt: "Carreguei a bagagem para uma amiga.", en: "I carried the luggage for a friend." }
        ],
        contrast: {
          rows: [
            { label: "〜て あげます (dou uma ação)", label_en: "〜て あげます (I give an action)", jp: "{友達|ともだち}に {本|ほん}を {貸|か}して あげました。", pt: "Emprestei (fiz o favor de emprestar).", en: "I lent it (I did the favour of lending)." },
            { label: "〜を あげます (dou um objeto)", label_en: "〜を あげます (I give an object)", jp: "{友達|ともだち}に {本|ほん}を あげました。", pt: "Dei um livro de presente, sem falar de favor.", en: "I gave a book as a gift, with no idea of a favour." }
          ],
          note: "Na lição 7, あげます dá coisas. Com a forma て, o que se dá é uma ação.", note_en: "In lesson 7, あげます gives things. With the て form, what you give is an action."
        },
        trap: [
          "Quem recebe o favor leva に, não を: errado {友達|ともだち}を {本|ほん}を {貸|か}して あげました.",
          "Não use て あげます com o professor ou o chefe: em japonês, dizer que fez um favor a um superior soa presunçoso. Use uma forma neutra, como お{手伝|てつだ}いします.",
          "O verbo fica na forma て: errado {貸|か}します あげました; certo {貸|か}して あげました."
        ],
        trap_en: [
          "The person who receives the favour takes に, not を: wrong {友達|ともだち}を {本|ほん}を {貸|か}して あげました.",
          "Do not use て あげます with the teacher or the boss: in Japanese, saying you did a favour for a superior sounds presumptuous. Use a neutral form such as お{手伝|てつだ}いします.",
          "The verb stays in the て form: wrong {貸|か}します あげました; right {貸|か}して あげました."
        ]
      },
      {
        id: "te-kuremasu",
        title: "V-て くれます (alguém faz por mim)", title_en: "V-て くれます (someone does something for me)",
        pat: "B が ({私|わたし} に) V-て くれます<br>B が N を くれます",
        short: "outra pessoa faz um favor para mim", short_en: "another person does a favour for me",
        mean: "Diz que alguém faz algo por mim ou pelo meu grupo. O sujeito — quem faz — leva が. {私|わたし} quase nunca aparece; se aparecer, leva に. A mesma forma serve para dar objetos: N が N を くれます.", mean_en: "It says that someone does something for me or my group. The subject — the doer — takes が. {私|わたし} almost never appears; if it does, it takes に. The same form also gives objects: N が N を くれます.",
        rule: "Forma て + くれます. Quem faz o favor é o sujeito (が), e o beneficiário é sempre eu: por isso não é preciso dizer {私|わたし}. O tempo fica em くれます: くれました, くれません.", rule_en: "て form + くれます. The doer is the subject (が), and the beneficiary is always me: so there is no need to say {私|わたし}. Tense stays in くれます: くれました, くれません.",
        form: [
          { label: "{動詞|どうし} (forma て) + くれます", label_en: "{動詞|どうし} (て form) + くれます", text: "Sujeito com <strong>が</strong>.", text_en: "Subject with <strong>が</strong>.", ex: [
            { jp: "{手伝|てつだ}って くれます", romaji: "tetsudatte kuremasu", pt: "ajuda (para mim)", en: "helps (me)" },
            { jp: "{貸|か}して くれました", romaji: "kashite kuremashita", pt: "emprestou (para mim)", en: "lent (to me)" }
          ] },
          { label: "{名詞|めいし} が 〜を くれます", label_en: "{名詞|めいし} が 〜を くれます", text: "Pessoa + <strong>が</strong>, objeto + <strong>を</strong>.", text_en: "Person + <strong>が</strong>, object + <strong>を</strong>.", ex: [
            { jp: "{友達|ともだち}が {本|ほん}を くれました", romaji: "tomodachi ga hon o kuremashita", pt: "um amigo me deu um livro", en: "a friend gave me a book" }
          ] }
        ],
        ex: [
          { jp: "{山田|やまだ}さんが {荷物|にもつ}を {持|も}って くれました。", romaji: "Yamada-san ga nimotsu o motte kuremashita.", pt: "O Yamada carregou a bagagem para mim.", en: "Yamada carried the luggage for me." },
          { jp: "{母|はは}が {誕生日|たんじょうび}に プレゼントを くれました。", romaji: "Haha ga tanjoubi ni purezento o kuremashita.", pt: "Minha mãe me deu um presente no meu aniversário.", en: "My mother gave me a present on my birthday." },
          { jp: "{友達|ともだち}が {日本語|にほんご}を {教|おし}えて くれました。", romaji: "Tomodachi ga nihongo o oshiete kuremashita.", pt: "Um amigo me ensinou japonês.", en: "A friend taught me Japanese." },
          { jp: "{田中|たなか}さんが この {地図|ちず}を {書|か}いて くれました。", romaji: "Tanaka-san ga kono chizu o kaite kuremashita.", pt: "O Tanaka desenhou este mapa para mim.", en: "Tanaka drew this map for me." }
        ],
        contrast: {
          rows: [
            { label: "〜て あげます (eu faço)", label_en: "〜て あげます (I do it)", jp: "{私|わたし}^は {田中|たなか}さんに {地図|ちず}を {書|か}いて あげました。", pt: "Eu desenhei o mapa para o Tanaka.", en: "I drew the map for Tanaka." },
            { label: "〜て くれます (ele faz por mim)", label_en: "〜て くれます (he does it for me)", jp: "{田中|たなか}さんが {私|わたし}に {地図|ちず}を {書|か}いて くれました。", pt: "O Tanaka desenhou o mapa para mim.", en: "Tanaka drew the map for me." }
          ],
          note: "É o mesmo favor visto de dois lados: あげます olha para quem recebe; くれます olha para quem faz, e o benefício é meu.", note_en: "It is the same favour seen from two sides: あげます looks at the receiver; くれます looks at the doer, and the benefit is mine."
        },
        trap: [
          "Quem faz o favor aparece como sujeito novo, com が: {山田|やまだ}さんが 〜て くれました. Se a pessoa já é o tópico da conversa, は também é possível, mas o foco deixa de ser “foi ele quem fez”.",
          "Não diga {私|わたし}^は 〜て くれました: くれます já significa “para mim”. O certo é {山田|やまだ}さんが 〜て くれました.",
          "Em N が N を くれます, a pessoa leva が e a coisa leva を: errado {友達|ともだち}を {本|ほん}が くれました."
        ],
        trap_en: [
          "The doer of the favour comes as a new subject, with が: {山田|やまだ}さんが 〜て くれました. If the person is already the topic of the conversation, は is also possible, but the focus is no longer “he is the one who did it”.",
          "Do not say {私|わたし}^は 〜て くれました: くれます already means “for me”. Say {山田|やまだ}さんが 〜て くれました.",
          "In N が N を くれます, the person takes が and the thing takes を: wrong {友達|ともだち}を {本|ほん}が くれました."
        ]
      },
      {
        id: "te-moraimasu",
        title: "V-て もらいます (recebo o favor)", title_en: "V-て もらいます (I receive the favour)",
        pat: "A ^は B に V-て もらいます",
        short: "alguém faz algo e eu recebo esse favor", short_en: "someone does something and I receive that favour",
        mean: "Mostra a cena pelo lado de quem recebe: “consegui que alguém fizesse”, “recebi o favor de”. O sujeito é quem recebe; quem faz leva に.", mean_en: "It shows the scene from the receiver's side: “I had someone do it”, “I received the favour of”. The subject is the receiver; the doer takes に.",
        rule: "Forma て + もらいます. Sujeito = quem recebe (marca ^は). Quem faz o favor leva に. Tempo e negativa ficam em もらいます: もらいました, もらいません.", rule_en: "て form + もらいます. Subject = the receiver (marked with ^は). The one who does the favour takes に. Tense and negative stay in もらいます: もらいました, もらいません.",
        form: [
          { label: "{動詞|どうし} (forma て) + もらいます", label_en: "{動詞|どうし} (て form) + もらいます", text: "Quem faz leva <strong>に</strong>.", text_en: "The doer takes <strong>に</strong>.", ex: [
            { jp: "{書|か}いて もらいました", romaji: "kaite moraimashita", pt: "recebi o favor de escreverem", en: "I had someone write it for me" },
            { jp: "{教|おし}えて もらいます", romaji: "oshiete moraimasu", pt: "recebo o favor de me ensinarem", en: "I have someone teach me" }
          ] }
        ],
        ex: [
          { jp: "{私|わたし}^は {田中|たなか}さんに {地図|ちず}を {書|か}いて もらいました。", romaji: "Watashi wa Tanaka-san ni chizu o kaite moraimashita.", pt: "O Tanaka desenhou o mapa para mim (recebi esse favor).", en: "Tanaka drew the map for me (I received that favour)." },
          { jp: "{私|わたし}^は {友達|ともだち}に {車|くるま}で {駅|えき}まで {送|おく}って もらいました。", romaji: "Watashi wa tomodachi ni kuruma de eki made okutte moraimashita.", pt: "Um amigo me levou de carro até a estação.", en: "A friend gave me a ride to the station." },
          { jp: "{教室|きょうしつ}の {掃除|そうじ}を {手伝|てつだ}って もらいました。", romaji: "Kyoushitsu no souji o tetsudatte moraimashita.", pt: "Recebi ajuda para limpar a sala de aula.", en: "I got help cleaning the classroom." },
          { jp: "{先生|せんせい}に {漢字|かんじ}の {読|よ}み{方|かた}を {教|おし}えて もらいました。", romaji: "Sensei ni kanji no yomikata o oshiete moraimashita.", pt: "O professor me ensinou a ler os kanji.", en: "The teacher taught me how to read the kanji." }
        ],
        contrast: {
          rows: [
            { label: "〜て くれます (o foco é quem faz)", label_en: "〜て くれます (the focus is the doer)", jp: "{友達|ともだち}が {手伝|てつだ}って くれました。", pt: "Ele me ajudou: o foco é a ação dele.", en: "He helped me: the focus is on his action." },
            { label: "〜て もらいます (o foco é quem recebe)", label_en: "〜て もらいます (the focus is the receiver)", jp: "{私|わたし}^は {友達|ともだち}に {手伝|てつだ}って もらいました。", pt: "Eu recebi a ajuda dele: o foco é que eu fui ajudado.", en: "I received his help: the focus is that I was helped." }
          ],
          note: "Mesma cena, ponto de vista diferente. Use くれます para agradecer o que alguém fez; use もらいます para contar o favor que você conseguiu.", note_en: "Same scene, different point of view. Use くれます to thank someone for what they did; use もらいます to tell about the favour you got."
        },
        trap: [
          "Com もらいます, o sujeito é quem recebe e に marca quem faz: certo {私|わたし}^は {田中|たなか}さんに {書|か}いて もらいました; errado, para “recebi do Tanaka”, {田中|たなか}さんが {私|わたし}に {書|か}いて もらいました. Se o próprio Tanaka recebe o favor, a frase é normal: {田中|たなか}さんは {木村|きむら}さんに {書|か}いて もらいました.",
          "もらいます não é “pedir”: é “receber o favor”. Para pedir algo, use 〜て ください ou 〜て くださいませんか."
        ],
        trap_en: [
          "With もらいます, the subject is the receiver and に marks the doer: right {私|わたし}^は {田中|たなか}さんに {書|か}いて もらいました; wrong, for “I received it from Tanaka”, {田中|たなか}さんが {私|わたし}に {書|か}いて もらいました. If Tanaka himself receives the favour, the sentence is normal: {田中|たなか}さんは {木村|きむら}さんに {書|か}いて もらいました.",
          "もらいます is not “to ask”: it is “to receive the favour”. To ask for something, use 〜て ください or 〜て くださいませんか."
        ]
      },
      {
        id: "ga-ni",
        title: "が と に: quem faz, quem recebe", title_en: "が and に: who does it, who receives it",
        pat: "あげます: A ^は B に<br>くれます: B が ({私|わたし} に)<br>もらいます: A ^は B に",
        short: "resumo das partículas dos três verbos", short_en: "summary of the particles with the three verbs",
        mean: "As três formas mostram um favor de pontos de vista diferentes. Em あげます o sujeito (^は/が) é quem faz e に marca quem recebe; em くれます quem faz é o sujeito (が) e quem recebe sou eu (に opcional); em もらいます o sujeito (^は/が) é quem recebe e に marca quem faz.", mean_en: "The three forms show a favour from different points of view. In あげます the subject (^は/が) is the doer and に marks the receiver; in くれます the doer is the subject (が) and the receiver is me (に optional); in もらいます the subject (^は/が) is the receiver and に marks the doer.",
        rule: "あげます: A ^は B に (A faz, B recebe). くれます: B が ({私|わたし} に) (B faz, eu recebo). もらいます: A ^は B に (A recebe, B faz). Só あげます e もらいます descrevem o mesmo fato visto dos dois lados; くれます é o mesmo fato quando quem recebe sou eu.", rule_en: "あげます: A ^は B に (A does, B receives). くれます: B が ({私|わたし} に) (B does, I receive). もらいます: A ^は B に (A receives, B does). Only あげます and もらいます describe the same fact seen from both sides; くれます is the same fact when the receiver is me.",
        form: [
          { label: "あげます (eu ➔ outro)", label_en: "あげます (me ➔ other)", text: "A ^は <strong>B に</strong> V-て あげます", text_en: "A ^は <strong>B に</strong> V-て あげます" },
          { label: "くれます (outro ➔ eu)", label_en: "くれます (other ➔ me)", text: "<strong>B が</strong> ({私|わたし} に) V-て くれます", text_en: "<strong>B が</strong> ({私|わたし} に) V-て くれます" },
          { label: "もらいます (eu ← outro)", label_en: "もらいます (me ← other)", text: "A ^は <strong>B に</strong> V-て もらいます", text_en: "A ^は <strong>B に</strong> V-て もらいます" }
        ],
        ex: [
          { jp: "{私|わたし}^は {木村|きむら}さんに {傘|かさ}を {貸|か}して あげました。", romaji: "Watashi wa Kimura-san ni kasa o kashite agemashita.", pt: "Emprestei um guarda-chuva para o Kimura.", en: "I lent Kimura an umbrella." },
          { jp: "{木村|きむら}さんが {私|わたし}に {傘|かさ}を {貸|か}して くれました。", romaji: "Kimura-san ga watashi ni kasa o kashite kuremashita.", pt: "O Kimura me emprestou um guarda-chuva.", en: "Kimura lent me an umbrella." },
          { jp: "{私|わたし}^は {木村|きむら}さんに {傘|かさ}を {貸|か}して もらいました。", romaji: "Watashi wa Kimura-san ni kasa o kashite moraimashita.", pt: "Recebi o favor de o Kimura me emprestar um guarda-chuva.", en: "I received the favour of Kimura lending me an umbrella." }
        ],
        contrast: {
          rows: [
            { label: "A が B に あげます", label_en: "A が B に あげます", jp: "{田中|たなか}さんが {木村|きむら}さんに {本|ほん}を {貸|か}して あげました。", pt: "O Tanaka emprestou ao Kimura: quem faz leva が, quem recebe leva に.", en: "Tanaka lent to Kimura: the doer takes が, the receiver takes に." },
            { label: "B が {私|わたし} に くれます", label_en: "B が {私|わたし} に くれます", jp: "{木村|きむら}さんが {私|わたし}に {本|ほん}を {貸|か}して くれました。", pt: "O Kimura emprestou para mim: quem faz leva が e o favor é meu.", en: "Kimura lent to me: the doer takes が and the favour is mine." }
          ],
          note: "Regra prática: あげます → に = quem recebe; もらいます → に = quem faz; くれます → が = quem faz, e o favor é meu.", note_en: "Rule of thumb: あげます → に = who receives; もらいます → に = who does it; くれます → が = who does it, and the favour is mine."
        },
        trap: [
          "Não troque as partículas: あげます → に = quem recebe; もらいます → に = quem faz; くれます → が = quem faz.",
          "Uma frase só tem um sujeito marcado com が para o favor: não use が nos dois lados.",
          "Não misture は e が na mesma pessoa no mesmo papel: escolha um e mantenha a frase coerente."
        ],
        trap_en: [
          "Do not swap the particles: あげます → に = who receives; もらいます → に = who does it; くれます → が = who does it.",
          "A sentence has only one が for the favour: do not mark both sides with が.",
          "Do not mix は and が for the same person in the same role: choose one and keep the sentence coherent."
        ]
      }
    ]
  },
  renshuuA: {
    title: "{練習|れんしゅう} A", title_en: "{練習|れんしゅう} A",
    content: `
<div class="card">
    <h2 class="card-header">{練習|れんしゅう} A (Tabelas de substituição)</h2>
    <p class="page-intro">Leia cada linha em voz alta e observe quem faz o favor e quem recebe.</p>
</div>
<div class="card">
    <h3 class="card-header">1. あげます・くれます・もらいます (as direções do favor)</h3>
    <table class="grammar-table">
        <tr><th>Forma</th><th>Exemplo</th></tr>
        <tr><td>あげます<br>(eu ➔ outro)</td><td>{私|わたし}^は {木村|きむら}さんに {傘|かさ}を {貸|か}して あげました。</td></tr>
        <tr><td>くれます<br>(outro ➔ eu)</td><td>{木村|きむら}さんが {私|わたし}に {傘|かさ}を {貸|か}して くれました。</td></tr>
        <tr><td>もらいます<br>(eu recebo)</td><td>{私|わたし}^は {木村|きむら}さんに {傘|かさ}を {貸|か}して もらいました。</td></tr>
    </table>
</div>
<div class="card">
    <h3 class="card-header">2. あげます ({私|わたし}が する)</h3>
    <table class="grammar-table">
        <tr><th>Favor</th><th>Frase</th></tr>
        <tr><td>{本|ほん}を {貸|か}します</td><td>{山田|やまだ}さんに {本|ほん}を {貸|か}して あげました。</td></tr>
        <tr><td>ケーキを {作|つく}ります</td><td>{妹|いもうと}に ケーキを {作|つく}って あげました。</td></tr>
        <tr><td>{荷物|にもつ}を {持|も}ちます</td><td>{友達|ともだち}に {荷物|にもつ}を {持|も}って あげました。</td></tr>
    </table>
</div>
<div class="card">
    <h3 class="card-header">3. くれます・もらいます (favor recebido)</h3>
    <table class="grammar-table">
        <tr><th>Favor</th><th>Frase</th></tr>
        <tr><td>{地図|ちず}を {書|か}きます</td><td>{田中|たなか}さんが {地図|ちず}を {書|か}いて くれました。</td></tr>
        <tr><td>{地図|ちず}を {書|か}きます</td><td>{私|わたし}^は {田中|たなか}さんに {地図|ちず}を {書|か}いて もらいました。</td></tr>
        <tr><td>{漢字|かんじ}を {教|おし}えます</td><td>{先生|せんせい}に {漢字|かんじ}を {教|おし}えて もらいました。</td></tr>
        <tr><td>{駅|えき}まで {送|おく}ります</td><td>{友達|ともだち}に {駅|えき}まで {送|おく}って もらいました。</td></tr>
    </table>
</div>
`, content_en: `
<div class="card">
    <h2 class="card-header">{練習|れんしゅう} A (Substitution tables)</h2>
    <p class="page-intro">Read each line aloud and notice who does the favour and who receives it.</p>
</div>
<div class="card">
    <h3 class="card-header">1. あげます・くれます・もらいます (the directions of the favour)</h3>
    <table class="grammar-table">
        <tr><th>Form</th><th>Example</th></tr>
        <tr><td>あげます<br>(me ➔ other)</td><td>{私|わたし}^は {木村|きむら}さんに {傘|かさ}を {貸|か}して あげました。</td></tr>
        <tr><td>くれます<br>(other ➔ me)</td><td>{木村|きむら}さんが {私|わたし}に {傘|かさ}を {貸|か}して くれました。</td></tr>
        <tr><td>もらいます<br>(I receive)</td><td>{私|わたし}^は {木村|きむら}さんに {傘|かさ}を {貸|か}して もらいました。</td></tr>
    </table>
</div>
<div class="card">
    <h3 class="card-header">2. あげます (I do it)</h3>
    <table class="grammar-table">
        <tr><th>Favour</th><th>Sentence</th></tr>
        <tr><td>{本|ほん}を {貸|か}します</td><td>{山田|やまだ}さんに {本|ほん}を {貸|か}して あげました。</td></tr>
        <tr><td>ケーキを {作|つく}ります</td><td>{妹|いもうと}に ケーキを {作|つく}って あげました。</td></tr>
        <tr><td>{荷物|にもつ}を {持|も}ちます</td><td>{友達|ともだち}に {荷物|にもつ}を {持|も}って あげました。</td></tr>
    </table>
</div>
<div class="card">
    <h3 class="card-header">3. くれます・もらいます (a favour received)</h3>
    <table class="grammar-table">
        <tr><th>Favour</th><th>Sentence</th></tr>
        <tr><td>{地図|ちず}を {書|か}きます</td><td>{田中|たなか}さんが {地図|ちず}を {書|か}いて くれました。</td></tr>
        <tr><td>{地図|ちず}を {書|か}きます</td><td>{私|わたし}^は {田中|たなか}さんに {地図|ちず}を {書|か}いて もらいました。</td></tr>
        <tr><td>{漢字|かんじ}を {教|おし}えます</td><td>{先生|せんせい}に {漢字|かんじ}を {教|おし}えて もらいました。</td></tr>
        <tr><td>{駅|えき}まで {送|おく}ります</td><td>{友達|ともだち}に {駅|えき}まで {送|おく}って もらいました。</td></tr>
    </table>
</div>
`
  },
  renshuuB: {
    title: "{練習|れんしゅう} B", title_en: "{練習|れんしゅう} B",
    exercises: [
      {
        desc: "1. て{形|けい}に しなさい。(Passe para a forma て)", desc_en: "1. て{形|けい}に しなさい。(Change to the て form)",
        questions: [
          { q: "{貸|か}します ➔", a: "{貸|か}して", romaji: "kashite", pt: "Emprestar", en: "To lend" },
          { q: "{教|おし}えます ➔", a: "{教|おし}えて", romaji: "oshiete", pt: "Ensinar", en: "To teach" },
          { q: "{持|も}ちます ➔", a: "{持|も}って", romaji: "motte", pt: "Carregar", en: "To carry" },
          { q: "{作|つく}ります ➔", a: "{作|つく}って", romaji: "tsukutte", pt: "Fazer", en: "To make" },
          { q: "{洗|あら}います ➔", a: "{洗|あら}って", romaji: "aratte", pt: "Lavar", en: "To wash" },
          { q: "{迎|むか}えます ➔", a: "{迎|むか}えて", romaji: "mukaete", pt: "Ir buscar", en: "To pick up" },
          { q: "{案内|あんない}します ➔", a: "{案内|あんない}して", romaji: "annai shite", pt: "Guiar", en: "To show around" },
          { q: "{説明|せつめい}します ➔", a: "{説明|せつめい}して", romaji: "setsumei shite", pt: "Explicar", en: "To explain" },
          { q: "{直|なお}します ➔", a: "{直|なお}して", romaji: "naoshite", pt: "Consertar", en: "To fix" },
          { q: "{運|はこ}びます ➔", a: "{運|はこ}んで", romaji: "hakonde", pt: "Transportar", en: "To carry" },
          { q: "{片付|かたづ}けます ➔", a: "{片付|かたづ}けて", romaji: "katazukete", pt: "Arrumar", en: "To tidy up" },
          { q: "{手伝|てつだ}います ➔", a: "{手伝|てつだ}って", romaji: "tetsudatte", pt: "Ajudar", en: "To help" }
        ]
      },
      {
        desc: "2. 〜て あげます を {使|つか}って {文|ぶん}を {作|つく}りなさい。(Faça a frase com 〜て あげます)", desc_en: "2. 〜て あげます を {使|つか}って {文|ぶん}を {作|つく}りなさい。(Make the sentence with 〜て あげます)",
        questions: [
          { q: "{山田|やまだ}さん / {本|ほん}を {貸|か}します ➔", a: "{山田|やまだ}さんに {本|ほん}を {貸|か}して あげました。", romaji: "Yamada-san ni hon o kashite agemashita.", pt: "Emprestei o livro para o Yamada.", en: "I lent the book to Yamada." },
          { q: "{妹|いもうと} / ケーキを {作|つく}ります ➔", a: "{妹|いもうと}に ケーキを {作|つく}って あげました。", romaji: "Imouto ni keeki o tsukutte agemashita.", pt: "Fiz um bolo para a minha irmã.", en: "I made a cake for my sister." },
          { q: "{友達|ともだち} / {荷物|にもつ}を {持|も}ちます ➔", a: "{友達|ともだち}に {荷物|にもつ}を {持|も}って あげました。", romaji: "Tomodachi ni nimotsu o motte agemashita.", pt: "Carreguei a bagagem para o amigo.", en: "I carried the luggage for my friend." }
        ]
      },
      {
        desc: "3. 〜て くれます の {文|ぶん}に しなさい。(Reescreva com 〜て くれます)", desc_en: "3. 〜て くれます の {文|ぶん}に しなさい。(Rewrite with 〜て くれます)",
        questions: [
          { q: "{山田|やまだ}さんは {私|わたし}の {荷物|にもつ}を {持|も}ちました。➔", a: "{山田|やまだ}さんが {私|わたし}の {荷物|にもつ}を {持|も}って くれました。", romaji: "Yamada-san ga watashi no nimotsu o motte kuremashita.", pt: "O Yamada carregou a minha bagagem (para mim).", en: "Yamada carried my luggage (for me)." },
          { q: "{母|はは}^は {私|わたし}に プレゼントを あげました。➔", a: "{母|はは}が {私|わたし}に プレゼントを くれました。", romaji: "Haha ga watashi ni purezento o kuremashita.", pt: "Minha mãe me deu um presente.", en: "My mother gave me a present." },
          { q: "{田中|たなか}さんは {私|わたし}に {地図|ちず}を {書|か}きました。➔", a: "{田中|たなか}さんが {私|わたし}に {地図|ちず}を {書|か}いて くれました。", romaji: "Tanaka-san ga watashi ni chizu o kaite kuremashita.", pt: "O Tanaka desenhou um mapa para mim.", en: "Tanaka drew a map for me." }
        ]
      },
      {
        desc: "4. 〜て もらいます の {文|ぶん}に しなさい。(Reescreva com 〜て もらいます)", desc_en: "4. 〜て もらいます の {文|ぶん}に しなさい。(Rewrite with 〜て もらいます)",
        questions: [
          { q: "{田中|たなか}さんが {私|わたし}に {地図|ちず}を {書|か}いて くれました。➔", a: "{私|わたし}^は {田中|たなか}さんに {地図|ちず}を {書|か}いて もらいました。", romaji: "Watashi wa Tanaka-san ni chizu o kaite moraimashita.", pt: "Recebi do Tanaka o favor de desenhar o mapa.", en: "I received the favour of Tanaka drawing the map." },
          { q: "{友達|ともだち}が {私|わたし}を {車|くるま}で {駅|えき}まで {送|おく}って くれました。➔", a: "{私|わたし}^は {友達|ともだち}に {車|くるま}で {駅|えき}まで {送|おく}って もらいました。", romaji: "Watashi wa tomodachi ni kuruma de eki made okutte moraimashita.", pt: "Um amigo me levou de carro até a estação.", en: "A friend gave me a ride to the station." },
          { q: "{先生|せんせい}が {漢字|かんじ}の {読|よ}み{方|かた}を {教|おし}えて くれました。➔", a: "{先生|せんせい}に {漢字|かんじ}の {読|よ}み{方|かた}を {教|おし}えて もらいました。／{私|わたし}^は {先生|せんせい}に {漢字|かんじ}の {読|よ}み{方|かた}を {教|おし}えて もらいました。", romaji: "Sensei ni kanji no yomikata o oshiete moraimashita.", pt: "O professor me ensinou a ler os kanji.", en: "The teacher taught me how to read the kanji." }
        ]
      },
      {
        desc: "5. （　　）に が・に・を を {入|い}れなさい。(Complete com が, に ou を)", desc_en: "5. （　　）に が・に・を を {入|い}れなさい。(Fill in with が, に or を)",
        questions: [
          { q: "{山田|やまだ}さん（　　）{本|ほん}を {貸|か}して あげました。", a: "に", romaji: "ni", pt: "Quem recebe o favor leva に (あげます).", en: "The receiver of the favour takes に (あげます)." },
          { q: "{山田|やまだ}さん（　　）{荷物|にもつ}を {持|も}って くれました。", a: "が", romaji: "ga", pt: "Quem faz o favor é o sujeito, com が (くれます).", en: "The doer is the subject, with が (くれます)." },
          { q: "{私|わたし}^は {田中|たなか}さん（　　）{地図|ちず}を {書|か}いて もらいました。", a: "に", romaji: "ni", pt: "Quem faz o favor leva に (もらいます).", en: "The doer takes に (もらいます)." },
          { q: "{母|はは}（　　）プレゼントを くれました。", a: "が", romaji: "ga", pt: "Quem dá é o sujeito, com が.", en: "The giver is the subject, with が." }
        ]
      }
    ]
  },
  renshuuC: {
    title: "{練習|れんしゅう} C (Diálogos)", title_en: "{練習|れんしゅう} C (Dialogues)",
    exercises: [
      {
        desc: "1. ＿＿ に あげます・くれます・もらいます の {正|ただ}しい {形|けい} を {入|い}れなさい。(Complete com あげます, くれます ou もらいます)", desc_en: "1. ＿＿ に あげます・くれます・もらいます の {正|ただ}しい {形|けい} を {入|い}れなさい。(Fill in with the right form of あげます, くれます or もらいます)",
        questions: [
          { q: "A: {重|おも}いね。{持|も}とうか。<br>B: ありがとう。じゃ、お{願|ねが}い。<br>A: （{荷物|にもつ}を {持|も}ちます ➔ ＿＿）", a: "{持|も}って あげます", romaji: "motte agemasu", pt: "A oferece carregar a bagagem (favor a outra pessoa).", en: "A offers to carry the luggage (a favour to the other person)." },
          { q: "A: この {地図|ちず}、{田中|たなか}さんが {書|か}いて ＿＿。<br>B: いいですね。", a: "くれました", romaji: "kuremashita", pt: "O Tanaka fez o mapa para mim.", en: "Tanaka drew the map for me." },
          { q: "A: {漢字|かんじ}が {分|わ}かりません。<br>B: {先生|せんせい}に {教|おし}えて もらいませんか。<br>A: そうですね。", a: "もらいませんか", romaji: "moraimasen ka", pt: "Que tal pedir ao professor para ensinar?", en: "How about having the teacher teach you?" }
        ]
      },
      {
        desc: "2. お{礼|れい}を {言|い}う (Agradecendo um favor)", desc_en: "2. お{礼|れい}を {言|い}う (Thanking someone for a favour)",
        questions: [
          { q: "A: {昨日|きのう}、{友達|ともだち}が {部屋|へや}の {掃除|そうじ}を {手伝|てつだ}って くれました。<br>B: いい {友達|ともだち}ですね。A: ええ。{私|わたし}^は お{礼|れい}に ケーキを {作|つく}って ＿＿。", a: "あげました", romaji: "agemashita", pt: "Retribuí o favor com um bolo.", en: "I returned the favour with a cake." },
          { q: "A: その {傘|かさ}、{新|あたら}しいですか。<br>B: ええ。{木村|きむら}さんに {貸|か}して ＿＿。", a: "もらいました", romaji: "moraimashita", pt: "Recebi o favor de o Kimura emprestar.", en: "I received the favour of Kimura lending it." }
        ]
      }
    ]
  },
  mondai: {
    title: "{問題|もんだい} (Problemas / Avaliação)", title_en: "{問題|もんだい} (Problems / Assessment)",
    exercises: [
      {
        desc: "1. (　　) に {正|ただ}しい {助詞|じょし} を {入|い}れなさい。 (Preencha as partículas: が, に, を)", desc_en: "1. (　　) に {正|ただ}しい {助詞|じょし} を {入|い}れなさい。 (Fill in the particles: が, に, を)",
        questions: [
          { q: "{私|わたし}^は {山田|やまだ}さん（　　）{本|ほん}を {貸|か}して あげました。", a: "に", romaji: "ni", pt: "Quem recebe o favor: に.", en: "The receiver of the favour: に." },
          { q: "{母|はは}（　　）セーターを くれました。", a: "が", romaji: "ga", pt: "Quem dá é o sujeito: が.", en: "The giver is the subject: が." },
          { q: "{友達|ともだち}（　　）{地図|ちず}を {書|か}いて もらいました。", a: "に", romaji: "ni", pt: "Quem faz o favor: に (もらいます).", en: "The doer of the favour: に (もらいます)." },
          { q: "{田中|たなか}さんが {私|わたし}（　　）{傘|かさ}を {貸|か}して くれました。", a: "に", romaji: "ni", pt: "Quem recebe o favor (eu): に.", en: "The receiver of the favour (me): に." }
        ]
      },
      {
        desc: "2. {正|ただ}しい {形|けい} に しなさい。(Escolha a forma correta)", desc_en: "2. {正|ただ}しい {形|けい} に しなさい。(Choose the correct form)",
        questions: [
          { q: "{妹|いもうと}に ケーキを（{作|つく}ります ➔ ＿＿）あげました。", a: "{作|つく}って", romaji: "tsukutte", pt: "Forma て antes de あげます.", en: "て form before あげます." },
          { q: "{山田|やまだ}さんが {荷物|にもつ}を（{持|も}ちます ➔ ＿＿）くれました。", a: "{持|も}って", romaji: "motte", pt: "Forma て antes de くれます.", en: "て form before くれます." },
          { q: "{先生|せんせい}に {漢字|かんじ}を（{教|おし}えます ➔ ＿＿）もらいました。", a: "{教|おし}えて", romaji: "oshiete", pt: "Forma て antes de もらいます.", en: "て form before もらいます." }
        ]
      },
      {
        desc: "3. {読|よ}み{物|もの} (Leitura): お{礼|れい}の メール", desc_en: "3. {読|よ}み{物|もの} (Leitura): お{礼|れい}の メール",
        questions: [
          {
            q: `<div class="reading-box">
                                {山田|やまだ}さん、こんにちは。{昨日|きのう}^は ありがとう ございました。{私|わたし}^は {一人|ひとり}で できない ことを、{山田|やまだ}さんが たくさん {手伝|てつだ}って くれました。{荷物|にもつ}も {運|はこ}んで くれました。とても うれしかったです。{私|わたし}^は お{礼|れい}に、{山田|やまだ}さんの {好|す}きな ケーキを {作|つく}って あげたいです。{来週|らいしゅう}、{私|わたし}の {家|いえ}に {来|き}ませんか。
                                </div>
                                {質問|しつもん}: この メールを {書|か}いた {人|ひと}^は、{山田|やまだ}さんに {何|なに}を して あげたいですか。<br>➔ ＿＿＿＿＿＿＿＿＿。`,
            a: "ケーキを {作|つく}って あげたいです／{山田|やまだ}さんの {好|す}きな ケーキを {作|つく}って あげたいです",
            romaji: "Keeki o tsukutte agetai desu.",
            pt: "Quer fazer um bolo para ele (retribuir o favor).", en: "Wants to make a cake for him (to return the favour)."
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
          { tokens: ["{私|わたし}^は", "{山田|やまだ}さんに", "{本|ほん}を", "{貸|か}して", "あげました。"], pt: "Emprestei o livro para o Yamada.", en: "I lent the book to Yamada.", romaji: "Watashi wa Yamada-san ni hon o kashite agemashita." },
          { tokens: ["{田中|たなか}さんが", "{私|わたし}に", "{地図|ちず}を", "{書|か}いて", "くれました。"], pt: "O Tanaka desenhou um mapa para mim.", en: "Tanaka drew a map for me.", romaji: "Tanaka-san ga watashi ni chizu o kaite kuremashita." },
          { tokens: ["{私|わたし}^は", "{友達|ともだち}に", "{駅|えき}まで", "{送|おく}って", "もらいました。"], pt: "Um amigo me levou até a estação.", en: "A friend gave me a ride to the station.", romaji: "Watashi wa tomodachi ni eki made okutte moraimashita." },
          { tokens: ["{母|はは}が", "{誕生日|たんじょうび}に", "プレゼントを", "くれました。"], pt: "Minha mãe me deu um presente no meu aniversário.", en: "My mother gave me a present on my birthday.", romaji: "Haha ga tanjoubi ni purezento o kuremashita." }
        ]
      }
    ]
  }
};
