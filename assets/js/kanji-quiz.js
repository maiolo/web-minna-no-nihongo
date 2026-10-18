/*
 * Perguntas do quiz de kanji (funções puras, testadas com node --test).
 *
 *   KanjiQuiz.buildQuestions(lista, { mode, count, pool, rng })
 *
 *   lista   todos os kanji do nível (fonte das alternativas erradas)
 *   mode    "meaning" (qual o significado?) ou "reading" (qual é uma leitura?)
 *   count   quantas perguntas (padrão 10)
 *   pool    subconjunto de onde sair as perguntas (padrão: a lista toda)
 *   rng     função de sorteio 0..1 (padrão Math.random; troque nos testes)
 *
 * Cada pergunta: { k, mode, options: [texto x4], answer: índice certo }.
 */
(function (root) {
    "use strict";

    function cleanReading(r) { return String(r).replace(/[()]/g, ""); }

    function readingsOf(entry) { return entry.on.concat(entry.kun).map(cleanReading); }

    function shuffle(list, rng) {
        var arr = list.slice();
        for (var i = arr.length - 1; i > 0; i--) {
            var j = Math.floor(rng() * (i + 1));
            var tmp = arr[i]; arr[i] = arr[j]; arr[j] = tmp;
        }
        return arr;
    }

    function pick(candidates, count, rng) {
        var seen = {};
        var out = [];
        shuffle(candidates, rng).forEach(function (c) {
            if (out.length < count && !seen[c]) { seen[c] = true; out.push(c); }
        });
        return out;
    }

    function buildQuestions(list, options) {
        var o = options || {};
        var rng = o.rng || Math.random;
        var mode = o.mode === "reading" ? "reading" : "meaning";
        var count = o.count || 10;
        var pool = (o.pool && o.pool.length ? o.pool : list).filter(function (e) {
            return mode === "meaning" || readingsOf(e).length > 0;
        });
        if (list.length < 4) return [];

        return shuffle(pool, rng).slice(0, count).map(function (entry) {
            var correct, wrong;
            if (mode === "meaning") {
                correct = entry.pt;
                // Prefere alternativas da mesma categoria (mais parecidas), depois as demais.
                var same = list.filter(function (e) { return e !== entry && e.cat === entry.cat && e.pt !== correct; });
                var others = list.filter(function (e) { return e !== entry && e.cat !== entry.cat && e.pt !== correct; });
                wrong = pick(same.map(function (e) { return e.pt; }), 3, rng);
                if (wrong.length < 3) {
                    wrong = wrong.concat(pick(others.map(function (e) { return e.pt; }).filter(function (t) { return wrong.indexOf(t) === -1; }), 3 - wrong.length, rng));
                }
            } else {
                var mine = readingsOf(entry);
                correct = mine[Math.floor(rng() * mine.length)];
                var pool2 = [];
                list.forEach(function (e) {
                    if (e === entry) return;
                    readingsOf(e).forEach(function (r) { if (mine.indexOf(r) === -1) pool2.push(r); });
                });
                wrong = pick(pool2, 3, rng);
            }
            var opts = shuffle([correct].concat(wrong), rng);
            return { k: entry.k, mode: mode, options: opts, answer: opts.indexOf(correct) };
        });
    }

    var api = { buildQuestions: buildQuestions, cleanReading: cleanReading };

    if (typeof module !== "undefined" && module.exports) { module.exports = api; return; }
    root.KanjiQuiz = api;
})(typeof window !== "undefined" ? window : globalThis);
