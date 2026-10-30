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
const SETS = {
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
});
