/*
 * Kanji do JLPT N5 - parte 2: natureza, pessoas, corpo e posição.
 * Formato e notação: veja o cabeçalho de n5-kanji-1.js.
 */
window.JLPT_N5_KANJI = (window.JLPT_N5_KANJI || []).concat([

    /* ---------- Natureza e elementos ---------- */
    {
        k: "火", pt: "fogo", on: ["カ"], kun: ["ひ"], cat: "natureza",
        ex: [
            ["カ", "{火曜日|かようび}に {会|あ}いましょう。", "Vamos nos encontrar na terça-feira."],
            ["ひ", "{火|ひ}を {消|け}してください。", "Apague o fogo, por favor."],
            ["カ", "{火事|かじ}です！", "Incêndio!"]
        ]
    },
    {
        k: "水", pt: "água", on: ["スイ"], kun: ["みず"], cat: "natureza",
        ex: [
            ["スイ", "{水曜日|すいようび}^は {仕事|しごと}が あります。", "Na quarta-feira tenho trabalho."],
            ["みず", "{冷|つめ}たい {水|みず}を ください。", "Água gelada, por favor."],
            ["スイ", "{水泳|すいえい}が {好|す}きです。", "Gosto de natação."]
        ]
    },
    {
        k: "木", pt: "árvore; madeira", on: ["モク", "ボク"], kun: ["き", "こ"], cat: "natureza",
        ex: [
            ["モク", "{木曜日|もくようび}^は {忙|いそが}しいです。", "Na quinta-feira estou ocupado(a)."],
            ["き", "{大|おお}きい {木|き}が あります。", "Há uma árvore grande."],
            ["こ (especial)", "{木|こ}の {葉|は}が {落|お}ちます。", "As folhas da árvore caem."],
            ["ボク", "{大木|たいぼく}の {下|した}で {休|やす}みます。", "Descanso embaixo de uma árvore grande."]
        ]
    },
    {
        k: "土", pt: "terra; solo", on: ["ド", "ト"], kun: ["つち"], cat: "natureza",
        ex: [
            ["ド", "{土曜日|どようび}^は {休|やす}みです。", "Sábado é folga."],
            ["つち", "{土|つち}が {黒|くろ}いです。", "A terra é escura."],
            ["ト", "{土地|とち}が {高|たか}いです。", "O terreno é caro."]
        ]
    },
    {
        k: "金", pt: "ouro; dinheiro", on: ["キン"], kun: ["かね"], cat: "natureza",
        ex: [
            ["キン", "{金曜日|きんようび}に パーティーが あります。", "Na sexta-feira tem festa."],
            ["かね", "お{金|かね}が ありません。", "Não tenho dinheiro."],
            ["キン", "{金|きん}の {時計|とけい}です。", "É um relógio de ouro."]
        ]
    },
    {
        k: "山", pt: "montanha", on: ["サン", "ザン"], kun: ["やま"], cat: "natureza",
        ex: [
            ["やま", "{山|やま}に {登|のぼ}ります。", "Subo a montanha."],
            ["サン", "{富士山|ふじさん}^は {高|たか}いです。", "O Monte Fuji é alto."],
            ["ザン (sonorização)", "{火山|かざん}が あります。", "Há um vulcão."]
        ]
    },
    {
        k: "川", pt: "rio", on: ["セン"], kun: ["かわ"], cat: "natureza",
        ex: [
            ["かわ", "{川|かわ}に {魚|さかな}が います。", "Há peixes no rio."],
            ["がわ (nome de rio)", "{多摩川|たまがわ}^は {長|なが}いです。", "O rio Tama é longo."],
            ["セン", "{河川|かせん}が {多|おお}い {国|くに}です。", "É um país com muitos rios."]
        ],
        note: "Em nomes de rios, 川 costuma virar がわ (多摩川, 隅田川). On'yomi セン aparece em palavras mais avançadas."
    },
    {
        k: "空", pt: "céu; vazio", on: ["クウ"], kun: ["そら", "あ(く)", "から"], cat: "natureza",
        ex: [
            ["そら", "{空|そら}が {青|あお}いです。", "O céu está azul."],
            ["クウ", "{空港|くうこう}^は {大|おお}きいです。", "O aeroporto é grande."],
            ["あ(く)", "{席|せき}が {空|あ}いています。", "O lugar está vago."],
            ["から", "{空|から}の {箱|はこ}です。", "É uma caixa vazia."]
        ]
    },
    {
        k: "天", pt: "céu; paraíso", on: ["テン"], kun: ["あま"], cat: "natureza",
        ex: [
            ["テン", "{天気|てんき}が いいです。", "O tempo está bom."],
            ["テン", "{天気予報|てんきよほう}を {見|み}ます。", "Vejo a previsão do tempo."],
            ["あま", "{天|あま}の {川|がわ}を {見|み}ました。", "Vi a Via Láctea."]
        ]
    },
    {
        k: "雨", pt: "chuva", on: ["ウ"], kun: ["あめ", "あま"], cat: "natureza",
        ex: [
            ["あめ", "{雨|あめ}が {降|ふ}っています。", "Está chovendo."],
            ["あめ", "{雨|あめ}の {日|ひ}^は {家|いえ}に います。", "Em dias de chuva fico em casa."],
            ["あま", "{雨傘|あまがさ}を {持|も}っています。", "Tenho um guarda-chuva."],
            ["ウ", "{雨天|うてん}の {場合|ばあい}^は {中止|ちゅうし}です。", "Em caso de chuva, é cancelado."]
        ]
    },
    {
        k: "花", pt: "flor", on: ["カ"], kun: ["はな"], cat: "natureza",
        ex: [
            ["はな", "{花|はな}が きれいです。", "As flores são bonitas."],
            ["はな", "{花見|はなみ}を します。", "Faço hanami (aprecio as flores de cerejeira)."],
            ["カ", "{花瓶|かびん}に {花|はな}を {入|い}れます。", "Coloco flores no vaso."]
        ]
    },
    {
        k: "魚", pt: "peixe", on: ["ギョ"], kun: ["さかな", "うお"], cat: "natureza",
        ex: [
            ["さかな", "{魚|さかな}が {好|す}きです。", "Gosto de peixe."],
            ["ギョ", "{金魚|きんぎょ}を {飼|か}っています。", "Crio um peixinho dourado."],
            ["うお", "{魚市場|うおいちば}^へ {行|い}きます。", "Vou ao mercado de peixe."]
        ]
    },

    /* ---------- Pessoas ---------- */
    {
        k: "人", pt: "pessoa", on: ["ジン", "ニン"], kun: ["ひと"], cat: "pessoas",
        ex: [
            ["ひと", "あの {人|ひと}^は {誰|だれ}ですか。", "Quem é aquela pessoa?"],
            ["ジン", "{日本人|にほんじん}です。", "Sou japonês(a)."],
            ["ニン", "{何人|なんにん}ですか。", "Quantas pessoas são?"],
            ["り (especial)", "{一人|ひとり}で {住|す}んでいます。", "Moro sozinho(a)."]
        ],
        note: "ジン indica nacionalidade (日本人, 中国人); ニン conta pessoas (三人). 一人 e 二人 são especiais."
    },
    {
        k: "男", pt: "homem; masculino", on: ["ダン", "ナン"], kun: ["おとこ"], cat: "pessoas",
        ex: [
            ["おとこ", "{男|おとこ}の {人|ひと}です。", "É um homem."],
            ["ダン", "{男性|だんせい}の {先生|せんせい}です。", "É um professor (homem)."],
            ["ナン", "{長男|ちょうなん}です。", "Sou o filho mais velho."]
        ]
    },
    {
        k: "女", pt: "mulher; feminino", on: ["ジョ"], kun: ["おんな"], cat: "pessoas",
        ex: [
            ["おんな", "{女|おんな}の {子|こ}が います。", "Há uma menina."],
            ["ジョ", "{彼女|かのじょ}^は {先生|せんせい}です。", "Ela é professora."],
            ["ジョ", "{女性|じょせい}の {先生|せんせい}です。", "É uma professora."]
        ]
    },
    {
        k: "子", pt: "criança; filho(a)", on: ["シ", "ス"], kun: ["こ"], cat: "pessoas",
        ex: [
            ["こ", "{子|こ}どもが {遊|あそ}んでいます。", "As crianças estão brincando."],
            ["シ", "{帽子|ぼうし}を かぶります。", "Uso um chapéu."],
            ["ス", "{椅子|いす}に {座|すわ}ります。", "Sento na cadeira."]
        ]
    },
    {
        k: "父", pt: "pai", on: ["フ"], kun: ["ちち"], cat: "pessoas",
        ex: [
            ["ちち", "{父|ちち}^は {会社員|かいしゃいん}です。", "Meu pai é funcionário de empresa."],
            ["フ", "{祖父|そふ}^は {元気|げんき}です。", "Meu avô está bem."],
            ["とう (especial)", "お{父|とう}さん^は {優|やさ}しいですね。", "Seu pai é gentil, não é?"]
        ],
        note: "Para o pai dos outros, usa-se お父さん (おとうさん); para o próprio pai, 父 (ちち)."
    },
    {
        k: "母", pt: "mãe", on: ["ボ"], kun: ["はは"], cat: "pessoas",
        ex: [
            ["はは", "{母|はは}^は {先生|せんせい}です。", "Minha mãe é professora."],
            ["ボ", "{祖母|そぼ}^は {八十歳|はちじゅっさい}です。", "Minha avó tem 80 anos."],
            ["かあ (especial)", "お{母|かあ}さん^は {料理|りょうり}が {上手|じょうず}です。", "A mãe cozinha bem."]
        ],
        note: "Para a mãe dos outros, usa-se お母さん (おかあさん); para a própria mãe, 母 (はは)."
    },
    {
        k: "友", pt: "amigo", on: ["ユウ"], kun: ["とも"], cat: "pessoas",
        ex: [
            ["とも", "{友|とも}だちと {映画|えいが}を {見|み}ます。", "Assisto a um filme com um amigo."],
            ["ユウ", "{友人|ゆうじん}に {会|あ}います。", "Encontro um amigo."],
            ["ユウ", "{親友|しんゆう}が {二人|ふたり} います。", "Tenho dois melhores amigos."]
        ]
    },
    {
        k: "先", pt: "antes; anterior; à frente", on: ["セン"], kun: ["さき"], cat: "pessoas",
        ex: [
            ["セン", "{先生|せんせい}^は {優|やさ}しいです。", "O professor é gentil."],
            ["セン", "{先月|せんげつ} {日本|にほん}^へ {行|い}きました。", "No mês passado fui ao Japão."],
            ["さき", "{先|さき}に {行|い}きます。", "Vou na frente."]
        ]
    },
    {
        k: "生", pt: "vida; nascer; cru", on: ["セイ", "ショウ"], kun: ["い(きる)", "う(まれる)", "なま", "は(える)", "き"], cat: "pessoas",
        ex: [
            ["セイ", "{私|わたし}^は {学生|がくせい}です。", "Sou estudante."],
            ["う(まれる)", "{東京|とうきょう}で {生|う}まれました。", "Nasci em Tóquio."],
            ["なま", "{生|なま}の {魚|さかな}^は {食|た}べません。", "Não como peixe cru."],
            ["い(きる)", "{長|なが}く {生|い}きたいです。", "Quero viver por muito tempo."],
            ["ショウ", "{一生|いっしょう} {忘|わす}れません。", "Nunca esquecerei, por toda a vida."],
            ["は(える)", "{庭|にわ}に {草|くさ}が {生|は}えました。", "Cresceu grama no jardim."],
            ["き", "{生地|きじ}を {買|か}います。", "Compro tecido."]
        ],
        note: "É um dos kanji com mais leituras. 先生 (せんせい) = professor; 学生 (がくせい) = estudante."
    },
    {
        k: "名", pt: "nome; famoso", on: ["メイ", "ミョウ"], kun: ["な"], cat: "pessoas",
        ex: [
            ["な", "お{名前|なまえ}^は {何|なん}ですか。", "Qual é o seu nome?"],
            ["メイ", "{有名|ゆうめい}な {店|みせ}です。", "É uma loja famosa."],
            ["メイ", "{名刺|めいし}を ください。", "Me dê seu cartão de visita, por favor."],
            ["ミョウ", "{名字|みょうじ}を {教|おし}えてください。", "Diga seu sobrenome, por favor."]
        ]
    },

    /* ---------- Corpo ---------- */
    {
        k: "手", pt: "mão", on: ["シュ"], kun: ["て"], cat: "corpo",
        ex: [
            ["て", "{手|て}を {洗|あら}います。", "Lavo as mãos."],
            ["シュ", "{歌手|かしゅ}に なりたいです。", "Quero ser cantor(a)."],
            ["ズ (especial)", "{上手|じょうず}ですね。", "Você é habilidoso(a), hein!"]
        ],
        note: "上手 (じょうず, habilidoso) e 下手 (へた, desajeitado) têm leituras especiais."
    },
    {
        k: "目", pt: "olho", on: ["モク"], kun: ["め"], cat: "corpo",
        ex: [
            ["め", "{目|め}が {痛|いた}いです。", "Meus olhos doem."],
            ["め (ordinal)", "{三番目|さんばんめ}の {家|いえ}です。", "É a terceira casa."],
            ["モク", "{目的|もくてき}^は {何|なん}ですか。", "Qual é o objetivo?"]
        ],
        note: "Depois de um número, 目 (め) forma ordinais: 一番目 (primeiro), 二番目 (segundo)."
    },
    {
        k: "口", pt: "boca; entrada", on: ["コウ"], kun: ["くち"], cat: "corpo",
        ex: [
            ["くち", "{口|くち}を {開|あ}けてください。", "Abra a boca, por favor."],
            ["ぐち (sonorização)", "{入口|いりぐち}^は どこですか。", "Onde fica a entrada?"],
            ["コウ", "{人口|じんこう}が {多|おお}いです。", "A população é grande."]
        ],
        note: "入口 (いりぐち) = entrada e 出口 (でぐち) = saída: 口 vira ぐち."
    },
    {
        k: "耳", pt: "orelha", on: ["ジ"], kun: ["みみ"], cat: "corpo",
        ex: [
            ["みみ", "{耳|みみ}が {痛|いた}いです。", "Minha orelha dói."],
            ["ジ", "{耳鼻科|じびか}^へ {行|い}きます。", "Vou ao otorrino."]
        ]
    },
    {
        k: "足", pt: "perna; pé; ser suficiente", on: ["ソク"], kun: ["あし", "た(りる)", "た(す)"], cat: "corpo",
        ex: [
            ["あし", "{足|あし}が {長|なが}いです。", "As pernas são longas."],
            ["た(りる)", "お{金|かね}が {足|た}りません。", "Falta dinheiro."],
            ["ソク", "{靴|くつ}を {二足|にそく} {買|か}いました。", "Comprei dois pares de sapatos."]
        ],
        note: "足 também é o contador de pares de calçados e meias: 一足, 二足."
    },

    /* ---------- Posição e direção ---------- */
    {
        k: "上", pt: "em cima; subir", on: ["ジョウ"], kun: ["うえ", "あ(がる)", "あ(げる)", "のぼ(る)", "かみ"], cat: "posicao",
        ex: [
            ["うえ", "{机|つくえ}の {上|うえ}に {本|ほん}が あります。", "Há um livro em cima da mesa."],
            ["あ(がる)", "{階段|かいだん}を {上|あ}がります。", "Subo a escada."],
            ["ジョウ", "{以上|いじょう}です。", "É tudo (para encerrar uma fala)."],
            ["のぼ(る)", "{坂|さか}を {上|のぼ}ります。", "Subo a ladeira."],
            ["かみ", "{川上|かわかみ}に {住|す}んでいます。", "Moro rio acima."]
        ]
    },
    {
        k: "下", pt: "embaixo; descer", on: ["カ", "ゲ"], kun: ["した", "さ(がる)", "くだ(さい)", "お(りる)"], cat: "posicao",
        ex: [
            ["した", "{椅子|いす}の {下|した}に {猫|ねこ}が います。", "Há um gato embaixo da cadeira."],
            ["くだ(さい)", "{少|すこ}し {待|ま}って {下|くだ}さい。", "Espere um pouco, por favor."],
            ["カ", "{地下鉄|ちかてつ}に {乗|の}ります。", "Pego o metrô."],
            ["さ(がる)", "{熱|ねつ}が {下|さ}がりました。", "A febre baixou."],
            ["ゲ", "{下水|げすい}の {工事|こうじ}を しています。", "Estão fazendo obras no esgoto."],
            ["お(りる)", "{階段|かいだん}を {下|お}ります。", "Desço a escada."]
        ]
    },
    {
        k: "中", pt: "dentro; meio; durante", on: ["チュウ", "ジュウ"], kun: ["なか"], cat: "posicao",
        ex: [
            ["なか", "{箱|はこ}の {中|なか}に {何|なに}が ありますか。", "O que há dentro da caixa?"],
            ["チュウ", "{中国|ちゅうごく}の {友|とも}だちが います。", "Tenho um amigo da China."],
            ["ジュウ", "{一日中|いちにちじゅう} {雨|あめ}でした。", "Choveu o dia inteiro."]
        ],
        note: "Depois de palavras de tempo, 中 significa \"durante/todo\": 今日中 (hoje, até o fim do dia)."
    },
    {
        k: "外", pt: "fora; exterior", on: ["ガイ", "ゲ"], kun: ["そと", "ほか", "はず(す)"], cat: "posicao",
        ex: [
            ["そと", "{外|そと}^は {寒|さむ}いです。", "Lá fora está frio."],
            ["ガイ", "{外国|がいこく}^へ {行|い}きたいです。", "Quero ir ao exterior."],
            ["はず(す)", "メガネを {外|はず}します。", "Tiro os óculos."],
            ["ゲ", "{外科|げか}の {先生|せんせい}です。", "É um médico cirurgião."],
            ["ほか", "{外|ほか}に {何|なに}か ありますか。", "Há mais alguma coisa?"]
        ]
    },
    {
        k: "右", pt: "direita", on: ["ウ", "ユウ"], kun: ["みぎ"], cat: "posicao",
        ex: [
            ["みぎ", "{右|みぎ}に {曲|ま}がってください。", "Vire à direita, por favor."],
            ["ウ", "{右折|うせつ}{禁止|きんし}です。", "É proibido virar à direita."],
            ["ユウ", "{左右|さゆう}を {見|み}てください。", "Olhe para os dois lados."]
        ]
    },
    {
        k: "左", pt: "esquerda", on: ["サ"], kun: ["ひだり"], cat: "posicao",
        ex: [
            ["ひだり", "{左|ひだり}に {銀行|ぎんこう}が あります。", "Há um banco à esquerda."],
            ["サ", "{左折|させつ}{禁止|きんし}です。", "É proibido virar à esquerda."],
            ["ひだり", "{左手|ひだりて}で {書|か}きます。", "Escrevo com a mão esquerda."]
        ]
    },
    {
        k: "東", pt: "leste", on: ["トウ"], kun: ["ひがし"], cat: "posicao",
        ex: [
            ["ひがし", "{東|ひがし}から {太陽|たいよう}が {出|で}ます。", "O sol nasce no leste."],
            ["トウ", "{東京|とうきょう}に {住|す}んでいます。", "Moro em Tóquio."],
            ["トウ", "{関東|かんとう}^は {人|ひと}が {多|おお}いです。", "Em Kanto há muita gente."]
        ]
    },
    {
        k: "西", pt: "oeste", on: ["セイ", "サイ"], kun: ["にし"], cat: "posicao",
        ex: [
            ["にし", "{西|にし}の {空|そら}が {赤|あか}いです。", "O céu do oeste está vermelho."],
            ["セイ", "{西洋|せいよう}の {料理|りょうり}が {好|す}きです。", "Gosto de comida ocidental."],
            ["サイ", "{関西|かんさい}に {住|す}んでいます。", "Moro em Kansai."]
        ]
    },
    {
        k: "南", pt: "sul", on: ["ナン"], kun: ["みなみ"], cat: "posicao",
        ex: [
            ["みなみ", "{南|みなみ}の {国|くに}^へ {行|い}きたいです。", "Quero ir a um país do sul."],
            ["ナン", "{南極|なんきょく}^は {寒|さむ}いです。", "A Antártida é fria."]
        ]
    },
    {
        k: "北", pt: "norte", on: ["ホク"], kun: ["きた"], cat: "posicao",
        ex: [
            ["きた", "{北|きた}^は {寒|さむ}いです。", "O norte é frio."],
            ["ホク", "{東北|とうほく}^は {雪|ゆき}が {多|おお}いです。", "Em Tohoku neva muito."],
            ["ホッ", "{北海道|ほっかいどう}^へ {行|い}きます。", "Vou a Hokkaido."]
        ]
    }
]);
