/*
 * Áudio com a síntese de voz do próprio navegador (Web Speech API).
 * Não carrega nada de servidor: a voz japonesa vem do aparelho.
 *
 *   <button class="speak-btn" data-speak="にほんごをべんきょうします">...</button>
 *
 * Qualquer botão .speak-btn com data-speak toca o texto ao ser clicado (clicar
 * de novo enquanto toca para). Os botões somem se o aparelho não tiver voz em
 * japonês: <html data-speech="off">.
 *
 *   Speech.clean(texto)      limpa o texto antes de falar (sem reticências, setas...)
 *   Speech.pickVoice(vozes)  escolhe a melhor voz japonesa da lista, ou null
 */
(function (root) {
    "use strict";

    function clean(text) {
        return String(text)
            .replace(/[…⋯]|\.{2,}/g, " ")
            .replace(/[⇒→↔～〜]/g, " ")
            .replace(/\s+/g, " ")
            .trim();
    }

    // Prefere ja-JP exato; entre as japonesas, as instaladas no aparelho (mais rápidas).
    function pickVoice(voices) {
        var ja = (voices || []).filter(function (v) { return /^ja([-_]|$)/i.test(v.lang || ""); });
        if (!ja.length) return null;
        function score(v) {
            return (/^ja[-_]JP$/i.test(v.lang) ? 2 : 0) + (v.localService ? 1 : 0);
        }
        return ja.slice().sort(function (a, b) { return score(b) - score(a); })[0];
    }

    var api = { clean: clean, pickVoice: pickVoice };

    if (typeof module !== "undefined" && module.exports) { module.exports = api; return; }

    var synth = root.speechSynthesis;
    var html = root.document.documentElement;
    var current = null;   // botão que está tocando

    function refreshAvailability() {
        var ok = Boolean(synth && root.SpeechSynthesisUtterance);
        if (ok) {
            var voices = synth.getVoices();
            // Lista vazia = ainda carregando; só desliga quando há vozes e nenhuma é japonesa.
            if (voices.length && !pickVoice(voices)) ok = false;
        }
        html.dataset.speech = ok ? "on" : "off";
    }

    function stop() {
        if (synth) synth.cancel();
        if (current) { current.classList.remove("speaking"); current.removeAttribute("aria-pressed"); }
        current = null;
    }

    function speak(text, button) {
        if (!synth || !root.SpeechSynthesisUtterance) return;
        var wasSame = current === button;
        stop();
        if (wasSame) return;
        var cleaned = clean(text);
        if (!cleaned) return;
        var utterance = new root.SpeechSynthesisUtterance(cleaned);
        utterance.lang = "ja-JP";
        utterance.rate = 0.9;
        var voice = pickVoice(synth.getVoices());
        if (voice) utterance.voice = voice;
        function done() { if (current === button) stop(); }
        utterance.onend = done;
        utterance.onerror = done;
        current = button;
        if (button) { button.classList.add("speaking"); button.setAttribute("aria-pressed", "true"); }
        synth.speak(utterance);
    }

    root.document.addEventListener("click", function (e) {
        var btn = e.target.closest && e.target.closest(".speak-btn");
        if (btn && btn.dataset.speak) speak(btn.dataset.speak, btn);
    });
    root.addEventListener("pagehide", stop);
    if (synth && synth.addEventListener) synth.addEventListener("voiceschanged", refreshAvailability);
    refreshAvailability();

    root.Speech = api;
})(typeof window !== "undefined" ? window : globalThis);
