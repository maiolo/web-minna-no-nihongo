// Dados da lição 18. Formato descrito no README.md.
window.lessonData = {
  vocab: {
    title: "{語彙|ごい} (Vocabulário)", title_en: "{語彙|ごい} (Vocabulary)",
    items: [
      { jp: "できます", romaji: "dekimasu", pt: "Poder, conseguir, ser capaz de", en: "To be able to, can" },
      { jp: "{洗|あら}います", romaji: "araimasu", pt: "Lavar", en: "To wash" },
      { jp: "{弾|ひ}きます", romaji: "hikimasu", pt: "Tocar (instrumento de corda/piano)", en: "To play (string instrument / piano)" },
      { jp: "{歌|うた}います", romaji: "utaimasu", pt: "Cantar", en: "To sing" },
      { jp: "{集|あつ}めます", romaji: "atsumemasu", pt: "Colecionar, reunir", en: "To collect, to gather" },
      { jp: "{捨|す}てます", romaji: "sutemasu", pt: "Jogar fora, descartar", en: "To throw away, to discard" },
      { jp: "{換|か}えます", romaji: "kaemasu", pt: "Trocar, substituir", en: "To change, to replace" },
      { jp: "{運転|うんてん}します", romaji: "unten shimasu", pt: "Dirigir", en: "To drive" },
      { jp: "{予約|よやく}します", romaji: "yoyaku shimasu", pt: "Reservar", en: "To reserve, to book" },
      { jp: "{見学|けんがく}します", romaji: "kengaku shimasu", pt: "Visitar para estudar/observar", en: "To visit to study/observe" },
      { jp: "ピアノ", romaji: "piano", pt: "Piano" },
      { jp: "〜メートル", romaji: "~meetoru", pt: "~ metros", en: "~ meters" },
      { jp: "{国際|こくさい}〜", romaji: "kokusai~", pt: "~ internacional", en: "International ~" },
      { jp: "{現金|げんきん}", romaji: "genkin", pt: "Dinheiro em espécie", en: "Cash" },
      { jp: "{趣味|しゅみ}", romaji: "shumi", pt: "Hobby, passatempo", en: "Hobby, pastime" },
      { jp: "{日記|にっき}", romaji: "nikki", pt: "Diário", en: "Diary" },
      { jp: "お{祈|いの}り", romaji: "oinori", pt: "Oração", en: "Prayer" },
      { jp: "{課長|かちょう}", romaji: "kachou", pt: "Chefe de seção", en: "Section chief" },
      { jp: "{部長|ぶちょう}", romaji: "buchou", pt: "Chefe de departamento", en: "Department head" },
      { jp: "{社長|しゃちょう}", romaji: "shachou", pt: "Presidente da empresa", en: "Company president" },
      { jp: "{動物|どうぶつ}", romaji: "doubutsu", pt: "Animal" },
      { jp: "{馬|うま}", romaji: "uma", pt: "Cavalo", en: "Horse" },
      { jp: "へえ", romaji: "hee", pt: "Sério? / Uau! (surpresa)", en: "Really? / Wow! (surprise)" },
      { jp: "それはおもしろいですね", romaji: "sore wa omoshiroi desu ne", pt: "Isso é interessante, não é?", en: "That's interesting, isn't it?" },
      { jp: "なかなか", romaji: "nakanaka", pt: "Difícil de / Raramente (com negativa)", en: "Hard to / Hardly (with a negative)" },
      { jp: "{牧場|ぼくじょう}", romaji: "bokujou", pt: "Fazenda, rancho", en: "Farm, ranch" },
      { jp: "ほんとうですか", romaji: "hontou desu ka", pt: "É verdade?", en: "Is that true?" },
      { jp: "ぜひ", romaji: "zehi", pt: "Sem falta / Com certeza", en: "Without fail / Definitely" }
    ]
  },
  gramatica: {
    title: "{文法|ぶんぽう} (Gramática)", title_en: "{文法|ぶんぽう} (Grammar)",
    intro: "Quatro pontos nesta lição. A forma de dicionário vem primeiro, porque os três pontos seguintes precisam dela.", intro_en: "Four points in this lesson. The dictionary form comes first, because the next three points need it.",
    points: [
      {
        id: "jisho-kei",
        title: "{辞書形|じしょけい} (forma de dicionário)", title_en: "{辞書形|じしょけい} (dictionary form)",
        pat: "V-ます ➔ V-{辞書形|じしょけい}",
        short: "a forma básica do verbo, base dos pontos seguintes", short_en: "the basic form of the verb, the base of the next points",
        mean: "É a forma que aparece nos dicionários e a que entra em ことが できます, 〜ことです e 〜{前|まえ}に. Também é o presente informal: 「{飲|の}む」 = tomo, vou tomar.", mean_en: "It is the form that appears in dictionaries and the one used in ことが できます, 〜ことです and 〜{前|まえ}に. It is also the informal present: 「{飲|の}む」 = I drink, I will drink.",
        rule: "Parta da forma ます: no grupo 1, a sílaba antes de ます (coluna i) passa para a coluna u.", rule_en: "Start from the ます form: in group 1, the syllable before ます (い column) changes to the う column.",
        form: [
          { label: "{第|だい}１グループ (Grupo 1)", label_en: "{第|だい}１グループ (Group 1)", text: "Troque a sílaba da coluna i pela da coluna u.", text_en: "Replace the い-column syllable with the one from the う column.", ex: [
            { tag: "い ➔ う", jp: "{買|か}います ➔ {買|か}<strong>う</strong>", pt: "comprar", en: "to buy" },
            { tag: "き ➔ く", jp: "{書|か}きます ➔ {書|か}<strong>く</strong>", pt: "escrever", en: "to write" },
            { tag: "ぎ ➔ ぐ", jp: "{急|いそ}ぎます ➔ {急|いそ}<strong>ぐ</strong>", pt: "apressar-se", en: "to hurry" },
            { tag: "し ➔ す", jp: "{話|はな}します ➔ {話|はな}<strong>す</strong>", pt: "falar", en: "to speak" },
            { tag: "ち ➔ つ", jp: "{待|ま}ちます ➔ {待|ま}<strong>つ</strong>", pt: "esperar", en: "to wait" },
            { tag: "み ➔ む", jp: "{読|よ}みます ➔ {読|よ}<strong>む</strong>", pt: "ler", en: "to read" },
            { tag: "び ➔ ぶ", jp: "{呼|よ}びます ➔ {呼|よ}<strong>ぶ</strong>", pt: "chamar", en: "to call" },
            { tag: "り ➔ る", jp: "{帰|かえ}ります ➔ {帰|かえ}<strong>る</strong>", pt: "voltar", en: "to return" }
          ] },
          { label: "{第|だい}２グループ (Grupo 2)", label_en: "{第|だい}２グループ (Group 2)", text: "Troque ます por <strong>る</strong>.", text_en: "Replace ます with <strong>る</strong>.", ex: [
            { jp: "{食|た}べます ➔ {食|た}べ<strong>る</strong>", pt: "comer", en: "to eat" },
            { jp: "{見|み}ます ➔ {見|み}<strong>る</strong>", pt: "ver", en: "to see" }
          ] },
          { label: "{第|だい}３グループ (Grupo 3)", label_en: "{第|だい}３グループ (Group 3)", text: "Irregulares: só dois verbos.", text_en: "Irregulars: only two verbs.", ex: [
            { jp: "します ➔ <strong>する</strong>", pt: "fazer", en: "to do" },
            { jp: "{来|き}ます ➔ {来|く}<strong>る</strong>", pt: "vir (o kanji muda de きます para くる)", en: "to come (the kanji reading changes from きます to くる)" }
          ] }
        ],
        ex: [
          { jp: "{毎朝|まいあさ} コーヒーを {飲|の}む。", pt: "Todas as manhãs tomo café. (informal)", en: "I have coffee every morning. (informal)" },
          { jp: "{友|とも}だちと {映画|えいが}を {見|み}る。", pt: "Vou ver um filme com um amigo. (informal)", en: "I'm going to see a movie with a friend. (informal)" },
          { jp: "{来週|らいしゅう}、{日本|にほん}^へ {行|い}く。", romaji: "Raishuu, Nihon e iku.", pt: "Semana que vem vou ao Japão. (informal)", en: "I'm going to Japan next week. (informal)" }
        ],
        contrast: {
          rows: [
            { label: "{丁寧形|ていねいけい} (ます)", jp: "{毎朝|まいあさ} コーヒーを {飲|の}みます。", pt: "Educado: com desconhecidos, no trabalho.", en: "Polite: with strangers, at work." },
            { label: "{辞書形|じしょけい} (informal)", jp: "{毎朝|まいあさ} コーヒーを {飲|の}む。", pt: "Informal: com amigos e família. É também a forma que entra nos pontos seguintes.", en: "Informal: with friends and family. It is also the form used in the next points." }
          ],
          note: "No dicionário, procure sempre {食|た}べる, nunca {食|た}べます.", note_en: "In the dictionary, always look up {食|た}べる, never {食|た}べます."
        },
        trap: [
          "O grupo 2 costuma ter a coluna e antes de ます ({食|た}<strong>べ</strong>ます). Com a coluna i (き, み, り…), em geral é grupo 1, mas há exceções do grupo 2 que valem decorar: {見|み}る, {起|お}きる, {借|か}りる, {浴|あ}びる, {降|お}りる.",
          "{帰|かえ}る, {入|はい}る e {走|はし}る parecem do grupo 2, mas são do grupo 1: {帰|かえ}ります ➔ {帰|かえ}る."
        ],
        trap_en: [
          "Group 2 verbs usually have the え column before ます ({食|た}<strong>べ</strong>ます). With the い column (き, み, り…), it is usually group 1, but there are group 2 exceptions worth memorizing: {見|み}る, {起|お}きる, {借|か}りる, {浴|あ}びる, {降|お}りる.",
          "{帰|かえ}る, {入|はい}る and {走|はし}る look like group 2, but they are group 1: {帰|かえ}ります ➔ {帰|かえ}る."
        ]
      },
      {
        id: "koto-ga-dekiru",
        title: "{動詞辞書形|どうしじしょけい} ＋ ことが できます",
        pat: "V-{辞書形|じしょけい} ことが できます",
        short: "saber fazer / ser possível fazer", short_en: "can do / be able to do",
        mean: "Expressa habilidade (“sei dirigir”) ou possibilidade (“aqui é possível comprar o bilhete”). O contexto diz qual das duas é.", mean_en: "Expresses ability (“I can drive”) or possibility (“you can buy the ticket here”). The context tells which one it is.",
        rule: "Verbo na forma de dicionário + こと ＋ が できます. Com um substantivo que já é uma atividade, não precisa do verbo: スキーが できます. Negativa: できません.", rule_en: "Verb in dictionary form + こと ＋ が できます. With a noun that is already an activity, the verb is not needed: スキーが できます. Negative: できません.",
        ex: [
          { jp: "ミラーさんは {漢字|かんじ}を {読|よ}む ことが できます。", romaji: "Miraa-san wa kanji o yomu koto ga dekimasu.", pt: "O Sr. Miller consegue ler kanji.", en: "Mr. Miller can read kanji." },
          { jp: "わたしは {車|くるま}を {運転|うんてん}する ことが できます。", romaji: "Watashi wa kuruma o unten suru koto ga dekimasu.", pt: "Eu sei dirigir. (habilidade)", en: "I can drive. (ability)" },
          { jp: "ここで {切符|きっぷ}を {買|か}う ことが できます。", romaji: "Koko de kippu o kau koto ga dekimasu.", pt: "Aqui é possível comprar o bilhete. (possibilidade)", en: "You can buy the ticket here. (possibility)" },
          { jp: "スキーが できますか。<br>…はい、できます。でも、あまり {上手|じょうず}じゃありません。", romaji: "Sukii ga dekimasu ka. ...Hai, dekimasu. Demo, amari jouzu ja arimasen.", pt: "Você sabe esquiar? ...Sim, sei. Mas não sou muito bom.", en: "Can you ski? ...Yes, I can. But I'm not very good." },
          { jp: "マリアさんは パソコンを {使|つか}う ことが できますか。<br>…いいえ、できません。", romaji: "Maria-san wa pasokon o tsukau koto ga dekimasu ka. ...Iie, dekimasen.", pt: "A Sra. Maria sabe usar o computador? ...Não, não sabe.", en: "Can Ms. Maria use a computer? ...No, she can't." },
          { jp: "{大阪城|おおさかじょう}まで {電車|でんしゃ}で {行|い}く ことが できますか。<br>…はい、できます。", romaji: "Oosakajou made densha de iku koto ga dekimasu ka. ...Hai, dekimasu.", pt: "É possível ir até o Castelo de Osaka de trem? ...Sim, é possível.", en: "Can you get to Osaka Castle by train? ...Yes, you can." },
          { jp: "ここで {辞書|じしょ}を {借|か}りる ことが できますか。<br>…いいえ、できません。", romaji: "Koko de jisho o kariru koto ga dekimasu ka. ...Iie, dekimasen.", pt: "É possível pegar um dicionário emprestado aqui? ...Não, não é possível.", en: "Can I borrow a dictionary here? ...No, you can't." }
        ],
        contrast: {
          rows: [
            { label: "substantivo ＋ が できます", label_en: "noun ＋ が できます", jp: "スキーが できます。", pt: "Sei esquiar.", en: "I can ski." },
            { label: "verbo ＋ ことが できます", label_en: "verb ＋ ことが できます", jp: "{泳|およ}ぐ ことが できます。", pt: "Sei nadar.", en: "I can swim." }
          ],
          note: "Com verbo, o こと é obrigatório: ele transforma a ação em substantivo, para poder receber が.", note_en: "With a verb, こと is required: it turns the action into a noun, so that it can take が."
        },
        trap: [
          "O verbo fica na forma de dicionário, não na forma ます. Errado: {読|よ}みます ことが できます。 Certo: {読|よ}む ことが できます。",
          "Em português “poder” e “saber” viram a mesma estrutura. “Sei nadar” e “posso nadar aqui” são ambos 〜ことが できます: quem dá o sentido é o contexto."
        ],
        trap_en: [
          "The verb stays in the dictionary form, not the ます form. Wrong: {読|よ}みます ことが できます。 Right: {読|よ}む ことが できます。",
          "In English, “can” covers both “know how to” and “be allowed/able to”. “I can swim” and “I can swim here” are both 〜ことが できます: the context gives the meaning."
        ]
      },
      {
        id: "shumi",
        title: "{趣味|しゅみ}は ＋ {動詞辞書形|どうしじしょけい} ことです",
        pat: "わたしの {趣味|しゅみ}は V-{辞書形|じしょけい} ことです",
        short: "meu passatempo é…", short_en: "my hobby is…",
        mean: "Diz qual é o seu passatempo. O こと transforma o verbo em substantivo, como o infinitivo do português (“ver filmes”).", mean_en: "Says what your hobby is. こと turns the verb into a noun, like the English “-ing” form (“watching movies”).",
        rule: "Com substantivo, a frase vai direto: {趣味|しゅみ}は {映画|えいが}です。 Com verbo, a forma de dicionário + ことです.", rule_en: "With a noun, the sentence goes straight: {趣味|しゅみ}は {映画|えいが}です。 With a verb, dictionary form + ことです.",
        ex: [
          { jp: "わたしの {趣味|しゅみ}は {映画|えいが}を {見|み}る ことです。", romaji: "Watashi no shumi wa eiga o miru koto desu.", pt: "Meu passatempo é assistir a filmes.", en: "My hobby is watching movies." },
          { jp: "わたしの {趣味|しゅみ}は {本|ほん}を {読|よ}む ことです。", romaji: "Watashi no shumi wa hon o yomu koto desu.", pt: "Meu passatempo é ler livros.", en: "My hobby is reading books." },
          { jp: "わたしの {趣味|しゅみ}は {写真|しゃしん}を {撮|と}る ことです。", romaji: "Watashi no shumi wa shashin o toru koto desu.", pt: "Meu passatempo é tirar fotos.", en: "My hobby is taking photos." },
          { jp: "{鈴木|すずき}さんの {趣味|しゅみ}は {何|なん}ですか。<br>…{古|ふる}い {時計|とけい}を {集|あつ}める ことです。", romaji: "Suzuki-san no shumi wa nan desu ka. ...Furui tokei o atsumeru koto desu.", pt: "Qual é o passatempo do Sr. Suzuki? ...É colecionar relógios antigos.", en: "What is Mr. Suzuki's hobby? ...Collecting old watches." }
        ],
        contrast: {
          rows: [
            { label: "substantivo", label_en: "noun", jp: "わたしの {趣味|しゅみ}は {映画|えいが}です。", pt: "Meu passatempo é cinema.", en: "My hobby is movies." },
            { label: "verbo ＋ こと", label_en: "verb ＋ こと", jp: "わたしの {趣味|しゅみ}は {映画|えいが}を {見|み}る ことです。", pt: "Meu passatempo é assistir a filmes.", en: "My hobby is watching movies." }
          ],
          note: "Use a primeira quando o passatempo é uma coisa (música, cinema); use a segunda quando é uma ação, com objeto e tudo.", note_en: "Use the first when the hobby is a thing (music, movies); use the second when it is an action, with its object and everything."
        },
        trap: [
          "Não termine o verbo em ます: errado {趣味|しゅみ}は {映画|えいが}を {見|み}ます。 Certo: {趣味|しゅみ}は {映画|えいが}を {見|み}る ことです。",
          "Para perguntar, use {何|なん}ですか (não {何|なに}です): {趣味|しゅみ}は {何|なん}ですか。"
        ],
        trap_en: [
          "Do not end the verb in ます: wrong {趣味|しゅみ}は {映画|えいが}を {見|み}ます。 Right: {趣味|しゅみ}は {映画|えいが}を {見|み}る ことです。",
          "To ask, use {何|なん}ですか (not {何|なに}です): {趣味|しゅみ}は {何|なん}ですか。"
        ]
      },
      {
        id: "mae-ni",
        title: "〜{前|まえ}に (antes de…)", title_en: "〜{前|まえ}に (before…)",
        pat: "V-{辞書形|じしょけい} {前|まえ}に、〜",
        short: "antes de fazer…", short_en: "before doing…",
        mean: "A ação principal acontece antes da ação marcada com {前|まえ}に: “antes de dormir, escrevo o diário”.", mean_en: "The main action happens before the action marked with {前|まえ}に: “before going to bed, I write my diary”.",
        form: [
          { label: "Três construções", label_en: "Three constructions", text: "O que vem antes de {前|まえ}に muda conforme a palavra.", text_en: "What comes before {前|まえ}に changes depending on the word.", ex: [
            { tag: "verbo", tag_en: "verb", jp: "{寝|ね}る <strong>{前|まえ}に</strong>、{本|ほん}を {読|よ}みます。", pt: "Antes de dormir, leio.", en: "Before going to bed, I read." },
            { tag: "substantivo ＋ の", tag_en: "noun ＋ の", jp: "{食事|しょくじ} <strong>の {前|まえ}に</strong>、{手|て}を {洗|あら}います。", pt: "Antes da refeição, lavo as mãos.", en: "Before the meal, I wash my hands." },
            { tag: "número", tag_en: "number", jp: "5{年|ねん} <strong>{前|まえ}に</strong>、{日本|にほん}へ {来|き}ました。", pt: "Há cinco anos vim ao Japão.", en: "I came to Japan five years ago." }
          ] }
        ],
        ex: [
          { jp: "{寝|ね}る {前|まえ}に、{日記|にっき}を {書|か}きます。", romaji: "Neru mae ni, nikki o kakimasu.", pt: "Antes de dormir, escrevo no diário.", en: "Before going to bed, I write in my diary." },
          { jp: "{食事|しょくじ}の {前|まえ}に、{手|て}を {洗|あら}います。", romaji: "Shokuji no mae ni, te o araimasu.", pt: "Antes da refeição, lavo as mãos.", en: "Before the meal, I wash my hands." },
          { jp: "{日本|にほん}の {子供|こども}は {学校|がっこう}に {入|はい}る {前|まえ}に、ひらがなを {覚|おぼ}えなければなりませんか。<br>…いいえ、{覚|おぼ}えなくてもいいです。", romaji: "Nihon no kodomo wa gakkou ni hairu mae ni, hiragana o oboenakereba narimasen ka. ...Iie, oboenakutemo ii desu.", pt: "As crianças japonesas têm que aprender hiragana antes de entrar na escola? ...Não, não precisam aprender.", en: "Do Japanese children have to learn hiragana before entering school? ...No, they don't have to learn it." }
        ],
        contrast: {
          rows: [
            { label: "〜{前|まえ}に (antes de)", label_en: "〜{前|まえ}に (before)", jp: "{寝|ね}る {前|まえ}に、{日記|にっき}を {書|か}きます。", pt: "Escrevo o diário antes de dormir (o diário vem primeiro).", en: "I write my diary before going to bed (the diary comes first)." },
            { label: "V-て から (depois de)", label_en: "V-て から (after)", jp: "{日記|にっき}を {書|か}いてから、{寝|ね}ます。", pt: "Escrevo o diário e depois durmo (a mesma ordem, contada em sequência).", en: "I write my diary and then go to bed (the same order, told in sequence)." }
          ],
          note: "Com 〜{前|まえ}に, a ação escrita primeiro na frase acontece depois. Com 〜てから, ela acontece primeiro.", note_en: "With 〜{前|まえ}に, the action written first in the sentence happens later. With 〜てから, it happens first."
        },
        trap: [
          "O verbo antes de {前|まえ}に fica sempre na forma de dicionário, mesmo que a frase esteja no passado. Certo: {寝|ね}る {前|まえ}に、{日記|にっき}を {書|か}きました。 Errado: {寝|ね}た {前|まえ}に。",
          "Com substantivo, não esqueça o の: {食事|しょくじ}<strong>の</strong> {前|まえ}に. Com número, sem の: 5{年|ねん} {前|まえ}に (e o sentido passa a ser “há 5 anos”)."
        ],
        trap_en: [
          "The verb before {前|まえ}に is always in the dictionary form, even if the sentence is in the past. Right: {寝|ね}る {前|まえ}に、{日記|にっき}を {書|か}きました。 Wrong: {寝|ね}た {前|まえ}に。",
          "With a noun, do not forget の: {食事|しょくじ}<strong>の</strong> {前|まえ}に. With a number, no の: 5{年|ねん} {前|まえ}に (and the meaning becomes “5 years ago”)."
        ]
      }
    ]
  },
  renshuuA: {
    title: "{練習|れんしゅう} A",
    exercises: [
      {
        desc: "{辞書形|じしょけい} (Verbos e suas Formas de Dicionário)", desc_en: "{辞書形|じしょけい} (Verbs and their dictionary forms)",
        questions: [
          { q: "{買|か}います ➔", a: "{買|か}う", romaji: "kau", pt: "Comprar", en: "To buy" },
          { q: "{書|か}きます ➔", a: "{書|か}く", romaji: "kaku", pt: "Escrever", en: "To write" },
          { q: "{急|いそ}ぎます ➔", a: "{急|いそ}ぐ", romaji: "isogu", pt: "Apressar-se", en: "To hurry" },
          { q: "{読|よ}みます ➔", a: "{読|よ}む", romaji: "yomu", pt: "Ler", en: "To read" },
          { q: "{呼|よ}びます ➔", a: "{呼|よ}ぶ", romaji: "yobu", pt: "Chamar", en: "To call" },
          { q: "{降|ふ}ります ➔", a: "{降|ふ}る", romaji: "furu", pt: "Chover/Nevar", en: "To rain/snow" },
          { q: "{待|ま}ちます ➔", a: "{待|ま}つ", romaji: "matsu", pt: "Esperar", en: "To wait" },
          { q: "{帰|かえ}ります ➔", a: "{帰|かえ}る", romaji: "kaeru", pt: "Voltar", en: "To return" },
          { q: "{話|はな}します ➔", a: "{話|はな}す", romaji: "hanasu", pt: "Falar", en: "To speak" },
          { q: "{食|た}べます (Grp 2) ➔", a: "{食|た}べる", romaji: "taberu", pt: "Comer", en: "To eat" },
          { q: "{見|み}ます (Grp 2) ➔", a: "{見|み}る", romaji: "miru", pt: "Ver/Assistir", en: "To see/watch" },
          { q: "します (Grp 3) ➔", a: "する", romaji: "suru", pt: "Fazer", en: "To do" },
          { q: "{来|き}ます (Grp 3) ➔", a: "{来|く}る", romaji: "kuru", pt: "Vir", en: "To come" }
        ]
      }
    ]
  },
  renshuuB: {
    title: "{練習|れんしゅう} B",
    exercises: [
      {
        desc: "1. {辞書形|じしょけい}に{変|か}えなさい。 (Mude para a forma de dicionário)", desc_en: "1. {辞書形|じしょけい}に{変|か}えなさい。 (Change to the dictionary form)",
        questions: [
          { q: "{歌|うた}います ➔", a: "{歌|うた}う", romaji: "utau", pt: "Cantar", en: "To sing" },
          { q: "{弾|ひ}きます ➔", a: "{弾|ひ}く", romaji: "hiku", pt: "Tocar", en: "To play" },
          { q: "{泳|およ}ぎます ➔", a: "{泳|およ}ぐ", romaji: "oyogu", pt: "Nadar", en: "To swim" },
          { q: "{直|なお}します ➔", a: "{直|なお}す", romaji: "naosu", pt: "Consertar", en: "To repair" },
          { q: "{持|も}ちます ➔", a: "{持|も}つ", romaji: "motsu", pt: "Segurar", en: "To hold" },
          { q: "{遊|あそ}びます ➔", a: "{遊|あそ}ぶ", romaji: "asobu", pt: "Brincar", en: "To play (have fun)" },
          { q: "{休|やす}みます ➔", a: "{休|やす}む", romaji: "yasumu", pt: "Descansar", en: "To rest" },
          { q: "{走|はし}ります ➔", a: "{走|はし}る", romaji: "hashiru", pt: "Correr", en: "To run" },
          { q: "{集|あつ}めます ➔", a: "{集|あつ}める", romaji: "atsumeru", pt: "Colecionar", en: "To collect" },
          { q: "{捨|す}てます ➔", a: "{捨|す}てる", romaji: "suteru", pt: "Jogar fora", en: "To throw away" }
        ]
      },
      {
        desc: "2. 〜ことが できます を{使|つか}って{文|ぶん}を{作|つく}りなさい。 (Use ~koto ga dekimasu)",
        questions: [
          { q: "{漢字|かんじ}を {読|よ}みます ➔", a: "{漢字|かんじ}を {読|よ}む ことが できます。", romaji: "Kanji o yomu koto ga dekimasu.", pt: "Consigo ler kanji.", en: "I can read kanji." },
          { q: "ピアノを {弾|ひ}きます ➔", a: "ピアノを {弾|ひ}く ことが できます。", romaji: "Piano o hiku koto ga dekimasu.", pt: "Sei tocar piano.", en: "I can play the piano." },
          { q: "100メートル {泳|およ}ぎます ➔", a: "100メートル {泳|およ}ぐ ことが できます。", romaji: "Hyaku meetoru oyogu koto ga dekimasu.", pt: "Consigo nadar 100 metros.", en: "I can swim 100 meters." },
          { q: "{日本語|にほんご}の {歌|うた}を {歌|うた}います ➔", a: "{日本語|にほんご}の {歌|うた}を {歌|うた}う ことが できます。", romaji: "Nihongo no uta o utau koto ga dekimasu.", pt: "Consigo cantar músicas em japonês.", en: "I can sing songs in Japanese." }
        ]
      },
      {
        desc: "3. できますか？ (はい / いいえ) (Responda)", desc_en: "3. できますか？ (はい / いいえ) (Answer)",
        questions: [
          { q: "{自転車|じてんしゃ}の {修理|しゅうり}が できますか。（はい） ➔", a: "はい、できます。", romaji: "Hai, dekimasu.", pt: "Sim, consigo.", en: "Yes, I can." },
          { q: "{刺身|さしみ}を {食|た}べる ことが できますか。（いいえ） ➔", a: "いいえ、できません。", romaji: "Iie, dekimasen.", pt: "Não, não consigo.", en: "No, I can't." },
          { q: "{電車|でんしゃ}で {行|い}く ことが できますか。（いいえ） ➔", a: "いいえ、できません。", romaji: "Iie, dekimasen.", pt: "Não, não é possível.", en: "No, it's not possible." }
        ]
      },
      {
        desc: "4. わたしの {趣味|しゅみ}は 〜ことです。 (Meu passatempo é...)", desc_en: "4. わたしの {趣味|しゅみ}は 〜ことです。 (My hobby is...)",
        questions: [
          { q: "{絵|え}を かきます ➔", a: "わたしの {趣味|しゅみ}は {絵|え}を かく ことです。", romaji: "Watashi no shumi wa e o kaku koto desu.", pt: "Meu hobby é desenhar.", en: "My hobby is drawing." },
          { q: "{歌|うた}を {歌|うた}います ➔", a: "わたしの {趣味|しゅみ}は {歌|うた}を {歌|うた}う ことです。", romaji: "Watashi no shumi wa uta o utau koto desu.", pt: "Meu hobby é cantar músicas.", en: "My hobby is singing songs." },
          { q: "{写真|しゃしん}を {撮|と}ります ➔", a: "わたしの {趣味|しゅみ}は {写真|しゃしん}を {撮|と}る ことです。", romaji: "Watashi no shumi wa shashin o toru koto desu.", pt: "Meu hobby é tirar fotos.", en: "My hobby is taking photos." },
          { q: "{外国語|がいこくご}を {勉強|べんきょう}します ➔", a: "わたしの {趣味|しゅみ}は {外国語|がいこくご}を {勉強|べんきょう}する ことです。", romaji: "Watashi no shumi wa gaikokugo o benkyou suru koto desu.", pt: "Meu hobby é estudar línguas estrangeiras.", en: "My hobby is studying foreign languages." }
        ]
      },
      {
        desc: "5. 〜{前|まえ}に、〜 (Com verbos: Antes de A, faço B)", desc_en: "5. 〜{前|まえ}に、〜 (With verbs: Before A, I do B)",
        questions: [
          { q: "プールに {入|はい}ります。シャワーを {浴|あ}びます。 ➔", a: "プールに {入|はい}る {前|まえ}に、シャワーを {浴|あ}びます。", romaji: "Puuruni hairu maeni, shawaa o abimasu.", pt: "Antes de entrar na piscina, tomo banho.", en: "Before getting into the pool, I take a shower." },
          { q: "{寝|ね}ます。{本|ほん}を {読|よ}みます。 ➔", a: "{寝|ね}る {前|まえ}に、{本|ほん}を {読|よ}みます。", romaji: "Neru maeni, hon o yomimasu.", pt: "Antes de dormir, leio um livro.", en: "Before going to bed, I read a book." },
          { q: "{会議|かいぎ}を します。コピーを します。 ➔", a: "{会議|かいぎ}を する {前|まえ}に、コピーを します。", romaji: "Kaigi o suru maeni, kopii o shimasu.", pt: "Antes de fazer a reunião, faço as cópias.", en: "Before having the meeting, I make the copies." }
        ]
      },
      {
        desc: "6. {名詞|めいし} / {数詞|すうし} ＋ {前|まえ}に、〜 (Com substantivos e números)", desc_en: "6. {名詞|めいし} / {数詞|すうし} ＋ {前|まえ}に、〜 (With nouns and numbers)",
        questions: [
          { q: "{食事|しょくじ}。{薬|くすり}を {飲|の}みます。 ➔", a: "{食事|しょくじ}の {前|まえ}に、{薬|くすり}を {飲|の}みます。", romaji: "Shokuji no maeni, kusuri o nomimasu.", pt: "Antes da refeição, tomo o remédio.", en: "Before the meal, I take the medicine." },
          { q: "3{年|ねん}。{結婚|けっこん}しました。 ➔", a: "3{年前|ねんまえ}に、{結婚|けっこん}しました。", romaji: "Sannen maeni, kekkon shimashita.", pt: "Casei-me há 3 anos.", en: "I got married 3 years ago." },
          { q: "5{分|ふん}。バスが {出|で}ました。 ➔", a: "5{分前|ふんまえ}に、バスが {出|で}ました。", romaji: "Gofun maeni, basu ga demashita.", pt: "O ônibus partiu há 5 minutos.", en: "The bus left 5 minutes ago." }
        ]
      }
    ]
  },
  renshuuC: {
    title: "{練習|れんしゅう} C (Diálogos)", title_en: "{練習|れんしゅう} C (Dialogues)",
    exercises: [
      {
        desc: "1. どこで〜ことが できますか。 (Onde posso...?)", desc_en: "1. どこで〜ことが できますか。 (Where can I...?)",
        questions: [
          { q: "A: すみません。どこで <strong>[タクシーに {乗|の}ります]</strong> ことが できますか。<br>B: あそこです。", a: "タクシーに {乗|の}る", romaji: "takushii ni noru", pt: "pegar um táxi", en: "to take a taxi" },
          { q: "A: すみません。どこで <strong>[{電話|でんわ}を かけます]</strong> ことが できますか。<br>B: あそこです。", a: "{電話|でんわ}を かける", romaji: "denwa o kakeru", pt: "fazer uma ligação", en: "to make a phone call" }
        ]
      },
      {
        desc: "2. {趣味|しゅみ}は {何|なん}ですか。 (Qual é o seu hobby?)", desc_en: "2. {趣味|しゅみ}は {何|なん}ですか。 (What is your hobby?)",
        questions: [
          { q: "A: ミラーさんの {趣味|しゅみ}は {何|なん}ですか。<br>B: <strong>[{本|ほん}を {読|よ}みます]</strong> ことです。<br>A: どんな <strong>[{本|ほん}]</strong> ですか。<br>B: <strong>[{歴史|れきし}]</strong> です。", a: "{本|ほん}を {読|よ}む", romaji: "hon o yomu", pt: "ler livros", en: "to read books" },
          { q: "A: ミラーさんの {趣味|しゅみ}は {何|なん}ですか。<br>B: <strong>[{写真|しゃしん}を {撮|と}ります]</strong> ことです。<br>A: どんな <strong>[{写真|しゃしん}]</strong> ですか。<br>B: <strong>[{動物|どうぶつ}]</strong> です。", a: "{写真|しゃしん}を {撮|と}る", romaji: "shashin o toru", pt: "tirar fotos", en: "to take photos" }
        ]
      },
      {
        desc: "3. 〜{前|まえ}に (Antes de...)", desc_en: "3. 〜{前|まえ}に (Before...)",
        questions: [
          { q: "A: いつ <strong>[{国|くに}へ {帰|かえ}ります]</strong> か。<br>B: {来月|らいげつ}です。<strong>[{国|くに}へ {帰|かえ}ります]</strong> {前|まえ}に、<strong>[パソコンを {買|か}います]</strong>。", a: "{国|くに}へ {帰|かえ}る", romaji: "kuni e kaeru", pt: "voltar para o país", en: "to return to one's country" }
        ]
      }
    ]
  },
  mondai: {
    title: "{問題|もんだい} (Problemas / Avaliação)", title_en: "{問題|もんだい} (Problems / Assessment)",
    exercises: [
      {
        desc: "1. (　　) に {正|ただ}しい {助詞|じょし} を {入|い}れなさい。 (Preencha as partículas corretas: は、が、を、に、の、で)", desc_en: "1. (　　) に {正|ただ}しい {助詞|じょし} を {入|い}れなさい。 (Fill in the correct particles: は、が、を、に、の、で)",
        questions: [
          { q: "わたしは ピアノ（　　）{弾|ひ}く ことが できます。", a: "を", romaji: "o", pt: "Partícula 'o' (Objeto da ação)", en: "Particle 'o' (object of the action)" },
          { q: "カリナさんの {趣味|しゅみ}（　　）{絵|え}を かく ことです。", a: "は", romaji: "wa", pt: "Partícula 'wa' (Tópico)", en: "Particle 'wa' (topic)" },
          { q: "{寝|ね}る {前|まえ}（　　）、お{祈|いの}りを します。", a: "に", romaji: "ni", pt: "Partícula 'ni' (Tempo/Ocasião)", en: "Particle 'ni' (time/occasion)" },
          { q: "{食事|しょくじ}（　　）{前|まえ}に、{手|て}を {洗|あら}います。", a: "の", romaji: "no", pt: "Partícula 'no' (Conectando substantivos)", en: "Particle 'no' (connecting nouns)" }
        ]
      },
      {
        desc: "2. {動詞|どうし} を {正|ただ}しい {形|けい} に {変|か}えなさい。 (Mude para a forma correta)", desc_en: "2. {動詞|どうし} を {正|ただ}しい {形|けい} に {変|か}えなさい。 (Change to the correct form)",
        questions: [
          { q: "{毎朝|まいあさ}、{朝|あさ}ごはんを（{食|た}べます ➔ ＿＿＿＿＿）{前|まえ}に、ジョギングを します。", a: "{食|た}べる", romaji: "taberu", pt: "Forma de dicionário antes de 'mae ni'", en: "Dictionary form before 'mae ni'" },
          { q: "わたしの {趣味|しゅみ}は {映画|えいが}を（{見|み}ます ➔ ＿＿＿＿＿）ことです。", a: "{見|み}る", romaji: "miru", pt: "Forma de dicionário + koto desu", en: "Dictionary form + koto desu" },
          { q: "ここで {写真|しゃしん}を（{撮|と}ります ➔ ＿＿＿＿＿）ないでください。", a: "{撮|と}ら", romaji: "tora", pt: "Forma Nai (sem o 'nai')", en: "Nai form (without the 'nai')" }
        ]
      },
      {
        desc: "3. {読|よ}み{物|もの} (Leitura): わたしの {趣味|しゅみ}", desc_en: "3. {読|よ}み{物|もの} (Reading): わたしの {趣味|しゅみ}",
        questions: [
          {
            q: `<div class="reading-box">
                                    わたしの {趣味|しゅみ}は {車|くるま}です。18{歳|さい}のとき、{運転|うんてん}を {習|なら}いました。{今|いま}、{大|おお}きい {車|くるま}を {運転|うんてん}する ことが できます。<br>
                                    {休|やす}みの {日|ひ}は よく {車|くるま}で {出|で}かけます。{車|くるま}に {乗|の}る {前|まえ}に、いつも コーヒーを {飲|の}みます。
                                </div>
                                {質問|しつもん}: この {人|ひと}は {車|くるま}に {乗|の}る {前|まえ}に、{何|なに}を しますか。<br>➔ ＿＿＿＿＿＿＿＿＿。`,
            a: "コーヒーを {飲|の}みます",
            romaji: "Koohii o nomimasu.",
            pt: "Bebe café.", en: "He/she drinks coffee."
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
          { tokens: ["ミラーさんは", "{漢字|かんじ}を", "{読|よ}む", "ことが", "できます。"], pt: "O Sr. Miller consegue ler kanji.", en: "Mr. Miller can read kanji.", romaji: "Miraa-san wa kanji o yomu koto ga dekimasu." },
          { tokens: ["わたしの", "{趣味|しゅみ}は", "{映画|えいが}を", "{見|み}る", "ことです。"], pt: "Meu passatempo é assistir a filmes.", en: "My hobby is watching movies.", romaji: "Watashi no shumi wa eiga o miru koto desu." },
          { tokens: ["{寝|ね}る", "{前|まえ}に、", "{日記|にっき}を", "{書|か}きます。"], pt: "Antes de dormir, escrevo no diário.", en: "Before going to bed, I write in my diary.", romaji: "Neru mae ni, nikki o kakimasu." },
          { tokens: ["{食事|しょくじ}の", "{前|まえ}に、", "{手|て}を", "{洗|あら}います。"], pt: "Antes da refeição, lavo as mãos.", en: "Before the meal, I wash my hands.", romaji: "Shokuji no mae ni, te o araimasu." }
        ]
      }
    ]
  }
};
