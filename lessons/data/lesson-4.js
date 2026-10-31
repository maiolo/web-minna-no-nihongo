// Dados da lição 4. Formato descrito no README.md.
window.lessonData = {
  vocab: {
    title: "{語彙|ごい} (Vocabulário)", title_en: "{語彙|ごい} (Vocabulary)",
    items: [
      { jp: "{今|いま}", romaji: "ima", pt: "Agora", en: "Now" },
      { jp: "〜{時|じ}", romaji: "ji", pt: "〜 horas (hora cheia)", en: "〜 o'clock" },
      { jp: "〜{分|ふん}／〜{分|ぷん}", romaji: "fun / pun", pt: "〜 minutos", en: "〜 minutes" },
      { jp: "{半|はん}", romaji: "han", pt: "Meia (hora e meia)", en: "Half (half past)" },
      { jp: "{午前|ごぜん}", romaji: "gozen", pt: "Da manhã (antes do meio-dia)", en: "A.M. (before noon)" },
      { jp: "{午後|ごご}", romaji: "gogo", pt: "Da tarde ou noite (depois do meio-dia)", en: "P.M. (after noon)" },
      { jp: "{朝|あさ}", romaji: "asa", pt: "Manhã", en: "Morning" },
      { jp: "{昼|ひる}", romaji: "hiru", pt: "Meio-dia, dia", en: "Noon, daytime" },
      { jp: "{晩|ばん}", romaji: "ban", pt: "Noite", en: "Evening, night" },
      { jp: "{毎朝|まいあさ}", romaji: "maiasa", pt: "Toda manhã", en: "Every morning" },
      { jp: "{毎日|まいにち}", romaji: "mainichi", pt: "Todos os dias", en: "Every day" },
      { jp: "{今日|きょう}", romaji: "kyou", pt: "Hoje", en: "Today" },
      { jp: "{昨日|きのう}", romaji: "kinou", pt: "Ontem", en: "Yesterday" },
      { jp: "{明日|あした}", romaji: "ashita", pt: "Amanhã", en: "Tomorrow" },
      { jp: "{起|お}きます", romaji: "okimasu", pt: "Acordar, levantar-se", en: "To get up, to wake up" },
      { jp: "{寝|ね}ます", romaji: "nemasu", pt: "Dormir, ir dormir", en: "To sleep, to go to bed" },
      { jp: "{働|はたら}きます", romaji: "hatarakimasu", pt: "Trabalhar", en: "To work" },
      { jp: "{休|やす}みます", romaji: "yasumimasu", pt: "Descansar, faltar, tirar folga", en: "To rest, to take a day off" },
      { jp: "{勉強|べんきょう}します", romaji: "benkyou shimasu", pt: "Estudar", en: "To study" },
      { jp: "{終|お}わります", romaji: "owarimasu", pt: "Terminar (algo termina)", en: "To end, to finish" },
      { jp: "{始|はじ}まります", romaji: "hajimarimasu", pt: "Começar (algo começa)", en: "To begin, to start" },
      { jp: "{月曜日|げつようび}", romaji: "getsuyoubi", pt: "Segunda-feira", en: "Monday" },
      { jp: "{火曜日|かようび}", romaji: "kayoubi", pt: "Terça-feira", en: "Tuesday" },
      { jp: "{水曜日|すいようび}", romaji: "suiyoubi", pt: "Quarta-feira", en: "Wednesday" },
      { jp: "{木曜日|もくようび}", romaji: "mokuyoubi", pt: "Quinta-feira", en: "Thursday" },
      { jp: "{金曜日|きんようび}", romaji: "kin'youbi", pt: "Sexta-feira", en: "Friday" },
      { jp: "{土曜日|どようび}", romaji: "doyoubi", pt: "Sábado", en: "Saturday" },
      { jp: "{日曜日|にちようび}", romaji: "nichiyoubi", pt: "Domingo", en: "Sunday" },
      { jp: "〜から", romaji: "kara", pt: "A partir de 〜, de 〜", en: "From 〜" },
      { jp: "〜まで", romaji: "made", pt: "Até 〜", en: "Until 〜, up to 〜" }
    ]
  },
  gramatica: {
    title: "{文法|ぶんぽう} (Gramática)", title_en: "{文法|ぶんぽう} (Grammar)",
    intro: "Quatro pontos para falar de horas e do dia a dia. Cada cartão traz o modelo de frase, a explicação, os exemplos, uma comparação com o que é parecido e os erros mais comuns.", intro_en: "Four points for talking about the time and daily life. Each card gives the sentence pattern, the explanation, the examples, a comparison with what looks similar and the most common mistakes.",
    points: [
      {
        id: "nanji",
        title: "{何時|なんじ}ですか ・ 〜{時|じ} 〜{分|ふん}", title_en: "{何時|なんじ}ですか ・ 〜{時|じ} 〜{分|ふん}",
        pat: "いま 〜{時|じ} 〜{分|ふん} です",
        short: "dizer e perguntar as horas", short_en: "telling and asking the time",
        mean: "As horas são o número ＋ <strong>{時|じ}</strong> e os minutos, o número ＋ <strong>{分|ふん}</strong>. <strong>{半|はん}</strong> é “e meia”. Para perguntar: {何時|なんじ}ですか (que horas são?) e {何分|なんぷん}ですか (quantos minutos?).", mean_en: "Hours are number ＋ <strong>{時|じ}</strong> and minutes are number ＋ <strong>{分|ふん}</strong>. <strong>{半|はん}</strong> is “half past”. To ask: {何時|なんじ}ですか (what time is it?) and {何分|なんぷん}ですか (how many minutes?).",
        rule: "Três horas têm leitura própria: 4h = よじ, 7h = しちじ, 9h = くじ. Nos minutos, o som muda para ぷん depois de 1, 3, 4, 6, 8 e 10 (いっぷん, さんぷん, よんぷん, ろっぷん, はっぷん, じゅっぷん) e fica ふん nos outros (にふん, ごふん).", rule_en: "Three hours have their own reading: 4:00 = よじ, 7:00 = しちじ, 9:00 = くじ. For minutes, the sound changes to ぷん after 1, 3, 4, 6, 8 and 10 (いっぷん, さんぷん, よんぷん, ろっぷん, はっぷん, じゅっぷん) and stays ふん for the others (にふん, ごふん).",
        form: [
          { label: "Horas especiais", label_en: "Special hours", text: "Memorize estas três.", text_en: "Memorize these three.", ex: [
            { tag: "4:00", jp: "{四時|よじ}", romaji: "yoji", pt: "quatro horas (não よんじ)", en: "four o'clock (not よんじ)" },
            { tag: "7:00", jp: "{七時|しちじ}", romaji: "shichiji", pt: "sete horas (não ななじ)", en: "seven o'clock (not ななじ)" },
            { tag: "9:00", jp: "{九時|くじ}", romaji: "kuji", pt: "nove horas (não きゅうじ)", en: "nine o'clock (not きゅうじ)" }
          ] },
          { label: "Minutos: ふん ou ぷん", label_en: "Minutes: ふん or ぷん", text: "Troque ふん por <strong>ぷん</strong> depois de 1, 3, 4, 6, 8, 10.", text_en: "Switch ふん to <strong>ぷん</strong> after 1, 3, 4, 6, 8, 10.", ex: [
            { tag: "2 min", jp: "{二分|にふん}", romaji: "nifun", pt: "dois minutos", en: "two minutes" },
            { tag: "3 min", jp: "{三分|さんぷん}", romaji: "sanpun", pt: "três minutos", en: "three minutes" },
            { tag: "5 min", jp: "{五分|ごふん}", romaji: "gofun", pt: "cinco minutos", en: "five minutes" },
            { tag: "10 min", jp: "{十分|じゅっぷん}", romaji: "juppun", pt: "dez minutos", en: "ten minutes" }
          ] }
        ],
        ex: [
          { jp: "いま {九時|くじ}です。", romaji: "Ima kuji desu.", pt: "Agora são nove horas.", en: "It is nine o'clock now." },
          { jp: "いま {三時半|さんじはん}です。", romaji: "Ima sanjihan desu.", pt: "Agora são três e meia.", en: "It is half past three now." },
          { jp: "いま {何時|なんじ}ですか。<br>…{午後|ごご} {四時|よじ} {十分|じゅっぷん}です。", romaji: "Ima nanji desu ka. ...Gogo yoji juppun desu.", pt: "Que horas são agora? ...São quatro e dez da tarde.", en: "What time is it now? ...It is ten past four in the afternoon." }
        ],
        contrast: {
          rows: [
            { label: "{午前|ごぜん} (antes do meio-dia)", label_en: "{午前|ごぜん} (before noon)", jp: "{午前|ごぜん} {七時|しちじ}です。", pt: "São sete da manhã.", en: "It is seven in the morning." },
            { label: "{午後|ごご} (depois do meio-dia)", label_en: "{午後|ごご} (after noon)", jp: "{午後|ごご} {七時|しちじ}です。", pt: "São sete da noite.", en: "It is seven in the evening." }
          ],
          note: "O japonês não usa “da manhã/da noite” depois do número, e sim {午前|ごぜん} ou {午後|ごご} <em>antes</em> da hora. Sem eles, o contexto diz qual é.", note_en: "Japanese puts {午前|ごぜん} or {午後|ごご} <em>before</em> the time, not “a.m./p.m.” after it. Without them, the context tells you which one is meant."
        },
        trap: [
          "As horas 4, 7 e 9 têm leituras especiais: {四時|よじ}, {七時|しちじ}, {九時|くじ}. Dizer よんじ, ななじ ou きゅうじ é erro comum.",
          "Em japonês não existe “quinze” para “um quarto”: 15 minutos é {十五分|じゅうごふん} e 30 minutos é {半|はん}."
        ],
        trap_en: [
          "The hours 4, 7 and 9 have special readings: {四時|よじ}, {七時|しちじ}, {九時|くじ}. Saying よんじ, ななじ or きゅうじ is a common mistake.",
          "Japanese has no “a quarter” for 15 minutes: 15 minutes is {十五分|じゅうごふん} and 30 minutes is {半|はん}."
        ]
      },
      {
        id: "masu-masen",
        title: "{動詞|どうし}ます ・ ません ・ ました ・ ませんでした", title_en: "{動詞|どうし}ます ・ ません ・ ました ・ ませんでした",
        pat: "V ます／ません／ました／ませんでした",
        short: "os quatro tempos educados do verbo", short_en: "the four polite verb forms",
        mean: "O verbo educado tem quatro formas: <strong>ます</strong> (presente habitual ou futuro), <strong>ません</strong> (negativo), <strong>ました</strong> (passado) e <strong>ませんでした</strong> (passado negativo).", mean_en: "The polite verb has four forms: <strong>ます</strong> (habitual present or future), <strong>ません</strong> (negative), <strong>ました</strong> (past) and <strong>ませんでした</strong> (past negative).",
        rule: "O verbo vai no fim da frase e <strong>não muda por pessoa nem por número</strong>: {働|はたら}きます serve para “trabalho”, “trabalhas” e “trabalham”. O contexto (hoje, amanhã, todos os dias, ontem) mostra o tempo.", rule_en: "The verb goes at the end of the sentence and <strong>does not change for person or number</strong>: {働|はたら}きます covers “I work”, “you work” and “they work”. The context (today, tomorrow, every day, yesterday) shows the time.",
        form: [
          { label: "{起|お}きます (acordar)", label_en: "{起|お}きます (to get up)", text: "Troque só o final.", text_en: "Only the ending changes.", ex: [
            { tag: "presente／futuro", tag_en: "present／future", jp: "{起|お}きます", pt: "acordo / acordarei", en: "I get up / I will get up" },
            { tag: "negativo", tag_en: "negative", jp: "{起|お}きません", pt: "não acordo / não acordarei", en: "I do not get up / I will not get up" },
            { tag: "passado", tag_en: "past", jp: "{起|お}きました", pt: "acordei", en: "I got up" },
            { tag: "passado negativo", tag_en: "past negative", jp: "{起|お}きませんでした", pt: "não acordei", en: "I did not get up" }
          ] }
        ],
        ex: [
          { jp: "わたし^は {毎日|まいにち} {働|はたら}きます。", romaji: "Watashi wa mainichi hatarakimasu.", pt: "Eu trabalho todos os dias.", en: "I work every day." },
          { jp: "{日曜日|にちようび}^は {働|はたら}きません。{休|やす}みます。", romaji: "Nichiyoubi wa hatarakimasen. Yasumimasu.", pt: "No domingo não trabalho. Descanso.", en: "I do not work on Sundays. I rest." },
          { jp: "{昨日|きのう}、{勉強|べんきょう}しました。", romaji: "Kinou, benkyou shimashita.", pt: "Ontem eu estudei.", en: "I studied yesterday." },
          { jp: "{今日|きょう}^は {勉強|べんきょう}しませんでした。", romaji: "Kyou wa benkyou shimasen deshita.", pt: "Hoje eu não estudei.", en: "I did not study today." }
        ],
        contrast: {
          rows: [
            { label: "ます (presente ou futuro)", label_en: "ます (present or future)", jp: "{明日|あした}、{働|はたら}きます。", pt: "Amanhã vou trabalhar.", en: "I will work tomorrow." },
            { label: "ました (passado)", label_en: "ました (past)", jp: "{昨日|きのう}、{働|はたら}きました。", pt: "Ontem trabalhei.", en: "I worked yesterday." }
          ],
          note: "O japonês educado só distingue passado de não-passado. Para o presente e o futuro, é a palavra de tempo (como {毎日|まいにち} ou {明日|あした}) que esclarece.", note_en: "Polite Japanese only separates past from non-past. For the present and future, a time word (like {毎日|まいにち} or {明日|あした}) clarifies."
        },
        trap: [
          "O passado negativo é ませんでした, não ましたません: errado {働|はたら}きましたません。",
          "Não existe forma de “eu / tu / ele”: o verbo é igual para todos. O sujeito vem do contexto ou do tema."
        ],
        trap_en: [
          "The past negative is ませんでした, not ましたません: wrong {働|はたら}きましたません。",
          "There is no “I / you / he” form: the verb is the same for everyone. The subject comes from context or from the topic."
        ]
      },
      {
        id: "ni-tempo",
        title: "N (tempo) に V", title_en: "N (time) に V",
        pat: "{時間|じかん} に V ます",
        short: "em que momento algo acontece", short_en: "when something happens",
        mean: "A partícula <strong>に</strong> marca o momento exato: uma hora, um dia da semana. Palavras relativas ao “agora” (hoje, ontem, amanhã, todos os dias) <strong>não</strong> levam に.", mean_en: "The particle <strong>に</strong> marks the exact moment: a clock time or a weekday. Words relative to “now” (today, yesterday, tomorrow, every day) take <strong>no</strong> に.",
        ex: [
          { jp: "{毎朝|まいあさ} {六時|ろくじ}に {起|お}きます。", romaji: "Maiasa rokuji ni okimasu.", pt: "Toda manhã acordo às seis.", en: "I get up at six every morning." },
          { jp: "わたし^は {月曜日|げつようび}に {働|はたら}きます。{日曜日|にちようび}に {休|やす}みます。", romaji: "Watashi wa getsuyoubi ni hatarakimasu. Nichiyoubi ni yasumimasu.", pt: "Trabalho na segunda. Descanso no domingo.", en: "I work on Monday. I rest on Sunday." },
          { jp: "{昨日|きのう}、{十二時|じゅうにじ}に {寝|ね}ました。", romaji: "Kinou, juuniji ni nemashita.", pt: "Ontem dormi à meia-noite.", en: "I went to bed at midnight yesterday." }
        ],
        contrast: {
          rows: [
            { label: "com に (horário exato, dia da semana)", label_en: "with に (exact time, weekday)", jp: "{七時|しちじ}に {寝|ね}ます。", pt: "Vou dormir às sete.", en: "I go to bed at seven." },
            { label: "sem に ({今日|きょう}, {昨日|きのう}, {毎日|まいにち})", label_en: "without に ({今日|きょう}, {昨日|きのう}, {毎日|まいにち})", jp: "{今日|きょう}、{寝|ね}ます。", pt: "Hoje vou dormir.", en: "I will go to bed today." }
          ],
          note: "Pergunte-se: a palavra aponta um instante preciso no relógio ou no calendário? Se sim, に. Se for relativa ao agora, não.", note_en: "Ask yourself: does the word point to a precise moment on the clock or calendar? If so, に. If it is relative to now, no に."
        },
        trap: [
          "Não use に com {今日|きょう}, {昨日|きのう}, {明日|あした}, {毎日|まいにち}, {毎朝|まいあさ}: errado {明日|あした}に {働|はたら}きます。",
          "Com “hora ＋ dia”, o dia e a hora podem aparecer juntos: {月曜日|げつようび}の {九時|くじ}に. A partícula に vai uma vez, no fim."
        ],
        trap_en: [
          "Do not use に with {今日|きょう}, {昨日|きのう}, {明日|あした}, {毎日|まいにち}, {毎朝|まいあさ}: wrong {明日|あした}に {働|はたら}きます。",
          "With “day ＋ hour”, both can appear together: {月曜日|げつようび}の {九時|くじ}に. The particle に goes once, at the end."
        ]
      },
      {
        id: "kara-made",
        title: "N1 から N2 まで", title_en: "N1 から N2 まで",
        pat: "N1 から N2 まで",
        short: "de... até...", short_en: "from… until…",
        mean: "<strong>から</strong> marca o início e <strong>まで</strong> marca o fim, no tempo ou num intervalo: “das nove às cinco”, “de segunda a sexta”.", mean_en: "<strong>から</strong> marks the start and <strong>まで</strong> marks the end, in time or in a range: “from nine to five”, “from Monday to Friday”.",
        rule: "Elas vêm depois da palavra que marcam. Podem aparecer juntas ou só uma delas: {九時|くじ}から (a partir das nove) ou {五時|ごじ}まで (até as cinco).", rule_en: "They come after the word they mark. They can appear together or only one of them: {九時|くじ}から (from nine on) or {五時|ごじ}まで (until five).",
        ex: [
          { jp: "{銀行|ぎんこう}^は {九時|くじ}から {三時|さんじ}までです。", romaji: "Ginkou wa kujikara sanjimade desu.", pt: "O banco abre das nove às três.", en: "The bank is open from nine to three." },
          { jp: "わたし^は {月曜日|げつようび}から {金曜日|きんようび}まで {働|はたら}きます。", romaji: "Watashi wa getsuyoubikara kin'youbimade hatarakimasu.", pt: "Eu trabalho de segunda a sexta.", en: "I work from Monday to Friday." },
          { jp: "{昼|ひる}の {休|やす}み^は {十二時|じゅうにじ}から {一時|いちじ}までです。", romaji: "Hiru no yasumi wa juunijikara ichijimade desu.", pt: "O intervalo do almoço é de meio-dia à uma.", en: "The lunch break is from noon to one." }
        ],
        contrast: {
          rows: [
            { label: "から (início)", label_en: "から (start)", jp: "{九時|くじ}から {働|はたら}きます。", pt: "Trabalho a partir das nove.", en: "I work from nine on." },
            { label: "まで (fim)", label_en: "まで (end)", jp: "{五時|ごじ}まで {働|はたら}きます。", pt: "Trabalho até as cinco.", en: "I work until five." }
          ],
          note: "Cada uma pode aparecer sozinha. Juntas, formam o intervalo completo.", note_en: "Each can appear alone. Together, they make up the full range."
        },
        trap: [
          "As partículas vão depois, não antes: errado から {九時|くじ}. Certo: {九時|くじ}から.",
          "Em português dizemos “das nove às cinco”, com preposições diferentes para cada ponta; em japonês cada ponta tem a sua partícula e elas vêm depois: {九時|くじ}から {五時|ごじ}まで."
        ],
        trap_en: [
          "The particles go after, not before: wrong から {九時|くじ}. Right: {九時|くじ}から.",
          "In English we say “from nine to five”, with a different word for each end; in Japanese each end has its own particle and they come after: {九時|くじ}から {五時|ごじ}まで."
        ]
      }
    ]
  },
  renshuuA: {
    title: "{練習|れんしゅう} A", title_en: "{練習|れんしゅう} A",
    exercises: [
      {
        desc: "1. Leia as horas (escreva a leitura em hiragana)", desc_en: "1. Read the time (write the reading in hiragana)",
        questions: [
          { q: "4:00 ➔", a: "よじ", romaji: "yoji", pt: "4 horas", en: "4 o'clock" },
          { q: "7:00 ➔", a: "しちじ", romaji: "shichiji", pt: "7 horas", en: "7 o'clock" },
          { q: "9:00 ➔", a: "くじ", romaji: "kuji", pt: "9 horas", en: "9 o'clock" },
          { q: "3:30 ➔", a: "さんじはん", romaji: "sanji han", pt: "3 e meia", en: "half past 3" },
          { q: "10 min ➔", a: "じゅっぷん", romaji: "juppun", pt: "10 minutos", en: "10 minutes" },
          { q: "3 min ➔", a: "さんぷん", romaji: "sanpun", pt: "3 minutos", en: "3 minutes" }
        ]
      },
      {
        desc: "2. ます ➔ ません (negativa)", desc_en: "2. ます ➔ ません (negative)",
        questions: [
          { q: "{働|はたら}きます ➔", a: "{働|はたら}きません", romaji: "hatarakimasen", pt: "Não trabalho", en: "I do not work" },
          { q: "{勉強|べんきょう}します ➔", a: "{勉強|べんきょう}しません", romaji: "benkyou shimasen", pt: "Não estudo", en: "I do not study" },
          { q: "{起|お}きます ➔", a: "{起|お}きません", romaji: "okimasen", pt: "Não acordo", en: "I do not get up" },
          { q: "{寝|ね}ます ➔", a: "{寝|ね}ません", romaji: "nemasen", pt: "Não durmo", en: "I do not sleep" }
        ]
      },
      {
        desc: "3. ます ➔ ました (passado)", desc_en: "3. ます ➔ ました (past)",
        questions: [
          { q: "{働|はたら}きます ➔", a: "{働|はたら}きました", romaji: "hatarakimashita", pt: "Trabalhei", en: "I worked" },
          { q: "{休|やす}みます ➔", a: "{休|やす}みました", romaji: "yasumimashita", pt: "Descansei", en: "I rested" },
          { q: "{終|お}わります ➔", a: "{終|お}わりました", romaji: "owarimashita", pt: "Terminou", en: "It ended" },
          { q: "{始|はじ}まります ➔", a: "{始|はじ}まりました", romaji: "hajimarimashita", pt: "Começou", en: "It began" }
        ]
      }
    ]
  },
  renshuuB: {
    title: "{練習|れんしゅう} B", title_en: "{練習|れんしゅう} B",
    exercises: [
      {
        desc: "1. Complete com に ou corrija a frase", desc_en: "1. Fill in with に or correct the sentence",
        questions: [
          { q: "{毎朝|まいあさ} {六時|ろくじ}（　　）{起|お}きます。", a: "に", romaji: "ni", pt: "Horário exato: に", en: "Exact time: に" },
          { q: "{日曜日|にちようび}（　　）{休|やす}みます。", a: "に", romaji: "ni", pt: "Dia da semana: に", en: "Weekday: に" },
          { q: "{明日|あした}に {働|はたら}きます。 ➔ (corrija a frase)", q_en: "{明日|あした}に {働|はたら}きます。 ➔ (correct the sentence)", a: "{明日|あした}{働|はたら}きます", romaji: "ashita hatarakimasu", pt: "{明日|あした} não leva に", en: "{明日|あした} takes no に" }
        ]
      },
      {
        desc: "2. から ou まで?", desc_en: "2. から or まで?",
        questions: [
          { q: "{銀行|ぎんこう}は {九時|くじ}（　　）{三時|さんじ}までです。", a: "から", romaji: "kara", pt: "Início do intervalo", en: "Start of the range" },
          { q: "わたしは {月曜日|げつようび}から {金曜日|きんようび}（　　）{働|はたら}きます。", a: "まで", romaji: "made", pt: "Fim do intervalo", en: "End of the range" },
          { q: "{昼|ひる}の {休|やす}みは {十二時|じゅうにじ}（　　）{一時|いちじ}までです。", a: "から", romaji: "kara", pt: "Início do intervalo", en: "Start of the range" }
        ]
      }
    ]
  },
  mondai: {
    title: "{問題|もんだい} (Problemas / Avaliação)", title_en: "{問題|もんだい} (Problems / Assessment)",
    exercises: [
      {
        desc: "1. (　　) に {正|ただ}しい {形|かたち} を {入|い}れなさい。 (ます・ません・ました・ませんでした)", desc_en: "1. Fill in the blank with the right form. (ます・ません・ました・ませんでした)",
        questions: [
          { q: "{昨日|きのう}、{勉強|べんきょう}（　　）。(passado)", q_en: "{昨日|きのう}、{勉強|べんきょう}（　　）。(past)", a: "しました", romaji: "shimashita", pt: "Ontem estudei", en: "I studied yesterday" },
          { q: "{日曜日|にちようび}は {働|はたら}き（　　）。(negativo)", q_en: "{日曜日|にちようび}は {働|はたら}き（　　）。(negative)", a: "ません", romaji: "masen", pt: "No domingo não trabalho", en: "I do not work on Sundays" },
          { q: "{昨日|きのう}は {休|やす}み（　　）。(passado negativo)", q_en: "{昨日|きのう}は {休|やす}み（　　）。(past negative)", a: "ませんでした", romaji: "masen deshita", pt: "Ontem não descansei", en: "I did not rest yesterday" },
          { q: "{毎朝|まいあさ} {七時|しちじ}に {起|お}き（　　）。(habitual)", q_en: "{毎朝|まいあさ} {七時|しちじ}に {起|お}き（　　）。(habitual)", a: "ます", romaji: "masu", pt: "Toda manhã acordo às sete", en: "I get up at seven every morning" }
        ]
      },
      {
        desc: "2. {読|よ}み{物|もの} (Leitura): マリアさんの {一日|いちにち}", desc_en: "2. Reading: Maria's day",
        questions: [
          {
            q: `<div class="reading-box">マリアさんは {毎朝|まいあさ} {六時|ろくじ}に {起|お}きます。{九時|くじ}から {五時|ごじ}まで {働|はたら}きます。{晩|ばん}は {勉強|べんきょう}します。{十二時|じゅうにじ}に {寝|ね}ます。{土曜日|どようび}と {日曜日|にちようび}は {働|はたら}きません。</div>{質問|しつもん}: マリアさんは {何時|なんじ}から {何時|なんじ}まで {働|はたら}きますか。<br>➔ ＿＿＿＿＿から ＿＿＿＿＿まで {働|はたら}きます。`,
            a: "{九時|くじ}、{五時|ごじ}",
            romaji: "kuji, goji",
            pt: "Das nove às cinco.", en: "From nine to five."
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
          { tokens: ["{毎朝|まいあさ}", "{六時|ろくじ}に", "{起|お}きます。"], pt: "Toda manhã acordo às seis.", en: "I get up at six every morning.", romaji: "Maiasa rokuji ni okimasu." },
          { tokens: ["{銀行|ぎんこう}は", "{九時|くじ}から", "{三時|さんじ}までです。"], pt: "O banco abre das nove às três.", en: "The bank is open from nine to three.", romaji: "Ginkou wa kuji kara sanji made desu." },
          { tokens: ["{昨日|きのう}は", "{勉強|べんきょう}しませんでした。"], pt: "Ontem não estudei.", en: "I did not study yesterday.", romaji: "Kinou wa benkyou shimasen deshita." },
          { tokens: ["{日曜日|にちようび}は", "{休|やす}みます。"], pt: "No domingo descanso.", en: "I rest on Sunday.", romaji: "Nichiyoubi wa yasumimasu." }
        ]
      }
    ]
  }
};
