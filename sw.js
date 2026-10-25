/*
 * Service worker: deixa o site funcionar sem internet.
 *
 * - Na instalação guarda todos os arquivos do site (a lista abaixo é gerada por
 *   `node scripts/update-sw.js`, que também muda VERSION e renova o cache).
 * - Com internet, busca sempre a versão nova (e atualiza o cache); sem internet
 *   (ou se a rede demorar mais de 4 s), usa a cópia guardada. Assim nunca se
 *   misturam arquivos novos com antigos.
 * - As fontes do Google são guardadas na primeira visita e reaproveitadas depois.
 */
// ASSETS:START
const VERSION = "8c94a04dba";
const ASSETS = [
  "./",
  "assets/css/style.css",
  "assets/icons/apple-touch-icon.png",
  "assets/icons/icon-192.png",
  "assets/icons/icon-512.png",
  "assets/icons/icon-maskable-512.png",
  "assets/icons/icon-maskable.svg",
  "assets/icons/icon.svg",
  "assets/js/attempts.js",
  "assets/js/backup.js",
  "assets/js/engine.js",
  "assets/js/exercises.js",
  "assets/js/grammar-page.js",
  "assets/js/home.js",
  "assets/js/jlpt-index.js",
  "assets/js/kanji-page.js",
  "assets/js/kanji-quiz.js",
  "assets/js/lessons-index.js",
  "assets/js/mock-page.js",
  "assets/js/mock.js",
  "assets/js/notation.js",
  "assets/js/practice-page.js",
  "assets/js/practice.js",
  "assets/js/prefs.js",
  "assets/js/progress-page.js",
  "assets/js/progress.js",
  "assets/js/pwa.js",
  "assets/js/question-bank.js",
  "assets/js/quiz-view.js",
  "assets/js/settings-panel.js",
  "assets/js/site-header.js",
  "assets/js/speech.js",
  "assets/js/stats.js",
  "assets/js/store.js",
  "assets/js/verbs-page.js",
  "assets/js/verbs.js",
  "index.html",
  "jlpt/data/n5-exam-vocab.js",
  "jlpt/data/n5-grammar.js",
  "jlpt/data/n5-kanji-1.js",
  "jlpt/data/n5-kanji-2.js",
  "jlpt/data/n5-kanji-3.js",
  "jlpt/data/n5-questions.js",
  "jlpt/data/n5-verbs.js",
  "jlpt/index.html",
  "jlpt/n5-grammar.html",
  "jlpt/n5-kanji.html",
  "jlpt/n5-mock.html",
  "jlpt/n5-practice.html",
  "jlpt/n5-progress.html",
  "jlpt/n5-verbs.html",
  "lessons/data/lesson-16.js",
  "lessons/data/lesson-17.js",
  "lessons/data/lesson-18.js",
  "lessons/data/lesson-19.js",
  "lessons/lesson-16.html",
  "lessons/lesson-17.html",
  "lessons/lesson-18.html",
  "lessons/lesson-19.html",
  "manifest.webmanifest"
];
// ASSETS:END

const CACHE = "mnn-" + VERSION;
const FONT_CACHE = "mnn-fonts";
const NETWORK_TIMEOUT = 4000;

self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(CACHE)
            .then((cache) => cache.addAll(ASSETS.map((a) => new Request(new URL(a, self.registration.scope), { cache: "reload" }))))
            .then(() => self.skipWaiting())
    );
});

self.addEventListener("activate", (event) => {
    event.waitUntil(
        caches.keys()
            .then((keys) => Promise.all(keys
                .filter((k) => k.startsWith("mnn-") && k !== CACHE && k !== FONT_CACHE)
                .map((k) => caches.delete(k))))
            .then(() => self.clients.claim())
    );
});

async function networkFirst(request) {
    const cache = await caches.open(CACHE);
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), NETWORK_TIMEOUT);
    try {
        const response = await fetch(request, { cache: "no-cache", signal: controller.signal });
        if (response.ok) cache.put(request, response.clone());
        return response;
    } catch (error) {
        const hit = await cache.match(request, { ignoreSearch: true });
        if (hit) return hit;
        if (request.mode === "navigate") {
            const home = await cache.match(new URL("index.html", self.registration.scope));
            if (home) return home;
        }
        throw error;
    } finally {
        clearTimeout(timer);
    }
}

async function fontsStaleWhileRevalidate(request) {
    const cache = await caches.open(FONT_CACHE);
    const hit = await cache.match(request);
    const update = fetch(request).then((response) => {
        if (response.ok || response.type === "opaque") cache.put(request, response.clone());
        return response;
    });
    if (hit) { update.catch(() => {}); return hit; }
    return update;
}

self.addEventListener("fetch", (event) => {
    const request = event.request;
    if (request.method !== "GET") return;
    const url = new URL(request.url);
    if (url.origin === self.location.origin) {
        event.respondWith(networkFirst(request));
    } else if (url.hostname === "fonts.googleapis.com" || url.hostname === "fonts.gstatic.com") {
        event.respondWith(fontsStaleWhileRevalidate(request));
    }
});
