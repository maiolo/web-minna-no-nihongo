/*
 * Kanji do JLPT N5 - parte 3: verbos, adjetivos e sociedade (lugares, estudo e coisas).
 * Formato e notação: veja o cabeçalho de n5-kanji-1.js.
 */
window.JLPT_N5_KANJI = (window.JLPT_N5_KANJI || []).concat([

    /* ---------- Verbos ---------- */
    {
        k: "見", pt: "ver; olhar", en: "to see; to look", on: ["ケン"], kun: ["み(る)", "み(える)", "み(せる)"], cat: "verbos",
        ex: [
            ["み(る)", "{映画|えいが}を {見|み}ます。", "Assisto a um filme.", { en: "I watch a movie." }],
            ["み(せる)", "{写真|しゃしん}を {見|み}せてください。", "Mostre a foto, por favor.", { en: "Please show me the photo." }],
            ["み(える)", "{山|やま}が {見|み}えます。", "Dá para ver a montanha.", { en: "I can see the mountain." }],
            ["ケン", "{見学|けんがく}します。", "Faço uma visita de estudo.", { en: "I go on a study visit." }]
        ]
    },
    {
        k: "行", pt: "ir; linha", en: "to go; line", on: ["コウ", "ギョウ"], kun: ["い(く)", "ゆ(く)", "おこな(う)"], cat: "verbos",
        ex: [
            ["い(く)", "{学校|がっこう}^へ {行|い}きます。", "Vou à escola.", { en: "I go to school." }],
            ["コウ", "{銀行|ぎんこう}で お{金|かね}を {出|だ}します。", "Retiro dinheiro no banco.", { en: "I withdraw money at the bank." }],
            ["コウ", "{旅行|りょこう}が {好|す}きです。", "Gosto de viajar.", { en: "I like traveling." }],
            ["ギョウ", "{行事|ぎょうじ}が あります。", "Há um evento.", { en: "There is an event." }],
            ["ゆ(く)", "{行|ゆ}く {年|とし}、{来|く}る {年|とし}。", "O ano que se vai e o ano que vem.", { en: "The year going out and the year coming in." }],
            ["おこな(う)", "{試験|しけん}を {行|おこな}います。", "Realizamos a prova.", { en: "We hold the exam." }]
        ]
    },
    {
        k: "来", pt: "vir", en: "to come", on: ["ライ"], kun: ["く(る)", "き(ます)", "こ(ない)"], cat: "verbos",
        ex: [
            ["き(ます)", "{友|とも}だちが {来|き}ます。", "Um amigo vem.", { en: "A friend is coming." }],
            ["く(る)", "{春|はる}が {来|く}る。", "A primavera chega.", { en: "Spring arrives." }],
            ["こ(ない)", "{彼|かれ}^は {来|こ}ない。", "Ele não vem.", { en: "He/she isn't coming." }],
            ["ライ", "{来週|らいしゅう} {会|あ}いましょう。", "Vamos nos encontrar na semana que vem.", { en: "Let's meet next week." }]
        ],
        note: "Verbo irregular: 来る (くる) → 来ます (きます), 来ない (こない), 来た (きた).", note_en: "Irregular verb: 来る (くる) → 来ます (きます), 来ない (こない), 来た (きた)."
    },
    {
        k: "出", pt: "sair; tirar", en: "to go out; to take out", on: ["シュツ"], kun: ["で(る)", "だ(す)"], cat: "verbos",
        ex: [
            ["で(る)", "{家|いえ}を {出|で}ます。", "Saio de casa.", { en: "I leave home." }],
            ["だ(す)", "{手紙|てがみ}を {出|だ}します。", "Envio uma carta.", { en: "I send a letter." }],
            ["シュツ", "{出発|しゅっぱつ}^は {九時|くじ}です。", "A partida é às nove.", { en: "Departure is at nine." }]
        ]
    },
    {
        k: "入", pt: "entrar; colocar", en: "to enter; to put in", on: ["ニュウ"], kun: ["い(る)", "はい(る)", "い(れる)"], cat: "verbos",
        ex: [
            ["はい(る)", "{部屋|へや}に {入|はい}ります。", "Entro no quarto.", { en: "I enter the room." }],
            ["い(れる)", "お{茶|ちゃ}に {砂糖|さとう}を {入|い}れます。", "Coloco açúcar no chá.", { en: "I put sugar in the tea." }],
            ["ニュウ", "{入学|にゅうがく}します。", "Entro na escola.", { en: "I enter school." }],
            ["い(る)", "{気|き}に {入|い}りました。", "Gostei (foi do meu agrado).", { en: "I liked it (it pleased me)." }]
        ]
    },
    {
        k: "立", pt: "ficar em pé; levantar", en: "to stand; to get up", on: ["リツ"], kun: ["た(つ)", "た(てる)"], cat: "verbos",
        ex: [
            ["た(つ)", "{立|た}ってください。", "Levante-se, por favor.", { en: "Please stand up." }],
            ["リツ", "{国立|こくりつ}の {大学|だいがく}です。", "É uma universidade nacional.", { en: "It is a national university." }]
        ]
    },
    {
        k: "休", pt: "descansar; folga", en: "to rest; day off", on: ["キュウ"], kun: ["やす(む)", "やす(み)"], cat: "verbos",
        ex: [
            ["やす(む)", "{今日|きょう}^は {会社|かいしゃ}を {休|やす}みます。", "Hoje falto ao trabalho.", { en: "Today I'm off work." }],
            ["やす(み)", "{明日|あした}^は {休|やす}みです。", "Amanhã é folga.", { en: "Tomorrow is a day off." }],
            ["キュウ", "{休憩|きゅうけい}しましょう。", "Vamos fazer uma pausa.", { en: "Let's take a break." }]
        ]
    },
    {
        k: "食", pt: "comer; comida", en: "to eat; food", on: ["ショク"], kun: ["た(べる)", "く(う)"], cat: "verbos",
        ex: [
            ["た(べる)", "{朝|あさ}ごはんを {食|た}べます。", "Tomo café da manhã.", { en: "I have breakfast." }],
            ["ショク", "{食事|しょくじ}を します。", "Faço uma refeição.", { en: "I have a meal." }],
            ["ショク", "{和食|わしょく}が {好|す}きです。", "Gosto de comida japonesa.", { en: "I like Japanese food." }],
            ["く(う)", "{魚|さかな}を {食|く}う。", "Como peixe (fala informal).", { en: "I eat fish (casual speech)." }]
        ]
    },
    {
        k: "飲", pt: "beber", en: "to drink", on: ["イン"], kun: ["の(む)"], cat: "verbos",
        ex: [
            ["の(む)", "お{茶|ちゃ}を {飲|の}みます。", "Bebo chá.", { en: "I drink tea." }],
            ["の(む)", "{薬|くすり}を {飲|の}みます。", "Tomo o remédio.", { en: "I take the medicine." }],
            ["イン", "{飲食|いんしょく}{禁止|きんし}です。", "É proibido comer e beber.", { en: "Eating and drinking are prohibited." }]
        ]
    },
    {
        k: "買", pt: "comprar", en: "to buy", on: ["バイ"], kun: ["か(う)"], cat: "verbos",
        ex: [
            ["か(う)", "{本|ほん}を {買|か}います。", "Compro um livro.", { en: "I buy a book." }],
            ["か(う)", "{何|なに}を {買|か}いましたか。", "O que você comprou?", { en: "What did you buy?" }],
            ["バイ", "{土地|とち}の {売買|ばいばい}を します。", "Faço a compra e venda de terrenos.", { en: "I buy and sell land." }]
        ],
        note: "O on'yomi バイ aparece em palavras como 売買 (ばいばい, compra e venda), fora do N5.", note_en: "The on reading バイ appears in words like 売買 (ばいばい, buying and selling), outside N5."
    },
    {
        k: "会", pt: "encontrar; reunião", en: "to meet; meeting", on: ["カイ", "エ"], kun: ["あ(う)"], cat: "verbos",
        ex: [
            ["あ(う)", "{友|とも}だちに {会|あ}います。", "Encontro um amigo.", { en: "I meet a friend." }],
            ["カイ", "{会社|かいしゃ}^へ {行|い}きます。", "Vou à empresa.", { en: "I go to the company." }],
            ["カイ", "{会議|かいぎ}^は {三時|さんじ}です。", "A reunião é às três.", { en: "The meeting is at three." }],
            ["エ", "{軽|かる}く {会釈|えしゃく}しました。", "Cumprimentei com um leve aceno de cabeça.", { en: "I greeted with a slight nod." }]
        ]
    },
    {
        k: "言", pt: "dizer; palavra", en: "to say; word", on: ["ゲン", "ゴン"], kun: ["い(う)", "こと"], cat: "verbos",
        ex: [
            ["い(う)", "{何|なん}と {言|い}いましたか。", "O que você disse?", { en: "What did you say?" }],
            ["い(う)", "{名前|なまえ}を {言|い}ってください。", "Diga seu nome, por favor.", { en: "Please say your name." }],
            ["ゲン", "{言語|げんご}を {勉強|べんきょう}します。", "Estudo línguas.", { en: "I study languages." }],
            ["こと", "{新|あたら}しい {言葉|ことば}を {覚|おぼ}えます。", "Aprendo palavras novas.", { en: "I learn new words." }],
            ["ゴン", "{遺言|ゆいごん}を {読|よ}みます。", "Leio o testamento.", { en: "I read the will." }]
        ]
    },
    {
        k: "話", pt: "falar; conversa", en: "to speak; conversation", on: ["ワ"], kun: ["はな(す)", "はなし"], cat: "verbos",
        ex: [
            ["はな(す)", "{先生|せんせい}と {話|はな}します。", "Converso com o professor.", { en: "I talk with the teacher." }],
            ["はなし", "{話|はなし}を {聞|き}きます。", "Escuto a história.", { en: "I listen to the story." }],
            ["ワ", "{電話|でんわ}を かけます。", "Faço uma ligação.", { en: "I make a phone call." }]
        ]
    },
    {
        k: "聞", pt: "ouvir; perguntar", en: "to hear; to ask", on: ["ブン"], kun: ["き(く)", "き(こえる)"], cat: "verbos",
        ex: [
            ["き(く)", "{音楽|おんがく}を {聞|き}きます。", "Ouço música.", { en: "I listen to music." }],
            ["ブン", "{新聞|しんぶん}を {読|よ}みます。", "Leio o jornal.", { en: "I read the newspaper." }],
            ["き(こえる)", "{声|こえ}が {聞|き}こえます。", "Ouço uma voz.", { en: "I hear a voice." }]
        ]
    },
    {
        k: "書", pt: "escrever", en: "to write", on: ["ショ"], kun: ["か(く)"], cat: "verbos",
        ex: [
            ["か(く)", "{手紙|てがみ}を {書|か}きます。", "Escrevo uma carta.", { en: "I write a letter." }],
            ["ショ", "{辞書|じしょ}を {使|つか}います。", "Uso um dicionário.", { en: "I use a dictionary." }],
            ["ショ", "{図書館|としょかん}で {勉強|べんきょう}します。", "Estudo na biblioteca.", { en: "I study at the library." }]
        ]
    },
    {
        k: "読", pt: "ler", en: "to read", on: ["ドク", "トク"], kun: ["よ(む)"], cat: "verbos",
        ex: [
            ["よ(む)", "{本|ほん}を {読|よ}みます。", "Leio um livro.", { en: "I read a book." }],
            ["ドク", "{読書|どくしょ}が {好|す}きです。", "Gosto de ler.", { en: "I like reading." }],
            ["トク", "{読本|とくほん}で {勉強|べんきょう}します。", "Estudo com um livro de leitura.", { en: "I study with a reading book." }]
        ]
    },

    /* ---------- Adjetivos ---------- */
    {
        k: "大", pt: "grande", en: "big", on: ["ダイ", "タイ"], kun: ["おお(きい)", "おお(いに)"], cat: "adjetivos",
        ex: [
            ["おお(きい)", "{大|おお}きい {犬|いぬ}が います。", "Há um cachorro grande.", { en: "There is a big dog." }],
            ["ダイ", "{大学|だいがく}で {勉強|べんきょう}します。", "Estudo na universidade.", { en: "I study at university." }],
            ["ダイ", "{大丈夫|だいじょうぶ}ですか。", "Está tudo bem?", { en: "Is everything all right?" }],
            ["タイ", "{大切|たいせつ}な {友|とも}だちです。", "É um amigo importante.", { en: "He/she is an important friend." }]
        ]
    },
    {
        k: "小", pt: "pequeno", en: "small", on: ["ショウ"], kun: ["ちい(さい)", "こ", "お"], cat: "adjetivos",
        ex: [
            ["ちい(さい)", "{小|ちい}さい {猫|ねこ}です。", "É um gato pequeno.", { en: "It is a small cat." }],
            ["ショウ", "{小学生|しょうがくせい}です。", "Sou aluno do ensino fundamental.", { en: "I am an elementary school student." }],
            ["こ", "{小鳥|ことり}が {鳴|な}いています。", "O passarinho está cantando.", { en: "The little bird is singing." }],
            ["お", "{小川|おがわ}で {遊|あそ}びます。", "Brinco no riacho.", { en: "I play in the stream." }]
        ]
    },
    {
        k: "高", pt: "alto; caro", en: "tall; expensive", on: ["コウ"], kun: ["たか(い)"], cat: "adjetivos",
        ex: [
            ["たか(い)", "あの {山|やま}^は {高|たか}いです。", "Aquela montanha é alta.", { en: "That mountain is tall." }],
            ["たか(い)", "この カメラ^は {高|たか}いです。", "Esta câmera é cara.", { en: "This camera is expensive." }],
            ["コウ", "{高校|こうこう}^へ {行|い}きます。", "Vou ao colégio (ensino médio).", { en: "I go to high school." }]
        ]
    },
    {
        k: "安", pt: "barato; tranquilo", en: "cheap; peaceful", on: ["アン"], kun: ["やす(い)"], cat: "adjetivos",
        ex: [
            ["やす(い)", "この {店|みせ}^は {安|やす}いです。", "Esta loja é barata.", { en: "This shop is cheap." }],
            ["アン", "{安心|あんしん}してください。", "Fique tranquilo(a).", { en: "Rest easy." }],
            ["アン", "{安全|あんぜん}な {道|みち}です。", "É um caminho seguro.", { en: "It is a safe road." }]
        ]
    },
    {
        k: "新", pt: "novo", en: "new", on: ["シン"], kun: ["あたら(しい)", "にい", "あら(た)"], cat: "adjetivos",
        ex: [
            ["あたら(しい)", "{新|あたら}しい {車|くるま}を {買|か}いました。", "Comprei um carro novo.", { en: "I bought a new car." }],
            ["シン", "{新年|しんねん} おめでとう ございます。", "Feliz Ano Novo.", { en: "Happy New Year." }],
            ["シン", "{新幹線|しんかんせん}に {乗|の}ります。", "Pego o trem-bala.", { en: "I take the bullet train." }],
            ["にい", "{新潟|にいがた}^は {米|こめ}が {有名|ゆうめい}です。", "Niigata é famosa pelo arroz.", { en: "Niigata is famous for its rice." }],
            ["あら(た)", "{新|あら}たに {始|はじ}めます。", "Começo de novo.", { en: "I start again." }]
        ]
    },
    {
        k: "古", pt: "velho; antigo", en: "old; ancient", on: ["コ"], kun: ["ふる(い)"], cat: "adjetivos",
        ex: [
            ["ふる(い)", "{古|ふる}い {本|ほん}です。", "É um livro antigo.", { en: "It is an old book." }],
            ["ふる(い)", "{古|ふる}い {家|いえ}に {住|す}んでいます。", "Moro numa casa antiga.", { en: "I live in an old house." }],
            ["コ", "{中古車|ちゅうこしゃ}を {買|か}います。", "Compro um carro usado.", { en: "I buy a used car." }]
        ],
        note: "古い é para coisas antigas ou usadas; não se usa para pessoas (seria rude).", note_en: "古い is for old or used things; it is not used for people (it would be rude)."
    },
    {
        k: "長", pt: "longo; chefe", en: "long; chief", on: ["チョウ"], kun: ["なが(い)"], cat: "adjetivos",
        ex: [
            ["なが(い)", "{髪|かみ}が {長|なが}いです。", "O cabelo é comprido.", { en: "The hair is long." }],
            ["なが(い)", "{長|なが}い {間|あいだ} {待|ま}ちました。", "Esperei por muito tempo.", { en: "I waited for a long time." }],
            ["チョウ", "{社長|しゃちょう}^は {忙|いそが}しいです。", "O presidente da empresa está ocupado.", { en: "The company president is busy." }]
        ]
    },
    {
        k: "多", pt: "muito; numeroso", en: "many; numerous", on: ["タ"], kun: ["おお(い)"], cat: "adjetivos",
        ex: [
            ["おお(い)", "{人|ひと}が {多|おお}いです。", "Há muita gente.", { en: "There are a lot of people." }],
            ["おお(い)", "{雨|あめ}が {多|おお}い {季節|きせつ}です。", "É a estação de muita chuva.", { en: "It is the rainy season." }],
            ["タ", "{多少|たしょう} {高|たか}いです。", "É um pouco caro.", { en: "It is a little expensive." }]
        ]
    },
    {
        k: "少", pt: "pouco", en: "few; little", on: ["ショウ"], kun: ["すく(ない)", "すこ(し)"], cat: "adjetivos",
        ex: [
            ["すこ(し)", "{少|すこ}し {待|ま}ってください。", "Espere um pouco.", { en: "Wait a little." }],
            ["すく(ない)", "{人|ひと}が {少|すく}ないです。", "Há pouca gente.", { en: "There are few people." }],
            ["ショウ", "{少年|しょうねん}が {走|はし}っています。", "O menino está correndo.", { en: "The boy is running." }]
        ]
    },
    {
        k: "白", pt: "branco", en: "white", on: ["ハク", "ビャク"], kun: ["しろ(い)", "しろ", "しら"], cat: "adjetivos",
        ex: [
            ["しろ(い)", "{白|しろ}い {花|はな}です。", "É uma flor branca.", { en: "It is a white flower." }],
            ["しろ", "{白|しろ}と {黒|くろ}の {猫|ねこ}です。", "É um gato branco e preto.", { en: "It is a black and white cat." }],
            ["ハク", "{白鳥|はくちょう}が {泳|およ}いでいます。", "O cisne está nadando.", { en: "The swan is swimming." }],
            ["ビャク", "{白夜|びゃくや}を {見|み}てみたいです。", "Quero ver o sol da meia-noite.", { en: "I want to see the midnight sun." }],
            ["しら", "{白髪|しらが}が {増|ふ}えました。", "Meus cabelos brancos aumentaram.", { en: "My gray hair has increased." }]
        ]
    },

    /* ---------- Lugares, estudo e coisas ---------- */
    {
        k: "国", pt: "país", en: "country", on: ["コク", "ゴク"], kun: ["くに"], cat: "sociedade",
        ex: [
            ["くに", "{私|わたし}の {国|くに}^は ブラジルです。", "Meu país é o Brasil.", { en: "My country is Brazil." }],
            ["コク", "{外国|がいこく}の {友|とも}だちが います。", "Tenho um amigo estrangeiro.", { en: "I have a foreign friend." }],
            ["ゴク (sonorização)", "{中国|ちゅうごく}^へ {行|い}きます。", "Vou à China.", { en: "I'm going to China." }]
        ]
    },
    {
        k: "校", pt: "escola", en: "school", on: ["コウ"], kun: [], cat: "sociedade",
        ex: [
            ["コウ", "{高校|こうこう}の {先生|せんせい}です。", "Sou professor(a) de colégio.", { en: "I am a high school teacher." }],
            ["コウ", "{学校|がっこう}^は {九時|くじ}に {始|はじ}まります。", "A escola começa às nove.", { en: "School starts at nine." }]
        ],
        note: "Em 学校 (がっこう) é o 学 que muda (がっ); 校 continua こう.", note_en: "In 学校 (がっこう) it is 学 that changes (がっ); 校 stays こう."
    },
    {
        k: "社", pt: "empresa; santuário", en: "company; shrine", on: ["シャ", "ジャ"], kun: ["やしろ"], cat: "sociedade",
        ex: [
            ["シャ", "{会社|かいしゃ}で {働|はたら}きます。", "Trabalho na empresa.", { en: "I work at the company." }],
            ["シャ", "{社長|しゃちょう}に {会|あ}います。", "Encontro o presidente da empresa.", { en: "I meet the company president." }],
            ["ジャ (sonorização)", "{神社|じんじゃ}^へ {行|い}きます。", "Vou ao santuário xintoísta.", { en: "I go to the Shinto shrine." }],
            ["やしろ", "{山|やま}の {上|うえ}に {小|ちい}さな {社|やしろ}が あります。", "Há um pequeno santuário no alto da montanha.", { en: "There is a small shrine at the top of the mountain." }]
        ]
    },
    {
        k: "店", pt: "loja", en: "shop", on: ["テン"], kun: ["みせ"], cat: "sociedade",
        ex: [
            ["みせ", "{新|あたら}しい {店|みせ}が できました。", "Abriu uma loja nova.", { en: "A new shop has opened." }],
            ["テン", "{書店|しょてん}で {本|ほん}を {買|か}います。", "Compro livros na livraria.", { en: "I buy books at the bookstore." }],
            ["テン", "{店員|てんいん}さんに {聞|き}きます。", "Pergunto ao atendente.", { en: "I ask the shop assistant." }]
        ]
    },
    {
        k: "駅", pt: "estação", en: "station", on: ["エキ"], kun: [], cat: "sociedade",
        ex: [
            ["エキ", "{駅|えき}^は どこですか。", "Onde fica a estação?", { en: "Where is the station?" }],
            ["エキ", "{東京駅|とうきょうえき}から {乗|の}ります。", "Embarco na estação de Tóquio.", { en: "I board at Tokyo Station." }],
            ["エキ", "{駅|えき}の {前|まえ}に {店|みせ}が あります。", "Há uma loja em frente à estação.", { en: "There is a shop in front of the station." }]
        ]
    },
    {
        k: "車", pt: "carro; veículo", en: "car; vehicle", on: ["シャ"], kun: ["くるま"], cat: "sociedade",
        ex: [
            ["くるま", "{車|くるま}で {行|い}きます。", "Vou de carro.", { en: "I go by car." }],
            ["シャ", "{電車|でんしゃ}に {乗|の}ります。", "Pego o trem.", { en: "I take the train." }],
            ["シャ", "{自転車|じてんしゃ}で {学校|がっこう}^へ {行|い}きます。", "Vou à escola de bicicleta.", { en: "I go to school by bicycle." }]
        ]
    },
    {
        k: "電", pt: "eletricidade", en: "electricity", on: ["デン"], kun: [], cat: "sociedade",
        ex: [
            ["デン", "{電気|でんき}を {消|け}します。", "Apago a luz.", { en: "I turn off the light." }],
            ["デン", "{電車|でんしゃ}が {来|き}ました。", "O trem chegou.", { en: "The train has arrived." }],
            ["デン", "{電話|でんわ}^は {高|たか}いです。", "O telefone é caro.", { en: "The telephone is expensive." }]
        ]
    },
    {
        k: "道", pt: "caminho; rua", en: "road; street", on: ["ドウ", "トウ"], kun: ["みち"], cat: "sociedade",
        ex: [
            ["みち", "{道|みち}が {分|わ}かりません。", "Não sei o caminho.", { en: "I don't know the way." }],
            ["ドウ", "{北海道|ほっかいどう}^は {広|ひろ}いです。", "Hokkaido é grande.", { en: "Hokkaido is big." }],
            ["ドウ", "{柔道|じゅうどう}を {習|なら}います。", "Aprendo judô.", { en: "I learn judo." }],
            ["トウ", "{神道|しんとう}の {神社|じんじゃ}です。", "É um santuário xintoísta.", { en: "It is a Shinto shrine." }]
        ]
    },
    {
        k: "円", pt: "iene; círculo", en: "yen; circle", on: ["エン"], kun: ["まる(い)"], cat: "sociedade",
        ex: [
            ["エン", "{百円|ひゃくえん}の {本|ほん}です。", "É um livro de 100 ienes.", { en: "It is a 100-yen book." }],
            ["エン", "{今|いま}、{一|いち}ドル^は {何円|なんえん}ですか。", "Quanto é um dólar em ienes agora?", { en: "How many yen is one dollar now?" }],
            ["まる(い)", "{円|まる}い {月|つき}が {出|で}ました。", "Surgiu uma lua redonda.", { en: "A round moon has appeared." }]
        ],
        note: "Para \"redondo\", o mais comum é 丸い (まるい); 円い aparece pouco.", note_en: "For “round”, 丸い (まるい) is the most common; 円い rarely appears."
    },
    {
        k: "本", pt: "livro; origem; contador de objetos longos", en: "book; origin; counter for long objects", on: ["ホン", "ボン", "ポン"], kun: ["もと"], cat: "sociedade",
        ex: [
            ["ホン", "{本|ほん}を {読|よ}みます。", "Leio um livro.", { en: "I read a book." }],
            ["ホン", "{日本|にほん}に {住|す}んでいます。", "Moro no Japão.", { en: "I live in Japan." }],
            ["ポン", "{鉛筆|えんぴつ}を {一本|いっぽん} {買|か}います。", "Compro um lápis.", { en: "I buy a pencil." }],
            ["ボン", "{三本|さんぼん} ください。", "Me dê três (garrafas, canetas...).", { en: "Give me three (bottles, pens...)." }],
            ["もと", "{山本|やまもと}さん^は {先生|せんせい}です。", "O senhor Yamamoto é professor.", { en: "Mr. Yamamoto is a teacher." }]
        ],
        note: "Como contador: いっぽん, にほん, さんぼん, よんほん, ごほん, ろっぽん...", note_en: "As a counter: いっぽん, にほん, さんぼん, よんほん, ごほん, ろっぽん..."
    },
    {
        k: "語", pt: "língua; palavra", en: "language; word", on: ["ゴ"], kun: ["かた(る)"], cat: "sociedade",
        ex: [
            ["ゴ", "{日本語|にほんご}を {勉強|べんきょう}します。", "Estudo japonês.", { en: "I study Japanese." }],
            ["ゴ", "{英語|えいご}が {分|わ}かります。", "Entendo inglês.", { en: "I understand English." }],
            ["ゴ", "{単語|たんご}を {覚|おぼ}えます。", "Memorizo palavras.", { en: "I memorize words." }],
            ["かた(る)", "{夢|ゆめ}を {語|かた}ります。", "Falo sobre meus sonhos.", { en: "I talk about my dreams." }]
        ]
    },
    {
        k: "学", pt: "estudar; aprendizado", en: "to study; learning", on: ["ガク"], kun: ["まな(ぶ)"], cat: "sociedade",
        ex: [
            ["ガク", "{留学|りゅうがく}したいです。", "Quero estudar no exterior.", { en: "I want to study abroad." }],
            ["ガク", "{大学生|だいがくせい}です。", "Sou universitário(a).", { en: "I am a university student." }],
            ["ガッ", "{学校|がっこう}^は {駅|えき}の {近|ちか}くに あります。", "A escola fica perto da estação.", { en: "The school is near the station." }],
            ["まな(ぶ)", "{日本語|にほんご}を {学|まな}びます。", "Aprendo japonês.", { en: "I learn Japanese." }]
        ]
    },
    {
        k: "気", pt: "espírito; ânimo; ar", en: "spirit; energy; air", on: ["キ", "ケ"], kun: [], cat: "sociedade",
        ex: [
            ["キ", "{元気|げんき}ですか。", "Você está bem?", { en: "Are you well?" }],
            ["キ", "{気|き}を つけてください。", "Tome cuidado.", { en: "Be careful." }],
            ["キ", "{病気|びょうき}です。", "Estou doente.", { en: "I am sick." }],
            ["ケ", "{気配|けはい}が します。", "Sinto uma presença.", { en: "I sense a presence." }]
        ],
        note: "Muitas expressões: 天気 (tempo), 電気 (eletricidade/luz), 元気 (disposição), 病気 (doença).", note_en: "Many expressions: 天気 (weather), 電気 (electricity/light), 元気 (energy, well), 病気 (illness)."
    },
    {
        k: "何", pt: "o quê; quanto", en: "what; how much", on: ["カ"], kun: ["なに", "なん"], cat: "sociedade",
        ex: [
            ["なに", "{何|なに}を {食|た}べますか。", "O que você vai comer?", { en: "What are you going to eat?" }],
            ["なん", "{何|なん}ですか。", "O que é?", { en: "What is it?" }],
            ["なん", "{何時|なんじ}ですか。", "Que horas são?", { en: "What time is it?" }],
            ["なん", "{何人|なんにん}ですか。", "Quantas pessoas são?", { en: "How many people are there?" }],
            ["カ", "{幾何学|きかがく}^は {難|むずか}しいです。", "A geometria é difícil.", { en: "Geometry is difficult." }]
        ],
        note: "Antes de contadores e de です, usa-se なん (何時, 何人, 何ですか); antes de を e が, usa-se なに (何を, 何が).", note_en: "Before counters and です, なん is used (何時, 何人, 何ですか); before を and が, なに is used (何を, 何が)."
    }
]);
