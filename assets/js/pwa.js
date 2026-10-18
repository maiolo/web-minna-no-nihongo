/*
 * Registra o service worker (sw.js, na raiz do site) para uso offline.
 * Só funciona em https ou localhost; em file:// simplesmente não faz nada.
 */
(function () {
    "use strict";
    if (!("serviceWorker" in navigator) || location.protocol === "file:") return;
    var script = document.currentScript;
    var url = script ? new URL("../../sw.js", script.src) : null;
    if (!url) return;
    window.addEventListener("load", function () {
        navigator.serviceWorker.register(url.href).catch(function () { /* sem offline, tudo o resto segue */ });
    });
})();
