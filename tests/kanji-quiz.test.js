// Testes das perguntas do quiz de kanji: node --test
"use strict";

const test = require("node:test");
const assert = require("node:assert/strict");
const { buildQuestions, cleanReading } = require("../assets/js/kanji-quiz.js");

const LIST = [
    { k: "一", pt: "um", on: ["イチ"], kun: ["ひと(つ)"], cat: "numeros" },
    { k: "二", pt: "dois", on: ["ニ"], kun: ["ふた(つ)"], cat: "numeros" },
    { k: "三", pt: "três", on: ["サン"], kun: ["みっ(つ)"], cat: "numeros" },
    { k: "四", pt: "quatro", on: ["シ"], kun: ["よん"], cat: "numeros" },
    { k: "日", pt: "dia, sol", on: ["ニチ"], kun: ["ひ"], cat: "tempo" },
    { k: "水", pt: "água", on: ["スイ"], kun: ["みず"], cat: "natureza" }
];

// Sorteio determinístico para os testes.
function seeded(seed) {
    let s = seed;
    return () => { s = (s * 1664525 + 1013904223) % 4294967296; return s / 4294967296; };
}

test("cleanReading tira os parênteses do okurigana", () => {
    assert.equal(cleanReading("ひと(つ)"), "ひとつ");
});

test("meaning: 4 alternativas distintas, a certa na posição indicada", () => {
    const qs = buildQuestions(LIST, { mode: "meaning", count: 6, rng: seeded(1) });
    assert.equal(qs.length, 6);
    qs.forEach((q) => {
        const entry = LIST.find((e) => e.k === q.k);
        assert.equal(q.options.length, 4);
        assert.equal(new Set(q.options).size, 4);
        assert.equal(q.options[q.answer], entry.pt);
    });
});

test("meaning: prefere alternativas da mesma categoria", () => {
    const qs = buildQuestions(LIST, { mode: "meaning", count: 6, rng: seeded(3) });
    const q = qs.find((x) => x.k === "二");
    const numeros = ["um", "dois", "três", "quatro"];
    assert.ok(q.options.every((o) => numeros.indexOf(o) !== -1));
});

test("reading: a resposta é uma leitura do kanji e as erradas não são", () => {
    const qs = buildQuestions(LIST, { mode: "reading", count: 6, rng: seeded(5) });
    qs.forEach((q) => {
        const entry = LIST.find((e) => e.k === q.k);
        const mine = entry.on.concat(entry.kun).map(cleanReading);
        q.options.forEach((o, i) => assert.equal(mine.indexOf(o) !== -1, i === q.answer));
    });
});

test("pool limita as perguntas e count corta o total", () => {
    const qs = buildQuestions(LIST, { pool: [LIST[0], LIST[5]], count: 10, rng: seeded(2) });
    assert.deepEqual(qs.map((q) => q.k).sort(), ["一", "水"].sort());
    assert.equal(buildQuestions(LIST, { count: 3, rng: seeded(2) }).length, 3);
});

test("lista pequena demais não gera pergunta", () => {
    assert.deepEqual(buildQuestions(LIST.slice(0, 3), {}), []);
});
