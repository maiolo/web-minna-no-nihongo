// Garante que sw.js lista todos os arquivos do site e está com a versão em dia.
// Se falhar: rode `node scripts/update-sw.js` e faça o commit de novo.
"use strict";

const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const { computeAssets, computeVersion, render } = require("../scripts/update-sw.js");

const ROOT = path.join(__dirname, "..");
const sw = fs.readFileSync(path.join(ROOT, "sw.js"), "utf8");

test("sw.js tem a lista de arquivos e a versão atuais (rode scripts/update-sw.js)", () => {
    const assets = computeAssets(ROOT);
    const expected = render(assets, computeVersion(ROOT, assets));
    assert.ok(sw.includes(expected), "sw.js está desatualizado: node scripts/update-sw.js");
});

test("todo arquivo listado existe e o manifesto aponta para ícones que existem", () => {
    computeAssets(ROOT).filter((a) => a !== "./").forEach((a) => assert.ok(fs.existsSync(path.join(ROOT, a)), a));
    const manifest = JSON.parse(fs.readFileSync(path.join(ROOT, "manifest.webmanifest"), "utf8"));
    manifest.icons.forEach((icon) => assert.ok(fs.existsSync(path.join(ROOT, icon.src)), icon.src));
    assert.equal(manifest.start_url, "./index.html");
});

test("toda página HTML liga o manifesto e registra o service worker", () => {
    computeAssets(ROOT).filter((a) => a.endsWith(".html")).forEach((page) => {
        const html = fs.readFileSync(path.join(ROOT, page), "utf8");
        assert.match(html, /manifest\.webmanifest/, page);
        assert.match(html, /assets\/js\/pwa\.js/, page);
    });
});
