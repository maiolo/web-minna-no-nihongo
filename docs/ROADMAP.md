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
| 7 | Extras | Áudio por Web Speech API, modo escuro, migração da lição 16 para o motor, PWA e uso offline (inclui hospedar as fontes no próprio repositório). | 1 a 6 |

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
