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
const W = load(["jlpt/data/n5-kanji-1.js", "jlpt/data/n5-kanji-2.js", "jlpt/data/n5-kanji-3.js", "jlpt/data/n5-exam-vocab.js", "jlpt/data/n5-exam-bunpo.js", "jlpt/data/n5-exam-choukai.js"]);
const EXAM = W.JLPT_N5_EXAM;
const KNOWN = W.JLPT_N5_KANJI.map((e) => e.k).join("");
const bank = QB.create({ verbs: [], kanji: [], grammar: [], exam: EXAM });
const KANJI = /[一-鿿]/;
const textsOf = (kind, it) => {
    if (kind === "text") return [it.text].concat(it.blanks.reduce((a, b) => a.concat(b.a, b.w), []));
    if (kind === "mid") return [it.text].concat(it.qs.reduce((a, q) => a.concat(q.q, q.a, q.w), []));
    if (kind === "search") return [it.lead, it.q, it.a].concat(it.w, it.table.head, it.table.rows.reduce((a, r) => a.concat(r), []));
    if (kind === "order") return [it.pre, it.post].concat(it.parts);
    if (kind === "short") return [it.text, it.q, it.a].concat(it.w);
    if (kind === "task" || kind === "point") return [it.q, it.a].concat(it.script, it.w);
    if (kind === "utter") return [it.say, it.a].concat(it.w);
    if (kind === "quick") return [it.say, it.a].concat(it.w);
    return [it.s, it.a].concat(it.w || []);
};
QV.setKnown(KNOWN);

const items = Object.keys(EXAM).reduce((all, k) => all.concat(EXAM[k].map((it) => ({ kind: k, it }))), []);
const ITEM_COUNT = items.reduce((n, x) => n + (x.kind === "text" ? x.it.blanks.length : x.kind === "mid" ? x.it.qs.length : 1), 0);

test("há questões de sobra para cada mondai da prova (12, 8, 10 e 5)", () => {
    assert.ok(EXAM.yomi.length >= 36 && EXAM.hyouki.length >= 24 && EXAM.bunmyaku.length >= 30 && EXAM.iikae.length >= 15,
        [EXAM.yomi.length, EXAM.hyouki.length, EXAM.bunmyaku.length, EXAM.iikae.length].join(","));
});

test("ids únicos e no formato esperado", () => {
    const ids = items.map((x) => x.it.id);
    assert.equal(new Set(ids).size, ids.length);
    ids.forEach((id) => assert.match(id, /^[yhbigotrskpuq]\d\d$/));
});

test("todo texto usa só kanji do N5 com furigana na notação (o resto vai em hiragana, como na prova)", () => {
    items.forEach(({ kind, it }) => {
        // escrita (hyouki): as alternativas erradas são kanji parecidos de propósito, sem furigana
        const texts = textsOf(kind, it).filter(Boolean).filter((t) => kind !== "hyouki" || !it.w.includes(t));
        texts.forEach((t) => {
            assert.ok(!KANJI.test(t.replace(/\{[^}]*\}/g, "")), it.id + ": kanji sem notação em " + t);
            (t.match(/\{([^|}]+)\|/g) || []).forEach((m) => {
                m.slice(1, -1).split("").forEach((c) => assert.ok(!KANJI.test(c) || KNOWN.includes(c), it.id + ": kanji fora do N5 (" + c + ") em " + t));
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
    assert.equal(bank.ids().length, ITEM_COUNT);
    bank.ids().forEach((id) => {
        const q = bank.get(id);
        assert.deepEqual(q, bank.get(id));
        const n = q.hideOptions ? 3 : 4;
        assert.equal(q.options.length, n, id);
        assert.equal(new Set(q.options).size, n, id);
        assert.ok(q.answer >= 0 && q.answer < n, id);
        assert.ok(q.exam && q.exam.mondai >= 1 && q.exam.mondai <= 6, id);
        assert.ok((q.sentence || q.passage || q.question || q.speak) && q.explain, id);
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
    assert.equal(Mock.buildReal(bank, { parts: ["xyz"], seed: 1 }).ids.length, 0, "parte inexistente não entra");
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
    assert.equal(real.length, 14);
    real.forEach((t) => assert.ok(t.label && bank.ids(t.id).length > 0));
});

test("bunpo: dados de cada tipo de questão estão completos", () => {
    EXAM.grammar1.forEach((it) => {
        assert.equal((it.s.match(/＿＿/g) || []).length, 1, it.id);
        assert.equal(new Set([it.a].concat(it.w)).size, 4, it.id);
        assert.ok(it.why.length > 10, it.id);
    });
    EXAM.order.forEach((it) => {
        assert.equal(it.parts.length, 4, it.id);
        assert.equal(new Set(it.parts.map((p) => N.plainText(p))).size, 4, it.id + ": peças repetidas");
        assert.ok(it.why.includes("★"), it.id);
        const q = bank.get("ex:" + it.id);
        assert.equal(q.options[q.answer], it.parts[2], it.id + ": ★ é a 3ª peça");
        assert.match(q.sentence, /□ □ ★ □/, it.id);
    });
    EXAM.text.forEach((it) => {
        for (let n = 1; n <= 5; n++) assert.equal((it.text.match(new RegExp("［" + n + "］", "g")) || []).length, 1, it.id + " lacuna " + n);
        assert.equal(it.blanks.length, 5, it.id);
        it.blanks.forEach((b, i) => assert.equal(new Set([b.a].concat(b.w)).size, 4, it.id + ":" + (i + 1)));
    });
    EXAM.short.forEach((it) => { assert.ok(it.q && it.text, it.id); assert.equal(new Set([it.a].concat(it.w)).size, 4, it.id); });
    EXAM.mid.forEach((it) => {
        assert.equal(it.qs.length, 2, it.id);
        assert.ok(it.text.length >= 150, it.id + ": texto médio curto demais (" + it.text.length + ")");
        it.qs.forEach((q, i) => assert.equal(new Set([q.a].concat(q.w)).size, 4, it.id + ":" + (i + 1)));
    });
    EXAM.search.forEach((it) => {
        it.table.rows.forEach((r) => assert.equal(r.length, it.table.head.length, it.id));
        assert.equal(new Set([it.a].concat(it.w)).size, 4, it.id);
    });
});

test("quantidade suficiente para cada mondai de gramática e leitura (16, 5, 5, 3, 2 e 1)", () => {
    assert.ok(EXAM.grammar1.length >= 32 && EXAM.order.length >= 10 && EXAM.text.length >= 2 && EXAM.short.length >= 6 && EXAM.mid.length >= 2 && EXAM.search.length >= 2);
});

test("buildReal da parte de gramática e leitura: 32 questões, textos inteiros e na ordem dos mondai", () => {
    const plan = Mock.buildReal(bank, { parts: ["bunpo"], seed: 9 });
    assert.deepEqual(plan.parts, ["bunpo"]);
    assert.deepEqual(plan.sections[0].mondai.map((m) => m.ids.length), [16, 5, 5, 3, 2, 1]);
    assert.equal(plan.ids.length, 32);
    assert.equal(new Set(plan.ids).size, 32);
    const g3 = plan.sections[0].mondai[2].ids;
    assert.equal(new Set(g3.map((id) => id.split(":")[1])).size, 1, "um texto só");
    assert.deepEqual(g3.map((id) => id.split(":")[2]), ["1", "2", "3", "4", "5"]);
    const r5 = plan.sections[0].mondai[4].ids;
    assert.equal(new Set(r5.map((id) => id.split(":")[1])).size, 1);
    assert.deepEqual(plan, Mock.buildReal(bank, { parts: ["bunpo"], seed: 9 }));
    assert.equal(Mock.realMinutes(["moji", "bunpo"]), 60);
});

test("com as duas partes de língua e leitura há nota estimada de 0 a 120 (sem escuta, sem total)", () => {
    const plan = Mock.buildReal(bank, { parts: ["moji", "bunpo"], seed: 4 });
    assert.equal(plan.ids.length, 67);
    const all = Mock.summarize(bank, plan.ids.map((id) => ({ id, chosen: bank.get(id).answer })));
    assert.equal(all.knowledge, 120);
    assert.equal(all.listening, null);
    assert.equal(all.totalEstimate, null);
    const half = Mock.summarize(bank, plan.ids.map((id, i) => ({ id, chosen: i < 34 ? bank.get(id).answer : null })));
    assert.equal(half.knowledge, Math.round(120 * 34 / 67));
});

test("QuizView: texto com lacuna em destaque, tabela, pergunta e correção de leitura", () => {
    const g3 = bank.get("ex:t01:3");
    const html = QV.examPassageHtml(g3, false);
    assert.match(html, /<span class="p-blank is-current">［3］<\/span>/);
    assert.match(html, /<span class="p-blank">［1］<\/span>/);
    const tab = QV.examPassageHtml(bank.get("ex:s01"), false);
    assert.match(tab, /<table class="exam-table">/);
    assert.match(tab, /17:00 - 19:00/);
    assert.match(QV.examPassageHtml(bank.get("ex:r01"), false), /exam-question/);
    const order = bank.get("ex:o01");
    assert.match(QV.examSentenceHtml(order, false), /o-star/);
    const r = QV.reviewItem(bank.get("ex:r11:1"), null);
    assert.match(r, /exam-passage/);
    assert.match(r, /em branco/);
});

test("escuta: dados completos (4 alternativas nas tarefas e pontos, 3 nas falas e respostas)", () => {
    ["task", "point"].forEach((k) => EXAM[k].forEach((it) => {
        assert.equal(new Set([it.a].concat(it.w)).size, 4, it.id);
        assert.ok(it.q && it.script.length >= 2 && it.why, it.id);
        it.script.forEach((l) => assert.match(l, /^[♀♂] /, it.id));
    }));
    ["utter", "quick"].forEach((k) => EXAM[k].forEach((it) => {
        assert.equal(new Set([it.a].concat(it.w)).size, 3, it.id);
        assert.ok(it.say && it.why, it.id);
    }));
    EXAM.utter.forEach((it) => assert.ok(it.scene, it.id));
    assert.ok(EXAM.task.length >= 7 && EXAM.point.length >= 6 && EXAM.utter.length >= 5 && EXAM.quick.length >= 6);
});

test("Speech.segments: pausas e tom de quem fala", () => {
    const Sp = require("../assets/js/speech.js");
    const segs = Sp.segments("ぜんぶ¦¦♀はい。¦♂いいえ。");
    assert.ok(segs.length >= 3);
    assert.ok(segs.some((x) => x.pitch && x.pitch > 1) && segs.some((x) => x.pitch && x.pitch < 1));
});

test("escuta: monta 24 questões (7/6/5/6) e a prova completa tem 91 questões, 90 min e nota 180", () => {
    const plan = Mock.buildReal(bank, { parts: ["choukai"], seed: 3 });
    assert.equal(plan.ids.length, 24);
    assert.deepEqual(plan.sections[0].mondai.map((m) => m.ids.length), [7, 6, 5, 6]);
    plan.ids.forEach((id) => assert.ok(bank.get(id).speak, id));
    assert.ok(bank.get(plan.sections[0].mondai[2].ids[0]).hideOptions);
    const full = Mock.buildReal(bank, { parts: ["moji", "bunpo", "choukai"], seed: 5 });
    assert.equal(full.ids.length, 91);
    assert.equal(Mock.realMinutes(["moji", "bunpo", "choukai"]), 90);
    const all = Mock.summarize(bank, full.ids.map((id) => ({ id, chosen: bank.get(id).answer })));
    assert.equal(all.knowledge, 120);
    assert.equal(all.listening, 60);
    assert.equal(all.totalEstimate, 180);
    assert.ok(Mock.verdict(all).passEstimate !== undefined);
});

test("QuizView: transcrição da escuta com 女 e 男", () => {
    const html = QV.examScriptHtml(bank.get("ex:k01"));
    assert.match(html, /exam-script/);
    assert.match(html, /<b class="who">[女男]<\/b>/);
});
