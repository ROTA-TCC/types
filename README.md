# Rota - Shared Types

Este repositório contém a biblioteca de tipos centralizada do ecossistema Rota. O objetivo principal é compartilhar interfaces, tipos TypeScript e DTOs (Data Transfer Objects) entre o backend (NestJS) e o frontend (React/React Native), garantindo consistência de dados e segurança de tipos em todo o sistema.

## Sobre o Projeto

A biblioteca `@ROTA-TCC/types` atua como a única fonte da verdade para as estruturas de dados utilizadas no projeto. Isso elimina a duplicidade de código e previne erros de contrato durante a comunicação entre o cliente e o servidor.

## Stack Tecnológica

- **Linguagem:** TypeScript
- **Ferramentas:** NestJS Swagger, Class Validator, Class Transformer, Prisma Client

## Configuração e Instalação

Como este pacote está configurado para ser publicado no registro do GitHub Packages (`npm.pkg.github.com`), siga as orientações abaixo para utilizá-lo em seus outros repositórios.

### Instalação
Para adicionar esta biblioteca como dependência em seus projetos, execute:

```bash
npm install @ROTA-TCC/types
```
*(Certifique-se de que o seu ambiente de desenvolvimento esteja autenticado no registro de pacotes do GitHub).*

### Comandos Disponíveis

- **Build:** Compila os arquivos TypeScript (`.ts`) para a pasta de distribuição (`dist`).
  ```bash
  npm run build
  ```

## Estrutura de Uso

Esta biblioteca exporta:
- Interfaces de entidades do banco de dados (via Prisma).
- DTOs para validação de dados (via `class-validator` e `class-transformer`).
- Definições de tipos utilizadas em endpoints da API (via `nestjs/swagger`).

## Contribuição
Para atualizar os tipos, altere os arquivos fonte na raiz e certifique-se de rodar o comando de build antes de publicar uma nova versão. Mantenha o versionamento seguindo as práticas de versionamento semântico.
