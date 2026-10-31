// Dados da lição 5. Formato descrito no README.md.
window.lessonData = {
  vocab: {
    title: "{語彙|ごい} (Vocabulário)", title_en: "{語彙|ごい} (Vocabulary)",
    items: [
      { jp: "{行|い}きます", romaji: "ikimasu", pt: "Ir", en: "To go" },
      { jp: "{来|き}ます", romaji: "kimasu", pt: "Vir", en: "To come" },
      { jp: "{帰|かえ}ります", romaji: "kaerimasu", pt: "Voltar (para casa, para o país)", en: "To return (home, to one's country)" },
      { jp: "{学校|がっこう}", romaji: "gakkou", pt: "Escola", en: "School" },
      { jp: "{空港|くうこう}", romaji: "kuukou", pt: "Aeroporto", en: "Airport" },
      { jp: "{海|うみ}", romaji: "umi", pt: "Mar, praia", en: "Sea, beach" },
      { jp: "{山|やま}", romaji: "yama", pt: "Montanha", en: "Mountain" },
      { jp: "{町|まち}", romaji: "machi", pt: "Cidade, bairro", en: "Town, neighborhood" },
      { jp: "{電車|でんしゃ}", romaji: "densha", pt: "Trem (elétrico)", en: "Train (electric)" },
      { jp: "{地下鉄|ちかてつ}", romaji: "chikatetsu", pt: "Metrô", en: "Subway" },
      { jp: "バス", romaji: "basu", pt: "Ônibus", en: "Bus" },
      { jp: "タクシー", romaji: "takushii", pt: "Táxi", en: "Taxi" },
      { jp: "{飛行機|ひこうき}", romaji: "hikouki", pt: "Avião", en: "Airplane" },
      { jp: "{歩|ある}いて", romaji: "aruite", pt: "A pé (forma て de {歩|ある}きます)", en: "On foot (て form of {歩|ある}きます)" },
      { jp: "{一人|ひとり}で", romaji: "hitori de", pt: "Sozinho(a)", en: "Alone, by oneself" },
      { jp: "{家族|かぞく}", romaji: "kazoku", pt: "Família", en: "Family" },
      { jp: "{誕生日|たんじょうび}", romaji: "tanjoubi", pt: "Aniversário", en: "Birthday" },
      { jp: "いつ", romaji: "itsu", pt: "Quando", en: "When" },
      { jp: "{先週|せんしゅう}", romaji: "senshuu", pt: "Semana passada", en: "Last week" },
      { jp: "{今週|こんしゅう}", romaji: "konshuu", pt: "Esta semana", en: "This week" },
      { jp: "{来週|らいしゅう}", romaji: "raishuu", pt: "Semana que vem", en: "Next week" },
      { jp: "{去年|きょねん}", romaji: "kyonen", pt: "Ano passado", en: "Last year" },
      { jp: "{今年|ことし}", romaji: "kotoshi", pt: "Este ano", en: "This year" },
      { jp: "{来年|らいねん}", romaji: "rainen", pt: "Ano que vem", en: "Next year" },
      { jp: "{何月|なんがつ}", romaji: "nangatsu", pt: "Que mês", en: "What month" },
      { jp: "{何日|なんにち}", romaji: "nannichi", pt: "Que dia do mês", en: "What day of the month" },
      { jp: "〜{月|がつ}", romaji: "gatsu", pt: "Mês 〜", en: "Month 〜" },
      { jp: "〜{日|にち}", romaji: "nichi", pt: "Dia 〜 do mês", en: "Day 〜 of the month" }
    ]
  },
  gramatica: {
    title: "{文法|ぶんぽう} (Gramática)", title_en: "{文法|ぶんぽう} (Grammar)",
    intro: "Quatro pontos para falar de deslocamentos: para onde, como, com quem e quando. Cada cartão traz o modelo de frase, a explicação, os exemplos, uma comparação com o que é parecido e os erros mais comuns.", intro_en: "Four points for talking about trips: where to, how, with whom and when. Each card gives the sentence pattern, the explanation, the examples, a comparison with what looks similar and the most common mistakes.",
    points: [
      {
        id: "he-ikimasu",
        title: "N へ {行|い}きます・{来|き}ます・{帰|かえ}ります", title_en: "N へ {行|い}きます・{来|き}ます・{帰|かえ}ります",
        pat: "N (lugar) へ {行|い}きます／{来|き}ます／{帰|かえ}ります",
        short: "ir, vir e voltar a um lugar", short_en: "to go, come and return to a place",
        mean: "<strong>へ</strong> marca o destino do movimento: “para”. Como partícula, lê-se <strong>e</strong>, não “he”. A pergunta é どこ^へ {行|い}きますか。", mean_en: "<strong>へ</strong> marks the destination of the movement: “to”. As a particle it is read <strong>e</strong>, not “he”. The question is どこ^へ {行|い}きますか。",
        rule: "Para dizer que não vai a lugar nenhum, use <strong>どこ^へも</strong> ＋ negativa: どこ^へも {行|い}きません。", rule_en: "To say you are not going anywhere, use <strong>どこ^へも</strong> ＋ negative: どこ^へも {行|い}きません。",
        ex: [
          { jp: "わたし^は {毎日|まいにち} {学校|がっこう}^へ {行|い}きます。", romaji: "Watashi wa mainichi gakkou e ikimasu.", pt: "Eu vou à escola todos os dias.", en: "I go to school every day." },
          { jp: "{明日|あした}、{京都|きょうと}^へ {行|い}きます。", romaji: "Ashita, Kyouto e ikimasu.", pt: "Amanhã vou a Kyoto.", en: "Tomorrow I am going to Kyoto." },
          { jp: "{田中|たなか}さん^は {今日|きょう} {会社|かいしゃ}^へ {来|き}ませんでした。", romaji: "Tanaka-san wa kyou kaisha e kimasen deshita.", pt: "O Sr. Tanaka não veio à empresa hoje.", en: "Mr. Tanaka did not come to the company today." },
          { jp: "{昨日|きのう}、どこ^へ {行|い}きましたか。<br>…{海|うみ}^へ {行|い}きました。", romaji: "Kinou, doko e ikimashita ka. ...Umi e ikimashita.", pt: "Onde você foi ontem? ...Fui à praia.", en: "Where did you go yesterday? ...I went to the beach." },
          { jp: "{日曜日|にちようび}^は どこ^へも {行|い}きません。", romaji: "Nichiyoubi wa doko e mo ikimasen.", pt: "No domingo não vou a lugar nenhum.", en: "On Sundays I do not go anywhere." }
        ],
        contrast: {
          rows: [
            { label: "へ (direção do destino)", label_en: "へ (direction of the destination)", jp: "{学校|がっこう}^へ {行|い}きます。", pt: "Vou para a escola.", en: "I go to school." },
            { label: "に (ponto de chegada)", label_en: "に (arrival point)", jp: "{学校|がっこう}に {行|い}きます。", pt: "Vou à escola.", en: "I go to school." }
          ],
          note: "Com {行|い}きます・{来|き}ます・{帰|かえ}ります, へ e に são trocáveis. へ põe o foco na direção; に, no ponto de chegada. Aqui usamos へ.", note_en: "With {行|い}きます・{来|き}ます・{帰|かえ}ります, へ and に are interchangeable. へ puts the focus on direction; に on the arrival point. Here we use へ."
        },
        trap: [
          "Como partícula, へ se lê “e”: {学校|がっこう}^へ = gakkou <strong>e</strong>, não gakkou he.",
          "Não use を com esses verbos: errado {学校|がっこう}を {行|い}きます。 O destino leva へ (ou に)."
        ],
        trap_en: [
          "As a particle, へ is read “e”: {学校|がっこう}^へ = gakkou <strong>e</strong>, not gakkou he.",
          "Do not use を with these verbs: wrong {学校|がっこう}を {行|い}きます。 The destination takes へ (or に)."
        ]
      },
      {
        id: "de-norimono",
        title: "N で {行|い}きます (meio de transporte)", title_en: "N で {行|い}きます (means of transport)",
        pat: "N (veículo) で {行|い}きます／{来|き}ます／{帰|かえ}ります",
        short: "como se vai: de trem, de ônibus, a pé", short_en: "how you get there: by train, by bus, on foot",
        mean: "<strong>で</strong> indica o meio: “de, por, em”. Para “a pé” usa-se {歩|ある}いて, sem で. A pergunta é {何|なん}で {行|い}きますか。", mean_en: "<strong>で</strong> shows the means: “by, on, in”. For “on foot”, {歩|ある}いて is used, without で. The question is {何|なん}で {行|い}きますか。",
        ex: [
          { jp: "{電車|でんしゃ}で {京都|きょうと}^へ {行|い}きます。", romaji: "Densha de Kyouto e ikimasu.", pt: "Vou a Kyoto de trem.", en: "I am going to Kyoto by train." },
          { jp: "{毎朝|まいあさ} バスで {学校|がっこう}^へ {行|い}きます。", romaji: "Maiasa basu de gakkou e ikimasu.", pt: "Toda manhã vou à escola de ônibus.", en: "Every morning I go to school by bus." },
          { jp: "{駅|えき}から {歩|ある}いて {帰|かえ}ります。", romaji: "Eki kara aruite kaerimasu.", pt: "Volto a pé da estação.", en: "I walk back from the station." },
          { jp: "{空港|くうこう}^へ {何|なん}で {行|い}きますか。<br>…タクシーで {行|い}きます。", romaji: "Kuukou e nan de ikimasu ka. ...Takushii de ikimasu.", pt: "Como você vai ao aeroporto? ...Vou de táxi.", en: "How are you getting to the airport? ...I am taking a taxi." }
        ],
        contrast: {
          rows: [
            { label: "で ＋ veículo", label_en: "で ＋ vehicle", jp: "バスで {行|い}きます。", pt: "Vou de ônibus.", en: "I go by bus." },
            { label: "{歩|ある}いて (a pé)", label_en: "{歩|ある}いて (on foot)", jp: "{歩|ある}いて {行|い}きます。", pt: "Vou a pé.", en: "I go on foot." }
          ],
          note: "O veículo é um substantivo e leva で. {歩|ある}いて já é uma forma verbal, por isso não leva で.", note_en: "A vehicle is a noun and takes で. {歩|ある}いて is already a verb form, so it takes no で."
        },
        trap: [
          "Não escreva {歩|ある}いてで: {歩|ある}いて vem sozinho.",
          "O português usa “de”, “no”, “pelo”; o japonês é sempre バスで, {電車|でんしゃ}で, タクシーで. Não troque por に: errado バスに {行|い}きます。"
        ],
        trap_en: [
          "Do not write {歩|ある}いてで: {歩|ある}いて stands alone.",
          "English uses “by”, “on”, “in”; Japanese is always バスで, {電車|でんしゃ}で, タクシーで. Do not swap with に: wrong バスに {行|い}きます。"
        ]
      },
      {
        id: "to-hitoride",
        title: "N と V ・ {一人|ひとり}で", title_en: "N と V ・ {一人|ひとり}で",
        pat: "N (pessoa) と {行|い}きます<br>{一人|ひとり}で {行|い}きます",
        short: "com quem; sozinho", short_en: "with whom; alone",
        mean: "<strong>と</strong> liga a pessoa que acompanha: “com”. A pergunta é だれと {行|い}きますか。 Sozinho se diz <strong>{一人|ひとり}で</strong>, sem と.", mean_en: "<strong>と</strong> links the person who goes along: “with”. The question is だれと {行|い}きますか。 “Alone” is <strong>{一人|ひとり}で</strong>, without と.",
        ex: [
          { jp: "{友達|ともだち}と {海|うみ}^へ {行|い}きました。", romaji: "Tomodachi to umi e ikimashita.", pt: "Fui à praia com um amigo.", en: "I went to the beach with a friend." },
          { jp: "{家族|かぞく}と {京都|きょうと}^へ {行|い}きます。", romaji: "Kazoku to Kyouto e ikimasu.", pt: "Vou a Kyoto com a família.", en: "I am going to Kyoto with my family." },
          { jp: "{一人|ひとり}で {学校|がっこう}^へ {来|き}ました。", romaji: "Hitori de gakkou e kimashita.", pt: "Vim sozinho(a) à escola.", en: "I came to school alone." },
          { jp: "だれと {帰|かえ}りますか。<br>…{友達|ともだち}と {帰|かえ}ります。", romaji: "Dare to kaerimasu ka. ...Tomodachi to kaerimasu.", pt: "Com quem você volta? ...Volto com uma amiga.", en: "Who are you going home with? ...I am going home with a friend." }
        ],
        contrast: {
          rows: [
            { label: "と (acompanhado)", label_en: "と (accompanied)", jp: "{友達|ともだち}と {行|い}きます。", pt: "Vou com um amigo.", en: "I go with a friend." },
            { label: "{一人|ひとり}で (sozinho)", label_en: "{一人|ひとり}で (alone)", jp: "{一人|ひとり}で {行|い}きます。", pt: "Vou sozinho(a).", en: "I go alone." }
          ],
          note: "Pergunte “com quem?” com だれと. Quem vai sozinho não usa と.", note_en: "Ask “with whom?” with だれと. Someone going alone does not use と."
        },
        trap: [
          "と é “com uma pessoa”; “com o ônibus” (meio) é で, não と.",
          "Sozinho é {一人|ひとり}で, não {一人|ひとり}と."
        ],
        trap_en: [
          "と is “with a person”; “by bus” (means) is で, not と.",
          "“Alone” is {一人|ひとり}で, not {一人|ひとり}と."
        ]
      },
      {
        id: "itsu-hiduke",
        title: "いつ ・ {何月|なんがつ}{何日|なんにち} ・ {来週|らいしゅう}／{去年|きょねん}", title_en: "いつ ・ {何月|なんがつ}{何日|なんにち} ・ {来週|らいしゅう}／{去年|きょねん}",
        pat: "いつ V ますか。<br>〜{月|がつ} 〜{日|にち}",
        short: "quando; meses e dias do mês", short_en: "when; months and days of the month",
        mean: "<strong>いつ</strong> pergunta “quando” de forma aberta. A data é <strong>número ＋ {月|がつ}</strong> (mês) e <strong>número ＋ {日|にち}</strong> (dia). Os dias 1 a 10, 14, 20 e 24 têm leitura própria.", mean_en: "<strong>いつ</strong> asks “when” in an open way. A date is <strong>number ＋ {月|がつ}</strong> (month) and <strong>number ＋ {日|にち}</strong> (day). Days 1 to 10, 14, 20 and 24 have their own readings.",
        rule: "Mês 4, 7 e 9 também são especiais: しがつ, しちがつ, くがつ. Os demais dias usam número ＋ にち: {十一日|じゅういちにち}, {十二日|じゅうににち}, {二十五日|にじゅうごにち}.", rule_en: "Months 4, 7 and 9 are also special: しがつ, しちがつ, くがつ. The other days use number ＋ にち: {十一日|じゅういちにち}, {十二日|じゅうににち}, {二十五日|にじゅうごにち}.",
        form: [
          { label: "Meses especiais", label_en: "Special months", text: "Três meses fogem do padrão.", text_en: "Three months break the pattern.", ex: [
            { tag: "4", jp: "{四月|しがつ}", romaji: "shigatsu", pt: "abril (não よんがつ)", en: "April (not よんがつ)" },
            { tag: "7", jp: "{七月|しちがつ}", romaji: "shichigatsu", pt: "julho (não ななかつ)", en: "July (not ななかつ)" },
            { tag: "9", jp: "{九月|くがつ}", romaji: "kugatsu", pt: "setembro (não きゅうがつ)", en: "September (not きゅうがつ)" }
          ] },
          { label: "Dias 1 a 10", label_en: "Days 1 to 10", text: "Leituras próprias, de origem antiga.", text_en: "Their own readings, of old origin.", ex: [
            { tag: "1", jp: "{一日|ついたち}", romaji: "tsuitachi", pt: "dia 1", en: "the 1st" },
            { tag: "2", jp: "{二日|ふつか}", romaji: "futsuka", pt: "dia 2", en: "the 2nd" },
            { tag: "3", jp: "{三日|みっか}", romaji: "mikka", pt: "dia 3", en: "the 3rd" },
            { tag: "4", jp: "{四日|よっか}", romaji: "yokka", pt: "dia 4", en: "the 4th" },
            { tag: "5", jp: "{五日|いつか}", romaji: "itsuka", pt: "dia 5", en: "the 5th" },
            { tag: "6", jp: "{六日|むいか}", romaji: "muika", pt: "dia 6", en: "the 6th" },
            { tag: "7", jp: "{七日|なのか}", romaji: "nanoka", pt: "dia 7", en: "the 7th" },
            { tag: "8", jp: "{八日|ようか}", romaji: "youka", pt: "dia 8", en: "the 8th" },
            { tag: "9", jp: "{九日|ここのか}", romaji: "kokonoka", pt: "dia 9", en: "the 9th" },
            { tag: "10", jp: "{十日|とおか}", romaji: "tooka", pt: "dia 10", en: "the 10th" }
          ] },
          { label: "Dias especiais depois do 10", label_en: "Special days after the 10th", text: "Os dias 14, 20 e 24.", text_en: "The 14th, 20th and 24th.", ex: [
            { tag: "14", jp: "{十四日|じゅうよっか}", romaji: "juuyokka", pt: "dia 14", en: "the 14th" },
            { tag: "20", jp: "{二十日|はつか}", romaji: "hatsuka", pt: "dia 20", en: "the 20th" },
            { tag: "24", jp: "{二十四日|にじゅうよっか}", romaji: "nijuuyokka", pt: "dia 24", en: "the 24th" }
          ] }
        ],
        ex: [
          { jp: "{誕生日|たんじょうび}^は いつですか。<br>…{七月|しちがつ} {二十日|はつか}です。", romaji: "Tanjoubi wa itsu desu ka. ...Shichigatsu hatsuka desu.", pt: "Quando é o seu aniversário? ...É em 20 de julho.", en: "When is your birthday? ...It is on July 20th." },
          { jp: "{京都|きょうと}^へ いつ {行|い}きますか。<br>…{来週|らいしゅう}の {金曜日|きんようび}に {行|い}きます。", romaji: "Kyouto e itsu ikimasu ka. ...Raishuu no kinyoubi ni ikimasu.", pt: "Quando você vai a Kyoto? ...Vou na sexta-feira da semana que vem.", en: "When are you going to Kyoto? ...I am going next Friday." },
          { jp: "{去年|きょねん}、{九月|くがつ} {四日|よっか}に {日本|にほん}^へ {来|き}ました。", romaji: "Kyonen, kugatsu yokka ni Nihon e kimashita.", pt: "No ano passado, vim ao Japão em 4 de setembro.", en: "Last year, I came to Japan on September 4th." }
        ],
        contrast: {
          rows: [
            { label: "いつ (quando, em aberto)", label_en: "いつ (when, open question)", jp: "いつ {行|い}きますか。", pt: "Quando você vai? (qualquer resposta de tempo)", en: "When are you going? (any time answer)" },
            { label: "{何月|なんがつ} {何日|なんにち} (data exata)", label_en: "{何月|なんがつ} {何日|なんにち} (exact date)", jp: "{何月|なんがつ} {何日|なんにち}に {行|い}きますか。", pt: "Em que mês e dia você vai?", en: "On what month and day are you going?" }
          ],
          note: "いつ aceita qualquer resposta (“semana que vem”, “em julho”). {何月|なんがつ} {何日|なんにち} pede especificamente o mês e o dia.", note_en: "いつ accepts any answer (“next week”, “in July”). {何月|なんがつ} {何日|なんにち} specifically asks for the month and the day."
        },
        trap: [
          "いつ não leva に: errado いつに {行|い}きますか。 (Mas a resposta com data leva に: {七月|しちがつ} {二十日|はつか}に.)",
          "O dia 20 é はつか, não にじゅうにち; e o dia 1 é ついたち, não いちにち."
        ],
        trap_en: [
          "いつ takes no に: wrong いつに {行|い}きますか。 (But an answer with a date takes に: {七月|しちがつ} {二十日|はつか}に.)",
          "The 20th is はつか, not にじゅうにち; and the 1st is ついたち, not いちにち."
        ]
      }
    ]
  },
  renshuuA: {
    title: "{練習|れんしゅう} A", title_en: "{練習|れんしゅう} A",
    exercises: [
      {
        desc: "1. へ, で ou と?", desc_en: "1. へ, で or と?",
        questions: [
          { q: "わたしは {電車|でんしゃ}（　　）{学校|がっこう}へ {行|い}きます。", a: "で", romaji: "de", pt: "Meio de transporte", en: "Means of transport" },
          { q: "わたしは {友達|ともだち}（　　）{海|うみ}へ {行|い}きました。", a: "と", romaji: "to", pt: "Companhia", en: "Companion" },
          { q: "{明日|あした}、{京都|きょうと}（　　）{行|い}きます。", a: "へ", romaji: "e", pt: "Destino", en: "Destination" },
          { q: "{一人|ひとり}（　　）{帰|かえ}りました。", a: "で", romaji: "de", pt: "Sozinho(a)", en: "Alone" }
        ]
      },
      {
        desc: "2. Passe o verbo para a forma indicada", desc_en: "2. Put the verb into the form shown",
        questions: [
          { q: "{行|い}きます (passado) ➔", q_en: "{行|い}きます (past) ➔", a: "{行|い}きました", romaji: "ikimashita", pt: "Fui", en: "I went" },
          { q: "{来|き}ます (passado) ➔", q_en: "{来|き}ます (past) ➔", a: "{来|き}ました", romaji: "kimashita", pt: "Vim", en: "I came" },
          { q: "{帰|かえ}ります (passado) ➔", q_en: "{帰|かえ}ります (past) ➔", a: "{帰|かえ}りました", romaji: "kaerimashita", pt: "Voltei", en: "I returned" },
          { q: "{行|い}きます (negativo) ➔", q_en: "{行|い}きます (negative) ➔", a: "{行|い}きません", romaji: "ikimasen", pt: "Não vou", en: "I do not go" },
          { q: "{来|き}ます (passado negativo) ➔", q_en: "{来|き}ます (past negative) ➔", a: "{来|き}ませんでした", romaji: "kimasen deshita", pt: "Não vim", en: "I did not come" }
        ]
      }
    ]
  },
  renshuuB: {
    title: "{練習|れんしゅう} B", title_en: "{練習|れんしゅう} B",
    exercises: [
      {
        desc: "1. Os dias do mês: escreva a leitura em hiragana", desc_en: "1. Days of the month: write the reading in hiragana",
        questions: [
          { q: "dia 1 ➔", q_en: "the 1st ➔", a: "ついたち", romaji: "tsuitachi", pt: "Dia 1", en: "The 1st" },
          { q: "dia 2 ➔", q_en: "the 2nd ➔", a: "ふつか", romaji: "futsuka", pt: "Dia 2", en: "The 2nd" },
          { q: "dia 4 ➔", q_en: "the 4th ➔", a: "よっか", romaji: "yokka", pt: "Dia 4", en: "The 4th" },
          { q: "dia 8 ➔", q_en: "the 8th ➔", a: "ようか", romaji: "youka", pt: "Dia 8", en: "The 8th" },
          { q: "dia 10 ➔", q_en: "the 10th ➔", a: "とおか", romaji: "tooka", pt: "Dia 10", en: "The 10th" },
          { q: "dia 14 ➔", q_en: "the 14th ➔", a: "じゅうよっか", romaji: "juuyokka", pt: "Dia 14", en: "The 14th" },
          { q: "dia 20 ➔", q_en: "the 20th ➔", a: "はつか", romaji: "hatsuka", pt: "Dia 20", en: "The 20th" },
          { q: "dia 24 ➔", q_en: "the 24th ➔", a: "にじゅうよっか", romaji: "nijuuyokka", pt: "Dia 24", en: "The 24th" }
        ]
      },
      {
        desc: "2. Os meses especiais: escreva a leitura em hiragana", desc_en: "2. Special months: write the reading in hiragana",
        questions: [
          { q: "mês 4 ➔", q_en: "month 4 ➔", a: "しがつ", romaji: "shigatsu", pt: "Abril", en: "April" },
          { q: "mês 7 ➔", q_en: "month 7 ➔", a: "しちがつ", romaji: "shichigatsu", pt: "Julho", en: "July" },
          { q: "mês 9 ➔", q_en: "month 9 ➔", a: "くがつ", romaji: "kugatsu", pt: "Setembro", en: "September" }
        ]
      }
    ]
  },
  mondai: {
    title: "{問題|もんだい} (Problemas / Avaliação)", title_en: "{問題|もんだい} (Problems / Assessment)",
    exercises: [
      {
        desc: "1. (　　) に {正|ただ}しい ことばを {入|い}れなさい。 (へ・で・と・に・いつ)", desc_en: "1. Fill in the blank with the right word. (へ・で・と・に・いつ)",
        questions: [
          { q: "{毎朝|まいあさ} {七時|しちじ}（　　）{学校|がっこう}へ {行|い}きます。", a: "に", romaji: "ni", pt: "Horário exato", en: "Exact time" },
          { q: "{誕生日|たんじょうび}は （　　）ですか。…{七月|しちがつ} {二十日|はつか}です。", a: "いつ", romaji: "itsu", pt: "Quando é?", en: "When is it?" },
          { q: "{空港|くうこう}へ {何|なん}（　　）{行|い}きますか。…タクシーで {行|い}きます。", a: "で", romaji: "de", pt: "Com que meio de transporte", en: "By what means of transport" },
          { q: "だれ（　　）{帰|かえ}りますか。…{友達|ともだち}と {帰|かえ}ります。", a: "と", romaji: "to", pt: "Com quem", en: "With whom" }
        ]
      },
      {
        desc: "2. {読|よ}み{物|もの} (Leitura): りょこう", desc_en: "2. Reading: the trip",
        questions: [
          {
            q: `<div class="reading-box">マリアさんは {来週|らいしゅう}の {土曜日|どようび}に {京都|きょうと}へ {行|い}きます。{友達|ともだち}と {電車|でんしゃ}で {行|い}きます。{日曜日|にちようび}に {帰|かえ}ります。</div>{質問|しつもん}: マリアさんは だれと {京都|きょうと}へ {行|い}きますか。<br>➔ ＿＿＿＿＿＿＿＿。`,
            a: "{友達|ともだち}と",
            romaji: "tomodachi to",
            pt: "Com uma amiga.", en: "With a friend."
          },
          {
            q: `<div class="reading-box">マリアさんは {来週|らいしゅう}の {土曜日|どようび}に {京都|きょうと}へ {行|い}きます。{友達|ともだち}と {電車|でんしゃ}で {行|い}きます。{日曜日|にちようび}に {帰|かえ}ります。</div>{質問|しつもん}: マリアさんは {何|なん}で {京都|きょうと}へ {行|い}きますか。<br>➔ ＿＿＿＿＿＿＿＿。`,
            a: "{電車|でんしゃ}で",
            romaji: "densha de",
            pt: "De trem.", en: "By train."
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
          { tokens: ["{友達|ともだち}と", "{海|うみ}へ", "{行|い}きました。"], pt: "Fui à praia com um amigo.", en: "I went to the beach with a friend.", romaji: "Tomodachi to umi e ikimashita." },
          { tokens: ["{電車|でんしゃ}で", "{京都|きょうと}へ", "{行|い}きます。"], pt: "Vou a Kyoto de trem.", en: "I am going to Kyoto by train.", romaji: "Densha de Kyouto e ikimasu." },
          { tokens: ["{誕生日|たんじょうび}は", "いつですか。"], pt: "Quando é o seu aniversário?", en: "When is your birthday?", romaji: "Tanjoubi wa itsu desu ka." },
          { tokens: ["{一人|ひとり}で", "{学校|がっこう}へ", "{来|き}ました。"], pt: "Vim sozinho(a) à escola.", en: "I came to school alone.", romaji: "Hitori de gakkou e kimashita." }
        ]
      }
    ]
  }
};
