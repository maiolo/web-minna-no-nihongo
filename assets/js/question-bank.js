/*
 * Banco de questões do JLPT (funções puras, testadas com node --test).
 *
 *   var bank = QuestionBank.create({ verbs, kanji, grammar })
 *   bank.topics                 [{ id, label }]
 *   bank.ids(topicId)           ids estáveis das questões do tema
 *   bank.get(id)                monta a questão, sempre igual para o mesmo id (ou null)
 *
 * Questão:
 *   { id, topic, ref?, prompt, sentence?, hint?, glyph?, speak?, heard?, options: [texto], answer: índice, explain, fixed? }
 *
 * Todo texto usa a notação das frases ({漢字|かんじ}). A questão é remontada pelo id,
 * então o histórico (treinos e simulados) guarda só ids e respostas: se uma explicação
 * for corrigida, a correção antiga melhora junto.
 *
 * Ids: "vte:{書|か}く" (forma て), "vta:", "vnai:", "vmasu:", "vgrp:", "vmean:",
 *      "kmean:食", "kread:食", "q:wa-topico" (gramática, jlpt/data/n5-questions.js),
 *      "lw:{書|か}く" (escuta: ouvir a palavra) e "ls:{書|か}く" (escuta: ouvir a frase de exemplo),
 *      "ex:y01", "ex:h01", "ex:b01", "ex:i01" (prova no formato JLPT; o texto está em jlpt/data/n5-exam-*.js).
 *
 * Questões "ex:" têm `exam: { mondai }` e `sentence` com a notação da prova (*sublinhado*, ＿＿ lacuna);
 * não têm `prompt`: o enunciado é o do mondai (veja Mock.REAL). As alternativas erradas de leitura são geradas.
 *
 * Questões de escuta têm `speak` (texto em kana para a voz do aparelho; o japonês escrito não
 * aparece na pergunta) e `heard` (a notação, mostrada só na correção).
 */
(function (root) {
    "use strict";

    var V = typeof module !== "undefined" && module.exports ? require("./verbs.js") : root.Verbs;
    var N = typeof module !== "undefined" && module.exports ? require("./notation.js") : root.Notation;

    var TOPICS = [
        { id: "gramatica", label: "Gramática: partículas, frases e formas" },
        { id: "verbo-forma", label: "Verbos: formas (て, た, ない, ます)" },
        { id: "verbo-grupo", label: "Verbos: grupos" },
        { id: "verbo-significado", label: "Verbos: significado" },
        { id: "kanji-significado", label: "Kanji: significado" },
        { id: "kanji-leitura", label: "Kanji: leitura" },
        { id: "escuta-palavra", label: "Escuta: palavras", listening: true },
        { id: "escuta-frase", label: "Escuta: frases", listening: true },
        // Questões no formato da prova real (só aparecem no simulado, não no treino): jlpt/data/n5-exam-*.js
        { id: "prova-yomi", label: "Prova: leitura de kanji (漢字読み)", real: true },
        { id: "prova-hyouki", label: "Prova: escrita da palavra (表記)", real: true },
        { id: "prova-bunmyaku", label: "Prova: vocabulário em contexto (文脈規定)", real: true },
        { id: "prova-iikae", label: "Prova: frase equivalente (言い換え類義)", real: true },
        { id: "prova-bunpo1", label: "Prova: gramática, completar (文の文法1)", real: true },
        { id: "prova-bunpo2", label: "Prova: gramática, ordenar (文の文法2)", real: true },
        { id: "prova-bunpo3", label: "Prova: gramática em texto (文章の文法)", real: true },
        { id: "prova-dokkai-tan", label: "Prova: leitura, texto curto (内容理解 短文)", real: true },
        { id: "prova-dokkai-chu", label: "Prova: leitura, texto médio (内容理解 中文)", real: true },
        { id: "prova-dokkai-joho", label: "Prova: leitura, busca de informação (情報検索)", real: true }
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

    /* ---------- Escuta (voz do aparelho) ---------- */

    // Notação -> texto em kana para falar (^は = わ, ^へ = え).
    function spoken(notation) {
        return V.reading(notation).replace(/\^は/g, "わ").replace(/\^へ/g, "え").replace(/\^/g, "").replace(/ /g, "");
    }

    function listenWord(verb, verbs) {
        var id = "lw:" + verb.jp;
        var pool = verbs.filter(function (v) { return v !== verb && v.pt !== verb.pt && !overlaps(v.pt, verb.pt); }).map(function (v) { return v.pt; });
        var picked = shuffle(Array.from(new Set(pool)), hash(id + "w")).slice(0, 3);
        return finish({
            id: id, topic: "escuta-palavra",
            prompt: "Ouça a palavra e escolha o significado.",
            speak: spoken(verb.jp), heard: verb.jp,
            correct: verb.pt, wrong: picked,
            explain: "Você ouviu " + verb.jp + ", que significa «" + verb.pt + "»."
        });
    }

    function listenSentence(verb, verbs) {
        var id = "ls:" + verb.jp;
        var correct = verb.ex[1];
        var pool = verbs.filter(function (v) { return v !== verb && v.ex && v.ex[1] !== correct && !overlaps(v.ex[1], correct); }).map(function (v) { return v.ex[1]; });
        var picked = shuffle(Array.from(new Set(pool)), hash(id + "w")).slice(0, 3);
        return finish({
            id: id, topic: "escuta-frase",
            prompt: "Ouça a frase e escolha a tradução.",
            speak: spoken(verb.ex[0]), heard: verb.ex[0],
            correct: correct, wrong: picked,
            explain: "Você ouviu: " + verb.ex[0] + " («" + correct + "»)."
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

    /* ---------- Prova no formato JLPT (jlpt/data/n5-exam-vocab.js) ---------- */

    // Sons parecidos que a prova usa como alternativas erradas: som duplo (っ), vogal longa e dakuten.
    var VOICED = { "か": "が", "き": "ぎ", "く": "ぐ", "け": "げ", "こ": "ご", "さ": "ざ", "し": "じ", "す": "ず", "せ": "ぜ", "そ": "ぞ",
                   "た": "だ", "て": "で", "と": "ど", "は": "ば", "ひ": "び", "ふ": "ぶ", "へ": "べ", "ほ": "ぼ" };
    var UNVOICED = {};
    Object.keys(VOICED).forEach(function (k) { UNVOICED[VOICED[k]] = k; });
    var O_COLUMN = "おこそとのほもよろをごぞどぼぽょ", E_COLUMN = "えけせてねへめれげぜでべぺ";
    var SMALL_TSU_NEXT = "かきくけこさしすせそたちつてとぱぴぷぺぽ";

    // Todas as variações de uma só mudança na leitura (sem repetir e sem a própria leitura).
    function soundVariants(r) {
        var out = [];
        function push(t) { if (t !== r && out.indexOf(t) === -1) out.push(t); }
        var chars = r.split("");
        chars.forEach(function (c, i) {
            var head = r.slice(0, i), tail = r.slice(i + 1);
            var afterTsu = i > 0 && chars[i - 1] === "っ";
            if (VOICED[c] && !afterTsu) push(head + VOICED[c] + tail);
            if (UNVOICED[c] && !afterTsu) push(head + UNVOICED[c] + tail);
            if (c === "は" || c === "ひ" || c === "ふ" || c === "へ" || c === "ほ") push(head + String.fromCharCode(c.charCodeAt(0) + 2) + tail);
            if (c === "っ") push(head + tail);
            if (i > 0 && c !== "っ" && c !== "ー" && SMALL_TSU_NEXT.indexOf(c) !== -1 && chars[i - 1] !== "っ" && chars[i - 1] !== "ん") push(head + "っ" + c + tail);
            if (i > 0 && i < chars.length - 1 && O_COLUMN.indexOf(c) !== -1 && chars[i + 1] !== "う") push(head + c + "う" + tail);
            if (i > 0 && i < chars.length - 1 && E_COLUMN.indexOf(c) !== -1 && chars[i + 1] !== "い") push(head + c + "い" + tail);
            if ((c === "う" || c === "い") && i > 0 && (O_COLUMN.indexOf(chars[i - 1]) !== -1 || E_COLUMN.indexOf(chars[i - 1]) !== -1)) push(head + tail);
        });
        return out;
    }

    function underlined(sentence) {
        var m = /\*([^*]+)\*/.exec(sentence);
        return m ? m[1] : "";
    }

    function examYomi(item) {
        var id = "ex:" + item.id;
        var word = underlined(item.s);
        var right = N.readingText(word);
        var seed = hash(id);
        var first = soundVariants(right);
        // Se faltar variação (palavra curta), muda mais uma vez a partir das que já existem.
        if (item.w) {   // palavras curtas: alternativas escritas à mão
            return finish({
                id: id, topic: "prova-yomi", exam: { mondai: 1 }, sentence: item.s, correct: right, wrong: item.w,
                explain: N.plainText(word) + " lê-se " + right + " (" + item.pt + ")." + (item.note ? " " + item.note : "")
            });
        }
        var pool = first.slice();
        first.forEach(function (v) { soundVariants(v).forEach(function (t) { if (t !== right && pool.indexOf(t) === -1) pool.push(t); }); });
        var wrong = shuffle(first, seed).concat(shuffle(pool.filter(function (t) { return first.indexOf(t) === -1; }), seed + 1)).slice(0, 3);
        return finish({
            id: id, topic: "prova-yomi", exam: { mondai: 1 }, sentence: item.s,
            correct: right, wrong: wrong,
            explain: N.plainText(word) + " lê-se " + right + " (" + item.pt + ")." + (item.note ? " " + item.note : "")
        });
    }

    function examHyouki(item) {
        var id = "ex:" + item.id;
        return finish({
            id: id, topic: "prova-hyouki", exam: { mondai: 2 }, sentence: item.s,
            correct: item.a, wrong: item.w,
            explain: underlined(item.s) + " (" + item.pt + ") escreve-se " + N.plainText(item.a) + "."
        });
    }

    // Gramática e leitura (jlpt/data/n5-exam-bunpo.js).
    // もんだい 2: as 4 peças vêm na ordem certa; a 3ª fica em ★. Mostra "pre □ □ ★ □ post".
    function examOrder(item) {
        return finish({
            id: "ex:" + item.id, topic: "prova-bunpo2", exam: { mondai: 2 },
            sentence: [item.pre, "□ □ ★ □", item.post].filter(Boolean).join(" "),
            correct: item.parts[2], wrong: [item.parts[0], item.parts[1], item.parts[3]],
            explain: item.why
        });
    }

    function examBlank(text, item, n) {
        var blank = item.blanks[n - 1];
        return finish({
            id: "ex:" + item.id + ":" + n, topic: "prova-bunpo3", exam: { mondai: 3 }, group: item.id,
            passage: text, blankNo: n, correct: blank.a, wrong: blank.w, explain: blank.why
        });
    }

    function examRead(topic, mondai, item, q, n) {
        var b = {
            id: "ex:" + item.id + (n ? ":" + n : ""), topic: topic, exam: { mondai: mondai }, group: item.id,
            passage: item.text, question: q.q, correct: q.a, wrong: q.w, explain: q.why
        };
        if (item.table) { b.table = item.table; b.passage = item.lead; }
        return finish(b);
    }

    function examChoice(topic, mondai, item) {
        return finish({
            id: "ex:" + item.id, topic: topic, exam: { mondai: mondai }, sentence: item.s,
            correct: item.a, wrong: item.w, explain: item.why
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
        ["ref", "sentence", "hint", "glyph", "speak", "heard", "exam", "passage", "table", "question", "blankNo", "group"].forEach(function (k) { if (b[k]) q[k] = b[k]; });
        return q;
    }

    function create(data) {
        var verbs = (data && data.verbs) || [];
        var kanji = (data && data.kanji) || [];
        var grammar = (data && data.grammar) || [];
        var exam = (data && data.exam) || {};

        var byId = {};
        var idsByTopic = {};
        var groupsByTopic = {};   // temas com várias perguntas sobre o mesmo texto: [[id, id], ...]
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
            add("escuta-palavra", "lw:" + v.jp, function () { return listenWord(v, verbs); });
            if (v.ex) add("escuta-frase", "ls:" + v.jp, function () { return listenSentence(v, verbs); });
        });
        kanji.forEach(function (e) {
            add("kanji-significado", "kmean:" + e.k, function () { return kanjiMeaning(e, kanji); });
            if (readingsOf(e).length) add("kanji-leitura", "kread:" + e.k, function () { return kanjiReading(e, kanji); });
        });

        (exam.yomi || []).forEach(function (it) { add("prova-yomi", "ex:" + it.id, function () { return examYomi(it); }); });
        (exam.hyouki || []).forEach(function (it) { add("prova-hyouki", "ex:" + it.id, function () { return examHyouki(it); }); });
        (exam.bunmyaku || []).forEach(function (it) { add("prova-bunmyaku", "ex:" + it.id, function () { return examChoice("prova-bunmyaku", 3, it); }); });
        (exam.iikae || []).forEach(function (it) { add("prova-iikae", "ex:" + it.id, function () { return examChoice("prova-iikae", 4, it); }); });

        function addGroup(topic, ids) { (groupsByTopic[topic] = groupsByTopic[topic] || []).push(ids); }
        (exam.grammar1 || []).forEach(function (it) { add("prova-bunpo1", "ex:" + it.id, function () { return examChoice("prova-bunpo1", 1, it); }); });
        (exam.order || []).forEach(function (it) { add("prova-bunpo2", "ex:" + it.id, function () { return examOrder(it); }); });
        (exam.text || []).forEach(function (it) {
            var ids = it.blanks.map(function (b, i) { return "ex:" + it.id + ":" + (i + 1); });
            ids.forEach(function (id, i) { add("prova-bunpo3", id, function () { return examBlank(it.text, it, i + 1); }); });
            addGroup("prova-bunpo3", ids);
        });
        (exam.short || []).forEach(function (it) { add("prova-dokkai-tan", "ex:" + it.id, function () { return examRead("prova-dokkai-tan", 4, it, it); }); });
        (exam.mid || []).forEach(function (it) {
            var ids = it.qs.map(function (q, i) { return "ex:" + it.id + ":" + (i + 1); });
            ids.forEach(function (id, i) { add("prova-dokkai-chu", id, function () { return examRead("prova-dokkai-chu", 5, it, it.qs[i], i + 1); }); });
            addGroup("prova-dokkai-chu", ids);
        });
        (exam.search || []).forEach(function (it) { add("prova-dokkai-joho", "ex:" + it.id, function () { return examRead("prova-dokkai-joho", 6, it, it); }); });

        return {
            topics: TOPICS.slice(),
            ids: function (topicId) { return topicId ? (idsByTopic[topicId] || []).slice() : Object.keys(byId); },
            // Grupos de questões que dividem um texto (os outros temas: cada questão é um grupo).
            groups: function (topicId) {
                return groupsByTopic[topicId] ? groupsByTopic[topicId].map(function (g) { return g.slice(); })
                    : (idsByTopic[topicId] || []).map(function (id) { return [id]; });
            },
            get: function (id) { return byId[id] ? byId[id]() : null; }
        };
    }

    var api = { create: create, TOPICS: TOPICS, hash: hash, shuffle: shuffle, spoken: spoken, soundVariants: soundVariants };

    if (typeof module !== "undefined" && module.exports) { module.exports = api; return; }
    root.QuestionBank = api;
})(typeof window !== "undefined" ? window : globalThis);
