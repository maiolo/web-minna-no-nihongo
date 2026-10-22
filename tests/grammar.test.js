// Testes dos dados de gramática N5: node --test
"use strict";

const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const N = require("../assets/js/notation.js");

function load(file, key) {
    const ctx = { window: {} };
    vm.createContext(ctx);
    vm.runInContext(fs.readFileSync(path.join(__dirname, "..", file), "utf8"), ctx);
    return ctx.window[key];
}
const POINTS = load("jlpt/data/n5-grammar.js", "JLPT_N5_GRAMMAR");
const LESSONS = load("assets/js/lessons-index.js", "LESSONS");
const CATS = ["particulas", "frases", "verbos", "adjetivos"];
const hasBareKanji = (s) => /[一-鿿]/.test(s.replace(/\{[^}]*\}/g, ""));

test("todo ponto tem os campos obrigatórios e id único", () => {
    assert.ok(POINTS.length >= 40, "poucos pontos: " + POINTS.length);
    const ids = new Set();
    POINTS.forEach((p) => {
        ["id", "cat", "pat", "title", "mean", "rule"].forEach((k) => assert.ok(p[k], p.id + ": falta " + k));
        assert.match(p.id, /^[a-z0-9-]+$/, "id inválido: " + p.id);
        assert.ok(!ids.has(p.id), "id repetido: " + p.id);
        ids.add(p.id);
        assert.ok(CATS.includes(p.cat), p.id + ": categoria inválida " + p.cat);
        assert.ok(Array.isArray(p.ex) && p.ex.length >= 1, p.id + ": sem exemplos");
    });
});

test("toda categoria tem pelo menos um ponto", () => {
    CATS.forEach((c) => assert.ok(POINTS.some((p) => p.cat === c), "categoria vazia: " + c));
});

test("exemplos: furigana completo, tradução e romaji gerável", () => {
    POINTS.forEach((p) => {
        p.ex.forEach((e) => {
            assert.equal(e.length, 2, p.id);
            assert.ok(e[0] && e[1], p.id + ": exemplo incompleto");
            assert.ok(!hasBareKanji(e[0]), p.id + ": kanji sem furigana em " + e[0]);
            assert.equal((e[0].match(/\{/g) || []).length, (e[0].match(/\}/g) || []).length, p.id + ": chaves desbalanceadas");
            assert.match(N.sentenceRomaji(e[0]), /^[a-z' ,.!?]+$/i, p.id + ": romaji estranho em " + e[0]);
        });
    });
});

test("padrão e título: kanji só com furigana", () => {
    POINTS.forEach((p) => {
        assert.ok(!hasBareKanji(p.pat), p.id + ": kanji sem furigana no padrão");
        assert.ok(!hasBareKanji(p.title), p.id + ": kanji sem furigana no título");
    });
});

test("mean, rule e note: kanji só com furigana", () => {
    POINTS.forEach((p) => ["mean", "rule", "note"].forEach((k) => {
        if (p[k]) assert.ok(!hasBareKanji(p[k]), p.id + "." + k + ": kanji sem furigana");
    }));
});

test("lesson aponta para uma lição que existe no site", () => {
    const numbers = LESSONS.map((l) => l.number);
    POINTS.filter((p) => p.lesson).forEach((p) => {
        assert.ok(numbers.includes(p.lesson), p.id + ": lição " + p.lesson + " não existe");
    });
});

test("a lição indicada de fato trata do tema (confere o arquivo de dados)", () => {
    // Palavra-chave que precisa aparecer na seção de gramática da lição indicada.
    const KEYWORDS = {
        "te-sequence": "Sequência", "te-kara": "から", "wa-ga-adj": "Características",
        "kute-de": "Ligando", "nai-de-kudasai": "でください", "nakereba": "ければなりません",
        "nakutemo": "くてもいいです", "koto-ga-dekiru": "できます", "shumi": "趣味",
        "mae-ni": "前", "ta-koto": "ことが", "tari-tari": "たり", "naru": "なります"
    };
    POINTS.filter((p) => p.lesson).forEach((p) => {
        const text = fs.readFileSync(path.join(__dirname, "../lessons/data/lesson-" + p.lesson + ".js"), "utf8")
            .replace(/<rt>[^<]*<\/rt>/g, "").replace(/<[^>]+>/g, "");
        assert.ok(KEYWORDS[p.id], p.id + ": sem palavra-chave de conferência");
        assert.ok(text.includes(KEYWORDS[p.id]), p.id + ": «" + KEYWORDS[p.id] + "» não aparece na lição " + p.lesson);
    });
});
