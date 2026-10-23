/*
 * Simulado do JLPT (funções puras, testadas com node --test).
 *
 *   Mock.build(bank, { size, seed, avoid })     { size, seed, sections: [{ id, label, jp, ids }], ids }
 *   Mock.summarize(bank, items)                 correção e nota estimada; items = [{ id, chosen }]
 *   Mock.verdict(summary)                       leitura da nota em relação ao mínimo oficial
 *   Mock.newDraft(plan, { timed }, agora)       simulado em andamento (guardado no Store)
 *   Mock.setAnswer(draft, índice, escolha)      nova versão do rascunho com a resposta
 *   Mock.remainingMs(draft, agora)              tempo que falta (null se sem cronômetro)
 *   Mock.sectionOf(tema)                        id da seção a que o tema pertence
 *
 * A prova segue a ideia do N5 (palavras e gramática), mas é menor e SEM escuta por enquanto.
 * A nota é só uma ESTIMATIVA: a do JLPT é equalizada (depende da dificuldade de cada aplicação).
 * Aqui, língua e leitura = acertos/total x 120.
 */
(function (root) {
    "use strict";

    var QB = typeof module !== "undefined" && module.exports ? require("./question-bank.js") : root.QuestionBank;
    var Practice = typeof module !== "undefined" && module.exports ? require("./practice.js") : root.Practice;

    var BLUEPRINT = [
        { id: "vocab", label: "Kanji e vocabulário", jp: "{文字|もじ}・{語彙|ごい}",
          parts: [{ topic: "kanji-leitura", n: 6 }, { topic: "kanji-significado", n: 4 }, { topic: "verbo-significado", n: 4 }] },
        { id: "gramatica", label: "Gramática e verbos", jp: "{文法|ぶんぽう}",
          parts: [{ topic: "gramatica", n: 12 }, { topic: "verbo-forma", n: 5 }, { topic: "verbo-grupo", n: 3 }] }
    ];

    var SIZES = {
        full: { label: "Completo", minutes: 30, half: false },
        short: { label: "Curto", minutes: 15, half: true }
    };

    // Pontuação oficial do N5 (jlpt.jp): língua e leitura 0-120 (mínimo 38), escuta 0-60 (mínimo 19), total 180, aprovação 80.
    var OFFICIAL = { knowledgeMax: 120, knowledgeMin: 38, listeningMax: 60, listeningMin: 19, total: 180, pass: 80 };

    function keyOf(id) { return id.slice(id.indexOf(":") + 1); }
    function partCount(n, size) { return SIZES[size].half ? Math.ceil(n / 2) : n; }

    function totalFor(size) {
        return BLUEPRINT.reduce(function (sum, sec) {
            return sum + sec.parts.reduce(function (s, p) { return s + partCount(p.n, size); }, 0);
        }, 0);
    }

    function sectionOf(topic) {
        for (var i = 0; i < BLUEPRINT.length; i++) {
            for (var j = 0; j < BLUEPRINT[i].parts.length; j++) {
                if (BLUEPRINT[i].parts[j].topic === topic) return BLUEPRINT[i].id;
            }
        }
        return null;
    }

    function build(bank, options) {
        var o = options || {};
        var size = SIZES[o.size] ? o.size : "full";
        var seed = o.seed || 1;
        var usedKeys = {};
        var sections = BLUEPRINT.map(function (sec, si) {
            var ids = [];
            sec.parts.forEach(function (part, pi) {
                var n = partCount(part.n, size);
                var pool = Practice.pick(bank, { topics: [part.topic], count: n * 4, seed: seed + si * 101 + pi * 13, avoid: o.avoid });
                var chosen = [];
                // Prefere itens que ainda não apareceram na prova (o mesmo verbo ou kanji em outro tipo de pergunta).
                pool.forEach(function (id) {
                    if (chosen.length < n && !usedKeys[keyOf(id)]) { chosen.push(id); usedKeys[keyOf(id)] = true; }
                });
                pool.forEach(function (id) {
                    if (chosen.length < n && chosen.indexOf(id) === -1) chosen.push(id);
                });
                ids = ids.concat(chosen);
            });
            return { id: sec.id, label: sec.label, jp: sec.jp, ids: QB.shuffle(ids, seed + si) };
        });
        var all = [];
        sections.forEach(function (s) { all = all.concat(s.ids); });
        return { size: size, seed: seed, sections: sections, ids: all };
    }

    function summarize(bank, items) {
        var graded = Practice.grade(bank, items);
        var sections = {}, topics = {};
        BLUEPRINT.forEach(function (s) { sections[s.id] = { correct: 0, total: 0 }; });
        graded.items.forEach(function (it) {
            var topic = bank.get(it.id).topic;
            var sec = sectionOf(topic);
            topics[topic] = topics[topic] || { correct: 0, total: 0 };
            topics[topic].total += 1;
            if (sec) sections[sec].total += 1;
            if (it.ok) {
                topics[topic].correct += 1;
                if (sec) sections[sec].correct += 1;
            }
        });
        var blank = graded.items.filter(function (it) { return it.chosen === null; }).length;
        return {
            correct: graded.correct, total: graded.total, blank: blank,
            knowledge: graded.total ? Math.round(OFFICIAL.knowledgeMax * graded.correct / graded.total) : 0,
            estimated: true,
            sections: sections, topics: topics, items: graded.items
        };
    }

    function verdict(summary) {
        return { knowledge: summary.knowledge, min: OFFICIAL.knowledgeMin, aboveMin: summary.knowledge >= OFFICIAL.knowledgeMin };
    }

    /* ---------- Simulado em andamento ---------- */

    function newDraft(plan, options, now) {
        var timed = !options || options.timed !== false;
        return {
            active: true,
            id: new Date(now).toISOString(),
            seed: plan.seed, size: plan.size, ids: plan.ids.slice(),
            answers: plan.ids.map(function () { return null; }),
            startedAt: new Date(now).toISOString(),
            deadline: timed ? now + SIZES[plan.size].minutes * 60000 : null
        };
    }

    function setAnswer(draft, index, choice) {
        var next = JSON.parse(JSON.stringify(draft));
        next.answers[index] = choice;
        return next;
    }

    function remainingMs(draft, now) {
        return draft.deadline === null || draft.deadline === undefined ? null : Math.max(0, draft.deadline - now);
    }

    function formatClock(ms) {
        var total = Math.ceil(ms / 1000);
        var m = Math.floor(total / 60), s = total % 60;
        return (m < 10 ? "0" : "") + m + ":" + (s < 10 ? "0" : "") + s;
    }

    var api = {
        BLUEPRINT: BLUEPRINT, SIZES: SIZES, OFFICIAL: OFFICIAL,
        build: build, summarize: summarize, verdict: verdict, totalFor: totalFor, sectionOf: sectionOf,
        newDraft: newDraft, setAnswer: setAnswer, remainingMs: remainingMs, formatClock: formatClock
    };

    if (typeof module !== "undefined" && module.exports) { module.exports = api; return; }
    root.Mock = api;
})(typeof window !== "undefined" ? window : globalThis);
