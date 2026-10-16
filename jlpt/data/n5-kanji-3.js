/*
 * Kanji do JLPT N5 - parte 3: verbos, adjetivos e sociedade (lugares, estudo e coisas).
 * Formato e notação: veja o cabeçalho de n5-kanji-1.js.
 */
window.JLPT_N5_KANJI = (window.JLPT_N5_KANJI || []).concat([

    /* ---------- Verbos ---------- */
    {
        k: "見", pt: "ver; olhar", on: ["ケン"], kun: ["み(る)", "み(える)", "み(せる)"], cat: "verbos",
        ex: [
            ["み(る)", "{映画|えいが}を {見|み}ます。", "Assisto a um filme."],
            ["み(せる)", "{写真|しゃしん}を {見|み}せてください。", "Mostre a foto, por favor."],
            ["み(える)", "{山|やま}が {見|み}えます。", "Dá para ver a montanha."],
            ["ケン", "{見学|けんがく}します。", "Faço uma visita de estudo."]
        ]
    },
    {
        k: "行", pt: "ir; linha", on: ["コウ", "ギョウ"], kun: ["い(く)", "ゆ(く)", "おこな(う)"], cat: "verbos",
        ex: [
            ["い(く)", "{学校|がっこう}^へ {行|い}きます。", "Vou à escola."],
            ["コウ", "{銀行|ぎんこう}で お{金|かね}を {出|だ}します。", "Retiro dinheiro no banco."],
            ["コウ", "{旅行|りょこう}が {好|す}きです。", "Gosto de viajar."],
            ["ギョウ", "{行事|ぎょうじ}が あります。", "Há um evento."],
            ["ゆ(く)", "{行|ゆ}く {年|とし}、{来|く}る {年|とし}。", "O ano que se vai e o ano que vem."],
            ["おこな(う)", "{試験|しけん}を {行|おこな}います。", "Realizamos a prova."]
        ]
    },
    {
        k: "来", pt: "vir", on: ["ライ"], kun: ["く(る)", "き(ます)", "こ(ない)"], cat: "verbos",
        ex: [
            ["き(ます)", "{友|とも}だちが {来|き}ます。", "Um amigo vem."],
            ["く(る)", "{春|はる}が {来|く}る。", "A primavera chega."],
            ["こ(ない)", "{彼|かれ}^は {来|こ}ない。", "Ele não vem."],
            ["ライ", "{来週|らいしゅう} {会|あ}いましょう。", "Vamos nos encontrar na semana que vem."]
        ],
        note: "Verbo irregular: 来る (くる) → 来ます (きます), 来ない (こない), 来た (きた)."
    },
    {
        k: "出", pt: "sair; tirar", on: ["シュツ"], kun: ["で(る)", "だ(す)"], cat: "verbos",
        ex: [
            ["で(る)", "{家|いえ}を {出|で}ます。", "Saio de casa."],
            ["だ(す)", "{手紙|てがみ}を {出|だ}します。", "Envio uma carta."],
            ["シュツ", "{出発|しゅっぱつ}^は {九時|くじ}です。", "A partida é às nove."]
        ]
    },
    {
        k: "入", pt: "entrar; colocar", on: ["ニュウ"], kun: ["い(る)", "はい(る)", "い(れる)"], cat: "verbos",
        ex: [
            ["はい(る)", "{部屋|へや}に {入|はい}ります。", "Entro no quarto."],
            ["い(れる)", "お{茶|ちゃ}に {砂糖|さとう}を {入|い}れます。", "Coloco açúcar no chá."],
            ["ニュウ", "{入学|にゅうがく}します。", "Entro na escola."],
            ["い(る)", "{気|き}に {入|い}りました。", "Gostei (foi do meu agrado)."]
        ]
    },
    {
        k: "立", pt: "ficar em pé; levantar", on: ["リツ"], kun: ["た(つ)", "た(てる)"], cat: "verbos",
        ex: [
            ["た(つ)", "{立|た}ってください。", "Levante-se, por favor."],
            ["リツ", "{国立|こくりつ}の {大学|だいがく}です。", "É uma universidade nacional."]
        ]
    },
    {
        k: "休", pt: "descansar; folga", on: ["キュウ"], kun: ["やす(む)", "やす(み)"], cat: "verbos",
        ex: [
            ["やす(む)", "{今日|きょう}^は {会社|かいしゃ}を {休|やす}みます。", "Hoje falto ao trabalho."],
            ["やす(み)", "{明日|あした}^は {休|やす}みです。", "Amanhã é folga."],
            ["キュウ", "{休憩|きゅうけい}しましょう。", "Vamos fazer uma pausa."]
        ]
    },
    {
        k: "食", pt: "comer; comida", on: ["ショク"], kun: ["た(べる)", "く(う)"], cat: "verbos",
        ex: [
            ["た(べる)", "{朝|あさ}ごはんを {食|た}べます。", "Tomo café da manhã."],
            ["ショク", "{食事|しょくじ}を します。", "Faço uma refeição."],
            ["ショク", "{和食|わしょく}が {好|す}きです。", "Gosto de comida japonesa."],
            ["く(う)", "{魚|さかな}を {食|く}う。", "Como peixe (fala informal)."]
        ]
    },
    {
        k: "飲", pt: "beber", on: ["イン"], kun: ["の(む)"], cat: "verbos",
        ex: [
            ["の(む)", "お{茶|ちゃ}を {飲|の}みます。", "Bebo chá."],
            ["の(む)", "{薬|くすり}を {飲|の}みます。", "Tomo o remédio."],
            ["イン", "{飲食|いんしょく}{禁止|きんし}です。", "É proibido comer e beber."]
        ]
    },
    {
        k: "買", pt: "comprar", on: ["バイ"], kun: ["か(う)"], cat: "verbos",
        ex: [
            ["か(う)", "{本|ほん}を {買|か}います。", "Compro um livro."],
            ["か(う)", "{何|なに}を {買|か}いましたか。", "O que você comprou?"],
            ["バイ", "{土地|とち}の {売買|ばいばい}を します。", "Faço a compra e venda de terrenos."]
        ],
        note: "O on'yomi バイ aparece em palavras como 売買 (ばいばい, compra e venda), fora do N5."
    },
    {
        k: "会", pt: "encontrar; reunião", on: ["カイ", "エ"], kun: ["あ(う)"], cat: "verbos",
        ex: [
            ["あ(う)", "{友|とも}だちに {会|あ}います。", "Encontro um amigo."],
            ["カイ", "{会社|かいしゃ}^へ {行|い}きます。", "Vou à empresa."],
            ["カイ", "{会議|かいぎ}^は {三時|さんじ}です。", "A reunião é às três."],
            ["エ", "{軽|かる}く {会釈|えしゃく}しました。", "Cumprimentei com um leve aceno de cabeça."]
        ]
    },
    {
        k: "言", pt: "dizer; palavra", on: ["ゲン", "ゴン"], kun: ["い(う)", "こと"], cat: "verbos",
        ex: [
            ["い(う)", "{何|なん}と {言|い}いましたか。", "O que você disse?"],
            ["い(う)", "{名前|なまえ}を {言|い}ってください。", "Diga seu nome, por favor."],
            ["ゲン", "{言語|げんご}を {勉強|べんきょう}します。", "Estudo línguas."],
            ["こと", "{新|あたら}しい {言葉|ことば}を {覚|おぼ}えます。", "Aprendo palavras novas."],
            ["ゴン", "{遺言|ゆいごん}を {読|よ}みます。", "Leio o testamento."]
        ]
    },
    {
        k: "話", pt: "falar; conversa", on: ["ワ"], kun: ["はな(す)", "はなし"], cat: "verbos",
        ex: [
            ["はな(す)", "{先生|せんせい}と {話|はな}します。", "Converso com o professor."],
            ["はなし", "{話|はなし}を {聞|き}きます。", "Escuto a história."],
            ["ワ", "{電話|でんわ}を かけます。", "Faço uma ligação."]
        ]
    },
    {
        k: "聞", pt: "ouvir; perguntar", on: ["ブン"], kun: ["き(く)", "き(こえる)"], cat: "verbos",
        ex: [
            ["き(く)", "{音楽|おんがく}を {聞|き}きます。", "Ouço música."],
            ["ブン", "{新聞|しんぶん}を {読|よ}みます。", "Leio o jornal."],
            ["き(こえる)", "{声|こえ}が {聞|き}こえます。", "Ouço uma voz."]
        ]
    },
    {
        k: "書", pt: "escrever", on: ["ショ"], kun: ["か(く)"], cat: "verbos",
        ex: [
            ["か(く)", "{手紙|てがみ}を {書|か}きます。", "Escrevo uma carta."],
            ["ショ", "{辞書|じしょ}を {使|つか}います。", "Uso um dicionário."],
            ["ショ", "{図書館|としょかん}で {勉強|べんきょう}します。", "Estudo na biblioteca."]
        ]
    },
    {
        k: "読", pt: "ler", on: ["ドク", "トク"], kun: ["よ(む)"], cat: "verbos",
        ex: [
            ["よ(む)", "{本|ほん}を {読|よ}みます。", "Leio um livro."],
            ["ドク", "{読書|どくしょ}が {好|す}きです。", "Gosto de ler."],
            ["トク", "{読本|とくほん}で {勉強|べんきょう}します。", "Estudo com um livro de leitura."]
        ]
    },

    /* ---------- Adjetivos ---------- */
    {
        k: "大", pt: "grande", on: ["ダイ", "タイ"], kun: ["おお(きい)", "おお(いに)"], cat: "adjetivos",
        ex: [
            ["おお(きい)", "{大|おお}きい {犬|いぬ}が います。", "Há um cachorro grande."],
            ["ダイ", "{大学|だいがく}で {勉強|べんきょう}します。", "Estudo na universidade."],
            ["ダイ", "{大丈夫|だいじょうぶ}ですか。", "Está tudo bem?"],
            ["タイ", "{大切|たいせつ}な {友|とも}だちです。", "É um amigo importante."]
        ]
    },
    {
        k: "小", pt: "pequeno", on: ["ショウ"], kun: ["ちい(さい)", "こ", "お"], cat: "adjetivos",
        ex: [
            ["ちい(さい)", "{小|ちい}さい {猫|ねこ}です。", "É um gato pequeno."],
            ["ショウ", "{小学生|しょうがくせい}です。", "Sou aluno do ensino fundamental."],
            ["こ", "{小鳥|ことり}が {鳴|な}いています。", "O passarinho está cantando."],
            ["お", "{小川|おがわ}で {遊|あそ}びます。", "Brinco no riacho."]
        ]
    },
    {
        k: "高", pt: "alto; caro", on: ["コウ"], kun: ["たか(い)"], cat: "adjetivos",
        ex: [
            ["たか(い)", "あの {山|やま}^は {高|たか}いです。", "Aquela montanha é alta."],
            ["たか(い)", "この カメラ^は {高|たか}いです。", "Esta câmera é cara."],
            ["コウ", "{高校|こうこう}^へ {行|い}きます。", "Vou ao colégio (ensino médio)."]
        ]
    },
    {
        k: "安", pt: "barato; tranquilo", on: ["アン"], kun: ["やす(い)"], cat: "adjetivos",
        ex: [
            ["やす(い)", "この {店|みせ}^は {安|やす}いです。", "Esta loja é barata."],
            ["アン", "{安心|あんしん}してください。", "Fique tranquilo(a)."],
            ["アン", "{安全|あんぜん}な {道|みち}です。", "É um caminho seguro."]
        ]
    },
    {
        k: "新", pt: "novo", on: ["シン"], kun: ["あたら(しい)", "にい", "あら(た)"], cat: "adjetivos",
        ex: [
            ["あたら(しい)", "{新|あたら}しい {車|くるま}を {買|か}いました。", "Comprei um carro novo."],
            ["シン", "{新年|しんねん} おめでとう ございます。", "Feliz Ano Novo."],
            ["シン", "{新幹線|しんかんせん}に {乗|の}ります。", "Pego o trem-bala."],
            ["にい", "{新潟|にいがた}^は {米|こめ}が {有名|ゆうめい}です。", "Niigata é famosa pelo arroz."],
            ["あら(た)", "{新|あら}たに {始|はじ}めます。", "Começo de novo."]
        ]
    },
    {
        k: "古", pt: "velho; antigo", on: ["コ"], kun: ["ふる(い)"], cat: "adjetivos",
        ex: [
            ["ふる(い)", "{古|ふる}い {本|ほん}です。", "É um livro antigo."],
            ["ふる(い)", "{古|ふる}い {家|いえ}に {住|す}んでいます。", "Moro numa casa antiga."],
            ["コ", "{中古車|ちゅうこしゃ}を {買|か}います。", "Compro um carro usado."]
        ],
        note: "古い é para coisas antigas ou usadas; não se usa para pessoas (seria rude)."
    },
    {
        k: "長", pt: "longo; chefe", on: ["チョウ"], kun: ["なが(い)"], cat: "adjetivos",
        ex: [
            ["なが(い)", "{髪|かみ}が {長|なが}いです。", "O cabelo é comprido."],
            ["なが(い)", "{長|なが}い {間|あいだ} {待|ま}ちました。", "Esperei por muito tempo."],
            ["チョウ", "{社長|しゃちょう}^は {忙|いそが}しいです。", "O presidente da empresa está ocupado."]
        ]
    },
    {
        k: "多", pt: "muito; numeroso", on: ["タ"], kun: ["おお(い)"], cat: "adjetivos",
        ex: [
            ["おお(い)", "{人|ひと}が {多|おお}いです。", "Há muita gente."],
            ["おお(い)", "{雨|あめ}が {多|おお}い {季節|きせつ}です。", "É a estação de muita chuva."],
            ["タ", "{多少|たしょう} {高|たか}いです。", "É um pouco caro."]
        ]
    },
    {
        k: "少", pt: "pouco", on: ["ショウ"], kun: ["すく(ない)", "すこ(し)"], cat: "adjetivos",
        ex: [
            ["すこ(し)", "{少|すこ}し {待|ま}ってください。", "Espere um pouco."],
            ["すく(ない)", "{人|ひと}が {少|すく}ないです。", "Há pouca gente."],
            ["ショウ", "{少年|しょうねん}が {走|はし}っています。", "O menino está correndo."]
        ]
    },
    {
        k: "白", pt: "branco", on: ["ハク", "ビャク"], kun: ["しろ(い)", "しろ", "しら"], cat: "adjetivos",
        ex: [
            ["しろ(い)", "{白|しろ}い {花|はな}です。", "É uma flor branca."],
            ["しろ", "{白|しろ}と {黒|くろ}の {猫|ねこ}です。", "É um gato branco e preto."],
            ["ハク", "{白鳥|はくちょう}が {泳|およ}いでいます。", "O cisne está nadando."],
            ["ビャク", "{白夜|びゃくや}を {見|み}てみたいです。", "Quero ver o sol da meia-noite."],
            ["しら", "{白髪|しらが}が {増|ふ}えました。", "Meus cabelos brancos aumentaram."]
        ]
    },

    /* ---------- Lugares, estudo e coisas ---------- */
    {
        k: "国", pt: "país", on: ["コク", "ゴク"], kun: ["くに"], cat: "sociedade",
        ex: [
            ["くに", "{私|わたし}の {国|くに}^は ブラジルです。", "Meu país é o Brasil."],
            ["コク", "{外国|がいこく}の {友|とも}だちが います。", "Tenho um amigo estrangeiro."],
            ["ゴク (sonorização)", "{中国|ちゅうごく}^へ {行|い}きます。", "Vou à China."]
        ]
    },
    {
        k: "校", pt: "escola", on: ["コウ"], kun: [], cat: "sociedade",
        ex: [
            ["コウ", "{高校|こうこう}の {先生|せんせい}です。", "Sou professor(a) de colégio."],
            ["コウ", "{学校|がっこう}^は {九時|くじ}に {始|はじ}まります。", "A escola começa às nove."]
        ],
        note: "Em 学校 (がっこう) é o 学 que muda (がっ); 校 continua こう."
    },
    {
        k: "社", pt: "empresa; santuário", on: ["シャ", "ジャ"], kun: ["やしろ"], cat: "sociedade",
        ex: [
            ["シャ", "{会社|かいしゃ}で {働|はたら}きます。", "Trabalho na empresa."],
            ["シャ", "{社長|しゃちょう}に {会|あ}います。", "Encontro o presidente da empresa."],
            ["ジャ (sonorização)", "{神社|じんじゃ}^へ {行|い}きます。", "Vou ao santuário xintoísta."],
            ["やしろ", "{山|やま}の {上|うえ}に {小|ちい}さな {社|やしろ}が あります。", "Há um pequeno santuário no alto da montanha."]
        ]
    },
    {
        k: "店", pt: "loja", on: ["テン"], kun: ["みせ"], cat: "sociedade",
        ex: [
            ["みせ", "{新|あたら}しい {店|みせ}が できました。", "Abriu uma loja nova."],
            ["テン", "{書店|しょてん}で {本|ほん}を {買|か}います。", "Compro livros na livraria."],
            ["テン", "{店員|てんいん}さんに {聞|き}きます。", "Pergunto ao atendente."]
        ]
    },
    {
        k: "駅", pt: "estação", on: ["エキ"], kun: [], cat: "sociedade",
        ex: [
            ["エキ", "{駅|えき}^は どこですか。", "Onde fica a estação?"],
            ["エキ", "{東京駅|とうきょうえき}から {乗|の}ります。", "Embarco na estação de Tóquio."],
            ["エキ", "{駅|えき}の {前|まえ}に {店|みせ}が あります。", "Há uma loja em frente à estação."]
        ]
    },
    {
        k: "車", pt: "carro; veículo", on: ["シャ"], kun: ["くるま"], cat: "sociedade",
        ex: [
            ["くるま", "{車|くるま}で {行|い}きます。", "Vou de carro."],
            ["シャ", "{電車|でんしゃ}に {乗|の}ります。", "Pego o trem."],
            ["シャ", "{自転車|じてんしゃ}で {学校|がっこう}^へ {行|い}きます。", "Vou à escola de bicicleta."]
        ]
    },
    {
        k: "電", pt: "eletricidade", on: ["デン"], kun: [], cat: "sociedade",
        ex: [
            ["デン", "{電気|でんき}を {消|け}します。", "Apago a luz."],
            ["デン", "{電車|でんしゃ}が {来|き}ました。", "O trem chegou."],
            ["デン", "{電話|でんわ}^は {高|たか}いです。", "O telefone é caro."]
        ]
    },
    {
        k: "道", pt: "caminho; rua", on: ["ドウ", "トウ"], kun: ["みち"], cat: "sociedade",
        ex: [
            ["みち", "{道|みち}が {分|わ}かりません。", "Não sei o caminho."],
            ["ドウ", "{北海道|ほっかいどう}^は {広|ひろ}いです。", "Hokkaido é grande."],
            ["ドウ", "{柔道|じゅうどう}を {習|なら}います。", "Aprendo judô."],
            ["トウ", "{神道|しんとう}の {神社|じんじゃ}です。", "É um santuário xintoísta."]
        ]
    },
    {
        k: "円", pt: "iene; círculo", on: ["エン"], kun: ["まる(い)"], cat: "sociedade",
        ex: [
            ["エン", "{百円|ひゃくえん}の {本|ほん}です。", "É um livro de 100 ienes."],
            ["エン", "{今|いま}、{一|いち}ドル^は {何円|なんえん}ですか。", "Quanto é um dólar em ienes agora?"],
            ["まる(い)", "{円|まる}い {月|つき}が {出|で}ました。", "Surgiu uma lua redonda."]
        ],
        note: "Para \"redondo\", o mais comum é 丸い (まるい); 円い aparece pouco."
    },
    {
        k: "本", pt: "livro; origem; contador de objetos longos", on: ["ホン", "ボン", "ポン"], kun: ["もと"], cat: "sociedade",
        ex: [
            ["ホン", "{本|ほん}を {読|よ}みます。", "Leio um livro."],
            ["ホン", "{日本|にほん}に {住|す}んでいます。", "Moro no Japão."],
            ["ポン", "{鉛筆|えんぴつ}を {一本|いっぽん} {買|か}います。", "Compro um lápis."],
            ["ボン", "{三本|さんぼん} ください。", "Me dê três (garrafas, canetas...)."],
            ["もと", "{山本|やまもと}さん^は {先生|せんせい}です。", "O senhor Yamamoto é professor."]
        ],
        note: "Como contador: いっぽん, にほん, さんぼん, よんほん, ごほん, ろっぽん..."
    },
    {
        k: "語", pt: "língua; palavra", on: ["ゴ"], kun: ["かた(る)"], cat: "sociedade",
        ex: [
            ["ゴ", "{日本語|にほんご}を {勉強|べんきょう}します。", "Estudo japonês."],
            ["ゴ", "{英語|えいご}が {分|わ}かります。", "Entendo inglês."],
            ["ゴ", "{単語|たんご}を {覚|おぼ}えます。", "Memorizo palavras."],
            ["かた(る)", "{夢|ゆめ}を {語|かた}ります。", "Falo sobre meus sonhos."]
        ]
    },
    {
        k: "学", pt: "estudar; aprendizado", on: ["ガク"], kun: ["まな(ぶ)"], cat: "sociedade",
        ex: [
            ["ガク", "{留学|りゅうがく}したいです。", "Quero estudar no exterior."],
            ["ガク", "{大学生|だいがくせい}です。", "Sou universitário(a)."],
            ["ガッ", "{学校|がっこう}^は {駅|えき}の {近|ちか}くに あります。", "A escola fica perto da estação."],
            ["まな(ぶ)", "{日本語|にほんご}を {学|まな}びます。", "Aprendo japonês."]
        ]
    },
    {
        k: "気", pt: "espírito; ânimo; ar", on: ["キ", "ケ"], kun: [], cat: "sociedade",
        ex: [
            ["キ", "{元気|げんき}ですか。", "Você está bem?"],
            ["キ", "{気|き}を つけてください。", "Tome cuidado."],
            ["キ", "{病気|びょうき}です。", "Estou doente."],
            ["ケ", "{気配|けはい}が します。", "Sinto uma presença."]
        ],
        note: "Muitas expressões: 天気 (tempo), 電気 (eletricidade/luz), 元気 (disposição), 病気 (doença)."
    },
    {
        k: "何", pt: "o quê; quanto", on: ["カ"], kun: ["なに", "なん"], cat: "sociedade",
        ex: [
            ["なに", "{何|なに}を {食|た}べますか。", "O que você vai comer?"],
            ["なん", "{何|なん}ですか。", "O que é?"],
            ["なん", "{何時|なんじ}ですか。", "Que horas são?"],
            ["なん", "{何人|なんにん}ですか。", "Quantas pessoas são?"],
            ["カ", "{幾何学|きかがく}^は {難|むずか}しいです。", "A geometria é difícil."]
        ],
        note: "Antes de contadores e de です, usa-se なん (何時, 何人, 何ですか); antes de を e が, usa-se なに (何を, 何が)."
    }
]);
