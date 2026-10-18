# みんなの日本語 – Minna no Nihongo Web

Site de estudo de japonês feito para ler bem no celular e no computador. Cada lição tem vocabulário, padrões de frase, explicação gramatical e exercícios interativos, com furigana em todos os kanji e romaji que pode ficar oculto.

O projeto segue a **ordem gramatical** do *Minna no Nihongo*, mas é independente e não tem ligação com a editora (3A Corporation). O objetivo é ter conteúdo próprio: explicações, exemplos e exercícios escritos para este site.

> **Status do conteúdo:** as lições 16 a 19 estão em revisão e serão reescritas com conteúdo próprio. As lições seguintes já entram nesse formato.

## Seções

- **Lições** (`lessons/`): o conteúdo do *Minna no Nihongo*, lição por lição.
- **JLPT** (`jlpt/`): material de apoio para o exame. Por enquanto tem a **lista dos 103 kanji do N5**, com significado, leituras on'yomi e kun'yomi e frases de exemplo para as principais leituras. Dá para buscar (por kanji, português, kana ou romaji), filtrar por categoria e abrir, com um clique no kanji, os exemplos de cada cartão (um por vez ou vários ao mesmo tempo).

## Recursos

- Furigana em todos os kanji (`<ruby>`) e painel **Ajustes** nas lições e no kanji: furigana sempre, ao tocar ou oculto; romaji ao tocar na linha, sempre ou oculto; tamanho do texto de 90% a 140%. As escolhas ficam salvas no navegador.
- Abas por seção: vocabulário, padrões e exemplos, gramática, exercícios (A, B, C) e problemas.
- Exercícios com verificação de resposta (ignora espaços e pontuação) e botão para revelar o gabarito.
- Layout responsivo, pensado para uso no celular, com tabelas que rolam na horizontal e foco visível para navegação por teclado.
- Sem etapa de build e sem dependências: são só arquivos HTML, CSS e JavaScript estáticos.

## Estrutura do projeto

```
index.html                  Página inicial com a lista de lições
assets/
  css/style.css             Estilos compartilhados (tema "Washi"; cores e fontes nas variáveis de :root)
  js/store.js               Camada de dados do aluno (localStorage hoje; pronta para um back end)
  js/prefs.js               Preferências de leitura (furigana, romaji, tamanho do texto)
  js/settings-panel.js      Painel "Ajustes" usado nas lições e na página de kanji
  js/site-header.js         Cabeçalho compartilhado (carimbo, migalhas, voltar, Ajustes)
  js/home.js                Página inicial: mapa de lições por volume e cartões
  js/lessons-index.js       Lista central de lições e volumes (home e botões anterior/próxima)
  js/engine.js              Motor que monta a página de uma lição a partir dos dados
  js/jlpt-index.js          Lista de páginas da seção JLPT
  js/kanji-page.js          Monta a página de kanji (cartões, busca, filtros, romaji)
tests/
  store-prefs.test.js       Testes da camada de dados e das preferências (node --test)
docs/
  ROADMAP.md                Divisão da nova interface em PRs e lista de recursos de back end
lessons/
  lesson-NN.html            Página de cada lição (estrutura mínima)
  data/lesson-NN.js         Conteúdo de cada lição (vocabulário, gramática, exercícios)
jlpt/
  index.html                Página inicial da seção JLPT
  n5-kanji.html             Lista de kanji do N5
  data/n5-kanji-*.js        Dados dos kanji (3 arquivos, por categoria)
```

A lição 16 (`lessons/lesson-16.html`) ainda é uma página independente, com Tailwind via CDN. Ela será refeita no formato acima.

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
  mondai:   { /* idem */ }
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

**Página nova na seção JLPT** (ex.: kanji do N4): crie a página e os dados em `jlpt/`, reutilize `assets/js/kanji-page.js` (ele lê `data-global` e `data-level` do `<body>`) e acrescente a página em `assets/js/jlpt-index.js`.

A lista de 103 kanji segue uma lista de referência muito usada em materiais de estudo: o JLPT deixou de publicar listas oficiais em 2010. As frases e explicações são próprias do projeto.

## Próximos passos

- JLPT: kanji do N4, vocabulário do N5, simulados e exercícios de leitura das kanji.
- Reescrever as lições 16 a 19 e seguir com as próximas, com conteúdo próprio.
- Ilustrações no vocabulário (SVG).
- Explicações gramaticais mais profundas, com mais exemplos em contextos variados.
- Exercícios mais dinâmicos e difíceis: ordenar palavras, conjugação sorteada, áudio, diálogos em partes e revisão cumulativa.
- Ajustes de layout para celular, modo escuro, progresso salvo no navegador e instalação como PWA.

O plano de implementação da nova interface, dividido em PRs, está em [`docs/ROADMAP.md`](docs/ROADMAP.md), junto com a lista dos recursos que dependem de back end.
