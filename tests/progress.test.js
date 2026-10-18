// Testes do progresso do aluno: node --test
"use strict";

const test = require("node:test");
const assert = require("node:assert/strict");
const { createStore } = require("../assets/js/store.js");
const { createProgress, sanitize } = require("../assets/js/progress.js");

function setup() {
    const data = {};
    const storage = {
        getItem: (k) => (k in data ? data[k] : null),
        setItem: (k, v) => { data[k] = String(v); },
        removeItem: (k) => { delete data[k]; }
    };
    const store = createStore({ storage, now: () => "2026-10-18T10:00:00Z" });
    return { store, progress: createProgress(store, () => "2026-10-18T10:00:00Z") };
}

test("sem dados, tudo é 'todo' e não há onde continuar", () => {
    const { progress } = setup();
    assert.equal(progress.sectionStatus(17, "vocab"), "todo");
    assert.equal(progress.last(), null);
    assert.deepEqual(progress.lessonSummary(17, ["vocab", "gramatica"]),
        { done: 0, total: 2, percent: 0, status: "todo" });
});

test("visit marca em andamento e lembra a última seção, sem rebaixar uma seção concluída", async () => {
    const { progress } = setup();
    await progress.visit(17, "vocab");
    assert.equal(progress.sectionStatus(17, "vocab"), "in_progress");
    assert.deepEqual(progress.last(), { type: "lesson", id: 17, section: "vocab" });
    await progress.setSection(17, "vocab", true);
    await progress.visit(17, "vocab");
    assert.equal(progress.sectionStatus(17, "vocab"), "done");
});

test("setSection conclui e desmarca", async () => {
    const { progress } = setup();
    await progress.setSection(17, "bunkei", true);
    assert.equal(progress.sectionStatus(17, "bunkei"), "done");
    await progress.setSection(17, "bunkei", false);
    assert.equal(progress.sectionStatus(17, "bunkei"), "in_progress");
});

test("recordAnswer conta tentativas e uma resposta certa nunca volta a errada", async () => {
    const { progress } = setup();
    await progress.recordAnswer(17, "renshuuB", "renshuuB:0:0", false);
    await progress.recordAnswer(17, "renshuuB", "renshuuB:0:0", true);
    await progress.recordAnswer(17, "renshuuB", "renshuuB:0:0", false);
    const ex = progress.get().lessons[17].exercises["renshuuB:0:0"];
    assert.deepEqual(ex, { correct: true, attempts: 3 });
    assert.equal(progress.correctCount(17, "renshuuB"), 1);
    assert.equal(progress.correctCount(17, "renshuuA"), 0);
});

test("lessonSummary: em andamento e concluída", async () => {
    const { progress } = setup();
    const ids = ["vocab", "gramatica"];
    await progress.visit(17, "vocab");
    assert.equal(progress.lessonSummary(17, ids).status, "in_progress");
    await progress.setSection(17, "vocab", true);
    await progress.setSection(17, "gramatica", true);
    assert.deepEqual(progress.lessonSummary(17, ids), { done: 2, total: 2, percent: 100, status: "done" });
});

test("não grava de novo quando nada mudou", async () => {
    const { store, progress } = setup();
    await progress.setSection(17, "vocab", true);
    const first = store.peek("progress");
    await progress.setSection(17, "vocab", true);
    assert.deepEqual(store.peek("progress"), first);
});

test("sanitize tolera lixo e descarta 'last' inválido", () => {
    assert.deepEqual(sanitize(null), { lessons: {} });
    assert.deepEqual(sanitize({ lessons: [], last: { type: "x" } }), { lessons: {} });
    assert.equal(sanitize({ lessons: {}, last: { type: "lesson", id: 3, section: "vocab" } }).last.id, 3);
});

test("clear apaga o progresso", async () => {
    const { progress } = setup();
    await progress.setSection(17, "vocab", true);
    await progress.clear();
    assert.equal(progress.sectionStatus(17, "vocab"), "todo");
    assert.equal(progress.last(), null);
});
