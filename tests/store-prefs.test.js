// Testes da camada de dados e das preferências. Sem dependências:
//   node --test
"use strict";

const test = require("node:test");
const assert = require("node:assert/strict");
const { createStore, createApiAdapter } = require("../assets/js/store.js");
const { createPrefs, sanitize } = require("../assets/js/prefs.js");

function fakeStorage(initial) {
    const data = Object.assign({}, initial);
    return {
        data,
        getItem: (k) => (k in data ? data[k] : null),
        setItem: (k, v) => { data[k] = String(v); },
        removeItem: (k) => { delete data[k]; }
    };
}

function fakeDoc() {
    const props = {};
    return {
        props,
        documentElement: { dataset: {}, style: { setProperty: (k, v) => { props[k] = v; } } }
    };
}

function clock(...times) {
    let i = 0;
    return () => times[Math.min(i++, times.length - 1)];
}

/* ---------- Store ---------- */

test("set grava no storage com updatedAt e peek devolve o mesmo valor", async () => {
    const storage = fakeStorage();
    const store = createStore({ storage, now: clock("2026-10-17T10:00:00Z") });
    const saved = await store.set("prefs", { furigana: "off" });
    assert.equal(saved.updatedAt, "2026-10-17T10:00:00Z");
    assert.deepEqual(store.peek("prefs"), saved);
    assert.deepEqual(JSON.parse(storage.data["mnn:prefs"]), saved);
});

test("lê o que já estava salvo e ignora JSON corrompido", () => {
    const ok = createStore({ storage: fakeStorage({ "mnn:prefs": '{"romaji":"on"}' }) });
    assert.equal(ok.peek("prefs").romaji, "on");
    const broken = createStore({ storage: fakeStorage({ "mnn:prefs": "{nao-e-json" }) });
    assert.equal(broken.peek("prefs"), null);
});

test("funciona sem storage (modo privado) mantendo o valor na memória", async () => {
    const throwing = { getItem() { throw new Error("bloqueado"); }, setItem() { throw new Error("bloqueado"); } };
    const store = createStore({ storage: throwing });
    await store.set("prefs", { furigana: "off" });
    assert.equal(store.peek("prefs").furigana, "off");
});

test("subscribe avisa nas mudanças e unsubscribe para de avisar", async () => {
    const store = createStore({ storage: fakeStorage() });
    const seen = [];
    const off = store.subscribe("prefs", (v) => seen.push(v.romaji));
    await store.set("prefs", { romaji: "on" });
    off();
    await store.set("prefs", { romaji: "off" });
    assert.deepEqual(seen, ["on"]);
});

test("um ouvinte que lança erro não impede os outros", async () => {
    const store = createStore({ storage: fakeStorage() });
    let called = false;
    store.subscribe("prefs", () => { throw new Error("falha"); });
    store.subscribe("prefs", () => { called = true; });
    await store.set("prefs", { a: 1 });
    assert.equal(called, true);
});

test("useRemote: o remoto mais novo vence e atualiza o local", async () => {
    const storage = fakeStorage({ "mnn:prefs": JSON.stringify({ romaji: "off", updatedAt: "2026-10-01T00:00:00Z" }) });
    const store = createStore({ storage });
    const remote = {
        get: async () => ({ romaji: "on", updatedAt: "2026-10-10T00:00:00Z" }),
        set: async () => { throw new Error("não deveria enviar"); }
    };
    const seen = [];
    store.subscribe("prefs", (v) => seen.push(v.romaji));
    await store.useRemote(remote, ["prefs"]);
    assert.equal(store.peek("prefs").romaji, "on");
    assert.deepEqual(seen, ["on"]);
});

test("useRemote: o local mais novo vence e é enviado ao remoto", async () => {
    const storage = fakeStorage({ "mnn:prefs": JSON.stringify({ romaji: "off", updatedAt: "2026-10-12T00:00:00Z" }) });
    const store = createStore({ storage });
    const sent = [];
    const remote = {
        get: async () => ({ romaji: "on", updatedAt: "2026-10-10T00:00:00Z" }),
        set: async (key, value) => { sent.push([key, value.romaji]); }
    };
    await store.useRemote(remote, ["prefs"]);
    assert.equal(store.peek("prefs").romaji, "off");
    assert.deepEqual(sent, [["prefs", "off"]]);
});

test("useRemote: sem nada no remoto, o local é enviado; sem nada local, o remoto é adotado", async () => {
    const sent = [];
    const store1 = createStore({ storage: fakeStorage({ "mnn:prefs": JSON.stringify({ a: 1, updatedAt: "2026-10-01T00:00:00Z" }) }) });
    await store1.useRemote({ get: async () => null, set: async (k, v) => { sent.push(v.a); } }, ["prefs"]);
    assert.deepEqual(sent, [1]);

    const store2 = createStore({ storage: fakeStorage() });
    await store2.useRemote({ get: async () => ({ a: 2, updatedAt: "2026-10-01T00:00:00Z" }), set: async () => {} }, ["prefs"]);
    assert.equal(store2.peek("prefs").a, 2);
});

test("set envia ao remoto; falha de rede não quebra nem perde o valor local", async () => {
    const store = createStore({ storage: fakeStorage() });
    await store.useRemote({ get: async () => null, set: async () => { throw new Error("offline"); } }, []);
    const saved = await store.set("prefs", { furigana: "off" });
    assert.equal(saved.furigana, "off");
    assert.equal(store.peek("prefs").furigana, "off");
});

test("reload relê o storage (mudança feita em outra aba)", () => {
    const storage = fakeStorage({ "mnn:prefs": JSON.stringify({ romaji: "off" }) });
    const store = createStore({ storage });
    assert.equal(store.peek("prefs").romaji, "off");
    storage.data["mnn:prefs"] = JSON.stringify({ romaji: "on" });
    const seen = [];
    store.subscribe("prefs", (v) => seen.push(v.romaji));
    store.reload("prefs");
    assert.deepEqual(seen, ["on"]);
});

/* ---------- Adaptador de API ---------- */

test("createApiAdapter: monta URL, método, token e trata 404 como vazio", async () => {
    const calls = [];
    const fakeFetch = async (url, init) => {
        calls.push([url, init.method, init.headers.Authorization, init.body]);
        if (init.method === "GET") return { ok: false, status: 404 };
        return { ok: true, status: 204 };
    };
    const api = createApiAdapter({ baseUrl: "https://api.exemplo.com/v1/", fetch: fakeFetch, getToken: () => "abc" });
    assert.equal(await api.get("prefs"), null);
    await api.set("progress", { x: 1 });
    assert.deepEqual(calls[0], ["https://api.exemplo.com/v1/me/preferences", "GET", "Bearer abc", undefined]);
    assert.deepEqual(calls[1], ["https://api.exemplo.com/v1/me/progress", "PUT", "Bearer abc", '{"x":1}']);
});

test("createApiAdapter: erro de servidor rejeita a promessa", async () => {
    const api = createApiAdapter({ baseUrl: "/api", fetch: async () => ({ ok: false, status: 500 }) });
    await assert.rejects(api.get("prefs"), /500/);
});

/* ---------- Preferências ---------- */

test("sanitize: padrões, valores inválidos e tamanho de texto mais próximo", () => {
    assert.deepEqual(sanitize(null), { furigana: "on", romaji: "touch", fontScale: 1, theme: "auto" });
    assert.deepEqual(sanitize({ furigana: "xyz", romaji: 7, fontScale: "abc" }), { furigana: "on", romaji: "touch", fontScale: 1, theme: "auto" });
    assert.equal(sanitize({ fontScale: 1.2 }).fontScale, 1.25);
    assert.equal(sanitize({ fontScale: 99 }).fontScale, 1.4);
    assert.equal(sanitize({ fontScale: 0 }).fontScale, 0.9);
});

test("Prefs.set grava, aplica no <html> e preserva chaves desconhecidas", async () => {
    const store = createStore({ storage: fakeStorage({ "mnn:prefs": JSON.stringify({ kanaInput: "off" }) }) });
    const doc = fakeDoc();
    const prefs = createPrefs(store, doc);
    prefs.apply();
    assert.equal(doc.documentElement.dataset.furigana, "on");
    assert.equal(doc.documentElement.dataset.romaji, "touch");
    assert.equal(doc.props["--font-scale"], "1");

    await prefs.set({ furigana: "touch", fontScale: 1.25 });
    assert.equal(doc.documentElement.dataset.furigana, "touch");
    assert.equal(doc.props["--font-scale"], "1.25");
    assert.equal(store.peek("prefs").kanaInput, "off");
    assert.deepEqual(prefs.get(), { furigana: "touch", romaji: "touch", fontScale: 1.25, theme: "auto" });
});

test("Prefs.set com valor inválido volta ao padrão em vez de gravar lixo", async () => {
    const store = createStore({ storage: fakeStorage() });
    const prefs = createPrefs(store, fakeDoc());
    await prefs.set({ romaji: "banana" });
    assert.equal(store.peek("prefs").romaji, "touch");
});

test("Prefs.reset restaura os padrões; mudança externa no Store também é aplicada", async () => {
    const store = createStore({ storage: fakeStorage() });
    const doc = fakeDoc();
    const prefs = createPrefs(store, doc);
    await prefs.set({ furigana: "off", romaji: "on", fontScale: 1.4 });
    await prefs.reset();
    assert.deepEqual(prefs.get(), { furigana: "on", romaji: "touch", fontScale: 1, theme: "auto" });

    await store.set("prefs", { furigana: "off" });
    assert.equal(doc.documentElement.dataset.furigana, "off");
});

test("Prefs.subscribe entrega as preferências já validadas", async () => {
    const store = createStore({ storage: fakeStorage() });
    const prefs = createPrefs(store, fakeDoc());
    const seen = [];
    prefs.subscribe((p) => seen.push(p.furigana));
    await prefs.set({ furigana: "off" });
    assert.deepEqual(seen, ["off"]);
});

/* ---------- Tema ---------- */

function fakeMedia(dark) {
    const listeners = [];
    const query = { matches: dark, addEventListener: (_, fn) => listeners.push(fn) };
    return { query, listeners, fn: () => query };
}

test("theme: padrão auto, valor inválido volta ao padrão", () => {
    assert.equal(sanitize({}).theme, "auto");
    assert.equal(sanitize({ theme: "neon" }).theme, "auto");
    assert.equal(sanitize({ theme: "dark" }).theme, "dark");
});

test("theme auto segue o aparelho; claro e escuro ignoram o aparelho", async () => {
    const media = fakeMedia(true);
    const doc = fakeDoc();
    const prefs = createPrefs(createStore({ storage: fakeStorage() }), doc, media.fn);
    prefs.apply();
    assert.equal(doc.documentElement.dataset.theme, "dark");
    await prefs.set({ theme: "light" });
    assert.equal(doc.documentElement.dataset.theme, "light");
    await prefs.set({ theme: "auto" });
    media.query.matches = false;
    media.listeners.forEach((fn) => fn());
    assert.equal(doc.documentElement.dataset.theme, "light");
    media.query.matches = true;
    media.listeners.forEach((fn) => fn());
    assert.equal(doc.documentElement.dataset.theme, "dark");
});

test("theme sem matchMedia cai em claro", () => {
    const doc = fakeDoc();
    createPrefs(createStore({ storage: fakeStorage() }), doc).apply();
    assert.equal(doc.documentElement.dataset.theme, "light");
});
