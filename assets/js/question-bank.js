/*
 * Banco de questões do JLPT (funções puras, testadas com node --test).
 *
 *   var bank = QuestionBank.create({ verbs, kanji, grammar })
 *   bank.topics                 [{ id, label }]
 *   bank.ids(topicId)           ids estáveis das questões do tema
 *   bank.get(id)                monta a questão, sempre igual para o mesmo id (ou null)
 *
 * Questão:
 *   { id, topic, ref?, prompt, sentence?, hint?, glyph?, options: [texto], answer: índice, explain, fixed? }
 *
 * Todo texto usa a notação das frases ({漢字|かんじ}). A questão é remontada pelo id,
 * então o histórico (treinos e simulados) guarda só ids e respostas: se uma explicação
 * for corrigida, a correção antiga melhora junto.
 *
 * Ids: "vte:{書|か}く" (forma て), "vta:", "vnai:", "vmasu:", "vgrp:", "vmean:",
 *      "kmean:食", "kread:食", "q:wa-topico" (gramática, jlpt/data/n5-questions.js).
 */
(function (root) {
    "use strict";

    var V = typeof module !== "undefined" && module.exports ? require("./verbs.js") : root.Verbs;

    var TOPICS = [
        { id: "gramatica", label: "Gramática: partículas, frases e formas" },
        { id: "verbo-forma", label: "Verbos: formas (て, た, ない, ます)" },
        { id: "verbo-grupo", label: "Verbos: grupos" },
        { id: "verbo-significado", label: "Verbos: significado" },
        { id: "kanji-significado", label: "Kanji: significado" },
        { id: "kanji-leitura", label: "Kanji: leitura" }
    ];

    var FORM_TYPES = { vte: "te", vta: "ta", vnai: "nai", vmasu: "masu" };
    var FORM_NAME = { te: "forma て", ta: "forma た", nai: "forma ない", masu: "forma ます" };
    var GROUP_JP = { 1: "{五段|ごだん}", 2: "{一段|いちだん}", 3: "{不規則|ふきそく}" };

    /* ---------- Sorteio estável ---------- */

    function hash(str) {
        var h = 2166136261 >>> 0;
        for (var i = 0; i < str.length; i++) { h ^= str.charCodeAt(i); h = Math.imul(h, 16777619) >>> 0; }
        return h >>> 0;
    }

    function shuffle(list, seed) {
        var s = seed >>> 0;
        function rand() { s = (Math.imul(s, 1664525) + 1013904223) >>> 0; return s / 4294967296; }
        var arr = list.slice();
        for (var i = arr.length - 1; i > 0; i--) {
            var j = Math.floor(rand() * (i + 1));
            var tmp = arr[i]; arr[i] = arr[j]; arr[j] = tmp;
        }
        return arr;
    }

    // Tira repetidos (e o que for igual a `correct`) comparando a leitura em kana.
    function uniqueWrong(list, correct) {
        var seen = {};
        seen[V.reading(correct)] = true;
        return list.filter(function (t) {
            if (t === null || t === undefined) return false;
            var key = V.reading(t);
            if (seen[key]) return false;
            seen[key] = true;
            return true;
        });
    }

    // Significados que dividem uma palavra (colocar / colocar dentro) deixam a questão discutível.
    function words(text) {
        return String(text).toLowerCase().split(/[^a-zà-ú]+/).filter(function (w) { return w.length >= 4; });
    }
    function overlaps(a, b) {
        var wb = words(b);
        return words(a).some(function (w) { return wb.indexOf(w) !== -1; });
    }

    /* ---------- Verbos: formas ---------- */

    var G1_ENDINGS = ["う", "く", "ぐ", "す", "つ", "ぬ", "ぶ", "む", "る"];
    var SURU = /する$/;
    var KURU = /\{来\|く\}る$/;

    var G3_WRONG = {
        suru: {
            te: ["すって", "しいて", "すんで", "しんで"],
            ta: ["すった", "しいた", "すんだ", "しんだ"],
            nai: ["すない", "さない", "せない", "しらない"],
            masu: ["すます", "しります", "さます", "せます"]
        },
        kuru: {
            te: ["{来|く}って", "{来|き}って", "{来|こ}て", "{来|き}んで"],
            ta: ["{来|く}った", "{来|き}った", "{来|こ}た", "{来|き}んだ"],
            nai: ["{来|き}ない", "{来|く}ない", "{来|こ}らない", "{来|く}らない"],
            masu: ["{来|く}ります", "{来|こ}ます", "{来|く}ます", "{来|き}ります"]
        }
    };

    // Erros típicos de quem aplica a regra do grupo errado ou da terminação errada.
    function wrongForms(verb, form) {
        var correct = V.conjugate(verb, form);
        var out = [];
        if (verb.g === 3) {
            var kind = KURU.test(verb.jp) ? "kuru" : "suru";
            var prefix = kind === "kuru" ? verb.jp.replace(KURU, "") : verb.jp.replace(SURU, "");
            out = G3_WRONG[kind][form].map(function (s) { return prefix + s; });
        } else {
            var head = verb.jp.slice(0, -1);
            G1_ENDINGS.forEach(function (e) { out.push(V.conjugate({ jp: head + e, g: 1, pt: "x" }, form)); });
            out.push(V.conjugate({ jp: head + "る", g: 2, pt: "x" }, form));
        }
        return uniqueWrong(out, correct);
    }

    function explainForm(verb, form, correct) {
        var g = verb.g;
        var text = "«" + verb.jp + "» é do Grupo " + g + " (" + GROUP_JP[g] + "). ";
        if (g === 3) {
            text += "Verbo irregular: " + (KURU.test(verb.jp) ? "a leitura do kanji muda (く, き, こ)." : "o する vira し, さ... conforme a forma (しない, します, して, した).") + " ";
        } else {
            var last = verb.jp.slice(-1), suffix = correct.slice(verb.jp.length - 1);
            text += g === 1
                ? "A terminação «" + last + "» vira «" + suffix + "». "
                : "Tira-se る e acrescenta-se «" + suffix + "». ";
        }
        text += "A " + FORM_NAME[form] + " é " + correct + ".";
        if (verb.note) text += " " + verb.note;
        return text;
    }

    function formQuestion(type, verb) {
        var form = FORM_TYPES[type];
        var correct = V.conjugate(verb, form);
        var wrong = wrongForms(verb, form);
        if (correct === null || wrong.length < 3) return null;
        var id = type + ":" + verb.jp;
        var picked = shuffle(wrong, hash(id + "w")).slice(0, 3);
        return finish({
            id: id, topic: "verbo-forma",
            prompt: "Qual é a " + FORM_NAME[form] + " de " + verb.jp + "?",
            hint: verb.pt,
            correct: correct, wrong: picked,
            explain: explainForm(verb, form, correct)
        });
    }

    /* ---------- Verbos: grupo e significado ---------- */

    var GROUP_OPTIONS = ["Grupo 1 ({五段|ごだん})", "Grupo 2 ({一段|いちだん})", "Grupo 3 ({不規則|ふきそく})"];
    var GROUP_WHY = {
        1: "Grupo 1: termina em う, く, ぐ, す, つ, ぬ, ぶ, む ou る, e conjuga trocando a última sílaba.",
        2: "Grupo 2: termina em いる ou える e conjuga tirando る.",
        3: "Grupo 3: só する (e «substantivo + する») e {来|く}る."
    };

    function groupQuestion(verb) {
        var text = GROUP_WHY[verb.g];
        if (verb.note) text += " " + verb.note;
        return {
            id: "vgrp:" + verb.jp, topic: "verbo-grupo",
            prompt: "A que grupo pertence " + verb.jp + "?",
            hint: verb.pt,
            options: GROUP_OPTIONS.slice(), answer: verb.g - 1, fixed: true,
            explain: text
        };
    }

    function meaningQuestion(verb, verbs) {
        var id = "vmean:" + verb.jp;
        var pool = verbs.filter(function (v) { return v !== verb && v.pt !== verb.pt && !overlaps(v.pt, verb.pt); }).map(function (v) { return v.pt; });
        var picked = shuffle(Array.from(new Set(pool)), hash(id + "w")).slice(0, 3);
        return finish({
            id: id, topic: "verbo-significado",
            prompt: "O que significa " + verb.jp + "?",
            correct: verb.pt, wrong: picked,
            explain: verb.jp + " significa «" + verb.pt + "». Grupo " + verb.g + "." + (verb.ex ? " Exemplo: " + verb.ex[0] + " (" + verb.ex[1] + ")" : "")
        });
    }

    /* ---------- Kanji ---------- */

    function cleanReading(r) { return String(r).replace(/[()]/g, ""); }
    function readingsOf(entry) { return entry.on.concat(entry.kun).map(cleanReading); }
    function isKatakana(r) { return /[゠-ヿ]/.test(r.charAt(0)); }

    function kanjiMeaning(entry, kanji) {
        var id = "kmean:" + entry.k;
        var same = kanji.filter(function (e) { return e !== entry && e.cat === entry.cat && e.pt !== entry.pt && !overlaps(e.pt, entry.pt); });
        var others = kanji.filter(function (e) { return e !== entry && e.cat !== entry.cat && e.pt !== entry.pt && !overlaps(e.pt, entry.pt); });
        var seed = hash(id + "w");
        // Prefere alternativas da mesma categoria (mais parecidas), depois as demais.
        var pool = shuffle(same, seed).concat(shuffle(others, seed + 1)).map(function (e) { return e.pt; });
        var picked = Array.from(new Set(pool)).slice(0, 3);
        return finish({
            id: id, topic: "kanji-significado", glyph: entry.k,
            prompt: "Qual é o significado deste kanji?",
            correct: entry.pt, wrong: picked,
            explain: entry.k + " significa «" + entry.pt + "». " + readingLine(entry)
        });
    }

    function readingLine(entry) {
        var parts = [];
        if (entry.on.length) parts.push("On: " + entry.on.join(", "));
        if (entry.kun.length) parts.push("Kun: " + entry.kun.join(", "));
        return parts.join(" • ") + ".";
    }

    function kanjiReading(entry, kanji) {
        var id = "kread:" + entry.k;
        var mine = readingsOf(entry);
        var seed = hash(id + "w");
        var correct = shuffle(mine, seed)[0];
        var wantKata = isKatakana(correct);
        var pool = [];
        kanji.forEach(function (e) {
            if (e === entry) return;
            readingsOf(e).forEach(function (r) {
                if (mine.indexOf(r) === -1 && isKatakana(r) === wantKata && pool.indexOf(r) === -1) pool.push(r);
            });
        });
        var picked = shuffle(pool, seed + 1).slice(0, 3);
        return finish({
            id: id, topic: "kanji-leitura", glyph: entry.k,
            prompt: "Qual destas é uma leitura deste kanji?",
            correct: correct, wrong: picked,
            explain: entry.k + " (" + entry.pt + "). " + readingLine(entry)
        });
    }

    /* ---------- Gramática ---------- */

    function grammarQuestion(q) {
        return finish({
            id: "q:" + q.id, topic: "gramatica", ref: q.ref,
            prompt: "Complete a frase.",
            sentence: q.sentence, hint: q.pt,
            correct: q.a, wrong: q.w,
            explain: q.why
        });
    }

    /* ---------- Montagem ---------- */

    // Embaralha as alternativas (sempre do mesmo jeito para o mesmo id) e marca a certa.
    function finish(b) {
        var all = [b.correct].concat(b.wrong);
        var order = shuffle(all, hash(b.id));
        var q = {
            id: b.id, topic: b.topic, prompt: b.prompt,
            options: order, answer: order.indexOf(b.correct), explain: b.explain
        };
        ["ref", "sentence", "hint", "glyph"].forEach(function (k) { if (b[k]) q[k] = b[k]; });
        return q;
    }

    function create(data) {
        var verbs = (data && data.verbs) || [];
        var kanji = (data && data.kanji) || [];
        var grammar = (data && data.grammar) || [];

        var byId = {};
        var idsByTopic = {};
        TOPICS.forEach(function (t) { idsByTopic[t.id] = []; });
        function add(topic, id, make) {
            byId[id] = make;
            idsByTopic[topic].push(id);
        }

        grammar.forEach(function (q) { add("gramatica", "q:" + q.id, function () { return grammarQuestion(q); }); });
        verbs.forEach(function (v) {
            Object.keys(FORM_TYPES).forEach(function (type) {
                add("verbo-forma", type + ":" + v.jp, function () { return formQuestion(type, v); });
            });
            add("verbo-grupo", "vgrp:" + v.jp, function () { return groupQuestion(v); });
            add("verbo-significado", "vmean:" + v.jp, function () { return meaningQuestion(v, verbs); });
        });
        kanji.forEach(function (e) {
            add("kanji-significado", "kmean:" + e.k, function () { return kanjiMeaning(e, kanji); });
            if (readingsOf(e).length) add("kanji-leitura", "kread:" + e.k, function () { return kanjiReading(e, kanji); });
        });

        return {
            topics: TOPICS.slice(),
            ids: function (topicId) { return topicId ? (idsByTopic[topicId] || []).slice() : Object.keys(byId); },
            get: function (id) { return byId[id] ? byId[id]() : null; }
        };
    }

    var api = { create: create, TOPICS: TOPICS, hash: hash, shuffle: shuffle };

    if (typeof module !== "undefined" && module.exports) { module.exports = api; return; }
    root.QuestionBank = api;
})(typeof window !== "undefined" ? window : globalThis);
