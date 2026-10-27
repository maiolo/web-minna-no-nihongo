// Dados da lição 17. Formato descrito no README.md.
window.lessonData = {
  vocab: {
    title: "{語彙|ごい} (Vocabulário)",
    items: [
      { jp: "{覚|おぼ}えます", romaji: "oboemasu", pt: "Memorizar, lembrar" },
      { jp: "{忘|わす}れます", romaji: "wasuremasu", pt: "Esquecer" },
      { jp: "なくします", romaji: "nakushimasu", pt: "Perder (algo)" },
      { jp: "{払|はら}います", romaji: "haraimasu", pt: "Pagar" },
      { jp: "{返|かえ}します", romaji: "kaeshimasu", pt: "Devolver" },
      { jp: "{出|で}かけます", romaji: "dekakemasu", pt: "Sair (de casa)" },
      { jp: "{脱|ぬ}ぎます", romaji: "nugimasu", pt: "Tirar (roupa, sapatos)" },
      { jp: "{持|も}って{行|い}きます", romaji: "motte ikimasu", pt: "Levar (algo)" },
      { jp: "{持|も}って{来|き}ます", romaji: "motte kimasu", pt: "Trazer (algo)" },
      { jp: "{心配|しんぱい}します", romaji: "shinpai shimasu", pt: "Preocupar-se" },
      { jp: "{残業|ざんぎょう}します", romaji: "zangyou shimasu", pt: "Fazer hora extra" },
      { jp: "{出張|しゅっちょう}します", romaji: "shucchou shimasu", pt: "Fazer viagem de negócios" },
      { jp: "{薬|くすり}", romaji: "kusuri", pt: "Remédio" },
      { jp: "お{風呂|ふろ}", romaji: "ofuro", pt: "Banho (banheira)" },
      { jp: "{大切|たいせつ} [な]", romaji: "taisetsu [na]", pt: "Importante, precioso" },
      { jp: "{大丈夫|だいじょうぶ} [な]", romaji: "daijoubu [na]", pt: "Tudo bem, sem problemas" },
      { jp: "{危|あぶ}ない", romaji: "abunai", pt: "Perigoso" },
      { jp: "{禁煙|きんえん}", romaji: "kinen", pt: "Proibido fumar" },
      { jp: "{保険証|ほけんしょう}", romaji: "hokenshou", pt: "Cartão de seguro (saúde)" },
      { jp: "{熱|ねつ}", romaji: "netsu", pt: "Febre" },
      { jp: "{病気|びょうき}", romaji: "byouki", pt: "Doença" },
      { jp: "〜までに", romaji: "~madeni", pt: "Até ~ (prazo limite)" },
      { jp: "ですから", romaji: "desukara", pt: "Por isso, portanto" }
    ]
  },
  gramatica: {
    title: "{文法|ぶんぽう} (Gramática)",
    intro: "Cinco pontos. A forma ない vem primeiro: os três seguintes são construídos em cima dela, e o último (までに) completa a ideia de prazo.",
    points: [
      {
        id: "nai-kei",
        title: "{動詞|どうし}の ない{形|けい} (forma ない)",
        pat: "V-ます ➔ V-ない",
        short: "negativa informal, base dos três pontos seguintes",
        mean: "A forma ない é a negativa informal ({書|か}かない = não escrevo) e a base de 〜ないでください, 〜なければなりません e 〜なくてもいいです.",
        rule: "Parta da forma ます. No grupo 1, a sílaba da coluna i antes de ます passa para a coluna a, e acrescenta-se <strong>ない</strong>.",
        form: [
          { label: "{第|だい}１グループ (Grupo 1)", text: "Coluna i ➔ coluna a, mais <strong>ない</strong>.", ex: [
            { tag: "い ➔ わ", jp: "{買|か}います ➔ {買|か}<strong>わない</strong>", pt: "comprar (い vira わ, não あ)" },
            { tag: "き ➔ か", jp: "{書|か}きます ➔ {書|か}<strong>かない</strong>", pt: "escrever" },
            { tag: "ぎ ➔ が", jp: "{急|いそ}ぎます ➔ {急|いそ}<strong>がない</strong>", romaji: "isogimasu ➔ isoganai", pt: "apressar-se" },
            { tag: "し ➔ さ", jp: "{話|はな}します ➔ {話|はな}<strong>さない</strong>", pt: "falar" },
            { tag: "ち ➔ た", jp: "{待|ま}ちます ➔ {待|ま}<strong>たない</strong>", pt: "esperar" },
            { tag: "み ➔ ま", jp: "{読|よ}みます ➔ {読|よ}<strong>まない</strong>", pt: "ler" },
            { tag: "び ➔ ば", jp: "{呼|よ}びます ➔ {呼|よ}<strong>ばない</strong>", pt: "chamar" },
            { tag: "り ➔ ら", jp: "{帰|かえ}ります ➔ {帰|かえ}<strong>らない</strong>", pt: "voltar" },
            { tag: "exceção", jp: "あります ➔ <strong>ない</strong>", pt: "existir (não existe あらない)" }
          ] },
          { label: "{第|だい}２グループ (Grupo 2)", text: "Tire ます e acrescente <strong>ない</strong>.", ex: [
            { jp: "{食|た}べます ➔ {食|た}べ<strong>ない</strong>", pt: "comer" },
            { jp: "{見|み}ます ➔ {見|み}<strong>ない</strong>", pt: "ver" }
          ] },
          { label: "{第|だい}３グループ (Grupo 3)", text: "Irregulares: só dois verbos.", ex: [
            { jp: "します ➔ し<strong>ない</strong>", pt: "fazer" },
            { jp: "{来|き}ます ➔ {来|こ}<strong>ない</strong>", pt: "vir (o kanji muda de き para こ)" }
          ] }
        ],
        ex: [
          { jp: "{朝|あさ}ごはんを {食|た}べない。", pt: "Não tomo café da manhã. (informal)" },
          { jp: "{今日|きょう}^は {会社|かいしゃ}^へ {行|い}かない。", pt: "Hoje não vou à empresa. (informal)" },
          { jp: "お{酒|さけ}を {飲|の}まない。", pt: "Não bebo álcool. (informal)" }
        ],
        contrast: {
          rows: [
            { label: "{丁寧|ていねい}な {形|かたち} (ません)", jp: "{毎日|まいにち} {肉|にく}を {食|た}べません。", pt: "Educado: com desconhecidos, no trabalho." },
            { label: "ない{形|けい} (informal)", jp: "{毎日|まいにち} {肉|にく}を {食|た}べない。", pt: "Informal: com amigos e família. É também a base dos pontos seguintes." }
          ],
          note: "A forma ない diz o mesmo que ません, só muda o nível de formalidade."
        },
        trap: [
          "Os verbos em う mudam para わ, não para あ: {買|か}います ➔ {買|か}<strong>わ</strong>ない.",
          "ある não vira あらない: a negativa é só ない.",
          "{来|き}る muda de leitura: {来|き}ます ➔ {来|こ}ない."
        ]
      },
      {
        id: "nai-de-kudasai",
        title: "{動詞|どうし} ない{形|けい} ＋ でください",
        pat: "V-ない でください",
        short: "por favor, não faça",
        mean: "Pedido educado para a outra pessoa não fazer algo: “por favor, não ~”.",
        rule: "Forma ない + <strong>でください</strong>: {忘|わす}れない ➔ {忘|わす}れないでください.",
        ex: [
          { jp: "{写真|しゃしん}を{撮|と}らないでください。", romaji: "Shashin o toranaide kudasai.", pt: "Por favor, não tire fotos." },
          { jp: "{忘|わす}れないでください。", romaji: "Wasurenaide kudasai.", pt: "Por favor, não esqueça." },
          { jp: "そこに{入|はい}らないでください。<br>…はい、わかりました。", romaji: "Soko ni hairanaide kudasai. ...Hai, wakarimashita.", pt: "Por favor, não entre aí. ...Sim, entendi." },
          { jp: "{荷物|にもつ}はどこに{置|お}きますか。<br>…{荷物|にもつ}はそこに{置|お}かないでください。", romaji: "Nimotsu wa doko ni okimasu ka. ...Nimotsu wa soko ni okanaide kudasai.", pt: "Onde coloco a bagagem? ...Quanto à bagagem, por favor não coloque aí." }
        ],
        contrast: {
          rows: [
            { label: "V-て ください (pedir que faça)", jp: "ここで {写真|しゃしん}を {撮|と}ってください。", pt: "Por favor, tire uma foto aqui." },
            { label: "V-ない でください (pedir que não faça)", jp: "ここで {写真|しゃしん}を {撮|と}らないでください。", pt: "Por favor, não tire fotos aqui." }
          ],
          note: "É o mesmo ください, só que com ない + で no lugar de て."
        },
        trap: [
          "Não é ないてください: o certo é ない + <strong>で</strong>ください.",
          "Não confunda com 〜なくてもいいです (veja o ponto 4): ないでください pede que a pessoa não faça; なくてもいいです diz que ela não precisa fazer."
        ]
      },
      {
        id: "nakereba",
        title: "{動詞|どうし} ない{形|けい} ＋ なければなりません",
        pat: "V-なければなりません",
        short: "ter que / precisar fazer",
        mean: "Expressa obrigação: “tenho que ~”, “preciso ~”.",
        rule: "Tire o い final de ない e acrescente ければなりません: {飲|の}まない ➔ {飲|の}まなければなりません. Pergunta: 〜なければなりませんか。",
        form: [
          { label: "Passo a passo", text: "Do ます até a obrigação.", ex: [
            { jp: "{飲|の}みます ➔ {飲|の}まない ➔ {飲|の}ま<strong>なければなりません</strong>", romaji: "nomimasu ➔ nomanai ➔ nomanakereba narimasen", pt: "beber ➔ ter que beber" },
            { jp: "{来|き}ます ➔ {来|こ}ない ➔ {来|こ}<strong>なければなりません</strong>", romaji: "kimasu ➔ konai ➔ konakereba narimasen", pt: "vir ➔ ter que vir" }
          ] }
        ],
        ex: [
          { jp: "パスポートを{見|み}せなければなりません。", romaji: "Pasupooto o misenakereba narimasen.", pt: "Tenho que mostrar o passaporte." },
          { jp: "{薬|くすり}を{飲|の}まなければなりません。", romaji: "Kusuri o nomanakereba narimasen.", pt: "Tenho que tomar o remédio." },
          { jp: "この{薬|くすり}を{飲|の}まなければなりませんか。<br>…はい、{飲|の}まなければなりません。", romaji: "Kono kusuri o nomanakereba narimasen ka. ...Hai, nomanakereba narimasen.", pt: "Tenho que tomar este remédio? ...Sim, tem que tomar." },
          { jp: "{毎日|まいにち} {勉強|べんきょう}しなければなりません。", romaji: "Mainichi benkyou shinakereba narimasen.", pt: "Preciso estudar todos os dias." }
        ],
        contrast: {
          rows: [
            { label: "V-て ください (pedido)", jp: "{薬|くすり}を {飲|の}んでください。", pt: "Por favor, tome o remédio. (alguém pede)" },
            { label: "V-なければなりません (obrigação)", jp: "{薬|くすり}を {飲|の}まなければなりません。", pt: "Tenho que tomar o remédio. (é necessário)" }
          ],
          note: "ください pede algo a alguém. なければなりません diz o que é necessário, sem pedir nada a ninguém."
        },
        trap: [
          "Parece uma negativa, mas significa obrigação (“se eu não fizer, não está certo”). Não traduza como “não devo fazer”.",
          "Para responder “não” a uma pergunta com なければなりませんか, não use いいえ、〜なければなりません. O certo é いいえ、〜なくてもいいです (“não precisa”)."
        ]
      },
      {
        id: "nakutemo",
        title: "{動詞|どうし} ない{形|けい} ＋ なくてもいいです",
        pat: "V-なくても いいです",
        short: "não precisa fazer",
        mean: "Diz que a obrigação não existe: “não precisa ~”, “não é necessário ~”.",
        rule: "Tire o い de ない e acrescente くても いいです: {来|こ}ない ➔ {来|こ}なくても いいです. Pergunta: 〜なくても いいですか。",
        ex: [
          { jp: "{日曜日|にちようび}は{早|はや}く{起|お}きなくてもいいです。", romaji: "Nichiyoubi wa hayaku okinakutemo ii desu.", pt: "No domingo, não preciso acordar cedo." },
          { jp: "{明日|あした} {来|こ}なくてもいいです。", romaji: "Ashita konakutemo ii desu.", pt: "Não precisa vir amanhã." },
          { jp: "{明日|あした}も{来|き}なければなりませんか。<br>…いいえ、{来|こ}なくてもいいです。", romaji: "Ashita mo kinakereba narimasen ka. ...Iie, konakutemo ii desu.", pt: "Tenho que vir amanhã também? ...Não, não precisa vir." },
          { jp: "{今日|きょう}は {傘|かさ}を {持|も}たなくてもいいです。", romaji: "Kyou wa kasa o motanakutemo ii desu.", pt: "Hoje não precisa levar guarda-chuva." }
        ],
        contrast: {
          rows: [
            { label: "なければなりません (obrigação)", jp: "{明日|あした}も {来|こ}なければなりません。", pt: "Preciso vir amanhã também." },
            { label: "なくても いいです (sem obrigação)", jp: "{明日|あした}は {来|こ}なくてもいいです。", pt: "Amanhã não precisa vir." }
          ],
          note: "São opostos: um diz que é preciso, o outro diz que não é."
        },
        trap: [
          "Não confunda com 〜ないでください: {来|こ}なくてもいいです = “não precisa vir”; {来|こ}ないでください = “por favor, não venha”. O primeiro dispensa, o segundo pede.",
          "O い de ない cai: certo なくても, errado ないくても."
        ]
      },
      {
        id: "made-ni",
        title: "{名詞|めいし} ({時間|じかん}) ＋ までに",
        pat: "{時間|じかん}までに V",
        short: "até (prazo limite)",
        mean: "Marca o prazo final em que algo precisa estar feito: “até sexta-feira, no máximo”. A ação acontece uma vez, em algum momento antes do limite.",
        rule: "Palavra de tempo + までに + verbo. Combina bem com なければなりません.",
        ex: [
          { jp: "{金曜日|きんようび}までに レポートを{出|だ}さなければなりません。", romaji: "Kinyoubi made ni repooto o dasanakereba narimasen.", pt: "Tenho que entregar o relatório até sexta-feira." },
          { jp: "{五時|ごじ}までに {帰|かえ}ります。", romaji: "Goji made ni kaerimasu.", pt: "Volto até as cinco." },
          { jp: "{明日|あした}までに {本|ほん}を {返|かえ}してください。", romaji: "Ashita made ni hon o kaeshite kudasai.", pt: "Por favor, devolva o livro até amanhã." }
        ],
        contrast: {
          rows: [
            { label: "まで (duração)", jp: "{五時|ごじ}まで {働|はたら}きます。", pt: "Trabalho até as cinco (continuo trabalhando até lá)." },
            { label: "までに (prazo)", jp: "{五時|ごじ}までに {帰|かえ}ります。", pt: "Volto até as cinco (em algum momento antes disso)." }
          ],
          note: "まで: a ação dura até aquele momento. までに: a ação acontece uma vez, em algum ponto antes daquele momento."
        },
        trap: [
          "Em português os dois são “até”. Escolha pelo verbo: o que dura (trabalhar, esperar, dormir) pede まで; o que acontece num instante (entregar, voltar, chegar) pede までに.",
          "までに dá o limite, não a hora exata: {五時|ごじ}までに {帰|かえ}ります pode ser às três, às quatro ou às cinco."
        ]
      }
    ]
  },
  renshuuB: {
    title: "{練習|れんしゅう}B (Prática B)",
    exercises: [
      {
        type: "B1",
        desc: "1. ない{形|けい}に{変|か}えなさい。(Transforme para a forma NAI)",
        questions: [
          { q: "{書|か}きます ➔", a: "{書|か}かない", romaji: "kakanai", pt: "Não escrever" },
          { q: "{急|いそ}ぎます ➔", a: "{急|いそ}がない", romaji: "isoganai", pt: "Não se apressar" },
          { q: "{待|ま}ちます ➔", a: "{待|ま}たない", romaji: "matanai", pt: "Não esperar" },
          { q: "{呼|よ}びます ➔", a: "{呼|よ}ばない", romaji: "yobanai", pt: "Não chamar" },
          { q: "{入|はい}ります ➔", a: "{入|はい}らない", romaji: "hairanai", pt: "Não entrar" },
          { q: "{食|た}べます ➔", a: "{食|た}べない", romaji: "tabenai", pt: "Não comer" },
          { q: "します ➔", a: "しない", romaji: "shinai", pt: "Não fazer" },
          { q: "{来|き}ます ➔", a: "{来|こ}ない", romaji: "konai", pt: "Não vir" }
        ]
      },
      {
        type: "B2",
        desc: "2. 〜ないでください を{使|つか}いなさい。(Use V-naide kudasai)",
        questions: [
          { q: "{写真|しゃしん}を{撮|と}ります ➔", a: "{写真|しゃしん}を{撮|と}らないでください。", romaji: "Shashin o toranaide kudasai.", pt: "Por favor, não tire fotos." },
          { q: "ここでタバコを{吸|す}います ➔", a: "ここでタバコを{吸|す}わないでください。", romaji: "Koko de tabako o suwanaide kudasai.", pt: "Por favor, não fume aqui." },
          { q: "{車|くるま}を{止|と}めます ➔", a: "{車|くるま}を{止|と}めないでください。", romaji: "Kuruma o tomenaide kudasai.", pt: "Por favor, não estacione o carro." },
          { q: "パスポートをなくします ➔", a: "パスポートをなくさないでください。", romaji: "Pasupooto o nakusanaide kudasai.", pt: "Por favor, não perca o passaporte." }
        ]
      },
      {
        type: "B3",
        desc: "3. 〜なければなりません を{使|つか}いなさい。(Use V-nakereba narimasen)",
        questions: [
          { q: "{薬|くすり}を{飲|の}みます ➔", a: "{薬|くすり}を{飲|の}まなければなりません。", romaji: "Kusuri o nomanakereba narimasen.", pt: "Tenho que tomar o remédio." },
          { q: "{本|ほん}を{返|かえ}します ➔", a: "{本|ほん}を{返|かえ}さなければなりません。", romaji: "Hon o kaesanakereba narimasen.", pt: "Tenho que devolver o livro." },
          { q: "{毎日|まいにち}{勉強|べんきょう}します ➔", a: "{毎日|まいにち}{勉強|べんきょう}しなければなりません。", romaji: "Mainichi benkyou shinakereba narimasen.", pt: "Tenho que estudar todos os dias." },
          { q: "{早|はや}く{帰|かえ}ります ➔", a: "{早|はや}く{帰|かえ}らなければなりません。", romaji: "Hayaku kaeranakereba narimasen.", pt: "Tenho que voltar cedo." }
        ]
      },
      {
        type: "B4",
        desc: "4. {質問|しつもん}に{答|こた}えなさい。(Responda às perguntas: はい / いいえ)",
        questions: [
          { q: "{残業|ざんぎょう}しなければなりませんか。(はい) ➔", a: "はい、{残業|ざんぎょう}しなければなりません。", romaji: "Hai, zangyou shinakereba narimasen.", pt: "Sim, tenho que fazer hora extra." },
          { q: "{名前|なまえ}を{書|か}かなければなりませんか。(はい) ➔", a: "はい、{書|か}かなければなりません。", romaji: "Hai, kakanakereba narimasen.", pt: "Sim, tenho que escrever." },
          { q: "{急|いそ}がなければなりませんか。(いいえ) ➔", a: "いいえ、{急|いそ}がなくてもいいです。", romaji: "Iie, isoganutemo ii desu.", pt: "Não, não precisa se apressar." },
          { q: "{靴|くつ}を{脱|ぬ}がなければなりませんか。(いいえ) ➔", a: "いいえ、{脱|ぬ}がなくてもいいです。", romaji: "Iie, nuganakutemo ii desu.", pt: "Não, não precisa tirar os sapatos." }
        ]
      },
      {
        type: "B5",
        desc: "5. 〜なくてもいいです を{使|つか}いなさい。(Use V-nakutemo ii desu)",
        questions: [
          { q: "{明日|あした}{来|き}ます ➔", a: "{明日|あした}{来|こ}なくてもいいです。", romaji: "Ashita konakutemo ii desu.", pt: "Não precisa vir amanhã." },
          { q: "レポートを{出|だ}します ➔", a: "レポートを{出|だ}さなくてもいいです。", romaji: "Repooto o dasanakutemo ii desu.", pt: "Não precisa entregar o relatório." }
        ]
      },
      {
        type: "B6",
        desc: "6. 「〜は」を{使|つか}って{文|ぶん}を{作|つく}りなさい。(Use o tópico 'wa')",
        questions: [
          { q: "ここに{荷物|にもつ}を{置|お}かないでください。➔", a: "{荷物|にもつ}はここに{置|お}かないでください。", romaji: "Nimotsu wa koko ni okanaide kudasai.", pt: "A bagagem, não coloque aqui por favor." },
          { q: "あそこに{自転車|じてんしゃ}を{止|と}めないでください。➔", a: "{自転車|じてんしゃ}はあそこに{止|と}めないでください。", romaji: "Jitensha wa asoko ni tomenaide kudasai.", pt: "A bicicleta, não estacione ali por favor." }
        ]
      },
      {
        type: "B7",
        desc: "7. 「〜までに」を{使|つか}いなさい。(Use ~madeni com obrigação)",
        questions: [
          { q: "{土曜日|どようび}・{本|ほん}を{返|かえ}します ➔", a: "{土曜日|どようび}までに{本|ほん}を{返|かえ}さなければなりません。", romaji: "Doyoubi madeni hon o kaesanakereba narimasen.", pt: "Até sábado, tenho que devolver o livro." },
          { q: "5{時|じ}・{帰|かえ}ります ➔", a: "5{時|じ}までに{帰|かえ}らなければなりません。", romaji: "Goji madeni kaeranakereba narimasen.", pt: "Até as 5 horas, tenho que voltar." }
        ]
      }
    ]
  },
  renshuuC: {
    title: "{練習|れんしゅう}C (Prática C / Conversação)",
    exercises: [
      {
        type: "C1",
        desc: "1. {医者|いしゃ}と{患者|かんじゃ}の{会話|かいわ} (Médico e Paciente)",
        questions: [
          { q: "A: お{風呂|ふろ}に{入|はい}ってもいいですか。<br>B: いいえ、[{入|はい}ります ➔ ＿＿＿＿＿＿＿＿＿]。<br>A: はい、わかりました。", a: "{入|はい}らないでください", romaji: "hairanaide kudasai", pt: "Não entre, por favor." }
        ]
      },
      {
        type: "C2",
        desc: "2. {理由|りゆう}と{義務|ぎむ} (Motivo e Obrigação)",
        questions: [
          { q: "A: これから{飲|の}みに{行|い}きませんか。<br>B: すみません。{明日|あした}テストがありますから、[{勉強|べんきょう}します ➔ ＿＿＿＿＿＿＿＿＿]。<br>A: そうですか。じゃ、また。", a: "{勉強|べんきょう}しなければなりません", romaji: "benkyou shinakereba narimasen", pt: "Tenho que estudar." }
        ]
      }
    ]
  },
  mondai: {
    title: "{問題|もんだい} (Problemas / Avaliação)",
    exercises: [
      {
        type: "M1",
        desc: "1. {助詞|じょし}を{入|い}れなさい (Preencha as partículas: は、を、に、までに)",
        questions: [
          { q: "{病気|びょうき}ですから、お{風呂|ふろ}（　　）{入|はい}らないでください。", a: "に", romaji: "ni", pt: "Partícula NI (entrar no banho)" },
          { q: "{金曜日|きんようび}（　　）レポートを{出|だ}さなければなりません。", a: "までに", romaji: "madeni", pt: "Partícula MADENI (até o prazo limite)" },
          { q: "{辞書|じしょ}（　　）{持|も}って{来|き}なくてもいいです。", a: "を", romaji: "o", pt: "Partícula O (objeto direto)" }
        ]
      },
      {
        type: "M2",
        desc: "2. {正|ただ}しい{形|けい}に{変|か}えなさい (Conjugue o verbo corretamente)",
        questions: [
          { q: "ここに{車|くるま}を（{止|と}めます ➔ ＿＿＿＿＿）でください。", a: "{止|と}めない", romaji: "tomenai", pt: "tomenai" },
          { q: "{明日|あした}は{休|やす}みですから、{早|はや}く（{起|お}きます ➔ ＿＿＿＿＿）くてもいいです。", a: "{起|お}きな", romaji: "okina", pt: "okina (okina-kutemo iidesu)" },
          { q: "{毎日|まいにち}{日本語|にほんご}を（{勉強|べんきょう}します ➔ ＿＿＿＿＿）ければなりません。", a: "{勉強|べんきょう}しな", romaji: "benkyou shina", pt: "benkyoushina (benkyoushina-kereba narimasen)" }
        ]
      }
    ]
  },
  montar: {
    title: "{組|く}み{立|た}て (Montar a frase)",
    exercises: [
      {
        desc: "Toque nas palavras na ordem certa para montar a frase.",
        questions: [
          { tokens: ["{写真|しゃしん}を", "{撮|と}らないで", "ください。"], pt: "Por favor, não tire fotos.", romaji: "Shashin o toranaide kudasai." },
          { tokens: ["パスポートを", "{見|み}せなければ", "なりません。"], pt: "Tenho que mostrar o passaporte.", romaji: "Pasupooto o misenakereba narimasen." },
          { tokens: ["{日曜日|にちようび}は", "{早|はや}く", "{起|お}きなくても", "いいです。"], pt: "No domingo, não preciso acordar cedo.", romaji: "Nichiyoubi wa hayaku okinakutemo ii desu." },
          { tokens: ["そこに", "{入|はい}らないで", "ください。"], pt: "Por favor, não entre aí.", romaji: "Soko ni hairanaide kudasai." },
          { tokens: ["この", "{薬|くすり}を", "{飲|の}まなければ", "なりませんか。"], pt: "Tenho que tomar este remédio?", romaji: "Kono kusuri o nomanakereba narimasen ka." }
        ]
      }
    ]
  }
};
