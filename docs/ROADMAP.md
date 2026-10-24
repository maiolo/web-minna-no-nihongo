# Roadmap de interface (front end) e recursos de back end

Este documento divide a nova interface (direção visual **Washi**: papel claro, serifa japonesa, vermelho de carimbo) em PRs pequenos e independentes, e lista o que só poderá ser feito quando houver back end.

Princípios:

- **Cada PR entra sozinho e deixa o site funcionando.** Nenhum PR depende de back end.
- **Dados atrás de uma interface.** Tudo que é estado do aluno (preferências, progresso) passa por um adaptador (`assets/js/store.js`, criado no PR 2). Hoje o adaptador grava no `localStorage`; quando existir API, troca-se só o adaptador, sem mexer nas telas.
- **Sem build e sem dependências**, como hoje: HTML, CSS e JS estáticos para o GitHub Pages.
- **Os tokens de cor ficam todos em variáveis CSS** (`:root`), o que deixa o modo escuro (PR 7) quase só uma troca de valores.

## Divisão em PRs

| PR | Tema | O que entra | Depende de |
|----|------|-------------|------------|
| 1 | Base visual Washi | Tokens de cor e tipografia, fontes Noto, foco visível, contraste, `prefers-reduced-motion`, tabelas com rolagem, `lang="pt-BR"`, favicon novo. Restyle dos componentes atuais sem mudar o comportamento. | nada |
| 2 | Camada de dados e preferências de leitura (`store.js`, `prefs.js`, painel Ajustes, testes com `node --test`) | `store.js` com adaptador local (e contrato do adaptador de API). Preferências: furigana (ligado, desligado, ao toque), romaji ao toque em cada linha, tamanho do texto. Painel de ajustes. Persistência. | 1 |
| 3 | Navegação e página inicial (feito) | Cabeçalho compacto com carimbo da lição, abas com URL (`#gramatica`) e ARIA, rótulos de duas linhas (kanji + português), rodapé com anterior/próxima, breadcrumbs. Nova home: faixa com padrão *seigaiha*, mapa das lições, lições "em breve". | 1 |
| 4 | Progresso local (feito) | Registro de seções e exercícios concluídos, "continue de onde parou", barras de progresso, status por lição (concluída, em andamento, disponível). Tudo via `store.js`. | 2, 3 |
| 5 | Exercícios (feito) | Feedback que mostra onde a resposta difere, placar e barra de questões, "tentar de novo", teclado romaji→kana, novo formato "montar a frase". | 2, 4 |
| 6 | Kanji (feito) | Grade compacta, painel de detalhes (gaveta no celular), busca e filtros fixos, chips com rolagem horizontal, "já sei" com filtro, quiz. | 2, 4 |
| 7a | Modo escuro, áudio e PWA (feito) | Tema automático/claro/escuro (preferência `theme`), áudio por Web Speech API (voz do aparelho, leitura em kana), manifesto, ícones, service worker com uso offline. Fontes continuam no Google Fonts (guardadas no aparelho): hospedá-las no repositório somaria vários MB. | 1 a 6 |
| 7b | Lição 16 no motor (feito) | Migrar `lesson-16.html` (Tailwind via CDN, não funciona offline) para o formato de dados das demais. | 7a |
| 8a | JLPT: hub e verbos (feito) | Hub agrupado (Estudo, Praticar) com cartões "em breve"; página de verbos N5 (~100) com as 12 formas geradas por `verbs.js` (testado), busca e filtro por grupo; `notation.js` extraído da página de kanji. | 6, 7a |
| 8b | JLPT: gramática (feito) | 42 cartões (partículas, frases, formas verbais, adjetivos) com busca, filtro e link #id; "Ver na lição" só quando a lição existe (testado contra o conteúdo da lição). Cartões curtos próprios por ponto gramatical, com "ver na lição" só quando a lição existe (sem duplicar a explicação). | 8a |
| 8c | JLPT: banco de questões e treino (feito) | Banco com ids estáveis (gramática escrita à mão; verbos e kanji gerados dos dados, com erros típicos como alternativas), sorteio por tema com semente, página de treino com correção e explicação na hora e histórico no `Store` (`attempts`). O simulado reaproveita o mesmo banco. | 8a, 8b |
| 8d | JLPT: simulados (feito) | Prova de 34 questões (curta: 18) em duas seções (kanji e vocabulário; gramática e verbos), sem correção até o fim, cronômetro opcional, navegação livre, rascunho no `Store` (`mockdraft`) para continuar depois, nota estimada de língua e leitura (0 a 120, mínimo 38), correção explicada com filtros e histórico (`attempts`, `kind: "mock"`). A correção do histórico é remontada do banco. Sem escuta. | 8c |
| 8e | JLPT: complemento (feito) | Escuta com a voz do aparelho, pontos fracos e desempenho (`n5-progress.html`), exportar/importar JSON. | 8d |

Cada PR deve trazer: descrição do que muda, capturas de tela em celular (390 px) e desktop (1280 px), e a lista de arquivos tocados.

## Contrato de dados (preparado para o back end)

O front end já será escrito para consumir estes formatos. Enquanto não houver API, o `LocalAdapter` guarda o mesmo JSON no `localStorage`.

```js
// Preferências do aluno
{
  "furigana": "on" | "off" | "touch",
  "romaji": "touch" | "on" | "off",   // padrão: "touch" (borrado; toque na linha para ler)
  "fontScale": 1.0,            // 0.9, 1, 1.1, 1.25 ou 1.4
  "kanaInput": "on" | "off",    // romaji vira hiragana ao digitar nos exercícios (padrão: on)
  "theme": "light" | "dark" | "auto",
  "updatedAt": "2026-10-17T15:00:00Z"
}

// Progresso do aluno
{
  "lessons": {
    "17": {
      "sections": { "vocab": "done", "gramatica": "in_progress" },
      "exercises": { "renshuuB:0:2": { "correct": true, "attempts": 2 } },
      "lastSection": "gramatica",
      "total": 6,                  // seções da lição (a home usa para a barra de progresso)
      "updatedAt": "2026-10-17T15:00:00Z"
    }
  },
  "kanji": { "N5": { "食": { "known": true, "updatedAt": "2026-10-17T15:00:00Z" } } },
  "last": { "type": "lesson", "id": 17, "section": "gramatica" },
  "updatedAt": "2026-10-17T15:00:00Z"
}
```

Interface do adaptador (PR 2):

```js
Store.peek(key)                  // leitura síncrona (aplicar preferências antes da primeira pintura)
Store.get(key)                   // Promise<valor | null>
Store.set(key, valor)            // grava no navegador, acrescenta updatedAt e envia ao remoto, se houver
Store.subscribe(key, fn)         // chamado quando o valor muda (outra aba ou sincronização)
Store.useRemote(adapter, chaves) // liga o back end; vale o updatedAt mais recente
```

Um adaptador remoto é um objeto com `get(chave) -> Promise<valor|null>` e `set(chave, valor) -> Promise`. O `createApiAdapter({ baseUrl, getToken })` já existe em `store.js` e mapeia `prefs` para `/me/preferences` e `progress` para `/me/progress`; ele só será ligado quando houver API. Falha de rede nunca perde o valor local.

Regra de conflito proposta para a sincronização: vale o registro com `updatedAt` mais recente, campo a campo para `exercises` e `kanji`, para não perder progresso feito em dois aparelhos.

**Histórico de treinos e simulados (treinos já gravam assim desde o PR 8c; simulados entram no 8d).** Chave `attempts` no `Store` (`{ list: [...] }`, `assets/js/attempts.js`), guardando só as últimas 50 tentativas, a mais recente primeiro. `items[].a` é o índice da alternativa escolhida (ou `null`), e `q` é o id do banco (`vte:{書|か}く`, `q:wa-topico`...):

```json
"attempts": [
  { "id": "2026-10-21T18:00:00.000Z", "kind": "practice", "level": "N5",
    "startedAt": "2026-10-21T18:00:00.000Z", "seconds": 240, "topics": ["gramatica", "verbo-forma"],
    "items": [ { "q": "vte:{書|か}く", "a": 2, "ok": true } ],
    "score": { "correct": 8, "total": 10 } } ]
```

Guarda-se só o id da questão e a resposta, nunca o enunciado: a correção é remontada do banco, que pode ser corrigido sem invalidar o histórico (por isso os ids não devem mudar depois de publicados). No simulado (PR 8d), `kind` é `"mock"` e o `score` ganha `knowledge`, `estimated: true` e `sections` ; com escuta (opcional, voz do aparelho) o `score` também tem `listening` (0–60) e `totalEstimate` (0–180). O simulado em andamento fica em `mockdraft` (`{ active, id, seed, size, ids, answers, startedAt, deadline }`) e é apagado (`{ active: false }`) ao terminar. A nota: a nota é sempre marcada como **estimada** (a oficial do JLPT é equalizada). No N5 a prova oficial vale 0 a 120 em língua e leitura (mínimo 38), 0 a 60 em audição (mínimo 19), total 180, aprovação com 80. Na futura API: `GET/POST /api/v1/me/attempts`, com a mesma regra de conflito por `updatedAt`.

## Recursos que dependem de back end (para outro momento)

**Essenciais para sincronizar entre aparelhos**

1. Contas e login (e-mail e login social) e perfil do aluno.
2. API de preferências: `GET/PUT /api/v1/me/preferences`.
3. API de progresso: `GET /api/v1/me/progress` e `POST /api/v1/me/progress/events` (eventos pequenos, para funcionar offline e enviar depois).
4. Exportar e importar o progresso (JSON), também como cópia de segurança.

**Estudo e motivação**

5. Estatísticas: sequência de dias, tempo de estudo, histórico de exercícios e pontos fracos por gramática ou kanji.
6. Revisão espaçada (SRS): agenda de revisão calculada no servidor, `GET /api/v1/me/review/due`.
7. Metas diárias e lembretes (e-mail ou notificação push).

**Conteúdo**

8. Conteúdo servido por API ou CMS (lições e kanji em JSON versionado) com painel de edição, para não depender de commits a cada lição.
9. Áudio de boa qualidade (gravado ou TTS neural) em armazenamento com CDN, no lugar da voz do navegador.
10. Ilustrações do vocabulário e ordem dos traços dos kanji servidas por CDN (dados do projeto KanjiVG exigem atribuição, licença CC BY-SA 3.0).
11. Botão "reportar erro" nas frases e exercícios, com fila de revisão.
12. Correção de frases livres com IA (exige chave de API no servidor, nunca no navegador).

**Operação**

13. Métricas de uso com consentimento (o que as pessoas mais abrem, onde abandonam).
14. Busca no servidor, se o conteúdo crescer a ponto de ficar pesado no navegador.


### Backup em JSON (8e)

Arquivo `minna-backup-AAAA-MM-DD.json`: `{ app: "minna-no-nihongo", version: 1, exportedAt, data: { prefs, progress, attempts } }`. O simulado em andamento (`mockdraft`) não entra. Ao importar, só as chaves conhecidas passam, tentativas inválidas são descartadas e o aluno escolhe **Mesclar** (tentativas por id, progresso concluído de qualquer lado, preferências mais recentes) ou **Substituir**. Questões de escuta (`lw:`, `ls:`) usam a voz japonesa do aparelho; sem ela os temas ficam desativados.
