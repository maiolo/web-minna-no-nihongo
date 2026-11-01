// Dados da lição 22. Formato descrito no README.md.
window.lessonData = {
  vocab: {
    title: "{語彙|ごい} (Vocabulário)", title_en: "{語彙|ごい} (Vocabulary)",
    items: [
      { jp: "{眼鏡|めがね}", romaji: "megane", pt: "Óculos", en: "Glasses" },
      { jp: "{帽子|ぼうし}", romaji: "boushi", pt: "Chapéu, boné", en: "Hat, cap" },
      { jp: "{背|せ}", romaji: "se", pt: "Altura (de pessoa); costas", en: "Height (of a person); back" },
      { jp: "{髪|かみ}", romaji: "kami", pt: "Cabelo", en: "Hair" },
      { jp: "{長|なが}い", romaji: "nagai", pt: "Longo, comprido", en: "Long" },
      { jp: "{短|みじか}い", romaji: "mijikai", pt: "Curto", en: "Short" },
      { jp: "{丸|まる}い", romaji: "marui", pt: "Redondo", en: "Round" },
      { jp: "{太|ふと}い", romaji: "futoi", pt: "Grosso; gordo", en: "Thick; fat" },
      { jp: "{細|ほそ}い", romaji: "hosoi", pt: "Fino; magro", en: "Thin; slim" },
      { jp: "{可愛|かわい}い", romaji: "kawaii", pt: "Fofo, bonitinho", en: "Cute" },
      { jp: "{有名|ゆうめい}", romaji: "yuumei", pt: "Famoso (adjetivo な)", en: "Famous (na-adjective)" },
      { jp: "{親切|しんせつ}", romaji: "shinsetsu", pt: "Gentil, atencioso (adjetivo な)", en: "Kind, helpful (na-adjective)" },
      { jp: "{歌手|かしゅ}", romaji: "kashu", pt: "Cantor(a)", en: "Singer" },
      { jp: "{小説|しょうせつ}", romaji: "shousetsu", pt: "Romance (livro)", en: "Novel" },
      { jp: "{建物|たてもの}", romaji: "tatemono", pt: "Prédio, edifício", en: "Building" },
      { jp: "{店|みせ}", romaji: "mise", pt: "Loja", en: "Shop" },
      { jp: "{着|き}ます", romaji: "kimasu", pt: "Vestir, usar (roupa)", en: "To wear (clothes)" },
      { jp: "かけます", romaji: "kakemasu", pt: "Pôr (óculos); pendurar", en: "To put on (glasses); to hang" },
      { jp: "{持|も}ちます", romaji: "mochimasu", pt: "Segurar, carregar", en: "To hold, to carry" },
      { jp: "{住|す}みます", romaji: "sumimasu", pt: "Morar, residir", en: "To live, to reside" }
    ]
  },
  gramatica: {
    title: "{文法|ぶんぽう} (Gramática)", title_en: "{文法|ぶんぽう} (Grammar)",
    intro: "Quatro pontos nesta lição, todos sobre o mesmo recurso: descrever um substantivo com uma frase inteira, colocada antes dele. O japonês não tem pronome relativo, então a ordem é o oposto do português. Cada cartão traz o modelo, a explicação, os exemplos, uma comparação e as armadilhas.", intro_en: "Four points in this lesson, all about one resource: describing a noun with a whole sentence placed before it. Japanese has no relative pronoun, so the order is the opposite of English. Each card gives the pattern, the explanation, the examples, a comparison and the pitfalls.",
    points: [
      {
        id: "meishi-shuushoku",
        title: "{名詞修飾|めいししゅうしょく} (cláusula ＋ substantivo)", title_en: "{名詞修飾|めいししゅうしょく} (clause ＋ noun)",
        pat: "［{普通形|ふつうけい}］＋ N", title_en: "［{普通形|ふつうけい}］＋ N",
        short: "descrever um substantivo com uma frase", short_en: "describing a noun with a sentence",
        mean: "Não existe pronome relativo em japonês: a frase que descreve o substantivo vem antes dele, na forma {普通|ふつう}, e o substantivo fecha o bloco. “o livro que comprei ontem” = ［{昨日|きのう} {買|か}った］{本|ほん}.", mean_en: "Japanese has no relative pronoun: the sentence that describes the noun comes before it, in the {普通|ふつう} form, and the noun closes the block. “the book I bought yesterday” = ［{昨日|きのう} {買|か}った］{本|ほん}.",
        rule: "A cláusula vai em {普通形|ふつうけい} e o substantivo vem logo depois, sem partícula entre os dois. Verbo: 〜る／〜た. Adjetivo い: 〜い. Adjetivo な: 〜な. Substantivo: 〜の.", rule_en: "The clause goes in the {普通|ふつう} form and the noun comes right after, with no particle between them. Verb: 〜る／〜た. い-adjective: 〜い. な-adjective: 〜な. Noun: 〜の.",
        form: [
          { label: "{動詞|どうし} (verbo)", label_en: "{動詞|どうし} (verb)", text: "Forma {普通|ふつう} antes do substantivo.", text_en: "{普通|ふつう} form before the noun.", ex: [
            { jp: "{日本|にほん}に {行|い}く {人|ひと}", romaji: "nihon ni iku hito", pt: "a pessoa que vai ao Japão", en: "the person who is going to Japan" },
            { jp: "{昨日|きのう} {買|か}った {本|ほん}", romaji: "kinou katta hon", pt: "o livro que comprei ontem", en: "the book I bought yesterday" }
          ] },
          { label: "い{形容詞|けいようし} (Adj-i)", label_en: "い{形容詞|けいようし} (i-adjective)", text: "O adjetivo entra como está.", text_en: "The adjective goes in as it is.", ex: [
            { jp: "{背|せ}が {高|たか}い {人|ひと}", romaji: "se ga takai hito", pt: "uma pessoa alta", en: "a tall person" },
            { jp: "{寒|さむ}い {日|ひ}", romaji: "samui hi", pt: "um dia frio", en: "a cold day" }
          ] },
          { label: "な{形容詞|けいようし} (Adj-na)", label_en: "な{形容詞|けいようし} (Adj-na)", text: "O <strong>な</strong> fica antes do substantivo.", text_en: "The <strong>な</strong> stays before the noun.", ex: [
            { jp: "{日本語|にほんご}が {上手|じょうず}な {人|ひと}", romaji: "nihongo ga jouzu na hito", pt: "uma pessoa boa em japonês", en: "a person who is good at Japanese" }
          ] },
          { label: "{名詞|めいし} (Substantivo)", label_en: "{名詞|めいし} (Noun)", text: "Aqui entra o <strong>の</strong>.", text_en: "Here the <strong>の</strong> comes in.", ex: [
            { jp: "{日本人|にほんじん}の {友達|ともだち}", romaji: "nihonjin no tomodachi", pt: "um amigo japonês", en: "a Japanese friend" }
          ] }
        ],
        ex: [
          { jp: "{昨日|きのう} {買|か}った {本|ほん}^は とても おもしろかったです。", romaji: "Kinou katta hon wa totemo omoshirokatta desu.", pt: "O livro que comprei ontem era muito interessante.", en: "The book I bought yesterday was very interesting." },
          { jp: "{日本|にほん}に {行|い}く {人|ひと}が たくさん います。", romaji: "Nihon ni iku hito ga takusan imasu.", pt: "Há muitas pessoas que vão ao Japão.", en: "There are many people who are going to Japan." },
          { jp: "{日本語|にほんご}が {上手|じょうず}な {人|ひと}に {会|あ}いました。", romaji: "Nihongo ga jouzu na hito ni aimashita.", pt: "Encontrei uma pessoa boa em japonês.", en: "I met a person who is good at Japanese." },
          { jp: "{寒|さむ}い {日|ひ}^は {家|いえ}で {本|ほん}を {読|よ}みます。", romaji: "Samui hi wa ie de hon o yomimasu.", pt: "Nos dias frios, leio em casa.", en: "On cold days I read at home." }
        ],
        contrast: {
          rows: [
            { label: "N の N (posse, origem)", label_en: "N の N (possession, origin)", jp: "{日本|にほん}の {本|ほん}", pt: "o livro do Japão: dois substantivos ligados por の.", en: "the book from Japan: two nouns linked by の." },
            { label: "cláusula ＋ N (descrição)", label_en: "clause ＋ N (description)", jp: "{日本|にほん}で {買|か}った {本|ほん}", pt: "o livro que comprei no Japão: a frase descreve o livro.", en: "the book I bought in Japan: the sentence describes the book." }
          ],
          note: "O の liga substantivo com substantivo. Para descrever com verbo ou adjetivo, o bloco ［...］N faz esse papel sem nenhuma partícula.", note_en: "の links noun to noun. To describe with a verb or an adjective, the ［...］N block does the job with no particle at all."
        },
        trap: [
          "A cláusula não leva です／ます: {買|か}いました {本|ほん} é errado; é {買|か}った {本|ほん}.",
          "Não existe palavra para “que”: ［{買|か}った］{本|ほん} já é a ligação, sem nada no meio.",
          "Com adjetivo な o な não pode cair: {上手|じょうず}な {人|ひと}, e não {上手|じょうず} {人|ひと}."
        ],
        trap_en: [
          "The clause takes no です／ます: {買|か}いました {本|ほん} is wrong; it is {買|か}った {本|ほん}.",
          "There is no word for “that”: ［{買|か}った］{本|ほん} is already the link, with nothing in between.",
          "With な-adjectives the な cannot drop: {上手|じょうず}な {人|ひと}, not {上手|じょうず} {人|ひと}."
        ]
      },
      {
        id: "shugo-ga",
        title: "{修飾節|しゅうしょくせつ}の {中|なか}の {主語|しゅご}: が", title_en: "{修飾節|しゅうしょくせつ}の {中|なか}の {主語|しゅご}: が",
        pat: "［〜が …］＋ N", title_en: "［〜が …］＋ N",
        short: "quem faz a ação dentro da descrição leva が", short_en: "the doer inside the description takes が",
        mean: "Dentro da cláusula que descreve o substantivo, o sujeito leva が. O は é o assunto da frase inteira e não entra na cláusula.", mean_en: "Inside the clause that describes the noun, the subject takes が. は is the topic of the whole sentence and does not go inside the clause.",
        rule: "Se o sujeito aparece dentro do bloco, use が. Se a frase inteira tem um tema, ele fica antes do bloco, com は.", rule_en: "If the subject appears inside the block, use が. If the whole sentence has a topic, it comes before the block, with は.",
        form: [
          { label: "い{形容詞|けいようし}", label_en: "い{形容詞|けいようし}", text: "O sujeito da qualidade leva が.", text_en: "The subject of the quality takes が.", ex: [
            { jp: "{背|せ}が {高|たか}い {人|ひと}", romaji: "se ga takai hito", pt: "pessoa alta", en: "a tall person" },
            { jp: "{髪|かみ}が {長|なが}い {人|ひと}", romaji: "kami ga nagai hito", pt: "pessoa de cabelo comprido", en: "a person with long hair" }
          ] },
          { label: "{動詞|どうし}", label_en: "{動詞|どうし}", text: "Quem faz a ação também leva が.", text_en: "Whoever does the action also takes が.", ex: [
            { jp: "{雨|あめ}が {降|ふ}って いる {日|ひ}", romaji: "ame ga futte iru hi", pt: "um dia em que está chovendo", en: "a day when it is raining" }
          ] },
          { label: "{名詞|めいし} + が わかる／できます", label_en: "{名詞|めいし} + が わかる／できます", text: "Sujeito do que se sabe fazer.", text_en: "Subject of what one can do.", ex: [
            { jp: "{日本語|にほんご}が わかる {人|ひと}", romaji: "nihongo ga wakaru hito", pt: "pessoa que entende japonês", en: "a person who understands Japanese" }
          ] }
        ],
        ex: [
          { jp: "{雨|あめ}が {降|ふ}って いる {日|ひ}^は うちに います。", romaji: "Ame ga futte iru hi wa uchi ni imasu.", pt: "Nos dias de chuva, fico em casa.", en: "On rainy days I stay at home." },
          { jp: "{背|せ}が {高|たか}い {人|ひと}が {多|おお}いです。", romaji: "Se ga takai hito ga ooi desu.", pt: "Há muitas pessoas altas.", en: "There are many tall people." },
          { jp: "{日本語|にほんご}が わかる {人|ひと}に {聞|き}きました。", romaji: "Nihongo ga wakaru hito ni kikimashita.", pt: "Perguntei a uma pessoa que entende japonês.", en: "I asked a person who understands Japanese." }
        ],
        contrast: {
          rows: [
            { label: "が dentro da cláusula", label_en: "が inside the clause", jp: "{背|せ}が {高|たか}い {人|ひと}が {好|す}きです。", pt: "Gosto de pessoas altas: が descreve, e o が final é o que {好|す}き pede (o objeto do gosto), não é o sujeito da descrição.", en: "I like tall people: が describes, and the final が is what {好|す}き asks for (the object of liking), not the subject of the description." },
            { label: "は na frase inteira", label_en: "は in the whole sentence", jp: "{田中|たなか}さん^は {背|せ}が {高|たか}いです。", pt: "O Tanaka é alto: o は apresenta o assunto da frase.", en: "Tanaka is tall: は introduces the topic of the sentence." }
          ],
          note: "Dentro do bloco o は não cabe. ［{背|せ}は {高|たか}い］{人|ひと} soa como comparação, não como descrição.", note_en: "は does not fit inside the block. ［{背|せ}は {高|たか}い］{人|ひと} sounds like a comparison, not a description."
        },
        trap: [
          "Não troque が por は dentro da cláusula: {背|せ}は {高|たか}い {人|ひと} soa errado.",
          "O が de {好|す}きです continua na frase maior; não é ele que descreve.",
          "Pergunta dentro da cláusula também usa が: {誰|だれ}が {作|つく}った ケーキですか。"
        ],
        trap_en: [
          "Do not swap が for は inside the clause: {背|せ}は {高|たか}い {人|ひと} sounds wrong.",
          "The が of {好|す}きです stays in the main sentence; it is not the one that describes.",
          "A question inside the clause also uses が: {誰|だれ}が {作|つく}った ケーキですか。"
        ]
      },
      {
        id: "teiru-ta",
        title: "［V-て いる］N と ［V-た］N", title_en: "［V-て いる］N and ［V-た］N",
        pat: "V-て いる ＋ N<br>V-た ＋ N", title_en: "V-て いる ＋ N<br>V-た ＋ N",
        short: "situação em curso × ação concluída", short_en: "ongoing situation vs. finished action",
        mean: "［V-て いる］N descreve uma situação que continua ou está em curso: a pessoa que está de pé, que usa óculos, que mora perto. ［V-た］N descreve uma ação que terminou: o bolo que o pai fez, o livro que comprei ontem.", mean_en: "［V-て いる］N describes a situation that continues or is in progress: the person standing, wearing glasses, living nearby. ［V-た］N describes a finished action: the cake my father made, the book I bought yesterday.",
        rule: "Use ている para estado ou ação em curso e た para o que já aconteceu. Para descrever alguém, use ている ({住|す}んでいる, {結婚|けっこん}している); {住|す}みます/{結婚|けっこん}します ficam para o futuro.", rule_en: "Use ている for a state or an action in progress and た for what has already happened. To describe someone, use ている ({住|す}んでいる, {結婚|けっこん}している); {住|す}みます/{結婚|けっこん}します are for the future.",
        form: [
          { label: "V-て いる", label_en: "V-て いる", text: "Situação atual ou ação em curso.", text_en: "Current situation or action in progress.", ex: [
            { jp: "{眼鏡|めがね}を かけて いる {人|ひと}", romaji: "megane o kakete iru hito", pt: "a pessoa que está de óculos", en: "the person wearing glasses" },
            { jp: "{立|た}って いる {人|ひと}", romaji: "tatte iru hito", pt: "a pessoa que está de pé", en: "the person who is standing" }
          ] },
          { label: "V-た", label_en: "V-た", text: "Ação já terminada.", text_en: "Finished action.", ex: [
            { jp: "{父|ちち}が {作|つく}った ケーキ", romaji: "chichi ga tsukutta keeki", pt: "o bolo que meu pai fez", en: "the cake my father made" },
            { jp: "{昨日|きのう} {読|よ}んだ {本|ほん}", romaji: "kinou yonda hon", pt: "o livro que li ontem", en: "the book I read yesterday" }
          ] }
        ],
        ex: [
          { jp: "{眼鏡|めがね}を かけて いる {人|ひと}^は {田中|たなか}さんです。", romaji: "Megane o kakete iru hito wa Tanaka-san desu.", pt: "A pessoa de óculos é o Tanaka.", en: "The person wearing glasses is Tanaka." },
          { jp: "{父|ちち}が {作|つく}った ケーキ^は とても おいしいです。", romaji: "Chichi ga tsukutta keeki wa totemo oishii desu.", pt: "O bolo que meu pai fez é muito gostoso.", en: "The cake my father made is really tasty." },
          { jp: "{駅|えき}の {近|ちか}くに {住|す}んで いる {人|ひと}^は {親切|しんせつ}です。", romaji: "Eki no chikaku ni sunde iru hito wa shinsetsu desu.", pt: "As pessoas que moram perto da estação são gentis.", en: "The people who live near the station are kind." },
          { jp: "{昨日|きのう} {買|か}った {帽子|ぼうし}^は これです。", romaji: "Kinou katta boushi wa kore desu.", pt: "O chapéu que comprei ontem é este.", en: "The hat I bought yesterday is this one." }
        ],
        contrast: {
          rows: [
            { label: "V-て いる (situação)", label_en: "V-て いる (situation)", jp: "{立|た}って いる {人|ひと}", pt: "a pessoa que está de pé agora.", en: "the person who is standing now." },
            { label: "V-た (fato concluído)", label_en: "V-た (finished fact)", jp: "{立|た}った {人|ひと}", pt: "a pessoa que se levantou (a ação terminou).", en: "the person who stood up (the action is over)." }
          ],
          note: "Com ている o foco é como a coisa está; com た, o que aconteceu. Por isso ている aparece tanto para “agora” quanto para estados duradouros.", note_en: "With ている the focus is how things are; with た, what happened. That is why ている covers both “right now” and lasting states."
        },
        trap: [
          "{住|す}みます {人|ひと} não descreve ninguém: o certo é {住|す}んで いる {人|ひと}.",
          "Não use ます dentro do bloco: {作|つく}りました ケーキ é errado; é {作|つく}った ケーキ.",
          "ている não significa só “agora”: {結婚|けっこん}して いる {人|ひと} é a pessoa casada, não a que está se casando."
        ],
        trap_en: [
          "{住|す}みます {人|ひと} does not describe anyone: the right form is {住|す}んで いる {人|ひと}.",
          "Do not use ます inside the block: {作|つく}りました ケーキ is wrong; it is {作|つく}った ケーキ.",
          "ている does not only mean “now”: {結婚|けっこん}して いる {人|ひと} is a married person, not someone getting married."
        ]
      },
      {
        id: "bloco-particulas",
        title: "O bloco ［…＋N］ recebe は・が・を", title_en: "The ［…＋N］ block takes は・が・を",
        pat: "［cláusula］N ^は／が／を …", title_en: "［clause］N ^は／が／を …",
        short: "a função do substantivo na frase maior", short_en: "the noun's role in the larger sentence",
        mean: "O bloco inteiro vale como um substantivo: pode ser o tema (は), o sujeito (が) ou o objeto (を) da frase maior. A partícula vem depois do substantivo, nunca dentro da cláusula.", mean_en: "The whole block works as one noun: it can be the topic (は), the subject (が) or the object (を) of the larger sentence. The particle comes after the noun, never inside the clause.",
        rule: "Monte o bloco ［cláusula ＋ N］ e só então coloque a partícula. O resto da frase continua normalmente.", rule_en: "Build the block ［clause ＋ N］ and only then add the particle. The rest of the sentence goes on as usual.",
        form: [
          { label: "^は (tema)", label_en: "^は (topic)", text: "O bloco é o assunto da frase.", text_en: "The block is the topic of the sentence.", ex: [
            { jp: "{田中|たなか}さんが {作|つく}った ケーキ^は おいしいです", romaji: "tanaka-san ga tsukutta keeki wa oishii desu", pt: "o bolo que o Tanaka fez é gostoso", en: "the cake Tanaka made is tasty" }
          ] },
          { label: "が (sujeito)", label_en: "が (subject)", text: "O bloco é quem faz ou existe.", text_en: "The block is who does or exists.", ex: [
            { jp: "{駅|えき}の {近|ちか}くに {住|す}んで いる {人|ひと}が います", romaji: "eki no chikaku ni sunde iru hito ga imasu", pt: "há pessoas que moram perto da estação", en: "there are people who live near the station" }
          ] },
          { label: "を (objeto)", label_en: "を (object)", text: "O bloco é o objeto da ação.", text_en: "The block is the object of the action.", ex: [
            { jp: "{昨日|きのう} {読|よ}んだ {本|ほん}を {返|かえ}しました", romaji: "kinou yonda hon o kaeshimashita", pt: "devolvi o livro que li ontem", en: "I returned the book I read yesterday" }
          ] }
        ],
        ex: [
          { jp: "{田中|たなか}さんが {作|つく}った ケーキ^は おいしいです。", romaji: "Tanaka-san ga tsukutta keeki wa oishii desu.", pt: "O bolo que o Tanaka fez é gostoso.", en: "The cake Tanaka made is tasty." },
          { jp: "{駅|えき}の {近|ちか}くに {住|す}んで いる {人|ひと}が {多|おお}いです。", romaji: "Eki no chikaku ni sunde iru hito ga ooi desu.", pt: "Muitas pessoas moram perto da estação.", en: "Many people live near the station." },
          { jp: "{昨日|きのう} {読|よ}んだ {本|ほん}を {返|かえ}しました。", romaji: "Kinou yonda hon o kaeshimashita.", pt: "Devolvi o livro que li ontem.", en: "I returned the book I read yesterday." }
        ],
        contrast: {
          rows: [
            { label: "tema (は)", label_en: "topic (は)", jp: "{田中|たなか}さんが {作|つく}った ケーキ^は おいしいです。", pt: "Fala do bolo: ele é gostoso.", en: "The cake is what we are talking about: it is tasty." },
            { label: "sujeito (が)", label_en: "subject (が)", jp: "{田中|たなか}さんが {作|つく}った ケーキが あります。", pt: "Existe um bolo que o Tanaka fez.", en: "There is a cake that Tanaka made." }
          ],
          note: "A partícula marca o papel do bloco inteiro. Trocar は por が muda o foco da frase, não o sentido básico.", note_en: "The particle marks the role of the whole block. Swapping は for が changes the focus, not the basic meaning."
        },
        trap: [
          "A partícula nunca entra na cláusula: {昨日|きのう} {買|か}った を {本|ほん} é errado.",
          "Não repita o substantivo: 「{読|よ}んだ {本|ほん}を {本|ほん}を {返|かえ}しました」 é errado; diga 「{読|よ}んだ {本|ほん}を {返|かえ}しました」.",
          "A partícula vem logo depois do substantivo que fecha o bloco."
        ],
        trap_en: [
          "The particle never goes inside the clause: {昨日|きのう} {買|か}った を {本|ほん} is wrong.",
          "Do not repeat the noun: 「{読|よ}んだ {本|ほん}を {本|ほん}を {返|かえ}しました」 is wrong; say 「{読|よ}んだ {本|ほん}を {返|かえ}しました」.",
          "The particle comes right after the noun that closes the block."
        ]
      }
    ]
  },
  renshuuA: {
    title: "{練習|れんしゅう} A", title_en: "{練習|れんしゅう} A",
    exercises: [
      {
        desc: "1. ［{普通形|ふつうけい}］＋ N (Junte a frase ao substantivo)", desc_en: "1. ［{普通形|ふつうけい}］＋ N (Join the sentence to the noun)",
        questions: [
          { q: "{昨日|きのう} {買|か}いました。＋ {本|ほん} ➔", a: "{昨日|きのう} {買|か}った {本|ほん}", romaji: "kinou katta hon", pt: "o livro que comprei ontem", en: "the book I bought yesterday" },
          { q: "{日本|にほん}に {行|い}きます。＋ {人|ひと} ➔", a: "{日本|にほん}に {行|い}く {人|ひと}", romaji: "nihon ni iku hito", pt: "a pessoa que vai ao Japão", en: "the person who is going to Japan" },
          { q: "{髪|かみ}が {長|なが}いです。＋ {人|ひと} ➔", a: "{髪|かみ}が {長|なが}い {人|ひと}", romaji: "kami ga nagai hito", pt: "a pessoa de cabelo comprido", en: "the person with long hair" },
          { q: "{日本語|にほんご}が {上手|じょうず}です。＋ {人|ひと} ➔", a: "{日本語|にほんご}が {上手|じょうず}な {人|ひと}", romaji: "nihongo ga jouzu na hito", pt: "a pessoa boa em japonês", en: "the person who is good at Japanese" }
        ]
      },
      {
        desc: "2. 〜て いる／〜た (Escolha a forma certa para descrever)", desc_en: "2. 〜て いる／〜た (Choose the right form to describe)",
        questions: [
          { q: "{眼鏡|めがね}を かけます。＋ {人|ひと}（agora）➔", a: "{眼鏡|めがね}を かけて いる {人|ひと}", romaji: "megane o kakete iru hito", pt: "a pessoa que está de óculos", en: "the person wearing glasses" },
          { q: "{父|ちち}が {作|つく}りました。＋ ケーキ ➔", a: "{父|ちち}が {作|つく}った ケーキ", romaji: "chichi ga tsukutta keeki", pt: "o bolo que meu pai fez", en: "the cake my father made" },
          { q: "{駅|えき}の {近|ちか}くに {住|す}みます。＋ {人|ひと} ➔", a: "{駅|えき}の {近|ちか}くに {住|す}んで いる {人|ひと}", romaji: "eki no chikaku ni sunde iru hito", pt: "a pessoa que mora perto da estação", en: "the person who lives near the station" },
          { q: "{昨日|きのう} {読|よ}みました。＋ {本|ほん} ➔", a: "{昨日|きのう} {読|よ}んだ {本|ほん}", romaji: "kinou yonda hon", pt: "o livro que li ontem", en: "the book I read yesterday" }
        ]
      },
      {
        desc: "3. {誰|だれ}の？ どんな？ (Responda com um bloco)", desc_en: "3. {誰|だれ}の？ どんな？ (Answer with a block)",
        questions: [
          { q: "これは {誰|だれ}が {作|つく}った ケーキですか。（{田中|たなか}さん）➔", a: "{田中|たなか}さんが {作|つく}った ケーキです。", romaji: "Tanaka-san ga tsukutta keeki desu.", pt: "É o bolo que o Tanaka fez.", en: "It is the cake Tanaka made." },
          { q: "{田中|たなか}さん^は どんな {人|ひと}ですか。（{眼鏡|めがね}・かけます）➔", a: "{眼鏡|めがね}を かけて いる {人|ひと}です。", romaji: "Megane o kakete iru hito desu.", pt: "É a pessoa que está de óculos.", en: "He is the person wearing glasses." }
        ]
      }
    ]
  },
  renshuuB: {
    title: "{練習|れんしゅう} B", title_en: "{練習|れんしゅう} B",
    exercises: [
      {
        desc: "1. {文|ぶん}を {一|ひと}つの {名詞|めいし}に しなさい。(Transforme a frase em um bloco com substantivo)", desc_en: "1. {文|ぶん}を {一|ひと}つの {名詞|めいし}に しなさい。(Turn the sentence into one noun block)",
        questions: [
          { q: "{昨日|きのう}、{友達|ともだち}に {会|あ}いました。＋ {日|ひ}（{昨日|きのう}は {入|い}れない）➔", a: "{友達|ともだち}に {会|あ}った {日|ひ}", romaji: "tomodachi ni atta hi", pt: "o dia em que encontrei um amigo", en: "the day I met a friend" },
          { q: "{雪|ゆき}が {降|ふ}りました。＋ {日|ひ}（passado）➔", a: "{雪|ゆき}が {降|ふ}った {日|ひ}", romaji: "yuki ga futta hi", pt: "o dia em que nevou", en: "the day it snowed" },
          { q: "{田中|たなか}さん^は {親切|しんせつ}です。＋ {人|ひと} ➔", a: "{親切|しんせつ}な {人|ひと}", romaji: "shinsetsu na hito", pt: "uma pessoa gentil", en: "a kind person" }
        ]
      },
      {
        desc: "2. (　　) に {入|い}れなさい。(Complete a descrição)", desc_en: "2. (　　) に {入|い}れなさい。(Complete the description)",
        questions: [
          { q: "＿＿ {人|ひと}は {田中|たなか}さんです。（{眼鏡|めがね}を かけます）➔", a: "{眼鏡|めがね}を かけて いる", romaji: "megane o kakete iru", pt: "a pessoa que está de óculos", en: "the person wearing glasses" },
          { q: "＿＿ {人|ひと}が {好|す}きです。（{背|せ}が {高|たか}いです）➔", a: "{背|せ}が {高|たか}い", romaji: "se ga takai", pt: "pessoa alta", en: "a tall person" },
          { q: "＿＿ ケーキ^は おいしいです。（{父|ちち}が {作|つく}りました）➔", a: "{父|ちち}が {作|つく}った", romaji: "chichi ga tsukutta", pt: "o bolo que meu pai fez", en: "the cake my father made" }
        ]
      },
      {
        desc: "3. は・が・を (Escolha a partícula do bloco)", desc_en: "3. は・が・を (Choose the particle for the block)",
        questions: [
          { q: "{田中|たなか}さんが {作|つく}った ケーキ （　　） おいしいです。", a: "^は", romaji: "wa", pt: "O bloco é o tema da frase", en: "The block is the topic of the sentence" },
          { q: "{駅|えき}の {近|ちか}くに {住|す}んで いる {人|ひと} （　　） います。", a: "が", romaji: "ga", pt: "O bloco é o sujeito de います", en: "The block is the subject of います" },
          { q: "{昨日|きのう} {読|よ}んだ {本|ほん} （　　） {返|かえ}しました。", a: "を", romaji: "o", pt: "O bloco é o objeto de devolver", en: "The block is the object of returning" }
        ]
      }
    ]
  },
  renshuuC: {
    title: "{練習|れんしゅう} C (Diálogos)", title_en: "{練習|れんしゅう} C (Dialogues)",
    exercises: [
      {
        desc: "1. {人|ひと}を {探|さが}す (Procurando uma pessoa)", desc_en: "1. {人|ひと}を {探|さが}す (Looking for a person)",
        questions: [
          { q: "A: すみません。ミラーさん^は どの {人|ひと}ですか。<br>B: <strong>[{眼鏡|めがね}を かけます]</strong> {人|ひと}です。", a: "{眼鏡|めがね}を かけて いる", romaji: "megane o kakete iru", pt: "a pessoa que está de óculos", en: "the person wearing glasses" },
          { q: "A: {帽子|ぼうし}を <strong>[かぶります]</strong> {人|ひと}ですか。<br>B: いいえ、{髪|かみ}が {長|なが}い {人|ひと}です。", a: "かぶって いる", romaji: "kabutte iru", pt: "a pessoa que está de chapéu", en: "the person wearing a hat" }
        ]
      },
      {
        desc: "2. ものを {説明|せつめい}する (Descrevendo um objeto)", desc_en: "2. ものを {説明|せつめい}する (Describing an object)",
        questions: [
          { q: "A: この {本|ほん}^は {誰|だれ}の ですか。<br>B: <strong>[{田中|たなか}さんが {書|か}きます]</strong> {本|ほん}です。", a: "{田中|たなか}さんが {書|か}いた", romaji: "tanaka-san ga kaita", pt: "o livro que o Tanaka escreveu", en: "the book Tanaka wrote" },
          { q: "A: {店|みせ}^は どこですか。<br>B: <strong>[{駅|えき}の {前|まえ}に あります]</strong> {建物|たてもの}です。", a: "{駅|えき}の {前|まえ}に ある", romaji: "eki no mae ni aru", pt: "o prédio que fica na frente da estação", en: "the building in front of the station" }
        ]
      }
    ]
  },
  mondai: {
    title: "{問題|もんだい} (Problemas / Avaliação)", title_en: "{問題|もんだい} (Problems / Assessment)",
    exercises: [
      {
        desc: "1. {正|ただ}しい {形|かたち}を {選|えら}びなさい。(Escolha a forma certa)", desc_en: "1. {正|ただ}しい {形|かたち}を {選|えら}びなさい。(Choose the right form)",
        questions: [
          { q: "{昨日|きのう} （{買|か}います ➔ ＿＿＿） {本|ほん}^は おもしろいです。", a: "{買|か}った", romaji: "katta", pt: "Forma た antes do substantivo", en: "た form before the noun" },
          { q: "{日本語|にほんご}が （{上手|じょうず}です ➔ ＿＿＿） {人|ひと}に {会|あ}いました。", a: "{上手|じょうず}な", romaji: "jouzu na", pt: "Adjetivo な mantém o な", en: "な-adjective keeps its な" },
          { q: "{駅|えき}の {近|ちか}くに （{住|す}みます ➔ ＿＿＿） {人|ひと}が います。", a: "{住|す}んで いる", romaji: "sunde iru", pt: "Estado: morar exige ている", en: "State: living requires ている" },
          { q: "{背|せ} （　　） {高|たか}い {人|ひと}が {好|す}きです。", a: "が", romaji: "ga", pt: "Sujeito dentro da cláusula", en: "Subject inside the clause" }
        ]
      },
      {
        desc: "2. {文|ぶん}を {一|ひと}つの {文|ぶん}に まとめなさい。(Junte as duas frases em uma)", desc_en: "2. {文|ぶん}を {一|ひと}つの {文|ぶん}に まとめなさい。(Join the two sentences into one)",
        questions: [
          { q: "{父|ちち}が ケーキを {作|つく}りました。その ケーキ^は おいしいです。➔", a: "{父|ちち}が {作|つく}った ケーキ^は おいしいです。", romaji: "Chichi ga tsukutta keeki wa oishii desu.", pt: "O bolo que meu pai fez é gostoso.", en: "The cake my father made is tasty." },
          { q: "{昨日|きのう} {本|ほん}を {読|よ}みました。その {本|ほん}を {返|かえ}しました。➔", a: "{昨日|きのう} {読|よ}んだ {本|ほん}を {返|かえ}しました。", romaji: "Kinou yonda hon o kaeshimashita.", pt: "Devolvi o livro que li ontem.", en: "I returned the book I read yesterday." }
        ]
      },
      {
        desc: "3. {読|よ}み{物|もの} (Leitura): ミラーさん", desc_en: "3. {読|よ}み{物|もの} (Reading): Miller-san",
        questions: [
          {
            q: `<div class="reading-box">
                                            {駅|えき}の {前|まえ}に {眼鏡|めがね}を かけて いる {人|ひと}が います。ミラーさんです。{毎朝|まいあさ} 7{時|じ}に {起|お}きて、{駅|えき}まで {歩|ある}いて {行|い}きます。{日本|にほん}の {小説|しょうせつ}が {好|す}きです。{背|せ}が {高|たか}いです。{髪|かみ}も {短|みじか}いです。
                                        </div>
                                        {質問|しつもん}: ミラーさん^は どうやって {駅|えき}まで {行|い}きますか。`,
            a: "{歩|ある}いて {行|い}きます。",
            romaji: "Aruite ikimasu.",
            pt: "Ele vai a pé.", en: "He goes on foot."
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
          { tokens: ["{昨日|きのう}", "{買|か}った", "{本|ほん}^は", "とても", "おもしろかったです。"], pt: "O livro que comprei ontem era muito interessante.", en: "The book I bought yesterday was very interesting.", romaji: "Kinou katta hon wa totemo omoshirokatta desu." },
          { tokens: ["{父|ちち}が", "{作|つく}った", "ケーキ^は", "おいしいです。"], pt: "O bolo que meu pai fez é gostoso.", en: "The cake my father made is tasty.", romaji: "Chichi ga tsukutta keeki wa oishii desu." },
          { tokens: ["{駅|えき}の", "{近|ちか}くに", "{住|す}んで いる", "{人|ひと}が", "{多|おお}いです。"], pt: "Muitas pessoas moram perto da estação.", en: "Many people live near the station.", romaji: "Eki no chikaku ni sunde iru hito ga ooi desu." },
          { tokens: ["{背|せ}が", "{高|たか}い", "{人|ひと}が", "{好|す}きです。"], pt: "Gosto de pessoas altas.", en: "I like tall people.", romaji: "Se ga takai hito ga suki desu." },
          { tokens: ["{眼鏡|めがね}を", "かけて いる", "{人|ひと}^は", "{田中|たなか}さんです。"], pt: "A pessoa de óculos é o Tanaka.", en: "The person wearing glasses is Tanaka.", romaji: "Megane o kakete iru hito wa Tanaka-san desu." }
        ]
      }
    ]
  }
};
