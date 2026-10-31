// Dados da lição 1. Formato descrito no README.md.
window.lessonData = {
  vocab: {
    title: "{語彙|ごい} (Vocabulário)", title_en: "{語彙|ごい} (Vocabulary)",
    items: [
      { jp: "わたし", romaji: "watashi", pt: "Eu", en: "I, me" },
      { jp: "あなた", romaji: "anata", pt: "Você (pouco usado com conhecidos: prefira o nome + さん)", en: "You (rarely used with people you know: prefer name + さん)" },
      { jp: "あの {人|ひと}", romaji: "ano hito", pt: "Aquela pessoa, ele, ela", en: "That person, he, she" },
      { jp: "{友達|ともだち}", romaji: "tomodachi", pt: "Amigo(a)", en: "Friend" },
      { jp: "{先生|せんせい}", romaji: "sensei", pt: "Professor(a)", en: "Teacher" },
      { jp: "{学生|がくせい}", romaji: "gakusei", pt: "Estudante", en: "Student" },
      { jp: "{会社員|かいしゃいん}", romaji: "kaishain", pt: "Funcionário(a) de empresa", en: "Company employee, office worker" },
      { jp: "{銀行員|ぎんこういん}", romaji: "ginkouin", pt: "Bancário(a)", en: "Bank employee" },
      { jp: "{医者|いしゃ}", romaji: "isha", pt: "Médico(a)", en: "Doctor" },
      { jp: "エンジニア", romaji: "enjinia", pt: "Engenheiro(a)", en: "Engineer" },
      { jp: "{大学|だいがく}", romaji: "daigaku", pt: "Universidade", en: "University" },
      { jp: "{病院|びょういん}", romaji: "byouin", pt: "Hospital", en: "Hospital" },
      { jp: "{名前|なまえ}", romaji: "namae", pt: "Nome", en: "Name" },
      { jp: "だれ", romaji: "dare", pt: "Quem", en: "Who" },
      { jp: "どなた", romaji: "donata", pt: "Quem (educado)", en: "Who (polite)" },
      { jp: "{何歳|なんさい}", romaji: "nansai", pt: "Quantos anos (idade)", en: "How old (age)" },
      { jp: "〜{歳|さい}", romaji: "sai", pt: "〜 anos (idade)", en: "〜 years old" },
      { jp: "〜さん", romaji: "san", pt: "Senhor(a), sufixo de respeito depois do nome de outra pessoa", en: "Mr./Ms., respectful suffix after another person's name" },
      { jp: "〜{人|じん}", romaji: "jin", pt: "Pessoa de (nacionalidade): ブラジル{人|じん}", en: "Person from (nationality): ブラジル{人|じん}" },
      { jp: "ブラジル", romaji: "Burajiru", pt: "Brasil", en: "Brazil" },
      { jp: "アメリカ", romaji: "Amerika", pt: "Estados Unidos", en: "United States" },
      { jp: "{日本|にほん}", romaji: "Nihon", pt: "Japão", en: "Japan" },
      { jp: "はい／いいえ", romaji: "hai / iie", pt: "Sim / Não", en: "Yes / No" },
      { jp: "はじめまして", romaji: "hajimemashite", pt: "Muito prazer (no primeiro encontro)", en: "Nice to meet you (first meeting)" },
      { jp: "どうぞ よろしく", romaji: "douzo yoroshiku", pt: "Prazer em conhecê-lo(a); conto com você", en: "Pleased to meet you; I look forward to working with you" }
    ]
  },
  gramatica: {
    title: "{文法|ぶんぽう} (Gramática)", title_en: "{文法|ぶんぽう} (Grammar)",
    intro: "Cinco pontos para se apresentar e falar de quem é quem. Cada cartão traz o modelo de frase, a explicação, os exemplos, uma comparação com o que é parecido e os erros mais comuns.", intro_en: "Five points to introduce yourself and talk about who is who. Each card gives the sentence pattern, the explanation, the examples, a comparison with what looks similar and the most common mistakes.",
    points: [
      {
        id: "wa-desu",
        title: "N1 は N2 です", title_en: "N1 は N2 です",
        pat: "N1 は N2 です",
        short: "N1 é N2", short_en: "N1 is N2",
        mean: "Apresenta o tema da frase (N1) e diz o que ele é (N2). Em português: “Eu sou estudante”, “Ela é médica”.", mean_en: "Introduces the topic of the sentence (N1) and says what it is (N2). In English: “I am a student”, “She is a doctor”.",
        rule: "は marca o tema: “quanto a N1…”. です fecha a frase de modo educado e não muda com a pessoa nem com o número: serve para “eu sou”, “você é”, “eles são”. Como partícula, は se lê <strong>wa</strong>.", rule_en: "は marks the topic: “as for N1…”. です closes the sentence politely and does not change with person or number: it covers “I am”, “you are”, “they are”. As a particle, は is read <strong>wa</strong>.",
        ex: [
          { jp: "わたし^は マリアです。", romaji: "Watashi wa Maria desu.", pt: "Eu sou a Maria.", en: "I am Maria." },
          { jp: "マリアさん^は {学生|がくせい}です。", romaji: "Maria-san wa gakusei desu.", pt: "A Maria é estudante.", en: "Maria is a student." },
          { jp: "{田中|たなか}さん^は {先生|せんせい}です。", romaji: "Tanaka-san wa sensei desu.", pt: "O Sr. Tanaka é professor.", en: "Mr. Tanaka is a teacher." },
          { jp: "ジョンさん^は アメリカ{人|じん}です。", romaji: "Jon-san wa Amerika-jin desu.", pt: "O John é americano.", en: "John is American." }
        ],
        contrast: {
          rows: [
            { label: "com o tema", label_en: "with the topic", jp: "わたし^は {学生|がくせい}です。", pt: "Eu sou estudante.", en: "I am a student." },
            { label: "tema omitido (o contexto já diz)", label_en: "topic omitted (context makes it clear)", jp: "{学生|がくせい}です。", pt: "(Eu) sou estudante.", en: "(I) am a student." }
          ],
          note: "Em japonês é muito comum omitir o tema quando todos já sabem de quem se fala, até com “eu” e “você”. O português também omite o sujeito, mas o japonês faz isso o tempo todo.", note_en: "In Japanese it is very common to leave out the topic when everyone already knows who is meant, even “I” and “you”. English rarely does this, but Japanese does it all the time."
        },
        trap: [
          "Escreve-se は, mas lê-se “wa” quando é partícula: わたしは = watashi <strong>wa</strong>, não watashi ha.",
          "Não existe artigo (“um”, “o”): {学生|がくせい}です serve para “sou estudante” e “sou o estudante”."
        ],
        trap_en: [
          "It is written は but read “wa” when it is a particle: わたしは = watashi <strong>wa</strong>, not watashi ha.",
          "There are no articles (“a”, “the”): {学生|がくせい}です covers “I am a student” and “I am the student”."
        ]
      },
      {
        id: "ja-arimasen",
        title: "N1 は N2 じゃ ありません (negativa)", title_en: "N1 は N2 じゃ ありません (negative)",
        pat: "N1 は N2 じゃ ありません",
        short: "N1 não é N2", short_en: "N1 is not N2",
        mean: "Nega a frase: N1 não é N2.", mean_en: "Negates the sentence: N1 is not N2.",
        rule: "Troque です por <strong>じゃ ありません</strong>. Em situações formais e por escrito usa-se <strong>では ありません</strong>, com o mesmo sentido.", rule_en: "Replace です with <strong>じゃ ありません</strong>. In formal situations and in writing, <strong>では ありません</strong> is used, with the same meaning.",
        ex: [
          { jp: "わたし^は {先生|せんせい}じゃ ありません。", romaji: "Watashi wa sensei ja arimasen.", pt: "Eu não sou professor(a).", en: "I am not a teacher." },
          { jp: "あの {人|ひと}^は {日本人|にほんじん}じゃ ありません。ブラジル{人|じん}です。", romaji: "Ano hito wa Nihonjin ja arimasen. Burajiru-jin desu.", pt: "Aquela pessoa não é japonesa. É brasileira.", en: "That person is not Japanese. She is Brazilian." },
          { jp: "{田中|たなか}さん^は {学生|がくせい}ですか。<br>…いいえ、{学生|がくせい}じゃ ありません。{会社員|かいしゃいん}です。", romaji: "Tanaka-san wa gakusei desu ka. ...Iie, gakusei ja arimasen. Kaishain desu.", pt: "O Sr. Tanaka é estudante? ...Não, não é estudante. É funcionário de empresa.", en: "Is Mr. Tanaka a student? ...No, he is not a student. He is an office worker." }
        ],
        contrast: {
          rows: [
            { label: "afirmativa", label_en: "affirmative", jp: "わたし^は {医者|いしゃ}です。", pt: "Eu sou médico(a).", en: "I am a doctor." },
            { label: "negativa", label_en: "negative", jp: "わたし^は {医者|いしゃ}じゃ ありません。", pt: "Eu não sou médico(a).", en: "I am not a doctor." }
          ],
          note: "Só o final muda: です ↔ じゃ ありません. 「じゃ」 é mais de conversa; 「では」 é mais formal e de texto escrito.", note_en: "Only the ending changes: です ↔ じゃ ありません. 「じゃ」 is more conversational; 「では」 is more formal and written."
        },
        trap: [
          "Não se acrescenta です depois: errado {先生|せんせい}じゃ ありませんです。 Certo: {先生|せんせい}じゃ ありません。",
          "Em português o “não” vem antes do verbo; em japonês a negação vem no fim da frase."
        ],
        trap_en: [
          "Do not add です afterwards: wrong {先生|せんせい}じゃ ありませんです。 Right: {先生|せんせい}じゃ ありません。",
          "In English “not” comes before the main word; in Japanese the negation comes at the very end of the sentence."
        ]
      },
      {
        id: "ka",
        title: "N1 は N2 ですか (pergunta)", title_en: "N1 は N2 ですか (question)",
        pat: "N1 は N2 ですか。<br>だれ・どなた・{何歳|なんさい} ですか",
        short: "perguntas de sim ou não e com palavra interrogativa", short_en: "yes-or-no questions and questions with a question word",
        mean: "Com <strong>か</strong> no fim, a frase vira pergunta. A ordem das palavras não muda.", mean_en: "With <strong>か</strong> at the end, the sentence becomes a question. The word order does not change.",
        rule: "Pergunta de sim ou não: responda <strong>はい</strong> ou <strong>いいえ</strong> e repita a informação. Com palavra interrogativa (だれ, どなた, {何歳|なんさい}), a resposta ocupa o lugar dessa palavra. どなた é a versão educada de だれ.", rule_en: "Yes-or-no question: answer <strong>はい</strong> or <strong>いいえ</strong> and repeat the information. With a question word (だれ, どなた, {何歳|なんさい}), the answer takes the place of that word. どなた is the polite version of だれ.",
        ex: [
          { jp: "あなた^は {学生|がくせい}ですか。<br>…はい、{学生|がくせい}です。", romaji: "Anata wa gakusei desu ka. ...Hai, gakusei desu.", pt: "Você é estudante? ...Sim, sou estudante.", en: "Are you a student? ...Yes, I am a student." },
          { jp: "あの {人|ひと}^は だれですか。<br>…{田中|たなか}さんです。{先生|せんせい}です。", romaji: "Ano hito wa dare desu ka. ...Tanaka-san desu. Sensei desu.", pt: "Quem é aquela pessoa? ...É o Sr. Tanaka. É professor.", en: "Who is that person? ...It is Mr. Tanaka. He is a teacher." },
          { jp: "{田中|たなか}さん^は {何歳|なんさい}ですか。<br>…{三十五歳|さんじゅうごさい}です。", romaji: "Tanaka-san wa nansai desu ka. ...Sanjuugo-sai desu.", pt: "Quantos anos tem o Sr. Tanaka? ...Tem 35 anos.", en: "How old is Mr. Tanaka? ...He is 35 years old." }
        ],
        contrast: {
          rows: [
            { label: "sim ou não", label_en: "yes or no", jp: "マリアさん^は {医者|いしゃ}ですか。", pt: "A Maria é médica? (a resposta é はい ou いいえ)", en: "Is Maria a doctor? (the answer is はい or いいえ)" },
            { label: "palavra interrogativa", label_en: "question word", jp: "マリアさん^は {何歳|なんさい}ですか。", pt: "Quantos anos tem a Maria? (a resposta é uma idade)", en: "How old is Maria? (the answer is an age)" }
          ],
          note: "Com palavra interrogativa não se responde はい ou いいえ: dá-se direto a informação pedida.", note_en: "With a question word you do not answer はい or いいえ: you give the requested information directly."
        },
        trap: [
          "Não inverta a ordem como em inglês (“Are you…?”): o japonês mantém a ordem e só acrescenta か.",
          "Para perguntar a idade de uma pessoa mais velha ou desconhecida, o mais educado é おいくつですか, em vez de {何歳|なんさい}ですか。"
        ],
        trap_en: [
          "Do not swap the word order as English does (“Are you…?”): Japanese keeps the order and only adds か.",
          "To ask the age of an older person or a stranger, the more polite form is おいくつですか instead of {何歳|なんさい}ですか。"
        ]
      },
      {
        id: "mo",
        title: "N も (também)", title_en: "N も (also, too)",
        pat: "N1 は N2 です。N3 も N2 です。",
        short: "também", short_en: "also, too",
        mean: "も ocupa o lugar de は quando a informação é a mesma que acabou de ser dita: “também”.", mean_en: "も takes the place of は when the information is the same as what was just said: “also”, “too”.",
        rule: "Troque は por も no novo tema. O resto da frase repete a informação anterior.", rule_en: "Replace は with も on the new topic. The rest of the sentence repeats the previous information.",
        ex: [
          { jp: "マリアさん^は {学生|がくせい}です。ジョンさんも {学生|がくせい}です。", romaji: "Maria-san wa gakusei desu. Jon-san mo gakusei desu.", pt: "A Maria é estudante. O John também é.", en: "Maria is a student. John is a student too." },
          { jp: "わたし^は ブラジル{人|じん}です。あなたも ブラジル{人|じん}ですか。", romaji: "Watashi wa Burajiru-jin desu. Anata mo Burajiru-jin desu ka.", pt: "Eu sou brasileiro(a). Você também é brasileiro(a)?", en: "I am Brazilian. Are you Brazilian too?" },
          { jp: "{田中|たなか}さん^は {医者|いしゃ}じゃ ありません。{山田|やまだ}さんも {医者|いしゃ}じゃ ありません。", romaji: "Tanaka-san wa isha ja arimasen. Yamada-san mo isha ja arimasen.", pt: "O Sr. Tanaka não é médico. O Sr. Yamada também não.", en: "Mr. Tanaka is not a doctor. Mr. Yamada is not one either." }
        ],
        contrast: {
          rows: [
            { label: "は (informação nova)", label_en: "は (new information)", jp: "ジョンさん^は {先生|せんせい}です。", pt: "O John é professor (outra informação).", en: "John is a teacher (a different piece of information)." },
            { label: "も (mesma informação)", label_en: "も (same information)", jp: "ジョンさんも {学生|がくせい}です。", pt: "O John também é estudante.", en: "John is a student too." }
          ],
          note: "は e も não aparecem juntos no mesmo substantivo. Escolha de acordo com a informação ser ou não igual à anterior.", note_en: "は and も do not appear together on the same noun. Choose according to whether the information is the same as the previous one."
        },
        trap: [
          "Com a negativa, も já quer dizer “também não”: não precisa de outra palavra negativa.",
          "Não escreva はも: errado ジョンさんはも. Basta も."
        ],
        trap_en: [
          "With a negative, も already means “not … either”: no extra negative word is needed.",
          "Do not write はも: wrong ジョンさんはも. Just use も."
        ]
      },
      {
        id: "no-san-jin",
        title: "N1 の N2 (afiliação) ・ 〜さん ・ 〜{人|じん}", title_en: "N1 の N2 (affiliation) ・ 〜さん ・ 〜{人|じん}",
        pat: "N1 の N2",
        short: "N2 de N1 (a que grupo pertence)", short_en: "N2 of N1 (the group someone belongs to)",
        mean: "の liga dois substantivos: N1 descreve N2. Aqui N1 é o grupo a que a pessoa pertence (universidade, empresa, hospital).", mean_en: "の links two nouns: N1 describes N2. Here N1 is the group the person belongs to (university, company, hospital).",
        rule: "A ordem é a inversa do português: grupo ＋ の ＋ pessoa. <strong>さん</strong> vem depois do nome de outra pessoa (nunca do seu). <strong>〜{人|じん}</strong> indica nacionalidade.", rule_en: "The order is the reverse of English: group ＋ の ＋ person. <strong>さん</strong> goes after another person's name (never your own). <strong>〜{人|じん}</strong> shows nationality.",
        ex: [
          { jp: "マリアさん^は さくら{大学|だいがく}の {学生|がくせい}です。", romaji: "Maria-san wa Sakura daigaku no gakusei desu.", pt: "A Maria é estudante da Universidade Sakura.", en: "Maria is a student at Sakura University." },
          { jp: "{田中|たなか}さん^は ひかり{病院|びょういん}の {医者|いしゃ}です。", romaji: "Tanaka-san wa Hikari byouin no isha desu.", pt: "O Sr. Tanaka é médico do Hospital Hikari.", en: "Mr. Tanaka is a doctor at Hikari Hospital." },
          { jp: "はじめまして。ミゲルです。ブラジル{人|じん}です。どうぞ よろしく。", romaji: "Hajimemashite. Miguel desu. Burajiru-jin desu. Douzo yoroshiku.", pt: "Muito prazer. Eu sou o Miguel. Sou brasileiro. Conto com você.", en: "Nice to meet you. I am Miguel. I am Brazilian. Pleased to meet you." }
        ],
        contrast: {
          rows: [
            { label: "com の (informação extra)", label_en: "with の (extra information)", jp: "わたし^は さくら{大学|だいがく}の {学生|がくせい}です。", pt: "Sou estudante da Universidade Sakura.", en: "I am a student at Sakura University." },
            { label: "sem の", label_en: "without の", jp: "わたし^は {学生|がくせい}です。", pt: "Sou estudante.", en: "I am a student." }
          ],
          note: "O の só acrescenta informação: sem ele a frase continua correta, apenas mais curta.", note_en: "の only adds information: without it the sentence is still correct, just shorter."
        },
        trap: [
          "A ordem é o contrário do português: “estudante da universidade” é {大学|だいがく}の {学生|がくせい} (universidade primeiro).",
          "Nunca use さん com o seu próprio nome: マリアです, e não マリアさんです (quando você é a Maria)."
        ],
        trap_en: [
          "The order is the opposite of English: “student of the university” is {大学|だいがく}の {学生|がくせい} (university first).",
          "Never use さん with your own name: マリアです, not マリアさんです (when you are Maria)."
        ]
      }
    ]
  },
  renshuuA: {
    title: "{練習|れんしゅう} A", title_en: "{練習|れんしゅう} A",
    exercises: [
      {
        desc: "1. です ➔ じゃ ありません (negativa)", desc_en: "1. です ➔ じゃ ありません (negative)",
        questions: [
          { q: "{先生|せんせい}です ➔", a: "{先生|せんせい}じゃ ありません", romaji: "sensei ja arimasen", pt: "Não é professor(a)", en: "Is not a teacher" },
          { q: "{医者|いしゃ}です ➔", a: "{医者|いしゃ}じゃ ありません", romaji: "isha ja arimasen", pt: "Não é médico(a)", en: "Is not a doctor" },
          { q: "{会社員|かいしゃいん}です ➔", a: "{会社員|かいしゃいん}じゃ ありません", romaji: "kaishain ja arimasen", pt: "Não é funcionário(a) de empresa", en: "Is not an office worker" },
          { q: "ブラジル{人|じん}です ➔", a: "ブラジル{人|じん}じゃ ありません", romaji: "Burajiru-jin ja arimasen", pt: "Não é brasileiro(a)", en: "Is not Brazilian" },
          { q: "{銀行員|ぎんこういん}です ➔", a: "{銀行員|ぎんこういん}じゃ ありません", romaji: "ginkouin ja arimasen", pt: "Não é bancário(a)", en: "Is not a bank employee" },
          { q: "エンジニアです ➔", a: "エンジニアじゃ ありません", romaji: "enjinia ja arimasen", pt: "Não é engenheiro(a)", en: "Is not an engineer" }
        ]
      },
      {
        desc: "2. Acrescente か para perguntar", desc_en: "2. Add か to ask a question",
        questions: [
          { q: "あなたは {学生|がくせい}です。 ➔", a: "あなたは{学生|がくせい}ですか。", romaji: "Anata wa gakusei desu ka.", pt: "Você é estudante?", en: "Are you a student?" },
          { q: "あの {人|ひと}は {先生|せんせい}です。 ➔", a: "あの{人|ひと}は{先生|せんせい}ですか。", romaji: "Ano hito wa sensei desu ka.", pt: "Aquela pessoa é professora?", en: "Is that person a teacher?" },
          { q: "{田中|たなか}さんは {医者|いしゃ}です。 ➔", a: "{田中|たなか}さんは{医者|いしゃ}ですか。", romaji: "Tanaka-san wa isha desu ka.", pt: "O Sr. Tanaka é médico?", en: "Is Mr. Tanaka a doctor?" },
          { q: "マリアさんは ブラジル{人|じん}です。 ➔", a: "マリアさんはブラジル{人|じん}ですか。", romaji: "Maria-san wa Burajiru-jin desu ka.", pt: "A Maria é brasileira?", en: "Is Maria Brazilian?" }
        ]
      }
    ]
  },
  renshuuB: {
    title: "{練習|れんしゅう} B", title_en: "{練習|れんしゅう} B",
    exercises: [
      {
        desc: "1. Complete com は, も ou の", desc_en: "1. Fill in with は, も or の",
        questions: [
          { q: "わたし（　　）マリアです。", a: "は", romaji: "wa", pt: "Partícula do tema", en: "Topic particle" },
          { q: "マリアさんは {学生|がくせい}です。ジョンさん（　　）{学生|がくせい}です。", a: "も", romaji: "mo", pt: "O John também é estudante", en: "John is a student too" },
          { q: "{田中|たなか}さんは {医者|いしゃ}じゃ ありません。{山田|やまだ}さん（　　）{医者|いしゃ}じゃ ありません。", a: "も", romaji: "mo", pt: "O Sr. Yamada também não é médico", en: "Mr. Yamada is not a doctor either" },
          { q: "ミゲルさんは さくら{大学|だいがく}（　　）{学生|がくせい}です。", a: "の", romaji: "no", pt: "Afiliação: estudante da universidade", en: "Affiliation: student of the university" },
          { q: "あの {人|ひと}（　　）だれですか。", a: "は", romaji: "wa", pt: "Partícula do tema", en: "Topic particle" }
        ]
      },
      {
        desc: "2. Responda com a negativa e a informação certa", desc_en: "2. Answer with the negative and the right information",
        questions: [
          { q: "A: {田中|たなか}さんは {学生|がくせい}ですか。<br>B: いいえ、<strong>[{学生|がくせい}]</strong>＿＿＿＿＿＿＿＿。{会社員|かいしゃいん}です。", a: "じゃ ありません", romaji: "ja arimasen", pt: "Não é estudante", en: "Is not a student" },
          { q: "A: マリアさんは {先生|せんせい}ですか。<br>B: いいえ、<strong>[{先生|せんせい}]</strong>＿＿＿＿＿＿＿＿。{医者|いしゃ}です。", a: "じゃ ありません", romaji: "ja arimasen", pt: "Não é professora", en: "Is not a teacher" },
          { q: "A: ジョンさんは ブラジル{人|じん}ですか。<br>B: いいえ、<strong>[ブラジル{人|じん}]</strong>＿＿＿＿＿＿＿＿。アメリカ{人|じん}です。", a: "じゃ ありません", romaji: "ja arimasen", pt: "Não é brasileiro", en: "Is not Brazilian" }
        ]
      }
    ]
  },
  mondai: {
    title: "{問題|もんだい} (Problemas / Avaliação)", title_en: "{問題|もんだい} (Problems / Assessment)",
    exercises: [
      {
        desc: "1. (　　) に {正|ただ}しい ことばを {入|い}れなさい。 (は・も・の・か)", desc_en: "1. Fill in the blank with the right word. (は・も・の・か)",
        questions: [
          { q: "わたし（　　）ブラジル{人|じん}です。", a: "は", romaji: "wa", pt: "Eu sou brasileiro(a)", en: "I am Brazilian" },
          { q: "あなたは {学生|がくせい}です（　　）。", a: "か", romaji: "ka", pt: "Pergunta: Você é estudante?", en: "Question: Are you a student?" },
          { q: "ひかり{病院|びょういん}（　　）{医者|いしゃ}です。", a: "の", romaji: "no", pt: "Médico do Hospital Hikari", en: "A doctor at Hikari Hospital" },
          { q: "ミゲルさんは {会社員|かいしゃいん}です。マリアさん（　　）{会社員|かいしゃいん}です。", a: "も", romaji: "mo", pt: "A Maria também", en: "Maria too" }
        ]
      },
      {
        desc: "2. {読|よ}み{物|もの} (Leitura): じこしょうかい", desc_en: "2. Reading: self-introduction",
        questions: [
          {
            q: `<div class="reading-box">わたしは マリアです。ブラジル{人|じん}です。さくら{大学|だいがく}の {学生|がくせい}です。{友達|ともだち}の ジョンさんも さくら{大学|だいがく}の {学生|がくせい}です。ジョンさんは アメリカ{人|じん}です。</div>{質問|しつもん}: ジョンさんは ブラジル{人|じん}ですか。<br>➔ いいえ、＿＿＿＿＿＿＿＿。`,
            a: "アメリカ{人|じん}です",
            romaji: "Amerika-jin desu",
            pt: "Não, é americano.", en: "No, he is American."
          },
          {
            q: `<div class="reading-box">わたしは マリアです。ブラジル{人|じん}です。さくら{大学|だいがく}の {学生|がくせい}です。{友達|ともだち}の ジョンさんも さくら{大学|だいがく}の {学生|がくせい}です。ジョンさんは アメリカ{人|じん}です。</div>{質問|しつもん}: マリアさんは どこの {学生|がくせい}ですか。<br>➔ ＿＿＿＿＿＿＿＿の {学生|がくせい}です。`,
            a: "さくら{大学|だいがく}",
            romaji: "Sakura daigaku",
            pt: "Da Universidade Sakura.", en: "Of Sakura University."
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
          { tokens: ["わたしは", "マリアです。"], pt: "Eu sou a Maria.", en: "I am Maria.", romaji: "Watashi wa Maria desu." },
          { tokens: ["マリアさんは", "ブラジル{人|じん}じゃ", "ありません。"], pt: "A Maria não é brasileira.", en: "Maria is not Brazilian.", romaji: "Maria-san wa Burajiru-jin ja arimasen." },
          { tokens: ["あの{人|ひと}は", "だれですか。"], pt: "Quem é aquela pessoa?", en: "Who is that person?", romaji: "Ano hito wa dare desu ka." },
          { tokens: ["ジョンさんも", "さくら{大学|だいがく}の", "{学生|がくせい}です。"], pt: "O John também é estudante da Universidade Sakura.", en: "John is also a student at Sakura University.", romaji: "Jon-san mo Sakura daigaku no gakusei desu." }
        ]
      }
    ]
  }
};
