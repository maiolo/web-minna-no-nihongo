// Dados da lição 10. Formato descrito no README.md.
window.lessonData = {
  vocab: {
    title: "{語彙|ごい} (Vocabulário)", title_en: "{語彙|ごい} (Vocabulary)",
    items: [
      { jp: "あります", romaji: "arimasu", pt: "Haver, existir, estar (coisas, plantas)", en: "To exist, to be (things, plants)" },
      { jp: "います", romaji: "imasu", pt: "Haver, existir, estar (pessoas, animais)", en: "To exist, to be (people, animals)" },
      { jp: "{上|うえ}", romaji: "ue", pt: "Em cima, sobre", en: "Top, above, on" },
      { jp: "{下|した}", romaji: "shita", pt: "Embaixo, sob", en: "Bottom, below, under" },
      { jp: "{前|まえ}", romaji: "mae", pt: "Na frente", en: "Front, in front of" },
      { jp: "{後|うし}ろ", romaji: "ushiro", pt: "Atrás", en: "Back, behind" },
      { jp: "{右|みぎ}", romaji: "migi", pt: "Direita", en: "Right" },
      { jp: "{左|ひだり}", romaji: "hidari", pt: "Esquerda", en: "Left" },
      { jp: "{中|なか}", romaji: "naka", pt: "Dentro", en: "Inside" },
      { jp: "{外|そと}", romaji: "soto", pt: "Fora", en: "Outside" },
      { jp: "{隣|となり}", romaji: "tonari", pt: "Ao lado (vizinho direto)", en: "Next to (immediate neighbor)" },
      { jp: "{近|ちか}く", romaji: "chikaku", pt: "Perto, nas redondezas", en: "Near, nearby" },
      { jp: "{間|あいだ}", romaji: "aida", pt: "Entre, no meio de", en: "Between" },
      { jp: "{机|つくえ}", romaji: "tsukue", pt: "Mesa de estudo, escrivaninha", en: "Desk" },
      { jp: "テーブル", romaji: "teeburu", pt: "Mesa", en: "Table" },
      { jp: "ベッド", romaji: "beddo", pt: "Cama", en: "Bed" },
      { jp: "{窓|まど}", romaji: "mado", pt: "Janela", en: "Window" },
      { jp: "ドア", romaji: "doa", pt: "Porta", en: "Door" },
      { jp: "{箱|はこ}", romaji: "hako", pt: "Caixa", en: "Box" },
      { jp: "{冷蔵庫|れいぞうこ}", romaji: "reizouko", pt: "Geladeira", en: "Refrigerator" },
      { jp: "{木|き}", romaji: "ki", pt: "Árvore", en: "Tree" },
      { jp: "{犬|いぬ}", romaji: "inu", pt: "Cachorro", en: "Dog" },
      { jp: "{猫|ねこ}", romaji: "neko", pt: "Gato", en: "Cat" },
      { jp: "コンビニ", romaji: "konbini", pt: "Loja de conveniência", en: "Convenience store" },
      { jp: "スーパー", romaji: "suupaa", pt: "Supermercado", en: "Supermarket" },
      { jp: "ポスト", romaji: "posuto", pt: "Caixa de correio", en: "Mailbox" },
      { jp: "{郵便局|ゆうびんきょく}", romaji: "yuubinkyoku", pt: "Correio", en: "Post office" },
      { jp: "〜や 〜", romaji: "ya", pt: "〜 e 〜 (entre outras coisas)", en: "〜 and 〜 (among other things)" }
    ]
  },
  gramatica: {
    title: "{文法|ぶんぽう} (Gramática)", title_en: "{文法|ぶんぽう} (Grammar)",
    intro: "Quatro pontos para dizer o que há e onde as coisas estão. Cada cartão traz o modelo de frase, a explicação, os exemplos, uma comparação com o que é parecido e os erros mais comuns.", intro_en: "Four points for saying what there is and where things are. Each card gives the sentence pattern, the explanation, the examples, a comparison with what looks similar and the most common mistakes.",
    points: [
      {
        id: "ga-arimasu",
        title: "{場所|ばしょ}に N が あります・います", title_en: "{場所|ばしょ}に N が あります・います",
        pat: "{場所|ばしょ}に N が あります／います",
        short: "o que há num lugar", short_en: "what there is in a place",
        mean: "Diz que algo existe num lugar. <strong>あります</strong> serve para coisas e plantas; <strong>います</strong> serve para pessoas e animais, que se movem por conta própria.", mean_en: "Says that something exists in a place. <strong>あります</strong> is for things and plants; <strong>います</strong> is for people and animals, which move on their own.",
        rule: "O lugar leva <strong>に</strong> e o que existe leva <strong>が</strong>. Perguntas: {何|なに}が ありますか (coisa), だれが いますか (pessoa), {何|なに}が いますか (animal).", rule_en: "The place takes <strong>に</strong> and what exists takes <strong>が</strong>. Questions: {何|なに}が ありますか (thing), だれが いますか (person), {何|なに}が いますか (animal).",
        ex: [
          { jp: "{部屋|へや}に {机|つくえ}が あります。", romaji: "Heya ni tsukue ga arimasu.", pt: "Há uma escrivaninha no quarto.", en: "There is a desk in the room." },
          { jp: "{公園|こうえん}に {犬|いぬ}が います。", romaji: "Kouen ni inu ga imasu.", pt: "Há um cachorro no parque.", en: "There is a dog in the park." },
          { jp: "{冷蔵庫|れいぞうこ}の {中|なか}に {何|なに}が ありますか。<br>…{卵|たまご}が あります。", romaji: "Reizouko no naka ni nani ga arimasu ka. ...Tamago ga arimasu.", pt: "O que há na geladeira? ...Há ovos.", en: "What is in the refrigerator? ...There are eggs." },
          { jp: "{教室|きょうしつ}に だれが いますか。<br>…{田中|たなか}さんが います。", romaji: "Kyoushitsu ni dare ga imasu ka. ...Tanaka-san ga imasu.", pt: "Quem está na sala de aula? ...O Sr. Tanaka está.", en: "Who is in the classroom? ...Mr. Tanaka is." }
        ],
        contrast: {
          rows: [
            { label: "あります (coisas, plantas)", label_en: "あります (things, plants)", jp: "{木|き}が あります。", pt: "Há uma árvore.", en: "There is a tree." },
            { label: "います (pessoas, animais)", label_en: "います (people, animals)", jp: "{猫|ねこ}が います。", pt: "Há um gato.", en: "There is a cat." }
          ],
          note: "O critério é se o ser se move por conta própria. Árvores e flores usam あります; pessoas, cães e gatos usam います.", note_en: "The criterion is whether the being moves on its own. Trees and flowers use あります; people, dogs and cats use います."
        },
        trap: [
          "Não troque os dois verbos: errado {猫|ねこ}が あります。 Certo: {猫|ねこ}が います。",
          "O lugar leva に, não で: {部屋|へや}に {机|つくえ}が あります。 O で é para onde uma ação acontece."
        ],
        trap_en: [
          "Do not swap the two verbs: wrong {猫|ねこ}が あります。 Right: {猫|ねこ}が います。",
          "The place takes に, not で: {部屋|へや}に {机|つくえ}が あります。 で is for where an action takes place."
        ]
      },
      {
        id: "wa-ni-arimasu",
        title: "N は {場所|ばしょ}に あります・います", title_en: "N は {場所|ばしょ}に あります・います",
        pat: "N は {場所|ばしょ}に あります／います",
        short: "onde N está", short_en: "where N is",
        mean: "Quando N já é conhecido e se quer dizer <em>onde</em> está, N vira o tema (<strong>は</strong>) e o lugar leva に.", mean_en: "When N is already known and you want to say <em>where</em> it is, N becomes the topic (<strong>は</strong>) and the place takes に.",
        rule: "A pergunta é N は どこに ありますか／いますか。", rule_en: "The question is N は どこに ありますか／いますか。",
        ex: [
          { jp: "{郵便局|ゆうびんきょく}^は {駅|えき}の {前|まえ}に あります。", romaji: "Yuubinkyoku wa eki no mae ni arimasu.", pt: "O correio fica na frente da estação.", en: "The post office is in front of the station." },
          { jp: "マリアさん^は {教室|きょうしつ}に います。", romaji: "Maria-san wa kyoushitsu ni imasu.", pt: "A Maria está na sala de aula.", en: "Maria is in the classroom." },
          { jp: "すみません、{銀行|ぎんこう}^は どこに ありますか。<br>…{駅|えき}の {右|みぎ}に あります。", romaji: "Sumimasen, ginkou wa doko ni arimasu ka. ...Eki no migi ni arimasu.", pt: "Com licença, onde fica o banco? ...Fica à direita da estação.", en: "Excuse me, where is the bank? ...It is to the right of the station." }
        ],
        contrast: {
          rows: [
            { label: "N が (o que há aqui? informação nova)", label_en: "N が (what is here? new information)", jp: "{机|つくえ}の {上|うえ}に {本|ほん}が あります。", pt: "Em cima da mesa há um livro.", en: "On the desk there is a book." },
            { label: "N は (onde está N? já conhecido)", label_en: "N は (where is N? already known)", jp: "{本|ほん}^は {机|つくえ}の {上|うえ}に あります。", pt: "O livro está em cima da mesa.", en: "The book is on the desk." }
          ],
          note: "が apresenta uma novidade (“o que há?”); は retoma algo já conhecido (“onde está?”).", note_en: "が introduces something new (“what is there?”); は picks up something already known (“where is it?”)."
        },
        trap: [
          "Não use で para “estar”: errado {教室|きょうしつ}で います。 Existência leva に.",
          "O は do tema lê-se “wa”: {郵便局|ゆうびんきょく}^は = yuubinkyoku <strong>wa</strong>."
        ],
        trap_en: [
          "Do not use で for “to be located”: wrong {教室|きょうしつ}で います。 Existence takes に.",
          "The topic は is read “wa”: {郵便局|ゆうびんきょく}^は = yuubinkyoku <strong>wa</strong>."
        ]
      },
      {
        id: "ichi",
        title: "{位置|いち}の ことば ({上|うえ}・{下|した}・{前|まえ}・{後|うし}ろ…)", title_en: "Position words ({上|うえ}・{下|した}・{前|まえ}・{後|うし}ろ…)",
        pat: "N1 の {位置|いち} に N2 が あります",
        short: "em cima, embaixo, na frente, atrás, ao lado…", short_en: "on top, under, in front, behind, next to…",
        mean: "As palavras de posição são substantivos e se ligam ao ponto de referência com <strong>の</strong>: {机|つくえ}の {上|うえ} (em cima da mesa).", mean_en: "Position words are nouns and attach to the reference point with <strong>の</strong>: {机|つくえ}の {上|うえ} (on top of the desk).",
        form: [
          { label: "Eixo vertical e dentro/fora", label_en: "Vertical axis and in/out", text: "Referência ＋ の ＋ posição.", text_en: "Reference ＋ の ＋ position.", ex: [
            { jp: "{机|つくえ}の {上|うえ}", romaji: "tsukue no ue", pt: "em cima da mesa", en: "on top of the desk" },
            { jp: "{机|つくえ}の {下|した}", romaji: "tsukue no shita", pt: "embaixo da mesa", en: "under the desk" },
            { jp: "{箱|はこ}の {中|なか}", romaji: "hako no naka", pt: "dentro da caixa", en: "inside the box" },
            { jp: "{家|うち}の {外|そと}", romaji: "uchi no soto", pt: "fora de casa", en: "outside the house" }
          ] },
          { label: "Eixo horizontal", label_en: "Horizontal axis", text: "Frente, trás, lados, vizinhança.", text_en: "Front, back, sides, neighborhood.", ex: [
            { jp: "{駅|えき}の {前|まえ}", romaji: "eki no mae", pt: "na frente da estação", en: "in front of the station" },
            { jp: "{駅|えき}の {後|うし}ろ", romaji: "eki no ushiro", pt: "atrás da estação", en: "behind the station" },
            { jp: "{駅|えき}の {右|みぎ}", romaji: "eki no migi", pt: "à direita da estação", en: "to the right of the station" },
            { jp: "{駅|えき}の {左|ひだり}", romaji: "eki no hidari", pt: "à esquerda da estação", en: "to the left of the station" },
            { jp: "{駅|えき}の {隣|となり}", romaji: "eki no tonari", pt: "ao lado da estação", en: "next to the station" },
            { jp: "{駅|えき}の {近|ちか}く", romaji: "eki no chikaku", pt: "perto da estação", en: "near the station" }
          ] }
        ],
        ex: [
          { jp: "かばん^は {机|つくえ}の {下|した}に あります。", romaji: "Kaban wa tsukue no shita ni arimasu.", pt: "A bolsa está embaixo da mesa.", en: "The bag is under the desk." },
          { jp: "{犬|いぬ}^は {木|き}の {後|うし}ろに います。", romaji: "Inu wa ki no ushiro ni imasu.", pt: "O cachorro está atrás da árvore.", en: "The dog is behind the tree." },
          { jp: "コンビニ^は {銀行|ぎんこう}と {郵便局|ゆうびんきょく}の {間|あいだ}に あります。", romaji: "Konbini wa ginkou to yuubinkyoku no aida ni arimasu.", pt: "A loja de conveniência fica entre o banco e o correio.", en: "The convenience store is between the bank and the post office." }
        ],
        contrast: {
          rows: [
            { label: "{隣|となり} (colado, vizinho)", label_en: "{隣|となり} (adjacent, next door)", jp: "{駅|えき}の {隣|となり}に スーパーが あります。", pt: "Ao lado da estação há um supermercado (grudado).", en: "Next to the station there is a supermarket (right beside it)." },
            { label: "{近|ちか}く (por perto)", label_en: "{近|ちか}く (nearby)", jp: "{駅|えき}の {近|ちか}くに スーパーが あります。", pt: "Perto da estação há um supermercado (na região).", en: "Near the station there is a supermarket (in the area)." }
          ],
          note: "{隣|となり} é o vizinho direto; {近|ちか}く é qualquer ponto na região. {隣|となり} é mais exato.", note_en: "{隣|となり} is the immediate neighbor; {近|ちか}く is any point in the area. {隣|となり} is more exact."
        },
        trap: [
          "A ordem é referência ＋ の ＋ posição, ao contrário do português: “em cima da mesa” é {机|つくえ}の {上|うえ}, e não {上|うえ}の {机|つくえ}.",
          "{右|みぎ} e {左|ひだり} são a partir de quem olha para a referência. Se houver dúvida, diga a perspectiva."
        ],
        trap_en: [
          "The order is reference ＋ の ＋ position, the reverse of English: “on top of the desk” is {机|つくえ}の {上|うえ}, not {上|うえ}の {机|つくえ}.",
          "{右|みぎ} and {左|ひだり} are from the viewpoint of the person looking at the reference. If in doubt, state the perspective."
        ]
      },
      {
        id: "ya",
        title: "N1 や N2 (lista de exemplos)", title_en: "N1 や N2 (a list of examples)",
        pat: "N1 や N2 が あります",
        short: "“A e B, entre outras coisas”", short_en: "“A and B, among other things”",
        mean: "<strong>や</strong> liga substantivos citando alguns exemplos de uma lista maior: “A, B e outras coisas”.", mean_en: "<strong>や</strong> links nouns by naming a few examples of a longer list: “A, B and other things”.",
        rule: "Para listar tudo, sem deixar nada de fora, use <strong>と</strong>.", rule_en: "To list everything, leaving nothing out, use <strong>と</strong>.",
        ex: [
          { jp: "{机|つくえ}の {上|うえ}に {本|ほん}や ノートが あります。", romaji: "Tsukue no ue ni hon ya nooto ga arimasu.", pt: "Em cima da mesa há livros, cadernos, etc.", en: "On the desk there are books, notebooks, and so on." },
          { jp: "{冷蔵庫|れいぞうこ}の {中|なか}に {卵|たまご}や {肉|にく}や {野菜|やさい}が あります。", romaji: "Reizouko no naka ni tamago ya niku ya yasai ga arimasu.", pt: "Na geladeira há ovos, carne, verduras, etc.", en: "In the refrigerator there are eggs, meat, vegetables, and so on." },
          { jp: "{公園|こうえん}に {犬|いぬ}や {猫|ねこ}が います。", romaji: "Kouen ni inu ya neko ga imasu.", pt: "No parque há cães, gatos, etc.", en: "In the park there are dogs, cats, and so on." }
        ],
        contrast: {
          rows: [
            { label: "と (lista completa)", label_en: "と (complete list)", jp: "{机|つくえ}の {上|うえ}に {本|ほん}と ノートが あります。", pt: "Em cima da mesa há um livro e um caderno (só isso).", en: "On the desk there are a book and a notebook (only those)." },
            { label: "や (exemplos)", label_en: "や (examples)", jp: "{机|つくえ}の {上|うえ}に {本|ほん}や ノートが あります。", pt: "Em cima da mesa há livros, cadernos… (e outras coisas).", en: "On the desk there are books, notebooks… (and other things)." }
          ],
          note: "と fecha a lista; や deixa em aberto.", note_en: "と closes the list; や leaves it open."
        },
        trap: [
          "や não fecha a lista: se você quer dizer exatamente dois itens, use と.",
          "Com や, o último item pode ser seguido de など (“etc.”), embora não seja obrigatório."
        ],
        trap_en: [
          "や does not close the list: if you mean exactly two items, use と.",
          "With や, the last item may be followed by など (“etc.”), although it is not required."
        ]
      }
    ]
  },
  renshuuA: {
    title: "{練習|れんしゅう} A", title_en: "{練習|れんしゅう} A",
    exercises: [
      {
        desc: "1. あります ou います?", desc_en: "1. あります or います?",
        questions: [
          { q: "{部屋|へや}に {机|つくえ}が ＿＿＿＿＿＿。", a: "あります", romaji: "arimasu", pt: "Coisa: あります", en: "A thing: あります" },
          { q: "{公園|こうえん}に {犬|いぬ}が ＿＿＿＿＿＿。", a: "います", romaji: "imasu", pt: "Animal: います", en: "An animal: います" },
          { q: "{教室|きょうしつ}に {先生|せんせい}が ＿＿＿＿＿＿。", a: "います", romaji: "imasu", pt: "Pessoa: います", en: "A person: います" },
          { q: "{庭|にわ}に {木|き}が ＿＿＿＿＿＿。", a: "あります", romaji: "arimasu", pt: "Árvore: あります", en: "A tree: あります" }
        ]
      },
      {
        desc: "2. Complete a posição", desc_en: "2. Complete the position",
        questions: [
          { q: "{机|つくえ}の （　　）に かばんが あります。(embaixo)", q_en: "{机|つくえ}の （　　）に かばんが あります。(under)", a: "{下|した}", romaji: "shita", pt: "Embaixo da mesa", en: "Under the desk" },
          { q: "{駅|えき}の （　　）に {郵便局|ゆうびんきょく}が あります。(na frente)", q_en: "{駅|えき}の （　　）に {郵便局|ゆうびんきょく}が あります。(in front)", a: "{前|まえ}", romaji: "mae", pt: "Na frente da estação", en: "In front of the station" },
          { q: "{箱|はこ}の （　　）に {猫|ねこ}が います。(dentro)", q_en: "{箱|はこ}の （　　）に {猫|ねこ}が います。(inside)", a: "{中|なか}", romaji: "naka", pt: "Dentro da caixa", en: "Inside the box" }
        ]
      }
    ]
  },
  renshuuB: {
    title: "{練習|れんしゅう} B", title_en: "{練習|れんしゅう} B",
    exercises: [
      {
        desc: "1. Complete com が, は, に, と ou や", desc_en: "1. Fill in with が, は, に, と or や",
        questions: [
          { q: "{部屋|へや}（　　）{机|つくえ}が あります。", a: "に", romaji: "ni", pt: "Lugar de existência", en: "Place of existence" },
          { q: "{郵便局|ゆうびんきょく}（　　）{駅|えき}の {前|まえ}に あります。", a: "は", romaji: "wa", pt: "Tema: onde está?", en: "Topic: where is it?" },
          { q: "{机|つくえ}の {上|うえ}に {本|ほん}（　　）ノートが あります。(entre outras coisas)", q_en: "{机|つくえ}の {上|うえ}に {本|ほん}（　　）ノートが あります。(among other things)", a: "や", romaji: "ya", pt: "Lista aberta", en: "Open list" },
          { q: "{冷蔵庫|れいぞうこ}の {中|なか}に {何|なに}（　　）ありますか。", a: "が", romaji: "ga", pt: "O que há", en: "What there is" }
        ]
      }
    ]
  },
  mondai: {
    title: "{問題|もんだい} (Problemas / Avaliação)", title_en: "{問題|もんだい} (Problems / Assessment)",
    exercises: [
      {
        desc: "1. (　　) に {正|ただ}しい ことばを {入|い}れなさい。 (に・で・が・は・あります・います)", desc_en: "1. Fill in the blank with the right word. (に・で・が・は・あります・います)",
        questions: [
          { q: "{図書館|としょかん}（　　）{本|ほん}を {読|よ}みます。", a: "で", romaji: "de", pt: "Lugar da ação: で", en: "Place of an action: で" },
          { q: "{公園|こうえん}（　　）{犬|いぬ}が います。", a: "に", romaji: "ni", pt: "Lugar de existência: に", en: "Place of existence: に" },
          { q: "{窓|まど}の {近|ちか}くに {机|つくえ}が （　　）。", a: "あります", romaji: "arimasu", pt: "Coisa", en: "A thing" },
          { q: "{友達|ともだち}は {部屋|へや}に （　　）。", a: "います", romaji: "imasu", pt: "Pessoa", en: "A person" }
        ]
      },
      {
        desc: "2. {読|よ}み{物|もの} (Leitura): わたしの {部屋|へや}", desc_en: "2. Reading: my room",
        questions: [
          {
            q: `<div class="reading-box">わたしの {部屋|へや}に {机|つくえ}と ベッドが あります。{机|つくえ}の {上|うえ}に {本|ほん}や ノートが あります。ベッドの {下|した}に {猫|ねこ}が います。{窓|まど}の {外|そと}に {木|き}が あります。</div>{質問|しつもん}: {猫|ねこ}は どこに いますか。<br>➔ ＿＿＿＿＿＿＿＿＿＿に います。`,
            a: "ベッドの{下|した}",
            romaji: "beddo no shita",
            pt: "Embaixo da cama.", en: "Under the bed."
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
          { tokens: ["{部屋|へや}に", "{机|つくえ}が", "あります。"], pt: "Há uma escrivaninha no quarto.", en: "There is a desk in the room.", romaji: "Heya ni tsukue ga arimasu." },
          { tokens: ["{郵便局|ゆうびんきょく}は", "{駅|えき}の", "{前|まえ}に", "あります。"], pt: "O correio fica na frente da estação.", en: "The post office is in front of the station.", romaji: "Yuubinkyoku wa eki no mae ni arimasu." },
          { tokens: ["{猫|ねこ}は", "{箱|はこ}の", "{中|なか}に", "います。"], pt: "O gato está dentro da caixa.", en: "The cat is inside the box.", romaji: "Neko wa hako no naka ni imasu." },
          { tokens: ["{机|つくえ}の", "{上|うえ}に", "{本|ほん}や", "ノートが", "あります。"], pt: "Em cima da mesa há livros, cadernos, etc.", en: "On the desk there are books, notebooks, and so on.", romaji: "Tsukue no ue ni hon ya nooto ga arimasu." }
        ]
      }
    ]
  }
};
