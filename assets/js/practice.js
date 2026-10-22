/*
 * Treino: sorteio e correção (funções puras, testadas com node --test).
 *
 *   Practice.pick(bank, { topics, count, seed, avoid })   lista de ids
 *   Practice.grade(bank, answers)                         { total, correct, items }
 *
 * pick espalha as questões entre os temas escolhidos (um de cada vez), evita repetir o mesmo
 * verbo ou kanji no mesmo treino e deixa por último os ids em `avoid` (os feitos há pouco).
 * Com a mesma semente, o resultado é sempre o mesmo.
 * grade recebe [{ id, chosen }] (chosen = índice, ou null se ficou em branco) e remonta cada
 * questão pelo id, então serve também ao simulado.
 */
(function (root) {
    "use strict";

    var QB = typeof module !== "undefined" && module.exports ? require("./question-bank.js") : root.QuestionBank;

    // "vte:{書|か}く" -> "{書|か}く": o mesmo item em tipos diferentes conta como repetido.
    function keyOf(id) { return id.slice(id.indexOf(":") + 1); }

    function pick(bank, options) {
        var o = options || {};
        var topics = o.topics && o.topics.length ? o.topics : bank.topics.map(function (t) { return t.id; });
        var count = o.count || 10;
        var seed = o.seed || 1;
        var avoid = {};
        (o.avoid || []).forEach(function (id) { avoid[id] = true; });

        // Por tema: embaralhado, e o que não está em `avoid` vem primeiro.
        var queues = topics.map(function (topic) {
            var shuffled = QB.shuffle(bank.ids(topic), seed + QB.hash(topic));
            var fresh = shuffled.filter(function (id) { return !avoid[id]; });
            var stale = shuffled.filter(function (id) { return avoid[id]; });
            return fresh.concat(stale);
        });

        var out = [], usedKeys = {}, usedIds = {};
        // 1ª passada: sem repetir o mesmo item; 2ª: aceita repetir se faltar questão.
        [true, false].forEach(function (strict) {
            var progressed = true;
            while (out.length < count && progressed) {
                progressed = false;
                for (var t = 0; t < queues.length && out.length < count; t++) {
                    while (queues[t].length) {
                        var id = queues[t].shift();
                        if (usedIds[id]) continue;
                        if (strict && usedKeys[keyOf(id)]) { continue; }
                        out.push(id);
                        usedIds[id] = true;
                        usedKeys[keyOf(id)] = true;
                        progressed = true;
                        break;
                    }
                }
            }
            if (!strict) return;
            // Volta para a 2ª passada só com o que foi pulado.
            queues = topics.map(function (topic) {
                return QB.shuffle(bank.ids(topic), seed + QB.hash(topic)).filter(function (id) { return !usedIds[id]; });
            });
        });

        return QB.shuffle(out, seed);
    }

    function grade(bank, answers) {
        var items = answers.map(function (a) {
            var q = bank.get(a.id);
            var chosen = a.chosen === undefined ? null : a.chosen;
            return { id: a.id, chosen: chosen, ok: Boolean(q) && chosen === q.answer };
        });
        return {
            total: items.length,
            correct: items.filter(function (i) { return i.ok; }).length,
            items: items
        };
    }

    var api = { pick: pick, grade: grade };

    if (typeof module !== "undefined" && module.exports) { module.exports = api; return; }
    root.Practice = api;
})(typeof window !== "undefined" ? window : globalThis);
