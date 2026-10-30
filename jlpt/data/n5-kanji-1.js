/*
 * Kanji do JLPT N5 - parte 1: números e tempo.
 *
 * Formato de cada kanji:
 *   k     o kanji
 *   pt    significado em português
 *   on    leituras on'yomi (katakana)
 *   kun   leituras kun'yomi (hiragana; okurigana entre parênteses)
 *   cat   categoria (veja CATEGORIES em assets/js/kanji-page.js)
 *   ex    exemplos: [leitura usada, frase, tradução]
 *   note  dica opcional
 *
 * Notação das frases (o furigana e o romaji são gerados automaticamente):
 *   {漢字|かんじ}  kanji com furigana
 *   ^は  ^へ       partícula lida "wa" / "e" (no romaji)
 *   espaço         separa palavras no romaji (não aparece no japonês)
 */
window.JLPT_N5_KANJI = (window.JLPT_N5_KANJI || []).concat([

    /* ---------- Números ---------- */
    {
        k: "一", pt: "um", en: "one", on: ["イチ", "イツ"], kun: ["ひと(つ)"], cat: "numeros",
        ex: [
            ["イチ", "{一時|いちじ}に {会|あ}いましょう。", "Vamos nos encontrar à uma hora.", { en: "Let's meet at one o'clock." }],
            ["ひと(つ)", "りんごを {一|ひと}つ ください。", "Me dá uma maçã, por favor.", { en: "Give me one apple, please." }],
            ["ひとり (especial)", "{一人|ひとり}で {行|い}きます。", "Vou sozinho(a).", { en: "I'm going alone." }],
            ["イツ", "{唯一|ゆいいつ}の {友|とも}だちです。", "É meu único amigo.", { en: "He/she is my only friend." }]
        ],
        note: "Contadores: 一つ (ひとつ) = uma coisa; 一人 (ひとり) = uma pessoa.", note_en: "Counters: 一つ (ひとつ) = one thing; 一人 (ひとり) = one person."
    },
    {
        k: "二", pt: "dois", en: "two", on: ["ニ"], kun: ["ふた(つ)"], cat: "numeros",
        ex: [
            ["ニ", "{二月|にがつ}に {日本|にほん}^へ {行|い}きます。", "Em fevereiro vou ao Japão.", { en: "In February I'm going to Japan." }],
            ["ふた(つ)", "コーヒーを {二|ふた}つ ください。", "Dois cafés, por favor.", { en: "Two coffees, please." }],
            ["ふたり (especial)", "{二人|ふたり}で {食|た}べます。", "Comemos nós dois juntos.", { en: "The two of us eat together." }]
        ]
    },
    {
        k: "三", pt: "três", en: "three", on: ["サン"], kun: ["み(っつ)"], cat: "numeros",
        ex: [
            ["サン", "{三人|さんにん}の {友|とも}だちが {来|き}ます。", "Três amigos vêm.", { en: "Three friends are coming." }],
            ["み(っつ)", "みかんを {三|みっ}つ {買|か}いました。", "Comprei três tangerinas.", { en: "I bought three tangerines." }]
        ]
    },
    {
        k: "四", pt: "quatro", en: "four", on: ["シ"], kun: ["よ(っつ)", "よん"], cat: "numeros",
        ex: [
            ["シ", "{四月|しがつ}^は {春|はる}です。", "Abril é primavera.", { en: "April is spring." }],
            ["よ", "{四時|よじ}に {起|お}きます。", "Acordo às quatro.", { en: "I wake up at four." }],
            ["よっ(つ)", "{四|よっ}つ あります。", "Há quatro.", { en: "There are four." }]
        ],
        note: "Atenção: 四時 = よじ (4 horas), 四人 = よにん (4 pessoas), 四月 = しがつ (abril).", note_en: "Careful: 四時 = よじ (4 o'clock), 四人 = よにん (4 people), 四月 = しがつ (April)."
    },
    {
        k: "五", pt: "cinco", en: "five", on: ["ゴ"], kun: ["いつ(つ)"], cat: "numeros",
        ex: [
            ["ゴ", "{五月|ごがつ}^は {暑|あつ}いです。", "Maio é quente.", { en: "May is warm." }],
            ["いつ(つ)", "みかんを {五|いつ}つ {食|た}べました。", "Comi cinco tangerinas.", { en: "I ate five tangerines." }],
            ["いつ (especial)", "{五日|いつか}に {会|あ}いましょう。", "Vamos nos encontrar no dia 5.", { en: "Let's meet on the 5th." }]
        ]
    },
    {
        k: "六", pt: "seis", en: "six", on: ["ロク"], kun: ["む(っつ)"], cat: "numeros",
        ex: [
            ["ロク", "{六時|ろくじ}に {起|お}きます。", "Acordo às seis.", { en: "I wake up at six." }],
            ["ロッ", "{六分|ろっぷん} {待|ま}ちました。", "Esperei seis minutos.", { en: "I waited six minutes." }],
            ["む(っつ)", "りんごが {六|むっ}つ あります。", "Há seis maçãs.", { en: "There are six apples." }]
        ]
    },
    {
        k: "七", pt: "sete", en: "seven", on: ["シチ"], kun: ["なな(つ)", "なな"], cat: "numeros",
        ex: [
            ["シチ", "{七時|しちじ}に {食|た}べます。", "Como às sete.", { en: "I eat at seven." }],
            ["なな", "{七人|ななにん}で {行|い}きます。", "Vamos em sete pessoas.", { en: "There will be seven of us." }],
            ["なな(つ)", "{七|なな}つ あります。", "Há sete.", { en: "There are seven." }]
        ],
        note: "Também se lê しち ou なな: 七時 = しちじ, 七人 = ななにん (ou しちにん).", note_en: "It can also be read しち or なな: 七時 = しちじ, 七人 = ななにん (or しちにん)."
    },
    {
        k: "八", pt: "oito", en: "eight", on: ["ハチ"], kun: ["や(っつ)"], cat: "numeros",
        ex: [
            ["ハチ", "{八時|はちじ}に {会社|かいしゃ}^へ {行|い}きます。", "Vou à empresa às oito.", { en: "I go to the company at eight." }],
            ["や(っつ)", "{八|やっ}つ ください。", "Quero oito, por favor.", { en: "I'd like eight, please." }]
        ]
    },
    {
        k: "九", pt: "nove", en: "nine", on: ["キュウ", "ク"], kun: ["ここの(つ)"], cat: "numeros",
        ex: [
            ["キュウ", "{九百円|きゅうひゃくえん}です。", "São 900 ienes.", { en: "It's 900 yen." }],
            ["ク", "{九時|くじ}に {寝|ね}ます。", "Durmo às nove.", { en: "I sleep at nine." }],
            ["ここの(つ)", "{九|ここの}つ あります。", "Há nove.", { en: "There are nine." }]
        ],
        note: "九時 = くじ (9 horas) e 九月 = くがつ (setembro) usam ク.", note_en: "九時 = くじ (9 o'clock) and 九月 = くがつ (September) use ク."
    },
    {
        k: "十", pt: "dez", en: "ten", on: ["ジュウ", "ジッ"], kun: ["とお"], cat: "numeros",
        ex: [
            ["ジュウ", "{十人|じゅうにん}が {来|き}ました。", "Dez pessoas vieram.", { en: "Ten people came." }],
            ["ジッ・ジュッ", "{十分|じゅっぷん}かかります。", "Leva dez minutos.", { en: "It takes ten minutes." }],
            ["とお", "りんごが {十|とお} あります。", "Há dez maçãs.", { en: "There are ten apples." }]
        ]
    },
    {
        k: "百", pt: "cem", en: "hundred", on: ["ヒャク"], kun: [], cat: "numeros",
        ex: [
            ["ヒャク", "{百円|ひゃくえん}です。", "São 100 ienes.", { en: "It's 100 yen." }],
            ["ビャク", "{三百円|さんびゃくえん}です。", "São 300 ienes.", { en: "It's 300 yen." }],
            ["ピャク", "{六百円|ろっぴゃくえん}です。", "São 600 ienes.", { en: "It's 600 yen." }]
        ],
        note: "A leitura muda: さんびゃく (300), ろっぴゃく (600), はっぴゃく (800).", note_en: "The reading changes: さんびゃく (300), ろっぴゃく (600), はっぴゃく (800)."
    },
    {
        k: "千", pt: "mil", en: "thousand", on: ["セン"], kun: ["ち"], cat: "numeros",
        ex: [
            ["セン", "{千円|せんえん}です。", "São 1.000 ienes.", { en: "It's 1,000 yen." }],
            ["ゼン", "{三千円|さんぜんえん}です。", "São 3.000 ienes.", { en: "It's 3,000 yen." }],
            ["ち", "{千鳥|ちどり}が {飛|と}んでいます。", "Tarambolas (aves) estão voando.", { en: "Plovers (birds) are flying." }]
        ],
        note: "Com 三 (3) vira ぜん: さんぜん. Kun ち só aparece em palavras como 千代 (ちよ).", note_en: "With 三 (3) it becomes ぜん: さんぜん. The kun reading ち only appears in words like 千代 (ちよ)."
    },
    {
        k: "万", pt: "dez mil", en: "ten thousand", on: ["マン", "バン"], kun: [], cat: "numeros",
        ex: [
            ["マン", "{一万円|いちまんえん}です。", "São 10.000 ienes.", { en: "It's 10,000 yen." }],
            ["マン", "{三万人|さんまんにん}が {来|き}ました。", "Vieram 30 mil pessoas.", { en: "30 thousand people came." }],
            ["バン", "{万歳|ばんざい}！ {勝|か}ちました。", "Viva! Vencemos.", { en: "Hooray! We won." }]
        ],
        note: "O japonês conta de 10.000 em 10.000: 一万 = 10 mil, 十万 = 100 mil, 百万 = 1 milhão.", note_en: "Japanese counts in units of 10,000: 一万 = 10 thousand, 十万 = 100 thousand, 百万 = 1 million."
    },

    /* ---------- Tempo ---------- */
    {
        k: "日", pt: "dia; sol; Japão", en: "day; sun; Japan", on: ["ニチ", "ジツ"], kun: ["ひ", "か"], cat: "tempo",
        ex: [
            ["ニチ", "{日曜日|にちようび}^は {家|いえ}に います。", "No domingo fico em casa.", { en: "On Sunday I stay home." }],
            ["ジツ", "{休日|きゅうじつ}^は {何|なに}を しますか。", "O que você faz nos dias de folga?", { en: "What do you do on your days off?" }],
            ["ひ", "{日|ひ}が {長|なが}く なりました。", "Os dias ficaram mais longos.", { en: "The days have gotten longer." }],
            ["か (contagem de dias)", "{三日|みっか} {休|やす}みます。", "Descanso por três dias.", { en: "I'll rest for three days." }]
        ],
        note: "Os dias do mês têm leituras especiais: ついたち (1), ふつか (2), みっか (3), ... はつか (20).", note_en: "The days of the month have special readings: ついたち (1st), ふつか (2nd), みっか (3rd), ... はつか (20th)."
    },
    {
        k: "月", pt: "mês; lua", en: "month; moon", on: ["ゲツ", "ガツ"], kun: ["つき"], cat: "tempo",
        ex: [
            ["ガツ", "{一月|いちがつ}^は {寒|さむ}いです。", "Janeiro é frio.", { en: "January is cold." }],
            ["ゲツ", "{月曜日|げつようび}に {学校|がっこう}^へ {行|い}きます。", "Na segunda-feira vou à escola.", { en: "On Monday I go to school." }],
            ["つき", "{月|つき}が {出|で}ました。", "A lua saiu.", { en: "The moon has come out." }]
        ],
        note: "Os meses usam ガツ (一月 = janeiro); os dias da semana usam ゲツ (月曜日 = segunda).", note_en: "Months use ガツ (一月 = January); days of the week use ゲツ (月曜日 = Monday)."
    },
    {
        k: "年", pt: "ano", en: "year", on: ["ネン"], kun: ["とし"], cat: "tempo",
        ex: [
            ["ネン", "{来年|らいねん} {日本|にほん}^へ {行|い}きます。", "Ano que vem vou ao Japão.", { en: "Next year I'm going to Japan." }],
            ["ネン", "{去年|きょねん}^は {忙|いそが}しかったです。", "Ano passado foi corrido.", { en: "Last year was busy." }],
            ["とし", "お{年|とし}^は {何歳|なんさい}ですか。", "Quantos anos o(a) senhor(a) tem?", { en: "How old are you?" }],
            ["ことし (especial)", "{今年|ことし}^は {暑|あつ}いです。", "Este ano está quente.", { en: "This year is hot." }]
        ]
    },
    {
        k: "時", pt: "hora; tempo; momento", en: "hour; time; moment", on: ["ジ"], kun: ["とき"], cat: "tempo",
        ex: [
            ["ジ", "{今|いま}、{三時|さんじ}です。", "Agora são três horas.", { en: "It is three o'clock now." }],
            ["ジ", "{時間|じかん}が ありません。", "Não tenho tempo.", { en: "I don't have time." }],
            ["とき", "{暇|ひま}な {時|とき}、{本|ほん}を {読|よ}みます。", "Quando tenho tempo livre, leio livros.", { en: "When I have free time, I read books." }],
            ["とき(どき)", "{時々|ときどき} {映画|えいが}を {見|み}ます。", "De vez em quando assisto a filmes.", { en: "Now and then I watch movies." }]
        ]
    },
    {
        k: "分", pt: "minuto; parte; entender", en: "minute; part; to understand", on: ["ブン", "フン", "ブ"], kun: ["わ(ける)", "わ(かる)"], cat: "tempo",
        ex: [
            ["フン", "{五分|ごふん} {待|ま}ってください。", "Espere cinco minutos, por favor.", { en: "Please wait five minutes." }],
            ["プン", "{三分|さんぷん}で {着|つ}きます。", "Chego em três minutos.", { en: "I'll arrive in three minutes." }],
            ["ブン", "{自分|じぶん}で {作|つく}ります。", "Eu mesmo(a) faço.", { en: "I'll do it myself." }],
            ["ブン", "{半分|はんぶん} ください。", "Me dê metade, por favor.", { en: "Give me half, please." }],
            ["わ(かる)", "{意味|いみ}が {分|わ}かります。", "Entendo o significado.", { en: "I understand the meaning." }]
        ],
        note: "Minutos: ふん com 2, 5, 7, 9 (にふん, ごふん...) e ぷん com 1, 3, 4, 6, 8, 10 (いっぷん, さんぷん...).", note_en: "Minutes: ふん with 2, 5, 7, 9 (にふん, ごふん...) and ぷん with 1, 3, 4, 6, 8, 10 (いっぷん, さんぷん...)."
    },
    {
        k: "半", pt: "metade; meio", en: "half; middle", on: ["ハン"], kun: ["なか(ば)"], cat: "tempo",
        ex: [
            ["ハン", "{三時半|さんじはん}に {会|あ}いましょう。", "Vamos nos encontrar às três e meia.", { en: "Let's meet at half past three." }],
            ["ハン", "{半分|はんぶん}に {切|き}ります。", "Corto ao meio.", { en: "I cut it in half." }],
            ["なか(ば)", "{夏|なつ}の {半|なか}ばに {旅行|りょこう}します。", "Viajo em meados do verão.", { en: "I travel in the middle of summer." }]
        ]
    },
    {
        k: "今", pt: "agora; este(a)", en: "now; this", on: ["コン"], kun: ["いま"], cat: "tempo",
        ex: [
            ["いま", "{今|いま}、{何時|なんじ}ですか。", "Que horas são agora?", { en: "What time is it now?" }],
            ["コン", "{今週|こんしゅう}^は {忙|いそが}しいです。", "Esta semana estou ocupado(a).", { en: "This week I'm busy." }],
            ["コン", "{今度|こんど} {一緒|いっしょ}に {行|い}きましょう。", "Da próxima vez vamos juntos.", { en: "Next time let's go together." }],
            ["きょう (especial)", "{今日|きょう}^は {月曜日|げつようび}です。", "Hoje é segunda-feira.", { en: "Today is Monday." }]
        ]
    },
    {
        k: "午", pt: "meio-dia", en: "noon", on: ["ゴ"], kun: [], cat: "tempo",
        ex: [
            ["ゴ", "{午前|ごぜん}{九時|くじ}に {会|あ}います。", "Nos encontramos às nove da manhã.", { en: "We meet at nine in the morning." }],
            ["ゴ", "{午後|ごご}^は {暇|ひま}です。", "À tarde estou livre.", { en: "In the afternoon I'm free." }]
        ],
        note: "Quase sempre aparece em 午前 (manhã, antes do meio-dia) e 午後 (tarde, depois do meio-dia).", note_en: "It almost always appears in 午前 (morning, before noon) and 午後 (afternoon, after noon)."
    },
    {
        k: "間", pt: "intervalo; entre; espaço", en: "interval; between; space", on: ["カン", "ケン"], kun: ["あいだ", "ま"], cat: "tempo",
        ex: [
            ["カン", "{一時間|いちじかん} {待|ま}ちました。", "Esperei uma hora.", { en: "I waited for one hour." }],
            ["カン", "{二週間|にしゅうかん} {休|やす}みます。", "Descanso duas semanas.", { en: "I'll rest for two weeks." }],
            ["あいだ", "{駅|えき}と {銀行|ぎんこう}の {間|あいだ}に {店|みせ}が あります。", "Há uma loja entre a estação e o banco.", { en: "There is a shop between the station and the bank." }],
            ["ケン", "{世間|せけん}^は {広|ひろ}いです。", "O mundo é grande.", { en: "The world is big." }],
            ["ま", "{電車|でんしゃ}に {間|ま}に {合|あ}いました。", "Cheguei a tempo para o trem.", { en: "I arrived in time for the train." }]
        ],
        note: "Depois de um número de tempo, 間 indica duração: 一時間 (1 hora), 一週間 (1 semana).", note_en: "After a number of time, 間 indicates duration: 一時間 (1 hour), 一週間 (1 week)."
    },
    {
        k: "週", pt: "semana", en: "week", on: ["シュウ"], kun: [], cat: "tempo",
        ex: [
            ["シュウ", "{毎週|まいしゅう} {日曜日|にちようび}に {会|あ}います。", "Nos encontramos todo domingo.", { en: "We meet every Sunday." }],
            ["シュウ", "{来週|らいしゅう} {試験|しけん}が あります。", "Semana que vem tem prova.", { en: "Next week there is an exam." }],
            ["シュウ", "{先週|せんしゅう} {京都|きょうと}^へ {行|い}きました。", "Semana passada fui a Quioto.", { en: "Last week I went to Kyoto." }]
        ]
    },
    {
        k: "毎", pt: "todo(a); cada", en: "every; each", on: ["マイ"], kun: ["ごと"], cat: "tempo",
        ex: [
            ["マイ", "{毎日|まいにち} {勉強|べんきょう}します。", "Estudo todos os dias.", { en: "I study every day." }],
            ["マイ", "{毎朝|まいあさ} {走|はし}ります。", "Corro todas as manhãs.", { en: "I run every morning." }],
            ["ごと", "{十分|じゅっぷん}{毎|ごと}に バスが {来|き}ます。", "O ônibus passa a cada dez minutos.", { en: "The bus comes every ten minutes." }]
        ]
    },
    {
        k: "前", pt: "antes; frente", en: "before; front", on: ["ゼン"], kun: ["まえ"], cat: "tempo",
        ex: [
            ["まえ", "{駅|えき}の {前|まえ}で {会|あ}いましょう。", "Vamos nos encontrar em frente à estação.", { en: "Let's meet in front of the station." }],
            ["まえ", "{食|た}べる {前|まえ}に {手|て}を {洗|あら}います。", "Lavo as mãos antes de comer.", { en: "I wash my hands before eating." }],
            ["ゼン", "{午前中|ごぜんちゅう}^は {勉強|べんきょう}します。", "Estudo durante a manhã.", { en: "I study in the morning." }]
        ]
    },
    {
        k: "後", pt: "depois; atrás", en: "after; behind", on: ["ゴ", "コウ"], kun: ["あと", "うし(ろ)", "のち"], cat: "tempo",
        ex: [
            ["あと", "{仕事|しごと}の {後|あと}で {会|あ}いましょう。", "Vamos nos encontrar depois do trabalho.", { en: "Let's meet after work." }],
            ["うし(ろ)", "{私|わたし}の {後|うし}ろに {立|た}ってください。", "Fique atrás de mim, por favor.", { en: "Please stay behind me." }],
            ["ゴ", "{午後|ごご}{二時|にじ}に {来|き}てください。", "Venha às duas da tarde.", { en: "Come at two in the afternoon." }],
            ["ゴ", "{三日後|みっかご}に {会|あ}います。", "Nos veremos daqui a três dias.", { en: "We'll see each other in three days." }],
            ["コウ", "{後半|こうはん}が {大切|たいせつ}です。", "A segunda metade é importante.", { en: "The second half is important." }],
            ["のち", "{今日|きょう}^は {晴|は}れ {後|のち} {曇|くも}りです。", "Hoje faz sol e depois fica nublado.", { en: "Today it is sunny and then it gets cloudy." }]
        ]
    }
]);
