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
 *   data-speak com várias falas (conversas da prova): falas separadas por "¦"; ♀ ou ♂ no começo muda o tom
 *   da voz (a mesma voz fala dos dois); uma fala vazia (¦¦) alonga a pausa. Ex.: "♂おはよう¦♀おはよう"
 *
 *   Speech.clean(texto)      limpa o texto antes de falar (sem reticências, setas...)
 *   Speech.segments(texto)   divide em falas: [{ text, pitch, pause }] (pause = ms de silêncio depois da fala)
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

    var PITCH = { "♀": 1.25, "♂": 0.8 };
    var GAP = 450, EXTRA_GAP = 800;

    function segments(text) {
        var out = [];
        String(text).split("¦").forEach(function (raw) {
            var trimmed = raw.trim();
            if (!trimmed) { if (out.length) out[out.length - 1].pause += EXTRA_GAP; return; }
            var pitch = PITCH[trimmed.charAt(0)] || 1;
            var cleaned = clean(PITCH[trimmed.charAt(0)] ? trimmed.slice(1) : trimmed);
            if (cleaned) out.push({ text: cleaned, pitch: pitch, pause: GAP });
        });
        if (out.length) out[out.length - 1].pause = 0;
        return out;
    }

    var api = { clean: clean, pickVoice: pickVoice, segments: segments };

    if (typeof module !== "undefined" && module.exports) { module.exports = api; return; }

    var synth = root.speechSynthesis;
    var html = root.document.documentElement;
    var current = null;   // botão que está tocando
    var timer = null;     // pausa entre as falas de uma conversa

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
        if (timer) { clearTimeout(timer); timer = null; }
        if (synth) synth.cancel();
        if (current) { current.classList.remove("speaking"); current.removeAttribute("aria-pressed"); }
        current = null;
    }

    function speak(text, button) {
        if (!synth || !root.SpeechSynthesisUtterance) return;
        var wasSame = current === button;
        stop();
        if (wasSame) return;
        var parts = segments(text);
        if (!parts.length) return;
        var voice = pickVoice(synth.getVoices());
        current = button;
        if (button) { button.classList.add("speaking"); button.setAttribute("aria-pressed", "true"); }
        function done() { if (current === button) stop(); }
        function play(i) {
            if (current !== button) return;
            var part = parts[i];
            var utterance = new root.SpeechSynthesisUtterance(part.text);
            utterance.lang = "ja-JP";
            utterance.rate = 0.9;
            utterance.pitch = part.pitch;
            if (voice) utterance.voice = voice;
            utterance.onerror = done;
            utterance.onend = function () {
                if (i + 1 >= parts.length) { done(); return; }
                timer = setTimeout(function () { timer = null; play(i + 1); }, part.pause);
            };
            synth.speak(utterance);
        }
        play(0);
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
