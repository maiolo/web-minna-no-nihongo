/*
 * Desempenho a partir do histórico de tentativas (funções puras, testadas com node --test).
 *
 *   Stats.compute(doc, bank)
 *     doc   o valor do Store "attempts" ({ list: [...] })
 *     bank  o banco de questões (question-bank.js): dá o tema e o ponto de gramática de cada id
 *
 * Devolve:
 *   attempts, answered, correct          totais (as últimas 50 tentativas)
 *   topics   { tema: { correct, total } }
 *   weakRefs [{ ref, correct, total, pct }]   pontos de gramática com acerto abaixo de 70% (mín. 2 respostas)
 *   weakIds  [id]    questões para insistir: errou 2 das 3 últimas vezes, ou errou a última e já tinha errado antes
 *   trend    simulados do mais antigo ao mais novo (até 10): { id, startedAt, correct, total, knowledge, listening, totalEstimate, size }
 * Questões que saíram do banco são ignoradas.
 */
(function (root) {
    "use strict";

    var WEAK_BELOW = 70;
    var TREND_MAX = 10;

    function pct(a, b) { return b ? Math.round((a / b) * 100) : 0; }

    function compute(doc, bank) {
        var list = doc && Array.isArray(doc.list) ? doc.list : [];
        var chronological = list.slice().reverse();   // do mais antigo ao mais novo
        var cache = {};
        function meta(id) {
            if (!(id in cache)) { var q = bank.get(id); cache[id] = q ? { topic: q.topic, ref: q.ref || null } : null; }
            return cache[id];
        }

        var topics = {}, refs = {}, history = {};
        var answered = 0, correct = 0;
        chronological.forEach(function (attempt) {
            attempt.items.forEach(function (item) {
                var m = meta(item.q);
                if (!m) return;
                var ok = Boolean(item.ok);
                answered += 1;
                if (ok) correct += 1;
                topics[m.topic] = topics[m.topic] || { correct: 0, total: 0 };
                topics[m.topic].total += 1;
                if (ok) topics[m.topic].correct += 1;
                if (m.ref) {
                    refs[m.ref] = refs[m.ref] || { ref: m.ref, correct: 0, total: 0 };
                    refs[m.ref].total += 1;
                    if (ok) refs[m.ref].correct += 1;
                }
                (history[item.q] = history[item.q] || []).push(ok);
            });
        });

        var weakRefs = Object.keys(refs).map(function (k) {
            var r = refs[k];
            return { ref: r.ref, correct: r.correct, total: r.total, pct: pct(r.correct, r.total) };
        }).filter(function (r) { return r.total >= 2 && r.pct < WEAK_BELOW; })
          .sort(function (a, b) { return a.pct - b.pct || b.total - a.total; });

        var weakIds = Object.keys(history).filter(function (id) {
            var h = history[id];
            var misses = h.filter(function (ok) { return !ok; }).length;
            var recentMisses = h.slice(-3).filter(function (ok) { return !ok; }).length;
            return recentMisses >= 2 || (!h[h.length - 1] && misses >= 2);
        }).sort(function (a, b) {
            var ma = history[a].filter(function (ok) { return !ok; }).length;
            var mb = history[b].filter(function (ok) { return !ok; }).length;
            return mb - ma || (a < b ? -1 : 1);
        });

        var trend = chronological.filter(function (a) { return a.kind === "mock"; }).slice(-TREND_MAX).map(function (a) {
            var sc = a.score || {};
            return {
                id: a.id, startedAt: a.startedAt, size: a.size || "full",
                correct: sc.correct, total: sc.total, knowledge: sc.knowledge,
                listening: sc.listening === undefined ? null : sc.listening,
                totalEstimate: sc.totalEstimate === undefined ? null : sc.totalEstimate
            };
        });

        return {
            attempts: list.length, answered: answered, correct: correct, pct: pct(correct, answered),
            topics: topics, weakRefs: weakRefs, weakIds: weakIds, trend: trend
        };
    }

    var api = { compute: compute, WEAK_BELOW: WEAK_BELOW };

    if (typeof module !== "undefined" && module.exports) { module.exports = api; return; }
    root.Stats = api;
})(typeof window !== "undefined" ? window : globalThis);
