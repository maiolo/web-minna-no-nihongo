// Dados da lição 13. Formato descrito no README.md.
window.lessonData = {
  vocab: {
    title: "{語彙|ごい} (Vocabulário)", title_en: "{語彙|ごい} (Vocabulary)",
    items: [
      { jp: "{遊|あそ}びます", romaji: "asobimasu", pt: "Brincar, passear, se divertir", en: "To play, to hang out, to have fun" },
      { jp: "{泳|およ}ぎます", romaji: "oyogimasu", pt: "Nadar", en: "To swim" },
      { jp: "{迎|むか}えます", romaji: "mukaemasu", pt: "Ir buscar, receber", en: "To pick up, to welcome" },
      { jp: "{疲|つか}れます", romaji: "tsukaremasu", pt: "Cansar-se", en: "To get tired" },
      { jp: "{結婚|けっこん}します", romaji: "kekkon shimasu", pt: "Casar-se", en: "To get married" },
      { jp: "{買|か}い{物|もの}します", romaji: "kaimono shimasu", pt: "Fazer compras", en: "To go shopping" },
      { jp: "{食事|しょくじ}します", romaji: "shokuji shimasu", pt: "Fazer uma refeição", en: "To have a meal" },
      { jp: "{散歩|さんぽ}します", romaji: "sanpo shimasu", pt: "Passear, dar uma caminhada", en: "To take a walk" },
      { jp: "{旅行|りょこう}", romaji: "ryokou", pt: "Viagem", en: "Trip" },
      { jp: "{留学|りゅうがく}", romaji: "ryuugaku", pt: "Estudo no exterior", en: "Studying abroad" },
      { jp: "{仕事|しごと}", romaji: "shigoto", pt: "Trabalho", en: "Work" },
      { jp: "{趣味|しゅみ}", romaji: "shumi", pt: "Passatempo", en: "Hobby" },
      { jp: "{映画|えいが}", romaji: "eiga", pt: "Filme", en: "Movie" },
      { jp: "{公園|こうえん}", romaji: "kouen", pt: "Parque", en: "Park" },
      { jp: "{海|うみ}", romaji: "umi", pt: "Mar, praia", en: "Sea, beach" },
      { jp: "{山|やま}", romaji: "yama", pt: "Montanha", en: "Mountain" },
      { jp: "{車|くるま}", romaji: "kuruma", pt: "Carro", en: "Car" },
      { jp: "{自分|じぶん}の", romaji: "jibun no", pt: "Próprio, seu próprio", en: "One's own" },
      { jp: "{新|あたら}しい", romaji: "atarashii", pt: "Novo", en: "New" },
      { jp: "{何|なに}か", romaji: "nanika", pt: "Alguma coisa", en: "Something" },
      { jp: "どこか", romaji: "dokoka", pt: "Algum lugar", en: "Somewhere" },
      { jp: "{何|なに}も", romaji: "nani mo", pt: "Nada (com negativa)", en: "Nothing (with a negative)" },
      { jp: "どこも", romaji: "dokomo", pt: "Lugar nenhum (com negativa)", en: "Nowhere (with a negative)" },
      { jp: "ほしい", romaji: "hoshii", pt: "Querer (ter), desejar", en: "To want (to have)" },
      { jp: "〜たい", romaji: "tai", pt: "Querer fazer 〜", en: "To want to do 〜" },
      { jp: "{目的|もくてき}", romaji: "mokuteki", pt: "Objetivo, finalidade", en: "Purpose" },
      { jp: "ちょっと", romaji: "chotto", pt: "Um pouco; (suaviza um pedido)", en: "A little; (softens a request)" },
      { jp: "{今|いま}", romaji: "ima", pt: "Agora", en: "Now" },
      { jp: "{夏休|なつやす}み", romaji: "natsuyasumi", pt: "Férias de verão", en: "Summer vacation" }
    ]
  },
  gramatica: {
    title: "{文法|ぶんぽう} (Gramática)", title_en: "{文法|ぶんぽう} (Grammar)",
    intro: "Quatro pontos para falar de desejos e de objetivos: o que se quer ter, o que se quer fazer, ir fazer algo e as palavras “algum”. Cada cartão traz o modelo, a explicação, exemplos, uma comparação e os erros mais comuns.", intro_en: "Four points to talk about wishes and purposes: what you want to have, what you want to do, going to do something and the “some-” words. Each card gives the pattern, the explanation, examples, a comparison and the most common mistakes.",
    points: [
      {
        id: "hoshii",
        title: "N が ほしいです", title_en: "N が ほしいです",
        pat: "N が ほしいです",
        short: "querer ter algo", short_en: "wanting to have something",
        mean: "<strong>ほしい</strong> é um い-adjetivo e expressa o desejo de <em>ter</em> algo. O objeto do desejo leva <strong>が</strong>. Na pergunta, usa-se {何|なに}が ほしいですか. Normalmente fala-se do próprio desejo (primeira pessoa) ou se pergunta ao ouvinte.", mean_en: "<strong>ほしい</strong> is an い-adjective and expresses the wish to <em>have</em> something. The object of the wish takes <strong>が</strong>. In the question, use {何|なに}が ほしいですか. You normally talk about your own wish (first person) or ask the listener.",
        ex: [
          { jp: "わたしは {新|あたら}しい {車|くるま}が ほしいです。", romaji: "Watashiha atarashii kuruma ga hoshii desu.", pt: "Eu quero um carro novo.", en: "I want a new car." },
          { jp: "{何|なに}が ほしいですか。<br>…{時間|じかん}が ほしいです。", romaji: "Nani ga hoshii desu ka. ...Jikan ga hoshii desu.", pt: "O que você quer? ...Quero tempo.", en: "What do you want? ...I want time." },
          { jp: "いま、{何|なに}も ほしく ありません。", romaji: "Ima, nani mo hoshiku arimasen.", pt: "Agora não quero nada.", en: "Right now I don't want anything." }
        ],
        contrast: {
          rows: [
            { label: "ほしい (querer ter)", label_en: "ほしい (to want to have)", jp: "{車|くるま}が ほしいです。", pt: "Quero um carro.", en: "I want a car." },
            { label: "〜たい (querer fazer)", label_en: "〜たい (to want to do)", jp: "{車|くるま}を {買|か}いたいです。", pt: "Quero comprar um carro.", en: "I want to buy a car." }
          ],
          note: "ほしい vem com um substantivo; 〜たい vem com um verbo. Os dois falam de desejo, mas de coisas diferentes.", note_en: "ほしい goes with a noun; 〜たい goes with a verb. Both speak of desire, but of different things."
        },
        trap: [
          "ほしい é um い-adjetivo: a negativa é ほしく ありません, e não ほしいじゃ ありません.",
          "Não use ほしいです para falar do desejo de outra pessoa como uma afirmação direta: prefira perguntar."
        ],
        trap_en: [
          "ほしい is an い-adjective: the negative is ほしく ありません, not ほしいじゃ ありません.",
          "Do not use ほしいです to state another person's wish as a direct fact: prefer to ask."
        ]
      },
      {
        id: "tai",
        title: "V-ます → V-たいです", title_en: "V-ます → V-たいです",
        pat: "V-ます(sem ます) ＋ たいです<br>Nを／Nが V-たいです",
        short: "querer fazer algo", short_en: "wanting to do something",
        mean: "Tire <strong>ます</strong> e acrescente <strong>たいです</strong>. O resultado se conjuga como um い-adjetivo (たくありません, たかったです). O objeto pode levar を ou が. Para recusar com educação, evite a negativa seca: use ちょっと…", mean_en: "Drop <strong>ます</strong> and add <strong>たいです</strong>. The result conjugates like an い-adjective (たくありません, たかったです). The object may take を or が. To refuse politely, avoid a blunt negative: use ちょっと…",
        form: [
          { label: "Como formar", label_en: "How to form it", text: "Verbo-ます sem ます + たい.", text_en: "Verb-ます without ます + たい.", ex: [
            { tag: "{行|い}きます", jp: "{行|い}きたいです", pt: "quero ir", en: "I want to go" },
            { tag: "{食|た}べます", jp: "{食|た}べたいです", pt: "quero comer", en: "I want to eat" },
            { tag: "{飲|の}みます", jp: "{飲|の}みたく ありません", pt: "não quero beber", en: "I don't want to drink" },
            { tag: "{泳|およ}ぎます", jp: "{泳|およ}ぎたかったです", pt: "eu queria nadar", en: "I wanted to swim" }
          ] }
        ],
        ex: [
          { jp: "{夏休|なつやす}みに {海|うみ}へ {行|い}きたいです。", romaji: "Natsuyasumini umi e ikitai desu.", pt: "Nas férias de verão, quero ir à praia.", en: "In the summer vacation I want to go to the beach." },
          { jp: "{今|いま}、{何|なに}が {食|た}べたいですか。<br>…すしが {食|た}べたいです。", romaji: "Ima, nani ga tabetai desu ka. ...Sushi ga tabetai desu.", pt: "O que você quer comer agora? ...Quero comer sushi.", en: "What do you want to eat now? ...I want to eat sushi." },
          { jp: "{今日|きょう}^は どこも {行|い}きたく ありません。", romaji: "Kyou wa dokomo ikitaku arimasen.", pt: "Hoje não quero ir a lugar nenhum.", en: "Today I don't want to go anywhere." }
        ],
        contrast: {
          rows: [
            { label: "ます (fato)", label_en: "ます (fact)", jp: "{映画|えいが}を {見|み}ます。", pt: "Vejo um filme.", en: "I watch a movie." },
            { label: "たいです (desejo)", label_en: "たいです (wish)", jp: "{映画|えいが}を {見|み}たいです。", pt: "Quero ver um filme.", en: "I want to watch a movie." }
          ],
          note: "A mesma raiz do verbo; o final decide se é fato ou desejo.", note_en: "The same verb stem; the ending decides whether it is fact or wish."
        },
        trap: [
          "Não deixe o ます: errado {行|い}きますたいです. O correto é {行|い}きたいです.",
          "A negativa segue o い-adjetivo: {行|い}きたく ありません, e não {行|い}きたいじゃ ありません."
        ],
        trap_en: [
          "Do not keep ます: wrong {行|い}きますたいです. The right form is {行|い}きたいです.",
          "The negative follows the い-adjective: {行|い}きたく ありません, not {行|い}きたいじゃ ありません."
        ]
      },
      {
        id: "mokuteki",
        title: "Lugar へ V-ます・Nに {行|い}きます (objetivo)", title_en: "Place へ V-ます・Nに {行|い}きます (purpose)",
        pat: "Lugar へ {行|い}きます／{来|き}ます／{帰|かえ}ります<br>→ Lugar へ V-ます(sem ます)／N に {行|い}きます",
        short: "ir a algum lugar para fazer algo", short_en: "going somewhere in order to do something",
        mean: "Para dizer <em>com que objetivo</em> se vai, vem ou volta, marca-se o objetivo com <strong>に</strong>. Pode ser um verbo sem ます ({買|か}いに) ou um substantivo de ação ({買|か}い{物|もの}に, {散歩|さんぽ}に).", mean_en: "To say <em>for what purpose</em> you go, come or return, mark the purpose with <strong>に</strong>. It can be a verb without ます ({買|か}いに) or an action noun ({買|か}い{物|もの}に, {散歩|さんぽ}に).",
        ex: [
          { jp: "デパートへ {買|か}い{物|もの}に {行|い}きます。", romaji: "Depaato e kaimono ni ikimasu.", pt: "Vou ao shopping para fazer compras.", en: "I go to the department store to shop." },
          { jp: "{駅|えき}へ {友達|ともだち}を {迎|むか}えに {行|い}きます。", romaji: "Eki e tomodachi o mukaeni ikimasu.", pt: "Vou à estação buscar um amigo.", en: "I go to the station to pick up a friend." },
          { jp: "{公園|こうえん}へ {散歩|さんぽ}に {行|い}きませんか。", romaji: "Kouen e sanpo ni ikimasen ka.", pt: "Que tal irmos passear no parque?", en: "Shall we go for a walk in the park?" }
        ],
        contrast: {
          rows: [
            { label: "sem objetivo", label_en: "without purpose", jp: "{公園|こうえん}へ {行|い}きます。", pt: "Vou ao parque.", en: "I go to the park." },
            { label: "com objetivo (に)", label_en: "with purpose (に)", jp: "{公園|こうえん}へ {遊|あそ}びに {行|い}きます。", pt: "Vou ao parque para me divertir.", en: "I go to the park to have fun." }
          ],
          note: "O に do objetivo vem antes de {行|い}きます e depois do verbo (sem ます) ou do substantivo de ação.", note_en: "The purpose に comes before {行|い}きます and after the verb (without ます) or the action noun."
        },
        trap: [
          "Não deixe o ます antes do に: errado {買|か}いますに. O correto é {買|か}いに.",
          "Com substantivo de ação, não repita し: é {散歩|さんぽ}に {行|い}きます, e não {散歩|さんぽ}しに a menos que se queira o verbo."
        ],
        trap_en: [
          "Do not keep ます before に: wrong {買|か}いますに. The right form is {買|か}いに.",
          "With an action noun, do not repeat し: say {散歩|さんぽ}に {行|い}きます, not {散歩|さんぽ}しに unless you want the verb."
        ]
      },
      {
        id: "nanika",
        title: "{何|なに}か ・ どこか ・ {何|なに}も ・ どこも", title_en: "{何|なに}か ・ どこか ・ {何|なに}も ・ どこも",
        pat: "{何|なに}か／どこか V ・ {何|なに}も／どこも V-ません",
        short: "alguma coisa, algum lugar, nada, lugar nenhum", short_en: "something, somewhere, nothing, nowhere",
        mean: "Com <strong>か</strong>, a palavra interrogativa vira “algum”: {何|なに}か (algo), どこか (algum lugar). Com <strong>も</strong> e uma frase negativa, vira “nenhum”: {何|なに}も, どこも. A partícula で/を/へ costuma ser omitida depois delas.", mean_en: "With <strong>か</strong>, the question word becomes “some-”: {何|なに}か (something), どこか (somewhere). With <strong>も</strong> and a negative sentence, it becomes “no-”: {何|なに}も, どこも. The particle で/を/へ is usually dropped after them.",
        ex: [
          { jp: "{暑|あつ}いですから、{何|なに}か {飲|の}みたいです。", romaji: "Atsui desu kara, nanika nomitai desu.", pt: "Está calor, então quero beber alguma coisa.", en: "It's hot, so I want to drink something." },
          { jp: "{日曜日|にちようび}、どこか {行|い}きましたか。<br>…いいえ、どこも {行|い}きませんでした。", romaji: "Nichiyoubi, doko ka ikimashita ka. ...Iie, doko mo ikimasen deshita.", pt: "No domingo, foi a algum lugar? ...Não, não fui a lugar nenhum.", en: "Did you go anywhere on Sunday? ...No, I didn't go anywhere." },
          { jp: "{今日|きょう}^は {何|なに}も {食|た}べませんでした。", romaji: "Kyou wa nani mo tabemasen deshita.", pt: "Hoje não comi nada.", en: "I didn't eat anything today." }
        ],
        contrast: {
          rows: [
            { label: "か (algum, afirma)", label_en: "か (some-, affirms)", jp: "どこか {行|い}きます。", pt: "Vou a algum lugar.", en: "I go somewhere." },
            { label: "も (nenhum, nega)", label_en: "も (no-, denies)", jp: "どこも {行|い}きません。", pt: "Não vou a lugar nenhum.", en: "I don't go anywhere." }
          ],
          note: "か vai com frases afirmativas ou perguntas; も exige o verbo na negativa.", note_en: "か goes with affirmative sentences or questions; も requires the verb in the negative."
        },
        trap: [
          "{何|なに}も só funciona com verbo negativo: errado {何|なに}も {食|た}べました.",
          "Não junte a partícula: é どこか {行|い}きます, e não どこかへ ... a menos que a frase peça (aqui a regra é omitir)."
        ],
        trap_en: [
          "{何|なに}も only works with a negative verb: wrong {何|なに}も {食|た}べました.",
          "Do not add the particle: say どこか {行|い}きます, not どこかへ … unless the sentence requires it (here the rule is to drop it)."
        ]
      }
    ]
  },
  renshuuA: {
    title: "{練習|れんしゅう} A", title_en: "{練習|れんしゅう} A",
    exercises: [
      {
        desc: "1. Passe para 〜たいです", desc_en: "1. Change to 〜たいです",
        questions: [
          { q: "{行|い}きます ➔", a: "{行|い}きたいです", romaji: "ikitai desu", pt: "Quero ir", en: "I want to go" },
          { q: "{食|た}べます ➔", a: "{食|た}べたいです", romaji: "tabetai desu", pt: "Quero comer", en: "I want to eat" },
          { q: "{泳|およ}ぎます ➔", a: "{泳|およ}ぎたいです", romaji: "oyogitai desu", pt: "Quero nadar", en: "I want to swim" },
          { q: "{飲|の}みます ➔", a: "{飲|の}みたく ありません", romaji: "nomitaku arimasen", pt: "Não quero beber", en: "I don't want to drink" }
        ]
      },
      {
        desc: "2. Complete com は, が, を, に ou へ", desc_en: "2. Fill in は, が, を, に or へ",
        questions: [
          { q: "{新|あたら}しい {車|くるま}（　　）ほしいです。", a: "が", romaji: "ga", pt: "Objeto do desejo: が", en: "Object of the wish: が" },
          { q: "デパート（　　）{買|か}い{物|もの}に {行|い}きます。", a: "へ", romaji: "e", pt: "Destino: へ (lido e)", en: "Destination: へ (read e)" },
          { q: "{買|か}い{物|もの}（　　）{行|い}きます。", a: "に", romaji: "ni", pt: "Objetivo: に", en: "Purpose: に" },
          { q: "{映画|えいが}（　　）{見|み}たいです。", a: "を", romaji: "o", pt: "Objeto: を", en: "Object: を" }
        ]
      }
    ]
  },
  renshuuB: {
    title: "{練習|れんしゅう} B", title_en: "{練習|れんしゅう} B",
    exercises: [
      {
        desc: "1. Complete a frase", desc_en: "1. Complete the sentence",
        questions: [
          { q: "A: {夏休|なつやす}みに どこか {行|い}きたいですか。<br>B: はい、{海|うみ}へ ＿＿＿＿＿＿。(ir nadar)", q_en: "A: {夏休|なつやす}みに どこか {行|い}きたいですか。<br>B: はい、{海|うみ}へ ＿＿＿＿＿＿。(to go swimming)", a: "{泳|およ}ぎに {行|い}きたいです", romaji: "oyogini ikitai desu", pt: "Objetivo ＋ 〜たい", en: "Purpose ＋ 〜たい" },
          { q: "A: {日曜日|にちようび}、どこか {行|い}きましたか。<br>B: いいえ、＿＿＿＿ {行|い}きませんでした。", a: "どこも", romaji: "doko mo", pt: "Nenhum lugar", en: "Nowhere" },
          { q: "A: {何|なに}が ほしいですか。<br>B: {自分|じぶん}の {車|くるま}＿＿ ほしいです。", a: "が", romaji: "ga", pt: "Objeto do desejo", en: "Object of the wish" }
        ]
      }
    ]
  },
  mondai: {
    title: "{問題|もんだい} (Problemas / Avaliação)", title_en: "{問題|もんだい} (Problems / Assessment)",
    exercises: [
      {
        desc: "1. (　　) に {正|ただ}しい ことばを {入|い}れなさい。 (が・を・に・も・か)", desc_en: "1. Fill in the blank with the right word. (が・を・に・も・か)",
        questions: [
          { q: "{何|なに}（　　）{飲|の}みたいです。(alguma coisa)", q_en: "{何|なに}（　　）{飲|の}みたいです。(something)", a: "か", romaji: "ka", pt: "“Algo”: か", en: "“Something”: か" },
          { q: "どこ（　　）{行|い}きませんでした。", a: "も", romaji: "mo", pt: "“Nenhum”: も", en: "“No-”: も" },
          { q: "{友達|ともだち}を {迎|むか}え（　　）{駅|えき}へ {行|い}きます。", a: "に", romaji: "ni", pt: "Objetivo: に", en: "Purpose: に" },
          { q: "{新|あたら}しい パソコン（　　）ほしいです。", a: "が", romaji: "ga", pt: "Objeto do desejo", en: "Object of the wish" }
        ]
      },
      {
        desc: "2. {読|よ}み{物|もの} (Leitura): {夏休|なつやす}み", desc_en: "2. Reading: summer vacation",
        questions: [
          {
            q: `<div class="reading-box">{来週|らいしゅう}から {夏休|なつやす}みです。わたしは {山|やま}へ {行|い}きたいです。{友達|ともだち}は {海|うみ}へ {泳|およ}ぎに {行|い}きたいです。でも、わたしは あまり {泳|およ}ぎたく ありません。</div>{質問|しつもん}: {友達|ともだち}は {何|なに}を しに {海|うみ}へ {行|い}きたいですか。<br>➔ ＿＿＿＿に {行|い}きたいです。`,
            a: "{泳|およ}ぎ",
            romaji: "oyogi",
            pt: "Nadar.", en: "To swim."
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
          { tokens: ["{新|あたら}しい", "{車|くるま}が", "ほしいです。"], pt: "Quero um carro novo.", en: "I want a new car.", romaji: "Atarashii kuruma ga hoshii desu." },
          { tokens: ["{海|うみ}へ", "{泳|およ}ぎに", "{行|い}きたいです。"], pt: "Quero ir à praia nadar.", en: "I want to go to the beach to swim.", romaji: "Umi e oyogi ni ikitai desu." },
          { tokens: ["デパートへ", "{買|か}い{物|もの}に", "{行|い}きます。"], pt: "Vou ao shopping fazer compras.", en: "I go to the department store to shop.", romaji: "Depaato e kaimono ni ikimasu." },
          { tokens: ["どこも", "{行|い}きませんでした。"], pt: "Não fui a lugar nenhum.", en: "I didn't go anywhere.", romaji: "Doko mo ikimasen deshita." }
        ]
      }
    ]
  }
};
