// Testes do banco de questões, do sorteio do treino e do histórico: node --test
"use strict";

const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const QB = require("../assets/js/question-bank.js");
const Practice = require("../assets/js/practice.js");
const Attempts = require("../assets/js/attempts.js");
const V = require("../assets/js/verbs.js");
const N = require("../assets/js/notation.js");

function loadGlobals(files) {
    const ctx = { window: {} };
    ctx.window.window = ctx.window;
    vm.createContext(ctx);
    files.forEach((f) => vm.runInContext(fs.readFileSync(path.join(__dirname, "..", f), "utf8"), ctx));
    return ctx.window;
}
const W = loadGlobals([
    "jlpt/data/n5-verbs.js", "jlpt/data/n5-kanji-1.js", "jlpt/data/n5-kanji-2.js", "jlpt/data/n5-kanji-3.js",
    "jlpt/data/n5-grammar.js", "jlpt/data/n5-questions.js"
]);
const bank = QB.create({ verbs: W.JLPT_N5_VERBS, kanji: W.JLPT_N5_KANJI, grammar: W.JLPT_N5_QUESTIONS });
const hasBareKanji = (s) => /[一-鿿]/.test(s.replace(/\{[^}]*\}/g, ""));

test("o banco tem questões em todos os temas", () => {
    QB.TOPICS.filter((t) => !t.real).forEach((t) => assert.ok(bank.ids(t.id).length >= 30, t.id + ": " + bank.ids(t.id).length));
    assert.equal(bank.ids().length, new Set(bank.ids()).size, "ids repetidos");
});

test("toda questão se monta e é coerente (resposta válida, alternativas distintas, explicação)", () => {
    bank.ids().forEach((id) => {
        const q = bank.get(id);
        assert.ok(q, "não montou: " + id);
        assert.equal(q.id, id);
        assert.ok(q.options.length >= 3 && q.options.length <= 4, id + ": nº de alternativas " + q.options.length);
        assert.ok(Number.isInteger(q.answer) && q.answer >= 0 && q.answer < q.options.length, id + ": resposta fora do intervalo");
        assert.equal(new Set(q.options.map((o) => V.reading(o))).size, q.options.length, id + ": alternativas iguais " + q.options.join(" | "));
        assert.ok(q.prompt && q.explain, id + ": sem enunciado ou explicação");
    });
});

test("a mesma questão sai sempre igual (necessário para o histórico)", () => {
    bank.ids().forEach((id) => assert.deepEqual(bank.get(id), bank.get(id), id));
    const again = QB.create({ verbs: W.JLPT_N5_VERBS, kanji: W.JLPT_N5_KANJI, grammar: W.JLPT_N5_QUESTIONS });
    ["vte:{書|か}く", "kread:食", "vmean:{食|た}べる", "q:wa-topico"].forEach((id) => assert.deepEqual(bank.get(id), again.get(id), id));
});

test("verbos: a alternativa certa é a forma que o conjugador gera", () => {
    const types = { vte: "te", vta: "ta", vnai: "nai", vmasu: "masu" };
    W.JLPT_N5_VERBS.forEach((v) => {
        Object.keys(types).forEach((t) => {
            const q = bank.get(t + ":" + v.jp);
            assert.equal(q.options[q.answer], V.conjugate(v, types[t]), t + " " + v.jp);
        });
        const g = bank.get("vgrp:" + v.jp);
        assert.equal(g.answer, v.g - 1, "grupo de " + v.jp);
        const m = bank.get("vmean:" + v.jp);
        assert.equal(m.options[m.answer], v.pt);
    });
});

test("verbos: exemplos conhecidos de alternativas erradas aparecem", () => {
    const q = bank.get("vte:{書|か}く");
    assert.ok(q.options.includes("{書|か}いて"));
    assert.ok(q.options.some((o) => ["{書|か}んで", "{書|か}って", "{書|か}いで", "{書|か}して"].includes(o)), q.options.join(" "));
    const taberu = bank.get("vnai:{食|た}べる");
    assert.ok(taberu.options.includes("{食|た}べない"));
    const kuru = bank.get("vnai:{来|く}る");
    assert.equal(kuru.options[kuru.answer], "{来|こ}ない");
});

test("significados: nenhuma errada divide palavra com a certa (evita alternativa discutível)", () => {
    const words = (t) => t.toLowerCase().split(/[^a-zà-ú]+/).filter((w) => w.length >= 4);
    const ids = W.JLPT_N5_VERBS.map((v) => "vmean:" + v.jp).concat(W.JLPT_N5_KANJI.map((e) => "kmean:" + e.k));
    ids.forEach((id) => {
        const q = bank.get(id);
        const right = words(q.options[q.answer]);
        q.options.forEach((o, i) => {
            if (i !== q.answer) assert.ok(!words(o).some((w) => right.includes(w)), id + ": «" + o + "» ~ «" + q.options[q.answer] + "»");
        });
    });
});

test("kanji: a leitura certa é do kanji e as erradas não são", () => {
    W.JLPT_N5_KANJI.forEach((e) => {
        const mine = e.on.concat(e.kun).map((r) => r.replace(/[()]/g, ""));
        if (!mine.length) { assert.equal(bank.get("kread:" + e.k), null); return; }
        const q = bank.get("kread:" + e.k);
        assert.ok(mine.includes(q.options[q.answer]), e.k + ": certa não é do kanji");
        q.options.forEach((o, i) => { if (i !== q.answer) assert.ok(!mine.includes(o), e.k + ": errada é leitura do kanji: " + o); });
        const katakana = /[゠-ヿ]/.test(q.options[q.answer].charAt(0));
        q.options.forEach((o) => assert.equal(/[゠-ヿ]/.test(o.charAt(0)), katakana, e.k + ": mistura on e kun"));
    });
    const m = bank.get("kmean:" + W.JLPT_N5_KANJI[0].k);
    assert.equal(m.options[m.answer], W.JLPT_N5_KANJI[0].pt);
});

test("gramática: dados do banco bem formados", () => {
    const refs = new Set(W.JLPT_N5_GRAMMAR.map((p) => p.id));
    const ids = new Set();
    W.JLPT_N5_QUESTIONS.forEach((q) => {
        assert.ok(!ids.has(q.id), "id repetido: " + q.id); ids.add(q.id);
        assert.ok(refs.has(q.ref), q.id + ": ref inexistente " + q.ref);
        assert.ok(q.sentence.includes("＿＿"), q.id + ": sem lacuna");
        assert.equal(q.w.length, 3, q.id + ": precisa de 3 erradas");
        assert.ok(!q.w.includes(q.a), q.id + ": a certa está entre as erradas");
        [q.sentence, q.a, q.why].concat(q.w).forEach((t) => assert.ok(!hasBareKanji(t), q.id + ": kanji sem furigana em " + t));
        const filled = q.sentence.replace("＿＿", q.a);
        assert.match(N.sentenceRomaji(filled), /^[a-z' ,.!?]+$/i, q.id + ": romaji estranho");
    });
});

test("todo texto das questões geradas tem furigana completo", () => {
    bank.ids().forEach((id) => {
        const q = bank.get(id);
        [q.prompt, q.explain].concat(q.options).forEach((t) => assert.ok(!hasBareKanji(t) || id.startsWith("k"), id + ": kanji sem furigana em " + t));
    });
});

test("Practice.pick: quantidade, temas, sem repetir item e determinismo", () => {
    const topics = ["gramatica", "verbo-forma", "kanji-leitura"];
    const a = Practice.pick(bank, { topics, count: 12, seed: 7 });
    assert.equal(a.length, 12);
    assert.equal(new Set(a).size, 12);
    assert.deepEqual(a, Practice.pick(bank, { topics, count: 12, seed: 7 }));
    assert.notDeepEqual(a, Practice.pick(bank, { topics, count: 12, seed: 8 }));
    const used = new Set(a.map((id) => bank.get(id).topic));
    topics.forEach((t) => assert.ok(used.has(t), "tema ausente: " + t));
    const keys = a.map((id) => id.slice(id.indexOf(":") + 1));
    assert.equal(new Set(keys).size, keys.length, "mesmo item repetido");
});

test("Practice.pick: avoid deixa por último, e count maior que o banco devolve tudo", () => {
    const some = Practice.pick(bank, { topics: ["gramatica"], count: 10, seed: 3 });
    const next = Practice.pick(bank, { topics: ["gramatica"], count: 10, seed: 3, avoid: some });
    assert.equal(next.filter((id) => some.includes(id)).length, 0);
    const all = Practice.pick(bank, { topics: ["gramatica"], count: 500, seed: 3 });
    assert.equal(all.length, bank.ids("gramatica").length);
});

test("Practice.grade: acertos, erros e branco", () => {
    const ids = Practice.pick(bank, { topics: ["gramatica"], count: 3, seed: 1 });
    const q = ids.map((id) => bank.get(id));
    const result = Practice.grade(bank, [
        { id: ids[0], chosen: q[0].answer },
        { id: ids[1], chosen: (q[1].answer + 1) % q[1].options.length },
        { id: ids[2], chosen: null }
    ]);
    assert.equal(result.total, 3);
    assert.equal(result.correct, 1);
    assert.deepEqual(result.items.map((i) => i.ok), [true, false, false]);
});

test("Attempts: add mantém as últimas 50 e a mais recente primeiro", () => {
    let doc = null;
    for (let i = 0; i < 55; i++) {
        doc = Attempts.add(doc, { id: "t" + i, kind: "practice", items: [], score: { correct: 0, total: 0 } });
    }
    assert.equal(Attempts.list(doc).length, Attempts.MAX);
    assert.equal(Attempts.list(doc)[0].id, "t54");
    assert.equal(Attempts.list(doc)[49].id, "t5");
    assert.equal(Attempts.add(doc, { id: "t54", items: [] }).list.length, Attempts.MAX, "mesmo id substitui");
});

test("Attempts: missedIds usa a última vez que cada questão apareceu", () => {
    const doc = { list: [
        { id: "b", items: [{ q: "a", ok: true }, { q: "c", ok: false }] },
        { id: "a", items: [{ q: "a", ok: false }, { q: "b", ok: false }] }
    ] };
    assert.deepEqual(Attempts.missedIds(doc).sort(), ["b", "c"]);
    assert.deepEqual(Attempts.recentIds(doc, 1), ["a", "c"]);
    assert.deepEqual(Attempts.missedIds(null), []);
});
