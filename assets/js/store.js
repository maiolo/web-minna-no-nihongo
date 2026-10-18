/*
 * Camada de dados do aluno (preferências, progresso).
 *
 * Todo estado do aluno passa por aqui. Hoje ele fica no navegador
 * (localStorage); quando existir back end, basta ligar um adaptador remoto
 * com Store.useRemote(...) e as telas não mudam.
 *
 *   Store.peek(chave)             leitura síncrona (usada antes da primeira pintura)
 *   Store.get(chave)              Promise com o valor (ou null)
 *   Store.set(chave, valor)       grava no navegador e, se houver, envia ao remoto
 *   Store.subscribe(chave, fn)    avisa quando o valor muda (outra aba ou sincronização)
 *   Store.useRemote(adapter, ks)  liga o back end e mescla (vale o updatedAt mais recente)
 *
 * Adaptador remoto: objeto com get(chave) -> Promise<valor|null> e
 * set(chave, valor) -> Promise. Veja createApiAdapter() abaixo e docs/ROADMAP.md.
 *
 * Os valores são objetos simples; o Store acrescenta "updatedAt" (ISO, UTC)
 * a cada gravação. Por enquanto a mesclagem é por documento; a mesclagem por
 * campo (exercícios e kanji) entra junto com o progresso.
 */
(function (root) {
    "use strict";

    var PREFIX = "mnn:";

    function isPlainObject(v) {
        return v !== null && typeof v === "object" && !Array.isArray(v);
    }

    function newer(a, b) {
        if (!isPlainObject(a)) return false;
        if (!isPlainObject(b)) return true;
        return String(a.updatedAt || "") > String(b.updatedAt || "");
    }

    function createStore(options) {
        options = options || {};
        var storage = options.storage || null;
        var now = options.now || function () { return new Date().toISOString(); };

        var cache = {};
        var loaded = {};
        var listeners = {};
        var remote = null;

        function readLocal(key) {
            if (loaded[key]) return cache[key];
            loaded[key] = true;
            cache[key] = null;
            try {
                var raw = storage && storage.getItem(PREFIX + key);
                if (raw) cache[key] = JSON.parse(raw);
            } catch (e) { /* dado corrompido ou storage bloqueado: começa vazio */ }
            return cache[key];
        }

        function writeLocal(key, value) {
            cache[key] = value;
            loaded[key] = true;
            try {
                if (storage) storage.setItem(PREFIX + key, JSON.stringify(value));
            } catch (e) { /* modo privado ou cota cheia: o valor segue valendo na memória */ }
        }

        function emit(key) {
            (listeners[key] || []).slice().forEach(function (fn) {
                try { fn(cache[key]); } catch (e) { /* um ouvinte com erro não derruba os outros */ }
            });
        }

        function pull(key) {
            return remote.get(key).then(function (remoteValue) {
                var local = readLocal(key);
                if (newer(remoteValue, local)) {
                    writeLocal(key, remoteValue);
                    emit(key);
                } else if (newer(local, remoteValue)) {
                    return remote.set(key, local);
                }
            });
        }

        var store = {
            peek: function (key) { return readLocal(key); },

            get: function (key) { return Promise.resolve(readLocal(key)); },

            set: function (key, value) {
                var saved = isPlainObject(value) ? Object.assign({}, value, { updatedAt: now() }) : value;
                writeLocal(key, saved);
                emit(key);
                if (remote) remote.set(key, saved).catch(function () { /* sem rede: o local segue valendo */ });
                return Promise.resolve(saved);
            },

            subscribe: function (key, fn) {
                (listeners[key] = listeners[key] || []).push(fn);
                return function unsubscribe() {
                    listeners[key] = (listeners[key] || []).filter(function (f) { return f !== fn; });
                };
            },

            useRemote: function (adapter, keys) {
                remote = adapter;
                return Promise.all((keys || []).map(pull));
            },

            // Chamado quando outra aba altera o localStorage.
            reload: function (key) {
                loaded[key] = false;
                readLocal(key);
                emit(key);
            }
        };
        return store;
    }

    /*
     * Adaptador de API (ainda não usado pelo site). Mapeia cada chave para um
     * endpoint REST: prefs -> /me/preferences, progress -> /me/progress.
     * getToken() pode devolver o token de login (ou null).
     */
    function createApiAdapter(config) {
        var base = String(config.baseUrl || "").replace(/\/$/, "");
        var fetchFn = config.fetch || root.fetch;
        var paths = { prefs: "/me/preferences", progress: "/me/progress" };

        function request(key, method, body) {
            var headers = { "Content-Type": "application/json" };
            var token = config.getToken && config.getToken();
            if (token) headers.Authorization = "Bearer " + token;
            return fetchFn(base + paths[key], {
                method: method,
                headers: headers,
                body: body === undefined ? undefined : JSON.stringify(body)
            });
        }

        return {
            get: function (key) {
                return request(key, "GET").then(function (res) {
                    if (res.status === 404) return null;
                    if (!res.ok) throw new Error("GET " + key + ": " + res.status);
                    return res.json();
                });
            },
            set: function (key, value) {
                return request(key, "PUT", value).then(function (res) {
                    if (!res.ok) throw new Error("PUT " + key + ": " + res.status);
                });
            }
        };
    }

    var api = { createStore: createStore, createApiAdapter: createApiAdapter };

    if (typeof module !== "undefined" && module.exports) {
        module.exports = api;
        return;
    }

    var storage = null;
    try { storage = root.localStorage; } catch (e) { /* acesso bloqueado */ }

    var store = createStore({ storage: storage });
    store.createStore = createStore;
    store.createApiAdapter = createApiAdapter;
    root.Store = store;

    // Mudanças feitas em outra aba chegam pelo evento "storage".
    if (root.addEventListener) {
        root.addEventListener("storage", function (e) {
            if (e.key && e.key.indexOf(PREFIX) === 0) store.reload(e.key.slice(PREFIX.length));
        });
    }
})(typeof window !== "undefined" ? window : globalThis);
