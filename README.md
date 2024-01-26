# Cypress Trello API Automation

Este projeto contém testes automatizados para validar as funcionalidades da API do Trello de criar e excluir boards e cards.

## Objetivo

O objetivo deste projeto é automatizar a execução de testes funcionais e de integração para a API do Trello, garantindo que a criação e exclusão de boards e cards estejam funcionando como esperado.

## Pré-requisitos

- Node.js (versão recomendada: 14.x ou superior)
- Conta no Trello e acesso à API (obtenha sua chave e token da API [aqui](https://trello.com/app-key))
- Cypress instalado globalmente ou como parte do seu projeto npm

## Configuração

Antes de executar os testes, configure as variáveis de ambiente necessárias para armazenar e proteger suas chaves da API do Trello. Crie um arquivo `.env` na raiz do projeto com o seguinte conteúdo:

```env
TRELLO_API_KEY=sua_chave_de_api
TRELLO_API_TOKEN=seu_token_de_api
```

## Instalação
Para instalar as dependências do projeto, execute:
npm install


## Estrutura do Projeto
A estrutura de diretórios do projeto é a seguinte:

cypress/fixtures: Contém dados de teste estáticos.
cypress/integration: Contém os arquivos de teste.
cypress/support: Contém comandos personalizados.
cypress.json: Contém a configuração do Cypress.
package.json: Contém as dependências e scripts do projeto.

## Execução dos Testes
Para executar os testes em modo headless, utilize o seguinte comando:
npm test

Para abrir o Cypress em modo interativo, use:
npx cypress open

## Testes Implementados
Os testes implementados neste projeto incluem:

1 - Criação de um novo board.
2 - Criação de um novo card em uma lista específica.
3 - Exclusão de um card.
4 - Exclusão de um board.

## Limpeza
Após a execução dos testes, o projeto utiliza hooks afterEach para garantir que todos os recursos criados durante os testes sejam devidamente excluídos, mantendo o ambiente de testes limpo.

## Relatório
Os resultados dos testes são gerados automaticamente pelo Cypress e podem ser encontrados no diretório cypress/reports após a execução dos testes.
