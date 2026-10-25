// Testes do desempenho (pontos fracos), do backup e das questões de escuta: node --test
"use strict";

const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const QB = require("../assets/js/question-bank.js");
const Stats = require("../assets/js/stats.js");
const Backup = require("../assets/js/backup.js");
const V = require("../assets/js/verbs.js");

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

/* ---------- escuta ---------- */

test("escuta: a certa é o significado do que se ouve e o áudio é só kana", () => {
    W.JLPT_N5_VERBS.forEach((v) => {
        const w = bank.get("lw:" + v.jp);
        assert.equal(w.options[w.answer], v.pt, v.jp);
        assert.equal(w.speak, V.reading(v.jp));
        assert.equal(w.heard, v.jp);
        if (v.ex) {
            const s = bank.get("ls:" + v.jp);
            assert.equal(s.options[s.answer], v.ex[1], v.jp);
            assert.equal(s.options.length, 4, v.jp + ": faltam alternativas");
        }
        [w.speak].concat(v.ex ? [bank.get("ls:" + v.jp).speak] : []).forEach((t) => {
            assert.ok(!/[一-鿿]/.test(t), v.jp + ": kanji no texto falado");
            assert.ok(!/[\^{}| ]/.test(t), v.jp + ": marcador no texto falado: " + t);
        });
    });
});

test("escuta: o falado trata は e へ como partículas (wa, e)", () => {
    assert.equal(QB.spoken("{学校|がっこう}^へ {行|い}きます。"), "がっこうえいきます。");
    assert.equal(QB.spoken("{今日|きょう}^は {暑|あつ}いです。"), "きょうわあついです。");
});

/* ---------- desempenho ---------- */

function attempt(id, kind, startedAt, results, extra) {
    return Object.assign({
        id, kind, startedAt, seconds: 60,
        items: results.map(([q, ok]) => ({ q, a: ok ? 0 : 1, ok })),
        score: { correct: results.filter((r) => r[1]).length, total: results.length }
    }, extra || {});
}

test("Stats: totais, temas e ignorar questões que saíram do banco", () => {
    const doc = { list: [
        attempt("2", "practice", "2026-10-22T10:00:00Z", [["q:wa-topico", true], ["q:ga-existencia", false], ["q:removida", false]]),
        attempt("1", "practice", "2026-10-21T10:00:00Z", [["q:wa-topico", false]])
    ] };
    const s = Stats.compute(doc, bank);
    assert.equal(s.attempts, 2);
    assert.equal(s.answered, 3, "a questão removida não conta");
    assert.equal(s.correct, 1);
    assert.equal(s.pct, 33);
    assert.deepEqual(s.topics.gramatica, { correct: 1, total: 3 });
    assert.deepEqual(Stats.compute(null, bank).topics, {});
    assert.equal(Stats.compute({ list: [] }, bank).pct, 0);
});

test("Stats: pontos de gramática fracos (mín. 2 respostas, abaixo de 70%)", () => {
    const doc = { list: [
        attempt("3", "practice", "2026-10-23T10:00:00Z", [["q:wa-topico", false], ["q:ni-hora", true]]),
        attempt("2", "practice", "2026-10-22T10:00:00Z", [["q:wa-topico", false], ["q:ni-hora", true]]),
        attempt("1", "practice", "2026-10-21T10:00:00Z", [["q:ga-existencia", false]])
    ] };
    const refs = Stats.compute(doc, bank).weakRefs;
    assert.deepEqual(refs.map((r) => r.ref), ["wa"], "ni foi bem; ga só tem 1 resposta");
    assert.equal(refs[0].pct, 0);
    assert.equal(refs[0].total, 2);
});

test("Stats: questões para insistir", () => {
    const doc = { list: [
        attempt("4", "practice", "2026-10-24T10:00:00Z", [["q:wa-topico", false], ["q:ni-hora", true], ["q:ga-existencia", false]]),
        attempt("3", "practice", "2026-10-23T10:00:00Z", [["q:wa-topico", false], ["q:ni-hora", false], ["q:ga-existencia", true]]),
        attempt("2", "practice", "2026-10-22T10:00:00Z", [["q:wa-topico", true], ["q:ni-hora", true], ["q:ga-existencia", false]]),
        attempt("1", "practice", "2026-10-21T10:00:00Z", [["q:ni-hora", false]])
    ] };
    const weak = Stats.compute(doc, bank).weakIds;
    assert.ok(weak.includes("q:wa-topico"), "errou 2 das 3 últimas");
    assert.ok(weak.includes("q:ga-existencia"), "errou a última e já tinha errado antes");
    assert.ok(!weak.includes("q:ni-hora"), "acertou as duas últimas");
});

test("Stats: evolução dos simulados, do mais antigo ao mais novo, até 10", () => {
    const list = [];
    for (let i = 12; i >= 1; i--) {
        list.push(attempt(String(i), "mock", "2026-10-" + String(10 + i) + "T10:00:00Z", [["q:wa-topico", true]],
            { size: "short", score: { correct: i, total: 18, knowledge: i * 5, listening: i % 2 ? null : 30, totalEstimate: null } }));
    }
    list.push(attempt("p", "practice", "2026-10-30T10:00:00Z", [["q:wa-topico", true]]));
    const t = Stats.compute({ list }, bank).trend;
    assert.equal(t.length, 10);
    assert.equal(t[0].id, "3");
    assert.equal(t[9].id, "12");
    assert.equal(t[9].knowledge, 60);
    assert.equal(t[9].listening, 30);
    assert.equal(t[8].listening, null);
});

/* ---------- backup ---------- */

const GOOD_ATTEMPT = attempt("a1", "mock", "2026-10-22T10:00:00Z", [["q:wa-topico", true], ["vte:{書|か}く", false]], { size: "short" });
const STORE = {
    prefs: { furigana: "touch", theme: "dark", updatedAt: "2026-10-20T00:00:00Z" },
    progress: { lessons: { 16: { sections: { gramatica: "done" }, exercises: { "renshuuB:0:1": { correct: true, attempts: 2 } }, updatedAt: "2026-10-19T00:00:00Z" } },
                kanji: { N5: { "食": { known: true, updatedAt: "2026-10-18T00:00:00Z" } } }, updatedAt: "2026-10-19T00:00:00Z" },
    attempts: { list: [GOOD_ATTEMPT] },
    mockdraft: { active: true, ids: ["x"] }
};

test("Backup.build leva só prefs, progress e attempts", () => {
    const b = Backup.build((k) => STORE[k], Date.UTC(2026, 9, 24, 12, 0, 0));
    assert.equal(b.app, "minna-no-nihongo");
    assert.equal(b.version, 1);
    assert.equal(b.exportedAt, "2026-10-24T12:00:00.000Z");
    assert.deepEqual(Object.keys(b.data).sort(), ["attempts", "prefs", "progress"]);
    assert.equal(Backup.build(() => null).data.prefs, undefined);
});

test("Backup: exportar e importar de volta dá o mesmo conteúdo", () => {
    const text = JSON.stringify(Backup.build((k) => STORE[k]));
    const r = Backup.parse(text);
    assert.equal(r.ok, true);
    assert.deepEqual(r.data.attempts, STORE.attempts);
    assert.deepEqual(r.data.progress, STORE.progress);
    assert.deepEqual(r.data.prefs, STORE.prefs);
    assert.deepEqual(r.summary, { attempts: 1, mocks: 1, lessons: 1, kanji: 1, prefs: true });
    assert.equal(r.dropped, 0);
});

test("Backup.parse recusa o que não é um backup válido (com mensagem)", () => {
    const bad = (t) => { const r = Backup.parse(t); assert.equal(r.ok, false, String(t).slice(0, 40)); assert.ok(r.error); return r.error; };
    bad(""); bad(null); bad("não é json"); bad("[1,2]"); bad('{"app":"outro","version":1,"data":{}}');
    bad('{"app":"minna-no-nihongo","version":1}');
    bad('{"app":"minna-no-nihongo","version":1,"data":{}}');
    bad('{"app":"minna-no-nihongo","version":1,"data":{"desconhecida":{"a":1}}}');
    assert.match(bad('{"app":"minna-no-nihongo","version":2,"data":{"prefs":{}}}'), /mais nova/);
    bad("x".repeat(5000001));
});

test("Backup.parse só deixa passar chaves conhecidas, sem chaves perigosas, e descarta tentativas inválidas", () => {
    const evil = { app: "minna-no-nihongo", version: 1, data: {
        prefs: { theme: "dark", "__proto__": { polluted: true }, constructor: { x: 1 } },
        mockdraft: { active: true },
        window: { a: 1 },
        attempts: { list: [GOOD_ATTEMPT, { id: 5 }, null, { id: "x", kind: "mock", startedAt: "2026-10-01T00:00:00Z", items: [{ q: 1 }], score: {} },
                           Object.assign({}, GOOD_ATTEMPT, { id: "a2", kind: "outro" })] }
    } };
    const text = JSON.stringify(evil).replace('"constructor"', '"constructor"');
    const r = Backup.parse(JSON.stringify(JSON.parse(text)).replace('"theme":"dark"', '"theme":"dark","__proto__":{"polluted":true}'));
    assert.equal(r.ok, true);
    assert.deepEqual(Object.keys(r.data).sort(), ["attempts", "prefs"]);
    assert.equal(r.data.prefs.theme, "dark");
    assert.equal(Object.prototype.hasOwnProperty.call(r.data.prefs, "__proto__"), false);
    assert.equal(r.data.prefs.constructor, Object.prototype.constructor, "constructor próprio não pode existir");
    assert.equal({}.polluted, undefined, "o protótipo não pode ser poluído");
    assert.equal(r.data.attempts.list.length, 1);
    assert.equal(r.dropped, 4);
});

test("Backup.merge: tentativas por id, as 50 mais recentes", () => {
    const mk = (i) => attempt("t" + i, "practice", new Date(Date.UTC(2026, 9, 1, 0, i)).toISOString(), [["q:wa-topico", true]]);
    const local = { attempts: { list: [mk(60), mk(59), mk(58)] } };
    const incoming = { attempts: { list: [mk(58)].concat(Array.from({ length: 49 }, (_, i) => mk(i))) } };
    const m = Backup.merge(local, incoming).attempts.list;
    assert.equal(m.length, 50);
    assert.equal(m[0].id, "t60");
    assert.equal(new Set(m.map((a) => a.id)).size, 50);
    assert.deepEqual(Backup.merge({}, incoming).attempts, incoming.attempts, "sem nada local, vale o do arquivo");
});

test("Backup.merge: progresso mantém o que está concluído ou 'já sei' dos dois lados", () => {
    const local = { progress: {
        lessons: { 16: { sections: { gramatica: "done", vocab: "in_progress" }, exercises: { "r:0": { correct: true, attempts: 1 }, "r:1": { correct: false, attempts: 3 } }, updatedAt: "2026-10-22T00:00:00Z" } },
        kanji: { N5: { "食": { known: true, updatedAt: "2026-10-22T00:00:00Z" } } }, updatedAt: "2026-10-22T00:00:00Z" } };
    const incoming = { progress: {
        lessons: { 16: { sections: { gramatica: "in_progress", vocab: "done" }, exercises: { "r:1": { correct: true, attempts: 1 } }, updatedAt: "2026-10-20T00:00:00Z" },
                   17: { sections: { gramatica: "done" }, exercises: {}, updatedAt: "2026-10-20T00:00:00Z" } },
        kanji: { N5: { "水": { known: true, updatedAt: "2026-10-20T00:00:00Z" } } }, updatedAt: "2026-10-20T00:00:00Z" } };
    const p = Backup.merge(local, incoming).progress;
    assert.equal(p.lessons[16].sections.gramatica, "done");
    assert.equal(p.lessons[16].sections.vocab, "done");
    assert.deepEqual(p.lessons[16].exercises["r:1"], { correct: true, attempts: 3 });
    assert.deepEqual(p.lessons[16].exercises["r:0"], { correct: true, attempts: 1 });
    assert.ok(p.lessons[17]);
    assert.ok(p.kanji.N5["食"].known && p.kanji.N5["水"].known);
});

test("Backup.merge: preferências, o documento mais recente", () => {
    const older = { prefs: { theme: "light", updatedAt: "2026-10-01T00:00:00Z" } };
    const newer = { prefs: { theme: "dark", updatedAt: "2026-10-02T00:00:00Z" } };
    assert.equal(Backup.merge(older, newer).prefs.theme, "dark");
    assert.equal(Backup.merge(newer, older).prefs.theme, "dark");
    assert.deepEqual(Object.keys(Backup.merge({}, { prefs: { theme: "dark" } })), ["prefs"]);
    assert.deepEqual(Backup.merge({ prefs: { a: 1 } }, {}), {}, "chaves que o arquivo não tem ficam como estão");
});
