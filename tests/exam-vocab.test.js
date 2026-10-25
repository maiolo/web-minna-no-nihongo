// Testes do simulado no formato da prova JLPT (vocabulário): dados, geração, montagem e renderização. node --test
"use strict";

const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const QB = require("../assets/js/question-bank.js");
const Mock = require("../assets/js/mock.js");
const QV = require("../assets/js/quiz-view.js");
const N = require("../assets/js/notation.js");

function load(files) {
    const ctx = { window: {} };
    ctx.window.window = ctx.window;
    vm.createContext(ctx);
    files.forEach((f) => vm.runInContext(fs.readFileSync(path.join(__dirname, "..", f), "utf8"), ctx));
    return ctx.window;
}
const W = load(["jlpt/data/n5-kanji-1.js", "jlpt/data/n5-kanji-2.js", "jlpt/data/n5-kanji-3.js", "jlpt/data/n5-exam-vocab.js"]);
const EXAM = W.JLPT_N5_EXAM;
const KNOWN = W.JLPT_N5_KANJI.map((e) => e.k).join("");
const bank = QB.create({ verbs: [], kanji: [], grammar: [], exam: EXAM });
const KANJI = /[一-鿿]/;
QV.setKnown(KNOWN);

const items = Object.keys(EXAM).reduce((all, k) => all.concat(EXAM[k].map((it) => ({ kind: k, it }))), []);

test("há questões de sobra para cada mondai da prova (12, 8, 10 e 5)", () => {
    assert.ok(EXAM.yomi.length >= 36 && EXAM.hyouki.length >= 24 && EXAM.bunmyaku.length >= 30 && EXAM.iikae.length >= 15,
        [EXAM.yomi.length, EXAM.hyouki.length, EXAM.bunmyaku.length, EXAM.iikae.length].join(","));
});

test("ids únicos e no formato esperado", () => {
    const ids = items.map((x) => x.it.id);
    assert.equal(new Set(ids).size, ids.length);
    ids.forEach((id) => assert.match(id, /^[yhbi]\d\d$/));
});

test("todo texto usa só kanji do N5 com furigana na notação (o resto vai em hiragana, como na prova)", () => {
    items.forEach(({ it }) => {
        const texts = [it.s].concat(it.a ? [it.a] : [], it.kind === "iikae" ? it.w : []);
        texts.forEach((t) => {
            assert.ok(!KANJI.test(t.replace(/\{[^}]*\}/g, "")), it.id + ": kanji sem notação em " + t);
            (t.match(/\{([^|}]+)\|/g) || []).forEach((m) => {
                m.slice(1, -1).split("").forEach((c) => assert.ok(KNOWN.includes(c), it.id + ": kanji fora do N5 (" + c + ") em " + t));
            });
        });
    });
});

test("yomi: um trecho sublinhado, 3 leituras erradas em hiragana, nenhuma igual à certa", () => {
    EXAM.yomi.forEach((it) => {
        assert.equal((it.s.match(/\*/g) || []).length, 2, it.id + ": precisa de um trecho sublinhado");
        assert.equal(it.w.length, 3, it.id);
        const right = N.readingText(/\*([^*]+)\*/.exec(it.s)[1]);
        assert.ok(!it.w.includes(right), it.id + ": errada igual à certa");
        assert.equal(new Set(it.w).size, 3, it.id + ": erradas repetidas");
        [right].concat(it.w).forEach((r) => assert.match(r, /^[ぁ-ゖー]+$/, it.id + ": não é hiragana: " + r));
    });
});

test("hyouki: trecho em hiragana, escrita certa e 3 erradas diferentes", () => {
    EXAM.hyouki.forEach((it) => {
        const word = /\*([^*]+)\*/.exec(it.s)[1];
        assert.match(word, /^[ぁ-ゖー]+$/, it.id + ": o sublinhado deve ser só hiragana");
        assert.equal(N.readingText(it.a), word, it.id + ": a escrita certa não lê " + word);
        assert.equal(it.w.length, 3);
        assert.equal(new Set(it.w.concat(N.plainText(it.a))).size, 4, it.id + ": alternativas repetidas");
    });
});

test("bunmyaku e iikae: formato certo, 4 alternativas diferentes e explicação", () => {
    EXAM.bunmyaku.forEach((it) => {
        assert.equal((it.s.match(/＿＿/g) || []).length, 1, it.id);
        assert.equal(new Set([it.a].concat(it.w)).size, 4, it.id);
        assert.ok(it.why.length > 10, it.id);
    });
    EXAM.iikae.forEach((it) => {
        assert.equal((it.s.match(/\*/g) || []).length, 2, it.id);
        assert.equal(new Set([it.a].concat(it.w)).size, 4, it.id);
        assert.ok(it.why.length > 10, it.id);
    });
});

test("o banco monta todas as questões, sempre iguais, com resposta válida", () => {
    assert.equal(bank.ids().length, items.length);
    bank.ids().forEach((id) => {
        const q = bank.get(id);
        assert.deepEqual(q, bank.get(id));
        assert.equal(q.options.length, 4, id);
        assert.equal(new Set(q.options).size, 4, id);
        assert.ok(q.answer >= 0 && q.answer < 4, id);
        assert.ok(q.exam && q.exam.mondai >= 1 && q.exam.mondai <= 4, id);
        assert.ok(q.sentence && q.explain, id);
        assert.equal(q.prompt, undefined, id + ": o enunciado vem do mondai");
    });
    const y = bank.get("ex:y01");
    assert.equal(y.options[y.answer], "がっこう");
    const h = bank.get("ex:h21");
    assert.equal(N.plainText(h.options[h.answer]), "電車");
});

test("a alternativa certa de leitura é a do furigana; de escrita, o kanji da palavra", () => {
    EXAM.yomi.forEach((it) => {
        const q = bank.get("ex:" + it.id);
        assert.equal(q.options[q.answer], N.readingText(/\*([^*]+)\*/.exec(it.s)[1]), it.id);
    });
    EXAM.bunmyaku.forEach((it) => { const q = bank.get("ex:" + it.id); assert.equal(q.options[q.answer], it.a); });
});

test("soundVariants: som duplo, vogal longa e dakuten", () => {
    const v = QB.soundVariants("がっこう");
    assert.ok(v.includes("がこう"), "tira o っ");
    assert.ok(v.includes("かっこう"), "tira o dakuten");
    assert.ok(!v.includes("がっこう"));
    assert.ok(QB.soundVariants("せんせい").includes("せんせ"), "vogal longa curta");
    assert.ok(QB.soundVariants("こんげつ").includes("こんけつ"));
});

test("Mock.REAL segue a prova oficial: 12 + 8 + 10 + 5 em 20 minutos", () => {
    const moji = Mock.REAL.sections.find((s) => s.id === "moji");
    assert.deepEqual(moji.mondai.map((m) => m.n), [12, 8, 10, 5]);
    assert.equal(moji.minutes, 20);
    assert.deepEqual(Mock.REAL.sections.map((s) => s.minutes), [20, 40, 30]);
    moji.mondai.forEach((m) => assert.match(m.instr, /えらんで ください。$/));
});

test("buildReal: ordem dos mondai, quantidades, sem repetir e determinístico", () => {
    const a = Mock.buildReal(bank, { parts: ["moji"], seed: 5 });
    assert.equal(a.format, "real");
    assert.deepEqual(a.parts, ["moji"]);
    assert.deepEqual(a.sections[0].mondai.map((m) => m.ids.length), [12, 8, 10, 5]);
    assert.equal(a.ids.length, 35);
    assert.equal(new Set(a.ids).size, 35);
    a.sections[0].mondai.forEach((m, i) => m.ids.forEach((id) => assert.equal(bank.get(id).exam.mondai, i + 1)));
    assert.deepEqual(a, Mock.buildReal(bank, { parts: ["moji"], seed: 5 }));
    assert.notDeepEqual(a.ids, Mock.buildReal(bank, { parts: ["moji"], seed: 6 }).ids);
    assert.equal(Mock.buildReal(bank, { parts: ["bunpo"], seed: 1 }).ids.length, 0, "parte ainda indisponível não entra");
    assert.equal(Mock.realMinutes(["moji"]), 20);
});

test("newDraft da prova real guarda formato, partes e prazo de 20 minutos", () => {
    const plan = Mock.buildReal(bank, { parts: ["moji"], seed: 2 });
    const d = Mock.newDraft(plan, { timed: true, furigana: false }, 1000000);
    assert.equal(d.format, "real");
    assert.deepEqual(d.parts, ["moji"]);
    assert.equal(d.deadline, 1000000 + 20 * 60000);
    assert.equal(d.furigana, false);
});

test("summarize da prova real: acertos por seção e mondai, sem nota com só uma parte", () => {
    const plan = Mock.buildReal(bank, { parts: ["moji"], seed: 3 });
    const items2 = plan.ids.map((id, i) => ({ id, chosen: i < 20 ? bank.get(id).answer : null }));
    const s = Mock.summarize(bank, items2);
    assert.equal(s.format, "real");
    assert.equal(s.correct, 20);
    assert.equal(s.total, 35);
    assert.equal(s.sections.moji.total, 35);
    assert.equal(s.mondai.m1.total, 12);
    assert.equal(s.mondai.m1.correct + s.mondai.m2.correct + s.mondai.m3.correct + s.mondai.m4.correct, 20);
    assert.equal(s.knowledge, null);
    assert.equal(s.totalEstimate, null);
    assert.equal(Mock.verdict(s).partial, true);
});

test("Notation.toExam: kanji do N5 sem furigana, o resto com, e furigana ligado mostra tudo", () => {
    const t = "*{学校|がっこう}*の {窓|まど}が ＿＿。";
    const plain = N.toExam(t, { known: KNOWN });
    assert.match(plain, /<u>学校<\/u>/);
    assert.ok(!plain.includes("<rt>がっこう</rt>"));
    assert.match(plain, /<ruby>窓<rt>まど<\/rt><\/ruby>/);
    assert.match(plain, /（　　）/);
    assert.match(N.toExam(t, { known: KNOWN, furigana: true }), /<ruby>学校<rt>がっこう<\/rt><\/ruby>/);
    assert.equal(N.toExam("<b>&", { known: KNOWN }), "&lt;b&gt;&amp;");
});

test("QuizView: enunciado em japonês com sublinhado em branco e correção com furigana", () => {
    const m = Mock.REAL.sections[0].mondai[0];
    const instr = QV.examInstruction(m);
    assert.match(instr, /<u class="blank-u">/);
    assert.ok(!/[一-鿿]/.test(instr.replace(/<[^>]+>/g, "")), "o enunciado não usa kanji");
    const q = bank.get("ex:y01");
    const right = QV.reviewItem(q, q.answer);
    assert.match(right, /review-item ok/);
    assert.match(right, /<ruby>学校<rt>がっこう<\/rt><\/ruby>/);
    const wrong = QV.reviewItem(q, (q.answer + 1) % 4);
    assert.match(wrong, /review-item bad/);
    assert.match(wrong, /lê-se がっこう/);
    assert.match(QV.reviewItem(q, null), /em branco/);
});

test("itens da prova não entram no treino (tema real) e têm rótulo", () => {
    const real = bank.topics.filter((t) => t.real);
    assert.deepEqual(real.map((t) => t.id).sort(), ["prova-bunmyaku", "prova-hyouki", "prova-iikae", "prova-yomi"]);
    real.forEach((t) => assert.ok(t.label && bank.ids(t.id).length > 0));
});
