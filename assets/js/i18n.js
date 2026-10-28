/*
 * Idiomas do site (português e inglês).
 *
 *   I18n.lang()                  idioma atual ("pt" | "en"), vindo de Prefs
 *   I18n.t("chave", { n: 3 })    texto da interface no idioma atual ({n} é substituído)
 *   I18n.add("en", { chave: "texto" })   registra textos (usado por i18n-strings.js)
 *   I18n.localize(dados, lang)   cópia dos dados de lição/JLPT com o idioma escolhido
 *   I18n.applyDom(raiz)          traduz os elementos com data-i18n / data-i18n-html / data-i18n-attr
 *
 * Os dois idiomas nunca aparecem juntos: o texto é escolhido pelo idioma e, se a
 * tradução não existir, cai no português (nunca fica vazio).
 *
 * Nos dados (lessons/data, jlpt/data) o português é o texto base e o inglês vem ao lado:
 *   { jp: "...", pt: "Texto", en: "Text" }          "en" substitui "pt"
 *   { mean: "Texto", mean_en: "Text" }              "<campo>_en" substitui "<campo>"
 * Vale em qualquer nível (textos, listas de textos, objetos aninhados). Sem o par em
 * inglês, o campo fica em português. A troca de idioma recarrega a página.
 */
(function (root) {
    "use strict";

    var LANGS = ["pt", "en"];
    var dict = { pt: {}, en: {} };

    function add(lang, entries) {
        if (!dict[lang]) dict[lang] = {};
        Object.keys(entries || {}).forEach(function (k) { dict[lang][k] = entries[k]; });
    }

    function format(text, vars) {
        if (!vars) return text;
        return String(text).replace(/\{(\w+)\}/g, function (m, k) {
            return vars[k] === undefined ? m : String(vars[k]);
        });
    }

    function currentLang() {
        var p = root.Prefs && root.Prefs.get();
        return p && LANGS.indexOf(p.lang) !== -1 ? p.lang : "pt";
    }

    // Texto da interface; cai no português e, por último, na própria chave.
    function t(key, vars, lang) {
        var l = lang || currentLang();
        var text = dict[l] && dict[l][key] !== undefined ? dict[l][key]
            : dict.pt[key] !== undefined ? dict.pt[key] : key;
        return format(text, vars);
    }

    /* ---------- Dados bilíngues ---------- */

    // Para a chave "pt" a tradução está em "en"; para as outras, em "<chave>_en".
    function localizedKey(key, lang) {
        return key === "pt" ? lang : key + "_" + lang;
    }

    function isTranslationKey(key) {
        return LANGS.some(function (l) { return l !== "pt" && (key === l || key.slice(-(l.length + 1)) === "_" + l); });
    }

    function localize(value, lang) {
        if (Array.isArray(value)) return value.map(function (v) { return localize(v, lang); });
        if (!value || typeof value !== "object") return value;
        var out = {};
        Object.keys(value).forEach(function (key) {
            if (isTranslationKey(key)) return; // as traduções só entram no lugar do texto base
            var alt = lang !== "pt" ? value[localizedKey(key, lang)] : undefined;
            out[key] = localize(alt !== undefined && alt !== null && alt !== "" ? alt : value[key], lang);
        });
        return out;
    }

    /* ---------- DOM ---------- */

    // data-i18n="chave" (texto), data-i18n-html="chave" (HTML), data-i18n-attr="aria-label:chave;title:outra"
    function applyDom(scope) {
        if (!scope || !scope.querySelectorAll) return;
        scope.querySelectorAll("[data-i18n]").forEach(function (el) { el.textContent = t(el.getAttribute("data-i18n")); });
        scope.querySelectorAll("[data-i18n-html]").forEach(function (el) { el.innerHTML = t(el.getAttribute("data-i18n-html")); });
        scope.querySelectorAll("[data-i18n-attr]").forEach(function (el) {
            el.getAttribute("data-i18n-attr").split(";").forEach(function (pair) {
                var i = pair.indexOf(":");
                if (i > 0) el.setAttribute(pair.slice(0, i).trim(), t(pair.slice(i + 1).trim()));
            });
        });
    }

    var api = {
        LANGS: LANGS,
        add: add,
        t: t,
        lang: currentLang,
        localize: localize,
        applyDom: applyDom,
        _dict: dict
    };

    if (typeof module !== "undefined" && module.exports) { module.exports = api; return; }
    root.I18n = api;

    // Outra aba (ou a sincronização) mudou o idioma: recarrega para refazer a página.
    if (root.Prefs && root.location) {
        var loaded = currentLang();
        root.Prefs.subscribe(function (p) { if (p.lang !== loaded) root.location.reload(); });
    }
})(typeof window !== "undefined" ? window : globalThis);
