// Testes das funções dos exercícios: node --test
"use strict";

const test = require("node:test");
const assert = require("node:assert/strict");
const E = require("../assets/js/exercises.js");

const k = (s) => E.romajiToKana(s);

test("romajiToKana: sílabas básicas, digrafos e ん", () => {
    assert.deepEqual(k("kakanai"), { kana: "かかない", pending: "" });
    assert.equal(k("shashinn").kana, "しゃしん");
    assert.equal(k("kudasai").kana, "ください");
    assert.equal(k("tsukue").kana, "つくえ");
    assert.equal(k("chotto").kana, "ちょっと");
    assert.equal(k("kyou").kana, "きょう");
    assert.equal(k("nihongo").kana, "にほんご");
    assert.equal(k("shinpai").kana, "しんぱい");
    assert.equal(k("konnnichiwa").kana, "こんにちわ");
    assert.equal(k("kin'enn").kana, "きんえん");
});

test("romajiToKana: consoantes dobradas, ー e pontuação", () => {
    assert.equal(k("gakkou").kana, "がっこう");
    assert.equal(k("zasshi").kana, "ざっし");
    assert.equal(k("kippu").kana, "きっぷ");
    assert.equal(k("ra-menn").kana, "らーめん");
    assert.equal(k("hai.").kana, "はい。");
});

test("romajiToKana: o final incompleto fica pendente e kana existente passa direto", () => {
    assert.deepEqual(k("ka"), { kana: "か", pending: "" });
    assert.deepEqual(k("kak"), { kana: "か", pending: "k" });
    assert.deepEqual(k("kan"), { kana: "か", pending: "n" });
    assert.deepEqual(k("sh"), { kana: "", pending: "sh" });
    assert.deepEqual(k("かきkuke"), { kana: "かきくけ", pending: "" });
    assert.deepEqual(k("書かnai"), { kana: "書かない", pending: "" });
});

test("romajiToKana: aceita maiúsculas e é idempotente", () => {
    assert.equal(k("KAKANAI").kana, "かかない");
    const once = k("kakanai");
    assert.deepEqual(k(once.kana + once.pending), once);
});

test("finalize transforma o n pendente do fim em ん", () => {
    assert.equal(E.finalize("shashin"), "しゃしん");
    assert.equal(E.finalize("kak"), "かk");
});

test("toHiragana converte katakana e mantém o resto", () => {
    assert.equal(E.toHiragana("パスポートを"), "ぱすぽーとを");
});

test("normalize ignora espaços e pontuação", () => {
    assert.equal(E.normalize("書かない でください。"), "書かないでください");
});

test("diff marca o que sobrou e o que faltou", () => {
    const same = E.diff("書かない", "書かない");
    assert.ok(same.every((o) => o.t === "same"));
    const ops = E.diff("書きない", "書かない");
    assert.deepEqual(ops.filter((o) => o.t !== "same"), [{ t: "del", ch: "き" }, { t: "ins", ch: "か" }]);
    const missing = E.diff("書ない", "書かない");
    assert.deepEqual(missing.filter((o) => o.t !== "same"), [{ t: "ins", ch: "か" }]);
    assert.deepEqual(E.diff("", "あ"), [{ t: "ins", ch: "あ" }]);
});

test("shuffleSeeded é estável, preserva os itens e muda a ordem", () => {
    const list = ["a", "b", "c", "d", "e"];
    const one = E.shuffleSeeded(list, 7);
    assert.deepEqual(one, E.shuffleSeeded(list, 7));
    assert.deepEqual(one.slice().sort(), list);
    assert.notDeepEqual(one, list);
    assert.deepEqual(E.shuffleSeeded(["x"], 1), ["x"]);
});
