// Dados da lição 19. Formato descrito no README.md.
window.lessonData = {
  vocab: {
    title: "{語彙|ごい} (Vocabulário)",
    items: [
      { jp: "{登|のぼ}ります", romaji: "noborimasu", pt: "Subir, escalar (ex: montanha)" },
      { jp: "{泊|と}まります", romaji: "tomarimasu", pt: "Hospedar-se, pernoitar" },
      { jp: "{掃除|そうじ}します", romaji: "souji shimasu", pt: "Limpar, fazer faxina" },
      { jp: "{洗濯|せんたく}します", romaji: "sentaku shimasu", pt: "Lavar (roupas)" },
      { jp: "なります", romaji: "narimasu", pt: "Tornar-se, ficar, passar a ser" },
      { jp: "{眠|ねむ}い", romaji: "nemui", pt: "Com sono" },
      { jp: "{強|つよ}い", romaji: "tsuyoi", pt: "Forte" },
      { jp: "{弱|よわ}い", romaji: "yowai", pt: "Fraco" },
      { jp: "{練習|れんしゅう}", romaji: "renshuu", pt: "Prática, treino" },
      { jp: "ゴルフ", romaji: "gorufu", pt: "Golfe" },
      { jp: "{相撲|すもう}", romaji: "sumou", pt: "Sumô" },
      { jp: "お{茶|ちゃ}", romaji: "ocha", pt: "Chá (cerimônia do chá)" },
      { jp: "{日|ひ}", romaji: "hi", pt: "Dia" },
      { jp: "{調子|ちょうし}", romaji: "choushi", pt: "Condição, estado (de saúde, máquina)" },
      { jp: "{一度|いちど}", romaji: "ichido", pt: "Uma vez" },
      { jp: "{一度|いちど}も", romaji: "ichidomo", pt: "Nenhuma vez, nunca (usado com negativa)" },
      { jp: "だんだん", romaji: "dandan", pt: "Gradualmente, aos poucos" },
      { jp: "もうすぐ", romaji: "mousugu", pt: "Em breve, logo" },
      { jp: "おかげさまで", romaji: "okagesamade", pt: "Graças a Deus / Graças a você (resposta a 'como vai?')" },
      { jp: "ダイエット", romaji: "daietto", pt: "Dieta" }
    ]
  },
  bunkei: {
    patterns: {
      title: "{文型|ぶんけい} (Padrões)",
      items: [
        { jp: "{相撲|すもう}を {見|み}た ことが あります。", romaji: "Sumou o mita koto ga arimasu.", pt: "Eu já vi sumô (tenho a experiência de ver)." },
        { jp: "{休|やす}みの {日|ひ}は テニスを したり、{散歩|さんぽ}に {行|い}ったり します。", romaji: "Yasumi no hi wa tenisu o shitari, sanpo ni ittari shimasu.", pt: "Nos dias de folga, eu jogo tênis, vou passear, etc." },
        { jp: "これから だんだん {暑|あつ}く なります。", romaji: "Korekara dandan atsuku narimasu.", pt: "De agora em diante, ficará gradualmente mais quente." }
      ]
    },
    examples: {
      title: "{例文|れいぶん} (Exemplos)",
      items: [
        { jp: "{北海道|ほっかいどう}へ {行|い}った ことが ありますか。<br>…はい、{一度|いちど} あります。2{年前|ねんまえ}に {友達|ともだち}と {行|い}きました。", romaji: "Hokkaido e itta koto ga arimasu ka. ...Hai, ichido arimasu. Ninen mae ni tomodachi to ikimashita.", pt: "Você já foi a Hokkaido? ...Sim, fui uma vez. Fui com um amigo há 2 anos." },
        { jp: "{馬|うま}に {乗|の}った ことが ありますか。<br>…いいえ、{一度|いちど}も ありません。ぜひ {乗|の}りたいです。", romaji: "Uma ni notta koto ga arimasu ka. ...Iie, ichidomo arimasen. Zehi noritai desu.", pt: "Você já andou a cavalo? ...Não, nunca. Quero muito andar." },
        { jp: "{冬休|ふゆやす}みは {何|なに}を しましたか。<br>…{京都|きょうと}の お{寺|てら}を {見|み}たり、{日本|にほん}の {料理|りょうり}を {食|た}べたり しました。", romaji: "Fuyuyasumi wa nani o shimashita ka. ...Kyouto no otera o mitari, nihon no ryouri o tabetari shimashita.", pt: "O que você fez nas férias de inverno? ...Visitei templos em Kyoto, comi comida japonesa, etc." },
        { jp: "{日本|にほん}で {何|なに}を したいですか。<br>…{旅行|りょこう}したり、お{茶|ちゃ}を {習|なら}ったり したいです。", romaji: "Nihon de nani o shitai desu ka. ...Ryokou shitari, ocha o narattari shitai desu.", pt: "O que você quer fazer no Japão? ...Quero viajar, aprender a cerimônia do chá, etc." },
        { jp: "{体|からだ}の {調子|ちょうし}は どうですか。<br>…おかげさまで よく なりました。", romaji: "Karada no choushi wa dou desu ka. ...Okagesamade yoku narimashita.", pt: "Como está a sua condição física? ...Graças a Deus, ficou boa (melhorei)." }
      ]
    }
  },
  gramatica: {
    title: "{文法|ぶんぽう} (Gramática)",
    content: `
                    <div class="card">
                        <h3 class="card-header">1. {動詞|どうし}の た{形|けい} (A forma TA dos verbos)</h3>
                        <p>A forma "ta" (た{形|けい}) é usada principalmente para o passado informal e em estruturas gramaticais específicas. A regra de conjugação é <strong>exatamente a mesma da forma TE (て{形|けい})</strong>, bastando trocar o "て" por "た" e o "で" por "だ".</p>
                        <table class="grammar-table">
                            <tr>
                                <th>{第|だい}１グループ (Grupo 1)</th>
                                <td>
                                    い、ち、り ➔ <strong>った</strong> ({買|か}います ➔ {買|か}<strong>った</strong>)<br>
                                    み、び、に ➔ <strong>んだ</strong> ({飲|の}みます ➔ {飲|の}<strong>んだ</strong>)<br>
                                    き ➔ <strong>いた</strong> ({書|か}きます ➔ {書|か}<strong>いた</strong>) *Exceção: {行|い}きます ➔ {行|い}<strong>った</strong><br>
                                    ぎ ➔ <strong>いだ</strong> ({急|いそ}ぎます ➔ {急|いそ}<strong>いだ</strong>)<br>
                                    し ➔ <strong>した</strong> ({話|はな}します ➔ {話|はな}<strong>した</strong>)
                                </td>
                            </tr>
                            <tr>
                                <th>{第|だい}２グループ (Grupo 2)</th>
                                <td>Corta-se o ます e adiciona-se <strong>た</strong>.<br>
                                    {食|た}べます ➔ {食|た}べ<strong>た</strong><br>
                                    {見|み}ます ➔ {見|み}<strong>た</strong>
                                </td>
                            </tr>
                            <tr>
                                <th>{第|だい}３グループ (Grupo 3)</th>
                                <td>Irregulares.<br>
                                    します ➔ <strong>した</strong><br>
                                    {来|き}ます ➔ <strong>{来|き}た</strong>
                                </td>
                            </tr>
                        </table>
                    </div>

                    <div class="card">
                        <h3 class="card-header">2. {動詞|どうし}た{形|けい} ＋ ことが あります</h3>
                        <p>Significa <strong>"Já fiz / Tenho a experiência de ter feito"</strong>. É usado para falar de experiências passadas (não é usado para ações do passado recente ou rotinas).</p>
                        <p class="item-box">
                            わたしは {馬|うま}に <strong>{乗|の}った ことが あります</strong>。<br>
                            <span class="romaji">Watashi wa uma ni notta koto ga arimasu.</span><br>
                            <em>(Eu já andei a cavalo.)</em>
                        </p>
                    </div>

                    <div class="card">
                        <h3 class="card-header">3. {動詞|どうし}た{形|けい}り、{動詞|どうし}た{形|けい}り します</h3>
                        <p>Significa <strong>"Fazer coisas como [A], [B], etc"</strong>. É usado para listar algumas ações representativas entre várias outras, sem implicar uma ordem cronológica rígida (diferente da forma TE).</p>
                        <p class="item-box">
                            {日曜日|にちようび}は {買|か}い{物|もの}を <strong>したり</strong>、{映画|えいが}を <strong>{見|み}たり します</strong>。<br>
                            <span class="romaji">Nichiyoubi wa kaimono o shitari, eiga o mitari shimasu.</span><br>
                            <em>(No domingo, faço compras, assisto a filmes, etc.)</em>
                        </p>
                    </div>

                    <div class="card">
                        <h3 class="card-header">4. 〜 なります (Tornar-se / Ficar)</h3>
                        <p>Indica uma mudança de estado. A conjugação varia dependendo da palavra anterior:</p>
                        <ul class="grammar-list">
                            <li><strong>い{形容詞|けいようし} (Adj-i):</strong> Troca o "い" por <strong>く</strong> + なります。<br>
                                {寒|さむ}い ➔ {寒|さむ}<strong>く なります</strong> (Fica/Ficará frio)
                            </li>
                            <li><strong>な{形容詞|けいようし} (Adj-na):</strong> Adiciona <strong>に</strong> + なります。<br>
                                {元気|げんき}[な] ➔ {元気|げんき}<strong>に なります</strong> (Fica/Ficará saudável)
                            </li>
                            <li><strong>{名詞|めいし} (Substantivo):</strong> Adiciona <strong>に</strong> + なります。<br>
                                25{歳|さい} ➔ 25{歳|さい}<strong>に なります</strong> (Faz/Fará 25 anos)
                            </li>
                        </ul>
                    </div>
                `
  },
  renshuuA: {
    title: "{練習|れんしゅう} A",
    exercises: [
      {
        desc: "{動詞|どうし}の た{形|けい} (Forma TA dos verbos)",
        questions: [
          { q: "{書|か}きます ➔", a: "{書|か}いた", romaji: "kaita", pt: "Escreveu" },
          { q: "{行|い}きます (exceção) ➔", a: "{行|い}った", romaji: "itta", pt: "Foi" },
          { q: "{飲|の}みます ➔", a: "{飲|の}んだ", romaji: "nonda", pt: "Bebeu" },
          { q: "{読|よ}みます ➔", a: "{読|よ}んだ", romaji: "yonda", pt: "Leu" },
          { q: "{買|か}います ➔", a: "{買|か}った", romaji: "katta", pt: "Comprou" },
          { q: "{待|ま}ちます ➔", a: "{待|ま}った", romaji: "matta", pt: "Esperou" },
          { q: "{帰|かえ}ります ➔", a: "{帰|かえ}った", romaji: "kaetta", pt: "Voltou" },
          { q: "{食|た}べます (Grp 2) ➔", a: "{食|た}べた", romaji: "tabeta", pt: "Comeu" },
          { q: "{見|み}ます (Grp 2) ➔", a: "{見|み}た", romaji: "mita", pt: "Viu" },
          { q: "します (Grp 3) ➔", a: "した", romaji: "shita", pt: "Fez" },
          { q: "{来|き}ます (Grp 3) ➔", a: "{来|き}た", romaji: "kita", pt: "Veio" }
        ]
      }
    ]
  },
  renshuuB: {
    title: "{練習|れんしゅう} B",
    exercises: [
      {
        desc: "1. た{形|けい}に {変|か}えなさい。(Mude para a forma TA)",
        questions: [
          { q: "{歌|うた}います ➔", a: "{歌|うた}った", romaji: "utatta", pt: "Cantou" },
          { q: "{遊|あそ}びます ➔", a: "{遊|あそ}んだ", romaji: "asonda", pt: "Brincou" },
          { q: "{起|お}きます ➔", a: "{起|お}きた", romaji: "okita", pt: "Acordou" },
          { q: "{掃除|そうじ}します ➔", a: "{掃除|そうじ}した", romaji: "souji shita", pt: "Limpou" }
        ]
      },
      {
        desc: "2. 〜た ことが あります を{使|つか}って{文|ぶん}を{作|つく}りなさい。(Use ~ta koto ga arimasu)",
        questions: [
          { q: "{富士山|ふじさん}に {登|のぼ}ります ➔", a: "{富士山|ふじさん}に {登|のぼ}った ことが あります。", romaji: "Fujisan ni nobotta koto ga arimasu.", pt: "Já escalei o Monte Fuji." },
          { q: "{寿司|すし}を {食|た}べます ➔", a: "{寿司|すし}を {食|た}べた ことが あります。", romaji: "Sushi o tabeta koto ga arimasu.", pt: "Já comi sushi." },
          { q: "{日本|にほん}のお{酒|さけ}を {飲|の}みます ➔", a: "{日本|にほん}のお{酒|さけ}を {飲|の}んだ ことが あります。", romaji: "Nihon no osake o nonda koto ga arimasu.", pt: "Já bebi saquê japonês." }
        ]
      },
      {
        desc: "3. ありますか？ (はい / いいえ) (Responda)",
        questions: [
          { q: "{京都|きょうと}へ {行|い}った ことが ありますか。（はい） ➔", a: "はい、あります。", romaji: "Hai, arimasu.", pt: "Sim, tenho (já fui)." },
          { q: "{馬|うま}に {乗|の}った ことが ありますか。（いいえ・{一度|いちど}も） ➔", a: "いいえ、{一度|いちど}も ありません。", romaji: "Iie, ichidomo arimasen.", pt: "Não, nunca andei." }
        ]
      },
      {
        desc: "4. 〜たり、〜たり します (Liste as ações com ~tari, ~tari shimasu)",
        questions: [
          { q: "{日曜日|にちようび}。{本|ほん}を {読|よ}みます。{散歩|さんぽ}します。➔", a: "{日曜日|にちようび}は {本|ほん}を {読|よ}んだり、{散歩|さんぽ}したり します。", romaji: "Nichiyoubi wa hon o yondari, sanpo shitari shimasu.", pt: "No domingo, eu leio livros, passeio, etc." },
          { q: "{昨日|きのう}。{歌|うた}を {歌|うた}いました。ダンスを しました。➔", a: "{昨日|きのう}は {歌|うた}を {歌|うた}ったり、ダンスを したり しました。", romaji: "Kinou wa uta o utattari, dansu o shitari shimashita.", pt: "Ontem eu cantei músicas, dancei, etc. (Atenção ao しました no final porque é passado)" }
        ]
      },
      {
        desc: "5. 〜く なります / に なります (Mudança de estado)",
        questions: [
          { q: "{暖|あたた}かい ➔", a: "{暖|あたた}かく なります", romaji: "Atatakaku narimasu", pt: "Fica quente (adj-i)" },
          { q: "{元気|げんき} ➔", a: "{元気|げんき}に なります", romaji: "Genki ni narimasu", pt: "Fica saudável/bem (adj-na)" },
          { q: "25{歳|さい} ➔", a: "25{歳|さい}に なります", romaji: "Nijuugosai ni narimasu", pt: "Faz 25 anos (substantivo)" },
          { q: "{医者|いしゃ} ➔", a: "{医者|いしゃ}に なります", romaji: "Isha ni narimasu", pt: "Torna-se médico (substantivo)" }
        ]
      }
    ]
  },
  renshuuC: {
    title: "{練習|れんしゅう} C (Diálogos)",
    exercises: [
      {
        desc: "1. {経験|けいけん}について{話|はな}す (Falando sobre experiências)",
        questions: [
          { q: "A: <strong>[{相撲|すもう}を {見|み}ます]</strong> ことが ありますか。<br>B: いいえ、{一度|いちど}も ありません。<br>A: おもしろいですよ。ぜひ <strong>[{見|み}て]</strong> ください。", a: "{相撲|すもう}を {見|み}た", romaji: "Sumou o mita", pt: "ver sumô (forma ta)" },
          { q: "A: <strong>[パチンコを します]</strong> ことが ありますか。<br>B: いいえ、{一度|いちど}も ありません。<br>A: おもしろいですよ。ぜひ <strong>[して]</strong> ください。", a: "パチンコを した", romaji: "Pachinko o shita", pt: "jogar pachinko (forma ta)" }
        ]
      },
      {
        desc: "2. {変化|へんか}について{話|はな}す (Falando sobre mudanças)",
        questions: [
          { q: "A: {日本語|にほんご}が <strong>[{上手|じょうず}]</strong> なりましたね。<br>B: ありがとう ございます。でも、まだまだです。", a: "{上手|じょうず}に", romaji: "Jouzu ni", pt: "ficou habilidoso (na-adj + ni)" }
        ]
      }
    ]
  },
  mondai: {
    title: "{問題|もんだい} (Problemas / Avaliação)",
    exercises: [
      {
        desc: "1. (　　) に {正|ただ}しい {助詞|じょし} を {入|い}れなさい。 (Preencha as partículas: に, を, が, は)",
        questions: [
          { q: "わたしは {富士山|ふじさん}（　　）{登|のぼ}った ことが あります。", a: "に", romaji: "ni", pt: "Partícula 'ni' (Direção/Alvo para subir)" },
          { q: "{休|やす}みの {日|ひ}は {音楽|おんがく}（　　）{聞|き}いたり、{本|ほん}を {読|よ}んだり します。", a: "を", romaji: "o", pt: "Partícula 'o' (Objeto direto de ouvir)" },
          { q: "だんだん {寒|さむ}く なりますから、{体|からだ}（　　）{気|き}を つけて ください。", a: "に", romaji: "ni", pt: "Partícula 'ni' (ki o tsukeru requer 'ni')" }
        ]
      },
      {
        desc: "2. {動詞|どうし}や{形容詞|けいようし} を {正|ただ}しい {形|けい} に {変|か}えなさい。 (Mude para a forma correta)",
        questions: [
          { q: "ここで {写真|しゃしん}を（{撮|と}ります ➔ ＿＿＿＿＿） ことが ありますか。", a: "{撮|と}った", romaji: "totta", pt: "Forma TA antes de koto ga arimasu" },
          { q: "{日曜日|にちようび}は テニスを（します ➔ ＿＿＿＿＿）、{映画|えいが}を {見|み}たり します。", a: "したり", romaji: "shitari", pt: "Forma TARI" },
          { q: "{来年|らいねん} わたしは 20{歳|さい}（です ➔ ＿＿＿＿＿）。", a: "に なります", romaji: "ni narimasu", pt: "Tornar-se 20 anos" }
        ]
      },
      {
        desc: "3. {読|よ}み{物|もの} (Leitura): ダイエット (Dieta)",
        questions: [
          {
            q: `<div class="reading-box">
                                    サントスさんは １か{月|げつ} まえに、ダイエットを はじめました。{毎日|まいにち} {運動|うんどう}したり、{野菜|やさい}を {食|た}べたり しました。でも、あまり {痩|や}せませんでした。{昨日|きのう} サントスさんは ケーキを 3つ {食|た}べました。
                                </div>
                                {質問|しつもん}: サントスさんは どうして ダイエットを しますか。<br>➔ {太|ふと}りましたから、＿＿＿＿＿＿＿＿＿。`,
            a: "{痩|や}せたいです",
            romaji: "yasetai desu",
            pt: "Porque quer emagrecer."
          }
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
          { tokens: ["{相撲|すもう}を", "{見|み}た", "ことが", "あります。"], pt: "Eu já vi sumô.", romaji: "Sumou o mita koto ga arimasu." },
          { tokens: ["{休|やす}みの", "{日|ひ}は", "テニスを", "したり、", "{散歩|さんぽ}に", "{行|い}ったり", "します。"], pt: "Nos dias de folga, eu jogo tênis, vou passear, etc.", romaji: "Yasumi no hi wa tenisu o shitari, sanpo ni ittari shimasu." },
          { tokens: ["これから", "だんだん", "{暑|あつ}く", "なります。"], pt: "De agora em diante, ficará gradualmente mais quente.", romaji: "Korekara dandan atsuku narimasu." },
          { tokens: ["{北海道|ほっかいどう}へ", "{行|い}った", "ことが", "ありますか。"], pt: "Você já foi a Hokkaido?", romaji: "Hokkaidou e itta koto ga arimasu ka." }
        ]
      }
    ]
  }
};
