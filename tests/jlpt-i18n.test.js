// Traduções em inglês dos dados do JLPT: cobertura e pares com o português.
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

function load(file, name) {
    const ctx = { window: {} };
    vm.createContext(ctx);
    vm.runInContext(fs.readFileSync(path.join(__dirname, "..", file), "utf8"), ctx);
    return ctx.window[name];
}

const isTail = (v) => v && typeof v === "object" && !Array.isArray(v) && Object.keys(v).length === 1 && typeof v.en === "string";

// Todo "en" tem "pt", todo "X_en" tem "X" e todo { en } fecha uma lista curta com o texto antes dele.
function check(value, trail, errors) {
    if (Array.isArray(value)) {
        value.forEach((v, i) => { if (isTail(v)) { if (i === 0 || typeof value[i - 1] !== "string") errors.push(trail + "[" + i + "]: { en } sem texto antes"); } else check(v, trail + "[" + i + "]", errors); });
    } else if (value && typeof value === "object") {
        Object.keys(value).forEach((k) => {
            const base = k === "en" ? "pt" : k.endsWith("_en") ? k.slice(0, -3) : null;
            if (base) {
                if (!(base in value)) errors.push(trail + "." + k + ": falta «" + base + "»");
                else if (Array.isArray(value[base]) !== Array.isArray(value[k]) || (Array.isArray(value[k]) && value[k].length !== value[base].length)) errors.push(trail + "." + k + ": formato diferente de «" + base + "»");
            } else check(value[k], trail + "." + k, errors);
        });
    }
}

const kanji = ["n5-kanji-1", "n5-kanji-2", "n5-kanji-3"].map((f) => load("jlpt/data/" + f + ".js", "JLPT_N5_KANJI"));
// as três partes somam na mesma lista global; load() devolve a lista acumulada de cada arquivo isolado
const verbs = load("jlpt/data/n5-verbs.js", "JLPT_N5_VERBS");
const grammar = load("jlpt/data/n5-grammar.js", "JLPT_N5_GRAMMAR");
const SETS = {
    "verbos": [verbs, "verbs"],
    "gramática": [grammar, "grammar"],
    "kanji (parte 1)": [kanji[0], "kanji"],
    "kanji (parte 2)": [kanji[1], "kanji"],
    "kanji (parte 3)": [kanji[2], "kanji"]
};

Object.keys(SETS).forEach((name) => {
    const [list, kind] = SETS[name];
    test(name + ": pares pt/en consistentes", () => {
        const errors = [];
        check(list, "", errors);
        assert.deepEqual(errors, []);
    });
    if (kind === "kanji") {
        test(name + ": significado, exemplos e dicas têm inglês", () => {
            const missing = [];
            list.forEach((e) => {
                if (!e.en) missing.push(e.k + ": significado");
                if (e.note && !e.note_en) missing.push(e.k + ": dica");
                e.ex.forEach((x, i) => { if (!isTail(x[x.length - 1])) missing.push(e.k + ": exemplo " + (i + 1)); });
            });
            assert.deepEqual(missing, []);
        });
    }
    if (kind === "verbs") {
        test(name + ": significado, exemplo e dicas têm inglês", () => {
            const missing = [];
            list.forEach((v) => {
                if (!v.en) missing.push(v.jp + ": significado");
                if (v.note && !v.note_en) missing.push(v.jp + ": dica");
                if (v.ex && !isTail(v.ex[v.ex.length - 1])) missing.push(v.jp + ": exemplo");
            });
            assert.deepEqual(missing, []);
        });
    }
    if (kind === "grammar") {
        test(name + ": título, explicações e exemplos têm inglês", () => {
            const missing = [];
            list.forEach((p) => {
                ["title", "mean", "rule"].forEach((k) => { if (!p[k + "_en"]) missing.push(p.id + ": " + k); });
                if (p.note && !p.note_en) missing.push(p.id + ": dica");
                p.ex.forEach((x, i) => { if (!isTail(x[x.length - 1])) missing.push(p.id + ": exemplo " + (i + 1)); });
            });
            assert.deepEqual(missing, []);
        });
    }
});

// Cobertura: todo texto em português dos dados do JLPT tem a versão em inglês.
const COVER = [
    ["jlpt/data/n5-exam-vocab.js", "JLPT_N5_EXAM"], ["jlpt/data/n5-exam-bunpo.js", "JLPT_N5_EXAM"], ["jlpt/data/n5-exam-choukai.js", "JLPT_N5_EXAM"],
    ["jlpt/data/n5-questions.js", "JLPT_N5_QUESTIONS"], ["jlpt/data/n5-grammar.js", "JLPT_N5_GRAMMAR"], ["jlpt/data/n5-verbs.js", "JLPT_N5_VERBS"],
    ["jlpt/data/n5-kanji-1.js", "JLPT_N5_KANJI"], ["jlpt/data/n5-kanji-2.js", "JLPT_N5_KANJI"], ["jlpt/data/n5-kanji-3.js", "JLPT_N5_KANJI"]
];
const TEXT_KEYS = ["pt", "why", "note", "mean", "rule"];
const looksPortuguese = (s) => /[a-zçãõéáíóúâêô]{3,}/i.test(String(s).replace(/\{[^}]*\}/g, ""));
function missing(value, trail, out) {
    if (Array.isArray(value)) value.forEach((v, i) => missing(v, trail + "[" + i + "]", out));
    else if (value && typeof value === "object") {
        Object.keys(value).forEach((k) => {
            const v = value[k];
            if (typeof v === "string" && TEXT_KEYS.includes(k) && looksPortuguese(v)) {
                const en = k === "pt" ? value.en : value[k + "_en"];
                if (typeof en !== "string" || !en) out.push(trail + "." + k + ": «" + v.slice(0, 40) + "»");
            } else if (typeof v === "object") missing(v, trail + "." + k, out);
        });
    }
}
COVER.forEach(([file, name]) => {
    test(file + ": todo texto em português tem a versão em inglês", () => {
        const out = [];
        missing(load(file, name), "", out);
        assert.deepEqual(out, []);
    });
});
