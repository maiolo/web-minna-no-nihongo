const test = require("node:test");
const assert = require("node:assert/strict");
const I18n = require("../assets/js/i18n.js");
const strings = require("../assets/js/i18n-strings.js");

test("localize: 'en' substitui 'pt' e '<campo>_en' substitui o campo, em qualquer nível", () => {
    const data = {
        title: "Gramática", title_en: "Grammar",
        ex: [{ jp: "犬", pt: "cão", en: "dog" }],
        trap: ["a", "b"], trap_en: ["A", "B"],
        sub: { mean: "x", mean_en: "y" }
    };
    const en = I18n.localize(data, "en");
    assert.equal(en.title, "Grammar");
    assert.deepEqual(en.ex, [{ jp: "犬", pt: "dog" }]);
    assert.deepEqual(en.trap, ["A", "B"]);
    assert.equal(en.sub.mean, "y");
    assert.equal(JSON.stringify(en).includes("_en"), false);
});

test("localize: sem tradução cai no português; em pt as traduções são descartadas; não altera a origem", () => {
    const data = { a: "um", b: "dois", b_en: "two", c: { pt: "três" }, d: "quatro", d_en: "" };
    const en = I18n.localize(data, "en");
    assert.deepEqual(en, { a: "um", b: "two", c: { pt: "três" }, d: "quatro" });
    const pt = I18n.localize(data, "pt");
    assert.deepEqual(pt, { a: "um", b: "dois", c: { pt: "três" }, d: "quatro" });
    assert.equal(data.b_en, "two");
});

test("localize: números, nulos e textos passam sem mudar", () => {
    assert.equal(I18n.localize(3, "en"), 3);
    assert.equal(I18n.localize(null, "en"), null);
    assert.equal(I18n.localize("oi", "en"), "oi");
});

test("t: usa o idioma pedido, cai no português e depois na chave; troca {variáveis}", () => {
    I18n.add("pt", { "x.ola": "Olá {nome}", "x.so": "só pt" });
    I18n.add("en", { "x.ola": "Hello {nome}" });
    assert.equal(I18n.t("x.ola", { nome: "Ana" }, "en"), "Hello Ana");
    assert.equal(I18n.t("x.ola", { nome: "Ana" }, "pt"), "Olá Ana");
    assert.equal(I18n.t("x.so", null, "en"), "só pt");
    assert.equal(I18n.t("x.nada", null, "en"), "x.nada");
    assert.equal(I18n.t("x.ola", {}, "en"), "Hello {nome}");
});

test("i18n-strings: pt e en têm exatamente as mesmas chaves e nenhum texto vazio", () => {
    const pt = Object.keys(strings.pt).sort();
    const en = Object.keys(strings.en).sort();
    assert.deepEqual(en, pt);
    pt.forEach((k) => {
        assert.ok(strings.pt[k].trim(), "pt vazio em " + k);
        assert.ok(strings.en[k].trim(), "en vazio em " + k);
    });
    // as variáveis {x} precisam ser as mesmas nos dois idiomas
    pt.forEach((k) => {
        const vars = (s) => (s.match(/\{\w+\}/g) || []).sort().join();
        assert.equal(vars(strings.en[k]), vars(strings.pt[k]), "variáveis diferentes em " + k);
    });
});

test("toda chave usada no código (T, I18n.t, data-i18n) existe em pt e en", () => {
    const fs = require("node:fs");
    const path = require("node:path");
    const root = path.join(__dirname, "..");
    const files = [];
    (function walk(dir) {
        fs.readdirSync(dir, { withFileTypes: true }).forEach((e) => {
            if (e.name === "node_modules" || e.name === ".git" || e.name === "tests") return;
            const full = path.join(dir, e.name);
            if (e.isDirectory()) walk(full);
            else if (/\.(js|html)$/.test(e.name) && e.name !== "i18n-strings.js" && e.name !== "sw.js") files.push(full);
        });
    })(root);
    const used = new Map();
    files.forEach((f) => {
        const text = fs.readFileSync(f, "utf8");
        const rel = path.relative(root, f);
        const add = (k) => { if (/^[a-z][\w]*\.[\w.]+$/i.test(k)) used.set(k, rel); };
        let m;
        const calls = /\b(?:T|I18n\.t|t|msg)\("([^"]+)"/g;
        while ((m = calls.exec(text))) add(m[1]);
        // chaves em condicionais, como T(ok ? "a.b" : "c.d"): qualquer texto "area.nome" de uma área que existe no dicionário
        const areas = new Set(Object.keys(strings.pt).map((k) => k.split(".")[0]));
        const literals = /"([a-z]+\.[A-Za-z0-9.]+)"/g;
        while ((m = literals.exec(text))) if (areas.has(m[1].split(".")[0]) && !/\.(js|html|css|json)$/.test(m[1])) add(m[1]);
        const attrs = /data-i18n(?:-html)?="([^"]+)"/g;
        while ((m = attrs.exec(text))) add(m[1]);
        const pairs = /data-i18n-attr="([^"]+)"/g;
        while ((m = pairs.exec(text))) m[1].split(";").forEach((p) => add(p.slice(p.indexOf(":") + 1).trim()));
    });
    assert.ok(used.size > 20, "esperava achar chaves no código");
    const missing = [...used].filter(([k]) => !(k in strings.pt) || !(k in strings.en)).map(([k, f]) => k + " (" + f + ")");
    assert.deepEqual(missing, []);
});

test("localize: em listas curtas, { en } no fim substitui o item anterior e some", () => {
    const data = { ex: [["み(る)", "{見|み}ます。", "Vejo.", { en: "I see." }], ["ケン", "{見学|けんがく}", "Visita."]] };
    const en = I18n.localize(data, "en");
    assert.deepEqual(en.ex[0], ["み(る)", "{見|み}ます。", "I see."]);
    assert.deepEqual(en.ex[1], ["ケン", "{見学|けんがく}", "Visita."]);
    const pt = I18n.localize(data, "pt");
    assert.deepEqual(pt.ex[0], ["み(る)", "{見|み}ます。", "Vejo."]);
    assert.equal(data.ex[0].length, 4, "não altera a origem");
});
