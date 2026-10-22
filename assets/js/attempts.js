/*
 * Histórico de tentativas (treinos e, depois, simulados). Funções puras: quem grava é o Store.
 *
 *   var doc = Store.peek("attempts");                 // { list: [...], updatedAt }
 *   Store.set("attempts", Attempts.add(doc, attempt));
 *
 * Tentativa (contrato descrito em docs/ROADMAP.md):
 *   { id, kind: "practice" | "mock", level, startedAt, seconds, topics?,
 *     items: [{ q: idDaQuestão, a: índiceEscolhido|null, ok }], score: { correct, total } }
 *
 * Guarda-se só o id da questão e a resposta, nunca o enunciado: a correção é remontada do banco.
 * A lista fica com as últimas MAX tentativas, a mais recente primeiro.
 */
(function (root) {
    "use strict";

    var MAX = 50;

    function list(doc) {
        return doc && Array.isArray(doc.list) ? doc.list : [];
    }

    function add(doc, attempt, max) {
        var next = [attempt].concat(list(doc).filter(function (a) { return a.id !== attempt.id; }));
        return { list: next.slice(0, max || MAX) };
    }

    // Ids das questões que o aluno errou na última vez em que apareceram (da mais recente para a mais antiga).
    function missedIds(doc) {
        var last = {}, order = [];
        list(doc).forEach(function (attempt) {
            attempt.items.forEach(function (item) {
                if (last[item.q] === undefined) { last[item.q] = item.ok; order.push(item.q); }
            });
        });
        return order.filter(function (id) { return last[id] === false; });
    }

    // Ids vistos nas últimas `n` tentativas (para não repetir logo em seguida).
    function recentIds(doc, n) {
        var ids = [];
        list(doc).slice(0, n).forEach(function (attempt) {
            attempt.items.forEach(function (item) { ids.push(item.q); });
        });
        return ids;
    }

    var api = { add: add, list: list, missedIds: missedIds, recentIds: recentIds, MAX: MAX };

    if (typeof module !== "undefined" && module.exports) { module.exports = api; return; }
    root.Attempts = api;
})(typeof window !== "undefined" ? window : globalThis);
