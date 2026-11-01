// Dados da lição 11. Formato descrito no README.md.
window.lessonData = {
  vocab: {
    title: "{語彙|ごい} (Vocabulário)", title_en: "{語彙|ごい} (Vocabulary)",
    items: [
      { jp: "{一|ひと}つ", romaji: "hitotsu", pt: "Um (coisas em geral)", en: "One (things in general)" },
      { jp: "いくつ", romaji: "ikutsu", pt: "Quantos (coisas)", en: "How many (things)" },
      { jp: "{一人|ひとり}", romaji: "hitori", pt: "Uma pessoa", en: "One person" },
      { jp: "{二人|ふたり}", romaji: "futari", pt: "Duas pessoas", en: "Two people" },
      { jp: "〜{人|にん}", romaji: "nin", pt: "〜 pessoas (a partir de três)", en: "〜 people (from three on)" },
      { jp: "〜{台|だい}", romaji: "dai", pt: "Contador de veículos e máquinas", en: "Counter for vehicles and machines" },
      { jp: "〜{枚|まい}", romaji: "mai", pt: "Contador de coisas planas (papel, selos, camisetas)", en: "Counter for flat things (paper, stamps, shirts)" },
      { jp: "〜{回|かい}", romaji: "kai", pt: "〜 vezes", en: "〜 times" },
      { jp: "りんご", romaji: "ringo", pt: "Maçã", en: "Apple" },
      { jp: "みかん", romaji: "mikan", pt: "Tangerina", en: "Mandarin orange" },
      { jp: "ケーキ", romaji: "keeki", pt: "Bolo", en: "Cake" },
      { jp: "{切手|きって}", romaji: "kitte", pt: "Selo (de correio)", en: "Postage stamp" },
      { jp: "はがき", romaji: "hagaki", pt: "Cartão-postal", en: "Postcard" },
      { jp: "{兄弟|きょうだい}", romaji: "kyoudai", pt: "Irmãos (irmãos e irmãs)", en: "Siblings" },
      { jp: "{泳|およ}ぎます", romaji: "oyogimasu", pt: "Nadar", en: "To swim" },
      { jp: "〜{時間|じかん}", romaji: "jikan", pt: "〜 horas (duração)", en: "〜 hours (duration)" },
      { jp: "〜{週間|しゅうかん}", romaji: "shuukan", pt: "〜 semanas (duração)", en: "〜 weeks (duration)" },
      { jp: "〜か{月|げつ}", romaji: "kagetsu", pt: "〜 meses (duração)", en: "〜 months (duration)" },
      { jp: "〜{年|ねん}", romaji: "nen", pt: "〜 anos (duração)", en: "〜 years (duration)" },
      { jp: "どのくらい", romaji: "donokurai", pt: "Quanto tempo; quanto", en: "How long; how much" },
      { jp: "〜ぐらい", romaji: "gurai", pt: "Cerca de 〜, aproximadamente", en: "About 〜, approximately" },
      { jp: "かかります", romaji: "kakarimasu", pt: "Levar, demorar, custar (tempo ou dinheiro)", en: "To take, to cost (time or money)" },
      { jp: "〜だけ", romaji: "dake", pt: "Apenas, só 〜", en: "Only 〜" },
      { jp: "ぜんぶで", romaji: "zenbu de", pt: "No total, ao todo", en: "In total, altogether" }
    ]
  },
  gramatica: {
    title: "{文法|ぶんぽう} (Gramática)", title_en: "{文法|ぶんぽう} (Grammar)",
    intro: "Quatro pontos para contar, dizer quantidades, quanto tempo leva algo e com que frequência. Cada cartão traz o modelo de frase, a explicação, os exemplos, uma comparação com o que é parecido e os erros mais comuns.", intro_en: "Four points for counting, giving quantities, saying how long something takes and how often. Each card gives the sentence pattern, the explanation, the examples, a comparison with what looks similar and the most common mistakes.",
    points: [
      {
        id: "kazoekata",
        title: "{数|かぞ}え{方|かた} (contadores)", title_en: "{数|かぞ}え{方|かた} (counters)",
        pat: "número ＋ contador<br>{一|ひと}つ・{二|ふた}つ… ／ {一人|ひとり}・{二人|ふたり}… ／ 〜{台|だい}・〜{枚|まい}・〜{回|かい}",
        short: "como contar coisas, pessoas e vezes", short_en: "how to count things, people and times",
        mean: "Em japonês não se diz só o número: junta-se um <strong>contador</strong> que depende do que se conta. Para coisas em geral, até dez, há a série em <strong>つ</strong>. Pessoas, veículos, coisas planas e vezes têm contadores próprios.", mean_en: "In Japanese you do not just say the number: you add a <strong>counter</strong> that depends on what is counted. For things in general, up to ten, there is the <strong>つ</strong> series. People, vehicles, flat things and times have their own counters.",
        rule: "Acima de dez, a série つ acaba: diz-se o número e o contador (por exemplo {十一個|じゅういっこ} para onze).", rule_en: "Above ten, the つ series ends: you say the number plus the counter (for example {十一個|じゅういっこ} for eleven).",
        form: [
          { label: "Série つ (coisas em geral, de 1 a 10)", label_en: "The つ series (things in general, 1 to 10)", text: "Dez só tem <strong>とお</strong>, sem つ.", text_en: "Ten is just <strong>とお</strong>, without つ.", ex: [
            { tag: "1", jp: "{一|ひと}つ", romaji: "hitotsu", pt: "um", en: "one" },
            { tag: "2", jp: "{二|ふた}つ", romaji: "futatsu", pt: "dois", en: "two" },
            { tag: "3", jp: "{三|みっ}つ", romaji: "mittsu", pt: "três", en: "three" },
            { tag: "4", jp: "{四|よっ}つ", romaji: "yottsu", pt: "quatro", en: "four" },
            { tag: "5", jp: "{五|いつ}つ", romaji: "itsutsu", pt: "cinco", en: "five" },
            { tag: "6", jp: "{六|むっ}つ", romaji: "muttsu", pt: "seis", en: "six" },
            { tag: "7", jp: "{七|なな}つ", romaji: "nanatsu", pt: "sete", en: "seven" },
            { tag: "8", jp: "{八|やっ}つ", romaji: "yattsu", pt: "oito", en: "eight" },
            { tag: "9", jp: "{九|ここの}つ", romaji: "kokonotsu", pt: "nove", en: "nine" },
            { tag: "10", jp: "{十|とお}", romaji: "too", pt: "dez", en: "ten" }
          ] },
          { label: "Pessoas (〜{人|にん})", label_en: "People (〜{人|にん})", text: "Um e dois são especiais; quatro é <strong>よにん</strong>.", text_en: "One and two are special; four is <strong>よにん</strong>.", ex: [
            { tag: "1", jp: "{一人|ひとり}", romaji: "hitori", pt: "uma pessoa", en: "one person" },
            { tag: "2", jp: "{二人|ふたり}", romaji: "futari", pt: "duas pessoas", en: "two people" },
            { tag: "3", jp: "{三人|さんにん}", romaji: "sannin", pt: "três pessoas", en: "three people" },
            { tag: "4", jp: "{四人|よにん}", romaji: "yonin", pt: "quatro pessoas", en: "four people" }
          ] },
          { label: "Veículos, coisas planas e vezes", label_en: "Vehicles, flat things and times", text: "Número ＋ contador. Cuidado com os sons que mudam em 〜{回|かい}.", text_en: "Number ＋ counter. Watch the sound changes in 〜{回|かい}.", ex: [
            { tag: "2 {台|だい}", jp: "{二台|にだい}", romaji: "nidai", pt: "dois carros", en: "two cars" },
            { tag: "3 {枚|まい}", jp: "{三枚|さんまい}", romaji: "sanmai", pt: "três selos", en: "three stamps" },
            { tag: "1 {回|かい}", jp: "{一回|いっかい}", romaji: "ikkai", pt: "uma vez", en: "once" },
            { tag: "3 {回|かい}", jp: "{三回|さんかい}", romaji: "sankai", pt: "três vezes", en: "three times" }
          ] }
        ],
        ex: [
          { jp: "りんごを {四|よっ}つ {買|か}いました。", romaji: "Ringo o yottsu kaimashita.", pt: "Comprei quatro maçãs.", en: "I bought four apples." },
          { jp: "{家族|かぞく}^は {四人|よにん}です。", romaji: "Kazoku wa yonin desu.", pt: "Minha família tem quatro pessoas.", en: "My family has four people." },
          { jp: "{家|うち}に {車|くるま}が {二台|にだい} あります。", romaji: "Uchi ni kuruma ga nidai arimasu.", pt: "Em casa há dois carros.", en: "There are two cars at home." }
        ],
        contrast: {
          rows: [
            { label: "série つ (coisas em geral)", label_en: "つ series (things in general)", jp: "ケーキを {三|みっ}つ {食|た}べました。", pt: "Comi três bolos.", en: "I ate three cakes." },
            { label: "contador próprio (〜{枚|まい}, 〜{台|だい}, 〜{人|にん})", label_en: "specific counter (〜{枚|まい}, 〜{台|だい}, 〜{人|にん})", jp: "{切手|きって}を {三枚|さんまい} {買|か}いました。", pt: "Comprei três selos.", en: "I bought three stamps." }
          ],
          note: "Se não houver um contador próprio para o que se conta, a série つ serve (até dez).", note_en: "If there is no specific counter for what is being counted, the つ series works (up to ten)."
        },
        trap: [
          "Pessoas: {一人|ひとり} e {二人|ふたり} são irregulares; {四人|よにん} (e não よんにん). A partir de três segue 〜{人|にん}.",
          "Em japonês não se diz “dois carro” só com o número: precisa do contador ({二台|にだい})."
        ],
        trap_en: [
          "People: {一人|ひとり} and {二人|ふたり} are irregular; {四人|よにん} (not よんにん). From three on it follows 〜{人|にん}.",
          "In Japanese you cannot say “two car” with just the number: you need the counter ({二台|にだい})."
        ]
      },
      {
        id: "suuryou",
        title: "{数量|すうりょう}の {位置|いち} (N を ＋ quantidade ＋ V)", title_en: "Where quantities go (N を ＋ quantity ＋ V)",
        pat: "N を [quantidade] V ます",
        short: "a quantidade vem antes do verbo, sem partícula", short_en: "the quantity goes before the verb, with no particle",
        mean: "A quantidade vem <strong>logo antes do verbo</strong>, depois do objeto e da partícula. Ela <strong>não leva partícula</strong> própria. Para “apenas”, acrescenta-se <strong>だけ</strong>; para o total, <strong>ぜんぶで</strong>.", mean_en: "The quantity comes <strong>right before the verb</strong>, after the object and its particle. It <strong>takes no particle</strong> of its own. For “only”, add <strong>だけ</strong>; for the total, <strong>ぜんぶで</strong>.",
        ex: [
          { jp: "みかんを {三|みっ}つ {食|た}べました。", romaji: "Mikan o mittsu tabemashita.", pt: "Comi três tangerinas.", en: "I ate three mandarin oranges." },
          { jp: "{教室|きょうしつ}に {学生|がくせい}が {十人|じゅうにん} います。", romaji: "Kyoushitsu ni gakusei ga juunin imasu.", pt: "Há dez alunos na sala.", en: "There are ten students in the classroom." },
          { jp: "ケーキを {一|ひと}つだけ {食|た}べました。", romaji: "Keeki o hitotsu dake tabemashita.", pt: "Comi só um bolo.", en: "I ate just one cake." },
          { jp: "{切手|きって}を {五枚|ごまい} ください。<br>…ぜんぶで {二百円|にひゃくえん}です。", romaji: "Kitte o gomai kudasai. ...Zenbu de nihyaku-en desu.", pt: "Cinco selos, por favor. ...Ao todo, 200 ienes.", en: "Five stamps, please. ...That is 200 yen in total." }
        ],
        contrast: {
          rows: [
            { label: "quantidade depois do objeto", label_en: "quantity after the object", jp: "りんごを {二|ふた}つ {買|か}いました。", pt: "Comprei duas maçãs.", en: "I bought two apples." },
            { label: "com だけ (apenas)", label_en: "with だけ (only)", jp: "りんごを {二|ふた}つだけ {買|か}いました。", pt: "Comprei só duas maçãs.", en: "I bought only two apples." }
          ],
          note: "だけ vai logo depois da quantidade e limita o sentido: “nada além disso”.", note_en: "だけ goes right after the quantity and limits the meaning: “nothing more than this”."
        },
        trap: [
          "Não ponha partícula depois da quantidade: errado りんごを {二|ふた}つを {買|か}いました。",
          "A quantidade não precede o substantivo, como “duas maçãs” do português: o japonês diz りんごを {二|ふた}つ (maçã, dois)."
        ],
        trap_en: [
          "Do not put a particle after the quantity: wrong りんごを {二|ふた}つを {買|か}いました。",
          "The quantity does not come before the noun, as in “two apples”: Japanese says りんごを {二|ふた}つ (apple, two)."
        ]
      },
      {
        id: "jikan-kakaru",
        title: "{時間|じかん}の {長|なが}さ ・ かかります", title_en: "Duration ・ かかります",
        pat: "N から N まで {時間|じかん}が かかります",
        short: "quanto tempo leva", short_en: "how long it takes",
        mean: "Para a duração, usa-se <strong>número ＋ {時間|じかん}／{週間|しゅうかん}／か{月|げつ}／{年|ねん}</strong>. O verbo <strong>かかります</strong> diz que algo “leva” esse tempo. A pergunta é どのくらい かかりますか。 <strong>ぐらい</strong> dá a ideia de aproximação.", mean_en: "For duration, use <strong>number ＋ {時間|じかん}／{週間|しゅうかん}／か{月|げつ}／{年|ねん}</strong>. The verb <strong>かかります</strong> says that something “takes” that time. The question is どのくらい かかりますか。 <strong>ぐらい</strong> adds the idea of approximation.",
        form: [
          { label: "Durações", label_en: "Durations", text: "Cuidado com 4 horas (よじかん) e com os sons de 〜か{月|げつ}.", text_en: "Watch 4 hours (よじかん) and the sounds of 〜か{月|げつ}.", ex: [
            { tag: "1 h", jp: "{一時間|いちじかん}", romaji: "ichijikan", pt: "uma hora", en: "one hour" },
            { tag: "4 h", jp: "{四時間|よじかん}", romaji: "yojikan", pt: "quatro horas", en: "four hours" },
            { tag: "1 sem.", jp: "{一週間|いっしゅうかん}", romaji: "isshuukan", pt: "uma semana", en: "one week" },
            { tag: "1 mês", jp: "{一|いっ}か{月|げつ}", romaji: "ikkagetsu", pt: "um mês", en: "one month" },
            { tag: "3 meses", jp: "{三|さん}か{月|げつ}", romaji: "sankagetsu", pt: "três meses", en: "three months" },
            { tag: "1 ano", jp: "{一年|いちねん}", romaji: "ichinen", pt: "um ano", en: "one year" }
          ] }
        ],
        ex: [
          { jp: "{家|うち}から {駅|えき}まで {歩|ある}いて {十五分|じゅうごふん} かかります。", romaji: "Uchi kara eki made aruite juugofun kakarimasu.", pt: "De casa até a estação, a pé, leva 15 minutos.", en: "From home to the station, it takes 15 minutes on foot." },
          { jp: "{京都|きょうと}から {大阪|おおさか}まで {電車|でんしゃ}で どのくらい かかりますか。<br>…{一時間|いちじかん}ぐらい かかります。", romaji: "Kyouto kara Oosaka made densha de dono kurai kakarimasu ka. ...Ichijikan gurai kakarimasu.", pt: "De Kyoto a Osaka, de trem, quanto tempo leva? ...Cerca de uma hora.", en: "How long does it take from Kyoto to Osaka by train? ...About an hour." },
          { jp: "{日本語|にほんご}を {二年|にねん} {勉強|べんきょう}しました。", romaji: "Nihongo o ninen benkyou shimashita.", pt: "Estudei japonês por dois anos.", en: "I studied Japanese for two years." }
        ],
        contrast: {
          rows: [
            { label: "{時|じ} (horário no relógio)", label_en: "{時|じ} (clock time)", jp: "{三時|さんじ}に {会|あ}います。", pt: "Nos encontramos às três horas.", en: "We meet at three o'clock." },
            { label: "{時間|じかん} (duração)", label_en: "{時間|じかん} (duration)", jp: "{三時間|さんじかん} かかります。", pt: "Leva três horas.", en: "It takes three hours." }
          ],
          note: "{三時|さんじ} é “as três horas”; {三時間|さんじかん} é “três horas de duração”. Falta ou sobra um {間|かん} e a frase muda.", note_en: "{三時|さんじ} is “three o'clock”; {三時間|さんじかん} is “three hours long”. Leave out or add {間|かん} and the sentence changes."
        },
        trap: [
          "Não confunda {時|じ} (hora do relógio) com {時間|じかん} (duração): {四時|よじ} e {四時間|よじかん}.",
          "A duração não leva に: errado {二年|にねん}に {勉強|べんきょう}しました。 Certo: {二年|にねん} {勉強|べんきょう}しました。"
        ],
        trap_en: [
          "Do not confuse {時|じ} (clock time) with {時間|じかん} (duration): {四時|よじ} and {四時間|よじかん}.",
          "A duration takes no に: wrong {二年|にねん}に {勉強|べんきょう}しました。 Right: {二年|にねん} {勉強|べんきょう}しました。"
        ]
      },
      {
        id: "kaisuu",
        title: "{期間|きかん}に 〜{回|かい} (frequência)", title_en: "{期間|きかん}に 〜{回|かい} (frequency)",
        pat: "{期間|きかん}に 〜{回|かい} V ます",
        short: "“duas vezes por semana”", short_en: "“twice a week”",
        mean: "Para a frequência, diz-se o período ＋ <strong>に</strong> ＋ número ＋ <strong>{回|かい}</strong>: {一週間|いっしゅうかん}に {二回|にかい} (duas vezes por semana).", mean_en: "For frequency, say the period ＋ <strong>に</strong> ＋ number ＋ <strong>{回|かい}</strong>: {一週間|いっしゅうかん}に {二回|にかい} (twice a week).",
        ex: [
          { jp: "{一週間|いっしゅうかん}に {二回|にかい} テニスを します。", romaji: "Isshuukan ni nikai tenisu o shimasu.", pt: "Jogo tênis duas vezes por semana.", en: "I play tennis twice a week." },
          { jp: "{一|いっ}か{月|げつ}に {一回|いっかい} {映画|えいが}を {見|み}ます。", romaji: "Ikkagetsu ni ikkai eiga o mimasu.", pt: "Vejo um filme uma vez por mês.", en: "I watch a movie once a month." },
          { jp: "{一年|いちねん}に {一回|いっかい} {日本|にほん}^へ {行|い}きます。", romaji: "Ichinen ni ikkai Nihon e ikimasu.", pt: "Vou ao Japão uma vez por ano.", en: "I go to Japan once a year." }
        ],
        contrast: {
          rows: [
            { label: "frequência (período に {回|かい})", label_en: "frequency (period に {回|かい})", jp: "{一週間|いっしゅうかん}に {二回|にかい} {泳|およ}ぎます。", pt: "Nado duas vezes por semana.", en: "I swim twice a week." },
            { label: "duração (sem に)", label_en: "duration (no に)", jp: "{二時間|にじかん} {泳|およ}ぎます。", pt: "Nado por duas horas.", en: "I swim for two hours." }
          ],
          note: "O に marca “por” (dentro de cada período). Para quanto tempo dura uma ação, não há partícula.", note_en: "The に marks “per” (within each period). For how long an action lasts, there is no particle."
        },
        trap: [
          "Frequência leva に; duração não leva: {一週間|いっしゅうかん}に {二回|にかい} (por semana) e {一週間|いっしゅうかん} {勉強|べんきょう}します (estudo por uma semana).",
          "{一回|いっかい} lê-se いっかい, não いちかい; {三回|さんかい} lê-se さんかい."
        ],
        trap_en: [
          "Frequency takes に; duration does not: {一週間|いっしゅうかん}に {二回|にかい} (per week) and {一週間|いっしゅうかん} {勉強|べんきょう}します (I study for a week).",
          "{一回|いっかい} is read いっかい, not いちかい; {三回|さんかい} is read さんかい."
        ]
      }
    ]
  },
  renshuuA: {
    title: "{練習|れんしゅう} A", title_en: "{練習|れんしゅう} A",
    exercises: [
      {
        desc: "1. Contadores: escreva a leitura em hiragana", desc_en: "1. Counters: write the reading in hiragana",
        questions: [
          { q: "1 pessoa ➔", q_en: "1 person ➔", a: "ひとり", romaji: "hitori", pt: "Uma pessoa", en: "One person" },
          { q: "2 pessoas ➔", q_en: "2 people ➔", a: "ふたり", romaji: "futari", pt: "Duas pessoas", en: "Two people" },
          { q: "4 pessoas ➔", q_en: "4 people ➔", a: "よにん", romaji: "yonin", pt: "Quatro pessoas", en: "Four people" },
          { q: "3 coisas (série つ) ➔", q_en: "3 things (つ series) ➔", a: "みっつ", romaji: "mittsu", pt: "Três coisas", en: "Three things" },
          { q: "8 coisas (série つ) ➔", q_en: "8 things (つ series) ➔", a: "やっつ", romaji: "yattsu", pt: "Oito coisas", en: "Eight things" },
          { q: "10 coisas (série つ) ➔", q_en: "10 things (つ series) ➔", a: "とお", romaji: "too", pt: "Dez coisas", en: "Ten things" }
        ]
      },
      {
        desc: "2. Durações: escreva a leitura em hiragana", desc_en: "2. Durations: write the reading in hiragana",
        questions: [
          { q: "1 hora ➔", q_en: "1 hour ➔", a: "いちじかん", romaji: "ichijikan", pt: "Uma hora", en: "One hour" },
          { q: "4 horas ➔", q_en: "4 hours ➔", a: "よじかん", romaji: "yojikan", pt: "Quatro horas", en: "Four hours" },
          { q: "1 semana ➔", q_en: "1 week ➔", a: "いっしゅうかん", romaji: "isshuukan", pt: "Uma semana", en: "One week" },
          { q: "1 mês ➔", q_en: "1 month ➔", a: "いっかげつ", romaji: "ikkagetsu", pt: "Um mês", en: "One month" },
          { q: "3 meses ➔", q_en: "3 months ➔", a: "さんかげつ", romaji: "sankagetsu", pt: "Três meses", en: "Three months" }
        ]
      }
    ]
  },
  renshuuB: {
    title: "{練習|れんしゅう} B", title_en: "{練習|れんしゅう} B",
    exercises: [
      {
        desc: "1. Escolha o contador ({人|にん}・{台|だい}・{枚|まい}・{回|かい})", desc_en: "1. Choose the counter ({人|にん}・{台|だい}・{枚|まい}・{回|かい})",
        questions: [
          { q: "{車|くるま}が 2（　　）あります。", a: "{台|だい}", romaji: "dai", pt: "Veículos: {台|だい}", en: "Vehicles: {台|だい}" },
          { q: "{切手|きって}を 3（　　）ください。", a: "{枚|まい}", romaji: "mai", pt: "Coisas planas: {枚|まい}", en: "Flat things: {枚|まい}" },
          { q: "{一週間|いっしゅうかん}に 2（　　）テニスを します。", a: "{回|かい}", romaji: "kai", pt: "Vezes: {回|かい}", en: "Times: {回|かい}" },
          { q: "{教室|きょうしつ}に {学生|がくせい}が 10（　　）います。", a: "{人|にん}", romaji: "nin", pt: "Pessoas: {人|にん}", en: "People: {人|にん}" }
        ]
      },
      {
        desc: "2. Responda com a duração ou a frequência", desc_en: "2. Answer with the duration or the frequency",
        questions: [
          { q: "A: {家|うち}から {駅|えき}まで どのくらい かかりますか。<br>B: （{十五分|じゅうごふん}）＿＿＿＿＿＿＿＿。", a: "{十五分|じゅうごふん} かかります", romaji: "juugofun kakarimasu", pt: "Leva 15 minutos", en: "It takes 15 minutes" },
          { q: "A: {日本語|にほんご}を どのくらい {勉強|べんきょう}しましたか。<br>B: （{二年|にねん}）＿＿＿＿＿＿＿＿。", a: "{二年|にねん} {勉強|べんきょう}しました", romaji: "ninen benkyou shimashita", pt: "Estudei dois anos", en: "I studied for two years" },
          { q: "A: どのくらい {映画|えいが}を {見|み}ますか。<br>B: （{一|いっ}か{月|げつ}に {一回|いっかい}）＿＿＿＿＿＿＿＿。", a: "{一|いっ}か{月|げつ}に {一回|いっかい} {見|み}ます", romaji: "ikkagetsu ni ikkai mimasu", pt: "Vejo uma vez por mês", en: "I watch one once a month" }
        ]
      }
    ]
  },
  mondai: {
    title: "{問題|もんだい} (Problemas / Avaliação)", title_en: "{問題|もんだい} (Problems / Assessment)",
    exercises: [
      {
        desc: "1. (　　) に {正|ただ}しい ことばを {入|い}れなさい。 (に・を・だけ・ぐらい・かかります)", desc_en: "1. Fill in the blank with the right word. (に・を・だけ・ぐらい・かかります)",
        questions: [
          { q: "{一週間|いっしゅうかん}（　　）{二回|にかい} テニスを します。", a: "に", romaji: "ni", pt: "“Por semana”: に", en: "“Per week”: に" },
          { q: "ケーキを {一|ひと}つ（　　）{食|た}べました。(só um)", q_en: "ケーキを {一|ひと}つ（　　）{食|た}べました。(only one)", a: "だけ", romaji: "dake", pt: "Apenas", en: "Only" },
          { q: "{京都|きょうと}から {大阪|おおさか}まで {一時間|いちじかん}（　　）かかります。(cerca de)", q_en: "{京都|きょうと}から {大阪|おおさか}まで {一時間|いちじかん}（　　）かかります。(about)", a: "ぐらい", romaji: "gurai", pt: "Aproximação", en: "Approximation" },
          { q: "{駅|えき}まで {十五分|じゅうごふん} （　　）。", a: "かかります", romaji: "kakarimasu", pt: "Leva", en: "It takes" }
        ]
      },
      {
        desc: "2. {読|よ}み{物|もの} (Leitura): わたしの {家族|かぞく}", desc_en: "2. Reading: my family",
        questions: [
          {
            q: `<div class="reading-box">わたしの {家族|かぞく}^は {五人|ごにん}です。{父|ちち}と {母|はは}と {兄弟|きょうだい}が {二人|ふたり} います。{家|うち}に {車|くるま}が {二台|にだい} あります。{父|ちち}^は {会社|かいしゃ}まで {電車|でんしゃ}で {一時間|いちじかん}ぐらい かかります。{母|はは}^は {一週間|いっしゅうかん}に {二回|にかい} テニスを します。</div>{質問|しつもん}: {母|はは}^は {一週間|いっしゅうかん}に {何回|なんかい} テニスを しますか。<br>➔ ＿＿＿＿＿＿ します。`,
            a: "{二回|にかい}",
            romaji: "nikai",
            pt: "Duas vezes.", en: "Twice."
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
          { tokens: ["りんごを", "{四|よっ}つ", "{買|か}いました。"], pt: "Comprei quatro maçãs.", en: "I bought four apples.", romaji: "Ringo o yottsu kaimashita." },
          { tokens: ["{家|うち}から", "{駅|えき}まで", "{十五分|じゅうごふん}", "かかります。"], pt: "De casa até a estação leva 15 minutos.", en: "It takes 15 minutes from home to the station.", romaji: "Uchi kara eki made juugofun kakarimasu." },
          { tokens: ["{一週間|いっしゅうかん}に", "{二回|にかい}", "テニスを", "します。"], pt: "Jogo tênis duas vezes por semana.", en: "I play tennis twice a week.", romaji: "Isshuukan ni nikai tenisu o shimasu." },
          { tokens: ["{日本語|にほんご}を", "{二年|にねん}", "{勉強|べんきょう}しました。"], pt: "Estudei japonês por dois anos.", en: "I studied Japanese for two years.", romaji: "Nihongo o ninen benkyou shimashita." }
        ]
      }
    ]
  }
};
