#!/usr/bin/env node
/*
 * Ferramentas para lições novas.
 *
 *   node scripts/new-lesson.js new 20 --topic "Tema" --topic-en "Topic" [--desc "..." --desc-en "..."]
 *       cria lessons/lesson-20.html (a partir da última lição), lessons/data/lesson-20.js (esqueleto
 *       bilíngue que já passa nos testes) e a entrada em assets/js/lessons-index.js; depois roda update-sw.js.
 *
 *   node scripts/new-lesson.js romaji lessons/data/lesson-20.js [--check]
 *       preenche o `romaji` que falta: no vocabulário a partir de `jp`, nas questões a partir de `a`.
 *       Nunca troca um romaji já escrito. Com --check só confere: lista onde o romaji escrito difere do gerado.
 *
 * O romaji automático acerta a maior parte das frases; revise à mão nomes próprios, números e leituras
 * especiais (veja "Romaji" no README).
 */
"use strict";

const fs = require("node:fs");
const path = require("node:path");
const { execFileSync } = require("node:child_process");
const Notation = require("../assets/js/notation.js");

const ROOT = path.join(__dirname, "..");

/* ---------- Romaji ---------- */

// Ajustes na notação antes do romaji: palavra de ligação separada, como a escrita à mão do projeto.
function prepare(notation) {
    return notation
        .replace(/<[^>]+>/g, " ")
        // は e へ colados a um substantivo (depois de }, さん, ちゃん ou katakana) são partículas: wa / e.
        .replace(/(\}|さん|ちゃん|[゠-ヿ])([はへ])(?![ぁ-ん])/g, "$1^$2")
        .replace(/(\}|さん|ちゃん|[゠-ヿ])([はへ])(?=[ぁ-ん])/g, (m, a, b) => /^(はい|はや|はな|はじ|へや|へた)/.test(m.slice(1)) ? m : a + "^" + b)
        .replace(/([てで])も(?=いい)/g, "$1も ")
        .replace(/\}(し(?:ます|ました|ません|ませんでした|て|た|ない|ましょう)|する|すれば)/g, "} $1")   // 掃除 します
        .replace(/こと(が|は|を|も)(?=\s|$|、|。)/g, "こと $1")                         // koto ga
        .replace(/こと(です|でした)/g, "こと $1");
}

// Frase (termina em 。！？ ou é longa) ➔ "Maiúscula inicial." ; palavra solta ➔ minúsculas, sem pontuação.
function romajiFor(jp) {
    const text = prepare(jp).replace(/\s+/g, " ").trim();
    let r = Notation.sentenceRomaji(text).replace(/[….]+$/, "").trim();
    const end = /[。！？]\s*$/.exec(jp.replace(/<[^>]+>/g, ""));
    if (end) {
        r = r.replace(/[.!?]+$/, "");
        r = r.charAt(0).toUpperCase() + r.slice(1) + { "。": ".", "！": "!", "？": "?" }[end[0].trim()];
    }
    // Maria-san, Tanaka-san: hífen antes de san/chan quando o nome é kanji ou katakana.
    if (/(\}|[゠-ヿー])(さん|ちゃん)/.test(jp)) r = r.replace(/([a-zāīūēō])(san|chan)(?=[ ,.!?]|$)/g, "$1-$2");
    return r;
}

// Casos em que o romaji gerado merece revisão: números, diálogos, tags HTML.
function needsReview(jp, made) {
    const why = [];
    if (/\d/.test(made)) why.push("número (escreva por extenso: nijuugo...)");
    if (/…|\.\.\./.test(jp) || /<br/i.test(jp)) why.push("diálogo");
    if (/[^\x00-\x7f]/.test(made.replace(/[āīūēō]/g, ""))) why.push("sobrou japonês");
    return why;
}

const norm = (s) => String(s).toLowerCase().replace(/[^a-zāīūēō0-9]/g, "");

// Linhas de dados: vocabulário tem { jp: "...", ...} e questões { q: "...", a: "...", ... }, uma por linha.
const LINE_VOCAB = /^(\s*)\{ jp: "((?:[^"\\]|\\.)*)"(.*)$/;
const ANSWER = /\ba: "((?:[^"\\]|\\.)*)"/;

function processFile(file, check) {
    const lines = fs.readFileSync(file, "utf8").split("\n");
    let filled = 0, differ = [], kept = 0; const review = [];
    const out = lines.map((line, i) => {
        let source = null, anchor = null;
        const v = LINE_VOCAB.exec(line);
        if (v && !/\bq: "/.test(line)) { source = v[2]; anchor = new RegExp('jp: "' + v[2].replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + '"'); }
        else {
            const a = ANSWER.exec(line);
            if (a && /\bq: "/.test(line)) { source = a[1]; anchor = new RegExp('a: "' + a[1].replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + '"'); }
        }
        if (source === null) return line;
        const have = /\bromaji: "((?:[^"\\]|\\.)*)"/.exec(line);
        const made = romajiFor(source);
        if (have) {
            kept++;
            if (norm(have[1]) !== norm(made)) differ.push({ line: i + 1, have: have[1], made });
            return line;
        }
        filled++;
        const why = needsReview(source, made);
        if (why.length) review.push({ line: i + 1, made, why: why.join(", ") });
        return check ? line : line.replace(anchor, (m) => m + ', romaji: ' + JSON.stringify(made));
    });
    if (!check && filled) fs.writeFileSync(file, out.join("\n"));
    return { filled, kept, differ, review };
}

/* ---------- Lição nova ---------- */

function skeleton(n, topic) {
    return `// Dados da lição ${n}. Formato descrito no README.md.
// Troque os textos de exemplo: português é o texto base e o inglês vem ao lado (en / <campo>_en).
// Rode \`node scripts/new-lesson.js romaji lessons/data/lesson-${n}.js\` para preencher o romaji que faltar.
window.lessonData = {
  vocab: {
    title: "{語彙|ごい} (Vocabulário)", title_en: "{語彙|ごい} (Vocabulary)",
    items: [
      { jp: "たべます", pt: "Comer (exemplo: troque)", en: "To eat (example: replace)" },
      { jp: "のみます", pt: "Beber (exemplo: troque)", en: "To drink (example: replace)" }
    ]
  },
  gramatica: {
    title: "{文法|ぶんぽう} (Gramática)", title_en: "{文法|ぶんぽう} (Grammar)",
    intro: "Apresentação curta dos pontos desta lição.", intro_en: "Short introduction to this lesson's points.",
    points: [
      {
        id: "exemplo",
        title: "Título do ponto", title_en: "Point title",
        pat: "N を V ます",
        short: "o que o ponto faz, em poucas palavras", short_en: "what the point does, in a few words",
        mean: "O que a estrutura expressa.", mean_en: "What the structure expresses.",
        rule: "Como se forma e quando se usa.", rule_en: "How it is formed and when it is used.",
        ex: [
          { jp: "パンを たべます。", pt: "Como pão.", en: "I eat bread." },
          { jp: "みずを のみます。", pt: "Bebo água.", en: "I drink water." }
        ],
        contrast: {
          rows: [
            { label: "estrutura A", label_en: "structure A", jp: "パンを たべます。", pt: "Como pão.", en: "I eat bread." },
            { label: "estrutura B", label_en: "structure B", jp: "みずを のみます。", pt: "Bebo água.", en: "I drink water." }
          ],
          note: "O que muda entre as duas.", note_en: "What changes between the two."
        },
        trap: ["Erro comum nº 1.", "Erro comum nº 2."],
        trap_en: ["Common mistake #1.", "Common mistake #2."]
      }
    ]
  },
  renshuuB: {
    title: "{練習|れんしゅう} B", title_en: "{練習|れんしゅう} B",
    exercises: [
      {
        desc: "1. Instrução do grupo de questões", desc_en: "1. Instruction for this group of questions",
        questions: [
          { q: "パン ➔", a: "パンを たべます。", pt: "Como pão.", en: "I eat bread." }
        ]
      }
    ]
  },
  montar: {
    title: "{組|く}み{立|た}て (Montar a frase)", title_en: "{組|く}み{立|た}て (Build the sentence)",
    exercises: [
      {
        desc: "Toque nas palavras na ordem certa para montar a frase.", desc_en: "Tap the words in the right order to build the sentence.",
        questions: [
          { tokens: ["パンを", "たべます。"], pt: "Como pão.", en: "I eat bread." }
        ]
      }
    ]
  }
};
`;
}

function parseArgs(argv) {
    const flags = {}, rest = [];
    for (let i = 0; i < argv.length; i++) {
        if (argv[i].startsWith("--")) { const key = argv[i].slice(2); flags[key] = argv[i + 1] && !argv[i + 1].startsWith("--") ? argv[++i] : true; }
        else rest.push(argv[i]);
    }
    return { flags, rest };
}

function q(s) { return JSON.stringify(s); }

function newLesson(n, flags) {
    if (!Number.isInteger(n) || n < 1 || n > 99) throw new Error("Número de lição inválido: " + n);
    const htmlFile = path.join(ROOT, "lessons", `lesson-${n}.html`);
    const dataFile = path.join(ROOT, "lessons", "data", `lesson-${n}.js`);
    if (fs.existsSync(htmlFile) || fs.existsSync(dataFile)) throw new Error(`A lição ${n} já existe.`);

    // O modelo é a última lição publicada.
    const existing = fs.readdirSync(path.join(ROOT, "lessons")).map((f) => /^lesson-(\d+)\.html$/.exec(f)).filter(Boolean).map((m) => Number(m[1])).sort((a, b) => a - b);
    const from = existing[existing.length - 1];
    if (from === undefined) throw new Error("Nenhuma lição para usar de modelo.");
    const html = fs.readFileSync(path.join(ROOT, "lessons", `lesson-${from}.html`), "utf8")
        .replace(`第${from}課`, `第${n}課`)
        .replace(`data-lesson="${from}"`, `data-lesson="${n}"`)
        .replace(`data/lesson-${from}.js`, `data/lesson-${n}.js`);
    fs.writeFileSync(htmlFile, html);

    const topic = flags.topic || `Tema da lição ${n}`;
    fs.writeFileSync(dataFile, skeleton(n, topic));

    const entry = [
        "    {",
        `        number: ${n},`,
        `        file: "lesson-${n}.html",`,
        `        topic: ${q(topic)},`,
        flags["topic-en"] ? `        topic_en: ${q(flags["topic-en"])},` : null,
        `        description: ${q(flags.desc || "Vocabulário, gramática e exercícios interativos.")},`,
        `        description_en: ${q(flags["desc-en"] || "Vocabulary, grammar and interactive exercises.")}`,
        "    }"
    ].filter(Boolean).join("\n");

    const indexFile = path.join(ROOT, "assets", "js", "lessons-index.js");
    let index = fs.readFileSync(indexFile, "utf8");
    const start = index.indexOf("window.LESSONS = [");
    const end = index.indexOf("\n];", start);
    if (start === -1 || end === -1) throw new Error("Não achei window.LESSONS em lessons-index.js");
    const next = /\n    \{\n        number: (\d+),/g;
    let insertAt = end, m;
    next.lastIndex = start;
    while ((m = next.exec(index)) && m.index < end) { if (Number(m[1]) > n) { insertAt = m.index; break; } }
    index = insertAt === end
        ? index.slice(0, end) + ",\n" + entry + index.slice(end)
        : index.slice(0, insertAt) + "\n" + entry + "," + index.slice(insertAt);
    fs.writeFileSync(indexFile, index);

    const r = processFile(dataFile, false);
    execFileSync(process.execPath, [path.join(__dirname, "update-sw.js")], { stdio: "ignore" });
    return { htmlFile, dataFile, romaji: r.filled };
}

/* ---------- main ---------- */

function main(argv) {
    const { flags, rest } = parseArgs(argv);
    const cmd = rest[0];
    if (cmd === "new") {
        const r = newLesson(Number(rest[1]), flags);
        console.log("Criado:", path.relative(ROOT, r.htmlFile), "e", path.relative(ROOT, r.dataFile), "(" + r.romaji + " romaji gerados)");
        console.log("Também foi acrescentada a entrada em assets/js/lessons-index.js e o sw.js foi atualizado.");
        console.log("Próximo passo: troque os textos de exemplo e rode `node --test`.");
    } else if (cmd === "romaji") {
        if (!rest[1]) throw new Error("Informe o arquivo: node scripts/new-lesson.js romaji lessons/data/lesson-NN.js");
        const file = path.resolve(rest[1]);
        const r = processFile(file, !!flags.check);
        if (flags.check) {
            console.log(r.kept + " romaji conferidos, " + r.differ.length + " diferentes do gerado" + (r.filled ? ", " + r.filled + " ainda faltam" : "") + ".");
            r.differ.forEach((d) => console.log("  linha " + d.line + ": escrito «" + d.have + "» / gerado «" + d.made + "»"));
        } else {
            console.log(r.filled + " romaji preenchidos (" + r.kept + " já existiam e foram mantidos).");
            r.review.forEach((d) => console.log("  revise a linha " + d.line + ": «" + d.made + "» — " + d.why));
            if (r.filled) execFileSync(process.execPath, [path.join(__dirname, "update-sw.js")], { stdio: "ignore" });
        }
    } else {
        console.log("Uso:\n  node scripts/new-lesson.js new NN --topic \"...\" --topic-en \"...\"\n  node scripts/new-lesson.js romaji lessons/data/lesson-NN.js [--check]");
        process.exitCode = cmd ? 1 : 0;
    }
}

if (require.main === module) {
    try { main(process.argv.slice(2)); } catch (e) { console.error("Erro:", e.message); process.exitCode = 1; }
}
module.exports = { needsReview, romajiFor, processFile, skeleton, prepare };
