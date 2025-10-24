# Desafio Técnico Frontend - vLab

## Resumo

Este repositório contém a solução do desafio técnico frontend para vLab. O objetivo foi construir uma aplicação web responsiva e acessível para o CourseSphere utilizando componentes reutilizáveis, gerenciamento de estado e autenticação com integração a API local.

## Funcionalidades implementadas

- Layout responsivo (mobile / tablet / desktop).
- Componentização em React utilizando o Atomic Design Principle.
- Funcionalidade de Autenticação com Login e Cadastro.
- Roteamento entre páginas principais com React-Router-Dom.
- Consumo de API REST local com GET/POST Users usando Axios e JSON Server com tratamento de erros.
- Formulários controlados com validação client-side (validação de campos obrigatórios, quantidade de caracteres).
- Estado local e global (Context) para manter consistência entre componentes.
- Mensagens de feedback para o usuário: loading, sucesso e erro.

## Como rodar localmente

Pré-requisitos:

- Node.js
- npm

Passos:

1. Clonar o repositório:
2. Entrar na pasta do projeto:
   cd d:\Arquivos\desafio-tecnico-frontend-vlab
3. Instalar dependências:
   npm install
4. Rodar em modo de desenvolvimento:
   npm run dev
5. Na pasta do src/api executar: json-server --watch db.json --port 8000 para rodar o backend fictício.
