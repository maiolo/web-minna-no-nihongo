// Testes do conjugador e dos dados dos verbos N5: node --test
"use strict";

const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const V = require("../assets/js/verbs.js");
const N = require("../assets/js/notation.js");

const ORDER = V.FORMS.map((f) => f.id);

function load() {
    const ctx = { window: {} };
    vm.createContext(ctx);
    vm.runInContext(fs.readFileSync(path.join(__dirname, "../jlpt/data/n5-verbs.js"), "utf8"), ctx);
    return ctx.window.JLPT_N5_VERBS;
}
const VERBS = load();
const byJp = (jp) => VERBS.find((v) => v.jp === jp);
const readings = (verb) => ORDER.map((id) => {
    const out = V.conjugate(verb, id);
    return out === null ? null : V.reading(out);
});

// Ordem: dict, masu, masen, mashita, masendeshita, te, teiru, ta, nai, nakatta, tai, mashou
const EXPECTED = {
    "{書|か}く":      ["かく", "かきます", "かきません", "かきました", "かきませんでした", "かいて", "かいています", "かいた", "かかない", "かかなかった", "かきたい", "かきましょう"],
    "{泳|およ}ぐ":    ["およぐ", "およぎます", "およぎません", "およぎました", "およぎませんでした", "およいで", "およいでいます", "およいだ", "およがない", "およがなかった", "およぎたい", "およぎましょう"],
    "{話|はな}す":    ["はなす", "はなします", "はなしません", "はなしました", "はなしませんでした", "はなして", "はなしています", "はなした", "はなさない", "はなさなかった", "はなしたい", "はなしましょう"],
    "{待|ま}つ":      ["まつ", "まちます", "まちません", "まちました", "まちませんでした", "まって", "まっています", "まった", "またない", "またなかった", "まちたい", "まちましょう"],
    "{飲|の}む":      ["のむ", "のみます", "のみません", "のみました", "のみませんでした", "のんで", "のんでいます", "のんだ", "のまない", "のまなかった", "のみたい", "のみましょう"],
    "{遊|あそ}ぶ":    ["あそぶ", "あそびます", "あそびません", "あそびました", "あそびませんでした", "あそんで", "あそんでいます", "あそんだ", "あそばない", "あそばなかった", "あそびたい", "あそびましょう"],
    "{買|か}う":      ["かう", "かいます", "かいません", "かいました", "かいませんでした", "かって", "かっています", "かった", "かわない", "かわなかった", "かいたい", "かいましょう"],
    "{帰|かえ}る":    ["かえる", "かえります", "かえりません", "かえりました", "かえりませんでした", "かえって", "かえっています", "かえった", "かえらない", "かえらなかった", "かえりたい", "かえりましょう"],
    "{行|い}く":      ["いく", "いきます", "いきません", "いきました", "いきませんでした", "いって", "いっています", "いった", "いかない", "いかなかった", "いきたい", "いきましょう"],
    "ある":           ["ある", "あります", "ありません", "ありました", "ありませんでした", "あって", null, "あった", "ない", "なかった", null, null],
    "{食|た}べる":    ["たべる", "たべます", "たべません", "たべました", "たべませんでした", "たべて", "たべています", "たべた", "たべない", "たべなかった", "たべたい", "たべましょう"],
    "{見|み}る":      ["みる", "みます", "みません", "みました", "みませんでした", "みて", "みています", "みた", "みない", "みなかった", "みたい", "みましょう"],
    "{起|お}きる":    ["おきる", "おきます", "おきません", "おきました", "おきませんでした", "おきて", "おきています", "おきた", "おきない", "おきなかった", "おきたい", "おきましょう"],
    "{出|で}かける":  ["でかける", "でかけます", "でかけません", "でかけました", "でかけませんでした", "でかけて", "でかけています", "でかけた", "でかけない", "でかけなかった", "でかけたい", "でかけましょう"],
    "する":           ["する", "します", "しません", "しました", "しませんでした", "して", "しています", "した", "しない", "しなかった", "したい", "しましょう"],
    "{勉強|べんきょう}する": ["べんきょうする", "べんきょうします", "べんきょうしません", "べんきょうしました", "べんきょうしませんでした", "べんきょうして", "べんきょうしています", "べんきょうした", "べんきょうしない", "べんきょうしなかった", "べんきょうしたい", "べんきょうしましょう"],
    "{買|か}い{物|もの}する": ["かいものする", "かいものします", "かいものしません", "かいものしました", "かいものしませんでした", "かいものして", "かいものしています", "かいものした", "かいものしない", "かいものしなかった", "かいものしたい", "かいものしましょう"],
    "{来|く}る":      ["くる", "きます", "きません", "きました", "きませんでした", "きて", "きています", "きた", "こない", "こなかった", "きたい", "きましょう"]
};

test("as 12 formas de cada verbo de exemplo estão certas", () => {
    Object.keys(EXPECTED).forEach((jp) => {
        const verb = byJp(jp);
        assert.ok(verb, "verbo ausente nos dados: " + jp);
        assert.deepEqual(readings(verb), EXPECTED[jp], jp);
    });
});

test("o kanji de 来る ganha a leitura certa em cada forma", () => {
    const kuru = byJp("{来|く}る");
    assert.equal(V.conjugate(kuru, "masu"), "{来|き}ます");
    assert.equal(V.conjugate(kuru, "nai"), "{来|こ}ない");
    assert.equal(V.conjugate(kuru, "te"), "{来|き}て");
    assert.equal(V.conjugate(kuru, "dict"), "{来|く}る");
});

test("o okurigana fica fora das chaves e o kanji do radical é preservado", () => {
    assert.equal(V.conjugate(byJp("{書|か}く"), "te"), "{書|か}いて");
    assert.equal(V.conjugate(byJp("{食|た}べる"), "nai"), "{食|た}べない");
    assert.equal(V.conjugate(byJp("{勉強|べんきょう}する"), "masu"), "{勉強|べんきょう}します");
});

test("formas que não se usam com o verbo voltam null (e supports é falso)", () => {
    const aru = byJp("ある");
    ["teiru", "tai", "mashou"].forEach((f) => {
        assert.equal(V.supports(aru, f), false, f);
        assert.equal(V.conjugate(aru, f), null, f);
    });
    assert.equal(V.supports(aru, "masu"), true);
});

test("forma desconhecida ou grupo inválido devolve null", () => {
    assert.equal(V.conjugate(byJp("{書|か}く"), "inexistente"), null);
    assert.equal(V.conjugate({ jp: "{書|か}く", g: 9, pt: "x" }, "masu"), null);
});

test("verbos do grupo 1 que parecem do grupo 2 estão marcados como grupo 1", () => {
    ["{帰|かえ}る", "{入|はい}る", "{走|はし}る", "{知|し}る", "{切|き}る", "{要|い}る"].forEach((jp) => {
        assert.equal(byJp(jp).g, 1, jp);
    });
    ["{着|き}る", "いる", "{見|み}る", "{寝|ね}る", "{出|で}る", "{降|お}りる"].forEach((jp) => {
        assert.equal(byJp(jp).g, 2, jp);
    });
});

test("dados: todo verbo é válido, único e tem exemplo com furigana completo", () => {
    assert.ok(VERBS.length >= 90, "lista menor que o esperado: " + VERBS.length);
    const seen = new Set();
    VERBS.forEach((v) => {
        assert.equal(V.validate(v), null, v.jp + ": " + V.validate(v));
        assert.ok(!seen.has(v.jp), "verbo repetido: " + v.jp);
        seen.add(v.jp);
        assert.ok(Array.isArray(v.ex) && v.ex[0] && v.ex[1], "sem exemplo: " + v.jp);
        // todo kanji da frase precisa estar dentro de {..|..}
        assert.ok(!/[一-鿿]/.test(v.ex[0].replace(/\{[^}]*\}/g, "")), "kanji sem furigana na frase de " + v.jp);
        (v.skip || []).forEach((f) => assert.ok(ORDER.includes(f), v.jp + ": skip inválido " + f));
    });
});

test("dados: a nota de cada verbo também tem furigana completo", () => {
    VERBS.filter((v) => v.note).forEach((v) => {
        assert.ok(!/[一-鿿]/.test(v.note.replace(/\{[^}]*\}/g, "")), "kanji sem furigana na nota de " + v.jp);
    });
});

test("dados: o exemplo contém o verbo (em alguma forma) e dá para gerar o romaji", () => {
    VERBS.forEach((v) => {
        const sentence = N.plainText(v.ex[0]);
        const dict = N.plainText(v.jp);
        // tira a terminação que muda (する inteiro: 勉強する -> 勉強します)
        const stem = /する$/.test(dict) ? dict.slice(0, -2) : dict.slice(0, -1);
        assert.ok(sentence.includes(stem), v.jp + " não aparece em: " + sentence);
        assert.match(N.sentenceRomaji(v.ex[0]), /^[a-z' ,.!?]+$/i, v.ex[0]);
    });
});

test("dados: nenhuma forma conjugada sai malformada", () => {
    VERBS.forEach((v) => {
        ORDER.forEach((id) => {
            const out = V.conjugate(v, id);
            if (out === null) return;
            assert.equal((out.match(/\{/g) || []).length, (out.match(/\}/g) || []).length, v.jp + " " + id);
            assert.match(V.reading(out), /^[ぁ-ゖー]+$/, v.jp + " " + id + ": " + out);
        });
    });
});

test("validate pega erros comuns de digitação", () => {
    assert.match(V.validate({ jp: "食べる", g: 2, pt: "comer" }), /furigana/);
    assert.match(V.validate({ jp: "{書|か}く", g: 5, pt: "x" }), /grupo/);
    assert.match(V.validate({ jp: "{書|か}き", g: 1, pt: "x" }), /terminação/);
    assert.match(V.validate({ jp: "{書|か}く", g: 3, pt: "x" }), /grupo 3/);
    assert.match(V.validate({ jp: "{書|か}く", g: 2, pt: "x" }), /grupo 2/);
});
