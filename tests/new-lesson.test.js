// scripts/new-lesson.js: romaji automático e criação de uma lição nova (numa cópia temporária do projeto).
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");
const { execFileSync } = require("node:child_process");
const { romajiFor, needsReview } = require("../scripts/new-lesson.js");

const ROOT = path.join(__dirname, "..");

test("romajiFor: frases ganham maiúscula e ponto; palavras soltas ficam em minúsculas", () => {
    assert.equal(romajiFor("{寿司|すし}を {食|た}べた ことが あります。"), "Sushi o tabeta koto ga arimasu.");
    assert.equal(romajiFor("{登|のぼ}ります"), "noborimasu");
    assert.equal(romajiFor("{掃除|そうじ}します"), "souji shimasu");
});

test("romajiFor: は e へ depois de substantivo são partículas; さん leva hífen", () => {
    assert.equal(romajiFor("{私|わたし}は {学生|がくせい}です。"), "Watashi wa gakusei desu.");
    assert.equal(romajiFor("{京都|きょうと}へ {行|い}きます。"), "Kyouto e ikimasu.");
    assert.equal(romajiFor("ミラーさんは {若|わか}いです。"), "Miraa-san wa wakai desu.");
});

test("needsReview: números, diálogos e sobras de japonês pedem revisão", () => {
    assert.ok(needsReview("{28|にじゅうはち}さい", "28sai").length);
    assert.ok(needsReview("A…B", "a…b").length);
    assert.deepEqual(needsReview("たべます", "tabemasu"), []);
});

test("new: cria a lição, registra no índice e o projeto continua passando nos testes", () => {
    const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "lesson-"));
    ["lessons", "assets", "scripts", "tests", "jlpt", "docs"].forEach((d) => { if (fs.existsSync(path.join(ROOT, d))) fs.cpSync(path.join(ROOT, d), path.join(tmp, d), { recursive: true }); });
    ["sw.js", "index.html", "manifest.webmanifest"].forEach((f) => { if (fs.existsSync(path.join(ROOT, f))) fs.copyFileSync(path.join(ROOT, f), path.join(tmp, f)); });
    execFileSync(process.execPath, ["scripts/new-lesson.js", "new", "30", "--topic", "テスト", "--topic-en", "Test"], { cwd: tmp });
    assert.ok(fs.existsSync(path.join(tmp, "lessons/lesson-30.html")));
    assert.match(fs.readFileSync(path.join(tmp, "lessons/lesson-30.html"), "utf8"), /data-lesson="30"/);
    assert.match(fs.readFileSync(path.join(tmp, "assets/js/lessons-index.js"), "utf8"), /number: 30,[\s\S]*topic_en: "Test"/);
    assert.throws(() => execFileSync(process.execPath, ["scripts/new-lesson.js", "new", "30"], { cwd: tmp, stdio: "pipe" }), /já existe/);
    // Sem os testes que dependem do próprio script (evita recursão), o resto do projeto aceita a lição nova.
    fs.rmSync(path.join(tmp, "tests/new-lesson.test.js"));
    execFileSync(process.execPath, ["--test"], { cwd: tmp, stdio: "pipe" });
});
