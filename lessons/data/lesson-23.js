// Dados da lição 23. Formato descrito no README.md.
window.lessonData = {
  vocab: {
    title: "{語彙|ごい} (Vocabulário)", title_en: "{語彙|ごい} (Vocabulary)",
    items: [
      { jp: "{聞|き}きます [{先生|せんせい}に〜]", romaji: "kikimasu [sensei ni~]", pt: "Perguntar (a alguém), ouvir", en: "To ask (someone), to listen" },
      { jp: "{返|かえ}します", romaji: "kae shimasu", pt: "Devolver", en: "To give back, to return (something)" },
      { jp: "{出|で}ます [お{金|かね}が〜]", romaji: "demasu [okane ga~]", pt: "Sair (dinheiro da máquina), sair de dentro", en: "To come out (money from a machine)" },
      { jp: "{動|うご}きます", romaji: "ugokimasu", pt: "Funcionar, mover-se (máquina)", en: "To work, to move (a machine)" },
      { jp: "{回|まわ}します", romaji: "mawa shimasu", pt: "Girar, rodar (um botão, um interruptor)", en: "To turn, to rotate (a dial, a switch)" },
      { jp: "{引|ひ}きます", romaji: "hikimasu", pt: "Puxar", en: "To pull" },
      { jp: "{変|か}わります", romaji: "kawarimasu", pt: "Mudar, trocar", en: "To change" },
      { jp: "{探|さが}します", romaji: "saga shimasu", pt: "Procurar", en: "To look for" },
      { jp: "〜{方|かた}", romaji: "~kata", pt: "Maneira de fazer, modo de", en: "Way of doing, how to" },
      { jp: "スイッチ", romaji: "suitchi", pt: "Interruptor", en: "Switch" },
      { jp: "ボタン", romaji: "botan", pt: "Botão", en: "Button" },
      { jp: "カウンター", romaji: "kauntaa", pt: "Balcão de atendimento", en: "Service counter" },
      { jp: "{機械|きかい}", romaji: "kikai", pt: "Máquina", en: "Machine" },
      { jp: "{本棚|ほんだな}", romaji: "hondana", pt: "Estante de livros", en: "Bookshelf" },
      { jp: "{音|おと}", romaji: "oto", pt: "Som, barulho", en: "Sound, noise" },
      { jp: "{図書館|としょかん}", romaji: "toshokan", pt: "Biblioteca", en: "Library" },
      { jp: "{紙|かみ}", romaji: "kami", pt: "Papel", en: "Paper" },
      { jp: "{貸|か}します", romaji: "ka shimasu", pt: "Emprestar (algo a alguém)", en: "To lend (something to someone)" },
      { jp: "{借|か}ります", romaji: "karimasu", pt: "Pegar emprestado", en: "To borrow" },
      { jp: "{使|つか}います", romaji: "tsukaimasu", pt: "Usar", en: "To use" }
    ]
  },
  gramatica: {
    title: "{文法|ぶんぽう} (Gramática)", title_en: "{文法|ぶんぽう} (Grammar)",
    intro: "Três pontos nesta lição: o momento (〜とき), o tempo que vem antes de とき e a consequência natural (〜と). Cada cartão traz o modelo de frase, a explicação, os exemplos, uma comparação e os erros mais comuns.", intro_en: "Three points in this lesson: the moment (〜とき), the tense that comes before とき, and natural consequence (〜と). Each card gives the sentence pattern, the explanation, the examples, a comparison and the most common mistakes.",
    points: [
      {
        id: "toki",
        title: "〜とき (quando…, no momento em que…)", title_en: "〜とき (when…, at the moment when…)",
        pat: "V-る／V-た ＋ とき<br>Aい ＋ とき<br>Aな ＋ な とき／N ＋ の とき",
        short: "o momento de uma ação ou de um estado", short_en: "the moment of an action or a state",
        mean: "A oração que termina em とき diz em que momento acontece a ação principal: “quando…”, “na época em que…”. Não é pergunta nem dúvida: é só o momento.", mean_en: "The clause ending in とき says at what moment the main action happens: “when…”, “at the time when…”. It is not a question or a doubt: it is just the moment.",
        rule: "O verbo antes de とき fica na forma comum (dicionário, ない{形|けい} ou た{形|けい}), nunca em ます. Adjetivo い fica igual; adjetivo な leva な; substantivo leva の.", rule_en: "The verb before とき stays in the plain form (dictionary, ない form or た form), never in ます. い-adjectives stay as they are; な-adjectives take な; nouns take の.",
        form: [
          { label: "{動詞|どうし} (verbo)", label_en: "{動詞|どうし} (verb)", text: "Forma comum + <strong>とき</strong>.", text_en: "Plain form + <strong>とき</strong>.", ex: [
            { jp: "{図書館|としょかん}^へ {行|い}く とき", romaji: "toshokan e iku toki", pt: "quando vou à biblioteca", en: "when I go to the library" },
            { jp: "{本|ほん}を {借|か}りた とき", romaji: "hon o karita toki", pt: "quando peguei um livro emprestado", en: "when I borrowed a book" }
          ] },
          { label: "{形容詞|けいようし} (adjetivo い)", label_en: "{形容詞|けいようし} (い-adjective)", text: "O adjetivo fica igual, sem です.", text_en: "The adjective stays the same, without です.", ex: [
            { jp: "{寒|さむ}い とき", romaji: "samui toki", pt: "quando está frio", en: "when it is cold" },
            { jp: "{忙|いそが}しい とき", romaji: "isogashii toki", pt: "quando estou ocupado", en: "when I am busy" }
          ] },
          { label: "Adjetivo な", label_en: "な-adjective", text: "Acrescente <strong>な</strong>.", text_en: "Add <strong>な</strong>.", ex: [
            { jp: "{暇|ひま}な とき", romaji: "hima na toki", pt: "quando estou livre", en: "when I am free" },
            { jp: "{静|しず}かな とき", romaji: "shizuka na toki", pt: "quando está silencioso", en: "when it is quiet" }
          ] },
          { label: "{名詞|めいし} (substantivo)", label_en: "{名詞|めいし} (noun)", text: "Acrescente <strong>の</strong>.", text_en: "Add <strong>の</strong>.", ex: [
            { jp: "{子|こ}どもの とき", romaji: "kodomo no toki", pt: "quando eu era criança", en: "when I was a child" },
            { jp: "{学生|がくせい}の とき", romaji: "gakusei no toki", pt: "quando eu era estudante", en: "when I was a student" }
          ] }
        ],
        ex: [
          { jp: "{図書館|としょかん}で {本|ほん}を {借|か}りる とき、カウンターで カードを {見|み}せます。", romaji: "Toshokan de hon o kariru toki, kauntaa de kaado o misemasu.", pt: "Quando pego um livro emprestado na biblioteca, mostro o cartão no balcão.", en: "When I borrow a book at the library, I show my card at the counter." },
          { jp: "{子|こ}どもの とき、よく {海|うみ}で {泳|およ}ぎました。", romaji: "Kodomo no toki, yoku umi de oyogimashita.", pt: "Quando era criança, nadava muito no mar.", en: "When I was a child, I often swam in the sea." },
          { jp: "{暇|ひま}な とき、{音楽|おんがく}を {聞|き}きます。", romaji: "Hima na toki, ongaku o kikimasu.", pt: "Quando estou livre, ouço música.", en: "When I am free, I listen to music." },
          { jp: "{寒|さむ}い ときは、{窓|まど}を {閉|し}めて ください。", romaji: "Samui toki wa, mado o shimete kudasai.", pt: "Quando estiver frio, feche a janela.", en: "When it is cold, please close the window." }
        ],
        contrast: {
          rows: [
            { label: "〜とき (momento)", label_en: "〜とき (moment)", jp: "{日本|にほん}^へ {行|い}く とき、{空港|くうこう}で {写真|しゃしん}を {撮|と}ります。", pt: "Quando vou ao Japão, tiro fotos no aeroporto.", en: "When I go to Japan, I take photos at the airport." },
            { label: "〜とき com substantivo (época)", label_en: "〜とき with a noun (period)", jp: "{学生|がくせい}の とき、{大阪|おおさか}に {住|す}んで いました。", pt: "Quando era estudante, morava em Osaka.", en: "When I was a student, I lived in Osaka." }
          ],
          note: "Nos dois casos とき apresenta um momento, não uma condição. O que muda é a forma que vem antes: verbo na forma comum, adjetivo な com な, substantivo com の.", note_en: "In both cases とき presents a moment, not a condition. What changes is the form before it: plain verb, な-adjective with な, noun with の."
        },
        trap: [
          "Verbo antes de とき nunca fica em ます: certo {行|い}く とき／{行|い}った とき; errado {行|い}きます とき.",
          "Adjetivo な leva な e substantivo leva の: {静|しず}かな とき、{学生|がくせい}の とき. Só o adjetivo い fica igual: {寒|さむ}い とき."
        ],
        trap_en: [
          "A verb before とき never stays in ます: right {行|い}く とき／{行|い}った とき; wrong {行|い}きます とき.",
          "な-adjectives take な and nouns take の: {静|しず}かな とき、{学生|がくせい}の とき. Only い-adjectives stay the same: {寒|さむ}い とき."
        ],
        note: "とき pode vir no meio ou no começo da frase; a oração principal vem depois.", note_en: "とき can come in the middle or at the start of the sentence; the main clause comes after it."
      },
      {
        id: "toki-iku-itta",
        title: "{行|い}く とき × {行|い}った とき", title_en: "{行|い}く とき × {行|い}った とき",
        pat: "V-る ＋ とき (a ação principal vem antes)<br>V-た ＋ とき (a ação de とき já aconteceu)",
        short: "o tempo antes de とき muda a ordem dos fatos", short_en: "the tense before とき changes the order of events",
        mean: "A forma antes de とき mostra a ordem real dos fatos. Com V-る, a ação principal pode acontecer antes: “quando vou…, (antes) faço…”. Com V-た, a ação de とき já aconteceu: “quando fui…, (já lá) fiz…”.", mean_en: "The form before とき shows the real order of events. With V-る, the main action can happen first: “when I go…, (before that) I do…”. With V-た, the action of とき has already happened: “when I went…, (once there) I did…”.",
        rule: "Pense na ordem dos fatos, não no português: se a ação de とき ainda vai acontecer quando a principal acontece, use V-る; se ela já aconteceu, use V-た. A frase principal pode ficar no presente ou no passado nos dois casos.", rule_en: "Think about the order of events, not about the Portuguese: if the action of とき is still going to happen when the main action happens, use V-る; if it has already happened, use V-た. The main clause can be present or past in both cases.",
        ex: [
          { jp: "{日本|にほん}^へ {行|い}く とき、{空港|くうこう}で お{金|かね}を {換|か}えます。", romaji: "Nihon e iku toki, kuukou de okane o kaemasu.", pt: "Quando vou ao Japão, troco dinheiro no aeroporto. (a troca é antes de embarcar)", en: "When I go to Japan, I change money at the airport. (the exchange happens before the trip)" },
          { jp: "{日本|にほん}^へ {行|い}った とき、{友達|ともだち}に {会|あ}いました。", romaji: "Nihon e itta toki, tomodachi ni aimashita.", pt: "Quando fui ao Japão, encontrei um amigo. (o encontro foi lá, depois de chegar)", en: "When I went to Japan, I met a friend. (the meeting happened there, after arriving)" },
          { jp: "{家|いえ}^へ {帰|かえ}る とき、スーパーで {野菜|やさい}を {買|か}います。", romaji: "Ie e kaeru toki, suupaa de yasai o kaimasu.", pt: "Quando volto para casa, compro legumes no supermercado. (passo no mercado no caminho)", en: "When I go home, I buy vegetables at the supermarket. (I stop there on the way)" },
          { jp: "{家|いえ}に {帰|かえ}った とき、だれも いませんでした。", romaji: "Ie ni kaetta toki, dare mo imasen deshita.", pt: "Quando cheguei em casa, não havia ninguém.", en: "When I got home, there was nobody there." }
        ],
        contrast: {
          rows: [
            { label: "V-る とき (antes)", label_en: "V-る とき (before)", jp: "{田中|たなか}さんに {会|あ}う とき、この {写真|しゃしん}を {見|み}せます。", pt: "Quando encontro o Tanaka (antes de encontrá-lo), mostro esta foto.", en: "When I meet Tanaka (before meeting him), I show him this photo." },
            { label: "V-た とき (depois)", label_en: "V-た とき (after)", jp: "{田中|たなか}さんに {会|あ}った とき、この {写真|しゃしん}を {見|み}せました。", pt: "Quando encontrei o Tanaka (já no encontro), mostrei esta foto.", en: "When I met Tanaka (at the meeting), I showed him this photo." }
          ],
          note: "O português usa “quando” nos dois casos e esconde a diferença. O japonês marca a ordem dos fatos com る ou た antes de とき.", note_en: "English uses “when” in both cases and hides the difference. Japanese marks the order of events with る or た before とき."
        },
        trap: [
          "Não use V-た とき só porque a frase principal está no passado: se a ação de とき ainda vai acontecer, fica V-る ({空港|くうこう}で {換|か}えます).",
          "{行|い}く とき não é “depois de ir”: é “na ocasião de ir”. Para “depois de ir”, o japonês usa 〜てから."
        ],
        trap_en: [
          "Do not use V-た とき just because the main clause is in the past: if the action of とき is still to come, use V-る ({空港|くうこう}で {換|か}えます).",
          "{行|い}く とき does not mean “after going”: it means “on the occasion of going”. For “after going”, Japanese uses 〜てから."
        ]
      },
      {
        id: "to-kekka",
        title: "［V-る／V-ない］と、… ({自然|しぜん}な {結果|けっか})", title_en: "［V-る／V-ない］と、… (natural consequence)",
        pat: "V-る と、〜<br>V-ない と、〜",
        short: "sempre que A, B acontece naturalmente", short_en: "whenever A happens, B follows naturally",
        mean: "Diz que B acontece sempre que A acontece, como uma regra: lei da natureza, funcionamento de uma máquina, instrução de uso, resultado automático. Em português: “ao…, …”, “quando…, … sempre”.", mean_en: "It says that B always follows A, like a rule: a law of nature, how a machine works, instructions for use, an automatic result. In English: “when/if…, … always”.",
        rule: "O verbo antes de と fica na forma de dicionário ou na ない{形|けい}; nunca em ます. A segunda parte é um fato que acontece sozinho: nada de pedido, convite, intenção ou obrigação depois de と.", rule_en: "The verb before と stays in the dictionary form or the ない form; never in ます. The second part is a fact that happens by itself: no request, invitation, intention or obligation after と.",
        form: [
          { label: "Afirmativa", label_en: "Affirmative", text: "Forma de dicionário + <strong>と</strong>.", text_en: "Dictionary form + <strong>と</strong>.", ex: [
            { jp: "{春|はる}に なる と", romaji: "haru ni naru to", pt: "quando chega a primavera", en: "when spring comes" },
            { jp: "この ボタンを {押|お}す と", romaji: "kono botan o osu to", pt: "quando se aperta este botão", en: "when you press this button" }
          ] },
          { label: "Negativa", label_en: "Negative", text: "ない{形|けい} + <strong>と</strong>.", text_en: "ない form + <strong>と</strong>.", ex: [
            { jp: "{薬|くすり}を {飲|の}まない と", romaji: "kusuri o nomanai to", pt: "se não tomar o remédio", en: "if you do not take the medicine" },
            { jp: "{急|いそ}がない と", romaji: "isoganai to", pt: "se não se apressar", en: "if you do not hurry" }
          ] }
        ],
        ex: [
          { jp: "この ボタンを {押|お}す と、{音|おと}が {出|で}ます。", romaji: "Kono botan o osu to, oto ga demasu.", pt: "Ao apertar este botão, sai som.", en: "When you press this button, a sound comes out." },
          { jp: "この スイッチを {回|まわ}す と、{音|おと}が {大|おお}きく なります。", romaji: "Kono suitchi o mawasu to, oto ga ookiku narimasu.", pt: "Ao girar este interruptor, o som aumenta.", en: "When you turn this switch, the sound gets louder." },
          { jp: "{春|はる}に なる と、{暖|あたた}かく なります。", romaji: "Haru ni naru to, atatakaku narimasu.", pt: "Quando chega a primavera, fica mais quente.", en: "When spring comes, it gets warmer." },
          { jp: "{毎日|まいにち} {練習|れんしゅう}する と、{日本語|にほんご}が {上手|じょうず}に なります。", romaji: "Mainichi renshuu suru to, nihongo ga jouzu ni narimasu.", pt: "Praticando todos os dias, o japonês melhora.", en: "If you practise every day, your Japanese improves." },
          { jp: "{薬|くすり}を {飲|の}まない と、{病気|びょうき}が {悪|わる}く なります。", romaji: "Kusuri o nomanai to, byouki ga waruku narimasu.", pt: "Se não tomar o remédio, a doença piora.", en: "If you do not take the medicine, the illness gets worse." }
        ],
        contrast: {
          rows: [
            { label: "〜と (resultado automático)", label_en: "〜と (automatic result)", jp: "この ボタンを {押|お}す と、お{金|かね}が {出|で}ます。", pt: "O resultado vem sozinho, sempre igual: ninguém pede nada.", en: "The result comes by itself, always the same: nobody is asking for anything." },
            { label: "〜から (motivo + pedido)", label_en: "〜から (reason + request)", jp: "{寒|さむ}いですから、{窓|まど}を {閉|し}めて ください。", pt: "Aqui há um motivo e um pedido; と não serve para pedido.", en: "Here there is a reason and a request; と cannot be used for a request." }
          ],
          note: "と descreve o que acontece sozinho; から explica o motivo e aceita pedido, convite e intenção.", note_en: "と describes what happens by itself; から explains the reason and accepts requests, invitations and intentions."
        },
        trap: [
          "Depois de と não se faz pedido nem convite: errado 「{春|はる}に なる と、{花|はな}を {見|み}に {行|い}きましょう。」 A lição 25 apresenta a forma certa para isso.",
          "と não é uma hipótese incerta: o resultado é sempre o mesmo, como uma regra. Para “talvez”, não use と.",
          "O verbo antes de と fica na forma de dicionário: errado {押|お}します と; certo {押|お}す と."
        ],
        trap_en: [
          "No request or invitation after と: wrong 「{春|はる}に なる と、{花|はな}を {見|み}に {行|い}きましょう。」 Lesson 25 shows the right form for that.",
          "と is not an uncertain guess: the result is always the same, like a rule. For “maybe”, do not use と.",
          "The verb before と stays in the dictionary form: wrong {押|お}します と; right {押|お}す と."
        ]
      }
    ]
  },
  renshuuA: {
    title: "{練習|れんしゅう} A", title_en: "{練習|れんしゅう} A",
    content: `
<div class="card">
    <h2 class="card-header">{練習|れんしゅう} A (Tabelas de substituição)</h2>
    <p class="page-intro">Leia cada linha em voz alta e troque as partes para criar frases novas.</p>
</div>
<div class="card">
    <h3 class="card-header">1. 〜とき (o momento)</h3>
    <table class="grammar-table">
        <tr><th>Momento</th><th>Ação principal</th></tr>
        <tr><td>{図書館|としょかん}で {本|ほん}を {借|か}りる とき、</td><td>カウンターで カードを {見|み}せます。</td></tr>
        <tr><td>{日本|にほん}^へ {行|い}く とき、</td><td>{空港|くうこう}で お{金|かね}を {換|か}えます。</td></tr>
        <tr><td>{寒|さむ}い とき、</td><td>{窓|まど}を {閉|し}めます。</td></tr>
        <tr><td>{暇|ひま}な とき、</td><td>{音楽|おんがく}を {聞|き}きます。</td></tr>
        <tr><td>{子|こ}どもの とき、</td><td>よく {海|うみ}で {泳|およ}ぎました。</td></tr>
    </table>
</div>
<div class="card">
    <h3 class="card-header">2. {行|い}く とき × {行|い}った とき</h3>
    <table class="grammar-table">
        <tr><th>Forma</th><th>Exemplo</th></tr>
        <tr><td>V-る とき<br>(o fato ainda vai acontecer)</td><td>{日本|にほん}^へ {行|い}く とき、お{金|かね}を {換|か}えます。</td></tr>
        <tr><td>V-た とき<br>(o fato já aconteceu)</td><td>{日本|にほん}^へ {行|い}った とき、{友達|ともだち}に {会|あ}いました。</td></tr>
    </table>
</div>
<div class="card">
    <h3 class="card-header">3. 〜と ({自然|しぜん}な {結果|けっか})</h3>
    <table class="grammar-table">
        <tr><th>Condição</th><th>Resultado</th></tr>
        <tr><td>この ボタンを {押|お}す と、</td><td>{音|おと}が {出|で}ます。</td></tr>
        <tr><td>この スイッチを {回|まわ}す と、</td><td>{音|おと}が {大|おお}きく なります。</td></tr>
        <tr><td>{春|はる}に なる と、</td><td>{暖|あたた}かく なります。</td></tr>
        <tr><td>{薬|くすり}を {飲|の}まない と、</td><td>{病気|びょうき}が {悪|わる}く なります。</td></tr>
    </table>
</div>
`, content_en: `
<div class="card">
    <h2 class="card-header">{練習|れんしゅう} A (Substitution tables)</h2>
    <p class="page-intro">Read each line aloud and swap the parts to make new sentences.</p>
</div>
<div class="card">
    <h3 class="card-header">1. 〜とき (the moment)</h3>
    <table class="grammar-table">
        <tr><th>Moment</th><th>Main action</th></tr>
        <tr><td>{図書館|としょかん}で {本|ほん}を {借|か}りる とき、</td><td>カウンターで カードを {見|み}せます。</td></tr>
        <tr><td>{日本|にほん}^へ {行|い}く とき、</td><td>{空港|くうこう}で お{金|かね}を {換|か}えます。</td></tr>
        <tr><td>{寒|さむ}い とき、</td><td>{窓|まど}を {閉|し}めます。</td></tr>
        <tr><td>{暇|ひま}な とき、</td><td>{音楽|おんがく}を {聞|き}きます。</td></tr>
        <tr><td>{子|こ}どもの とき、</td><td>よく {海|うみ}で {泳|およ}ぎました。</td></tr>
    </table>
</div>
<div class="card">
    <h3 class="card-header">2. {行|い}く とき × {行|い}った とき</h3>
    <table class="grammar-table">
        <tr><th>Form</th><th>Example</th></tr>
        <tr><td>V-る とき<br>(the event is still to come)</td><td>{日本|にほん}^へ {行|い}く とき、お{金|かね}を {換|か}えます。</td></tr>
        <tr><td>V-た とき<br>(the event has already happened)</td><td>{日本|にほん}^へ {行|い}った とき、{友達|ともだち}に {会|あ}いました。</td></tr>
    </table>
</div>
<div class="card">
    <h3 class="card-header">3. 〜と (natural consequence)</h3>
    <table class="grammar-table">
        <tr><th>Condition</th><th>Result</th></tr>
        <tr><td>この ボタンを {押|お}す と、</td><td>{音|おと}が {出|で}ます。</td></tr>
        <tr><td>この スイッチを {回|まわ}す と、</td><td>{音|おと}が {大|おお}きく なります。</td></tr>
        <tr><td>{春|はる}に なる と、</td><td>{暖|あたた}かく なります。</td></tr>
        <tr><td>{薬|くすり}を {飲|の}まない と、</td><td>{病気|びょうき}が {悪|わる}く なります。</td></tr>
    </table>
</div>
`
  },
  renshuuB: {
    title: "{練習|れんしゅう} B", title_en: "{練習|れんしゅう} B",
    exercises: [
      {
        desc: "1. 〜とき を{使|つか}って、{二|ふた}つの{文|ぶん}を{一|ひと}つに しなさい。(Junte as duas ideias com 〜とき)", desc_en: "1. 〜とき を{使|つか}って、{二|ふた}つの{文|ぶん}を{一|ひと}つに しなさい。(Join the two ideas with 〜とき)",
        questions: [
          { q: "{図書館|としょかん}^へ {行|い}きます。カードを {持|も}って {行|い}きます。➔", a: "{図書館|としょかん}^へ {行|い}く とき、カードを {持|も}って {行|い}きます。", romaji: "Toshokan e iku toki, kaado o motte ikimasu.", pt: "Quando vou à biblioteca, levo o cartão.", en: "When I go to the library, I take my card." },
          { q: "{日本|にほん}の {料理|りょうり}を {食|た}べます。いつも {写真|しゃしん}を {撮|と}ります。➔", a: "{日本|にほん}の {料理|りょうり}を {食|た}べる とき、いつも {写真|しゃしん}を {撮|と}ります。", romaji: "Nihon no ryouri o taberu toki, itsumo shashin o torimasu.", pt: "Quando como comida japonesa, sempre tiro fotos.", en: "When I eat Japanese food, I always take photos." },
          { q: "{子|こ}どもでした。よく {海|うみ}で {泳|およ}ぎました。➔", a: "{子|こ}どもの とき、よく {海|うみ}で {泳|およ}ぎました。", romaji: "Kodomo no toki, yoku umi de oyogimashita.", pt: "Quando era criança, nadava muito no mar.", en: "When I was a child, I often swam in the sea." },
          { q: "{暇|ひま}です。{音楽|おんがく}を {聞|き}きます。➔", a: "{暇|ひま}な とき、{音楽|おんがく}を {聞|き}きます。", romaji: "Hima na toki, ongaku o kikimasu.", pt: "Quando estou livre, ouço música.", en: "When I am free, I listen to music." }
        ]
      },
      {
        desc: "2. 〜と を{使|つか}って、{一|ひと}つの{文|ぶん}に しなさい。(Una as duas partes com 〜と)", desc_en: "2. 〜と を{使|つか}って、{一|ひと}つの{文|ぶん}に しなさい。(Join the two parts with 〜と)",
        questions: [
          { q: "この ボタンを {押|お}します。➔ {音|おと}が {出|で}ます。", a: "この ボタンを {押|お}す と、{音|おと}が {出|で}ます。", romaji: "Kono botan o osu to, oto ga demasu.", pt: "Ao apertar este botão, sai som.", en: "When you press this button, a sound comes out." },
          { q: "{春|はる}に なります。➔ {暖|あたた}かく なります。", a: "{春|はる}に なる と、{暖|あたた}かく なります。", romaji: "Haru ni naru to, atatakaku narimasu.", pt: "Quando chega a primavera, fica mais quente.", en: "When spring comes, it gets warmer." },
          { q: "{薬|くすり}を {飲|の}みません。➔ {病気|びょうき}が {悪|わる}く なります。", a: "{薬|くすり}を {飲|の}まない と、{病気|びょうき}が {悪|わる}く なります。", romaji: "Kusuri o nomanai to, byouki ga waruku narimasu.", pt: "Se não tomar o remédio, a doença piora.", en: "If you do not take the medicine, the illness gets worse." },
          { q: "{毎日|まいにち} {練習|れんしゅう}します。➔ {日本語|にほんご}が {上手|じょうず}に なります。", a: "{毎日|まいにち} {練習|れんしゅう}する と、{日本語|にほんご}が {上手|じょうず}に なります。", romaji: "Mainichi renshuu suru to, nihongo ga jouzu ni narimasu.", pt: "Praticando todos os dias, o japonês melhora.", en: "If you practise every day, your Japanese improves." }
        ]
      },
      {
        desc: "3. る か た か、どちらが いいですか。(Escolha a forma antes de とき)", desc_en: "3. る か た か、どちらが いいですか。(Choose the form before とき)",
        questions: [
          { q: "{日本|にほん}^へ（{行|い}きます ➔ ＿＿）とき、いつも お{金|かね}を {換|か}えます。（まだ {行|い}って いません）", a: "{行|い}く", romaji: "iku", pt: "Vou ao Japão: a troca é antes da viagem.", en: "I am going to Japan: the exchange happens before the trip." },
          { q: "{日本|にほん}^へ（{行|い}きます ➔ ＿＿）とき、{友達|ともだち}に {会|あ}いました。（もう {日本|にほん}に います）", a: "{行|い}った", romaji: "itta", pt: "Fui ao Japão: o encontro foi lá.", en: "I went to Japan: the meeting happened there." },
          { q: "{家|いえ}^へ（{帰|かえ}ります ➔ ＿＿）とき、スーパーで {野菜|やさい}を {買|か}います。（{家|いえ}は まだ です）", a: "{帰|かえ}る", romaji: "kaeru", pt: "Ainda não cheguei em casa: compro no caminho.", en: "I am not home yet: I shop on the way." }
        ]
      },
      {
        desc: "4. 〜{方|かた} (maneira de fazer)", desc_en: "4. 〜{方|かた} (way of doing)",
        questions: [
          { q: "この {機械|きかい}の（{使|つか}います ➔ ＿＿）を {教|おし}えて ください。", a: "{使|つか}い{方|かた}", romaji: "tsukaikata", pt: "Ensine-me como usar esta máquina.", en: "Please teach me how to use this machine." },
          { q: "{漢字|かんじ}の（{読|よ}みます ➔ ＿＿）が {難|むずか}しいです。", a: "{読|よ}み{方|かた}", romaji: "yomikata", pt: "A leitura dos kanji é difícil.", en: "The reading of kanji is difficult." }
        ]
      }
    ]
  },
  renshuuC: {
    title: "{練習|れんしゅう} C (Diálogos)", title_en: "{練習|れんしゅう} C (Dialogues)",
    exercises: [
      {
        desc: "1. ＿＿ に「とき」か「と」を {入|い}れなさい。(Complete com とき ou と)", desc_en: "1. ＿＿ に「とき」か「と」を {入|い}れなさい。(Fill in with とき or と)",
        questions: [
          { q: "A: {日本|にほん}で {病気|びょうき}に なった <strong>［＿＿］</strong>、どう しますか。<br>B: {病院|びょういん}^へ {行|い}きます。", a: "とき", romaji: "toki", pt: "Quando adoece no Japão, o que faz? — Vou ao hospital.", en: "When you get sick in Japan, what do you do? — I go to the hospital." },
          { q: "A: この ボタンを {押|お}す <strong>［＿＿］</strong>、お{金|かね}が {出|で}ますか。<br>B: はい。でも、{先|さき}に カードを {入|い}れます。", a: "と", romaji: "to", pt: "Apertando este botão, sai dinheiro? — Sim, mas antes é preciso inserir o cartão.", en: "When you press this button, does money come out? — Yes, but you must insert the card first." },
          { q: "A: {子|こ}どもの <strong>［＿＿］</strong>、{何|なに}を して いましたか。<br>B: よく {海|うみ}で {泳|およ}いで いました。", a: "とき", romaji: "toki", pt: "O que você fazia quando era criança? — Nadava muito no mar.", en: "What did you use to do when you were a child? — I often swam in the sea." }
        ]
      },
      {
        desc: "2. {機械|きかい}の つかい{方|かた}を {聞|き}く (Perguntando como usar a máquina)", desc_en: "2. {機械|きかい}の つかい{方|かた}を {聞|き}く (Asking how to use the machine)",
        questions: [
          { q: "A: すみません、この スイッチは どう やって {使|つか}いますか。<br>B: その ボタンを {押|お}す <strong>［＿＿］</strong>、{音|おと}が {出|で}ます。", a: "と", romaji: "to", pt: "Desculpe, como se usa este interruptor? — Apertando esse botão, sai som.", en: "Excuse me, how do you use this switch? — When you press that button, a sound comes out." },
          { q: "A: {図書館|としょかん}で {本|ほん}を {借|か}りる <strong>［＿＿］</strong>、{何|なに}を しますか。<br>B: カウンターで カードを {見|み}せます。", a: "とき", romaji: "toki", pt: "O que se faz quando se pega um livro emprestado na biblioteca? — Mostra-se o cartão no balcão.", en: "What do you do when you borrow a book at the library? — You show your card at the counter." }
        ]
      }
    ]
  },
  mondai: {
    title: "{問題|もんだい} (Problemas / Avaliação)", title_en: "{問題|もんだい} (Problems / Assessment)",
    exercises: [
      {
        desc: "1. (　　) に {正|ただ}しい {助詞|じょし} を {入|い}れなさい。 (Preencha as partículas: で, を, と)", desc_en: "1. (　　) に {正|ただ}しい {助詞|じょし} を {入|い}れなさい。 (Fill in the particles: で, を, と)",
        questions: [
          { q: "{春|はる}に なる（　　）、{暖|あたた}かく なります。", a: "と", romaji: "to", pt: "Partícula 'to' (consequência natural)", en: "Particle 'to' (natural consequence)" },
          { q: "{図書館|としょかん}（　　）{本|ほん}を {借|か}りました。", a: "で", romaji: "de", pt: "Partícula 'de' (lugar da ação)", en: "Particle 'de' (place of the action)" },
          { q: "この ボタン（　　）{押|お}す と、{音|おと}が {出|で}ます。", a: "を", romaji: "o", pt: "Partícula 'o' (objeto direto)", en: "Particle 'o' (direct object)" },
          { q: "{薬|くすり}（　　）{飲|の}まない と、{病気|びょうき}が {悪|わる}く なります。", a: "を", romaji: "o", pt: "Partícula 'o' (objeto direto do verbo beber)", en: "Particle 'o' (direct object of the verb to drink)" }
        ]
      },
      {
        desc: "2. （　　）の ことばを {正|ただ}しい {形|けい}に しなさい。 (Mude para a forma correta)", desc_en: "2. （　　）の ことばを {正|ただ}しい {形|けい}に しなさい。 (Change to the correct form)",
        questions: [
          { q: "この スイッチを（{回|まわ}します ➔ ＿＿）と、{音|おと}が {大|おお}きく なります。", a: "{回|まわ}す", romaji: "mawasu", pt: "Forma de dicionário antes de と", en: "Dictionary form before と" },
          { q: "{学生|がくせい}（です ➔ ＿＿）とき、よく {図書館|としょかん}で {勉強|べんきょう}しました。", a: "の", romaji: "no", pt: "Substantivo + の + とき", en: "Noun + の + とき" },
          { q: "{暇|ひま}（です ➔ ＿＿）とき、{音楽|おんがく}を {聞|き}きます。", a: "な", romaji: "na", pt: "Adjetivo な + な + とき", en: "な-adjective + な + とき" }
        ]
      },
      {
        desc: "3. {読|よ}み{物|もの} (Leitura): {町|まち}の {図書館|としょかん}", desc_en: "3. {読|よ}み{物|もの} (Reading): {町|まち}の {図書館|としょかん}",
        questions: [
          {
            q: `<div class="reading-box">
                                わたしの {町|まち}の {図書館|としょかん}は、{駅|えき}の となりに あります。カードを {作|つく}る とき、{住所|じゅうしょ}と {名前|なまえ}を {書|か}きます。{本|ほん}を {借|か}りる ときは、カウンターで カードを {見|み}せて ください。{本|ほん}を {返|かえ}す とき、{受付|うけつけ}の ボタンを {押|お}す と、「ありがとう ございました」と いう {音|おと}が します。
                                </div>
                                {質問|しつもん}: カードを {作|つく}る とき、{何|なに}を しますか。<br>➔ ＿＿＿＿＿＿＿＿＿。`,
            a: "{名前|なまえ}と {住所|じゅうしょ}を {書|か}きます",
            romaji: "Namae to juusho o kakimasu.",
            pt: "Escrevo o nome e o endereço.", en: "I write my name and address."
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
          { tokens: ["{図書館|としょかん}で", "{本|ほん}を", "{借|か}りる", "とき、", "カードを", "{見|み}せます。"], pt: "Quando pego um livro emprestado na biblioteca, mostro o cartão.", en: "When I borrow a book at the library, I show my card.", romaji: "Toshokan de hon o kariru toki, kaado o misemasu." },
          { tokens: ["この", "ボタンを", "{押|お}す", "と、", "{音|おと}が", "{出|で}ます。"], pt: "Ao apertar este botão, sai som.", en: "When you press this button, a sound comes out.", romaji: "Kono botan o osu to, oto ga demasu." },
          { tokens: ["{日本|にほん}へ", "{行|い}く", "とき、", "{空港|くうこう}で", "お{金|かね}を", "{換|か}えます。"], pt: "Quando vou ao Japão, troco dinheiro no aeroporto.", en: "When I go to Japan, I change money at the airport.", romaji: "Nihon e iku toki, kuukou de okane o kaemasu." },
          { tokens: ["{薬|くすり}を", "{飲|の}まない", "と、", "{病気|びょうき}が", "{悪|わる}く", "なります。"], pt: "Se não tomar o remédio, a doença piora.", en: "If you do not take the medicine, the illness gets worse.", romaji: "Kusuri o nomanai to, byouki ga waruku narimasu." }
        ]
      }
    ]
  }
};
