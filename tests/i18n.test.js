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
