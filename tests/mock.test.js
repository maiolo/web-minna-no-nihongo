// Testes do simulado e dos trechos compartilhados da correção: node --test
"use strict";

const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const QB = require("../assets/js/question-bank.js");
const Mock = require("../assets/js/mock.js");
const QV = require("../assets/js/quiz-view.js");

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
const keyOf = (id) => id.slice(id.indexOf(":") + 1);

test("build: tamanhos, seções e quantidade por tema", () => {
    const full = Mock.build(bank, { size: "full", seed: 5 });
    assert.equal(full.ids.length, 34);
    assert.deepEqual(full.sections.map((s) => s.ids.length), [14, 20]);
    assert.equal(full.ids.length, Mock.totalFor("full"));
    const short = Mock.build(bank, { size: "short", seed: 5 });
    assert.equal(short.ids.length, Mock.totalFor("short"));
    assert.ok(short.ids.length < full.ids.length);

    const counts = {};
    full.ids.forEach((id) => { const t = bank.get(id).topic; counts[t] = (counts[t] || 0) + 1; });
    Mock.BLUEPRINT.forEach((sec) => sec.parts.forEach((p) => assert.equal(counts[p.topic], p.n, p.topic)));
});

test("build: sem ids repetidos, sem o mesmo verbo ou kanji duas vezes, cada questão na seção certa", () => {
    for (let seed = 1; seed <= 20; seed++) {
        const plan = Mock.build(bank, { size: "full", seed });
        assert.equal(new Set(plan.ids).size, plan.ids.length, "id repetido, seed " + seed);
        assert.equal(new Set(plan.ids.map(keyOf)).size, plan.ids.length, "mesmo item repetido, seed " + seed);
        plan.sections.forEach((sec) => sec.ids.forEach((id) => assert.equal(Mock.sectionOf(bank.get(id).topic), sec.id)));
    }
});

test("build: determinístico por semente; sementes diferentes dão provas diferentes; avoid afasta o que passou", () => {
    const a = Mock.build(bank, { size: "full", seed: 11 });
    assert.deepEqual(a, Mock.build(bank, { size: "full", seed: 11 }));
    assert.notDeepEqual(a.ids, Mock.build(bank, { size: "full", seed: 12 }).ids);
    const b = Mock.build(bank, { size: "full", seed: 11, avoid: a.ids });
    const overlap = b.ids.filter((id) => a.ids.includes(id)).length;
    assert.ok(overlap < a.ids.length / 2, "avoid quase não afastou: " + overlap);
    assert.equal(Mock.build(bank, { size: "inexistente", seed: 1 }).size, "full");
});

test("toda questão do simulado existe no banco", () => {
    Mock.build(bank, { size: "full", seed: 99 }).ids.forEach((id) => assert.ok(bank.get(id), id));
});

test("summarize: tudo certo = 120, tudo errado ou em branco = 0, e o resto é proporcional", () => {
    const ids = Mock.build(bank, { size: "full", seed: 3 }).ids;
    const right = Mock.summarize(bank, ids.map((id) => ({ id, chosen: bank.get(id).answer })));
    assert.equal(right.correct, 34); assert.equal(right.knowledge, 120); assert.equal(right.estimated, true); assert.equal(right.blank, 0);

    const blank = Mock.summarize(bank, ids.map((id) => ({ id, chosen: null })));
    assert.equal(blank.correct, 0); assert.equal(blank.knowledge, 0); assert.equal(blank.blank, 34);

    const half = Mock.summarize(bank, ids.map((id, i) => ({ id, chosen: i % 2 === 0 ? bank.get(id).answer : null })));
    assert.equal(half.correct, 17); assert.equal(half.knowledge, 60); assert.equal(half.blank, 17);
});

test("summarize: seções e temas somam o total e os acertos", () => {
    const plan = Mock.build(bank, { size: "full", seed: 4 });
    const items = plan.ids.map((id, i) => ({ id, chosen: i % 3 === 0 ? (bank.get(id).answer + 1) % bank.get(id).options.length : bank.get(id).answer }));
    const s = Mock.summarize(bank, items);
    const sum = (obj, k) => Object.keys(obj).reduce((n, key) => n + obj[key][k], 0);
    assert.equal(sum(s.sections, "total"), s.total);
    assert.equal(sum(s.sections, "correct"), s.correct);
    assert.equal(sum(s.topics, "total"), s.total);
    assert.equal(sum(s.topics, "correct"), s.correct);
    assert.equal(s.sections.vocab.total, 14);
    assert.equal(s.sections.gramatica.total, 20);
});

test("verdict: o mínimo oficial de língua e leitura é 38 de 120", () => {
    assert.equal(Mock.OFFICIAL.knowledgeMin, 38);
    assert.equal(Mock.verdict({ knowledge: 38 }).aboveMin, true);
    assert.equal(Mock.verdict({ knowledge: 37 }).aboveMin, false);
    assert.equal(Mock.verdict({ knowledge: 120 }).min, 38);
});

test("rascunho: criação, resposta sem alterar o original, tempo restante", () => {
    const plan = Mock.build(bank, { size: "short", seed: 2 });
    const t0 = Date.UTC(2026, 9, 23, 12, 0, 0);
    const draft = Mock.newDraft(plan, { timed: true }, t0);
    assert.equal(draft.active, true);
    assert.equal(draft.answers.length, plan.ids.length);
    assert.ok(draft.answers.every((a) => a === null));
    assert.equal(draft.deadline, t0 + 15 * 60000);

    const next = Mock.setAnswer(draft, 2, 1);
    assert.equal(next.answers[2], 1);
    assert.equal(draft.answers[2], null, "o original não pode mudar");
    assert.equal(Mock.setAnswer(next, 2, null).answers[2], null);

    assert.equal(Mock.remainingMs(draft, t0 + 60000), 14 * 60000);
    assert.equal(Mock.remainingMs(draft, t0 + 99 * 60000), 0);
    const untimed = Mock.newDraft(plan, { timed: false }, t0);
    assert.equal(untimed.deadline, null);
    assert.equal(Mock.remainingMs(untimed, t0 + 99 * 60000), null);
    assert.equal(Mock.newDraft(Mock.build(bank, { size: "full", seed: 2 }), {}, t0).deadline, t0 + 30 * 60000);
});

test("formatClock", () => {
    assert.equal(Mock.formatClock(0), "00:00");
    assert.equal(Mock.formatClock(61000), "01:01");
    assert.equal(Mock.formatClock(30 * 60000), "30:00");
    assert.equal(Mock.formatClock(1), "00:01", "arredonda para cima: nunca mostra 00:00 com tempo sobrando");
});

test("sectionOf conhece todos os temas da prova e nada mais", () => {
    ["kanji-leitura", "kanji-significado", "verbo-significado"].forEach((t) => assert.equal(Mock.sectionOf(t), "vocab"));
    ["gramatica", "verbo-forma", "verbo-grupo"].forEach((t) => assert.equal(Mock.sectionOf(t), "gramatica"));
    assert.equal(Mock.sectionOf("outro"), null);
});

/* ---------- quiz-view ---------- */

test("QuizView.esc e rubyText", () => {
    assert.equal(QV.esc('<a href="x">&</a>'), "&lt;a href=&quot;x&quot;&gt;&amp;&lt;/a&gt;");
    assert.equal(QV.rubyText("{食|た}べる ^は"), "<ruby>食<rt>た</rt></ruby>べる は");
    assert.ok(!QV.rubyText("<img src=x onerror=1>").includes("<img"), "HTML cru não pode passar");
});

test("QuizView.sentenceHtml: lacuna vazia e preenchida", () => {
    const q = { sentence: "{私|わたし}＿＿ {学生|がくせい}です。" };
    assert.match(QV.sentenceHtml(q, null), /class="blank"[^>]*>＿＿</);
    assert.match(QV.sentenceHtml(q, "は"), /class="blank filled">は</);
    assert.ok(QV.sentenceHtml(q, "は").includes("<ruby>私<rt>わたし</rt></ruby>"));
});

test("QuizView.linkFor aponta para a página certa", () => {
    assert.match(QV.linkFor({ ref: "wa", topic: "gramatica" }), /n5-grammar\.html#wa/);
    assert.match(QV.linkFor({ topic: "verbo-forma" }), /n5-verbs\.html/);
    assert.match(QV.linkFor({ topic: "kanji-leitura" }), /n5-kanji\.html/);
});

test("QuizView.reviewItem: certa, errada e em branco", () => {
    const q = bank.get("q:wa-topico");
    const ok = QV.reviewItem(q, q.answer);
    assert.match(ok, /review-item ok/);
    assert.ok(!/ open/.test(ok.split(">")[0]), "certa vem fechada por padrão");
    const bad = QV.reviewItem(q, (q.answer + 1) % q.options.length);
    assert.match(bad, /review-item bad" open/);
    assert.match(bad, /Certa:/);
    const blank = QV.reviewItem(q, null);
    assert.match(blank, /review-item blank" open/);
    assert.match(blank, /em branco/);
    assert.equal(QV.statusOf(q, q.answer), "ok");
    assert.equal(QV.reviewItem(q, q.answer, { open: true }).includes('" open'), true);
    assert.match(QV.reviewItem(q, q.answer, { number: 7 }), /<span class="review-num">7<\/span>/);
    assert.ok(!QV.reviewItem(q, q.answer).includes("review-num"));
});

test("QuizView.reviewItem funciona para toda questão do banco, em qualquer resposta", () => {
    bank.ids().forEach((id) => {
        const q = bank.get(id);
        [null, 0, q.options.length - 1].forEach((c) => {
            const html = QV.reviewItem(q, c);
            assert.ok(html.includes(QV.rubyText(q.explain)), id + ": sem explicação");
            assert.ok(!html.includes("undefined"), id + ": 'undefined' no HTML");
        });
    });
});
