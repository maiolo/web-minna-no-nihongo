// Dados da lição 21. Formato descrito no README.md.
window.lessonData = {
  vocab: {
    title: "{語彙|ごい} (Vocabulário)", title_en: "{語彙|ごい} (Vocabulary)",
    items: [
      { jp: "{思|おも}います", romaji: "omoimasu", pt: "Pensar, achar (opinião)", en: "To think, to believe (opinion)" },
      { jp: "{言|い}います", romaji: "iimasu", pt: "Dizer", en: "To say" },
      { jp: "{意見|いけん}", romaji: "iken", pt: "Opinião", en: "Opinion" },
      { jp: "{天気予報|てんきよほう}", romaji: "tenki yohou", pt: "Previsão do tempo", en: "Weather forecast" },
      { jp: "{約束|やくそく}", romaji: "yakusoku", pt: "Promessa, compromisso", en: "Promise, appointment" },
      { jp: "{約束|やくそく}します", romaji: "yakusoku shimasu", pt: "Prometer, combinar", en: "To promise, to arrange" },
      { jp: "ニュース", romaji: "nyuusu", pt: "Notícias", en: "News" },
      { jp: "{本当|ほんとう}に", romaji: "hontou ni", pt: "Realmente, de verdade", en: "Really, truly" },
      { jp: "きっと", romaji: "kitto", pt: "Certamente, com certeza", en: "Certainly, surely" },
      { jp: "たぶん", romaji: "tabun", pt: "Talvez, provavelmente", en: "Probably, perhaps" },
      { jp: "{理由|りゆう}", romaji: "riyuu", pt: "Motivo, razão", en: "Reason" },
      { jp: "{説明|せつめい}します", romaji: "setsumei shimasu", pt: "Explicar", en: "To explain" },
      { jp: "{連絡|れんらく}します", romaji: "renraku shimasu", pt: "Avisar, entrar em contato", en: "To contact, to get in touch" },
      { jp: "{簡単|かんたん}", romaji: "kantan", pt: "Simples, fácil", en: "Simple, easy" },
      { jp: "{難|むずか}しい", romaji: "muzukashii", pt: "Difícil", en: "Difficult" },
      { jp: "{便利|べんり}", romaji: "benri", pt: "Prático, conveniente", en: "Convenient, handy" },
      { jp: "{答|こた}えます", romaji: "kotaemasu", pt: "Responder", en: "To answer" },
      { jp: "{残念|ざんねん}", romaji: "zannen", pt: "Que pena (adjetivo な)", en: "A shame, unfortunate (na-adjective)" },
      { jp: "{嬉|うれ}しい", romaji: "ureshii", pt: "Contente, feliz", en: "Glad, happy" },
      { jp: "{声|こえ}", romaji: "koe", pt: "Voz", en: "Voice" }
    ]
  },
  gramatica: {
    title: "{文法|ぶんぽう} (Gramática)", title_en: "{文法|ぶんぽう} (Grammar)",
    intro: "Três pontos nesta lição, todos construídos sobre a forma {普通|ふつう} da lição 20: dar a própria opinião, repetir o que alguém disse e dizer o que provavelmente vai acontecer. Cada cartão traz o modelo, a explicação, os exemplos, uma comparação e as armadilhas.", intro_en: "Three points in this lesson, all built on the {普通|ふつう} form from lesson 20: giving your own opinion, reporting what someone said and saying what is probably going to happen. Each card gives the pattern, the explanation, the examples, a comparison and the pitfalls.",
    points: [
      {
        id: "to-omoimasu",
        title: "{普通形|ふつうけい} ＋ と {思|おも}います", title_en: "{普通形|ふつうけい} ＋ と {思|おも}います",
        pat: "{普通形|ふつうけい} ＋ と {思|おも}います", title_en: "{普通形|ふつうけい} ＋ と {思|おも}います",
        short: "eu acho que… / na minha opinião", short_en: "I think that… / in my opinion",
        mean: "Diz o que você pensa ou acha. O と marca o conteúdo da opinião e {思|おも}います vem sempre no fim. Usa-se quando você não tem certeza absoluta — que é o caso da maior parte das opiniões.", mean_en: "It says what you think or believe. と marks the content of the opinion and {思|おも}います always comes at the end. It is used when you are not absolutely sure — which is the case for most opinions.",
        rule: "A parte de dentro vai sempre em {普通形|ふつうけい} + と; só {思|おも}います fica na forma educada. Negativo: と {思|おも}いません (acho que não). Pergunta: と {思|おも}いますか. Com substantivo e adjetivo な, o だ é obrigatório antes de と.", rule_en: "The inside part is always in the {普通|ふつう} form + と; only {思|おも}います stays in the polite form. Negative: と {思|おも}いません (I don't think so). Question: と {思|おも}いますか. With nouns and な-adjectives the だ is required before と.",
        form: [
          { label: "{動詞|どうし} (verbo)", label_en: "{動詞|どうし} (verb)", text: "Presente: 〜る／〜ない. Passado: 〜た／〜なかった.", text_en: "Present: 〜る／〜ない. Past: 〜た／〜なかった.", ex: [
            { jp: "{行|い}くと {思|おも}います", romaji: "ikuto omoimasu", pt: "acho que ele vai", en: "I think he will go" },
            { jp: "{行|い}ったと {思|おも}います", romaji: "ittato omoimasu", pt: "acho que ele foi", en: "I think he went" },
            { jp: "{行|い}かないと {思|おも}います", romaji: "ikanaito omoimasu", pt: "acho que ele não vai", en: "I think he will not go" }
          ] },
          { label: "い{形容詞|けいようし} (Adj-i)", label_en: "い{形容詞|けいようし} (i-adjective)", text: "O adjetivo entra como está, sem だ.", text_en: "The adjective goes in as it is, with no だ.", ex: [
            { jp: "{寒|さむ}いと {思|おも}います", romaji: "samuito omoimasu", pt: "acho que está frio", en: "I think it is cold" },
            { jp: "{寒|さむ}かったと {思|おも}います", romaji: "samukattato omoimasu", pt: "acho que estava frio", en: "I think it was cold" }
          ] },
          { label: "な{形容詞|けいようし}・{名詞|めいし}", label_en: "な{形容詞|けいようし}・{名詞|めいし}", text: "Aqui o <strong>だ</strong> é obrigatório antes de と.", text_en: "Here the <strong>だ</strong> is required before と.", ex: [
            { jp: "{元気|げんき}だと {思|おも}います", romaji: "genkidato omoimasu", pt: "acho que ele está bem", en: "I think he is well" },
            { jp: "{学生|がくせい}だと {思|おも}います", romaji: "gakuseidato omoimasu", pt: "acho que ele é estudante", en: "I think he is a student" }
          ] }
        ],
        ex: [
          { jp: "{明日|あした}^は {雨|あめ}が {降|ふ}ると {思|おも}います。", romaji: "Ashita wa ame ga furu to omoimasu.", pt: "Acho que amanhã vai chover.", en: "I think it will rain tomorrow." },
          { jp: "{田中|たなか}さん^は もう {帰|かえ}ったと {思|おも}います。", romaji: "Tanaka-san wa mou kaetta to omoimasu.", pt: "Acho que o Tanaka já voltou.", en: "I think Tanaka has already gone home." },
          { jp: "{日本語|にほんご}の {勉強|べんきょう}^は {楽|たの}しいと {思|おも}います。", romaji: "Nihongo no benkyou wa tanoshii to omoimasu.", pt: "Acho que estudar japonês é divertido.", en: "I think studying Japanese is fun." },
          { jp: "{今日|きょう}^は {寒|さむ}くないと {思|おも}います。", romaji: "Kyou wa samukunai to omoimasu.", pt: "Não acho que hoje está frio.", en: "I don't think it is cold today." }
        ],
        contrast: {
          rows: [
            { label: "fato (sem opinião)", label_en: "fact (no opinion)", jp: "{明日|あした}^は {雨|あめ}が {降|ふ}ります。", pt: "Vai chover amanhã: eu vi na previsão.", en: "It will rain tomorrow: I saw it in the forecast." },
            { label: "opinião (と {思|おも}います)", label_en: "opinion (と {思|おも}います)", jp: "{明日|あした}^は {雨|あめ}が {降|ふ}ると {思|おも}います。", pt: "Acho que vai chover amanhã.", en: "I think it will rain tomorrow." }
          ],
          note: "O japonês evita afirmar como fato o que não é certo. Sem と {思|おも}います, a frase soa como certeza.", note_en: "Japanese avoids stating as fact what is not certain. Without と {思|おも}います the sentence sounds like certainty."
        },
        trap: [
          "A parte de dentro não vai na forma educada: {降|ふ}りますと {思|おも}います soa errado; é {降|ふ}ると {思|おも}います.",
          "O と é obrigatório: {降|ふ}る {思|おも}います não liga as duas partes.",
          "Substantivo e adjetivo な precisam de だ: {元気|げんき}だと {思|おも}います, e não {元気|げんき}と {思|おも}います."
        ],
        trap_en: [
          "The inside part is not polite: {降|ふ}りますと {思|おも}います sounds wrong; it is {降|ふ}ると {思|おも}います.",
          "The と is required: {降|ふ}る {思|おも}います does not link the two parts.",
          "Nouns and な-adjectives need だ: {元気|げんき}だと {思|おも}います, not {元気|げんき}と {思|おも}います."
        ]
      },
      {
        id: "to-iimasu",
        title: "「…」と {言|い}います ／ {普通形|ふつうけい} ＋ と {言|い}います", title_en: "「…」と {言|い}います ／ {普通形|ふつうけい} ＋ と {言|い}います",
        pat: "「…」と {言|い}います<br>{普通形|ふつうけい} ＋ と {言|い}います", title_en: "「…」と {言|い}います<br>{普通形|ふつうけい} ＋ と {言|い}います",
        short: "citar o que alguém disse", short_en: "quoting what someone said",
        mean: "Há dois jeitos de contar o que uma pessoa falou: com aspas, repetindo as palavras dela; ou com {普通形|ふつうけい} + と {言|い}います, resumindo o conteúdo. Nos dois casos, quem falou vem com は ou が.", mean_en: "There are two ways to report what a person said: with quotation marks, repeating their words; or with {普通形|ふつうけい} + と {言|い}います, summarising the content. In both cases the speaker comes with は or が.",
        rule: "Citação direta: 「…」と {言|い}います (dentro das aspas, a frase fica como a pessoa falou). Citação indireta: {普通形|ふつうけい} + と {言|い}います. Para perguntar, o verbo é {聞|き}きます, não {言|い}います.", rule_en: "Direct quote: 「…」と {言|い}います (inside the quotation marks the sentence stays as the person said it). Indirect quote: {普通形|ふつうけい} + と {言|い}います. For asking, the verb is {聞|き}きます, not {言|い}います.",
        form: [
          { label: "{直接|ちょくせつ} (citação direta)", label_en: "{直接|ちょくせつ} (direct quote)", text: "As palavras exatas dentro de 「 」.", text_en: "The exact words inside 「 」.", ex: [
            { jp: "{田中|たなか}さん^は「{明日|あした}^は {暇|ひま}です」と {言|い}いました", romaji: "Tanaka-san wa ashita wa hima desu to iimashita", pt: "O Tanaka disse: amanhã estou livre.", en: "Tanaka said: I am free tomorrow." },
            { jp: "「{雨|あめ}が {降|ふ}りますか」と {聞|き}きました", romaji: "Ame ga furimasu ka to kikimashita", pt: "Perguntei: vai chover?", en: "I asked: is it going to rain?" }
          ] },
          { label: "{間接|かんせつ} (citação indireta)", label_en: "{間接|かんせつ} (indirect quote)", text: "Dentro do と, {普通形|ふつうけい}; fora, {言|い}います.", text_en: "Inside と, the {普通|ふつう} form; outside, {言|い}います.", ex: [
            { jp: "{田中|たなか}さん^は {明日|あした}^は {暇|ひま}だと {言|い}いました", romaji: "tanaka-san wa Ashita wa hima da to iimashita", pt: "O Tanaka disse que amanhã está livre.", en: "Tanaka said that he is free tomorrow." },
            { jp: "{雨|あめ}が {降|ふ}ると {言|い}いました", romaji: "ame ga furuto iimashita", pt: "Ele disse que vai chover.", en: "He said that it is going to rain." }
          ] }
        ],
        ex: [
          { jp: "{先生|せんせい}^は「{明日|あした}^は テストです」と {言|い}いました。", romaji: "Sensei wa ashita wa tesuto desu to iimashita.", pt: "O professor disse: amanhã tem prova.", en: "The teacher said: there is a test tomorrow." },
          { jp: "{田中|たなか}さん^は {来週|らいしゅう} {国|くに}^へ {帰|かえ}ると {言|い}いました。", romaji: "Tanaka-san wa raishuu kuni e kaeru to iimashita.", pt: "O Tanaka disse que volta para o país na semana que vem.", en: "Tanaka said he is going back to his country next week." },
          { jp: "「{駅|えき}^は どこですか」と {聞|き}きました。", romaji: "Eki wa doko desu ka to kikimashita.", pt: "Perguntei: onde fica a estação?", en: "I asked: where is the station?" },
          { jp: "{母|はは}^は「{来月|らいげつ} {家|いえ}に {来|き}て ください」と {言|い}いました。", romaji: "Haha wa raigetsu ie ni kite kudasai to iimashita.", pt: "Minha mãe disse: venha em casa no mês que vem.", en: "My mother said: please come to our house next month." }
        ],
        contrast: {
          rows: [
            { label: "com 「 」 (palavras exatas)", label_en: "with 「 」 (exact words)", jp: "{田中|たなか}さん^は「{寒|さむ}いです」と {言|い}いました。", pt: "Ele disse: está frio. (a frase que ele falou, na forma educada)", en: "He said: it's cold. (the sentence he spoke, in the polite form)" },
            { label: "sem 「 」 (o conteúdo)", label_en: "without 「 」 (the content)", jp: "{田中|たなか}さん^は {寒|さむ}いと {言|い}いました。", pt: "Ele disse que está frio. (resumo, com {普通形|ふつうけい})", en: "He said that it is cold. (a summary, with the plain form)" }
          ],
          note: "Dentro das aspas pode aparecer です／ます, porque é o que a pessoa falou. Fora das aspas, o verbo da citação volta para a forma {普通|ふつう}.", note_en: "Inside the quotation marks です／ます may appear, because it is what the person said. Outside the marks, the quoted verb goes back to the {普通|ふつう} form."
        },
        trap: [
          "Não use と{思|おも}います para o que outra pessoa pensa ou disse: para fala, é と {言|い}います.",
          "Cuidado com {言|い}います (dizer) e {話|はな}します (falar com alguém): {友達|ともだち}と {話|はな}しました = conversei com um amigo.",
          "Citação indireta leva {普通形|ふつうけい} mesmo quando a frase original era educada."
        ],
        trap_en: [
          "Do not use と{思|おも}います for what another person thinks or said: for speech it is と {言|い}います.",
          "Mind {言|い}います (to say) and {話|はな}します (to talk with someone): {友達|ともだち}と {話|はな}しました = I talked with a friend.",
          "An indirect quote takes the {普通|ふつう} form even when the original sentence was polite."
        ]
      },
      {
        id: "deshou",
        title: "{普通形|ふつうけい} ＋ でしょう", title_en: "{普通形|ふつうけい} ＋ でしょう",
        pat: "{普通形|ふつうけい} ＋ でしょう<br>でしょう？", title_en: "{普通形|ふつうけい} ＋ でしょう<br>でしょう？",
        short: "provavelmente… / não é?", short_en: "probably… / isn't it?",
        mean: "Mostra que você não tem certeza, mas considera provável — uma previsão ou um palpite. Com a entonação subindo, でしょう？ pede que o outro concorde com você.", mean_en: "It shows that you are not sure but consider something likely — a forecast or a guess. With a rising intonation, でしょう？ asks the other person to agree with you.",
        rule: "Verbos e adjetivos い entram na forma {普通|ふつう} e o でしょう vem logo depois. Substantivo e adjetivo な perdem o だ: {雨|あめ}でしょう, {元気|げんき}でしょう. Na conversa informal, でしょう vira でしょ.", rule_en: "Verbs and い-adjectives go in the {普通|ふつう} form and でしょう comes right after. Nouns and な-adjectives drop the だ: {雨|あめ}でしょう, {元気|げんき}でしょう. In casual talk でしょう becomes でしょ.",
        form: [
          { label: "{動詞|どうし} (verbo)", label_en: "{動詞|どうし} (verb)", text: "Forma de dicionário antes de でしょう.", text_en: "Dictionary form before でしょう.", ex: [
            { jp: "{明日|あした} {降|ふ}るでしょう", romaji: "ashita furu deshou", pt: "provavelmente vai chover amanhã", en: "it will probably rain tomorrow" }
          ] },
          { label: "い{形容詞|けいようし} (Adj-i)", label_en: "い{形容詞|けいようし} (i-adjective)", text: "O adjetivo entra como está.", text_en: "The adjective goes in as it is.", ex: [
            { jp: "{寒|さむ}いでしょう", romaji: "samui deshou", pt: "provavelmente vai estar frio", en: "it will probably be cold" }
          ] },
          { label: "な{形容詞|けいようし}・{名詞|めいし}", label_en: "な{形容詞|けいようし}・{名詞|めいし}", text: "O だ cai: fica só a palavra + でしょう.", text_en: "The だ drops: just the word + でしょう.", ex: [
            { jp: "{元気|げんき}でしょう", romaji: "genki deshou", pt: "provavelmente ele está bem", en: "he is probably well" },
            { jp: "{雨|あめ}でしょう", romaji: "ame deshou", pt: "provavelmente vai chover", en: "it will probably rain" }
          ] }
        ],
        ex: [
          { jp: "{明日|あした}^は {晴|は}れるでしょう。", romaji: "Ashita wa hareru deshou.", pt: "Provavelmente amanhã vai fazer sol.", en: "It will probably be sunny tomorrow." },
          { jp: "{田中|たなか}さん^は もう {帰|かえ}ったでしょう。", romaji: "Tanaka-san wa mou kaetta deshou.", pt: "O Tanaka já deve ter voltado.", en: "Tanaka has probably already gone home." },
          { jp: "{今日|きょう}^は {寒|さむ}いでしょう？", romaji: "Kyou wa samui deshou?", pt: "Hoje está frio, não está?", en: "It's cold today, isn't it?" },
          { jp: "{山|やま}の {上|うえ}^は {寒|さむ}いでしょう。", romaji: "Yama no ue wa samui deshou.", pt: "No alto da montanha deve estar frio.", en: "It is probably cold at the top of the mountain." }
        ],
        contrast: {
          rows: [
            { label: "opinião (と {思|おも}います)", label_en: "opinion (と {思|おも}います)", jp: "{雨|あめ}が {降|ふ}ると {思|おも}います。", pt: "Acho que vai chover: é o meu palpite.", en: "I think it will rain: that is my guess." },
            { label: "previsão (でしょう)", label_en: "forecast (でしょう)", jp: "{雨|あめ}が {降|ふ}るでしょう。", pt: "Provavelmente vai chover: é o que se espera.", en: "It will probably rain: that is what is expected." }
          ],
          note: "でしょう soa mais objetivo, como uma previsão; と {思|おも}います é opinião pessoal. Para o que você viu com os próprios olhos, não use nenhum dos dois.", note_en: "でしょう sounds more objective, like a forecast; と {思|おも}います is a personal opinion. For what you saw with your own eyes, use neither."
        },
        trap: [
          "Nada de だ antes de でしょう com substantivo e adjetivo な: {雨|あめ}でしょう, e não {雨|あめ}だでしょう.",
          "でしょう？ não pede informação nova: você já acha que sabe e espera a concordância.",
          "Com certeza absoluta, fale direto ({降|ふ}ります). でしょう enfraquece a afirmação."
        ],
        trap_en: [
          "No だ before でしょう with nouns and な-adjectives: {雨|あめ}でしょう, not {雨|あめ}だでしょう.",
          "でしょう？ does not ask for new information: you already think you know and expect agreement.",
          "With absolute certainty, say it directly ({降|ふ}ります). でしょう weakens the statement."
        ]
      }
    ]
  },
  renshuuA: {
    title: "{練習|れんしゅう} A", title_en: "{練習|れんしゅう} A",
    exercises: [
      {
        desc: "1. {普通形|ふつうけい} ＋ と {思|おも}います (Junte as duas partes)", desc_en: "1. {普通形|ふつうけい} ＋ と {思|おも}います (Join the two parts)",
        questions: [
          { q: "{明日|あした}^は {雨|あめ}が {降|ふ}ります。＋ {思|おも}います ➔", a: "{明日|あした}^は {雨|あめ}が {降|ふ}ると {思|おも}います。", romaji: "Ashita wa ame ga furu to omoimasu.", pt: "Acho que amanhã vai chover.", en: "I think it will rain tomorrow." },
          { q: "{田中|たなか}さん^は {忙|いそが}しいです。＋ {思|おも}います ➔", a: "{田中|たなか}さん^は {忙|いそが}しいと {思|おも}います。", romaji: "Tanaka-san wa isogashii to omoimasu.", pt: "Acho que o Tanaka está ocupado.", en: "I think Tanaka is busy." },
          { q: "{日本語|にほんご}の テスト^は {簡単|かんたん}でした。＋ {思|おも}います ➔", a: "{日本語|にほんご}の テスト^は {簡単|かんたん}だったと {思|おも}います。", romaji: "Nihongo no tesuto wa kantan datta to omoimasu.", pt: "Acho que a prova de japonês foi fácil.", en: "I think the Japanese test was easy." },
          { q: "{今日|きょう}^は {寒|さむ}いです。＋ {思|おも}いません（negativo） ➔", a: "{今日|きょう}^は {寒|さむ}いと {思|おも}いません。", romaji: "Kyou wa samui to omoimasen.", pt: "Não acho que hoje está frio.", en: "I don't think it is cold today." }
        ]
      },
      {
        desc: "2. でしょう (provavelmente)", desc_en: "2. でしょう (probably)",
        questions: [
          { q: "{明日|あした}^は {寒|さむ}いです ➔", a: "{明日|あした}^は {寒|さむ}いでしょう", romaji: "Ashita wa samui deshou", pt: "Provavelmente amanhã vai estar frio.", en: "It will probably be cold tomorrow." },
          { q: "{田中|たなか}さん^は {元気|げんき}です ➔", a: "{田中|たなか}さん^は {元気|げんき}でしょう", romaji: "Tanaka-san wa genki deshou", pt: "Provavelmente o Tanaka está bem.", en: "Tanaka is probably well." },
          { q: "{明日|あした}^は {雨|あめ}です ➔", a: "{明日|あした}^は {雨|あめ}でしょう", romaji: "Ashita wa ame deshou", pt: "Provavelmente amanhã vai chover.", en: "It will probably rain tomorrow." },
          { q: "{試験|しけん}^は {難|むずか}しいです ➔", a: "{試験|しけん}^は {難|むずか}しいでしょう", romaji: "Shiken wa muzukashii deshou", pt: "Provavelmente a prova vai ser difícil.", en: "The exam will probably be difficult." }
        ]
      },
      {
        desc: "3. {直接|ちょくせつ} ➔ {間接|かんせつ} (citação direta ➔ indireta)", desc_en: "3. Direct quote ➔ indirect quote",
        questions: [
          { q: "「{明日|あした}^は {暇|ひま}です」と {言|い}いました ➔", a: "{明日|あした}^は {暇|ひま}だと {言|い}いました", romaji: "Ashita wa hima da to iimashita", pt: "Disse que amanhã está livre.", en: "He said that he is free tomorrow." },
          { q: "{田中|たなか}さん^は「{来週|らいしゅう} {国|くに}^へ {帰|かえ}ります」と {言|い}いました ➔", a: "{田中|たなか}さん^は {来週|らいしゅう} {国|くに}^へ {帰|かえ}ると {言|い}いました", romaji: "Tanaka-san wa raishuu kuni e kaeru to iimashita", pt: "O Tanaka disse que volta para o país na semana que vem.", en: "Tanaka said he is going back to his country next week." },
          { q: "「{雨|あめ}は {降|ふ}りません」と {言|い}いました ➔", a: "{雨|あめ}は {降|ふ}らないと {言|い}いました", romaji: "Ame wa furanai to iimashita", pt: "Disse que não vai chover.", en: "He said that it will not rain." }
        ]
      }
    ]
  },
  renshuuB: {
    title: "{練習|れんしゅう} B", title_en: "{練習|れんしゅう} B",
    exercises: [
      {
        desc: "1. {意見|いけん}を {言|い}う (Dar a sua opinião)", desc_en: "1. {意見|いけん}を {言|い}う (Giving your opinion)",
        questions: [
          { q: "A: {日本|にほん}の {生活|せいかつ}^は どうですか。<br>B: {忙|いそが}しいですが、{楽|たの}しいです。＋ {思|おも}います ➔", a: "{忙|いそが}しいですが、{楽|たの}しいと {思|おも}います。", romaji: "Isogashii desu ga, tanoshii to omoimasu.", pt: "É corrido, mas acho que é divertido.", en: "It is busy, but I think it is fun." },
          { q: "A: {日本語|にほんご}の {勉強|べんきょう}^は {難|むずか}しいですか。<br>B: いいえ、{簡単|かんたん}です。＋ {思|おも}います ➔", a: "いいえ、{簡単|かんたん}だと {思|おも}います。", romaji: "Iie, kantan da to omoimasu.", pt: "Não, acho que é simples.", en: "No, I think it is simple." },
          { q: "A: {田中|たなか}さん^は もう {帰|かえ}りましたか。<br>B: はい、もう {帰|かえ}りました。＋ {思|おも}います ➔", a: "はい、もう {帰|かえ}ったと {思|おも}います。", romaji: "Hai, mou kaetta to omoimasu.", pt: "Sim, acho que ele já voltou.", en: "Yes, I think he has already gone home." }
        ]
      },
      {
        desc: "2. でしょう／でしょう？ (Provavelmente / não é?)", desc_en: "2. でしょう／でしょう？ (Probably / isn't it?)",
        questions: [
          { q: "{明日|あした}^は {雪|ゆき}です。（たぶん）➔", a: "{明日|あした}^は {雪|ゆき}でしょう。", romaji: "Ashita wa yuki deshou.", pt: "Provavelmente vai nevar amanhã.", en: "It will probably snow tomorrow." },
          { q: "{明日|あした}^は {寒|さむ}いです。＋ でしょう？（pedir concordância）➔", a: "{明日|あした}^は {寒|さむ}いでしょう？", romaji: "Ashita wa samui deshou?", pt: "Hoje está frio, não está?", en: "It's cold today, isn't it?" },
          { q: "{試験|しけん}^は {難|むずか}しいですか。（はい・きっと）➔", a: "はい、きっと {難|むずか}しいでしょう。", romaji: "Hai, kitto muzukashii deshou.", pt: "Sim, com certeza vai ser difícil.", en: "Yes, it will surely be difficult." }
        ]
      },
      {
        desc: "3. と {言|い}います (Repita a fala)", desc_en: "3. と {言|い}います (Report the speech)",
        questions: [
          { q: "{先生|せんせい}「{明日|あした}^は テストです」➔", a: "{先生|せんせい}^は「{明日|あした}^は テストです」と {言|い}いました。", romaji: "Sensei wa ashita wa tesuto desu to iimashita.", pt: "O professor disse: amanhã tem prova.", en: "The teacher said: there is a test tomorrow." },
          { q: "{母|はは}「{来月|らいげつ} {家|いえ}に {来|き}て ください」➔", a: "{母|はは}^は「{来月|らいげつ} {家|いえ}に {来|き}て ください」と {言|い}いました。", romaji: "Haha wa raigetsu ie ni kite kudasai to iimashita.", pt: "Minha mãe disse: venha em casa no mês que vem.", en: "My mother said: please come to our house next month." },
          { q: "{田中|たなか}さん「{約束|やくそく}を しました」➔（{間接|かんせつ}）", a: "{田中|たなか}さん^は {約束|やくそく}を したと {言|い}いました。", romaji: "Tanaka-san wa yakusoku o shita to iimashita.", pt: "O Tanaka disse que fez a promessa.", en: "Tanaka said that he made the promise." }
        ]
      }
    ]
  },
  renshuuC: {
    title: "{練習|れんしゅう} C (Diálogos)", title_en: "{練習|れんしゅう} C (Dialogues)",
    exercises: [
      {
        desc: "1. {天気予報|てんきよほう}を {聞|き}く (Ouvindo a previsão do tempo)", desc_en: "1. {天気予報|てんきよほう}を {聞|き}く (Listening to the weather forecast)",
        questions: [
          { q: "A: {明日|あした}、{雪|ゆき}が {降|ふ}りますか。<br>B: ええ、きっと <strong>[{降|ふ}ります]</strong> でしょう。", a: "{降|ふ}る", romaji: "furu", pt: "cai (forma {普通|ふつう}, antes de でしょう)", en: "falls (plain form, before でしょう)" },
          { q: "A: {東京|とうきょう}の {冬|ふゆ}^は {寒|さむ}いですか。<br>B: ええ、とても <strong>[{寒|さむ}いです]</strong> でしょう。", a: "{寒|さむ}い", romaji: "samui", pt: "frio (forma {普通|ふつう}, antes de でしょう)", en: "cold (plain form, before でしょう)" }
        ]
      },
      {
        desc: "2. うわさ・{意見|いけん} (Rumor e opinião)", desc_en: "2. うわさ・{意見|いけん} (Rumour and opinion)",
        questions: [
          { q: "A: {田中|たなか}さん^は {来週|らいしゅう} {国|くに}^へ {帰|かえ}ると {言|い}いましたよ。<br>B: え？　{本当|ほんとう}ですか。わたし^は <strong>[{来月|らいげつ}です]</strong> と {思|おも}います。", a: "{来月|らいげつ}だ", romaji: "raigetsu da", pt: "é no mês que vem (forma {普通|ふつう} + だ)", en: "it is next month (plain form + だ)" },
          { q: "A: この {店|みせ}^は {便利|べんり}ですか。<br>B: ええ、<strong>[{便利|べんり}です]</strong> と {思|おも}いますよ。", a: "{便利|べんり}だ", romaji: "benri da", pt: "é prático (adjetivo な + だ)", en: "it is convenient (na-adjective + だ)" }
        ]
      }
    ]
  },
  mondai: {
    title: "{問題|もんだい} (Problemas / Avaliação)", title_en: "{問題|もんだい} (Problems / Assessment)",
    exercises: [
      {
        desc: "1. (　　) に {正|ただ}しい ものを {入|い}れなさい。(Complete com a partícula ou a forma certa)", desc_en: "1. (　　) に {正|ただ}しい ものを {入|い}れなさい。(Fill in the right particle or form)",
        questions: [
          { q: "{明日|あした}^は {雨|あめ}が {降|ふ}る （　　） {思|おも}います。", a: "と", romaji: "to", pt: "Partícula que marca o conteúdo da opinião", en: "Particle that marks the content of the opinion" },
          { q: "{田中|たなか}さん^は {元気|げんき} （　　） と {思|おも}います。", a: "だ", romaji: "da", pt: "Adjetivo な precisa de だ antes de と", en: "A な-adjective needs だ before と" },
          { q: "{明日|あした}^は {寒|さむ}い （　　）。", a: "でしょう", romaji: "deshou", pt: "Probabilidade (provavelmente)", en: "Probability (probably)" },
          { q: "{先生|せんせい}^は「{明日|あした}^は テストです」 （　　） {言|い}いました。", a: "と", romaji: "to", pt: "Partícula da citação", en: "Quotation particle" }
        ]
      },
      {
        desc: "2. {文|ぶん}を {間接|かんせつ}の {形|かたち}に しなさい。(Passe para a citação indireta)", desc_en: "2. {文|ぶん}を {間接|かんせつ}の {形|かたち}に しなさい。(Change to the indirect quote)",
        questions: [
          { q: "{田中|たなか}さん^は「{今日|きょう}^は {忙|いそが}しいです」と {言|い}いました。➔", a: "{田中|たなか}さん^は {今日|きょう}^は {忙|いそが}しいと {言|い}いました。", romaji: "Tanaka-san wa kyou wa isogashii to iimashita.", pt: "O Tanaka disse que hoje está ocupado.", en: "Tanaka said that he is busy today." },
          { q: "{母|はは}^は「{雨|あめ}は {降|ふ}りません」と {言|い}いました。➔", a: "{母|はは}^は {雨|あめ}は {降|ふ}らないと {言|い}いました。", romaji: "Haha wa ame wa furanai to iimashita.", pt: "Minha mãe disse que não vai chover.", en: "My mother said that it will not rain." }
        ]
      },
      {
        desc: "3. {読|よ}み{物|もの} (Leitura): メール", desc_en: "3. {読|よ}み{物|もの} (Reading): an email",
        questions: [
          {
            q: `<div class="reading-box">
                                            マリアさん<br>{昨日|きのう}の ニュースを {見|み}ましたか。{台風|たいふう}が {来|き}ますから、{明日|あした}の パーティー^は {中止|ちゅうし}だと {思|おも}います。{残念|ざんねん}ですが、{来週|らいしゅう}に しましょう。<br>わたし^は {大丈夫|だいじょうぶ}です。{雨|あめ}の {日|ひ}は {家|いえ}で {本|ほん}を {読|よ}みます。<br>たなか
                                        </div>
                                        {質問|しつもん}: どうして {明日|あした}の パーティーを しませんか。`,
            a: "{台風|たいふう}が {来|き}ますから。",
            romaji: "Taifuu ga kimasu kara.",
            pt: "Porque o tufão vai chegar.", en: "Because the typhoon is coming."
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
          { tokens: ["{明日|あした}^は", "{雨|あめ}が", "{降|ふ}ると", "{思|おも}います。"], pt: "Acho que amanhã vai chover.", en: "I think it will rain tomorrow.", romaji: "Ashita wa ame ga furu to omoimasu." },
          { tokens: ["{田中|たなか}さん^は", "{来週|らいしゅう}", "{国|くに}^へ", "{帰|かえ}ると", "{言|い}いました。"], pt: "O Tanaka disse que volta para o país na semana que vem.", en: "Tanaka said he is going back to his country next week.", romaji: "Tanaka-san wa raishuu kuni e kaeru to iimashita." },
          { tokens: ["{明日|あした}^は", "{寒|さむ}い", "でしょう。"], pt: "Provavelmente amanhã vai estar frio.", en: "It will probably be cold tomorrow.", romaji: "Ashita wa samui deshou." },
          { tokens: ["{今日|きょう}^は", "{寒|さむ}い", "でしょう？"], pt: "Hoje está frio, não está?", en: "It's cold today, isn't it?", romaji: "Kyou wa samui deshou?" },
          { tokens: ["{先生|せんせい}^は", "「{明日|あした}^は", "テストです」と", "{言|い}いました。"], pt: "O professor disse: amanhã tem prova.", en: "The teacher said: there is a test tomorrow.", romaji: "Sensei wa ashita wa tesuto desu to iimashita." }
        ]
      }
    ]
  }
};
