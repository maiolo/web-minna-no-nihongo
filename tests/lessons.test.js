// Padrão dos dados das lições: node --test
// Furigana só na notação {漢字|かんじ} (nunca <ruby> escrito à mão), sem kanji solto e sem estilo inline.
"use strict";

const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const N = require("../assets/js/notation.js");

const ROOT = path.join(__dirname, "..");
const read = (f) => fs.readFileSync(path.join(ROOT, f), "utf8");
const FILES = fs.readdirSync(path.join(ROOT, "lessons/data")).filter((f) => /^lesson-\d+\.js$/.test(f))
    .map((f) => "lessons/data/" + f);
const hasBareKanji = (s) => /[一-鿿]/.test(s.replace(/\{[^}]*\}/g, "").replace(/<[^>]*>/g, ""));

function load(file) {
    const ctx = { window: {} };
    vm.createContext(ctx);
    vm.runInContext(read(file), ctx);
    return ctx.window.lessonData;
}

// Percorre todos os textos de um objeto e devolve [caminho, texto].
function strings(value, trail = "", out = []) {
    if (typeof value === "string") out.push([trail, value]);
    else if (Array.isArray(value)) value.forEach((v, i) => strings(v, trail + "[" + i + "]", out));
    else if (value && typeof value === "object") Object.keys(value).forEach((k) => strings(value[k], trail + "." + k, out));
    return out;
}

test("há lições para conferir", () => assert.ok(FILES.length >= 4));

FILES.forEach((file) => {
    test(file + ": sem <ruby> escrito à mão e sem style= inline", () => {
        const text = read(file);
        assert.ok(!/<\/?(ruby|rt)\b/.test(text), "use {漢字|かんじ} no lugar de <ruby>");
        assert.ok(!/style\s*=/.test(text), "use uma classe de style.css no lugar de style=");
    });

    test(file + ": todo kanji tem furigana e as chaves fecham", () => {
        strings(load(file)).forEach(([where, text]) => {
            assert.equal((text.match(/\{/g) || []).length, (text.match(/\}/g) || []).length, where + ": chaves desbalanceadas");
            assert.ok(!hasBareKanji(text), where + ": kanji sem furigana em «" + text.slice(0, 60) + "»");
        });
    });

    test(file + ": cada {kanji|leitura} tem leitura em kana", () => {
        strings(load(file)).forEach(([where, text]) => {
            (text.match(/\{[^}]*\}/g) || []).forEach((m) => {
                const parts = m.slice(1, -1).split("|");
                assert.equal(parts.length, 2, where + ": bloco inválido " + m);
                assert.match(parts[0], /^[一-鿿々]+$/, where + ": a base de " + m + " deve ser só kanji");
                assert.match(parts[1], /^[぀-ゟ゠-ヿー]+$/, where + ": a leitura de " + m + " deve ser só kana");
            });
        });
    });

    test(file + ": convertDeep não deixa chaves de notação na página", () => {
        strings(N.convertDeep(load(file))).forEach(([where, text]) => {
            assert.ok(!/\{[^}]*\|[^}]*\}/.test(text), where + ": notação sem converter");
        });
    });
});

test("lessons-index.js: textos em notação, sem <ruby> escrito à mão", () => {
    const text = read("assets/js/lessons-index.js").replace(/\/\*[\s\S]*?\*\//g, "").replace(/window\.lessonLabel[\s\S]*?\};/, "");
    assert.ok(!/<ruby>/.test(text), "use {漢字|かんじ} em topic, description, label e SECTION_LABELS");
});

test("Notation.toHtml e convertDeep", () => {
    assert.equal(N.toHtml("{見学|けんがく}します"), "<ruby>見学<rt>けんがく</rt></ruby>します");
    assert.equal(N.toHtml("A {本|ほん} B"), "A <ruby>本<rt>ほん</rt></ruby> B", "espaços e texto ficam");
    assert.equal(N.toHtml('<p class="x">{私|わたし}</p>'), '<p class="x"><ruby>私<rt>わたし</rt></ruby></p>');
    const out = N.convertDeep({ a: ["{日|ひ}", { b: "{月|つき}" }], n: 3 });
    assert.deepEqual(out, { a: ["<ruby>日<rt>ひ</rt></ruby>", { b: "<ruby>月<rt>つき</rt></ruby>" }], n: 3 });
});
