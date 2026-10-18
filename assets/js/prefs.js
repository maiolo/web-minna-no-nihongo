/*
 * Preferências de leitura do aluno.
 *
 *   furigana   "on" (sempre) | "touch" (aparece ao tocar) | "off" (oculto)
 *   romaji     "touch" (borrado; toque ou passe o mouse) | "on" (sempre) | "off" (oculto)
 *   fontScale  tamanho do texto: um dos valores de Prefs.SCALES
 *   theme      "auto" (segue o aparelho) | "light" | "dark"
 *
 * Carregue este arquivo no <head>, logo depois de store.js: as preferências
 * são aplicadas ao <html> na hora, antes da primeira pintura (sem "piscar").
 * O estado é guardado pelo Store (chave "prefs"), então vai para o back end
 * junto com o resto quando ele existir.
 *
 * Efeitos no <html>: data-furigana, data-romaji, data-theme (já resolvido para
 * "light" ou "dark") e a variável CSS --font-scale
 * (os estilos estão em assets/css/style.css).
 */
(function (root) {
    "use strict";

    var KEY = "prefs";
    var FURIGANA = ["on", "touch", "off"];
    var ROMAJI = ["touch", "on", "off"];
    var SCALES = [0.9, 1, 1.1, 1.25, 1.4];
    var THEMES = ["auto", "light", "dark"];
    var THEME_COLORS = { light: "#F5F0E6", dark: "#14181D" };
    var DEFAULTS = { furigana: "on", romaji: "touch", fontScale: 1, theme: "auto" };

    function nearestScale(value) {
        var n = Number(value);
        if (!isFinite(n)) return DEFAULTS.fontScale;
        return SCALES.reduce(function (best, s) {
            return Math.abs(s - n) < Math.abs(best - n) ? s : best;
        });
    }

    // Garante valores válidos mesmo se o dado salvo estiver velho ou editado à mão.
    function sanitize(raw) {
        var r = raw && typeof raw === "object" ? raw : {};
        return {
            furigana: FURIGANA.indexOf(r.furigana) !== -1 ? r.furigana : DEFAULTS.furigana,
            romaji: ROMAJI.indexOf(r.romaji) !== -1 ? r.romaji : DEFAULTS.romaji,
            fontScale: nearestScale(r.fontScale === undefined ? DEFAULTS.fontScale : r.fontScale),
            theme: THEMES.indexOf(r.theme) !== -1 ? r.theme : DEFAULTS.theme
        };
    }

    // matchMedia (opcional) permite resolver "auto" conforme o aparelho.
    function createPrefs(store, doc, matchMedia) {
        var prefs = {
            KEY: KEY,
            SCALES: SCALES,
            DEFAULTS: DEFAULTS,
            sanitize: sanitize,

            get: function () { return sanitize(store.peek(KEY)); },

            // Aceita um pedaço ({ furigana: "off" }); chaves desconhecidas
            // (por exemplo "kanaInput") são preservadas.
            set: function (patch) {
                var current = store.peek(KEY);
                var merged = Object.assign({}, current && typeof current === "object" ? current : {}, patch);
                var clean = sanitize(merged);
                merged.furigana = clean.furigana;
                merged.romaji = clean.romaji;
                merged.fontScale = clean.fontScale;
                merged.theme = clean.theme;
                var saved = store.set(KEY, merged);
                prefs.apply();
                return saved;
            },

            reset: function () {
                return prefs.set({ furigana: DEFAULTS.furigana, romaji: DEFAULTS.romaji, fontScale: DEFAULTS.fontScale, theme: DEFAULTS.theme });
            },

            subscribe: function (fn) {
                return store.subscribe(KEY, function () { fn(prefs.get()); });
            },

            apply: function () {
                var p = prefs.get();
                var html = doc.documentElement;
                html.dataset.furigana = p.furigana;
                html.dataset.romaji = p.romaji;
                html.style.setProperty("--font-scale", String(p.fontScale));

                var theme = p.theme;
                if (theme === "auto") {
                    theme = matchMedia && matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
                }
                html.dataset.theme = theme;
                var meta = doc.querySelector && doc.querySelector('meta[name="theme-color"]');
                if (meta) meta.setAttribute("content", THEME_COLORS[theme]);
            }
        };

        // Com "auto", acompanha a troca de tema do aparelho.
        if (matchMedia) {
            var query = matchMedia("(prefers-color-scheme: dark)");
            if (query.addEventListener) query.addEventListener("change", function () {
                if (prefs.get().theme === "auto") prefs.apply();
            });
        }

        // Mudanças vindas de outra aba ou da sincronização também se aplicam.
        store.subscribe(KEY, prefs.apply);
        return prefs;
    }

    /* "Ao toque": tocar numa linha de romaji ou num furigana mostra só aquele. */
    function bindTouchReveal(doc) {
        doc.addEventListener("click", function (e) {
            var target = e.target;
            if (!target || !target.closest) return;
            var html = doc.documentElement;

            var romaji = target.closest(".romaji");
            if (romaji && html.dataset.romaji === "touch") {
                romaji.classList.toggle("revealed");
                return;
            }

            var ruby = target.closest("ruby");
            if (ruby && html.dataset.furigana === "touch" &&
                !target.closest("button, a, input, label, select, [role='button']")) {
                ruby.classList.toggle("rt-open");
            }
        });
    }

    var api = { createPrefs: createPrefs, sanitize: sanitize, SCALES: SCALES, THEMES: THEMES, DEFAULTS: DEFAULTS };

    if (typeof module !== "undefined" && module.exports) {
        module.exports = api;
        return;
    }

    var prefs = createPrefs(root.Store, root.document, root.matchMedia && root.matchMedia.bind(root));
    root.Prefs = prefs;
    prefs.apply();
    bindTouchReveal(root.document);
})(typeof window !== "undefined" ? window : globalThis);
