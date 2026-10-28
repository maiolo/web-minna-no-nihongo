/*
 * Textos da interface nos dois idiomas. Toda chave existe em "pt" e em "en"
 * (tests/i18n.test.js confere). Use I18n.t("chave") ou data-i18n no HTML.
 * Convenção das chaves: <área>.<texto>, por exemplo "settings.reset".
 */
(function (root) {
    "use strict";

    var pt = {
        "header.brandSub": "Estudo na web",
        "header.lessons": "Lições",
        "header.nav": "Principal",
        "header.here": "Você está em",

        "lang.switch": "Idioma / Language",
        "lang.hint": "Muda a interface e as explicações; o japonês não muda.",

        "settings.open": "Ajustes",
        "settings.title": "Ajustes de leitura",
        "settings.furiganaHint": "“Ao tocar” esconde a leitura; toque no kanji para vê-la.",
        "settings.romajiHint": "“Ao tocar” deixa a linha borrada; toque nela para ler.",
        "settings.theme": "Tema",
        "settings.themeHint": "“Automático” segue o modo claro ou escuro do aparelho.",
        "settings.always": "Sempre",
        "settings.touch": "Ao tocar",
        "settings.off": "Oculto",
        "settings.auto": "Automático",
        "settings.light": "Claro",
        "settings.dark": "Escuro",
        "settings.size": "Tamanho do texto",
        "settings.smaller": "Diminuir o texto",
        "settings.bigger": "Aumentar o texto",
        "settings.sample": "Exemplo",
        "settings.reset": "Restaurar padrão"
    };

    var en = {
        "header.brandSub": "Study on the web",
        "header.lessons": "Lessons",
        "header.nav": "Main",
        "header.here": "You are here",

        "lang.switch": "Idioma / Language",
        "lang.hint": "Changes the interface and the explanations; the Japanese stays the same.",

        "settings.open": "Settings",
        "settings.title": "Reading settings",
        "settings.furiganaHint": "“On tap” hides the reading; tap the kanji to see it.",
        "settings.romajiHint": "“On tap” blurs the line; tap it to read.",
        "settings.theme": "Theme",
        "settings.themeHint": "“Automatic” follows the light or dark mode of your device.",
        "settings.always": "Always",
        "settings.touch": "On tap",
        "settings.off": "Hidden",
        "settings.auto": "Automatic",
        "settings.light": "Light",
        "settings.dark": "Dark",
        "settings.size": "Text size",
        "settings.smaller": "Decrease text size",
        "settings.bigger": "Increase text size",
        "settings.sample": "Example",
        "settings.reset": "Restore defaults"
    };

    if (typeof module !== "undefined" && module.exports) { module.exports = { pt: pt, en: en }; return; }
    root.I18n.add("pt", pt);
    root.I18n.add("en", en);
})(typeof window !== "undefined" ? window : globalThis);
