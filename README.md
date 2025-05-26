# Cronograma de 7 Dias para Aprender Zustand

Este é um plano de 7 dias para aprender **Zustand**, uma biblioteca leve e poderosa de gerenciamento de estado para React. Este cronograma é ideal para quem já possui conhecimento básico de React.

## 🗓️ Dia 1: Introdução e Conceitos Básicos

**Objetivo**: Entender o que é Zustand e por que usá-lo.

**Tópicos**:

- O que é Zustand e comparação com Redux/Context API.
- Instalação (`npm install zustand`).
- Criar seu primeiro store básico.

**Exercício**: Criar um contador com Zustand.

**Recursos**:

- [Zustand Demo](https://zustand-demo.pmnd.rs)
- [Documentação Oficial - Introdução](https://docs.pmnd.rs/zustand/getting-started/introduction)

## 🗓️ Dia 2: Lendo e Atualizando o Estado

**Objetivo**: Aprender a acessar e modificar estado.

**Tópicos**:

- `useStore` e como ler dados.
- Funções para atualizar o estado.

**Exercício**: Criar um store de autenticação (login/logout).

## 🗓️ Dia 3: Organização do Store

**Objetivo**: Organizar melhor o código com múltiplas propriedades.

**Tópicos**:

- Separando lógica de estado em arquivos.
- Trabalhando com múltiplos stores (quando usar).

**Exercício**: Criar um store para um carrinho de compras com vários itens.

## 🗓️ Dia 4: Middleware e Devtools

**Objetivo**: Usar middleware e ferramentas de desenvolvimento.

**Tópicos**:

- `zustand/middleware` (ex.: devtools, persist, immer).
- Integração com Redux DevTools.

**Exercício**: Persistir um estado no localStorage (usando `persist`).

## 🗓️ Dia 5: Zustand com Async

**Objetivo**: Manipular chamadas assíncronas (fetch API).

**Tópicos**:

- Funções assíncronas no store.
- Carregamento de dados de uma API.

**Exercício**: Criar um store que busca dados de uma API pública (ex.: usuários).

## 🗓️ Dia 6: Boas Práticas e Escalabilidade

**Objetivo**: Aplicar boas práticas para projetos maiores.

**Tópicos**:

- Tipagem com TypeScript (se estiver usando).
- Padronização e reaproveitamento de stores.
- Selectors para melhorar performance.

**Exercício**: Refatorar os stores anteriores para seguir boas práticas.

## 🗓️ Dia 7: Projeto Final

**Objetivo**: Consolidar conhecimento com um projeto simples.

**Projeto sugerido**: Um mini app de tarefas (todo list) com:

- Store global para tarefas.
- Persistência local.
- Filtro (concluídas/pendentes).
- Devtools integradas.
