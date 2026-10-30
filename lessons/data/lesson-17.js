// Dados da lição 17. Formato descrito no README.md.
window.lessonData = {
  vocab: {
    title: "{語彙|ごい} (Vocabulário)", title_en: "{語彙|ごい} (Vocabulary)",
    items: [
      { jp: "{覚|おぼ}えます", romaji: "oboemasu", pt: "Memorizar, lembrar", en: "To memorize, to remember" },
      { jp: "{忘|わす}れます", romaji: "wasuremasu", pt: "Esquecer", en: "To forget" },
      { jp: "なくします", romaji: "nakushimasu", pt: "Perder (algo)", en: "To lose (something)" },
      { jp: "{払|はら}います", romaji: "haraimasu", pt: "Pagar", en: "To pay" },
      { jp: "{返|かえ}します", romaji: "kaeshimasu", pt: "Devolver", en: "To return (something)" },
      { jp: "{出|で}かけます", romaji: "dekakemasu", pt: "Sair (de casa)", en: "To leave (home)" },
      { jp: "{脱|ぬ}ぎます", romaji: "nugimasu", pt: "Tirar (roupa, sapatos)", en: "To take off (clothes, shoes)" },
      { jp: "{持|も}って{行|い}きます", romaji: "motte ikimasu", pt: "Levar (algo)", en: "To take (something) along" },
      { jp: "{持|も}って{来|き}ます", romaji: "motte kimasu", pt: "Trazer (algo)", en: "To bring (something)" },
      { jp: "{心配|しんぱい}します", romaji: "shinpai shimasu", pt: "Preocupar-se", en: "To worry" },
      { jp: "{残業|ざんぎょう}します", romaji: "zangyou shimasu", pt: "Fazer hora extra", en: "To work overtime" },
      { jp: "{出張|しゅっちょう}します", romaji: "shucchou shimasu", pt: "Fazer viagem de negócios", en: "To go on a business trip" },
      { jp: "{薬|くすり}", romaji: "kusuri", pt: "Remédio", en: "Medicine" },
      { jp: "お{風呂|ふろ}", romaji: "ofuro", pt: "Banho (banheira)", en: "Bath (bathtub)" },
      { jp: "{大切|たいせつ} [な]", romaji: "taisetsu [na]", pt: "Importante, precioso", en: "Important, precious" },
      { jp: "{大丈夫|だいじょうぶ} [な]", romaji: "daijoubu [na]", pt: "Tudo bem, sem problemas", en: "It's fine, no problem" },
      { jp: "{危|あぶ}ない", romaji: "abunai", pt: "Perigoso", en: "Dangerous" },
      { jp: "{禁煙|きんえん}", romaji: "kinen", pt: "Proibido fumar", en: "No smoking" },
      { jp: "{保険証|ほけんしょう}", romaji: "hokenshou", pt: "Cartão de seguro (saúde)", en: "(Health) insurance card" },
      { jp: "{熱|ねつ}", romaji: "netsu", pt: "Febre", en: "Fever" },
      { jp: "{病気|びょうき}", romaji: "byouki", pt: "Doença", en: "Illness" },
      { jp: "〜までに", romaji: "~madeni", pt: "Até ~ (prazo limite)", en: "By ~ (deadline)" },
      { jp: "ですから", romaji: "desukara", pt: "Por isso, portanto", en: "Therefore, so" }
    ]
  },
  gramatica: {
    title: "{文法|ぶんぽう} (Gramática)", title_en: "{文法|ぶんぽう} (Grammar)",
    intro: "Cinco pontos. A forma ない vem primeiro: os três seguintes são construídos em cima dela, e o último (までに) completa a ideia de prazo.", intro_en: "Five points. The ない form comes first: the next three are built on it, and the last one (までに) completes the idea of a deadline.",
    points: [
      {
        id: "nai-kei",
        title: "{動詞|どうし}の ない{形|けい} (forma ない)", title_en: "{動詞|どうし}の ない{形|けい} (ない form)",
        pat: "V-ます ➔ V-ない",
        short: "negativa informal, base dos três pontos seguintes", short_en: "informal negative, the base of the next three points",
        mean: "A forma ない é a negativa informal ({書|か}かない = não escrevo) e a base de 〜ないでください, 〜なければなりません e 〜なくてもいいです.", mean_en: "The ない form is the informal negative ({書|か}かない = I don't write) and the base of 〜ないでください, 〜なければなりません and 〜なくてもいいです.",
        rule: "Parta da forma ます. No grupo 1, a sílaba da coluna i antes de ます passa para a coluna a, e acrescenta-se <strong>ない</strong>.", rule_en: "Start from the ます form. In group 1, the い-column syllable before ます changes to the あ column, and <strong>ない</strong> is added.",
        form: [
          { label: "{第|だい}１グループ (Grupo 1)", label_en: "{第|だい}１グループ (Group 1)", text: "Coluna i ➔ coluna a, mais <strong>ない</strong>.", text_en: "い column ➔ あ column, plus <strong>ない</strong>.", ex: [
            { tag: "い ➔ わ", jp: "{買|か}います ➔ {買|か}<strong>わない</strong>", pt: "comprar (い vira わ, não あ)", en: "to buy (い becomes わ, not あ)" },
            { tag: "き ➔ か", jp: "{書|か}きます ➔ {書|か}<strong>かない</strong>", pt: "escrever", en: "to write" },
            { tag: "ぎ ➔ が", jp: "{急|いそ}ぎます ➔ {急|いそ}<strong>がない</strong>", romaji: "isogimasu ➔ isoganai", pt: "apressar-se", en: "to hurry" },
            { tag: "し ➔ さ", jp: "{話|はな}します ➔ {話|はな}<strong>さない</strong>", pt: "falar", en: "to speak" },
            { tag: "ち ➔ た", jp: "{待|ま}ちます ➔ {待|ま}<strong>たない</strong>", pt: "esperar", en: "to wait" },
            { tag: "み ➔ ま", jp: "{読|よ}みます ➔ {読|よ}<strong>まない</strong>", pt: "ler", en: "to read" },
            { tag: "び ➔ ば", jp: "{呼|よ}びます ➔ {呼|よ}<strong>ばない</strong>", pt: "chamar", en: "to call" },
            { tag: "り ➔ ら", jp: "{帰|かえ}ります ➔ {帰|かえ}<strong>らない</strong>", pt: "voltar", en: "to return" },
            { tag: "exceção", tag_en: "exception", jp: "あります ➔ <strong>ない</strong>", pt: "existir (não existe あらない)", en: "to exist (it is not あらない)" }
          ] },
          { label: "{第|だい}２グループ (Grupo 2)", label_en: "{第|だい}２グループ (Group 2)", text: "Tire ます e acrescente <strong>ない</strong>.", text_en: "Drop ます and add <strong>ない</strong>.", ex: [
            { jp: "{食|た}べます ➔ {食|た}べ<strong>ない</strong>", pt: "comer", en: "to eat" },
            { jp: "{見|み}ます ➔ {見|み}<strong>ない</strong>", pt: "ver", en: "to see" }
          ] },
          { label: "{第|だい}３グループ (Grupo 3)", label_en: "{第|だい}３グループ (Group 3)", text: "Irregulares: só dois verbos.", text_en: "Irregulars: only two verbs.", ex: [
            { jp: "します ➔ し<strong>ない</strong>", pt: "fazer", en: "to do" },
            { jp: "{来|き}ます ➔ {来|こ}<strong>ない</strong>", pt: "vir (o kanji muda de き para こ)", en: "to come (the kanji reading changes from き to こ)" }
          ] }
        ],
        ex: [
          { jp: "{朝|あさ}ごはんを {食|た}べない。", pt: "Não tomo café da manhã. (informal)", en: "I don't eat breakfast. (informal)" },
          { jp: "{今日|きょう}^は {会社|かいしゃ}^へ {行|い}かない。", pt: "Hoje não vou à empresa. (informal)", en: "I'm not going to the company today. (informal)" },
          { jp: "お{酒|さけ}を {飲|の}まない。", pt: "Não bebo álcool. (informal)", en: "I don't drink alcohol. (informal)" }
        ],
        contrast: {
          rows: [
            { label: "{丁寧|ていねい}な {形|かたち} (ません)", jp: "{毎日|まいにち} {肉|にく}を {食|た}べません。", pt: "Educado: com desconhecidos, no trabalho.", en: "Polite: with strangers, at work." },
            { label: "ない{形|けい} (informal)", jp: "{毎日|まいにち} {肉|にく}を {食|た}べない。", pt: "Informal: com amigos e família. É também a base dos pontos seguintes.", en: "Informal: with friends and family. It is also the base of the next points." }
          ],
          note: "A forma ない diz o mesmo que ません, só muda o nível de formalidade.", note_en: "The ない form says the same as ません: only the level of formality changes."
        },
        trap: [
          "Os verbos em う mudam para わ, não para あ: {買|か}います ➔ {買|か}<strong>わ</strong>ない.",
          "ある não vira あらない: a negativa é só ない.",
          "{来|き}る muda de leitura: {来|き}ます ➔ {来|こ}ない."
        ],
        trap_en: [
          "Verbs ending in う change to わ, not あ: {買|か}います ➔ {買|か}<strong>わ</strong>ない.",
          "ある does not become あらない: the negative is just ない.",
          "{来|き}る changes its reading: {来|き}ます ➔ {来|こ}ない."
        ]
      },
      {
        id: "nai-de-kudasai",
        title: "{動詞|どうし} ない{形|けい} ＋ でください",
        pat: "V-ない でください",
        short: "por favor, não faça", short_en: "please don't do it",
        mean: "Pedido educado para a outra pessoa não fazer algo: “por favor, não ~”.", mean_en: "A polite request for the other person not to do something: “please don't ~”.",
        rule: "Forma ない + <strong>でください</strong>: {忘|わす}れない ➔ {忘|わす}れないでください.", rule_en: "ない form + <strong>でください</strong>: {忘|わす}れない ➔ {忘|わす}れないでください.",
        ex: [
          { jp: "{写真|しゃしん}を{撮|と}らないでください。", romaji: "Shashin o toranaide kudasai.", pt: "Por favor, não tire fotos.", en: "Please don't take photos." },
          { jp: "{忘|わす}れないでください。", romaji: "Wasurenaide kudasai.", pt: "Por favor, não esqueça.", en: "Please don't forget." },
          { jp: "そこに{入|はい}らないでください。<br>…はい、わかりました。", romaji: "Soko ni hairanaide kudasai. ...Hai, wakarimashita.", pt: "Por favor, não entre aí. ...Sim, entendi.", en: "Please don't go in there. ...Yes, understood." },
          { jp: "{荷物|にもつ}はどこに{置|お}きますか。<br>…{荷物|にもつ}はそこに{置|お}かないでください。", romaji: "Nimotsu wa doko ni okimasu ka. ...Nimotsu wa soko ni okanaide kudasai.", pt: "Onde coloco a bagagem? ...Quanto à bagagem, por favor não coloque aí.", en: "Where should I put the luggage? ...As for the luggage, please don't put it there." }
        ],
        contrast: {
          rows: [
            { label: "V-て ください (pedir que faça)", label_en: "V-て ください (asking someone to do it)", jp: "ここで {写真|しゃしん}を {撮|と}ってください。", pt: "Por favor, tire uma foto aqui.", en: "Please take a photo here." },
            { label: "V-ない でください (pedir que não faça)", label_en: "V-ない でください (asking someone not to do it)", jp: "ここで {写真|しゃしん}を {撮|と}らないでください。", pt: "Por favor, não tire fotos aqui.", en: "Please don't take photos here." }
          ],
          note: "É o mesmo ください, só que com ない + で no lugar de て.", note_en: "It is the same ください, only with ない + で in place of て."
        },
        trap: [
          "Não é ないてください: o certo é ない + <strong>で</strong>ください.",
          "Não confunda com 〜なくてもいいです (veja o ponto 4): ないでください pede que a pessoa não faça; なくてもいいです diz que ela não precisa fazer."
        ],
        trap_en: [
          "It is not ないてください: the right form is ない + <strong>で</strong>ください.",
          "Do not confuse it with 〜なくてもいいです (point 4): ないでください asks the person not to do it; なくてもいいです says they do not need to do it."
        ]
      },
      {
        id: "nakereba",
        title: "{動詞|どうし} ない{形|けい} ＋ なければなりません",
        pat: "V-なければなりません",
        short: "ter que / precisar fazer", short_en: "must / have to do",
        mean: "Expressa obrigação: “tenho que ~”, “preciso ~”.", mean_en: "Expresses obligation: “I have to ~”, “I must ~”.",
        rule: "Tire o い final de ない e acrescente ければなりません: {飲|の}まない ➔ {飲|の}まなければなりません. Pergunta: 〜なければなりませんか。", rule_en: "Drop the final い of ない and add ければなりません: {飲|の}まない ➔ {飲|の}まなければなりません. Question: 〜なければなりませんか。",
        form: [
          { label: "Passo a passo", label_en: "Step by step", text: "Do ます até a obrigação.", text_en: "From ます to the obligation.", ex: [
            { jp: "{飲|の}みます ➔ {飲|の}まない ➔ {飲|の}ま<strong>なければなりません</strong>", romaji: "nomimasu ➔ nomanai ➔ nomanakereba narimasen", pt: "beber ➔ ter que beber", en: "to drink ➔ have to drink" },
            { jp: "{来|き}ます ➔ {来|こ}ない ➔ {来|こ}<strong>なければなりません</strong>", romaji: "kimasu ➔ konai ➔ konakereba narimasen", pt: "vir ➔ ter que vir", en: "to come ➔ have to come" }
          ] }
        ],
        ex: [
          { jp: "パスポートを{見|み}せなければなりません。", romaji: "Pasupooto o misenakereba narimasen.", pt: "Tenho que mostrar o passaporte.", en: "I have to show my passport." },
          { jp: "{薬|くすり}を{飲|の}まなければなりません。", romaji: "Kusuri o nomanakereba narimasen.", pt: "Tenho que tomar o remédio.", en: "I have to take the medicine." },
          { jp: "この{薬|くすり}を{飲|の}まなければなりませんか。<br>…はい、{飲|の}まなければなりません。", romaji: "Kono kusuri o nomanakereba narimasen ka. ...Hai, nomanakereba narimasen.", pt: "Tenho que tomar este remédio? ...Sim, tem que tomar.", en: "Do I have to take this medicine? ...Yes, you have to." },
          { jp: "{毎日|まいにち} {勉強|べんきょう}しなければなりません。", romaji: "Mainichi benkyou shinakereba narimasen.", pt: "Preciso estudar todos os dias.", en: "I have to study every day." }
        ],
        contrast: {
          rows: [
            { label: "V-て ください (pedido)", label_en: "V-て ください (request)", jp: "{薬|くすり}を {飲|の}んでください。", pt: "Por favor, tome o remédio. (alguém pede)", en: "Please take the medicine. (someone asks)" },
            { label: "V-なければなりません (obrigação)", label_en: "V-なければなりません (obligation)", jp: "{薬|くすり}を {飲|の}まなければなりません。", pt: "Tenho que tomar o remédio. (é necessário)", en: "I have to take the medicine. (it is necessary)" }
          ],
          note: "ください pede algo a alguém. なければなりません diz o que é necessário, sem pedir nada a ninguém.", note_en: "ください asks someone for something. なければなりません says what is necessary, without asking anyone."
        },
        trap: [
          "Parece uma negativa, mas significa obrigação (“se eu não fizer, não está certo”). Não traduza como “não devo fazer”.",
          "Para responder “não” a uma pergunta com なければなりませんか, não use いいえ、〜なければなりません. O certo é いいえ、〜なくてもいいです (“não precisa”)."
        ],
        trap_en: [
          "It looks like a negative, but it means obligation (“if I don't do it, it is not right”). Do not translate it as “I must not do it”.",
          "To answer “no” to a question with なければなりませんか, do not use いいえ、〜なければなりません. The right answer is いいえ、〜なくてもいいです (“you don't have to”)."
        ]
      },
      {
        id: "nakutemo",
        title: "{動詞|どうし} ない{形|けい} ＋ なくてもいいです",
        pat: "V-なくても いいです",
        short: "não precisa fazer", short_en: "don't have to do it",
        mean: "Diz que a obrigação não existe: “não precisa ~”, “não é necessário ~”.", mean_en: "Says that the obligation does not exist: “you don't have to ~”, “it is not necessary to ~”.",
        rule: "Tire o い de ない e acrescente くても いいです: {来|こ}ない ➔ {来|こ}なくても いいです. Pergunta: 〜なくても いいですか。", rule_en: "Drop the い of ない and add くても いいです: {来|こ}ない ➔ {来|こ}なくても いいです. Question: 〜なくても いいですか。",
        ex: [
          { jp: "{日曜日|にちようび}は{早|はや}く{起|お}きなくてもいいです。", romaji: "Nichiyoubi wa hayaku okinakutemo ii desu.", pt: "No domingo, não preciso acordar cedo.", en: "On Sunday, I don't have to wake up early." },
          { jp: "{明日|あした} {来|こ}なくてもいいです。", romaji: "Ashita konakutemo ii desu.", pt: "Não precisa vir amanhã.", en: "You don't have to come tomorrow." },
          { jp: "{明日|あした}も{来|き}なければなりませんか。<br>…いいえ、{来|こ}なくてもいいです。", romaji: "Ashita mo kinakereba narimasen ka. ...Iie, konakutemo ii desu.", pt: "Tenho que vir amanhã também? ...Não, não precisa vir.", en: "Do I have to come tomorrow too? ...No, you don't have to come." },
          { jp: "{今日|きょう}は {傘|かさ}を {持|も}たなくてもいいです。", romaji: "Kyou wa kasa o motanakutemo ii desu.", pt: "Hoje não precisa levar guarda-chuva.", en: "Today you don't have to take an umbrella." }
        ],
        contrast: {
          rows: [
            { label: "なければなりません (obrigação)", label_en: "なければなりません (obligation)", jp: "{明日|あした}も {来|こ}なければなりません。", pt: "Preciso vir amanhã também.", en: "I have to come tomorrow too." },
            { label: "なくても いいです (sem obrigação)", label_en: "なくても いいです (no obligation)", jp: "{明日|あした}は {来|こ}なくてもいいです。", pt: "Amanhã não precisa vir.", en: "You don't have to come tomorrow." }
          ],
          note: "São opostos: um diz que é preciso, o outro diz que não é.", note_en: "They are opposites: one says it is necessary, the other says it is not."
        },
        trap: [
          "Não confunda com 〜ないでください: {来|こ}なくてもいいです = “não precisa vir”; {来|こ}ないでください = “por favor, não venha”. O primeiro dispensa, o segundo pede.",
          "O い de ない cai: certo なくても, errado ないくても."
        ],
        trap_en: [
          "Do not confuse it with 〜ないでください: {来|こ}なくてもいいです = “you don't have to come”; {来|こ}ないでください = “please don't come”. The first excuses, the second asks.",
          "The い of ない drops: right なくても, wrong ないくても."
        ]
      },
      {
        id: "made-ni",
        title: "{名詞|めいし} ({時間|じかん}) ＋ までに",
        pat: "{時間|じかん}までに V",
        short: "até (prazo limite)", short_en: "by (deadline)",
        mean: "Marca o prazo final em que algo precisa estar feito: “até sexta-feira, no máximo”. A ação acontece uma vez, em algum momento antes do limite.", mean_en: "Marks the final deadline by which something must be done: “by Friday at the latest”. The action happens once, at some point before the limit.",
        rule: "Palavra de tempo + までに + verbo. Combina bem com なければなりません.", rule_en: "Time word + までに + verb. It combines well with なければなりません.",
        ex: [
          { jp: "{金曜日|きんようび}までに レポートを{出|だ}さなければなりません。", romaji: "Kinyoubi made ni repooto o dasanakereba narimasen.", pt: "Tenho que entregar o relatório até sexta-feira.", en: "I have to hand in the report by Friday." },
          { jp: "{五時|ごじ}までに {帰|かえ}ります。", romaji: "Goji made ni kaerimasu.", pt: "Volto até as cinco.", en: "I'll be back by five." },
          { jp: "{明日|あした}までに {本|ほん}を {返|かえ}してください。", romaji: "Ashita made ni hon o kaeshite kudasai.", pt: "Por favor, devolva o livro até amanhã.", en: "Please return the book by tomorrow." }
        ],
        contrast: {
          rows: [
            { label: "まで (duração)", label_en: "まで (duration)", jp: "{五時|ごじ}まで {働|はたら}きます。", pt: "Trabalho até as cinco (continuo trabalhando até lá).", en: "I work until five (I keep working until then)." },
            { label: "までに (prazo)", label_en: "までに (deadline)", jp: "{五時|ごじ}までに {帰|かえ}ります。", pt: "Volto até as cinco (em algum momento antes disso).", en: "I'll be back by five (at some point before then)." }
          ],
          note: "まで: a ação dura até aquele momento. までに: a ação acontece uma vez, em algum ponto antes daquele momento.", note_en: "まで: the action lasts until that moment. までに: the action happens once, at some point before that moment."
        },
        trap: [
          "Em português os dois são “até”. Escolha pelo verbo: o que dura (trabalhar, esperar, dormir) pede まで; o que acontece num instante (entregar, voltar, chegar) pede までに.",
          "までに dá o limite, não a hora exata: {五時|ごじ}までに {帰|かえ}ります pode ser às três, às quatro ou às cinco."
        ],
        trap_en: [
          "In English, both are “until / by”. Choose by the verb: what lasts (working, waiting, sleeping) takes まで; what happens in an instant (handing in, returning, arriving) takes までに.",
          "までに gives the limit, not the exact time: {五時|ごじ}までに {帰|かえ}ります can be at three, at four or at five."
        ]
      }
    ]
  },
  renshuuB: {
    title: "{練習|れんしゅう}B (Prática B)", title_en: "{練習|れんしゅう}B (Practice B)",
    exercises: [
      {
        type: "B1",
        desc: "1. ない{形|けい}に{変|か}えなさい。(Transforme para a forma NAI)", desc_en: "1. ない{形|けい}に{変|か}えなさい。(Change to the NAI form)",
        questions: [
          { q: "{書|か}きます ➔", a: "{書|か}かない", romaji: "kakanai", pt: "Não escrever", en: "Not to write" },
          { q: "{急|いそ}ぎます ➔", a: "{急|いそ}がない", romaji: "isoganai", pt: "Não se apressar", en: "Not to hurry" },
          { q: "{待|ま}ちます ➔", a: "{待|ま}たない", romaji: "matanai", pt: "Não esperar", en: "Not to wait" },
          { q: "{呼|よ}びます ➔", a: "{呼|よ}ばない", romaji: "yobanai", pt: "Não chamar", en: "Not to call" },
          { q: "{入|はい}ります ➔", a: "{入|はい}らない", romaji: "hairanai", pt: "Não entrar", en: "Not to enter" },
          { q: "{食|た}べます ➔", a: "{食|た}べない", romaji: "tabenai", pt: "Não comer", en: "Not to eat" },
          { q: "します ➔", a: "しない", romaji: "shinai", pt: "Não fazer", en: "Not to do" },
          { q: "{来|き}ます ➔", a: "{来|こ}ない", romaji: "konai", pt: "Não vir", en: "Not to come" }
        ]
      },
      {
        type: "B2",
        desc: "2. 〜ないでください を{使|つか}いなさい。(Use V-naide kudasai)",
        questions: [
          { q: "{写真|しゃしん}を{撮|と}ります ➔", a: "{写真|しゃしん}を{撮|と}らないでください。", romaji: "Shashin o toranaide kudasai.", pt: "Por favor, não tire fotos.", en: "Please don't take photos." },
          { q: "ここでタバコを{吸|す}います ➔", a: "ここでタバコを{吸|す}わないでください。", romaji: "Koko de tabako o suwanaide kudasai.", pt: "Por favor, não fume aqui.", en: "Please don't smoke here." },
          { q: "{車|くるま}を{止|と}めます ➔", a: "{車|くるま}を{止|と}めないでください。", romaji: "Kuruma o tomenaide kudasai.", pt: "Por favor, não estacione o carro.", en: "Please don't park the car." },
          { q: "パスポートをなくします ➔", a: "パスポートをなくさないでください。", romaji: "Pasupooto o nakusanaide kudasai.", pt: "Por favor, não perca o passaporte.", en: "Please don't lose your passport." }
        ]
      },
      {
        type: "B3",
        desc: "3. 〜なければなりません を{使|つか}いなさい。(Use V-nakereba narimasen)",
        questions: [
          { q: "{薬|くすり}を{飲|の}みます ➔", a: "{薬|くすり}を{飲|の}まなければなりません。", romaji: "Kusuri o nomanakereba narimasen.", pt: "Tenho que tomar o remédio.", en: "I have to take the medicine." },
          { q: "{本|ほん}を{返|かえ}します ➔", a: "{本|ほん}を{返|かえ}さなければなりません。", romaji: "Hon o kaesanakereba narimasen.", pt: "Tenho que devolver o livro.", en: "I have to return the book." },
          { q: "{毎日|まいにち}{勉強|べんきょう}します ➔", a: "{毎日|まいにち}{勉強|べんきょう}しなければなりません。", romaji: "Mainichi benkyou shinakereba narimasen.", pt: "Tenho que estudar todos os dias.", en: "I have to study every day." },
          { q: "{早|はや}く{帰|かえ}ります ➔", a: "{早|はや}く{帰|かえ}らなければなりません。", romaji: "Hayaku kaeranakereba narimasen.", pt: "Tenho que voltar cedo.", en: "I have to go back early." }
        ]
      },
      {
        type: "B4",
        desc: "4. {質問|しつもん}に{答|こた}えなさい。(Responda às perguntas: はい / いいえ)", desc_en: "4. {質問|しつもん}に{答|こた}えなさい。(Answer the questions: yes / no)",
        questions: [
          { q: "{残業|ざんぎょう}しなければなりませんか。(はい) ➔", a: "はい、{残業|ざんぎょう}しなければなりません。", romaji: "Hai, zangyou shinakereba narimasen.", pt: "Sim, tenho que fazer hora extra.", en: "Yes, I have to work overtime." },
          { q: "{名前|なまえ}を{書|か}かなければなりませんか。(はい) ➔", a: "はい、{書|か}かなければなりません。", romaji: "Hai, kakanakereba narimasen.", pt: "Sim, tenho que escrever.", en: "Yes, I have to write." },
          { q: "{急|いそ}がなければなりませんか。(いいえ) ➔", a: "いいえ、{急|いそ}がなくてもいいです。", romaji: "Iie, isoganutemo ii desu.", pt: "Não, não precisa se apressar.", en: "No, you don't have to hurry." },
          { q: "{靴|くつ}を{脱|ぬ}がなければなりませんか。(いいえ) ➔", a: "いいえ、{脱|ぬ}がなくてもいいです。", romaji: "Iie, nuganakutemo ii desu.", pt: "Não, não precisa tirar os sapatos.", en: "No, you don't have to take off your shoes." }
        ]
      },
      {
        type: "B5",
        desc: "5. 〜なくてもいいです を{使|つか}いなさい。(Use V-nakutemo ii desu)",
        questions: [
          { q: "{明日|あした}{来|き}ます ➔", a: "{明日|あした}{来|こ}なくてもいいです。", romaji: "Ashita konakutemo ii desu.", pt: "Não precisa vir amanhã.", en: "You don't have to come tomorrow." },
          { q: "レポートを{出|だ}します ➔", a: "レポートを{出|だ}さなくてもいいです。", romaji: "Repooto o dasanakutemo ii desu.", pt: "Não precisa entregar o relatório.", en: "You don't have to hand in the report." }
        ]
      },
      {
        type: "B6",
        desc: "6. 「〜は」を{使|つか}って{文|ぶん}を{作|つく}りなさい。(Use o tópico 'wa')", desc_en: "6. 「〜は」を{使|つか}って{文|ぶん}を{作|つく}りなさい。(Use the topic 'wa')",
        questions: [
          { q: "ここに{荷物|にもつ}を{置|お}かないでください。➔", a: "{荷物|にもつ}はここに{置|お}かないでください。", romaji: "Nimotsu wa koko ni okanaide kudasai.", pt: "A bagagem, não coloque aqui por favor.", en: "As for the luggage, please don't put it here." },
          { q: "あそこに{自転車|じてんしゃ}を{止|と}めないでください。➔", a: "{自転車|じてんしゃ}はあそこに{止|と}めないでください。", romaji: "Jitensha wa asoko ni tomenaide kudasai.", pt: "A bicicleta, não estacione ali por favor.", en: "As for the bicycle, please don't park it there." }
        ]
      },
      {
        type: "B7",
        desc: "7. 「〜までに」を{使|つか}いなさい。(Use ~madeni com obrigação)", desc_en: "7. 「〜までに」を{使|つか}いなさい。(Use ~madeni with obligation)",
        questions: [
          { q: "{土曜日|どようび}・{本|ほん}を{返|かえ}します ➔", a: "{土曜日|どようび}までに{本|ほん}を{返|かえ}さなければなりません。", romaji: "Doyoubi madeni hon o kaesanakereba narimasen.", pt: "Até sábado, tenho que devolver o livro.", en: "By Saturday, I have to return the book." },
          { q: "5{時|じ}・{帰|かえ}ります ➔", a: "5{時|じ}までに{帰|かえ}らなければなりません。", romaji: "Goji madeni kaeranakereba narimasen.", pt: "Até as 5 horas, tenho que voltar.", en: "By 5 o'clock, I have to be back." }
        ]
      }
    ]
  },
  renshuuC: {
    title: "{練習|れんしゅう}C (Prática C / Conversação)", title_en: "{練習|れんしゅう}C (Practice C / Conversation)",
    exercises: [
      {
        type: "C1",
        desc: "1. {医者|いしゃ}と{患者|かんじゃ}の{会話|かいわ} (Médico e Paciente)", desc_en: "1. {医者|いしゃ}と{患者|かんじゃ}の{会話|かいわ} (Doctor and patient)",
        questions: [
          { q: "A: お{風呂|ふろ}に{入|はい}ってもいいですか。<br>B: いいえ、[{入|はい}ります ➔ ＿＿＿＿＿＿＿＿＿]。<br>A: はい、わかりました。", a: "{入|はい}らないでください", romaji: "hairanaide kudasai", pt: "Não entre, por favor.", en: "Please don't come in." }
        ]
      },
      {
        type: "C2",
        desc: "2. {理由|りゆう}と{義務|ぎむ} (Motivo e Obrigação)", desc_en: "2. {理由|りゆう}と{義務|ぎむ} (Reason and obligation)",
        questions: [
          { q: "A: これから{飲|の}みに{行|い}きませんか。<br>B: すみません。{明日|あした}テストがありますから、[{勉強|べんきょう}します ➔ ＿＿＿＿＿＿＿＿＿]。<br>A: そうですか。じゃ、また。", a: "{勉強|べんきょう}しなければなりません", romaji: "benkyou shinakereba narimasen", pt: "Tenho que estudar.", en: "I have to study." }
        ]
      }
    ]
  },
  mondai: {
    title: "{問題|もんだい} (Problemas / Avaliação)", title_en: "{問題|もんだい} (Problems / Assessment)",
    exercises: [
      {
        type: "M1",
        desc: "1. {助詞|じょし}を{入|い}れなさい (Preencha as partículas: は、を、に、までに)", desc_en: "1. {助詞|じょし}を{入|い}れなさい (Fill in the particles: は、を、に、までに)",
        questions: [
          { q: "{病気|びょうき}ですから、お{風呂|ふろ}（　　）{入|はい}らないでください。", a: "に", romaji: "ni", pt: "Partícula NI (entrar no banho)", en: "Particle NI (getting into the bath)" },
          { q: "{金曜日|きんようび}（　　）レポートを{出|だ}さなければなりません。", a: "までに", romaji: "madeni", pt: "Partícula MADENI (até o prazo limite)", en: "Particle MADENI (up to the deadline)" },
          { q: "{辞書|じしょ}（　　）{持|も}って{来|き}なくてもいいです。", a: "を", romaji: "o", pt: "Partícula O (objeto direto)", en: "Particle O (direct object)" }
        ]
      },
      {
        type: "M2",
        desc: "2. {正|ただ}しい{形|けい}に{変|か}えなさい (Conjugue o verbo corretamente)", desc_en: "2. {正|ただ}しい{形|けい}に{変|か}えなさい (Conjugate the verb correctly)",
        questions: [
          { q: "ここに{車|くるま}を（{止|と}めます ➔ ＿＿＿＿＿）でください。", a: "{止|と}めない", romaji: "tomenai", pt: "tomenai" },
          { q: "{明日|あした}は{休|やす}みですから、{早|はや}く（{起|お}きます ➔ ＿＿＿＿＿）くてもいいです。", a: "{起|お}きな", romaji: "okina", pt: "okina (okina-kutemo iidesu)" },
          { q: "{毎日|まいにち}{日本語|にほんご}を（{勉強|べんきょう}します ➔ ＿＿＿＿＿）ければなりません。", a: "{勉強|べんきょう}しな", romaji: "benkyou shina", pt: "benkyoushina (benkyoushina-kereba narimasen)" }
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
          { tokens: ["{写真|しゃしん}を", "{撮|と}らないで", "ください。"], pt: "Por favor, não tire fotos.", en: "Please don't take photos.", romaji: "Shashin o toranaide kudasai." },
          { tokens: ["パスポートを", "{見|み}せなければ", "なりません。"], pt: "Tenho que mostrar o passaporte.", en: "I have to show my passport.", romaji: "Pasupooto o misenakereba narimasen." },
          { tokens: ["{日曜日|にちようび}は", "{早|はや}く", "{起|お}きなくても", "いいです。"], pt: "No domingo, não preciso acordar cedo.", en: "On Sunday, I don't have to wake up early.", romaji: "Nichiyoubi wa hayaku okinakutemo ii desu." },
          { tokens: ["そこに", "{入|はい}らないで", "ください。"], pt: "Por favor, não entre aí.", en: "Please don't go in there.", romaji: "Soko ni hairanaide kudasai." },
          { tokens: ["この", "{薬|くすり}を", "{飲|の}まなければ", "なりませんか。"], pt: "Tenho que tomar este remédio?", en: "Do I have to take this medicine?", romaji: "Kono kusuri o nomanakereba narimasen ka." }
        ]
      }
    ]
  }
};
