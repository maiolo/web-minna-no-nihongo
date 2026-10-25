/*
 * Simulado do JLPT (funções puras, testadas com node --test).
 *
 *   Mock.build(bank, { size, seed, avoid, listening })   { size, seed, listening, sections: [{ id, label, jp, ids }], ids }
 *   Mock.summarize(bank, items)                 correção e nota estimada; items = [{ id, chosen }]
 *   Mock.verdict(summary)                       leitura da nota em relação ao mínimo oficial
 *   Mock.newDraft(plan, { timed }, agora)       simulado em andamento (guardado no Store)
 *   Mock.setAnswer(draft, índice, escolha)      nova versão do rascunho com a resposta
 *   Mock.remainingMs(draft, agora)              tempo que falta (null se sem cronômetro)
 *   Mock.sectionOf(tema)                        id da seção a que o tema pertence
 *   Mock.buildReal(bank, { parts, seed, avoid })  prova no formato JLPT: { format: "real", parts, seed, sections: [{ id, label, jp, ids, mondai: [{ id, ids }] }], ids }
 *   Mock.realMinutes(parts)                     tempo da prova real para as partes escolhidas
 *
 * Dois formatos: "quick" (o simulado menor, com apoio em português) e "real" (REAL: a estrutura da
 * prova oficial do N5, com enunciados em japonês). Na prova real, a nota estimada só aparece quando
 * a prova tem todas as partes; com uma parte só, o resultado mostra os acertos por mondai.
 *
 * A prova segue a ideia do N5 (palavras e gramática), mas é menor. A seção de escuta é opcional:
 * usa a voz do aparelho (só faz sentido se houver voz em japonês) e uma só voz, sem ruído.
 * A nota é só uma ESTIMATIVA: a do JLPT é equalizada (depende da dificuldade de cada aplicação).
 * Aqui, língua e leitura = acertos/total x 120 e escuta = acertos/total x 60.
 */
(function (root) {
    "use strict";

    var QB = typeof module !== "undefined" && module.exports ? require("./question-bank.js") : root.QuestionBank;
    var Practice = typeof module !== "undefined" && module.exports ? require("./practice.js") : root.Practice;

    var BLUEPRINT = [
        { id: "vocab", label: "Kanji e vocabulário", jp: "{文字|もじ}・{語彙|ごい}",
          parts: [{ topic: "kanji-leitura", n: 6 }, { topic: "kanji-significado", n: 4 }, { topic: "verbo-significado", n: 4 }] },
        { id: "gramatica", label: "Gramática e verbos", jp: "{文法|ぶんぽう}",
          parts: [{ topic: "gramatica", n: 12 }, { topic: "verbo-forma", n: 5 }, { topic: "verbo-grupo", n: 3 }] },
        { id: "escuta", label: "Escuta", jp: "{聴解|ちょうかい}", optional: true,
          parts: [{ topic: "escuta-palavra", n: 4 }, { topic: "escuta-frase", n: 4 }] }
    ];

    // Estrutura da prova real do N5 (jlpt.jp: 試験科目と問題の構成). `ready: false` = parte ainda não disponível aqui.
    var REAL = {
        sections: [
            { id: "moji", label: "Escrita e vocabulário", jp: "言語知識（文字・語彙）", minutes: 20, ready: true, mondai: [
                { id: "m1", topic: "prova-yomi", n: 12, no: 1, name: "漢字読み",
                  instr: "＿＿＿の ことばは ひらがなで どう かきますか。1・2・3・4から いちばん いい ものを ひとつ えらんで ください。",
                  pt: "Como se escreve em hiragana a palavra sublinhada? Escolha a melhor entre 1, 2, 3 e 4." },
                { id: "m2", topic: "prova-hyouki", n: 8, no: 2, name: "表記",
                  instr: "＿＿＿の ことばは どう かきますか。1・2・3・4から いちばん いい ものを ひとつ えらんで ください。",
                  pt: "Como se escreve a palavra sublinhada? Escolha a melhor entre 1, 2, 3 e 4." },
                { id: "m3", topic: "prova-bunmyaku", n: 10, no: 3, name: "文脈規定",
                  instr: "（　　）に なにを いれますか。1・2・3・4から いちばん いい ものを ひとつ えらんで ください。",
                  pt: "O que entra em (  )? Escolha a melhor entre 1, 2, 3 e 4." },
                { id: "m4", topic: "prova-iikae", n: 5, no: 4, name: "言い換え類義",
                  instr: "＿＿＿の ぶんと だいたい おなじ いみの ぶんが あります。1・2・3・4から いちばん いい ものを ひとつ えらんで ください。",
                  pt: "Há uma frase com quase o mesmo sentido da frase sublinhada. Escolha a melhor entre 1, 2, 3 e 4." }
            ] },
            { id: "bunpo", label: "Gramática e leitura", jp: "言語知識（文法）・読解", minutes: 40, ready: false, mondai: [] },
            { id: "choukai", label: "Escuta", jp: "聴解", minutes: 30, ready: false, mondai: [] }
        ]
    };
    var REAL_LISTENING = { choukai: true };
    var REAL_KNOWLEDGE = ["moji", "bunpo"];

    function realMondaiOf(topic) {
        for (var i = 0; i < REAL.sections.length; i++) {
            for (var j = 0; j < REAL.sections[i].mondai.length; j++) {
                if (REAL.sections[i].mondai[j].topic === topic) return { section: REAL.sections[i], mondai: REAL.sections[i].mondai[j] };
            }
        }
        return null;
    }

    function realMinutes(parts) {
        return REAL.sections.filter(function (sec) { return parts.indexOf(sec.id) !== -1; })
            .reduce(function (sum, sec) { return sum + sec.minutes; }, 0);
    }

    function buildReal(bank, options) {
        var o = options || {};
        var seed = o.seed || 1;
        var wanted = (o.parts && o.parts.length ? o.parts : ["moji"]);
        var parts = REAL.sections.filter(function (sec) { return sec.ready && wanted.indexOf(sec.id) !== -1; }).map(function (sec) { return sec.id; });
        var all = [];
        var sections = REAL.sections.filter(function (sec) { return parts.indexOf(sec.id) !== -1; }).map(function (sec, si) {
            var ids = [];
            var mondai = sec.mondai.map(function (m, mi) {
                var picked = Practice.pick(bank, { topics: [m.topic], count: m.n, seed: seed + si * 101 + mi * 13, avoid: o.avoid });
                ids = ids.concat(picked);
                return { id: m.id, ids: picked };
            });
            all = all.concat(ids);
            return { id: sec.id, label: sec.label, jp: sec.jp, ids: ids, mondai: mondai };
        });
        return { format: "real", parts: parts, seed: seed, sections: sections, ids: all };
    }

    function activeBlueprint(listening) {
        return BLUEPRINT.filter(function (sec) { return !sec.optional || listening; });
    }

    var SIZES = {
        full: { label: "Completo", minutes: 30, half: false },
        short: { label: "Curto", minutes: 15, half: true }
    };

    // Pontuação oficial do N5 (jlpt.jp): língua e leitura 0-120 (mínimo 38), escuta 0-60 (mínimo 19), total 180, aprovação 80.
    var OFFICIAL = { knowledgeMax: 120, knowledgeMin: 38, listeningMax: 60, listeningMin: 19, total: 180, pass: 80 };

    function keyOf(id) { return id.slice(id.indexOf(":") + 1); }
    function partCount(n, size) { return SIZES[size].half ? Math.ceil(n / 2) : n; }

    // Minutos: a escuta acrescenta tempo (8 min na prova completa, 4 na curta).
    function minutesFor(size, listening) {
        return SIZES[size].minutes + (listening ? (SIZES[size].half ? 4 : 8) : 0);
    }

    function totalFor(size, listening) {
        return activeBlueprint(listening).reduce(function (sum, sec) {
            return sum + sec.parts.reduce(function (s, p) { return s + partCount(p.n, size); }, 0);
        }, 0);
    }

    function sectionOf(topic) {
        var real = realMondaiOf(topic);
        if (real) return real.section.id;
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
        var listening = Boolean(o.listening);
        var sections = activeBlueprint(listening).map(function (sec, si) {
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
        return { size: size, seed: seed, listening: listening, sections: sections, ids: all };
    }

    function summarize(bank, items) {
        var graded = Practice.grade(bank, items);
        var sections = {}, topics = {}, mondai = {};
        BLUEPRINT.forEach(function (s) { sections[s.id] = { correct: 0, total: 0 }; });
        REAL.sections.forEach(function (s) { sections[s.id] = { correct: 0, total: 0 }; });
        var isReal = graded.items.length > 0 && graded.items.every(function (it) { return Boolean(realMondaiOf(bank.get(it.id).topic)); });
        graded.items.forEach(function (it) {
            var topic = bank.get(it.id).topic;
            var sec = sectionOf(topic);
            var real = realMondaiOf(topic);
            topics[topic] = topics[topic] || { correct: 0, total: 0 };
            topics[topic].total += 1;
            if (sec) sections[sec].total += 1;
            if (real) {
                mondai[real.mondai.id] = mondai[real.mondai.id] || { correct: 0, total: 0 };
                mondai[real.mondai.id].total += 1;
            }
            if (it.ok) {
                topics[topic].correct += 1;
                if (sec) sections[sec].correct += 1;
                if (real) mondai[real.mondai.id].correct += 1;
            }
        });
        var blank = graded.items.filter(function (it) { return it.chosen === null; }).length;
        var listeningIds = isReal ? REAL_LISTENING : { escuta: true };
        var lT = 0, lC = 0, kT = 0, kC = 0;
        Object.keys(sections).forEach(function (id) {
            if (listeningIds[id]) { lT += sections[id].total; lC += sections[id].correct; }
            else if (isReal ? REAL_KNOWLEDGE.indexOf(id) !== -1 : id !== "escuta") { kT += sections[id].total; kC += sections[id].correct; }
        });
        // Prova real: só há nota estimada com todas as partes de língua e leitura; com uma parte, só os acertos.
        var complete = !isReal || REAL_KNOWLEDGE.every(function (id) { return sections[id].total > 0; });
        var knowledge = !complete ? null : (kT ? Math.round(OFFICIAL.knowledgeMax * kC / kT) : 0);
        var listening = lT ? Math.round(OFFICIAL.listeningMax * lC / lT) : null;
        return {
            correct: graded.correct, total: graded.total, blank: blank, format: isReal ? "real" : "quick",
            knowledge: knowledge, listening: listening,
            totalEstimate: listening === null || knowledge === null ? null : knowledge + listening,
            estimated: true,
            sections: sections, topics: topics, mondai: mondai, items: graded.items
        };
    }

    function verdict(summary) {
        var hasListening = summary.listening !== null && summary.listening !== undefined;
        if (summary.knowledge === null || summary.knowledge === undefined) {
            return { partial: true, knowledge: null, hasListening: hasListening, listening: hasListening ? summary.listening : null, total: null, passEstimate: null };
        }
        var aboveMin = summary.knowledge >= OFFICIAL.knowledgeMin;
        var listeningOk = hasListening ? summary.listening >= OFFICIAL.listeningMin : null;
        var total = hasListening ? summary.knowledge + summary.listening : null;
        return {
            knowledge: summary.knowledge, min: OFFICIAL.knowledgeMin, aboveMin: aboveMin,
            hasListening: hasListening, listening: hasListening ? summary.listening : null,
            listeningMin: OFFICIAL.listeningMin, listeningOk: listeningOk,
            total: total, passMin: OFFICIAL.pass,
            passEstimate: hasListening ? (aboveMin && listeningOk && total >= OFFICIAL.pass) : null
        };
    }

    /* ---------- Simulado em andamento ---------- */

    function newDraft(plan, options, now) {
        var timed = !options || options.timed !== false;
        return {
            active: true,
            id: new Date(now).toISOString(),
            seed: plan.seed, size: plan.size || "full", ids: plan.ids.slice(),
            answers: plan.ids.map(function () { return null; }),
            startedAt: new Date(now).toISOString(),
            listening: Boolean(plan.listening),
            format: plan.format === "real" ? "real" : "quick", parts: plan.parts ? plan.parts.slice() : [], furigana: Boolean(options && options.furigana),
            deadline: timed ? now + (plan.format === "real" ? realMinutes(plan.parts) : minutesFor(plan.size, plan.listening)) * 60000 : null
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
        BLUEPRINT: BLUEPRINT, REAL: REAL, SIZES: SIZES, OFFICIAL: OFFICIAL,
        build: build, buildReal: buildReal, realMinutes: realMinutes, realMondaiOf: realMondaiOf, summarize: summarize, verdict: verdict, totalFor: totalFor, minutesFor: minutesFor, sectionOf: sectionOf,
        newDraft: newDraft, setAnswer: setAnswer, remainingMs: remainingMs, formatClock: formatClock
    };

    if (typeof module !== "undefined" && module.exports) { module.exports = api; return; }
    root.Mock = api;
})(typeof window !== "undefined" ? window : globalThis);
