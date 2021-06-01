# Cookz API
Cookz é um sistema de compartilhamento colaborativo de receitas culinárias entre usuários da plataforma.
Este repositório guarda e versiona a API Restful do Cookz, feita com o framework **AdonisJS** e banco de dados **SQLite**.
Este projeto faz parte da disciplina de Projeto Integrado (PI) de Backend, ministrada pelo professor Orion Teles.

## Primeiros passos:
**IMPORTANTE:** Todos os comandos abaixo devem ser executados na raiz do projeto.

1. É importante se certificar de que você tem instalado a CLI do Adonis na sua máquina:
```bash
adonis --version
```

Caso a versão do Adonis não seja exibida, significa que você deve instalar a CLI do Adonis globalmente:
```bash
npm i -g @adonisjs/cli
```

2. Instale as dependencias do projeto:
```bash
npm i
```
3. Execute as migrations e seeds do projeto
```bash
adonis migration:run && adonis seed
```

4. Com tudo feito, podemos iniciar o servidor de desenvolvimento:
```bash
npm run dev
```

## Documentações
- [Trello](https://trello.com/b/oT1WyiMv/projeto-integrado-backend-api-de-receitas): track da equipe com tickets e o que devemos desenvolver.
- [Notion](https://www.notion.so/fabmont/Projeto-Integrado-de-Back-end-7deacacafa4f477fa4d1b1790115c0cf): informações detalhadas do projeto.

## O time
| Nome | Matrícula | Função
|--|--|--|
| Caio dos Santos Rodrigues | 20114290130 | DEV
| Fabrício Santos Monteiro | 20114290072 | PO / DEV / DBA
| Gabriel Rodrigues da Silva | 20114290130 | DEV / DBA
| Gustavo Ferreira | ? | ? |
| João Victor Souza da Silva | 20114290002 | DEV
| Judson Miller Leal Dias | 20114290022 | DEV
| Júlia Daphiny Lins Brandão | 20114290029 | DEV

<br>

**PO**: Product Owner
<br>
**DEV**: Developer
<br>
**DBA**: Database Administrator
