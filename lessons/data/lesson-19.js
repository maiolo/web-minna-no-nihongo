// Dados da lição 19. Formato descrito no README.md.
window.lessonData = {
  vocab: {
    title: "{語彙|ごい} (Vocabulário)", title_en: "{語彙|ごい} (Vocabulary)",
    items: [
      { jp: "{登|のぼ}ります", romaji: "noborimasu", pt: "Subir, escalar (ex: montanha)", en: "To climb (e.g. a mountain)" },
      { jp: "{泊|と}まります", romaji: "tomarimasu", pt: "Hospedar-se, pernoitar", en: "To stay overnight, to lodge" },
      { jp: "{掃除|そうじ}します", romaji: "souji shimasu", pt: "Limpar, fazer faxina", en: "To clean, to do the cleaning" },
      { jp: "{洗濯|せんたく}します", romaji: "sentaku shimasu", pt: "Lavar (roupas)", en: "To wash (clothes)" },
      { jp: "なります", romaji: "narimasu", pt: "Tornar-se, ficar, passar a ser", en: "To become, to turn into" },
      { jp: "{眠|ねむ}い", romaji: "nemui", pt: "Com sono", en: "Sleepy" },
      { jp: "{強|つよ}い", romaji: "tsuyoi", pt: "Forte", en: "Strong" },
      { jp: "{弱|よわ}い", romaji: "yowai", pt: "Fraco", en: "Weak" },
      { jp: "{練習|れんしゅう}", romaji: "renshuu", pt: "Prática, treino", en: "Practice, training" },
      { jp: "ゴルフ", romaji: "gorufu", pt: "Golfe", en: "Golf" },
      { jp: "{相撲|すもう}", romaji: "sumou", pt: "Sumô", en: "Sumo" },
      { jp: "お{茶|ちゃ}", romaji: "ocha", pt: "Chá (cerimônia do chá)", en: "Tea (tea ceremony)" },
      { jp: "{日|ひ}", romaji: "hi", pt: "Dia", en: "Day" },
      { jp: "{調子|ちょうし}", romaji: "choushi", pt: "Condição, estado (de saúde, máquina)", en: "Condition, state (of health, of a machine)" },
      { jp: "{一度|いちど}", romaji: "ichido", pt: "Uma vez", en: "Once" },
      { jp: "{一度|いちど}も", romaji: "ichidomo", pt: "Nenhuma vez, nunca (usado com negativa)", en: "Not even once, never (used with a negative)" },
      { jp: "だんだん", romaji: "dandan", pt: "Gradualmente, aos poucos", en: "Gradually, little by little" },
      { jp: "もうすぐ", romaji: "mousugu", pt: "Em breve, logo", en: "Soon, shortly" },
      { jp: "おかげさまで", romaji: "okagesamade", pt: "Graças a Deus / Graças a você (resposta a 'como vai?')", en: "Thank goodness / Thanks to you (reply to 'how are you?')" },
      { jp: "ダイエット", romaji: "daietto", pt: "Dieta", en: "Diet" }
    ]
  },
  gramatica: {
    title: "{文法|ぶんぽう} (Gramática)", title_en: "{文法|ぶんぽう} (Grammar)",
    intro: "Quatro pontos nesta lição. Cada cartão traz o modelo de frase, a explicação, os exemplos, uma comparação com o que é parecido e os erros mais comuns.", intro_en: "Four points in this lesson. Each card gives the sentence pattern, the explanation, the examples, a comparison with what looks similar and the most common mistakes.",
    points: [
      {
        id: "ta-kei",
        title: "{動詞|どうし}の た{形|けい} (forma た)", title_en: "{動詞|どうし}の た{形|けい} (た form)",
        pat: "V-ます ➔ V-た",
        short: "a base dos dois pontos seguintes", short_en: "the base of the next two points",
        mean: "A forma た é o passado informal (「{食|た}べた」 = comi). Nesta lição ela é a base de 〜た ことが あります e de 〜たり.", mean_en: "The た form is the informal past (「{食|た}べた」 = I ate). In this lesson it is the base of 〜た ことが あります and 〜たり.",
        rule: "A conjugação é a mesma da forma て: troque て por た e で por だ. Quem já domina a forma て não tem nada novo para decorar.", rule_en: "The conjugation is the same as the て form: swap て for た and で for だ. If you already know the て form, there is nothing new to memorize.",
        form: [
          { label: "{第|だい}１グループ (Grupo 1)", label_en: "{第|だい}１グループ (Group 1)", text: "Olhe a sílaba que vem antes de ます.", text_en: "Look at the syllable that comes before ます.", ex: [
            { tag: "い・ち・り ➔ った", jp: "{買|か}います ➔ {買|か}<strong>った</strong>", pt: "comprar", en: "to buy" },
            { tag: "い・ち・り ➔ った", jp: "{待|ま}ちます ➔ {待|ま}<strong>った</strong>", pt: "esperar", en: "to wait" },
            { tag: "い・ち・り ➔ った", jp: "{帰|かえ}ります ➔ {帰|かえ}<strong>った</strong>", pt: "voltar", en: "to return" },
            { tag: "み・び・に ➔ んだ", jp: "{飲|の}みます ➔ {飲|の}<strong>んだ</strong>", pt: "beber", en: "to drink" },
            { tag: "み・び・に ➔ んだ", jp: "{遊|あそ}びます ➔ {遊|あそ}<strong>んだ</strong>", pt: "brincar", en: "to play" },
            { tag: "き ➔ いた", jp: "{書|か}きます ➔ {書|か}<strong>いた</strong>", pt: "escrever", en: "to write" },
            { tag: "ぎ ➔ いだ", jp: "{急|いそ}ぎます ➔ {急|いそ}<strong>いだ</strong>", pt: "apressar-se", en: "to hurry" },
            { tag: "し ➔ した", jp: "{話|はな}します ➔ {話|はな}<strong>した</strong>", pt: "falar", en: "to speak" },
            { tag: "exceção ➔ った", tag_en: "exception ➔ った", jp: "{行|い}きます ➔ {行|い}<strong>った</strong>", pt: "ir (não é {行|い}いた)", en: "to go (not {行|い}いた)" }
          ] },
          { label: "{第|だい}２グループ (Grupo 2)", label_en: "{第|だい}２グループ (Group 2)", text: "Tire ます e acrescente <strong>た</strong>.", text_en: "Drop ます and add <strong>た</strong>.", ex: [
            { jp: "{食|た}べます ➔ {食|た}べ<strong>た</strong>", pt: "comer", en: "to eat" },
            { jp: "{見|み}ます ➔ {見|み}<strong>た</strong>", pt: "ver", en: "to see" }
          ] },
          { label: "{第|だい}３グループ (Grupo 3)", label_en: "{第|だい}３グループ (Group 3)", text: "Irregulares: só dois verbos.", text_en: "Irregulars: only two verbs.", ex: [
            { jp: "します ➔ <strong>した</strong>", pt: "fazer", en: "to do" },
            { jp: "{来|き}ます ➔ {来|き}<strong>た</strong>", pt: "vir (lê-se きた)", en: "to come (read きた)" }
          ] }
        ],
        ex: [
          { jp: "{昨日|きのう}、{映画|えいが}を {見|み}た。", pt: "Ontem assisti a um filme.", en: "I watched a movie yesterday." },
          { jp: "{朝|あさ}ごはんを {食|た}べた？", pt: "Você tomou café da manhã? (pergunta informal)", en: "Did you have breakfast? (informal question)" },
          { jp: "{友|とも}だちと {京都|きょうと}^へ {行|い}った。", romaji: "Tomodachi to Kyouto e itta.", pt: "Fui a Kyoto com um amigo.", en: "I went to Kyoto with a friend." }
        ],
        contrast: {
          rows: [
            { label: "{丁寧|ていねい}な {形|かたち} (ました)", label_en: "{丁寧|ていねい}な {形|かたち} (ました)", jp: "{昨日|きのう}、{映画|えいが}を {見|み}ました。", pt: "Educado: com desconhecidos, no trabalho.", en: "Polite: with strangers, at work." },
            { label: "た{形|けい} (informal)", label_en: "た{形|けい} (informal)", jp: "{昨日|きのう}、{映画|えいが}を {見|み}た。", pt: "Informal: com amigos e família.", en: "Informal: with friends and family." }
          ],
          note: "A forma た não é “mais passado” do que ました: só muda o nível de formalidade.", note_en: "The た form is not “more past” than ました: only the level of formality changes."
        },
        trap: [
          "Verbos que terminam em る nem sempre são do grupo 2: {帰|かえ}る ➔ {帰|かえ}った (grupo 1).",
          "{行|い}く é a exceção do grupo 1: {行|い}った, e não {行|い}いた."
        ],
        trap_en: [
          "Verbs ending in る are not always group 2: {帰|かえ}る ➔ {帰|かえ}った (group 1).",
          "{行|い}く is the exception in group 1: {行|い}った, not {行|い}いた."
        ]
      },
      {
        id: "koto-ga-aru",
        title: "{動詞|どうし}た{形|けい} ＋ ことが あります ({経験|けいけん})", title_en: "{動詞|どうし}た{形|けい} ＋ ことが あります ({経験|けいけん})",
        pat: "V-た ことが あります",
        short: "já fiz / tenho a experiência de", short_en: "I have done it / I have the experience of",
        mean: "Diz que a pessoa já teve a experiência de fazer algo alguma vez na vida, sem dizer quando. Em português: “já andei a cavalo”.", mean_en: "Says that the person has had the experience of doing something at some point in life, without saying when. In English: “I have ridden a horse”.",
        rule: "Pergunta: V-た ことが ありますか。 Resposta: はい、あります。／いいえ、ありません。 Para “nunca”, use {一度|いちど}も ＋ negativa: いいえ、{一度|いちど}も ありません。", rule_en: "Question: V-た ことが ありますか。 Answer: はい、あります。／いいえ、ありません。 For “never”, use {一度|いちど}も ＋ negative: いいえ、{一度|いちど}も ありません。",
        ex: [
          { jp: "{相撲|すもう}を {見|み}た ことが あります。", romaji: "Sumou o mita koto ga arimasu.", pt: "Eu já vi sumô (tenho a experiência de ver).", en: "I have seen sumo (I have the experience of watching it)." },
          { jp: "{北海道|ほっかいどう}へ {行|い}った ことが ありますか。<br>…はい、{一度|いちど} あります。2{年前|ねんまえ}に {友達|ともだち}と {行|い}きました。", romaji: "Hokkaido e itta koto ga arimasu ka. ...Hai, ichido arimasu. Ninen mae ni tomodachi to ikimashita.", pt: "Você já foi a Hokkaido? ...Sim, fui uma vez. Fui com um amigo há 2 anos.", en: "Have you been to Hokkaido? ...Yes, once. I went with a friend two years ago." },
          { jp: "{馬|うま}に {乗|の}った ことが ありますか。<br>…いいえ、{一度|いちど}も ありません。ぜひ {乗|の}りたいです。", romaji: "Uma ni notta koto ga arimasu ka. ...Iie, ichidomo arimasen. Zehi noritai desu.", pt: "Você já andou a cavalo? ...Não, nunca. Quero muito andar.", en: "Have you ever ridden a horse? ...No, never. I really want to ride one." },
          { jp: "{納豆|なっとう}を {食|た}べた ことが ありません。", romaji: "Nattou o tabeta koto ga arimasen.", pt: "Nunca comi nattō (soja fermentada).", en: "I have never eaten nattō (fermented soybeans)." }
        ],
        contrast: {
          rows: [
            { label: "um fato, com data (ました)", label_en: "a fact, with a date (ました)", jp: "{去年|きょねん}、{北海道|ほっかいどう}へ {行|い}きました。", pt: "Ano passado fui a Hokkaido.", en: "I went to Hokkaido last year." },
            { label: "a experiência (ことが あります)", label_en: "the experience (ことが あります)", jp: "{北海道|ほっかいどう}へ {行|い}った ことが あります。", pt: "Já estive em Hokkaido.", en: "I have been to Hokkaido." }
          ],
          note: "Se você diz quando foi, use o passado simples. ことが あります só diz que a experiência existe. Por isso, depois do “sim”, os detalhes vêm em ました (veja o diálogo de Hokkaido).", note_en: "If you say when it happened, use the simple past. ことが あります only says that the experience exists. That is why, after the “yes”, the details come in ました (see the Hokkaido dialogue)."
        },
        trap: [
          "Não use para o que aconteceu hoje ou ontem, nem para rotinas: o ponto fala de experiências da vida. “Ontem vi sumô” é {昨日|きのう}、{相撲|すもう}を {見|み}ました。",
          "O “já” do português também significa “já terminei” (もう {終|お}わりました). Aqui é só “já, alguma vez na vida”."
        ],
        trap_en: [
          "Do not use it for what happened today or yesterday, or for routines: this point is about life experiences. “I watched sumo yesterday” is {昨日|きのう}、{相撲|すもう}を {見|み}ました。",
          "The English “already” also means “I have finished” (もう {終|お}わりました). Here it only means “at some point in life”."
        ]
      },
      {
        id: "tari",
        title: "{動詞|どうし}た{形|けい}り、{動詞|どうし}た{形|けい}り します", title_en: "{動詞|どうし}た{形|けい}り、{動詞|どうし}た{形|けい}り します",
        pat: "V-たり、V-たり します",
        short: "fazer coisas como A, B, etc.", short_en: "doing things like A, B, etc.",
        mean: "Cita duas ou mais ações como exemplos do que a pessoa faz ou fez, sem listar tudo: “faço coisas como A e B, entre outras”.", mean_en: "Names two or more actions as examples of what the person does or did, without listing everything: “I do things like A and B, among others”.",
        rule: "Pegue a forma た e troque o final por たり: {見|み}た ➔ {見|み}たり, した ➔ したり. O tempo da frase aparece só no verbo final: します (hábito ou futuro) ou しました (passado).", rule_en: "Take the た form and change the ending to たり: {見|み}た ➔ {見|み}たり, した ➔ したり. The tense of the sentence appears only on the final verb: します (habit or future) or しました (past).",
        ex: [
          { jp: "{休|やす}みの {日|ひ}は テニスを したり、{散歩|さんぽ}に {行|い}ったり します。", romaji: "Yasumi no hi wa tenisu o shitari, sanpo ni ittari shimasu.", pt: "Nos dias de folga, eu jogo tênis, vou passear, etc.", en: "On days off, I play tennis, go for walks, and so on." },
          { jp: "{冬休|ふゆやす}みは {何|なに}を しましたか。<br>…{京都|きょうと}の お{寺|てら}を {見|み}たり、{日本|にほん}の {料理|りょうり}を {食|た}べたり しました。", romaji: "Fuyuyasumi wa nani o shimashita ka. ...Kyouto no otera o mitari, nihon no ryouri o tabetari shimashita.", pt: "O que você fez nas férias de inverno? ...Visitei templos em Kyoto, comi comida japonesa, etc.", en: "What did you do over the winter break? ...I visited temples in Kyoto, ate Japanese food, and so on." },
          { jp: "{日本|にほん}で {何|なに}を したいですか。<br>…{旅行|りょこう}したり、お{茶|ちゃ}を {習|なら}ったり したいです。", romaji: "Nihon de nani o shitai desu ka. ...Ryokou shitari, ocha o narattari shitai desu.", pt: "O que você quer fazer no Japão? ...Quero viajar, aprender a cerimônia do chá, etc.", en: "What do you want to do in Japan? ...I want to travel, learn the tea ceremony, and so on." },
          { jp: "{昨日|きのう}^は {掃除|そうじ}したり、{洗濯|せんたく}したり しました。", romaji: "Kinou wa souji shitari, sentaku shitari shimashita.", pt: "Ontem fiz coisas como limpar a casa e lavar roupa.", en: "Yesterday I did things like cleaning the house and washing clothes." }
        ],
        contrast: {
          rows: [
            { label: "V-て、V-て、〜 (sequência)", label_en: "V-て、V-て、〜 (sequence)", jp: "{朝|あさ}、{起|お}きて、シャワーを あびて、{会社|かいしゃ}^へ {行|い}きます。", pt: "Todas as ações, nesta ordem: é o passo a passo de uma rotina.", en: "All the actions, in this order: it is the step-by-step of a routine." },
            { label: "V-たり、V-たり します (exemplos)", label_en: "V-たり、V-たり します (examples)", jp: "{休|やす}みの {日|ひ}は {本|ほん}を {読|よ}んだり、{寝|ね}たり します。", pt: "Algumas ações, sem ordem fixa; há outras possíveis.", en: "A few actions, in no fixed order; there are others possible." }
          ],
          note: "Use て para contar o dia passo a passo. Use たり para dar uma ideia do que a pessoa costuma fazer.", note_en: "Use て to tell the day step by step. Use たり to give an idea of what the person usually does."
        },
        trap: [
          "O último verbo é sempre します／しました. Errado: {読|よ}んだり、{寝|ね}たり。 Certo: {読|よ}んだり、{寝|ね}たり します。",
          "O た de {読|よ}んだり não indica passado: o tempo vem do します ou しました do final."
        ],
        trap_en: [
          "The last verb is always します／しました. Wrong: {読|よ}んだり、{寝|ね}たり。 Right: {読|よ}んだり、{寝|ね}たり します。",
          "The た of {読|よ}んだり does not mean past: the tense comes from the します or しました at the end."
        ]
      },
      {
        id: "naru",
        title: "〜なります ({変化|へんか}: ficar, passar a ser)", title_en: "〜なります ({変化|へんか}: to become, to turn into)",
        pat: "Adj-い ➔ 〜く なります<br>Adj-な・N ➔ 〜に なります",
        short: "mudança de estado", short_en: "change of state",
        mean: "Mostra que algo muda de estado com o tempo: “ficar”, “tornar-se”, “passar a ser”. Ninguém é apontado como quem faz a mudança: ela simplesmente acontece.", mean_en: "Shows that something changes state over time: “to get”, “to become”, “to turn into”. Nobody is named as the one who makes the change: it simply happens.",
        form: [
          { label: "い{形容詞|けいようし} (Adj-i)", label_en: "い{形容詞|けいようし} (i-adjective)", text: "Troque い por <strong>く</strong>.", text_en: "Replace い with <strong>く</strong>.", ex: [
            { jp: "{寒|さむ}い ➔ {寒|さむ}<strong>く</strong> なります", pt: "vai esfriar", en: "it will get cold" },
            { tag: "exceção", tag_en: "exception", jp: "いい ➔ <strong>よく</strong> なります", pt: "vai melhorar", en: "it will get better" }
          ] },
          { label: "な{形容詞|けいようし} (Adj-na)", label_en: "な{形容詞|けいようし} (na-adjective)", text: "Troque o な final por <strong>に</strong>.", text_en: "Replace the final な with <strong>に</strong>.", ex: [
            { jp: "{元気|げんき}な ➔ {元気|げんき}<strong>に</strong> なります", pt: "vai ficar bem", en: "he/she will get well" }
          ] },
          { label: "{名詞|めいし} (Substantivo)", label_en: "{名詞|めいし} (Noun)", text: "Acrescente <strong>に</strong>.", text_en: "Add <strong>に</strong>.", ex: [
            { jp: "25{歳|さい} ➔ 25{歳|さい}<strong>に</strong> なります", romaji: "nijuugo-sai ➔ nijuugo-sai ni narimasu", pt: "vai fazer 25 anos", en: "he/she will turn 25" },
            { jp: "{先生|せんせい} ➔ {先生|せんせい}<strong>に</strong> なります", pt: "vai ser professor", en: "he/she will become a teacher" }
          ] }
        ],
        ex: [
          { jp: "これから だんだん {暑|あつ}く なります。", romaji: "Korekara dandan atsuku narimasu.", pt: "De agora em diante, ficará gradualmente mais quente.", en: "From now on, it will gradually get warmer." },
          { jp: "{体|からだ}の {調子|ちょうし}は どうですか。<br>…おかげさまで よく なりました。", romaji: "Karada no choushi wa dou desu ka. ...Okagesamade yoku narimashita.", pt: "Como está a sua condição física? ...Graças a Deus, ficou boa (melhorei).", en: "How is your health? ...Thank goodness, it got better (I got better)." },
          { jp: "もうすぐ {春|はる}に なります。", pt: "Logo será primavera.", en: "It will soon be spring." },
          { jp: "{子供|こども}が {大|おお}きく なりました。", pt: "As crianças cresceram (ficaram grandes).", en: "The children have grown (got big)." }
        ],
        contrast: {
          rows: [
            { label: "です (estado)", label_en: "です (state)", jp: "{今|いま}、{暑|あつ}いです。", pt: "Agora está quente: é assim neste momento.", en: "It is warm now: that is how it is at this moment." },
            { label: "なります (mudança)", label_en: "なります (change)", jp: "{暑|あつ}く なりました。", pt: "Esquentou: passou a ser assim.", en: "It got warm: it has come to be that way." }
          ],
          note: "Para dizer que alguém faz a mudança acontecer, o japonês usa する (〜く します), que ainda não aparece nesta lição.", note_en: "To say that someone makes the change happen, Japanese uses する (〜く します), which does not appear in this lesson yet."
        },
        trap: [
          "Em português, “ficar” serve para tudo. No japonês a forma muda: adjetivo い ➔ く; adjetivo な e substantivo ➔ に. Errado: {寒|さむ}い なります、{元気|げんき}く なります。",
          "いい vira よく なります (não いく なります)."
        ],
        trap_en: [
          "In English, “get” works for everything. In Japanese the form changes: adjective い ➔ く; adjective な and noun ➔ に. Wrong: {寒|さむ}い なります、{元気|げんき}く なります。",
          "いい becomes よく なります (not いく なります)."
        ]
      }
    ]
  },
  renshuuA: {
    title: "{練習|れんしゅう} A", title_en: "{練習|れんしゅう} A",
    exercises: [
      {
        desc: "{動詞|どうし}の た{形|けい} (Forma TA dos verbos)", desc_en: "{動詞|どうし}の た{形|けい} (TA form of verbs)",
        questions: [
          { q: "{書|か}きます ➔", a: "{書|か}いた", romaji: "kaita", pt: "Escreveu", en: "Wrote" },
          { q: "{行|い}きます (exceção) ➔", a: "{行|い}った", romaji: "itta", pt: "Foi", en: "Went" },
          { q: "{飲|の}みます ➔", a: "{飲|の}んだ", romaji: "nonda", pt: "Bebeu", en: "Drank" },
          { q: "{読|よ}みます ➔", a: "{読|よ}んだ", romaji: "yonda", pt: "Leu", en: "Read" },
          { q: "{買|か}います ➔", a: "{買|か}った", romaji: "katta", pt: "Comprou", en: "Bought" },
          { q: "{待|ま}ちます ➔", a: "{待|ま}った", romaji: "matta", pt: "Esperou", en: "Waited" },
          { q: "{帰|かえ}ります ➔", a: "{帰|かえ}った", romaji: "kaetta", pt: "Voltou", en: "Returned" },
          { q: "{食|た}べます (Grp 2) ➔", a: "{食|た}べた", romaji: "tabeta", pt: "Comeu", en: "Ate" },
          { q: "{見|み}ます (Grp 2) ➔", a: "{見|み}た", romaji: "mita", pt: "Viu", en: "Saw" },
          { q: "します (Grp 3) ➔", a: "した", romaji: "shita", pt: "Fez", en: "Did" },
          { q: "{来|き}ます (Grp 3) ➔", a: "{来|き}た", romaji: "kita", pt: "Veio", en: "Came" }
        ]
      }
    ]
  },
  renshuuB: {
    title: "{練習|れんしゅう} B", title_en: "{練習|れんしゅう} B",
    exercises: [
      {
        desc: "1. た{形|けい}に {変|か}えなさい。(Mude para a forma TA)", desc_en: "1. た{形|けい}に {変|か}えなさい。(Change to the TA form)",
        questions: [
          { q: "{歌|うた}います ➔", a: "{歌|うた}った", romaji: "utatta", pt: "Cantou", en: "Sang" },
          { q: "{遊|あそ}びます ➔", a: "{遊|あそ}んだ", romaji: "asonda", pt: "Brincou", en: "Played" },
          { q: "{起|お}きます ➔", a: "{起|お}きた", romaji: "okita", pt: "Acordou", en: "Woke up" },
          { q: "{掃除|そうじ}します ➔", a: "{掃除|そうじ}した", romaji: "souji shita", pt: "Limpou", en: "Cleaned" }
        ]
      },
      {
        desc: "2. 〜た ことが あります を{使|つか}って{文|ぶん}を{作|つく}りなさい。(Use ~ta koto ga arimasu)", desc_en: "2. 〜た ことが あります を{使|つか}って{文|ぶん}を{作|つく}りなさい。(Use ~ta koto ga arimasu)",
        questions: [
          { q: "{富士山|ふじさん}に {登|のぼ}ります ➔", a: "{富士山|ふじさん}に {登|のぼ}った ことが あります。", romaji: "Fujisan ni nobotta koto ga arimasu.", pt: "Já escalei o Monte Fuji.", en: "I have climbed Mount Fuji." },
          { q: "{寿司|すし}を {食|た}べます ➔", a: "{寿司|すし}を {食|た}べた ことが あります。", romaji: "Sushi o tabeta koto ga arimasu.", pt: "Já comi sushi.", en: "I have eaten sushi." },
          { q: "{日本|にほん}のお{酒|さけ}を {飲|の}みます ➔", a: "{日本|にほん}のお{酒|さけ}を {飲|の}んだ ことが あります。", romaji: "Nihon no osake o nonda koto ga arimasu.", pt: "Já bebi saquê japonês.", en: "I have drunk Japanese sake." }
        ]
      },
      {
        desc: "3. ありますか？ (はい / いいえ) (Responda)", desc_en: "3. ありますか？ (はい / いいえ) (Answer)",
        questions: [
          { q: "{京都|きょうと}へ {行|い}った ことが ありますか。（はい） ➔", a: "はい、あります。", romaji: "Hai, arimasu.", pt: "Sim, tenho (já fui).", en: "Yes, I have (I have been)." },
          { q: "{馬|うま}に {乗|の}った ことが ありますか。（いいえ・{一度|いちど}も） ➔", a: "いいえ、{一度|いちど}も ありません。", romaji: "Iie, ichidomo arimasen.", pt: "Não, nunca andei.", en: "No, I have never ridden one." }
        ]
      },
      {
        desc: "4. 〜たり、〜たり します (Liste as ações com ~tari, ~tari shimasu)", desc_en: "4. 〜たり、〜たり します (List the actions with ~tari, ~tari shimasu)",
        questions: [
          { q: "{日曜日|にちようび}。{本|ほん}を {読|よ}みます。{散歩|さんぽ}します。➔", a: "{日曜日|にちようび}は {本|ほん}を {読|よ}んだり、{散歩|さんぽ}したり します。", romaji: "Nichiyoubi wa hon o yondari, sanpo shitari shimasu.", pt: "No domingo, eu leio livros, passeio, etc.", en: "On Sundays, I read books, go for walks, and so on." },
          { q: "{昨日|きのう}。{歌|うた}を {歌|うた}いました。ダンスを しました。➔", a: "{昨日|きのう}は {歌|うた}を {歌|うた}ったり、ダンスを したり しました。", romaji: "Kinou wa uta o utattari, dansu o shitari shimashita.", pt: "Ontem eu cantei músicas, dancei, etc. (Atenção ao しました no final porque é passado)", en: "Yesterday I sang songs, danced, and so on. (Mind the しました at the end because it is past)" }
        ]
      },
      {
        desc: "5. 〜く なります / に なります (Mudança de estado)", desc_en: "5. 〜く なります / に なります (Change of state)",
        questions: [
          { q: "{暖|あたた}かい ➔", a: "{暖|あたた}かく なります", romaji: "Atatakaku narimasu", pt: "Fica quente (adj-i)", en: "It gets hot (i-adj)" },
          { q: "{元気|げんき} ➔", a: "{元気|げんき}に なります", romaji: "Genki ni narimasu", pt: "Fica saudável/bem (adj-na)", en: "It gets healthy/well (na-adj)" },
          { q: "25{歳|さい} ➔", a: "25{歳|さい}に なります", romaji: "Nijuugosai ni narimasu", pt: "Faz 25 anos (substantivo)", en: "It turns 25 (noun)" },
          { q: "{医者|いしゃ} ➔", a: "{医者|いしゃ}に なります", romaji: "Isha ni narimasu", pt: "Torna-se médico (substantivo)", en: "He/she becomes a doctor (noun)" }
        ]
      }
    ]
  },
  renshuuC: {
    title: "{練習|れんしゅう} C (Diálogos)", title_en: "{練習|れんしゅう} C (Dialogues)",
    exercises: [
      {
        desc: "1. {経験|けいけん}について{話|はな}す (Falando sobre experiências)", desc_en: "1. {経験|けいけん}について{話|はな}す (Talking about experiences)",
        questions: [
          { q: "A: <strong>[{相撲|すもう}を {見|み}ます]</strong> ことが ありますか。<br>B: いいえ、{一度|いちど}も ありません。<br>A: おもしろいですよ。ぜひ <strong>[{見|み}て]</strong> ください。", a: "{相撲|すもう}を {見|み}た", romaji: "Sumou o mita", pt: "ver sumô (forma ta)", en: "to watch sumo (ta form)" },
          { q: "A: <strong>[パチンコを します]</strong> ことが ありますか。<br>B: いいえ、{一度|いちど}も ありません。<br>A: おもしろいですよ。ぜひ <strong>[して]</strong> ください。", a: "パチンコを した", romaji: "Pachinko o shita", pt: "jogar pachinko (forma ta)", en: "to play pachinko (ta form)" }
        ]
      },
      {
        desc: "2. {変化|へんか}について{話|はな}す (Falando sobre mudanças)", desc_en: "2. {変化|へんか}について{話|はな}す (Talking about changes)",
        questions: [
          { q: "A: {日本語|にほんご}が <strong>[{上手|じょうず}]</strong> なりましたね。<br>B: ありがとう ございます。でも、まだまだです。", a: "{上手|じょうず}に", romaji: "Jouzu ni", pt: "ficou habilidoso (na-adj + ni)", en: "became skilled (na-adj + ni)" }
        ]
      }
    ]
  },
  mondai: {
    title: "{問題|もんだい} (Problemas / Avaliação)", title_en: "{問題|もんだい} (Problems / Assessment)",
    exercises: [
      {
        desc: "1. (　　) に {正|ただ}しい {助詞|じょし} を {入|い}れなさい。 (Preencha as partículas: に, を, が, は)", desc_en: "1. (　　) に {正|ただ}しい {助詞|じょし} を {入|い}れなさい。 (Fill in the particles: に, を, が, は)",
        questions: [
          { q: "わたしは {富士山|ふじさん}（　　）{登|のぼ}った ことが あります。", a: "に", romaji: "ni", pt: "Partícula 'ni' (Direção/Alvo para subir)", en: "Particle 'ni' (direction/target for climbing)" },
          { q: "{休|やす}みの {日|ひ}は {音楽|おんがく}（　　）{聞|き}いたり、{本|ほん}を {読|よ}んだり します。", a: "を", romaji: "o", pt: "Partícula 'o' (Objeto direto de ouvir)", en: "Particle 'o' (direct object of listening)" },
          { q: "だんだん {寒|さむ}く なりますから、{体|からだ}（　　）{気|き}を つけて ください。", a: "に", romaji: "ni", pt: "Partícula 'ni' (ki o tsukeru requer 'ni')", en: "Particle 'ni' (ki o tsukeru requires 'ni')" }
        ]
      },
      {
        desc: "2. {動詞|どうし}や{形容詞|けいようし} を {正|ただ}しい {形|けい} に {変|か}えなさい。 (Mude para a forma correta)", desc_en: "2. {動詞|どうし}や{形容詞|けいようし} を {正|ただ}しい {形|けい} に {変|か}えなさい。 (Change to the correct form)",
        questions: [
          { q: "ここで {写真|しゃしん}を（{撮|と}ります ➔ ＿＿＿＿＿） ことが ありますか。", a: "{撮|と}った", romaji: "totta", pt: "Forma TA antes de koto ga arimasu", en: "TA form before koto ga arimasu" },
          { q: "{日曜日|にちようび}は テニスを（します ➔ ＿＿＿＿＿）、{映画|えいが}を {見|み}たり します。", a: "したり", romaji: "shitari", pt: "Forma TARI", en: "TARI form" },
          { q: "{来年|らいねん} わたしは 20{歳|さい}（です ➔ ＿＿＿＿＿）。", a: "に なります", romaji: "ni narimasu", pt: "Tornar-se 20 anos", en: "Turning 20" }
        ]
      },
      {
        desc: "3. {読|よ}み{物|もの} (Leitura): ダイエット (Dieta)", desc_en: "3. {読|よ}み{物|もの} (Reading): ダイエット (Diet)",
        questions: [
          {
            q: `<div class="reading-box">
                                    サントスさんは １か{月|げつ} まえに、ダイエットを はじめました。{毎日|まいにち} {運動|うんどう}したり、{野菜|やさい}を {食|た}べたり しました。でも、あまり {痩|や}せませんでした。{昨日|きのう} サントスさんは ケーキを 3つ {食|た}べました。
                                </div>
                                {質問|しつもん}: サントスさんは どうして ダイエットを しますか。<br>➔ {太|ふと}りましたから、＿＿＿＿＿＿＿＿＿。`,
            a: "{痩|や}せたいです",
            romaji: "yasetai desu",
            pt: "Porque quer emagrecer.", en: "Because he/she wants to lose weight."
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
          { tokens: ["{相撲|すもう}を", "{見|み}た", "ことが", "あります。"], pt: "Eu já vi sumô.", en: "I have seen sumo.", romaji: "Sumou o mita koto ga arimasu." },
          { tokens: ["{休|やす}みの", "{日|ひ}は", "テニスを", "したり、", "{散歩|さんぽ}に", "{行|い}ったり", "します。"], pt: "Nos dias de folga, eu jogo tênis, vou passear, etc.", en: "On days off, I play tennis, go for walks, and so on.", romaji: "Yasumi no hi wa tenisu o shitari, sanpo ni ittari shimasu." },
          { tokens: ["これから", "だんだん", "{暑|あつ}く", "なります。"], pt: "De agora em diante, ficará gradualmente mais quente.", en: "From now on, it will gradually get warmer.", romaji: "Korekara dandan atsuku narimasu." },
          { tokens: ["{北海道|ほっかいどう}へ", "{行|い}った", "ことが", "ありますか。"], pt: "Você já foi a Hokkaido?", en: "Have you been to Hokkaido?", romaji: "Hokkaidou e itta koto ga arimasu ka." }
        ]
      }
    ]
  }
};
