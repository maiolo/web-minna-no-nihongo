/*
 * Simulado no formato da prova JLPT N5 - gramática e leitura (言語知識（文法）・読解).
 *
 * Seis tipos de questão (もんだい), como na prova real:
 *   grammar1  もんだい 1 (文の文法1)   o que entra em (　　)?
 *   order     もんだい 2 (文の文法2)   qual peça fica em ★? (ordenar quatro peças)
 *   text      もんだい 3 (文章の文法)  um texto curto com cinco lacunas [1] a [5]
 *   short     もんだい 4 (内容理解 短文) um texto curto e uma pergunta
 *   mid       もんだい 5 (内容理解 中文) um texto mais longo e duas perguntas
 *   search    もんだい 6 (情報検索)    uma tabela ou aviso e uma pergunta
 *
 * Mesma notação e mesmas regras de bunmyaku/iikae em n5-exam-vocab.js: só kanji da lista do N5 em
 * {漢字|かんじ} (o resto em hiragana), texto e alternativas em japonês, explicação em português.
 * Para não ficar duas respostas certas, as alternativas erradas aqui são erradas de verdade na frase.
 *
 * Formato (os ids são fixos: o histórico guarda só o id e a resposta):
 *   grammar1  { id, s, a, w: [3], why }
 *   order     { id, pre, parts: [4], post, why }   as 4 peças já na ORDEM CERTA; a 3ª é a que fica em ★
 *   text      { id, text, blanks: [{ a, w: [3], why } x5] }   no texto, ［1］ a ［5］ marcam as lacunas
 *   short     { id, text, q, a, w: [3], why }
 *   mid       { id, text, qs: [{ q, a, w: [3], why } x2] }
 *   search    { id, lead, table: { head: [...], rows: [[...]] }, q, a, w: [3], why }
 *   text com \n separa parágrafos.
 */
window.JLPT_N5_EXAM = window.JLPT_N5_EXAM || {};

window.JLPT_N5_EXAM.grammar1 = [
    { id: "g01", s: "わたしは まいあさ パン＿＿ たべます。", a: "を", w: ["に", "へ", "から"],
      why: "O objeto direto de たべます leva を (パンを たべます).", why_en: "The direct object of たべます takes を (パンを たべます)." },
    { id: "g02", s: "あした ともだち＿＿ あいます。", a: "に", w: ["を", "で", "まで"],
      why: "あう (encontrar) leva に na pessoa: ともだちに あいます.", why_en: "あう (to meet) takes に on the person: ともだちに あいます." },
    { id: "g03", s: "{学校|がっこう}＿＿ {行|い}きます。", a: "へ", w: ["を", "で", "が"],
      why: "O destino de いきます leva へ (ou に): がっこうへ いきます.", why_en: "The destination of いきます takes へ (or に): がっこうへ いきます." },
    { id: "g04", s: "{電車|でんしゃ}＿＿ {会社|かいしゃ}へ {行|い}きます。", a: "で", w: ["を", "に", "が"],
      why: "O meio de transporte leva で: でんしゃで いきます.", why_en: "The means of transport takes で: でんしゃで いきます." },
    { id: "g05", s: "わたしは {先生|せんせい}＿＿ {本|ほん}を もらいました。", a: "に", w: ["を", "で", "へ"],
      why: "Em もらう (receber), quem deu leva に: せんせいに ほんを もらいました.", why_en: "With もらう (to receive), the giver takes に: せんせいに ほんを もらいました." },
    { id: "g06", s: "{駅|えき}＿＿ ともだちを まちます。", a: "で", w: ["を", "が", "まで"],
      why: "O lugar onde se faz a ação leva で: えきで まちます.", why_en: "The place where the action happens takes で: えきで まちます." },
    { id: "g07", s: "これは わたし＿＿ かさです。", a: "の", w: ["を", "に", "で"],
      why: "Posse usa の: わたしの かさ (o guarda-chuva é meu).", why_en: "Possession uses の: わたしの かさ (the umbrella is mine)." },
    { id: "g08", s: "つくえの うえ＿＿ ほんが あります。", a: "に", w: ["を", "で", "から"],
      why: "Existência em um lugar (ある) leva に: つくえの うえに あります.", why_en: "Existence in a place (ある) takes に: つくえの うえに あります." },
    { id: "g09", s: "ははは スーパー＿＿ にくを かいます。", a: "で", w: ["を", "へ", "が"],
      why: "O lugar da compra leva で: スーパーで かいます.", why_en: "The place of purchase takes で: スーパーで かいます." },
    { id: "g10", s: "{毎日|まいにち} 7{時|じ}＿＿ うちを でます。", a: "に", w: ["を", "で", "が"],
      why: "Horário exato leva に: 7じに.", why_en: "An exact time takes に: 7じに." },
    { id: "g11", s: "わたしは えいが＿＿ すきです。", a: "が", w: ["を", "に", "で"],
      why: "すきです pede が no que se gosta: えいがが すきです.", why_en: "すきです takes が on what is liked: えいがが すきです." },
    { id: "g12", s: "あなたは なに＿＿ のみますか。", a: "を", w: ["に", "で", "へ"],
      why: "O objeto de のみます leva を: なにを のみますか.", why_en: "The object of のみます takes を: なにを のみますか." },
    { id: "g13", s: "{駅|えき}から {学校|がっこう}＿＿ あるいて 10{分|ぷん}です。", a: "まで", w: ["を", "が", "と"],
      why: "から... まで marca o ponto de partida e o de chegada: えきから がっこうまで.", why_en: "から... まで marks the starting point and the end point: えきから がっこうまで." },
    { id: "g14", s: "{先生|せんせい}は {今|いま} ＿＿ に いますか。", a: "どこ", w: ["だれ", "なに", "いつ"],
      why: "Perguntar o lugar: どこに いますか.", why_en: "Asking about a place: どこに いますか." },
    { id: "g15", s: "あの {人|ひと}＿＿ だれですか。", a: "は", w: ["を", "に", "へ"],
      why: "O tema da frase leva は: あの ひとは だれですか.", why_en: "The topic of the sentence takes は: あの ひとは だれですか." },
    { id: "g16", s: "きのう {友|とも}だちと えいがを ＿＿。", a: "みました", w: ["みます", "みません", "みましょう"],
      why: "きのう pede o passado: みました.", why_en: "きのう calls for the past: みました." },
    { id: "g17", s: "あした {友|とも}だちと えいがを ＿＿。", a: "みます", w: ["みました", "みませんでした", "みて"],
      why: "あした pede o presente/futuro: みます.", why_en: "あした calls for the present/future: みます." },
    { id: "g18", s: "ここに {名前|なまえ}を ＿＿ ください。", a: "かいて", w: ["かく", "かいた", "かきます"],
      why: "Pedido com ください usa a forma て: かいて ください.", why_en: "A request with ください uses the て form: かいて ください." },
    { id: "g19", s: "ここで ＿＿ ください。", a: "まって", w: ["まつ", "まった", "まちます"],
      why: "ください vem depois da forma て: まって ください.", why_en: "ください comes after the て form: まって ください." },
    { id: "g20", s: "わたしは コーヒーを ＿＿ たいです。", a: "のみ", w: ["のむ", "のんで", "のんだ"],
      why: "Desejo (たいです) usa a base ます sem ます: のみたいです.", why_en: "Desire (たいです) uses the ます stem without ます: のみたいです." },
    { id: "g21", s: "この かばんは ＿＿ ありません。", a: "たかく", w: ["たかい", "たかくて", "たかかった"],
      why: "Negativa de adjetivo い: troca い por く + ありません (たかく ありません).", why_en: "Negative of an い adjective: replace い with く + ありません (たかく ありません)." },
    { id: "g22", s: "きのうの テストは ＿＿ ありませんでした。", a: "むずかしく", w: ["むずかしい", "むずかしくて", "むずかしかった"],
      why: "Negativa no passado: むずかしく ありませんでした.", why_en: "Negative in the past: むずかしく ありませんでした." },
    { id: "g23", s: "これは わたし＿＿ です。", a: "の", w: ["を", "に", "と"],
      why: "わたしのです = é meu (の no lugar do substantivo).", why_en: "わたしのです = it is mine (の in place of the noun)." },
    { id: "g24", s: "A「それは ＿＿ ですか。」B「えんぴつです。」", a: "なん", w: ["だれ", "いつ", "どこ"],
      why: "Perguntar o que é uma coisa: なん (なんですか).", why_en: "Asking what a thing is: なん (なんですか)." },
    { id: "g25", s: "A「あした なん＿＿ に ここに きますか。」B「9{時|じ}に きます。」", a: "じ", w: ["まい", "ほん", "さつ"],
      why: "Perguntar a hora: なんじ (que horas).", why_en: "Asking the time: なんじ (what time)." },
    { id: "g26", s: "A「この ペンは ＿＿ ですか。」B「300{円|えん}です。」", a: "いくら", w: ["いつ", "だれ", "どこ"],
      why: "Perguntar o preço: いくらですか.", why_en: "Asking the price: いくらですか." },
    { id: "g27", s: "A「トイレは ＿＿ ですか。」B「あそこです。」", a: "どこ", w: ["だれ", "いつ", "いくら"],
      why: "Perguntar o lugar: どこですか.", why_en: "Asking the place: どこですか." },
    { id: "g28", s: "A「あの {人|ひと}は ＿＿ ですか。」B「たなかさんです。」", a: "だれ", w: ["なに", "いつ", "いくら"],
      why: "Perguntar quem é a pessoa: だれですか.", why_en: "Asking who the person is: だれですか." },
    { id: "g29", s: "ここは {学校|がっこう}です。あそこ＿＿ {学校|がっこう}です。", a: "も", w: ["を", "に", "で"],
      why: "も significa 'também': あそこも がっこうです.", why_en: "も means 'also': あそこも がっこうです." },
    { id: "g30", s: "{友|とも}だち＿＿ でんわを かけます。", a: "に", w: ["を", "で", "まで"],
      why: "かける (telefonar) leva に na pessoa: ともだちに でんわを かけます.", why_en: "かける (to phone) takes に on the person: ともだちに でんわを かけます." },
    { id: "g31", s: "あした {雨|あめ}＿＿ ふります。", a: "が", w: ["を", "に", "で"],
      why: "Fenômenos da natureza usam が como sujeito: あめが ふります.", why_en: "Natural phenomena use が as the subject: あめが ふります." },
    { id: "g32", s: "わたしの うち＿＿ {来|き}て ください。", a: "へ", w: ["を", "で", "が"],
      why: "O destino de きます leva へ: わたしの うちへ きて ください.", why_en: "The destination of きます takes へ: わたしの うちへ きて ください." },
    { id: "g33", s: "わたしは {水|みず}＿＿ {飲|の}みたいです。", a: "を", w: ["に", "で", "の"],
      why: "O objeto de のみたい leva を (ou が): みずを のみたいです.", why_en: "The object of のみたい takes を (or が): みずを のみたいです." },
    { id: "g34", s: "あそこに {男|おとこ}の {人|ひと}＿＿ います。", a: "が", w: ["を", "に", "へ"],
      why: "Existência de pessoa (いる) leva が: おとこの ひとが います.", why_en: "Existence of a person (いる) takes が: おとこの ひとが います." },
    { id: "g35", s: "A「テレビを みますか。」B「いいえ、＿＿ みません。」", a: "ぜんぜん", w: ["とても", "いちばん", "もっと"],
      why: "ぜんぜん pede o verbo na negativa (ぜんぜん みません: nunca/nada).", why_en: "ぜんぜん calls for a negative verb (ぜんぜん みません: never/not at all)." }
];

window.JLPT_N5_EXAM.order = [
    { id: "o01", pre: "あの", parts: ["ぎんこう", "の", "となり", "に"], post: "{駅|えき}が あります。",
      why: "Ordem certa: あの ぎんこうの となりに えきが あります. A peça de ★ é となり.", why_en: "Correct order: あの ぎんこうの となりに えきが あります. The piece in ★ is となり." },
    { id: "o02", pre: "ここに", parts: ["{名前|なまえ}", "を", "かいて", "ください"], post: "。",
      why: "Ordem certa: ここに なまえを かいて ください. A peça de ★ é かいて.", why_en: "Correct order: ここに なまえを かいて ください. The piece in ★ is かいて." },
    { id: "o03", pre: "ともだちと", parts: ["{山|やま}", "に", "いきたい", "です"], post: "。",
      why: "Ordem certa: ともだちと やまに いきたいです. A peça de ★ é いきたい.", why_en: "Correct order: ともだちと やまに いきたいです. The piece in ★ is いきたい." },
    { id: "o04", pre: "あした", parts: ["{駅|えき}", "の", "まえ", "で"], post: "ともだちを まちます。",
      why: "Ordem certa: あした えきの まえで ともだちを まちます. A peça de ★ é まえ.", why_en: "Correct order: あした えきの まえで ともだちを まちます. The piece in ★ is まえ." },
    { id: "o05", pre: "わたしの", parts: ["うち", "は", "{駅|えき}", "から"], post: "ちかいです。",
      why: "Ordem certa: わたしの うちは えきから ちかいです. A peça de ★ é えき.", why_en: "Correct order: わたしの うちは えきから ちかいです. The piece in ★ is えき." },
    { id: "o06", pre: "これは", parts: ["{先生|せんせい}", "の", "かさ", "です"], post: "。",
      why: "Ordem certa: これは せんせいの かさです. A peça de ★ é かさ.", why_en: "Correct order: これは せんせいの かさです. The piece in ★ is かさ." },
    { id: "o07", pre: "{毎日|まいにち} {会社|かいしゃ}へ", parts: ["{電車|でんしゃ}", "に", "のって", "いきます"], post: "。",
      why: "Ordem certa: まいにち かいしゃへ でんしゃに のって いきます. A peça de ★ é のって.", why_en: "Correct order: まいにち かいしゃへ でんしゃに のって いきます. The piece in ★ is のって." },
    { id: "o08", pre: "きのう", parts: ["{本|ほん}", "を", "{読|よ}んで", "から"], post: "ねました。",
      why: "Ordem certa: きのう ほんを よんでから ねました. A peça de ★ é よんで.", why_en: "Correct order: きのう ほんを よんでから ねました. The piece in ★ is よんで." },
    { id: "o09", pre: "わたしは", parts: ["{水|みず}", "を", "{飲|の}みたい", "です"], post: "。",
      why: "Ordem certa: わたしは みずを のみたいです. A peça de ★ é のみたい.", why_en: "Correct order: わたしは みずを のみたいです. The piece in ★ is のみたい." },
    { id: "o10", pre: "ここは", parts: ["{学校|がっこう}", "の", "{前|まえ}", "です"], post: "。",
      why: "Ordem certa: ここは がっこうの まえです. A peça de ★ é まえ.", why_en: "Correct order: ここは がっこうの まえです. The piece in ★ is まえ." },
    { id: "o11", pre: "あそこに", parts: ["{男|おとこ}", "の", "{人|ひと}", "が"], post: "います。",
      why: "Ordem certa: あそこに おとこの ひとが います. A peça de ★ é ひと.", why_en: "Correct order: あそこに おとこの ひとが います. The piece in ★ is ひと." },
    { id: "o12", pre: "わたしは", parts: ["にほんご", "を", "べんきょう", "します"], post: "。",
      why: "Ordem certa: わたしは にほんごを べんきょうします. A peça de ★ é べんきょう.", why_en: "Correct order: わたしは にほんごを べんきょうします. The piece in ★ is べんきょう." },
    { id: "o13", pre: "{先生|せんせい}に", parts: ["しつもん", "を", "したい", "です"], post: "。",
      why: "Ordem certa: せんせいに しつもんを したいです. A peça de ★ é したい.", why_en: "Correct order: せんせいに しつもんを したいです. The piece in ★ is したい." },
    { id: "o14", pre: "いま", parts: ["{雨|あめ}", "が", "ふって", "います"], post: "。",
      why: "Ordem certa: いま あめが ふって います. A peça de ★ é ふって.", why_en: "Correct order: いま あめが ふって います. The piece in ★ is ふって." }
];

window.JLPT_N5_EXAM.text = [
    { id: "t01",
      text: "{先週|せんしゅう}の にちようび、わたしは ともだち［1］ {山|やま}へ いきました。{天気|てんき}は とても ［2］。{山|やま}の {上|うえ}［3］ おべんとうを たべました。それから、しゃしんを たくさん ［4］。とても たのしかった［5］。",
      blanks: [
        { a: "と", w: ["を", "が", "で"], why: "Ir junto com alguém usa と: ともだちと やまへ.", why_en: "Going together with someone uses と: ともだちと やまへ." },
        { a: "よかったです", w: ["いいです", "いかったです", "よくないです"], why: "O passado de いい é よかった (よかったです). いいです é presente.", why_en: "The past of いい is よかった (よかったです). いいです is the present." },
        { a: "で", w: ["を", "が", "へ"], why: "O lugar onde se come leva で: やまの うえで たべました.", why_en: "The place where you eat takes で: やまの うえで たべました." },
        { a: "とりました", w: ["かきました", "ひきました", "あびました"], why: "Fotografia usa とる: しゃしんを とりました.", why_en: "Photographs use とる: しゃしんを とりました." },
        { a: "です", w: ["でした", "ます", "ました"], why: "Depois de adjetivo no passado (たのしかった) vem です: たのしかったです.", why_en: "After a past adjective (たのしかった) comes です: たのしかったです." }
      ] },
    { id: "t02",
      text: "たなかさん、おげんきですか。わたしは げんきです。きのう、あたらしい {本|ほん}［1］ {買|か}いました。とても おもしろかった［2］、すぐに ぜんぶ {読|よ}みました。たなかさんも {読|よ}んで ［3］。{来週|らいしゅう}、わたしの うちへ {来|き}て ［4］。たなかさんに {会|あ}い［5］ です。",
      blanks: [
        { a: "を", w: ["が", "に", "で"], why: "O objeto de かいました leva を: ほんを かいました.", why_en: "The object of かいました takes を: ほんを かいました." },
        { a: "ので", w: ["のに", "でも", "ながら"], why: "ので dá o motivo: 'como foi interessante, li tudo logo'.", why_en: "ので gives the reason: 'since it was interesting, I read it all right away'." },
        { a: "ください", w: ["ましょう", "ません", "ました"], why: "Pedido: よんで ください (forma て + ください).", why_en: "Request: よんで ください (て form + ください)." },
        { a: "ください", w: ["ましょう", "ません", "ました"], why: "Pedido: きて ください (forma て + ください).", why_en: "Request: きて ください (て form + ください)." },
        { a: "たい", w: ["ます", "ない", "ました"], why: "Desejo: あいたいです (quero encontrar).", why_en: "Desire: あいたいです (I want to meet)." }
      ] },
    { id: "t03",
      text: "{父|ちち}は {会社|かいしゃ}［1］ はたらいて います。まいあさ 6{時|じ}［2］ おきます。それから、{電車|でんしゃ}［3］ {会社|かいしゃ}へ {行|い}きます。{会社|かいしゃ}は 9{時|じ}［4］ 5{時|じ}までです。よるは いつも 8{時|じ}ごろ うちに ［5］。",
      blanks: [
        { a: "で", w: ["を", "が", "へ"], why: "O lugar de trabalho leva で: かいしゃで はたらいて います.", why_en: "The place of work takes で: かいしゃで はたらいて います." },
        { a: "に", w: ["を", "で", "が"], why: "Horário exato leva に: 6じに おきます.", why_en: "An exact time takes に: 6じに おきます." },
        { a: "で", w: ["を", "が", "と"], why: "O meio de transporte leva で: でんしゃで いきます.", why_en: "The means of transport takes で: でんしゃで いきます." },
        { a: "から", w: ["を", "が", "で"], why: "から... まで: 9じから 5じまで." },
        { a: "かえります", w: ["かえって", "かえりたい", "かえりません"], why: "Hábito (いつも) usa o presente: かえります.", why_en: "A habit (いつも) uses the present: かえります." }
      ] },
    { id: "t04",
      text: "きのう、ともだちの うちへ あそびに いきました。うちは えきから あるいて 10ぷん［1］ かかりました。ともだちの おかあさんは りょうり［2］ とても じょうずです。ばんごはんは カレー［3］。とても おいしかった［4］、たくさん ［5］。",
      blanks: [
        { a: "ぐらい", w: ["を", "へ", "と"], why: "ぐらい indica aproximação: 10ぷんぐらい (cerca de 10 minutos).", why_en: "ぐらい indicates approximation: 10ぷんぐらい (about 10 minutes)." },
        { a: "が", w: ["を", "に", "へ"], why: "じょうずです pede が: りょうりが じょうずです.", why_en: "じょうずです takes が: りょうりが じょうずです." },
        { a: "でした", w: ["です", "ます", "だった"], why: "Narração no passado, estilo educado: カレーでした.", why_en: "Narration in the past, polite style: カレーでした." },
        { a: "ので", w: ["のに", "でも", "ながら"], why: "ので dá o motivo: 'como estava gostoso, comi bastante'.", why_en: "ので gives the reason: 'since it was tasty, I ate a lot'." },
        { a: "たべました", w: ["たべます", "たべて", "たべない"], why: "Narração no passado: たくさん たべました.", why_en: "Narration in the past: たくさん たべました." }
      ] }
];

window.JLPT_N5_EXAM.short = [
    { id: "r01",
      text: "たなかさんへ\nあしたの かいぎは 3じからです。{駅|えき}の ちかくの きっさてんで あいましょう。2じ{半|はん}に きて ください。\nやまだ",
      q: "あしたの かいぎは なんじからですか。", a: "3じ", w: ["2じ", "2じはん", "4じ"],
      why: "O texto diz 'かいぎは 3じから'. 2じはん é a hora de chegar ao café.", why_en: "The text says 'かいぎは 3じから'. 2じはん is the time of arrival at the café." },
    { id: "r02",
      text: "わたしは きのう ともだちと えいがを みました。えいがは とても おもしろかったです。そのあと、レストランで ごはんを たべました。",
      q: "ふたりは えいがの あとで なにを しましたか。", a: "ごはんを たべました。",
      w: ["えいがを みました。", "かいものを しました。", "うちに かえりました。"],
      why: "'そのあと、レストランで ごはんを たべました' (depois do filme, comeram).", why_en: "'そのあと、レストランで ごはんを たべました' (after the movie, they ate)." },
    { id: "r03",
      text: "ここでは しゃしんを とっては いけません。\nなかに はいる ときは、くつを ぬいで ください。",
      q: "ここで してはいけないことは なんですか。", a: "しゃしんを とること", w: ["くつを ぬぐこと", "なかに はいること", "ここに くること"],
      why: "'しゃしんを とっては いけません' (é proibido fotografar). Tirar os sapatos é pedido, não proibido.", why_en: "'しゃしんを とっては いけません' (taking photographs is prohibited). Taking off shoes is a request, not a prohibition." },
    { id: "r04",
      text: "あした {雨|あめ}ですから、{山|やま}へは いきません。\n{友|とも}だちの うちで ゲームを します。",
      q: "わたしは あした なにを しますか。", a: "ともだちの うちで ゲームを します。",
      w: ["やまへ いきます。", "うちで ねます。", "がっこうへ いきます。"],
      why: "Como vai chover, não vai à montanha: joga no ゲーム na casa do amigo.", why_en: "Since it is going to rain, he/she won't go to the mountain: plays ゲーム at the friend's house." },
    { id: "r05",
      text: "わたしの {父|ちち}は {毎日|まいにち} 6{時|じ}に おきて、さんぽを します。それから、{新聞|しんぶん}を よみます。",
      q: "おとうさんは おきて、さいしょに なにを しますか。", a: "さんぽを します。",
      w: ["しんぶんを よみます。", "ごはんを たべます。", "かいしゃへ いきます。"],
      why: "Primeiro さんぽ; só depois (それから) lê o jornal.", why_en: "First さんぽ; only afterwards (それから) he/she reads the newspaper." },
    { id: "r06",
      text: "スーパーの おしらせ\nきょうは やさいが とても やすいです。りんごは 3つで 200{円|えん}です。6じからは、さかなも やすく なります。",
      q: "さかなが やすく なるのは なんじからですか。", a: "6じから", w: ["3じから", "2じから", "7じから"],
      why: "'6じからは、さかなも やすく なります'." },
    { id: "r07",
      text: "たなかさんは まいあさ バスで {会社|かいしゃ}へ いきます。でも、{今日|きょう}は {雨|あめ}ですから、バスが おくれました。{会社|かいしゃ}に ついたのは 9{時|じ}{半|はん}でした。",
      q: "たなかさんは どうして かいしゃに おくれましたか。", a: "あめで バスが おくれたから",
      w: ["バスに のらなかったから", "あさ おきなかったから", "でんしゃが とまったから"],
      why: "Por causa da chuva, o ônibus atrasou (バスが おくれました).", why_en: "Because of the rain, the bus was late (バスが おくれました)." },
    { id: "r08",
      text: "わたしは ねこを 2ひき かって います。{白|しろ}い ねこと くろい ねこです。{白|しろ}い ねこは ミルクが すきです。くろい ねこは さかなが すきです。",
      q: "ミルクが すきなのは どの ねこですか。", a: "しろい ねこ", w: ["くろい ねこ", "しろい いぬ", "くろい いぬ"],
      why: "'しろい ねこは ミルクが すきです'. O gato preto gosta de peixe.", why_en: "'しろい ねこは ミルクが すきです'. The black cat likes fish." },
    { id: "r09",
      text: "テストの おしらせ\nあさっての テストは 9{時|じ}から 10{時|じ}までです。えんぴつと けしごむを もって きて ください。ペンは つかえません。",
      q: "テストに もって きては いけない ものは どれですか。", a: "ペン", w: ["えんぴつ", "けしごむ", "えんぴつと けしごむ"],
      why: "'ペンは つかえません' (caneta não pode). Lápis e borracha são pedidos.", why_en: "'ペンは つかえません' (pens are not allowed). Pencils and erasers are requests." },
    { id: "r10",
      text: "やまださん\nすみません。{今日|きょう}は あたまが いたいですから、{会社|かいしゃ}を やすみます。あした {会|あ}います。\nたなか",
      q: "たなかさんは どうして かいしゃを やすみますか。", a: "あたまが いたいから", w: ["いそがしいから", "あめだから", "でんしゃが おくれたから"],
      why: "'あたまが いたいですから' (porque está com dor de cabeça).", why_en: "'あたまが いたいですから' (because he/she has a headache)." }
];

window.JLPT_N5_EXAM.mid = [
    { id: "r11",
      text: "わたしは {先月|せんげつ}、にほんの {友|とも}だちの うちに 3にち ぐらい とまりました。{友|とも}だちの おかあさんは りょうりが じょうずで、まいにち おいしい ごはんを つくって くれました。いちばん おいしかったのは てんぷらです。わたしも つくりたかったので、つくりかたを おしえて もらいました。うちに かえってから、ひとりで つくりましたが、あまり おいしく できませんでした。こんど また にほんへ いって、いっしょに つくりたいです。",
      qs: [
        { q: "わたしは どうして つくりかたを おしえて もらいましたか。", a: "てんぷらが いちばん おいしかったから",
          w: ["ともだちの おかあさんが いそがしかったから", "にほんの りょうりが すきじゃないから", "ひとりで たべたかったから"],
          why: "'てんぷらが いちばん おいしかった' e 'わたしも つくりたかったので' (quis fazer também).", why_en: "'てんぷらが いちばん おいしかった' and 'わたしも つくりたかったので' (wanted to make it too)." },
        { q: "うちで つくった てんぷらは どうでしたか。", a: "あまり おいしく なかった。",
          w: ["とても おいしかった。", "ともだちが たべた。", "つくらなかった。"],
          why: "'あまり おいしく できませんでした' (não ficou muito gostoso).", why_en: "'あまり おいしく できませんでした' (it did not turn out very tasty)." }
      ] },
    { id: "r12",
      text: "わたしの しゅみは えを かく ことです。まいしゅう にちようびに、ちかくの こうえんへ いって、{花|はな}や {木|き}の えを かきます。ことしの はるから、えの きょうしつにも いって います。せんせいは とても やさしい {人|ひと}です。いつか、じぶんの えを {友|とも}だちに みせたいです。",
      qs: [
        { q: "この {人|ひと}は まいしゅう にちようびに なにを しますか。", a: "こうえんで えを かく",
          w: ["えの きょうしつへ いく", "ともだちに えを みせる", "はなを かう"],
          why: "'まいしゅう にちようびに、こうえんへ いって、えを かきます'." },
        { q: "この {人|ひと}は これから なにを したいですか。", a: "ともだちに えを みせたい",
          w: ["こうえんへ いきたい", "きょうしつを やめたい", "せんせいに あいたい"],
          why: "'いつか、じぶんの えを ともだちに みせたいです' (quer mostrar seus desenhos aos amigos).", why_en: "'いつか、じぶんの えを ともだちに みせたいです' (he/she wants to show his/her drawings to friends)." }
      ] },
    { id: "r13",
      text: "わたしの うちは {駅|えき}から あるいて 15{分|ふん}です。まいあさ、うちから {駅|えき}まで あるきます。{雨|あめ}の {日|ひ}は バスに のります。バスは {駅|えき}まで 5{分|ふん}ですが、ときどき おくれます。せんしゅうは {雨|あめ}の {日|ひ}が {多|おお}くて、3かい バスに のりました。バスは べんりですが、おくれる ことが あります。それで、{雨|あめ}の {日|ひ}は いつもより 10{分|ぷん} はやく うちを でます。",
      qs: [
        { q: "この {人|ひと}は {雨|あめ}の {日|ひ}に どうやって {駅|えき}へ いきますか。", a: "バスで いく",
          w: ["あるいて いく", "でんしゃで いく", "くるまで いく"],
          why: "'あめの ひは バスに のります'." },
        { q: "{雨|あめ}の {日|ひ}は どうして はやく うちを でますか。", a: "バスが おくれる ことが あるから",
          w: ["えきまで とおいから", "いつも あるくから", "ともだちと あうから"],
          why: "'おくれる ことが あります。それで... はやく うちを でます' (como o ônibus pode atrasar, sai mais cedo).", why_en: "'おくれる ことが あります。それで... はやく うちを でます' (since the bus may be late, he/she leaves home early)." }
      ] },
    { id: "r14",
      text: "きのうは ちちの たんじょうびでした。わたしと いもうとは ケーキを かいに いきました。ケーキやさんは {駅|えき}の {前|まえ}に あります。いろいろな ケーキが ありましたが、ちちは チョコレートが すきなので、チョコレートの ケーキを かいました。うちで みんなで たべました。ちちは とても よろこびました。",
      qs: [
        { q: "どうして チョコレートの ケーキを かいましたか。", a: "ちちが チョコレートが すきだから",
          w: ["いもうとが すきだから", "いちばん やすかったから", "ケーキやさんに それだけ あったから"],
          why: "'ちちは チョコレートが すきなので' (o pai gosta de chocolate).", why_en: "'ちちは チョコレートが すきなので' (because the father likes chocolate)." },
        { q: "ケーキは どこで たべましたか。", a: "うち", w: ["ケーキやさん", "{駅|えき}の {前|まえ}", "{学校|がっこう}"],
          why: "'うちで みんなで たべました'." }
      ] }
];

window.JLPT_N5_EXAM.search = [
    { id: "s01", lead: "みぎの ひょうは、えいかんの あんないです。",
      table: { head: ["えいが", "じかん", "ねだん"], rows: [["さくら", "10:00 - 12:00", "1,200{円|えん}"], ["うみ", "13:00 - 15:30", "1,500{円|えん}"], ["やま", "17:00 - 19:00", "1,000{円|えん}"]] },
      q: "さとうさんは 3じから 6じの あいだに はじまる えいがを みたいです。どれを みますか。",
      a: "やま", w: ["さくら", "うみ", "どれも みられません"],
      why: "Só 'やま' começa nesse intervalo (17:00 = 5 da tarde). さくら começa às 10:00 e うみ às 13:00.", why_en: "Only 'やま' starts in that interval (17:00 = 5 p.m.). さくら starts at 10:00 and うみ at 13:00." },
    { id: "s02", lead: "みぎの ひょうは、プールの あんないです。",
      table: { head: ["ひ", "じかん", "ねだん"], rows: [["{月|げつ}ようび - {金|きん}ようび", "10:00 - 20:00", "300{円|えん}"], ["{土|ど}ようび・にちようび", "9:00 - 18:00", "500{円|えん}"]] },
      q: "どようびの あさ 9じに プールへ いきたいです。いくら はらいますか。",
      a: "500{円|えん}", w: ["300{円|えん}", "200{円|えん}", "1,000{円|えん}"],
      why: "No sábado o preço é 500 ienes (e abre às 9:00). Em dia de semana só abre às 10:00.", why_en: "On Saturday the price is 500 yen (and it opens at 9:00). On weekdays it only opens at 10:00." },
    { id: "s03", lead: "みぎの ひょうは、{駅|えき}から {学校|がっこう}へ いく バスの じかんです。",
      table: { head: ["{駅|えき}を でる じかん", "{学校|がっこう}に つく じかん"], rows: [["8:00", "8:20"], ["8:30", "8:50"], ["9:00", "9:20"], ["9:30", "9:50"]] },
      q: "9じに はじまる じゅぎょうに まにあう いちばん おそい バスは、{駅|えき}を なんじに でますか。",
      a: "8じ30ぷん", w: ["8じ", "9じ", "9じ30ぷん"],
      why: "Chegar antes das 9:00: o último é o que sai às 8:30 e chega às 8:50. O das 9:00 chega às 9:20 (tarde).", why_en: "To arrive before 9:00: the last one is the bus leaving at 8:30 and arriving at 8:50. The 9:00 one arrives at 9:20 (late)." },
    { id: "s04", lead: "みぎの ひょうは、スーパーの セールの おしらせです。",
      table: { head: ["しょうひん", "ねだん"], rows: [["りんご（3こ）", "200{円|えん}"], ["ぎゅうにゅう", "150{円|えん}"], ["パン", "100{円|えん}"], ["たまご", "180{円|えん}"]] },
      q: "りんごと パンを かいます。ぜんぶで いくらですか。",
      a: "300{円|えん}", w: ["250{円|えん}", "350{円|えん}", "100{円|えん}"],
      why: "りんご 200 + パン 100 = 300 ienes.", why_en: "りんご 200 + パン 100 = 300 yen." }
];
