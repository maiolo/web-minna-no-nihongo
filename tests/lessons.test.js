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

/* ---------- gramatica.points (cartões de gramática com exemplos) ---------- */

const WITH_POINTS = FILES.filter((f) => load(f).gramatica && load(f).gramatica.points);

test("há pelo menos uma lição no formato de pontos", () => assert.ok(WITH_POINTS.length >= 1));

WITH_POINTS.forEach((file) => {
    const data = load(file);
    const points = data.gramatica.points;

    test(file + ": cada ponto tem os campos obrigatórios e id único", () => {
        const ids = new Set();
        points.forEach((p) => {
            ["id", "title", "pat", "short", "mean"].forEach((k) => assert.ok(p[k], (p.id || "?") + ": falta " + k));
            assert.match(p.id, /^[a-z0-9-]+$/, "id inválido: " + p.id);
            assert.ok(!ids.has(p.id), "id repetido: " + p.id);
            ids.add(p.id);
            assert.ok(Array.isArray(p.ex) && p.ex.length >= 2, p.id + ": traga ao menos 2 exemplos");
            p.ex.forEach((e) => assert.ok(e.jp && e.pt, p.id + ": exemplo sem jp ou pt"));
        });
    });

    test(file + ": pontos com comparação e armadilha, como no padrão da lição", () => {
        points.forEach((p) => {
            assert.ok(p.contrast && Array.isArray(p.contrast.rows) && p.contrast.rows.length >= 2, p.id + ": falta o contraste (2 linhas)");
            p.contrast.rows.forEach((r) => assert.ok(r.label && r.jp && r.pt, p.id + ": linha de contraste incompleta"));
            assert.ok(p.trap && [].concat(p.trap).length >= 1, p.id + ": falta a armadilha");
        });
    });

    test(file + ": a aba Padrões foi absorvida pelos cartões", () => {
        assert.equal(data.bunkei, undefined, "bunkei e points não devem coexistir");
    });

    test(file + ": o romaji dos exemplos existe (manual ou gerável) e a notação converte sem restos", () => {
        points.forEach((p) => p.ex.forEach((e) => {
            const r = e.romaji || N.sentenceRomaji(e.jp.replace(/<br\s*\/?>/gi, " "));
            assert.match(r, /^[a-z' ,.!?…\-]+$/i, p.id + ": romaji estranho para " + e.jp.slice(0, 30));
            assert.ok(!/\^/.test(N.toHtml(e.jp)), p.id + ": sobrou ^ na frase");
        }));
    });
});

test("Notation.toHtml tira o ^ de ^は e ^へ", () => {
    assert.equal(N.toHtml("{私|わたし}^は {京都|きょうと}^へ"), "<ruby>私<rt>わたし</rt></ruby>は <ruby>京都<rt>きょうと</rt></ruby>へ");
});
