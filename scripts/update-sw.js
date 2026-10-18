#!/usr/bin/env node
// Atualiza a lista de arquivos e a versão do cache em sw.js.
//   node scripts/update-sw.js
// Rode sempre que mudar, criar ou remover um arquivo do site (os testes avisam se esquecer).
"use strict";

const fs = require("node:fs");
const path = require("node:path");
const crypto = require("node:crypto");

const ROOT = path.join(__dirname, "..");
const SKIP_DIRS = new Set([".git", "node_modules", "tests", "scripts", "docs"]);
const KEEP_EXT = new Set([".html", ".css", ".js", ".svg", ".png", ".webmanifest"]);
const SKIP_FILES = new Set(["sw.js"]);

function walk(dir, base) {
    let out = [];
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
        const rel = base ? base + "/" + entry.name : entry.name;
        if (entry.isDirectory()) {
            if (!SKIP_DIRS.has(entry.name)) out = out.concat(walk(path.join(dir, entry.name), rel));
        } else if (KEEP_EXT.has(path.extname(entry.name)) && !SKIP_FILES.has(rel)) {
            out.push(rel);
        }
    }
    return out;
}

function computeAssets(root) {
    return ["./"].concat(walk(root || ROOT, "").sort());
}

function computeVersion(root, assets) {
    const hash = crypto.createHash("sha1");
    (assets || computeAssets(root)).forEach((a) => {
        hash.update(a);
        if (a !== "./") hash.update(fs.readFileSync(path.join(root || ROOT, a)));
    });
    return hash.digest("hex").slice(0, 10);
}

function render(assets, version) {
    return "// ASSETS:START\n" +
        'const VERSION = "' + version + '";\n' +
        "const ASSETS = " + JSON.stringify(assets, null, 2) + ";\n" +
        "// ASSETS:END";
}

function update(root) {
    const file = path.join(root || ROOT, "sw.js");
    const assets = computeAssets(root);
    const next = fs.readFileSync(file, "utf8")
        .replace(/\/\/ ASSETS:START[\s\S]*\/\/ ASSETS:END/, render(assets, computeVersion(root, assets)));
    fs.writeFileSync(file, next);
    return assets.length;
}

module.exports = { computeAssets, computeVersion, render };

if (require.main === module) {
    console.log("sw.js atualizado com " + update() + " arquivos.");
}
