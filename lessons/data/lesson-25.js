// Dados da lição 25. Formato descrito no README.md.
window.lessonData = {
  vocab: {
    title: "{語彙|ごい} (Vocabulário)", title_en: "{語彙|ごい} (Vocabulary)",
    items: [
      { jp: "{考|かんが}えます", romaji: "kangaemasu", pt: "Pensar", en: "To think" },
      { jp: "{着|つ}きます", romaji: "tsukimasu", pt: "Chegar (a um lugar)", en: "To arrive (at a place)" },
      { jp: "{要|い}ります", romaji: "irimasu", pt: "Precisar, ser necessário", en: "To need, to be necessary" },
      { jp: "{間|ま}に{合|あ}います", romaji: "ma ni aimasu", pt: "Chegar a tempo, dar tempo", en: "To be in time" },
      { jp: "{決|き}めます", romaji: "kimemasu", pt: "Decidir", en: "To decide" },
      { jp: "{降|ふ}ります [あめ・ゆきが〜]", romaji: "furimasu [ame / yuki ga~]", pt: "Cair (chuva, neve)", en: "To fall (rain, snow)" },
      { jp: "{下|さ}がります", romaji: "sagarimasu", pt: "Descer, baixar (preço, febre)", en: "To go down, to drop (price, fever)" },
      { jp: "{忘|わす}れます", romaji: "wasuremasu", pt: "Esquecer", en: "To forget" },
      { jp: "{急|いそ}ぎます", romaji: "isogimasu", pt: "Apressar-se", en: "To hurry" },
      { jp: "{予定|よてい}", romaji: "yotei", pt: "Plano, programação", en: "Plan, schedule" },
      { jp: "もし", romaji: "moshi", pt: "Se (nas condições)", en: "If (with conditions)" },
      { jp: "たぶん", romaji: "tabun", pt: "Provavelmente", en: "Probably" },
      { jp: "{天気|てんき}", romaji: "tenki", pt: "Tempo, clima", en: "Weather" },
      { jp: "{雨|あめ}", romaji: "ame", pt: "Chuva", en: "Rain" },
      { jp: "{雪|ゆき}", romaji: "yuki", pt: "Neve", en: "Snow" },
      { jp: "{用事|ようじ}", romaji: "youji", pt: "Compromisso, tarefa", en: "Errand, business" },
      { jp: "{病気|びょうき}", romaji: "byouki", pt: "Doença", en: "Illness" },
      { jp: "{薬|くすり}", romaji: "kusuri", pt: "Remédio", en: "Medicine" },
      { jp: "{熱|ねつ}", romaji: "netsu", pt: "Febre", en: "Fever" },
      { jp: "{大丈夫|だいじょうぶ} [な]", romaji: "daijoubu [na]", pt: "Está bem, sem problema", en: "All right, no problem" },
      { jp: "ぜひ", romaji: "zehi", pt: "Sem falta, por favor", en: "By all means, please do" }
    ]
  },
  gramatica: {
    title: "{文法|ぶんぽう} (Gramática)", title_en: "{文法|ぶんぽう} (Grammar)",
    intro: "Quatro pontos nesta lição: a condição 〜たら, o “mesmo se” 〜ても com verbos e com adjetivos, e o convite 〜たら どうですか.", intro_en: "Four points in this lesson: the condition 〜たら, “even if” 〜ても with verbs and with adjectives, and the suggestion 〜たら どうですか.",
    points: [
      {
        id: "tara",
        title: "［V-た／V-なかった］ら、… (se…, quando…)", title_en: "［V-た／V-なかった］ら、… (if…, when…)",
        pat: "V-た ＋ ら、〜<br>V-なかった ＋ ら、〜<br>Aい ➔ 〜かったら／Aな・N ➔ 〜だったら",
        short: "uma condição pontual: se A, então B", short_en: "a one-time condition: if A, then B",
        mean: "“Se…” ou “quando…”: se A acontecer, o que vem depois acontece. Fala de uma ocasião concreta, não de uma regra que vale sempre.", mean_en: "“If…” or “when…”: if A happens, what comes next happens. It talks about one concrete occasion, not about a rule that always holds.",
        rule: "Pegue a forma た e acrescente ら: {行|い}ったら, {食|た}べたら. Negativa: なかったら. Adjetivo い: {寒|さむ}かったら. Adjetivo な e substantivo: {静|しず}かだったら, {学生|がくせい}だったら. Depois de たら pode vir pedido, convite, opinião ou intenção.", rule_en: "Take the た form and add ら: {行|い}ったら, {食|た}べたら. Negative: なかったら. い-adjective: {寒|さむ}かったら. な-adjective and noun: {静|しず}かだったら, {学生|がくせい}だったら. After たら you can use requests, invitations, opinions or intentions.",
        form: [
          { label: "{動詞|どうし} (verbo)", label_en: "{動詞|どうし} (verb)", text: "Forma た + <strong>ら</strong>.", text_en: "た form + <strong>ら</strong>.", ex: [
            { jp: "{行|い}きます ➔ {行|い}ったら", romaji: "ikimasu ➔ ittara", pt: "se eu for", en: "if I go" },
            { jp: "{食|た}べます ➔ {食|た}べたら", romaji: "tabemasu ➔ tabetara", pt: "se eu comer", en: "if I eat" },
            { jp: "{飲|の}みません ➔ {飲|の}まなかったら", romaji: "nomimasen ➔ nomanakattara", pt: "se eu não beber", en: "if I do not drink" }
          ] },
          { label: "{形容詞|けいようし} (adjetivo い)", label_en: "{形容詞|けいようし} (い-adjective)", text: "Troque い por <strong>かったら</strong>.", text_en: "Replace い with <strong>かったら</strong>.", ex: [
            { jp: "{寒|さむ}い ➔ {寒|さむ}かったら", romaji: "samui ➔ samukattara", pt: "se estiver frio", en: "if it is cold" }
          ] },
          { label: "Adjetivo な・{名詞|めいし}", label_en: "な-adjective and noun", text: "Acrescente <strong>だったら</strong>.", text_en: "Add <strong>だったら</strong>.", ex: [
            { jp: "{静|しず}か ➔ {静|しず}かだったら", romaji: "shizuka ➔ shizuka dattara", pt: "se for silencioso", en: "if it is quiet" },
            { jp: "{学生|がくせい} ➔ {学生|がくせい}だったら", romaji: "gakusei ➔ gakusei dattara", pt: "se for estudante", en: "if it is a student" }
          ] }
        ],
        ex: [
          { jp: "{雨|あめ}が {降|ふ}ったら、{散歩|さんぽ}に {行|い}きません。", romaji: "Ame ga futtara, sanpo ni ikimasen.", pt: "Se chover, não vou passear.", en: "If it rains, I will not go for a walk." },
          { jp: "{時間|じかん}が あったら、{京都|きょうと}^へ {行|い}きたいです。", romaji: "Jikan ga attara, Kyouto e ikitai desu.", pt: "Se eu tiver tempo, quero ir a Kyoto.", en: "If I have time, I want to go to Kyoto." },
          { jp: "{分|わ}からなかったら、{先生|せんせい}に {聞|き}いて ください。", romaji: "Wakaranakattara, sensei ni kiite kudasai.", pt: "Se não entender, pergunte ao professor.", en: "If you do not understand, ask the teacher." },
          { jp: "{家|いえ}に {着|つ}いたら、{電話|でんわ}して ください。", romaji: "Ie ni tsuitara, denwa shite kudasai.", pt: "Quando chegar em casa, me telefone.", en: "When you get home, call me." }
        ],
        contrast: {
          rows: [
            { label: "〜と (regra que sempre vale)", label_en: "〜と (a rule that always holds)", jp: "この ボタンを {押|お}す と、{音|おと}が {出|で}ます。", pt: "Sempre igual, sozinho: と não aceita pedido.", en: "Always the same, by itself: と does not take requests." },
            { label: "〜たら (uma ocasião)", label_en: "〜たら (one occasion)", jp: "{時間|じかん}が あったら、{音楽|おんがく}を {聞|き}きます。", pt: "Uma situação concreta; aceita pedido e convite.", en: "One concrete situation; it takes requests and invitations." }
          ],
          note: "A diferença prática: pedido, convite e intenção só entram depois de たら — depois de と, não.", note_en: "The practical difference: requests, invitations and intentions only come after たら — not after と."
        },
        trap: [
          "Negativa de たら: {行|い}かなかったら. Errado: {行|い}ないだったら.",
          "たら não é só “se”: também é “quando, depois que”: {家|いえ}に {着|つ}いたら、{電話|でんわ}します.",
          "Para pedido e convite use たら, não と: errado 「{分|わ}からない と、{聞|き}いて ください」."
        ],
        trap_en: [
          "Negative of たら: {行|い}かなかったら. Wrong: {行|い}ないだったら.",
          "たら is not only “if”: it is also “when, after”: {家|いえ}に {着|つ}いたら、{電話|でんわ}します.",
          "For requests and invitations use たら, not と: wrong 「{分|わ}からない と、{聞|き}いて ください」."
        ]
      },
      {
        id: "temo",
        title: "［V-て］も、… (mesmo se…)", title_en: "［V-て］も、… (even if…)",
        pat: "V-て も、〜",
        short: "mesmo se A, B continua acontecendo", short_en: "even if A, B still happens",
        mean: "“Mesmo se…”, “ainda que…”: a segunda parte não muda por causa de A. É comum a segunda parte ser negativa ou surpreendente.", mean_en: "“Even if…”, “although…”: the second part does not change because of A. The second part is often negative or surprising.",
        rule: "Forma て + も. O tempo da frase fica no verbo principal: {雨|あめ}が {降|ふ}って も、{行|い}きます (presente). Não existe “た + も”.", rule_en: "て form + も. The tense of the sentence is on the main verb: {雨|あめ}が {降|ふ}って も、{行|い}きます (present). There is no “た + も”.",
        form: [
          { label: "{動詞|どうし} (forma て) + も", label_en: "{動詞|どうし} (て form) + も", text: "A forma て não muda de tempo.", text_en: "The て form does not change with tense.", ex: [
            { jp: "{雨|あめ}が {降|ふ}って も", romaji: "ame ga futte mo", pt: "mesmo se chover", en: "even if it rains" },
            { jp: "{薬|くすり}を {飲|の}んで も", romaji: "kusuri o nonde mo", pt: "mesmo tomando o remédio", en: "even if I take the medicine" }
          ] }
        ],
        ex: [
          { jp: "{雨|あめ}が {降|ふ}って も、{散歩|さんぽ}に {行|い}きます。", romaji: "Ame ga futtemo, sanpo ni ikimasu.", pt: "Mesmo se chover, vou passear.", en: "Even if it rains, I will go for a walk." },
          { jp: "{薬|くすり}を {飲|の}んで も、{熱|ねつ}が {下|さ}がりません。", romaji: "Kusuri o nondemo, netsu ga sagarimasen.", pt: "Mesmo tomando o remédio, a febre não baixa.", en: "Even after taking the medicine, the fever does not go down." },
          { jp: "{時間|じかん}が なくても、{朝|あさ}ごはんを {食|た}べます。", romaji: "Jikan ga nakutemo, asagohan o tabemasu.", pt: "Mesmo sem tempo, tomo café da manhã.", en: "Even with no time, I have breakfast." },
          { jp: "{雨|あめ}が {降|ふ}って も、{洗濯|せんたく}を します。", romaji: "Ame ga futtemo, sentaku o shimasu.", pt: "Mesmo se chover, lavo roupa.", en: "Even if it rains, I do the laundry." }
        ],
        contrast: {
          rows: [
            { label: "〜たら (o resultado depende de A)", label_en: "〜たら (the result depends on A)", jp: "{時間|じかん}が あったら、{映画|えいが}を {見|み}ます。", pt: "Só se houver tempo: o resultado fica em aberto.", en: "Only if there is time: the result stays open." },
            { label: "〜ても (o resultado não depende de A)", label_en: "〜ても (the result does not depend on A)", jp: "{時間|じかん}が なくても、{映画|えいが}を {見|み}ます。", pt: "Mesmo sem tempo, vejo o filme: o resultado é o mesmo.", en: "Even with no time, I watch the film: the result is the same." }
          ],
          note: "たら abre uma possibilidade; ても diz que a condição não muda a decisão.", note_en: "たら opens a possibility; ても says the condition does not change the decision."
        },
        trap: [
          "A forma é て + も: errado {雨|あめ}が {降|ふ}った も; certo {降|ふ}って も.",
          "ても não é “se” de dúvida: a segunda parte acontece de qualquer jeito. Para uma hipótese real, use たら.",
          "Não confunda com 〜ては いけません (proibição): ても fala de “mesmo se”."
        ],
        trap_en: [
          "The form is て + も: wrong {雨|あめ}が {降|ふ}った も; right {降|ふ}って も.",
          "ても is not an uncertain “if”: the second part happens anyway. For a real hypothesis, use たら.",
          "Do not confuse it with 〜ては いけません (prohibition): ても is about “even if”."
        ]
      },
      {
        id: "temo-adjetivo",
        title: "〜くても／〜でも (mesmo com adjetivos e substantivos)", title_en: "〜くても／〜でも (with adjectives and nouns)",
        pat: "Aい ➔ 〜くても<br>Aな・N ➔ 〜でも",
        short: "o “mesmo se” dos adjetivos e substantivos", short_en: "the “even if” of adjectives and nouns",
        mean: "O mesmo “mesmo se” com adjetivos e substantivos: {高|たか}くても (mesmo que seja caro), {静|しず}かでも, {日曜日|にちようび}でも.", mean_en: "The same “even if” with adjectives and nouns: {高|たか}くても (even if it is expensive), {静|しず}かでも, {日曜日|にちようび}でも.",
        rule: "Adjetivo い: troque い por く + ても. Adjetivo な e substantivo: acrescente でも direto. Exceção: いい ➔ よくても.", rule_en: "い-adjective: replace い with く + ても. な-adjective and noun: add でも directly. Exception: いい ➔ よくても.",
        form: [
          { label: "{形容詞|けいようし} い", label_en: "い-adjective", text: "い ➔ <strong>くても</strong>.", text_en: "い ➔ <strong>くても</strong>.", ex: [
            { jp: "{高|たか}い ➔ {高|たか}くても", romaji: "takai ➔ takakutemo", pt: "mesmo sendo caro", en: "even if it is expensive" },
            { jp: "{寒|さむ}い ➔ {寒|さむ}くても", romaji: "samui ➔ samukutemo", pt: "mesmo estando frio", en: "even if it is cold" },
            { tag: "exceção", tag_en: "exception", jp: "いい ➔ よくても", pt: "mesmo sendo bom", en: "even if it is good" }
          ] },
          { label: "Adjetivo な・{名詞|めいし}", label_en: "な-adjective and noun", text: "Acrescente <strong>でも</strong>, sem な e sem の.", text_en: "Add <strong>でも</strong>, without な or の.", ex: [
            { jp: "{静|しず}かでも", romaji: "shizuka demo", pt: "mesmo sendo silencioso", en: "even if it is quiet" },
            { jp: "{日曜日|にちようび}でも", romaji: "nichiyoubi demo", pt: "mesmo no domingo", en: "even on Sunday" }
          ] }
        ],
        ex: [
          { jp: "{高|たか}くても、{買|か}います。", romaji: "Takakutemo, kaimasu.", pt: "Mesmo sendo caro, compro.", en: "Even if it is expensive, I will buy it." },
          { jp: "{寒|さむ}くても、{窓|まど}を {開|あ}けます。", romaji: "Samukutemo, mado o akemasu.", pt: "Mesmo com frio, abro a janela.", en: "Even if it is cold, I open the window." },
          { jp: "{日曜日|にちようび}でも、{仕事|しごと}が あります。", romaji: "Nichiyoubi demo, shigoto ga arimasu.", pt: "Mesmo no domingo, tenho trabalho.", en: "Even on Sunday, I have work." },
          { jp: "{少|すこ}し {高|たか}くても、この {傘|かさ}が {欲|ほ}しいです。", romaji: "Sukoshi takakutemo, kono kasa ga hoshii desu.", pt: "Mesmo sendo um pouco caro, quero este guarda-chuva.", en: "Even if it is a little expensive, I want this umbrella." }
        ],
        contrast: {
          rows: [
            { label: "〜かったら (se for)", label_en: "〜かったら (if it is)", jp: "{高|たか}かったら、{買|か}いません。", pt: "Se for caro, não compro: o preço decide.", en: "If it is expensive, I will not buy it: the price decides." },
            { label: "〜くても (mesmo se for)", label_en: "〜くても (even if it is)", jp: "{高|たか}くても、{買|か}います。", pt: "Mesmo sendo caro, compro: o preço não decide.", en: "Even if it is expensive, I will buy it: the price does not decide." }
          ],
          note: "A diferença está no resultado: たら deixa o resultado em aberto; ても afirma que ele não muda.", note_en: "The difference is in the result: たら leaves the result open; ても states that it does not change."
        },
        trap: [
          "Adjetivo い não leva でも: errado {高|たか}いでも; certo {高|たか}くても.",
          "いい é exceção: よくても (não いくても).",
          "Substantivo leva でも direto, sem の: {日曜日|にちようび}でも."
        ],
        trap_en: [
          "い-adjectives do not take でも: wrong {高|たか}いでも; right {高|たか}くても.",
          "いい is an exception: よくても (not いくても).",
          "Nouns take でも directly, without の: {日曜日|にちようび}でも."
        ]
      },
      {
        id: "tara-dou",
        title: "〜たら どうですか (que tal…?)", title_en: "〜たら どうですか (how about…?)",
        pat: "V-たら どうですか",
        short: "sugestão gentil", short_en: "a gentle suggestion",
        mean: "Sugere uma opção com educação: “que tal…?”, “por que não…?”. Não é ordem: pede a opinião de quem ouve.", mean_en: "Suggests an option politely: “how about…?”, “why don't you…?”. It is not an order: it asks for the other person's opinion.",
        rule: "Forma た + ら + どうですか. Respostas comuns: はい、そう します／いいですね。O verbo de sugestão pode ser também 〜ませんか (lição 14).", rule_en: "た form + ら + どうですか. Common answers: はい、そう します／いいですね。The suggestion can also use 〜ませんか (lesson 14).",
        ex: [
          { jp: "{少|すこ}し {休|やす}んだら どうですか。", romaji: "Sukoshi yasundara dou desu ka.", pt: "Que tal descansar um pouco?", en: "How about resting a little?" },
          { jp: "{熱|ねつ}が ありますね。{病院|びょういん}^へ {行|い}ったら どうですか。", romaji: "Netsu ga arimasu ne. Byouin e ittara dou desu ka.", pt: "Você está com febre. Que tal ir ao hospital?", en: "You have a fever. How about going to the hospital?" },
          { jp: "{日曜日|にちようび}に {映画|えいが}を {見|み}たら どうですか。", romaji: "Nichiyoubi ni eiga o mitara dou desu ka.", pt: "Que tal ver um filme no domingo?", en: "How about watching a film on Sunday?" },
          { jp: "{先生|せんせい}に {聞|き}いたら どうですか。", romaji: "Sensei ni kiitara dou desu ka.", pt: "Que tal perguntar ao professor?", en: "How about asking the teacher?" }
        ],
        contrast: {
          rows: [
            { label: "〜たら どうですか (sugiro a você)", label_en: "〜たら どうですか (I suggest to you)", jp: "{京都|きょうと}^へ {行|い}ったら どうですか。", pt: "Sugestão: quem ouve decide.", en: "Suggestion: the listener decides." },
            { label: "〜ましょうか (ofereço a mim)", label_en: "〜ましょうか (I offer myself)", jp: "{荷物|にもつ}を {持|も}ちましょうか。", pt: "Ofereço fazer eu mesmo.", en: "I offer to do it myself." }
          ],
          note: "どうですか pede a opinião de quem ouve; ましょうか oferece a sua ajuda.", note_en: "どうですか asks the listener's opinion; ましょうか offers your own help."
        },
        trap: [
          "Não use と com sugestão: errado 「{京都|きょうと}^へ {行|い}く と どうですか」.",
          "たら どうですか sugere, não manda. Para pedido direto, use 〜て ください.",
          "Cuidado com o tom com o professor: a sugestão fica melhor com 〜ませんか, que é mais educado."
        ],
        trap_en: [
          "Do not use と with a suggestion: wrong 「{京都|きょうと}^へ {行|い}く と どうですか」.",
          "たら どうですか suggests, it does not order. For a direct request, use 〜て ください.",
          "Mind the tone with the teacher: the suggestion sounds better with 〜ませんか, which is more polite."
        ]
      }
    ]
  },
  renshuuA: {
    title: "{練習|れんしゅう} A", title_en: "{練習|れんしゅう} A",
    content: `
<div class="card">
    <h2 class="card-header">{練習|れんしゅう} A (Tabelas de substituição)</h2>
    <p class="page-intro">Leia cada linha em voz alta e compare a condição com o resultado.</p>
</div>
<div class="card">
    <h3 class="card-header">1. 〜たら (se…, quando…)</h3>
    <table class="grammar-table">
        <tr><th>Condição</th><th>Resultado</th></tr>
        <tr><td>{雨|あめ}が {降|ふ}ったら、</td><td>{散歩|さんぽ}に {行|い}きません。</td></tr>
        <tr><td>{時間|じかん}が あったら、</td><td>{京都|きょうと}^へ {行|い}きたいです。</td></tr>
        <tr><td>{分|わ}からなかったら、</td><td>{先生|せんせい}に {聞|き}いて ください。</td></tr>
        <tr><td>{家|いえ}に {着|つ}いたら、</td><td>{電話|でんわ}して ください。</td></tr>
    </table>
</div>
<div class="card">
    <h3 class="card-header">2. 〜ても (mesmo se…)</h3>
    <table class="grammar-table">
        <tr><th>Condição</th><th>Resultado</th></tr>
        <tr><td>{雨|あめ}が {降|ふ}って も、</td><td>{散歩|さんぽ}に {行|い}きます。</td></tr>
        <tr><td>{薬|くすり}を {飲|の}んで も、</td><td>{熱|ねつ}が {下|さ}がりません。</td></tr>
        <tr><td>{時間|じかん}が なくても、</td><td>{朝|あさ}ごはんを {食|た}べます。</td></tr>
    </table>
</div>
<div class="card">
    <h3 class="card-header">3. 〜くても・〜でも (adjetivos e substantivos)</h3>
    <table class="grammar-table">
        <tr><th>Forma</th><th>Exemplo</th></tr>
        <tr><td>{高|たか}い ➔ {高|たか}くても</td><td>{高|たか}くても、{買|か}います。</td></tr>
        <tr><td>{寒|さむ}い ➔ {寒|さむ}くても</td><td>{寒|さむ}くても、{窓|まど}を {開|あ}けます。</td></tr>
        <tr><td>{静|しず}か ➔ {静|しず}かでも</td><td>{静|しず}かでも いいですか。</td></tr>
        <tr><td>{日曜日|にちようび} ➔ {日曜日|にちようび}でも</td><td>{日曜日|にちようび}でも、{仕事|しごと}が あります。</td></tr>
    </table>
</div>
<div class="card">
    <h3 class="card-header">4. 〜たら どうですか (sugestões)</h3>
    <table class="grammar-table">
        <tr><th>Situação</th><th>Sugestão</th></tr>
        <tr><td>{疲|つか}れました。</td><td>{少|すこ}し {休|やす}んだら どうですか。</td></tr>
        <tr><td>{熱|ねつ}が あります。</td><td>{病院|びょういん}^へ {行|い}ったら どうですか。</td></tr>
        <tr><td>{分|わ}かりません。</td><td>{先生|せんせい}に {聞|き}いたら どうですか。</td></tr>
    </table>
</div>
`, content_en: `
<div class="card">
    <h2 class="card-header">{練習|れんしゅう} A (Substitution tables)</h2>
    <p class="page-intro">Read each line aloud and compare the condition with the result.</p>
</div>
<div class="card">
    <h3 class="card-header">1. 〜たら (if…, when…)</h3>
    <table class="grammar-table">
        <tr><th>Condition</th><th>Result</th></tr>
        <tr><td>{雨|あめ}が {降|ふ}ったら、</td><td>{散歩|さんぽ}に {行|い}きません。</td></tr>
        <tr><td>{時間|じかん}が あったら、</td><td>{京都|きょうと}^へ {行|い}きたいです。</td></tr>
        <tr><td>{分|わ}からなかったら、</td><td>{先生|せんせい}に {聞|き}いて ください。</td></tr>
        <tr><td>{家|いえ}に {着|つ}いたら、</td><td>{電話|でんわ}して ください。</td></tr>
    </table>
</div>
<div class="card">
    <h3 class="card-header">2. 〜ても (even if…)</h3>
    <table class="grammar-table">
        <tr><th>Condition</th><th>Result</th></tr>
        <tr><td>{雨|あめ}が {降|ふ}って も、</td><td>{散歩|さんぽ}に {行|い}きます。</td></tr>
        <tr><td>{薬|くすり}を {飲|の}んで も、</td><td>{熱|ねつ}が {下|さ}がりません。</td></tr>
        <tr><td>{時間|じかん}が なくても、</td><td>{朝|あさ}ごはんを {食|た}べます。</td></tr>
    </table>
</div>
<div class="card">
    <h3 class="card-header">3. 〜くても・〜でも (adjectives and nouns)</h3>
    <table class="grammar-table">
        <tr><th>Form</th><th>Example</th></tr>
        <tr><td>{高|たか}い ➔ {高|たか}くても</td><td>{高|たか}くても、{買|か}います。</td></tr>
        <tr><td>{寒|さむ}い ➔ {寒|さむ}くても</td><td>{寒|さむ}くても、{窓|まど}を {開|あ}けます。</td></tr>
        <tr><td>{静|しず}か ➔ {静|しず}かでも</td><td>{静|しず}かでも いいですか。</td></tr>
        <tr><td>{日曜日|にちようび} ➔ {日曜日|にちようび}でも</td><td>{日曜日|にちようび}でも、{仕事|しごと}が あります。</td></tr>
    </table>
</div>
<div class="card">
    <h3 class="card-header">4. 〜たら どうですか (suggestions)</h3>
    <table class="grammar-table">
        <tr><th>Situation</th><th>Suggestion</th></tr>
        <tr><td>{疲|つか}れました。</td><td>{少|すこ}し {休|やす}んだら どうですか。</td></tr>
        <tr><td>{熱|ねつ}が あります。</td><td>{病院|びょういん}^へ {行|い}ったら どうですか。</td></tr>
        <tr><td>{分|わ}かりません。</td><td>{先生|せんせい}に {聞|き}いたら どうですか。</td></tr>
    </table>
</div>
`
  },
  renshuuB: {
    title: "{練習|れんしゅう} B", title_en: "{練習|れんしゅう} B",
    exercises: [
      {
        desc: "1. たら{形|けい}に しなさい。(Passe para a forma たら)", desc_en: "1. たら{形|けい}に しなさい。(Change to the たら form)",
        questions: [
          { q: "{行|い}きます ➔", a: "{行|い}ったら", romaji: "ittara", pt: "Se eu for", en: "If I go" },
          { q: "{食|た}べます ➔", a: "{食|た}べたら", romaji: "tabetara", pt: "Se eu comer", en: "If I eat" },
          { q: "{降|ふ}ります ➔", a: "{降|ふ}ったら", romaji: "futtara", pt: "Se cair (chuva)", en: "If it falls (rain)" },
          { q: "{飲|の}みます ➔", a: "{飲|の}んだら", romaji: "nondara", pt: "Se eu beber", en: "If I drink" },
          { q: "{来|き}ます ➔", a: "{来|き}たら", romaji: "kitara", pt: "Se vier", en: "If someone comes" },
          { q: "します ➔", a: "したら", romaji: "shitara", pt: "Se fizer", en: "If I do it" },
          { q: "あります ➔", a: "あったら", romaji: "attara", pt: "Se houver", en: "If there is" },
          { q: "{分|わ}かりません ➔", a: "{分|わ}からなかったら", romaji: "wakaranakattara", pt: "Se eu não entender", en: "If I do not understand" }
        ]
      },
      {
        desc: "2. 〜たら を{使|つか}って、{一|ひと}つの{文|ぶん}に しなさい。(Una as duas partes com 〜たら)", desc_en: "2. 〜たら を{使|つか}って、{一|ひと}つの{文|ぶん}に しなさい。(Join the two parts with 〜たら)",
        questions: [
          { q: "{雨|あめ}が {降|ふ}ります。➔ {散歩|さんぽ}に {行|い}きません。", a: "{雨|あめ}が {降|ふ}ったら、{散歩|さんぽ}に {行|い}きません。", romaji: "Ame ga futtara, sanpo ni ikimasen.", pt: "Se chover, não vou passear.", en: "If it rains, I will not go for a walk." },
          { q: "{時間|じかん}が あります。➔ {京都|きょうと}^へ {行|い}きたいです。", a: "{時間|じかん}が あったら、{京都|きょうと}^へ {行|い}きたいです。", romaji: "Jikan ga attara, Kyouto e ikitai desu.", pt: "Se tiver tempo, quero ir a Kyoto.", en: "If I have time, I want to go to Kyoto." },
          { q: "{分|わ}かりません。➔ {先生|せんせい}に {聞|き}いて ください。", a: "{分|わ}からなかったら、{先生|せんせい}に {聞|き}いて ください。", romaji: "Wakaranakattara, sensei ni kiite kudasai.", pt: "Se não entender, pergunte ao professor.", en: "If you do not understand, ask the teacher." }
        ]
      },
      {
        desc: "3. 〜ても を{使|つか}って、{一|ひと}つの{文|ぶん}に しなさい。(Una as duas partes com 〜ても)", desc_en: "3. 〜ても を{使|つか}って、{一|ひと}つの{文|ぶん}に しなさい。(Join the two parts with 〜ても)",
        questions: [
          { q: "{雨|あめ}が {降|ふ}ります。➔ {洗濯|せんたく}を します。", a: "{雨|あめ}が {降|ふ}って も、{洗濯|せんたく}を します。", romaji: "Ame ga futte mo, sentaku o shimasu.", pt: "Mesmo se chover, lavo roupa.", en: "Even if it rains, I do the laundry." },
          { q: "{薬|くすり}を {飲|の}みます。➔ {熱|ねつ}が {下|さ}がりません。", a: "{薬|くすり}を {飲|の}んで も、{熱|ねつ}が {下|さ}がりません。", romaji: "Kusuri o nonde mo, netsu ga sagarimasen.", pt: "Mesmo tomando o remédio, a febre não baixa.", en: "Even after taking the medicine, the fever does not go down." },
          { q: "{時間|じかん}が ありません。➔ {朝|あさ}ごはんを {食|た}べます。", a: "{時間|じかん}が なくても、{朝|あさ}ごはんを {食|た}べます。", romaji: "Jikan ga nakutemo, asagohan o tabemasu.", pt: "Mesmo sem tempo, tomo café da manhã.", en: "Even with no time, I have breakfast." }
        ]
      },
      {
        desc: "4. 〜くても・〜でも に しなさい。(Passe para 〜くても ou 〜でも)", desc_en: "4. 〜くても・〜でも に しなさい。(Change to 〜くても or 〜でも)",
        questions: [
          { q: "{高|たか}い ➔", a: "{高|たか}くても", romaji: "takakutemo", pt: "Mesmo sendo caro", en: "Even if it is expensive" },
          { q: "{寒|さむ}い ➔", a: "{寒|さむ}くても", romaji: "samukutemo", pt: "Mesmo estando frio", en: "Even if it is cold" },
          { q: "{静|しず}か ➔", a: "{静|しず}かでも", romaji: "shizuka demo", pt: "Mesmo sendo silencioso", en: "Even if it is quiet" },
          { q: "{日曜日|にちようび} ➔", a: "{日曜日|にちようび}でも", romaji: "nichiyoubi demo", pt: "Mesmo no domingo", en: "Even on Sunday" },
          { q: "いい ➔", a: "よくても", romaji: "yokutemo", pt: "Mesmo sendo bom", en: "Even if it is good" }
        ]
      },
      {
        desc: "5. 〜たら どうですか (Faça sugestões)", desc_en: "5. 〜たら どうですか (Make suggestions)",
        questions: [
          { q: "{疲|つか}れました。➔ {少|すこ}し {休|やす}みます。", a: "{少|すこ}し {休|やす}んだら どうですか。", romaji: "Sukoshi yasundara dou desu ka.", pt: "Que tal descansar um pouco?", en: "How about resting a little?" },
          { q: "{熱|ねつ}が あります。➔ {病院|びょういん}^へ {行|い}きます。", a: "{病院|びょういん}^へ {行|い}ったら どうですか。", romaji: "Byouin e ittara dou desu ka.", pt: "Que tal ir ao hospital?", en: "How about going to the hospital?" },
          { q: "{分|わ}かりません。➔ {先生|せんせい}に {聞|き}きます。", a: "{先生|せんせい}に {聞|き}いたら どうですか。", romaji: "Sensei ni kiitara dou desu ka.", pt: "Que tal perguntar ao professor?", en: "How about asking the teacher?" }
        ]
      }
    ]
  },
  renshuuC: {
    title: "{練習|れんしゅう} C (Diálogos)", title_en: "{練習|れんしゅう} C (Dialogues)",
    exercises: [
      {
        desc: "1. （　　）の ことばを {正|ただ}しい {形|けい} に しなさい。(Passe para たら ou ても)", desc_en: "1. （　　）の ことばを {正|ただ}しい {形|けい} に しなさい。(Change to たら or ても)",
        questions: [
          { q: "A: {明日|あした}、{何|なに}を しますか。<br>B: {雨|あめ}が（{降|ふ}ります ➔ ＿＿）、{家|いえ}で {本|ほん}を {読|よ}みます。<br>A: いいですね。", a: "{降|ふ}ったら", romaji: "futtara", pt: "Se chover, leio em casa.", en: "If it rains, I read at home." },
          { q: "A: {熱|ねつ}が ありますね。<br>B: ええ。{薬|くすり}を（{飲|の}みます ➔ ＿＿）も、{熱|ねつ}が {下|さ}がりません。<br>A: それは たいへんですね。", a: "{飲|の}んで", romaji: "nonde", pt: "Mesmo tomando o remédio, a febre não baixa.", en: "Even after taking the medicine, the fever does not go down." },
          { q: "A: {日曜日|にちようび}も {会社|かいしゃ}で {働|はたら}きますか。<br>B: ええ。{日曜日|にちようび}（＿＿）{仕事|しごと}が あります。", a: "でも", romaji: "demo", pt: "Mesmo no domingo, tenho trabalho.", en: "Even on Sunday, I have work." }
        ]
      },
      {
        desc: "2. アドバイス (Dando conselhos)", desc_en: "2. アドバイス (Giving advice)",
        questions: [
          { q: "A: {漢字|かんじ}が よく {分|わ}かりません。<br>B: {先生|せんせい}に（{聞|き}きます ➔ ＿＿）どうですか。<br>A: そうですね。そう します。", a: "{聞|き}いたら", romaji: "kiitara", pt: "Que tal perguntar ao professor?", en: "How about asking the teacher?" },
          { q: "A: {明日|あした}の {予定|よてい}は まだ {決|き}めて いません。<br>B: {京都|きょうと}^へ（{行|い}きます ➔ ＿＿）どうですか。<br>A: いいですね。ぜひ {行|い}きたいです。", a: "{行|い}ったら", romaji: "ittara", pt: "Que tal ir a Kyoto?", en: "How about going to Kyoto?" }
        ]
      }
    ]
  },
  mondai: {
    title: "{問題|もんだい} (Problemas / Avaliação)", title_en: "{問題|もんだい} (Problems / Assessment)",
    exercises: [
      {
        desc: "1. (　　) に {正|ただ}しい {助詞|じょし} を {入|い}れなさい。 (Preencha as partículas: が, を, に)", desc_en: "1. (　　) に {正|ただ}しい {助詞|じょし} を {入|い}れなさい。 (Fill in the particles: が, を, に)",
        questions: [
          { q: "{雨|あめ}（　　）{降|ふ}ったら、{散歩|さんぽ}に {行|い}きません。", a: "が", romaji: "ga", pt: "Sujeito de {降|ふ}ります (chuva): が.", en: "Subject of {降|ふ}ります (rain): が." },
          { q: "{先生|せんせい}（　　）{聞|き}いたら どうですか。", a: "に", romaji: "ni", pt: "Alvo de perguntar: に.", en: "Target of asking: に." },
          { q: "{日曜日|にちようび}でも、{仕事|しごと}（　　）あります。", a: "が", romaji: "ga", pt: "Objeto de あります: が.", en: "Object of あります: が." },
          { q: "{時間|じかん}（　　）あったら、{映画|えいが}を {見|み}ます。", a: "が", romaji: "ga", pt: "Sujeito de あります: が.", en: "Subject of あります: が." }
        ]
      },
      {
        desc: "2. （　　）の ことばを {正|ただ}しい {形|けい}に しなさい。 (Mude para a forma correta)", desc_en: "2. （　　）の ことばを {正|ただ}しい {形|けい}に しなさい。 (Change to the correct form)",
        questions: [
          { q: "{雨|あめ}が（{降|ふ}ります ➔ ＿＿）、{散歩|さんぽ}に {行|い}きません。", a: "{降|ふ}ったら", romaji: "futtara", pt: "Forma たら do verbo.", en: "The たら form of the verb." },
          { q: "{薬|くすり}を（{飲|の}みます ➔ ＿＿）も、{熱|ねつ}が {下|さ}がりません。", a: "{飲|の}んで", romaji: "nonde", pt: "Forma て antes de も.", en: "て form before も." },
          { q: "{高|たか}い ➔（＿＿）、{買|か}います。", a: "{高|たか}くても", romaji: "takakutemo", pt: "Adjetivo い: くても.", en: "い-adjective: くても." },
          { q: "{日曜日|にちようび} ➔（＿＿）、{仕事|しごと}が あります。", a: "{日曜日|にちようび}でも", romaji: "nichiyoubi demo", pt: "Substantivo + でも.", en: "Noun + でも." }
        ]
      },
      {
        desc: "3. {読|よ}み{物|もの} (Leitura): {明日|あした}の お{祭|まつ}り", desc_en: "3. {読|よ}み{物|もの} (Reading): {明日|あした}の お{祭|まつ}り",
        questions: [
          {
            q: `<div class="reading-box">
                                {明日|あした}は {町|まち}の お{祭|まつ}りです。{雨|あめ}が {降|ふ}って も、お{祭|まつ}りは あります。でも、{雨|あめ}が {降|ふ}ったら、{学校|がっこう}の {中|なか}で します。{天気|てんき}が よかったら、{公園|こうえん}で します。{私|わたし}は {友達|ともだち}と {行|い}きます。{雨|あめ}が {降|ふ}ったら、かさを {持|も}って {行|い}きます。
                                </div>
                                {質問|しつもん}: お{祭|まつ}りは、{雨|あめ}が {降|ふ}ったら どこで しますか。<br>➔ ＿＿＿＿＿＿＿＿＿。`,
            a: "{学校|がっこう}の {中|なか}で します",
            romaji: "Gakkou no naka de shimasu.",
            pt: "Na escola (dentro da escola).", en: "At school (inside the school)."
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
          { tokens: ["{雨|あめ}が", "{降|ふ}ったら、", "{散歩|さんぽ}に", "{行|い}きません。"], pt: "Se chover, não vou passear.", en: "If it rains, I will not go for a walk.", romaji: "Ame ga futtara, sanpo ni ikimasen." },
          { tokens: ["{薬|くすり}を", "{飲|の}んで", "も、", "{熱|ねつ}が", "{下|さ}がりません。"], pt: "Mesmo tomando o remédio, a febre não baixa.", en: "Even after taking the medicine, the fever does not go down.", romaji: "Kusuri o nondemo, netsu ga sagarimasen." },
          { tokens: ["{高|たか}くても、", "この", "{傘|かさ}が", "{欲|ほ}しいです。"], pt: "Mesmo sendo caro, quero este guarda-chuva.", en: "Even if it is expensive, I want this umbrella.", romaji: "Takakutemo, kono kasa ga hoshii desu." },
          { tokens: ["{先生|せんせい}に", "{聞|き}いたら", "どうですか。"], pt: "Que tal perguntar ao professor?", en: "How about asking the teacher?", romaji: "Sensei ni kiitara dou desu ka." }
        ]
      }
    ]
  }
};
