# みんなの日本語 – Minna no Nihongo Web

Site de estudo de japonês feito para ler bem no celular e no computador. Cada lição tem vocabulário, padrões de frase, explicação gramatical e exercícios interativos, com furigana em todos os kanji e romaji que pode ficar oculto.

O projeto segue a **ordem gramatical** do *Minna no Nihongo*, mas é independente e não tem ligação com a editora (3A Corporation). O objetivo é ter conteúdo próprio: explicações, exemplos e exercícios escritos para este site.

> **Status do conteúdo:** as lições 16 a 19 estão em revisão e serão reescritas com conteúdo próprio. As lições seguintes já entram nesse formato.

## Recursos

- Furigana em todos os kanji (`<ruby>`), com botão para mostrar ou ocultar o romaji.
- Abas por seção: vocabulário, padrões e exemplos, gramática, exercícios (A, B, C) e problemas.
- Exercícios com verificação de resposta (ignora espaços e pontuação) e botão para revelar o gabarito.
- Layout responsivo, pensado para uso no celular.
- Sem etapa de build e sem dependências: são só arquivos HTML, CSS e JavaScript estáticos.

## Estrutura do projeto

```
index.html                  Página inicial com a lista de lições
assets/
  css/style.css             Estilos compartilhados (cores nas variáveis de :root)
  js/lessons-index.js       Lista central de lições (índice e botões anterior/próxima)
  js/engine.js              Motor que monta a página de uma lição a partir dos dados
lessons/
  lesson-NN.html            Página de cada lição (estrutura mínima)
  data/lesson-NN.js         Conteúdo de cada lição (vocabulário, gramática, exercícios)
```

A lição 16 (`lessons/lesson-16.html`) ainda é uma página independente, com Tailwind via CDN. Ela será refeita no formato acima.

## Ver no computador

Não precisa de servidor: abra o `index.html` no navegador. Se preferir um servidor local:

```bash
python3 -m http.server 8000
# depois acesse http://localhost:8000
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

## Próximos passos

- Reescrever as lições 16 a 19 e seguir com as próximas, com conteúdo próprio.
- Ilustrações no vocabulário (SVG).
- Explicações gramaticais mais profundas, com mais exemplos em contextos variados.
- Exercícios mais dinâmicos e difíceis: ordenar palavras, conjugação sorteada, áudio, diálogos em partes e revisão cumulativa.
- Ajustes de layout para celular, modo escuro, progresso salvo no navegador e instalação como PWA.
