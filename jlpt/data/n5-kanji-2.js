/*
 * Kanji do JLPT N5 - parte 2: natureza, pessoas, corpo e posição.
 * Formato e notação: veja o cabeçalho de n5-kanji-1.js.
 */
window.JLPT_N5_KANJI = (window.JLPT_N5_KANJI || []).concat([

    /* ---------- Natureza e elementos ---------- */
    {
        k: "火", pt: "fogo", en: "fire", on: ["カ"], kun: ["ひ"], cat: "natureza",
        ex: [
            ["カ", "{火曜日|かようび}に {会|あ}いましょう。", "Vamos nos encontrar na terça-feira.", { en: "Let's meet on Tuesday." }],
            ["ひ", "{火|ひ}を {消|け}してください。", "Apague o fogo, por favor.", { en: "Put out the fire, please." }],
            ["カ", "{火事|かじ}です！", "Incêndio!", { en: "Fire!" }]
        ]
    },
    {
        k: "水", pt: "água", en: "water", on: ["スイ"], kun: ["みず"], cat: "natureza",
        ex: [
            ["スイ", "{水曜日|すいようび}^は {仕事|しごと}が あります。", "Na quarta-feira tenho trabalho.", { en: "On Wednesday I have work." }],
            ["みず", "{冷|つめ}たい {水|みず}を ください。", "Água gelada, por favor.", { en: "Cold water, please." }],
            ["スイ", "{水泳|すいえい}が {好|す}きです。", "Gosto de natação.", { en: "I like swimming." }]
        ]
    },
    {
        k: "木", pt: "árvore; madeira", en: "tree; wood", on: ["モク", "ボク"], kun: ["き", "こ"], cat: "natureza",
        ex: [
            ["モク", "{木曜日|もくようび}^は {忙|いそが}しいです。", "Na quinta-feira estou ocupado(a).", { en: "On Thursday I'm busy." }],
            ["き", "{大|おお}きい {木|き}が あります。", "Há uma árvore grande.", { en: "There is a big tree." }],
            ["こ (especial)", "{木|こ}の {葉|は}が {落|お}ちます。", "As folhas da árvore caem.", { en: "The leaves of the tree fall." }],
            ["ボク", "{大木|たいぼく}の {下|した}で {休|やす}みます。", "Descanso embaixo de uma árvore grande.", { en: "I rest under a big tree." }]
        ]
    },
    {
        k: "土", pt: "terra; solo", en: "earth; soil", on: ["ド", "ト"], kun: ["つち"], cat: "natureza",
        ex: [
            ["ド", "{土曜日|どようび}^は {休|やす}みです。", "Sábado é folga.", { en: "Saturday is a day off." }],
            ["つち", "{土|つち}が {黒|くろ}いです。", "A terra é escura.", { en: "The soil is dark." }],
            ["ト", "{土地|とち}が {高|たか}いです。", "O terreno é caro.", { en: "The land is expensive." }]
        ]
    },
    {
        k: "金", pt: "ouro; dinheiro", en: "gold; money", on: ["キン"], kun: ["かね"], cat: "natureza",
        ex: [
            ["キン", "{金曜日|きんようび}に パーティーが あります。", "Na sexta-feira tem festa.", { en: "On Friday there is a party." }],
            ["かね", "お{金|かね}が ありません。", "Não tenho dinheiro.", { en: "I have no money." }],
            ["キン", "{金|きん}の {時計|とけい}です。", "É um relógio de ouro.", { en: "It is a gold watch." }]
        ]
    },
    {
        k: "山", pt: "montanha", en: "mountain", on: ["サン", "ザン"], kun: ["やま"], cat: "natureza",
        ex: [
            ["やま", "{山|やま}に {登|のぼ}ります。", "Subo a montanha.", { en: "I climb the mountain." }],
            ["サン", "{富士山|ふじさん}^は {高|たか}いです。", "O Monte Fuji é alto.", { en: "Mount Fuji is tall." }],
            ["ザン (sonorização)", "{火山|かざん}が あります。", "Há um vulcão.", { en: "There is a volcano." }]
        ]
    },
    {
        k: "川", pt: "rio", en: "river", on: ["セン"], kun: ["かわ"], cat: "natureza",
        ex: [
            ["かわ", "{川|かわ}に {魚|さかな}が います。", "Há peixes no rio.", { en: "There are fish in the river." }],
            ["がわ (nome de rio)", "{多摩川|たまがわ}^は {長|なが}いです。", "O rio Tama é longo.", { en: "The Tama River is long." }],
            ["セン", "{河川|かせん}が {多|おお}い {国|くに}です。", "É um país com muitos rios.", { en: "It is a country with many rivers." }]
        ],
        note: "Em nomes de rios, 川 costuma virar がわ (多摩川, 隅田川). On'yomi セン aparece em palavras mais avançadas.", note_en: "In river names, 川 usually becomes がわ (多摩川, 隅田川). The on reading セン appears in more advanced words."
    },
    {
        k: "空", pt: "céu; vazio", en: "sky; empty", on: ["クウ"], kun: ["そら", "あ(く)", "から"], cat: "natureza",
        ex: [
            ["そら", "{空|そら}が {青|あお}いです。", "O céu está azul.", { en: "The sky is blue." }],
            ["クウ", "{空港|くうこう}^は {大|おお}きいです。", "O aeroporto é grande.", { en: "The airport is big." }],
            ["あ(く)", "{席|せき}が {空|あ}いています。", "O lugar está vago.", { en: "The place is vacant." }],
            ["から", "{空|から}の {箱|はこ}です。", "É uma caixa vazia.", { en: "It is an empty box." }]
        ]
    },
    {
        k: "天", pt: "céu; paraíso", en: "sky; heaven", on: ["テン"], kun: ["あま"], cat: "natureza",
        ex: [
            ["テン", "{天気|てんき}が いいです。", "O tempo está bom.", { en: "The weather is nice." }],
            ["テン", "{天気予報|てんきよほう}を {見|み}ます。", "Vejo a previsão do tempo.", { en: "I check the weather forecast." }],
            ["あま", "{天|あま}の {川|がわ}を {見|み}ました。", "Vi a Via Láctea.", { en: "I saw the Milky Way." }]
        ]
    },
    {
        k: "雨", pt: "chuva", en: "rain", on: ["ウ"], kun: ["あめ", "あま"], cat: "natureza",
        ex: [
            ["あめ", "{雨|あめ}が {降|ふ}っています。", "Está chovendo.", { en: "It is raining." }],
            ["あめ", "{雨|あめ}の {日|ひ}^は {家|いえ}に います。", "Em dias de chuva fico em casa.", { en: "On rainy days I stay home." }],
            ["あま", "{雨傘|あまがさ}を {持|も}っています。", "Tenho um guarda-chuva.", { en: "I have an umbrella." }],
            ["ウ", "{雨天|うてん}の {場合|ばあい}^は {中止|ちゅうし}です。", "Em caso de chuva, é cancelado.", { en: "In case of rain, it is cancelled." }]
        ]
    },
    {
        k: "花", pt: "flor", en: "flower", on: ["カ"], kun: ["はな"], cat: "natureza",
        ex: [
            ["はな", "{花|はな}が きれいです。", "As flores são bonitas.", { en: "The flowers are beautiful." }],
            ["はな", "{花見|はなみ}を します。", "Faço hanami (aprecio as flores de cerejeira).", { en: "I go hanami (cherry blossom viewing)." }],
            ["カ", "{花瓶|かびん}に {花|はな}を {入|い}れます。", "Coloco flores no vaso.", { en: "I put flowers in the vase." }]
        ]
    },
    {
        k: "魚", pt: "peixe", en: "fish", on: ["ギョ"], kun: ["さかな", "うお"], cat: "natureza",
        ex: [
            ["さかな", "{魚|さかな}が {好|す}きです。", "Gosto de peixe.", { en: "I like fish." }],
            ["ギョ", "{金魚|きんぎょ}を {飼|か}っています。", "Crio um peixinho dourado.", { en: "I keep a goldfish." }],
            ["うお", "{魚市場|うおいちば}^へ {行|い}きます。", "Vou ao mercado de peixe.", { en: "I go to the fish market." }]
        ]
    },

    /* ---------- Pessoas ---------- */
    {
        k: "人", pt: "pessoa", en: "person", on: ["ジン", "ニン"], kun: ["ひと"], cat: "pessoas",
        ex: [
            ["ひと", "あの {人|ひと}^は {誰|だれ}ですか。", "Quem é aquela pessoa?", { en: "Who is that person?" }],
            ["ジン", "{日本人|にほんじん}です。", "Sou japonês(a).", { en: "I am Japanese." }],
            ["ニン", "{何人|なんにん}ですか。", "Quantas pessoas são?", { en: "How many people are there?" }],
            ["り (especial)", "{一人|ひとり}で {住|す}んでいます。", "Moro sozinho(a).", { en: "I live alone." }]
        ],
        note: "ジン indica nacionalidade (日本人, 中国人); ニン conta pessoas (三人). 一人 e 二人 são especiais.", note_en: "ジン indicates nationality (日本人, 中国人); ニン counts people (三人). 一人 and 二人 are special."
    },
    {
        k: "男", pt: "homem; masculino", en: "man; male", on: ["ダン", "ナン"], kun: ["おとこ"], cat: "pessoas",
        ex: [
            ["おとこ", "{男|おとこ}の {人|ひと}です。", "É um homem.", { en: "It is a man." }],
            ["ダン", "{男性|だんせい}の {先生|せんせい}です。", "É um professor (homem).", { en: "He is a (male) teacher." }],
            ["ナン", "{長男|ちょうなん}です。", "Sou o filho mais velho.", { en: "I am the eldest son." }]
        ]
    },
    {
        k: "女", pt: "mulher; feminino", en: "woman; female", on: ["ジョ"], kun: ["おんな"], cat: "pessoas",
        ex: [
            ["おんな", "{女|おんな}の {子|こ}が います。", "Há uma menina.", { en: "There is a girl." }],
            ["ジョ", "{彼女|かのじょ}^は {先生|せんせい}です。", "Ela é professora.", { en: "She is a teacher." }],
            ["ジョ", "{女性|じょせい}の {先生|せんせい}です。", "É uma professora.", { en: "She is a (female) teacher." }]
        ]
    },
    {
        k: "子", pt: "criança; filho(a)", en: "child; son/daughter", on: ["シ", "ス"], kun: ["こ"], cat: "pessoas",
        ex: [
            ["こ", "{子|こ}どもが {遊|あそ}んでいます。", "As crianças estão brincando.", { en: "The children are playing." }],
            ["シ", "{帽子|ぼうし}を かぶります。", "Uso um chapéu.", { en: "I wear a hat." }],
            ["ス", "{椅子|いす}に {座|すわ}ります。", "Sento na cadeira.", { en: "I sit on the chair." }]
        ]
    },
    {
        k: "父", pt: "pai", en: "father", on: ["フ"], kun: ["ちち"], cat: "pessoas",
        ex: [
            ["ちち", "{父|ちち}^は {会社員|かいしゃいん}です。", "Meu pai é funcionário de empresa.", { en: "My father is a company employee." }],
            ["フ", "{祖父|そふ}^は {元気|げんき}です。", "Meu avô está bem.", { en: "My grandfather is well." }],
            ["とう (especial)", "お{父|とう}さん^は {優|やさ}しいですね。", "Seu pai é gentil, não é?", { en: "Your father is kind, isn't he?" }]
        ],
        note: "Para o pai dos outros, usa-se お父さん (おとうさん); para o próprio pai, 父 (ちち).", note_en: "For someone else's father, use お父さん (おとうさん); for your own father, 父 (ちち)."
    },
    {
        k: "母", pt: "mãe", en: "mother", on: ["ボ"], kun: ["はは"], cat: "pessoas",
        ex: [
            ["はは", "{母|はは}^は {先生|せんせい}です。", "Minha mãe é professora.", { en: "My mother is a teacher." }],
            ["ボ", "{祖母|そぼ}^は {八十歳|はちじゅっさい}です。", "Minha avó tem 80 anos.", { en: "My grandmother is 80 years old." }],
            ["かあ (especial)", "お{母|かあ}さん^は {料理|りょうり}が {上手|じょうず}です。", "A mãe cozinha bem.", { en: "Mother cooks well." }]
        ],
        note: "Para a mãe dos outros, usa-se お母さん (おかあさん); para a própria mãe, 母 (はは).", note_en: "For someone else's mother, use お母さん (おかあさん); for your own mother, 母 (はは)."
    },
    {
        k: "友", pt: "amigo", en: "friend", on: ["ユウ"], kun: ["とも"], cat: "pessoas",
        ex: [
            ["とも", "{友|とも}だちと {映画|えいが}を {見|み}ます。", "Assisto a um filme com um amigo.", { en: "I watch a movie with a friend." }],
            ["ユウ", "{友人|ゆうじん}に {会|あ}います。", "Encontro um amigo.", { en: "I meet a friend." }],
            ["ユウ", "{親友|しんゆう}が {二人|ふたり} います。", "Tenho dois melhores amigos.", { en: "I have two best friends." }]
        ]
    },
    {
        k: "先", pt: "antes; anterior; à frente", en: "before; previous; ahead", on: ["セン"], kun: ["さき"], cat: "pessoas",
        ex: [
            ["セン", "{先生|せんせい}^は {優|やさ}しいです。", "O professor é gentil.", { en: "The teacher is kind." }],
            ["セン", "{先月|せんげつ} {日本|にほん}^へ {行|い}きました。", "No mês passado fui ao Japão.", { en: "Last month I went to Japan." }],
            ["さき", "{先|さき}に {行|い}きます。", "Vou na frente.", { en: "I'll go ahead." }]
        ]
    },
    {
        k: "生", pt: "vida; nascer; cru", en: "life; to be born; raw", on: ["セイ", "ショウ"], kun: ["い(きる)", "う(まれる)", "なま", "は(える)", "き"], cat: "pessoas",
        ex: [
            ["セイ", "{私|わたし}^は {学生|がくせい}です。", "Sou estudante.", { en: "I am a student." }],
            ["う(まれる)", "{東京|とうきょう}で {生|う}まれました。", "Nasci em Tóquio.", { en: "I was born in Tokyo." }],
            ["なま", "{生|なま}の {魚|さかな}^は {食|た}べません。", "Não como peixe cru.", { en: "I don't eat raw fish." }],
            ["い(きる)", "{長|なが}く {生|い}きたいです。", "Quero viver por muito tempo.", { en: "I want to live a long time." }],
            ["ショウ", "{一生|いっしょう} {忘|わす}れません。", "Nunca esquecerei, por toda a vida.", { en: "I will never forget it, for the rest of my life." }],
            ["は(える)", "{庭|にわ}に {草|くさ}が {生|は}えました。", "Cresceu grama no jardim.", { en: "Grass has grown in the garden." }],
            ["き", "{生地|きじ}を {買|か}います。", "Compro tecido.", { en: "I buy fabric." }]
        ],
        note: "É um dos kanji com mais leituras. 先生 (せんせい) = professor; 学生 (がくせい) = estudante.", note_en: "It is one of the kanji with the most readings. 先生 (せんせい) = teacher; 学生 (がくせい) = student."
    },
    {
        k: "名", pt: "nome; famoso", en: "name; famous", on: ["メイ", "ミョウ"], kun: ["な"], cat: "pessoas",
        ex: [
            ["な", "お{名前|なまえ}^は {何|なん}ですか。", "Qual é o seu nome?", { en: "What is your name?" }],
            ["メイ", "{有名|ゆうめい}な {店|みせ}です。", "É uma loja famosa.", { en: "It is a famous shop." }],
            ["メイ", "{名刺|めいし}を ください。", "Me dê seu cartão de visita, por favor.", { en: "Please give me your business card." }],
            ["ミョウ", "{名字|みょうじ}を {教|おし}えてください。", "Diga seu sobrenome, por favor.", { en: "Please say your surname." }]
        ]
    },

    /* ---------- Corpo ---------- */
    {
        k: "手", pt: "mão", en: "hand", on: ["シュ"], kun: ["て"], cat: "corpo",
        ex: [
            ["て", "{手|て}を {洗|あら}います。", "Lavo as mãos.", { en: "I wash my hands." }],
            ["シュ", "{歌手|かしゅ}に なりたいです。", "Quero ser cantor(a).", { en: "I want to be a singer." }],
            ["ズ (especial)", "{上手|じょうず}ですね。", "Você é habilidoso(a), hein!", { en: "You are good at it, aren't you!" }]
        ],
        note: "上手 (じょうず, habilidoso) e 下手 (へた, desajeitado) têm leituras especiais.", note_en: "上手 (じょうず, skilled) and 下手 (へた, clumsy) have special readings."
    },
    {
        k: "目", pt: "olho", en: "eye", on: ["モク"], kun: ["め"], cat: "corpo",
        ex: [
            ["め", "{目|め}が {痛|いた}いです。", "Meus olhos doem.", { en: "My eyes hurt." }],
            ["め (ordinal)", "{三番目|さんばんめ}の {家|いえ}です。", "É a terceira casa.", { en: "It is the third house." }],
            ["モク", "{目的|もくてき}^は {何|なん}ですか。", "Qual é o objetivo?", { en: "What is the goal?" }]
        ],
        note: "Depois de um número, 目 (め) forma ordinais: 一番目 (primeiro), 二番目 (segundo).", note_en: "After a number, 目 (め) forms ordinals: 一番目 (first), 二番目 (second)."
    },
    {
        k: "口", pt: "boca; entrada", en: "mouth; entrance", on: ["コウ"], kun: ["くち"], cat: "corpo",
        ex: [
            ["くち", "{口|くち}を {開|あ}けてください。", "Abra a boca, por favor.", { en: "Open your mouth, please." }],
            ["ぐち (sonorização)", "{入口|いりぐち}^は どこですか。", "Onde fica a entrada?", { en: "Where is the entrance?" }],
            ["コウ", "{人口|じんこう}が {多|おお}いです。", "A população é grande.", { en: "The population is large." }]
        ],
        note: "入口 (いりぐち) = entrada e 出口 (でぐち) = saída: 口 vira ぐち.", note_en: "入口 (いりぐち) = entrance and 出口 (でぐち) = exit: 口 becomes ぐち."
    },
    {
        k: "耳", pt: "orelha", en: "ear", on: ["ジ"], kun: ["みみ"], cat: "corpo",
        ex: [
            ["みみ", "{耳|みみ}が {痛|いた}いです。", "Minha orelha dói.", { en: "My ear hurts." }],
            ["ジ", "{耳鼻科|じびか}^へ {行|い}きます。", "Vou ao otorrino.", { en: "I go to the ENT doctor." }]
        ]
    },
    {
        k: "足", pt: "perna; pé; ser suficiente", en: "leg; foot; to be enough", on: ["ソク"], kun: ["あし", "た(りる)", "た(す)"], cat: "corpo",
        ex: [
            ["あし", "{足|あし}が {長|なが}いです。", "As pernas são longas.", { en: "The legs are long." }],
            ["た(りる)", "お{金|かね}が {足|た}りません。", "Falta dinheiro.", { en: "I'm short of money." }],
            ["ソク", "{靴|くつ}を {二足|にそく} {買|か}いました。", "Comprei dois pares de sapatos.", { en: "I bought two pairs of shoes." }]
        ],
        note: "足 também é o contador de pares de calçados e meias: 一足, 二足.", note_en: "足 is also the counter for pairs of shoes and socks: 一足, 二足."
    },

    /* ---------- Posição e direção ---------- */
    {
        k: "上", pt: "em cima; subir", en: "above; to go up", on: ["ジョウ"], kun: ["うえ", "あ(がる)", "あ(げる)", "のぼ(る)", "かみ"], cat: "posicao",
        ex: [
            ["うえ", "{机|つくえ}の {上|うえ}に {本|ほん}が あります。", "Há um livro em cima da mesa.", { en: "There is a book on the table." }],
            ["あ(がる)", "{階段|かいだん}を {上|あ}がります。", "Subo a escada.", { en: "I go up the stairs." }],
            ["ジョウ", "{以上|いじょう}です。", "É tudo (para encerrar uma fala).", { en: "That's all (to end a speech)." }],
            ["のぼ(る)", "{坂|さか}を {上|のぼ}ります。", "Subo a ladeira.", { en: "I go up the hill." }],
            ["かみ", "{川上|かわかみ}に {住|す}んでいます。", "Moro rio acima.", { en: "I live upstream." }]
        ]
    },
    {
        k: "下", pt: "embaixo; descer", en: "below; to go down", on: ["カ", "ゲ"], kun: ["した", "さ(がる)", "くだ(さい)", "お(りる)"], cat: "posicao",
        ex: [
            ["した", "{椅子|いす}の {下|した}に {猫|ねこ}が います。", "Há um gato embaixo da cadeira.", { en: "There is a cat under the chair." }],
            ["くだ(さい)", "{少|すこ}し {待|ま}って {下|くだ}さい。", "Espere um pouco, por favor.", { en: "Please wait a moment." }],
            ["カ", "{地下鉄|ちかてつ}に {乗|の}ります。", "Pego o metrô.", { en: "I take the subway." }],
            ["さ(がる)", "{熱|ねつ}が {下|さ}がりました。", "A febre baixou.", { en: "The fever has gone down." }],
            ["ゲ", "{下水|げすい}の {工事|こうじ}を しています。", "Estão fazendo obras no esgoto.", { en: "They are doing work on the sewer." }],
            ["お(りる)", "{階段|かいだん}を {下|お}ります。", "Desço a escada.", { en: "I go down the stairs." }]
        ]
    },
    {
        k: "中", pt: "dentro; meio; durante", en: "inside; middle; during", on: ["チュウ", "ジュウ"], kun: ["なか"], cat: "posicao",
        ex: [
            ["なか", "{箱|はこ}の {中|なか}に {何|なに}が ありますか。", "O que há dentro da caixa?", { en: "What is inside the box?" }],
            ["チュウ", "{中国|ちゅうごく}の {友|とも}だちが います。", "Tenho um amigo da China.", { en: "I have a friend from China." }],
            ["ジュウ", "{一日中|いちにちじゅう} {雨|あめ}でした。", "Choveu o dia inteiro.", { en: "It rained all day." }]
        ],
        note: "Depois de palavras de tempo, 中 significa \"durante/todo\": 今日中 (hoje, até o fim do dia).", note_en: "After time words, 中 means “during/all through”: 今日中 (today, until the end of the day)."
    },
    {
        k: "外", pt: "fora; exterior", en: "outside; exterior", on: ["ガイ", "ゲ"], kun: ["そと", "ほか", "はず(す)"], cat: "posicao",
        ex: [
            ["そと", "{外|そと}^は {寒|さむ}いです。", "Lá fora está frio.", { en: "It is cold outside." }],
            ["ガイ", "{外国|がいこく}^へ {行|い}きたいです。", "Quero ir ao exterior.", { en: "I want to go abroad." }],
            ["はず(す)", "メガネを {外|はず}します。", "Tiro os óculos.", { en: "I take off my glasses." }],
            ["ゲ", "{外科|げか}の {先生|せんせい}です。", "É um médico cirurgião.", { en: "He is a surgeon." }],
            ["ほか", "{外|ほか}に {何|なに}か ありますか。", "Há mais alguma coisa?", { en: "Is there anything else?" }]
        ]
    },
    {
        k: "右", pt: "direita", en: "right", on: ["ウ", "ユウ"], kun: ["みぎ"], cat: "posicao",
        ex: [
            ["みぎ", "{右|みぎ}に {曲|ま}がってください。", "Vire à direita, por favor.", { en: "Please turn right." }],
            ["ウ", "{右折|うせつ}{禁止|きんし}です。", "É proibido virar à direita.", { en: "Right turns are prohibited." }],
            ["ユウ", "{左右|さゆう}を {見|み}てください。", "Olhe para os dois lados.", { en: "Look both ways." }]
        ]
    },
    {
        k: "左", pt: "esquerda", en: "left", on: ["サ"], kun: ["ひだり"], cat: "posicao",
        ex: [
            ["ひだり", "{左|ひだり}に {銀行|ぎんこう}が あります。", "Há um banco à esquerda.", { en: "There is a bank on the left." }],
            ["サ", "{左折|させつ}{禁止|きんし}です。", "É proibido virar à esquerda.", { en: "Left turns are prohibited." }],
            ["ひだり", "{左手|ひだりて}で {書|か}きます。", "Escrevo com a mão esquerda.", { en: "I write with my left hand." }]
        ]
    },
    {
        k: "東", pt: "leste", en: "east", on: ["トウ"], kun: ["ひがし"], cat: "posicao",
        ex: [
            ["ひがし", "{東|ひがし}から {太陽|たいよう}が {出|で}ます。", "O sol nasce no leste.", { en: "The sun rises in the east." }],
            ["トウ", "{東京|とうきょう}に {住|す}んでいます。", "Moro em Tóquio.", { en: "I live in Tokyo." }],
            ["トウ", "{関東|かんとう}^は {人|ひと}が {多|おお}いです。", "Em Kanto há muita gente.", { en: "There are a lot of people in Kanto." }]
        ]
    },
    {
        k: "西", pt: "oeste", en: "west", on: ["セイ", "サイ"], kun: ["にし"], cat: "posicao",
        ex: [
            ["にし", "{西|にし}の {空|そら}が {赤|あか}いです。", "O céu do oeste está vermelho.", { en: "The western sky is red." }],
            ["セイ", "{西洋|せいよう}の {料理|りょうり}が {好|す}きです。", "Gosto de comida ocidental.", { en: "I like Western food." }],
            ["サイ", "{関西|かんさい}に {住|す}んでいます。", "Moro em Kansai.", { en: "I live in Kansai." }]
        ]
    },
    {
        k: "南", pt: "sul", en: "south", on: ["ナン"], kun: ["みなみ"], cat: "posicao",
        ex: [
            ["みなみ", "{南|みなみ}の {国|くに}^へ {行|い}きたいです。", "Quero ir a um país do sul.", { en: "I want to go to a southern country." }],
            ["ナン", "{南極|なんきょく}^は {寒|さむ}いです。", "A Antártida é fria.", { en: "Antarctica is cold." }]
        ]
    },
    {
        k: "北", pt: "norte", en: "north", on: ["ホク"], kun: ["きた"], cat: "posicao",
        ex: [
            ["きた", "{北|きた}^は {寒|さむ}いです。", "O norte é frio.", { en: "The north is cold." }],
            ["ホク", "{東北|とうほく}^は {雪|ゆき}が {多|おお}いです。", "Em Tohoku neva muito.", { en: "In Tohoku it snows a lot." }],
            ["ホッ", "{北海道|ほっかいどう}^へ {行|い}きます。", "Vou a Hokkaido.", { en: "I'm going to Hokkaido." }]
        ]
    }
]);
