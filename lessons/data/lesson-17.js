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
  bunkei: {
    patterns: {
      title: "{文型|ぶんけい} (Padrões de Frase)",
      items: [
        { jp: "{写真|しゃしん}を{撮|と}らないでください。", romaji: "Shashin o toranaide kudasai.", pt: "Por favor, não tire fotos." },
        { jp: "パスポートを{見|み}せなければなりません。", romaji: "Pasupooto o misenakereba narimasen.", pt: "Tenho que mostrar o passaporte." },
        { jp: "{日曜日|にちようび}は{早|はや}く{起|お}きなくてもいいです。", romaji: "Nichiyoubi wa hayaku okinakutemo ii desu.", pt: "No domingo, não preciso acordar cedo." }
      ]
    },
    examples: {
      title: "{例文|れいぶん} (Exemplos)",
      items: [
        { jp: "そこに{入|はい}らないでください。<br>…はい、わかりました。", romaji: "Soko ni hairanaide kudasai. ...Hai, wakarimashita.", pt: "Por favor, não entre aí. ...Sim, entendi." },
        { jp: "この{薬|くすり}を{飲|の}まなければなりませんか。<br>…はい、{飲|の}まなければなりません。", romaji: "Kono kusuri o nomanakereba narimasen ka. ...Hai, nomanakereba narimasen.", pt: "Tenho que tomar este remédio? ...Sim, tem que tomar." },
        { jp: "{明日|あした}も{来|き}なければなりませんか。<br>…いいえ、{来|こ}なくてもいいです。", romaji: "Ashita mo kinakereba narimasen ka. ...Iie, konakutemo ii desu.", pt: "Tenho que vir amanhã também? ...Não, não precisa vir." },
        { jp: "{荷物|にもつ}はどこに{置|お}きますか。<br>…{荷物|にもつ}はそこに{置|お}かないでください。", romaji: "Nimotsu wa doko ni okimasu ka. ...Nimotsu wa soko ni okanaide kudasai.", pt: "Onde coloco a bagagem? ...Quanto à bagagem, por favor não coloque aí." }
      ]
    }
  },
  gramatica: {
    title: "{文法|ぶんぽう} (Gramática)",
    content: `
                    <div class="card">
                        <h3 class="card-header">1. {動詞|どうし} ない{形|けい} (Forma 'Nai' dos Verbos)</h3>
                        <p>A forma <strong>ない</strong> é usada para criar negativas informais ou como base para outras estruturas gramaticais. Como construir:</p>
                        <table class="grammar-table">
                            <tr>
                                <th>{第|だい}１グループ (Grupo 1)</th>
                                <td>Troca-se o som da coluna <strong>い (i)</strong> antes do ます pelo som da coluna <strong>あ (a)</strong>, e adiciona-se ない.<br>
                                    {書|か}きます ➔ {書|か}か<strong>ない</strong><br>
                                    {読|よ}みます ➔ {読|よ}ま<strong>ない</strong><br>
                                    <em>*Exceção: verbos terminados em い mudam para わ. (ex: {買|か}います ➔ {買|か}わ<strong>ない</strong>)</em>
                                </td>
                            </tr>
                            <tr>
                                <th>{第|だい}２グループ (Grupo 2)</th>
                                <td>Corta-se o ます e adiciona-se ない.<br>
                                    {食|た}べます ➔ {食|た}べ<strong>ない</strong><br>
                                    {見|み}ます ➔ {見|み}<strong>ない</strong>
                                </td>
                            </tr>
                            <tr>
                                <th>{第|だい}３グループ (Grupo 3)</th>
                                <td>Irregulares.<br>
                                    します ➔ し<strong>ない</strong><br>
                                    {来|き}ます ➔ {来|こ}<strong>ない</strong> (Atenção à mudança de leitura do Kanji: き➔こ)
                                </td>
                            </tr>
                        </table>
                    </div>

                    <div class="card">
                        <h3 class="card-header">2. {動詞|どうし} ない{形|けい} ＋ でください</h3>
                        <p>Significa <strong>"Por favor, não faça ~"</strong>. Usado para pedir ou instruir alguém a não fazer algo.</p>
                        <p class="item-box">
                            {忘|わす}れないでください。<br>
                            <span class="romaji">Wasurenaide kudasai.</span><br>
                            <em>Por favor, não esqueça.</em>
                        </p>
                    </div>

                    <div class="card">
                        <h3 class="card-header">3. {動詞|どうし} ない{形|けい} (sem い) ＋ ければなりません</h3>
                        <p>Significa <strong>"Ter que / Precisar / Dever fazer ~"</strong>. Expressa obrigação. Corta-se o "い" do ない e adiciona "ければなりません".</p>
                        <p class="item-box">
                            {薬|くすり}を{飲|の}ま<strong>なければなりません</strong>。<br>
                            <span class="romaji">Kusuri o nomanakereba narimasen.</span><br>
                            <em>Tenho que tomar o remédio.</em>
                        </p>
                    </div>

                    <div class="card">
                        <h3 class="card-header">4. {動詞|どうし} ない{形|けい} (sem い) ＋ くてもいいです</h3>
                        <p>Significa <strong>"Não precisa / Não tem que fazer ~"</strong>. Expressa a ausência de obrigação.</p>
                        <p class="item-box">
                            {明日|あした} {来|こ}な<strong>くてもいいです</strong>。<br>
                            <span class="romaji">Ashita konakutemo ii desu.</span><br>
                            <em>Não precisa vir amanhã.</em>
                        </p>
                    </div>

                    <div class="card">
                        <h3 class="card-header">5. {名詞|めいし} (Tempo) ＋ までに ＋ {動詞|どうし}</h3>
                        <p>Significa <strong>"Até (tal prazo)"</strong>. Indica o limite de tempo em que uma ação contínua deve ser concluída. Diferente de "まで" (que indica a duração contínua de uma ação).</p>
                        <p class="item-box">
                            {金曜日|きんようび}<strong>までに</strong> レポートを{出|だ}さなければなりません。<br>
                            <span class="romaji">Kinyoubi madeni repooto o dasanakereba narimasen.</span><br>
                            <em>Tenho que entregar o relatório ATÉ sexta-feira.</em>
                        </p>
                    </div>
                `
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
