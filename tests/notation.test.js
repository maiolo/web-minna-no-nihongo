// Testes da notação das frases e do romaji: node --test
"use strict";

const test = require("node:test");
const assert = require("node:assert/strict");
const N = require("../assets/js/notation.js");

test("toRomaji: sílabas básicas, ditongos e sons duplos", () => {
    const cases = {
        "きょう": "kyou",
        "がっこう": "gakkou",
        "しんぶん": "shinbun",
        "ちょっと": "chotto",
        "まっちゃ": "matcha",
        "じゅうにん": "juunin",
        "ひゃく": "hyaku",
        "りょこう": "ryokou",
        "コーヒー": "koohii",
        "ジッ": "jit"
    };
    Object.keys(cases).forEach((kana) => assert.equal(N.toRomaji(kana), cases[kana], kana));
});

test("toRomaji: ん antes de vogal ou y leva apóstrofo", () => {
    assert.equal(N.toRomaji("しんいち"), "shin'ichi");
    assert.equal(N.toRomaji("こんや"), "kon'ya");
    assert.equal(N.toRomaji("ほんや"), "hon'ya");
    assert.equal(N.toRomaji("せんせい"), "sensei");
});

test("toRomaji: ^は e ^へ são partículas (wa, e); は e へ comuns seguem a leitura normal", () => {
    assert.equal(N.toRomaji("わたし^は"), "watashiwa");
    assert.equal(N.toRomaji("がっこう^へ"), "gakkoue");
    assert.equal(N.toRomaji("はな"), "hana");
    assert.equal(N.toRomaji("へや"), "heya");
});

test("plainText e readingText", () => {
    const s = "{今日|きょう}^は {月曜日|げつようび}です。";
    assert.equal(N.plainText(s), "今日は月曜日です。");
    assert.equal(N.readingText(s), "きょう^は げつようびです。");
});

test("toRuby: gera <ruby> e destaca o bloco que contém o alvo", () => {
    assert.equal(N.toRuby("{食|た}べる", "食"), '<ruby class="hl">食<rt>た</rt></ruby>べる');
    assert.equal(N.toRuby("{食|た}べる"), "<ruby>食<rt>た</rt></ruby>べる");
    assert.equal(N.toRuby("{水|みず}を {飲|の}む", "水"), '<ruby class="hl">水<rt>みず</rt></ruby>を<ruby>飲<rt>の</rt></ruby>む');
});

test("sentenceRomaji separa palavras (partículas, です, ください, pontuação)", () => {
    const cases = {
        "{今日|きょう}^は {月曜日|げつようび}です。": "kyou wa getsuyoubi desu.",
        "{学校|がっこう}^へ {行|い}きます。": "gakkou e ikimasu.",
        "{友|とも}だちが {来|き}ます。": "tomodachi ga kimasu.",
        "{何|なん}ですか。": "nan desu ka.",
        "{少|すこ}し {待|ま}ってください。": "sukoshi matte kudasai.",
        "{新年|しんねん} おめでとう ございます。": "shinnen omedetou gozaimasu.",
        "{先生|せんせい}です。": "sensei desu."
    };
    Object.keys(cases).forEach((s) => assert.equal(N.sentenceRomaji(s), cases[s], s));
});

test("sentenceRomaji: が de 上がる/下がる não vira partícula", () => {
    assert.equal(N.sentenceRomaji("{階段|かいだん}を {上|あ}がります。"), "kaidan o agarimasu.");
});

test("spaceWords não mexe no texto japonês, só acrescenta espaços", () => {
    const s = "{東京|とうきょう}で {生|う}まれました。";
    assert.equal(N.spaceWords(s).replace(/ /g, ""), s.replace(/ /g, ""));
});
