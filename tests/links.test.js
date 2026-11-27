// Ligações lições <-> JLPT N5 (jlpt/data/n5-links.js): node --test
"use strict";

const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

function load(file, key) {
    const ctx = { window: {} };
    vm.createContext(ctx);
    vm.runInContext(fs.readFileSync(path.join(__dirname, "..", file), "utf8"), ctx);
    return ctx.window[key];
}
const LINKS = load("jlpt/data/n5-links.js", "JLPT_N5_LINKS");
const GRAMMAR = load("jlpt/data/n5-grammar.js", "JLPT_N5_GRAMMAR");
const LESSONS = load("assets/js/lessons-index.js", "LESSONS");
const Verbs = require("../assets/js/verbs.js");

// ids dos pontos de gramática de cada lição
const POINTS = {};
LESSONS.forEach((l) => {
    const d = load("lessons/data/" + l.file.replace(".html", ".js"), "lessonData");
    POINTS[l.number] = new Set(((d.gramatica || {}).points || []).map((p) => p.id));
});

test("todo par aponta para uma lição e um ponto que existem", () => {
    const pairs = [];
    Object.keys(LINKS.grammar).forEach((id) => LINKS.grammar[id].forEach((p) => pairs.push([id, p])));
    Object.keys(LINKS.forms).forEach((id) => pairs.push([id, LINKS.forms[id]]));
    pairs.forEach(([id, [n, pt]]) => {
        assert.ok(POINTS[n], id + ": lição " + n + " não existe");
        assert.ok(POINTS[n].has(pt), id + ": ponto «" + pt + "» não existe na lição " + n);
    });
});

test("os ids de cartões e de formas existem", () => {
    const cards = new Set(GRAMMAR.map((p) => p.id));
    Object.keys(LINKS.grammar).forEach((id) => assert.ok(cards.has(id), "cartão inexistente: " + id));
    const forms = new Set(Verbs.FORMS.map((f) => f.id));
    Object.keys(LINKS.forms).forEach((id) => assert.ok(forms.has(id), "forma inexistente: " + id));
});

test("cobertura: toda forma verbal e todo cartão (menos ね/よ) apontam para uma lição", () => {
    Verbs.FORMS.forEach((f) => assert.ok(LINKS.forms[f.id], "forma sem lição: " + f.id));
    GRAMMAR.filter((p) => p.id !== "ne-yo").forEach((p) => assert.ok(LINKS.grammar[p.id], "cartão sem lição: " + p.id));
});
