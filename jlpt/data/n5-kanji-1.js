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
        k: "一", pt: "um", on: ["イチ", "イツ"], kun: ["ひと(つ)"], cat: "numeros",
        ex: [
            ["イチ", "{一時|いちじ}に {会|あ}いましょう。", "Vamos nos encontrar à uma hora."],
            ["ひと(つ)", "りんごを {一|ひと}つ ください。", "Me dá uma maçã, por favor."],
            ["ひとり (especial)", "{一人|ひとり}で {行|い}きます。", "Vou sozinho(a)."],
            ["イツ", "{唯一|ゆいいつ}の {友|とも}だちです。", "É meu único amigo."]
        ],
        note: "Contadores: 一つ (ひとつ) = uma coisa; 一人 (ひとり) = uma pessoa."
    },
    {
        k: "二", pt: "dois", on: ["ニ"], kun: ["ふた(つ)"], cat: "numeros",
        ex: [
            ["ニ", "{二月|にがつ}に {日本|にほん}^へ {行|い}きます。", "Em fevereiro vou ao Japão."],
            ["ふた(つ)", "コーヒーを {二|ふた}つ ください。", "Dois cafés, por favor."],
            ["ふたり (especial)", "{二人|ふたり}で {食|た}べます。", "Comemos nós dois juntos."]
        ]
    },
    {
        k: "三", pt: "três", on: ["サン"], kun: ["み(っつ)"], cat: "numeros",
        ex: [
            ["サン", "{三人|さんにん}の {友|とも}だちが {来|き}ます。", "Três amigos vêm."],
            ["み(っつ)", "みかんを {三|みっ}つ {買|か}いました。", "Comprei três tangerinas."]
        ]
    },
    {
        k: "四", pt: "quatro", on: ["シ"], kun: ["よ(っつ)", "よん"], cat: "numeros",
        ex: [
            ["シ", "{四月|しがつ}^は {春|はる}です。", "Abril é primavera."],
            ["よ", "{四時|よじ}に {起|お}きます。", "Acordo às quatro."],
            ["よっ(つ)", "{四|よっ}つ あります。", "Há quatro."]
        ],
        note: "Atenção: 四時 = よじ (4 horas), 四人 = よにん (4 pessoas), 四月 = しがつ (abril)."
    },
    {
        k: "五", pt: "cinco", on: ["ゴ"], kun: ["いつ(つ)"], cat: "numeros",
        ex: [
            ["ゴ", "{五月|ごがつ}^は {暑|あつ}いです。", "Maio é quente."],
            ["いつ(つ)", "みかんを {五|いつ}つ {食|た}べました。", "Comi cinco tangerinas."],
            ["いつ (especial)", "{五日|いつか}に {会|あ}いましょう。", "Vamos nos encontrar no dia 5."]
        ]
    },
    {
        k: "六", pt: "seis", on: ["ロク"], kun: ["む(っつ)"], cat: "numeros",
        ex: [
            ["ロク", "{六時|ろくじ}に {起|お}きます。", "Acordo às seis."],
            ["ロッ", "{六分|ろっぷん} {待|ま}ちました。", "Esperei seis minutos."],
            ["む(っつ)", "りんごが {六|むっ}つ あります。", "Há seis maçãs."]
        ]
    },
    {
        k: "七", pt: "sete", on: ["シチ"], kun: ["なな(つ)", "なな"], cat: "numeros",
        ex: [
            ["シチ", "{七時|しちじ}に {食|た}べます。", "Como às sete."],
            ["なな", "{七人|ななにん}で {行|い}きます。", "Vamos em sete pessoas."],
            ["なな(つ)", "{七|なな}つ あります。", "Há sete."]
        ],
        note: "Também se lê しち ou なな: 七時 = しちじ, 七人 = ななにん (ou しちにん)."
    },
    {
        k: "八", pt: "oito", on: ["ハチ"], kun: ["や(っつ)"], cat: "numeros",
        ex: [
            ["ハチ", "{八時|はちじ}に {会社|かいしゃ}^へ {行|い}きます。", "Vou à empresa às oito."],
            ["や(っつ)", "{八|やっ}つ ください。", "Quero oito, por favor."]
        ]
    },
    {
        k: "九", pt: "nove", on: ["キュウ", "ク"], kun: ["ここの(つ)"], cat: "numeros",
        ex: [
            ["キュウ", "{九百円|きゅうひゃくえん}です。", "São 900 ienes."],
            ["ク", "{九時|くじ}に {寝|ね}ます。", "Durmo às nove."],
            ["ここの(つ)", "{九|ここの}つ あります。", "Há nove."]
        ],
        note: "九時 = くじ (9 horas) e 九月 = くがつ (setembro) usam ク."
    },
    {
        k: "十", pt: "dez", on: ["ジュウ", "ジッ"], kun: ["とお"], cat: "numeros",
        ex: [
            ["ジュウ", "{十人|じゅうにん}が {来|き}ました。", "Dez pessoas vieram."],
            ["ジッ・ジュッ", "{十分|じゅっぷん}かかります。", "Leva dez minutos."],
            ["とお", "りんごが {十|とお} あります。", "Há dez maçãs."]
        ]
    },
    {
        k: "百", pt: "cem", on: ["ヒャク"], kun: [], cat: "numeros",
        ex: [
            ["ヒャク", "{百円|ひゃくえん}です。", "São 100 ienes."],
            ["ビャク", "{三百円|さんびゃくえん}です。", "São 300 ienes."],
            ["ピャク", "{六百円|ろっぴゃくえん}です。", "São 600 ienes."]
        ],
        note: "A leitura muda: さんびゃく (300), ろっぴゃく (600), はっぴゃく (800)."
    },
    {
        k: "千", pt: "mil", on: ["セン"], kun: ["ち"], cat: "numeros",
        ex: [
            ["セン", "{千円|せんえん}です。", "São 1.000 ienes."],
            ["ゼン", "{三千円|さんぜんえん}です。", "São 3.000 ienes."],
            ["ち", "{千鳥|ちどり}が {飛|と}んでいます。", "Tarambolas (aves) estão voando."]
        ],
        note: "Com 三 (3) vira ぜん: さんぜん. Kun ち só aparece em palavras como 千代 (ちよ)."
    },
    {
        k: "万", pt: "dez mil", on: ["マン", "バン"], kun: [], cat: "numeros",
        ex: [
            ["マン", "{一万円|いちまんえん}です。", "São 10.000 ienes."],
            ["マン", "{三万人|さんまんにん}が {来|き}ました。", "Vieram 30 mil pessoas."],
            ["バン", "{万歳|ばんざい}！ {勝|か}ちました。", "Viva! Vencemos."]
        ],
        note: "O japonês conta de 10.000 em 10.000: 一万 = 10 mil, 十万 = 100 mil, 百万 = 1 milhão."
    },

    /* ---------- Tempo ---------- */
    {
        k: "日", pt: "dia; sol; Japão", on: ["ニチ", "ジツ"], kun: ["ひ", "か"], cat: "tempo",
        ex: [
            ["ニチ", "{日曜日|にちようび}^は {家|いえ}に います。", "No domingo fico em casa."],
            ["ジツ", "{休日|きゅうじつ}^は {何|なに}を しますか。", "O que você faz nos dias de folga?"],
            ["ひ", "{日|ひ}が {長|なが}く なりました。", "Os dias ficaram mais longos."],
            ["か (contagem de dias)", "{三日|みっか} {休|やす}みます。", "Descanso por três dias."]
        ],
        note: "Os dias do mês têm leituras especiais: ついたち (1), ふつか (2), みっか (3), ... はつか (20)."
    },
    {
        k: "月", pt: "mês; lua", on: ["ゲツ", "ガツ"], kun: ["つき"], cat: "tempo",
        ex: [
            ["ガツ", "{一月|いちがつ}^は {寒|さむ}いです。", "Janeiro é frio."],
            ["ゲツ", "{月曜日|げつようび}に {学校|がっこう}^へ {行|い}きます。", "Na segunda-feira vou à escola."],
            ["つき", "{月|つき}が {出|で}ました。", "A lua saiu."]
        ],
        note: "Os meses usam ガツ (一月 = janeiro); os dias da semana usam ゲツ (月曜日 = segunda)."
    },
    {
        k: "年", pt: "ano", on: ["ネン"], kun: ["とし"], cat: "tempo",
        ex: [
            ["ネン", "{来年|らいねん} {日本|にほん}^へ {行|い}きます。", "Ano que vem vou ao Japão."],
            ["ネン", "{去年|きょねん}^は {忙|いそが}しかったです。", "Ano passado foi corrido."],
            ["とし", "お{年|とし}^は {何歳|なんさい}ですか。", "Quantos anos o(a) senhor(a) tem?"],
            ["ことし (especial)", "{今年|ことし}^は {暑|あつ}いです。", "Este ano está quente."]
        ]
    },
    {
        k: "時", pt: "hora; tempo; momento", on: ["ジ"], kun: ["とき"], cat: "tempo",
        ex: [
            ["ジ", "{今|いま}、{三時|さんじ}です。", "Agora são três horas."],
            ["ジ", "{時間|じかん}が ありません。", "Não tenho tempo."],
            ["とき", "{暇|ひま}な {時|とき}、{本|ほん}を {読|よ}みます。", "Quando tenho tempo livre, leio livros."],
            ["とき(どき)", "{時々|ときどき} {映画|えいが}を {見|み}ます。", "De vez em quando assisto a filmes."]
        ]
    },
    {
        k: "分", pt: "minuto; parte; entender", on: ["ブン", "フン", "ブ"], kun: ["わ(ける)", "わ(かる)"], cat: "tempo",
        ex: [
            ["フン", "{五分|ごふん} {待|ま}ってください。", "Espere cinco minutos, por favor."],
            ["プン", "{三分|さんぷん}で {着|つ}きます。", "Chego em três minutos."],
            ["ブン", "{自分|じぶん}で {作|つく}ります。", "Eu mesmo(a) faço."],
            ["ブン", "{半分|はんぶん} ください。", "Me dê metade, por favor."],
            ["わ(かる)", "{意味|いみ}が {分|わ}かります。", "Entendo o significado."]
        ],
        note: "Minutos: ふん com 2, 5, 7, 9 (にふん, ごふん...) e ぷん com 1, 3, 4, 6, 8, 10 (いっぷん, さんぷん...)."
    },
    {
        k: "半", pt: "metade; meio", on: ["ハン"], kun: ["なか(ば)"], cat: "tempo",
        ex: [
            ["ハン", "{三時半|さんじはん}に {会|あ}いましょう。", "Vamos nos encontrar às três e meia."],
            ["ハン", "{半分|はんぶん}に {切|き}ります。", "Corto ao meio."],
            ["なか(ば)", "{夏|なつ}の {半|なか}ばに {旅行|りょこう}します。", "Viajo em meados do verão."]
        ]
    },
    {
        k: "今", pt: "agora; este(a)", on: ["コン"], kun: ["いま"], cat: "tempo",
        ex: [
            ["いま", "{今|いま}、{何時|なんじ}ですか。", "Que horas são agora?"],
            ["コン", "{今週|こんしゅう}^は {忙|いそが}しいです。", "Esta semana estou ocupado(a)."],
            ["コン", "{今度|こんど} {一緒|いっしょ}に {行|い}きましょう。", "Da próxima vez vamos juntos."],
            ["きょう (especial)", "{今日|きょう}^は {月曜日|げつようび}です。", "Hoje é segunda-feira."]
        ]
    },
    {
        k: "午", pt: "meio-dia", on: ["ゴ"], kun: [], cat: "tempo",
        ex: [
            ["ゴ", "{午前|ごぜん}{九時|くじ}に {会|あ}います。", "Nos encontramos às nove da manhã."],
            ["ゴ", "{午後|ごご}^は {暇|ひま}です。", "À tarde estou livre."]
        ],
        note: "Quase sempre aparece em 午前 (manhã, antes do meio-dia) e 午後 (tarde, depois do meio-dia)."
    },
    {
        k: "間", pt: "intervalo; entre; espaço", on: ["カン", "ケン"], kun: ["あいだ", "ま"], cat: "tempo",
        ex: [
            ["カン", "{一時間|いちじかん} {待|ま}ちました。", "Esperei uma hora."],
            ["カン", "{二週間|にしゅうかん} {休|やす}みます。", "Descanso duas semanas."],
            ["あいだ", "{駅|えき}と {銀行|ぎんこう}の {間|あいだ}に {店|みせ}が あります。", "Há uma loja entre a estação e o banco."],
            ["ケン", "{世間|せけん}^は {広|ひろ}いです。", "O mundo é grande."],
            ["ま", "{電車|でんしゃ}に {間|ま}に {合|あ}いました。", "Cheguei a tempo para o trem."]
        ],
        note: "Depois de um número de tempo, 間 indica duração: 一時間 (1 hora), 一週間 (1 semana)."
    },
    {
        k: "週", pt: "semana", on: ["シュウ"], kun: [], cat: "tempo",
        ex: [
            ["シュウ", "{毎週|まいしゅう} {日曜日|にちようび}に {会|あ}います。", "Nos encontramos todo domingo."],
            ["シュウ", "{来週|らいしゅう} {試験|しけん}が あります。", "Semana que vem tem prova."],
            ["シュウ", "{先週|せんしゅう} {京都|きょうと}^へ {行|い}きました。", "Semana passada fui a Quioto."]
        ]
    },
    {
        k: "毎", pt: "todo(a); cada", on: ["マイ"], kun: ["ごと"], cat: "tempo",
        ex: [
            ["マイ", "{毎日|まいにち} {勉強|べんきょう}します。", "Estudo todos os dias."],
            ["マイ", "{毎朝|まいあさ} {走|はし}ります。", "Corro todas as manhãs."],
            ["ごと", "{十分|じゅっぷん}{毎|ごと}に バスが {来|き}ます。", "O ônibus passa a cada dez minutos."]
        ]
    },
    {
        k: "前", pt: "antes; frente", on: ["ゼン"], kun: ["まえ"], cat: "tempo",
        ex: [
            ["まえ", "{駅|えき}の {前|まえ}で {会|あ}いましょう。", "Vamos nos encontrar em frente à estação."],
            ["まえ", "{食|た}べる {前|まえ}に {手|て}を {洗|あら}います。", "Lavo as mãos antes de comer."],
            ["ゼン", "{午前中|ごぜんちゅう}^は {勉強|べんきょう}します。", "Estudo durante a manhã."]
        ]
    },
    {
        k: "後", pt: "depois; atrás", on: ["ゴ", "コウ"], kun: ["あと", "うし(ろ)", "のち"], cat: "tempo",
        ex: [
            ["あと", "{仕事|しごと}の {後|あと}で {会|あ}いましょう。", "Vamos nos encontrar depois do trabalho."],
            ["うし(ろ)", "{私|わたし}の {後|うし}ろに {立|た}ってください。", "Fique atrás de mim, por favor."],
            ["ゴ", "{午後|ごご}{二時|にじ}に {来|き}てください。", "Venha às duas da tarde."],
            ["ゴ", "{三日後|みっかご}に {会|あ}います。", "Nos veremos daqui a três dias."],
            ["コウ", "{後半|こうはん}が {大切|たいせつ}です。", "A segunda metade é importante."],
            ["のち", "{今日|きょう}^は {晴|は}れ {後|のち} {曇|くも}りです。", "Hoje faz sol e depois fica nublado."]
        ]
    }
]);
