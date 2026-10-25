# みんなの日本語 – Minna no Nihongo Web

Site de estudo de japonês feito para ler bem no celular e no computador. Cada lição tem vocabulário, padrões de frase, explicação gramatical e exercícios interativos, com furigana em todos os kanji e romaji que pode ficar oculto.

O projeto segue a **ordem gramatical** do *Minna no Nihongo*, mas é independente e não tem ligação com a editora (3A Corporation). O objetivo é ter conteúdo próprio: explicações, exemplos e exercícios escritos para este site.

> **Status do conteúdo:** as lições 16 a 19 estão em revisão e serão reescritas com conteúdo próprio. As lições seguintes já entram nesse formato.

## Seções

- **Lições** (`lessons/`): o conteúdo do *Minna no Nihongo*, lição por lição.
- **JLPT** (`jlpt/`): material de apoio para o exame. Tem a **lista dos 103 kanji do N5** e a página de **verbos do N5** (cerca de 100, nos três grupos, com as 12 formas conjugadas; abre-se um verbo por vez ou vários). A página de **gramática do N5** tem 42 cartões curtos, com exemplos e link para a lição do site quando ela existe. O **treino** gera perguntas de gramática, formas e grupos de verbos, significados e leituras de kanji, com correção e explicação na hora, e guarda o histórico no navegador. O **simulado** é uma prova com cronômetro e sem correção até o fim; depois mostra a nota estimada (língua e leitura, 0 a 120) e explica cada erro, e guarda o histórico no navegador (dá para sair e continuar depois). Escuta, pontos fracos e exportar/importar estão a caminho. Na lista de kanji, com significado, leituras on'yomi e kun'yomi e frases de exemplo para as principais leituras. Dá para buscar (por kanji, português, kana ou romaji), filtrar por categoria e abrir, com um clique no kanji, os exemplos de cada cartão (um por vez ou vários ao mesmo tempo).

## Recursos

- Furigana em todos os kanji (`<ruby>`) e painel **Ajustes** nas lições e no kanji: furigana sempre, ao tocar ou oculto; romaji ao tocar na linha, sempre ou oculto; tamanho do texto de 90% a 140%. As escolhas ficam salvas no navegador.
- Abas por seção: vocabulário, padrões e exemplos, gramática, exercícios (A, B, C) e problemas.
- Exercícios com verificação de resposta (ignora espaços e pontuação) e botão para revelar o gabarito.
- Layout responsivo, pensado para uso no celular, com tabelas que rolam na horizontal e foco visível para navegação por teclado.
- Sem etapa de build e sem dependências: são só arquivos HTML, CSS e JavaScript estáticos.

## Estrutura do projeto

```
index.html                  Página inicial com a lista de lições
manifest.webmanifest        Manifesto do PWA (nome, cores, ícones)
sw.js                       Service worker: guarda o site para uso offline
assets/
  icons/                    Ícones do aplicativo
  css/style.css             Estilos compartilhados (tema "Washi"; cores e fontes nas variáveis de :root)
  js/speech.js              Áudio com a voz do navegador (Web Speech API)
  js/pwa.js                 Registra o service worker (uso offline)
  js/store.js               Camada de dados do aluno (localStorage hoje; pronta para um back end)
  js/prefs.js               Preferências de leitura (furigana, romaji, tamanho do texto)
  js/exercises.js           Funções puras dos exercícios (romaji→kana, diferença, embaralhar)
  js/progress.js            Progresso do aluno (seções, respostas, "onde parou")
  js/settings-panel.js      Painel "Ajustes" usado nas lições e na página de kanji
  js/site-header.js         Cabeçalho compartilhado (carimbo, migalhas, voltar, Ajustes)
  js/home.js                Página inicial: mapa de lições por volume e cartões
  js/lessons-index.js       Lista central de lições e volumes (home e botões anterior/próxima)
  js/engine.js              Motor que monta a página de uma lição a partir dos dados
  js/jlpt-index.js          Grupos e páginas da seção JLPT (cartões do hub, "em breve")
  js/notation.js            Notação {漢字|かんじ}: ruby, romaji e espaçamento (funções puras)
  js/verbs.js               Conjugador de verbos (funções puras)
  js/verbs-page.js          Página de verbos (busca, grupos, tabela de formas)
  js/grammar-page.js        Página de gramática (busca, categorias, cartões, link para a lição)
  js/question-bank.js       Banco de questões: gramática escrita + verbos e kanji gerados (funções puras)
  js/practice.js            Sorteio do treino por tema e correção (funções puras)
  js/attempts.js            Histórico de tentativas (funções puras; quem grava é o Store)
  js/practice-page.js       Página de treino
  js/quiz-view.js           Trechos de HTML da correção, compartilhados por treino e simulado (funções puras)
  js/mock.js                Simulado: montagem da prova, nota estimada, rascunho (funções puras)
  js/stats.js               Desempenho e pontos fracos a partir do histórico (funções puras)
  js/backup.js              Exportar/importar/mesclar dados em JSON (funções puras)
  js/progress-page.js       Página Meu desempenho
  js/mock-page.js           Página de simulados (prova, resultado, correção, histórico)
  js/kanji-page.js          Página de kanji (grade, painel de detalhes, busca, filtros, "já sei", quiz)
  js/kanji-quiz.js          Perguntas do quiz de kanji (funções puras)
tests/
  speech.test.js            Testes das funções do áudio
  sw.test.js                Confere se sw.js está em dia com os arquivos do site
  kanji-quiz.test.js        Testes das perguntas do quiz
  notation.test.js          Testes da notação e do romaji
  verbs.test.js             Testes do conjugador e dos dados dos verbos
  grammar.test.js           Testes dos cartões de gramática (furigana, lições citadas)
  question-bank.test.js     Testes do banco de questões, do sorteio e do histórico
  mock.test.js              Testes do simulado, da nota estimada e da correção
  exercises.test.js         Testes de romaji→kana, diferença e embaralhar
  progress.test.js          Testes do progresso
  store-prefs.test.js       Testes da camada de dados e das preferências (node --test)
scripts/
  update-sw.js              Atualiza a lista de arquivos e a versão do cache em sw.js
docs/
  ROADMAP.md                Divisão da nova interface em PRs e lista de recursos de back end
lessons/
  lesson-NN.html            Página de cada lição (estrutura mínima)
  data/lesson-NN.js         Conteúdo de cada lição (vocabulário, gramática, exercícios)
jlpt/
  index.html                Página inicial da seção JLPT
  n5-kanji.html             Lista de kanji do N5
  data/n5-kanji-*.js        Dados dos kanji (3 arquivos, por categoria)
  n5-verbs.html             Lista de verbos do N5
  data/n5-verbs.js          Dados dos verbos
  n5-grammar.html           Gramática do N5
  data/n5-grammar.js        Dados dos cartões de gramática
  n5-practice.html          Treino do N5
  data/n5-questions.js      Questões de gramática (completar a frase)
  data/n5-exam-vocab.js     Questões da prova no formato JLPT (vocabulário), só em japonês
  data/n5-exam-bunpo.js     Questões da prova no formato JLPT (gramática e leitura)
  n5-mock.html              Simulado do N5
  n5-progress.html          Meu desempenho: pontos fracos, simulados e backup
```

## Ver no computador

Não precisa de servidor: abra o `index.html` no navegador. Se preferir um servidor local:

```bash
python3 -m http.server 8000
# depois acesse http://localhost:8000
```

## Testes

A lógica de dados (gravação, mescla com um back end, validação das preferências) tem testes que rodam só com o Node, sem instalar nada:

```bash
node --test
```

## Publicar no GitHub Pages

1. No repositório, abra **Settings → Pages**.
2. Em **Build and deployment**, escolha **Deploy from a branch**, branch `main` e pasta `/ (root)`.
3. O site fica em `https://<usuário>.github.io/web-minna-no-nihongo/`.

Todos os links do projeto são relativos, então ele funciona dentro desse subcaminho.

## Adicionar uma lição

1. Copie `lessons/lesson-19.html` para `lessons/lesson-NN.html` e troque o `<title>`, o `data-lesson="NN"` e o caminho do script de dados (`data/lesson-NN.js`).
2. Crie `lessons/data/lesson-NN.js` com o conteúdo (formato abaixo).
3. Acrescente a lição em `assets/js/lessons-index.js`, em ordem numérica. Ela passa a aparecer no índice e nos botões de anterior e próxima automaticamente.

### Formato dos dados

```js
window.lessonData = {
  vocab: {
    title: "<ruby>語彙<rt>ごい</rt></ruby> (Vocabulário)",
    items: [
      { jp: "<ruby>登<rt>のぼ</rt></ruby>ります", romaji: "noborimasu", pt: "Subir, escalar" }
    ]
  },
  bunkei: {
    patterns: { title: "...", items: [{ jp: "...", romaji: "...", pt: "..." }] },
    examples: { title: "...", items: [{ jp: "...", romaji: "...", pt: "..." }] }
  },
  gramatica: { title: "...", content: `<div class="card">...</div>` },   // HTML livre
  renshuuA: {                                                           // opcional
    title: "...",
    exercises: [
      {
        desc: "Instrução do grupo de questões",
        questions: [{ q: "enunciado", a: "<ruby>書<rt>か</rt></ruby>いた", romaji: "kaita", pt: "tradução" }]
      }
    ]
  },
  renshuuB: { /* mesmo formato de renshuuA */ },
  renshuuC: { /* idem */ },
  mondai:   { /* idem */ },
  montar: {                      // opcional: exercício "montar a frase"
    title: "...",
    exercises: [{
      desc: "Toque nas palavras na ordem certa.",
      questions: [{ tokens: ["<ruby>写<rt>しゃ</rt></ruby>…を", "…ください。"], pt: "Tradução", romaji: "..." }]
    }]
  }
};
```

- Todas as seções são opcionais: a aba só aparece se a seção existir nos dados (a lição 17, por exemplo, não tem `renshuuA`). Se `bunkei` existir, precisa ter `patterns` e `examples`.
- Em `a` (resposta), o furigana (`<rt>`) é ignorado na correção: o aluno digita só o texto base.
- Em `gramatica.content`, use as classes de `style.css` (`card`, `card-header`, `item-box`, `grammar-table`, `romaji`).
- Nas páginas novas, carregue `store.js` e `prefs.js` no `<head>` (aplicam as preferências antes de pintar a tela) e `settings-panel.js` antes do script da página.

## Adicionar kanji ou uma página JLPT

**Kanji novo** (ou correção) em `jlpt/data/n5-kanji-*.js`:

```js
{
  k: "食", pt: "comer; comida", on: ["ショク"], kun: ["た(べる)", "く(う)"], cat: "verbos",
  ex: [
    // [leitura usada, frase, tradução]
    ["た(べる)", "{朝|あさ}ごはんを {食|た}べます。", "Tomo café da manhã."],
    ["ショク", "{食事|しょくじ}を します。", "Faço uma refeição."]
  ],
  note: "Dica opcional."
}
```

- Nas frases, `{漢字|かんじ}` gera o furigana e o romaji é calculado automaticamente a partir das leituras.
- `^は` e `^へ` marcam a partícula (lida *wa* e *e*). Um espaço separa palavras no romaji e não aparece no japonês.
- Todo kanji da frase precisa estar dentro de `{...|...}`; o kanji do cartão é destacado.
- `cat` é uma destas categorias: `numeros`, `tempo`, `natureza`, `pessoas`, `corpo`, `posicao`, `verbos`, `adjetivos`, `sociedade`.
- Cada leitura listada em `on` e `kun` deve ter ao menos uma frase de exemplo; leituras raras demais para o N5 ficam de fora.

**Verbo novo** em `jlpt/data/n5-verbs.js`: `{ jp: "{書|か}く", g: 1, pt: "escrever", ex: [frase, tradução] }`. Informe sempre o grupo `g` (帰る, 入る, 走る… são do grupo 1) e, se alguma forma não se usa (ある não tem 〜たい), `skip: ["tai"]`. As formas são geradas; `node --test tests/*.test.js` valida o verbo, o furigana da frase e as 12 formas.

**Ponto de gramática novo** em `jlpt/data/n5-grammar.js` (campos explicados no topo do arquivo). Todo kanji, inclusive nos textos explicativos, vai em `{漢字|かんじ}`. Se a lição do site explica o ponto, informe `lesson: N`; o teste confere que a lição existe e trata do tema (acrescente a palavra-chave em `tests/grammar.test.js`).

**Questão de gramática nova** em `jlpt/data/n5-questions.js` (formato no topo do arquivo): informe `ref` (cartão que explica o ponto), a frase com ＿＿, a certa e **três erradas que sejam realmente erradas naquela frase**, e a explicação. O `id` é guardado no histórico dos alunos, então não o mude depois de publicado. As questões de verbos e kanji saem dos dados sozinhas.

**Questão nova da prova no formato JLPT** em `jlpt/data/n5-exam-vocab.js` (formato no topo do arquivo): só kanji da lista do N5, com `{漢字|かんじ}`; o resto em hiragana. Um teste confere. Não mude ids publicados.

**Página nova na seção JLPT** (ex.: kanji do N4): crie a página e os dados em `jlpt/`, reutilize `assets/js/kanji-page.js` (ele lê `data-global` e `data-level` do `<body>`) e acrescente a página em `assets/js/jlpt-index.js` (`group` e, se ainda não existir, `status: "soon"`).

A lista de 103 kanji segue uma lista de referência muito usada em materiais de estudo: o JLPT deixou de publicar listas oficiais em 2010. As frases e explicações são próprias do projeto.

## Modo escuro, áudio e uso offline

- **Tema:** em Ajustes, escolha Automático (segue o aparelho), Claro ou Escuro.
- **Áudio:** o botão de alto-falante usa a voz japonesa do próprio aparelho (sem enviar nada a servidor) e fala a leitura em kana. Se o aparelho não tiver voz em japonês, os botões somem.
- **Offline / instalar:** o site se instala como aplicativo e funciona sem internet depois da primeira visita (service worker em `sw.js`). Com internet ele sempre busca a versão nova.
- **Ao mudar arquivos do site**, rode `node scripts/update-sw.js` antes do commit (atualiza a lista de arquivos e a versão do cache; `node --test` avisa se esquecer).
- As fontes ainda vêm do Google Fonts (guardadas no aparelho na primeira visita). Hospedá-las no repositório não compensa: as fontes japonesas completas somam vários MB.

## Próximos passos

- JLPT: escuta (voz do aparelho), pontos fracos e exportar/importar o histórico (plano em `docs/ROADMAP.md`), depois kanji do N4.
- Reescrever as lições 16 a 19 e seguir com as próximas, com conteúdo próprio (a 16 já usa o mesmo formato das demais e funciona offline).
- Ilustrações no vocabulário (SVG).
- Explicações gramaticais mais profundas, com mais exemplos em contextos variados.
- Exercícios mais dinâmicos e difíceis: ordenar palavras, conjugação sorteada, diálogos em partes e revisão cumulativa.

O plano de implementação da nova interface, dividido em PRs, está em [`docs/ROADMAP.md`](docs/ROADMAP.md), junto com a lista dos recursos que dependem de back end.
