/*
 * Painel "Ajustes de leitura": furigana, romaji e tamanho do texto.
 *
 *   SettingsPanel.mount(elemento)   desenha o botão e o painel dentro do elemento
 *
 * Usa Prefs (assets/js/prefs.js), que grava no Store. O painel não é modal:
 * Esc, clique fora ou sair do foco com Tab fecham e devolvem o foco ao botão.
 */
(function (root) {
    "use strict";

    var doc = root.document;
    var uid = 0;

    var ICON =
        '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' +
        'stroke-width="1.8" stroke-linecap="round" aria-hidden="true">' +
        '<path d="M4 7h10M18 7h2M4 17h2M10 17h10"/><circle cx="16" cy="7" r="2"/><circle cx="8" cy="17" r="2"/></svg>';

    var FURIGANA_OPTIONS = [
        ["on", "Sempre"],
        ["touch", "Ao tocar"],
        ["off", "Oculto"]
    ];
    var ROMAJI_OPTIONS = [
        ["touch", "Ao tocar"],
        ["on", "Sempre"],
        ["off", "Oculto"]
    ];

    var THEME_OPTIONS = [
        ["auto", "Automático"],
        ["light", "Claro"],
        ["dark", "Escuro"]
    ];

    function segmented(name, label, hint, options) {
        return '<fieldset class="settings-group">' +
            "<legend>" + label + "</legend>" +
            '<div class="segmented">' +
                options.map(function (o) {
                    return '<label class="seg"><input type="radio" name="' + name + '" value="' + o[0] + '">' +
                        "<span>" + o[1] + "</span></label>";
                }).join("") +
            "</div>" +
            '<p class="settings-hint">' + hint + "</p>" +
        "</fieldset>";
    }

    function mount(slot) {
        if (!slot || !root.Prefs) return;
        var id = "settings-panel-" + (++uid);

        slot.innerHTML =
            // O texto "Ajustes" some em telas estreitas (fica só o ícone); o aria-label
            // mantém o nome acessível e contém o texto visível.
            '<button type="button" class="btn btn-toggle settings-btn" aria-haspopup="dialog" ' +
                'aria-label="Ajustes de leitura" aria-expanded="false" aria-controls="' + id + '">' +
                ICON + '<span class="settings-label">Ajustes</span></button>' +
            '<div class="settings-panel" id="' + id + '" role="dialog" aria-label="Ajustes de leitura" hidden>' +
                segmented("furigana-" + uid, "Furigana (<ruby>振<rt>ふ</rt></ruby>り<ruby>仮<rt>が</rt></ruby><ruby>名<rt>な</rt></ruby>)",
                    "“Ao tocar” esconde a leitura; toque no kanji para vê-la.", FURIGANA_OPTIONS) +
                segmented("romaji-" + uid, "Romaji",
                    "“Ao tocar” deixa a linha borrada; toque nela para ler.", ROMAJI_OPTIONS) +
                segmented("theme-" + uid, "Tema",
                    "“Automático” segue o modo claro ou escuro do aparelho.", THEME_OPTIONS) +
                '<fieldset class="settings-group">' +
                    "<legend>Tamanho do texto</legend>" +
                    '<div class="size-row">' +
                        '<button type="button" class="btn btn-reveal size-btn" data-size="-1" aria-label="Diminuir o texto">A−</button>' +
                        '<output class="size-value" aria-live="polite"></output>' +
                        '<button type="button" class="btn btn-reveal size-btn" data-size="1" aria-label="Aumentar o texto">A+</button>' +
                    "</div>" +
                "</fieldset>" +
                '<div class="settings-sample" aria-label="Exemplo">' +
                    '<span class="settings-sample-jp"><ruby>日<rt>に</rt></ruby><ruby>本<rt>ほん</rt></ruby><ruby>語<rt>ご</rt></ruby>を<ruby>勉<rt>べん</rt></ruby><ruby>強<rt>きょう</rt></ruby>します。</span>' +
                    '<span class="romaji">nihongo o benkyou shimasu.</span>' +
                "</div>" +
                '<button type="button" class="settings-reset">Restaurar padrão</button>' +
            "</div>";

        var button = slot.querySelector(".settings-btn");
        var panel = slot.querySelector(".settings-panel");
        var sizeValue = slot.querySelector(".size-value");
        var minus = slot.querySelector('[data-size="-1"]');
        var plus = slot.querySelector('[data-size="1"]');

        function isOpen() { return !panel.hidden; }

        function open() {
            panel.hidden = false;
            button.setAttribute("aria-expanded", "true");
            var checked = panel.querySelector("input:checked") || panel.querySelector("input");
            if (checked) checked.focus();
        }

        function close(returnFocus) {
            panel.hidden = true;
            button.setAttribute("aria-expanded", "false");
            if (returnFocus) button.focus();
        }

        // Reflete as preferências atuais nos controles.
        function render() {
            var p = root.Prefs.get();
            panel.querySelectorAll('input[type="radio"]').forEach(function (input) {
                var group = input.name.replace(/-\d+$/, "");
                input.checked = input.value === p[group];
            });
            var index = root.Prefs.SCALES.indexOf(p.fontScale);
            sizeValue.textContent = Math.round(p.fontScale * 100) + "%";
            minus.disabled = index <= 0;
            plus.disabled = index >= root.Prefs.SCALES.length - 1;
        }

        button.addEventListener("click", function () { isOpen() ? close(true) : open(); });

        panel.addEventListener("change", function (e) {
            var input = e.target;
            if (input.type !== "radio") return;
            var patch = {};
            patch[input.name.replace(/-\d+$/, "")] = input.value;
            root.Prefs.set(patch);
        });

        panel.addEventListener("click", function (e) {
            var size = e.target.closest("[data-size]");
            if (size) {
                var scales = root.Prefs.SCALES;
                var next = scales.indexOf(root.Prefs.get().fontScale) + Number(size.dataset.size);
                root.Prefs.set({ fontScale: scales[Math.max(0, Math.min(scales.length - 1, next))] });
                return;
            }
            if (e.target.closest(".settings-reset")) root.Prefs.reset();
        });

        doc.addEventListener("keydown", function (e) {
            if (e.key === "Escape" && isOpen()) close(true);
        });
        doc.addEventListener("click", function (e) {
            if (isOpen() && !slot.contains(e.target)) close(false);
        });
        panel.addEventListener("focusout", function (e) {
            if (isOpen() && e.relatedTarget && !slot.contains(e.relatedTarget)) close(false);
        });

        root.Prefs.subscribe(render);
        render();
    }

    root.SettingsPanel = { mount: mount };
})(window);
