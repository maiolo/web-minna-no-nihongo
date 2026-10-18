// Testes das funções puras do áudio: node --test
"use strict";

const test = require("node:test");
const assert = require("node:assert/strict");
const { clean, pickVoice } = require("../assets/js/speech.js");

test("clean tira reticências, setas e espaços sobrando", () => {
    assert.equal(clean("そこに  はいらないでください。…はい、わかりました。"), "そこに はいらないでください。 はい、わかりました。");
    assert.equal(clean("A ⇒ B ... C"), "A B C");
    assert.equal(clean("  "), "");
});

test("pickVoice prefere ja-JP, depois a voz local, e devolve null sem japonês", () => {
    const voices = [
        { name: "En", lang: "en-US", localService: true },
        { name: "Ja rede", lang: "ja-JP", localService: false },
        { name: "Ja local", lang: "ja-JP", localService: true },
        { name: "Ja outro", lang: "ja", localService: true }
    ];
    assert.equal(pickVoice(voices).name, "Ja local");
    assert.equal(pickVoice(voices.slice(0, 1)), null);
    assert.equal(pickVoice([]), null);
    assert.equal(pickVoice(undefined), null);
    assert.equal(pickVoice([{ name: "x", lang: "ja_JP" }]).name, "x");
});
