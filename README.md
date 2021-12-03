<h1 align="center">🔗 EncLin</h1>
<p align="center">Encurtador links, simples e objetivo.</p>
<div align="center">
  <img src="https://img.shields.io/static/v1?label=Licence&message=MIT&color=2874F0"/>
  <img src="https://img.shields.io/static/v1?label=Node&message=>14.17&color=00C300"/>
  <img src="https://img.shields.io/static/v1?label=NPM&message=>6.8&color=FF160B"/>
  <img src="https://img.shields.io/static/v1?label=Express&message=>6.8&color=7B68EE"/>
  <img src="https://img.shields.io/static/v1?label=Sequelize&message=V6&color=FFE005"/>
</div>

<!--ts-->
   * [Pré Requisitos](#pre-requisitos)
   * [Instalação](#instalacao)
      * [Clonando o repositório](#clone-repositorio)
      * [Criando a base de dados](#criar-base-dados)
      * [Navegando entre diretórios](#navegacao)
      * [Criando variáveis de ambiente](#dotenv)
      * [Instalando as dependências](#dependencias)
      * [Instalando as migrations](#migrations)
   * [Rotas Acessíveis](#rotas)
      * [Gerando um novo link](#genereteLink)
      * [Acessando o novo link](#accessLink)
      * [Estatisticas do link](#statistics)
   * [Tests (em breve com jest :)](#testes)
   * [Tecnologias](#tecnologias)
   * [Trabalhos Futuros](#trabalhos-futuros)
<!--te-->

<h4 align="center"> 
	🚧  EncLink 🚀 Em Fase Final...  🚧
</h4>

# Pré-requisitos
Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), 
[Node.js](https://nodejs.org/en/),
[MySQL workbench](https://dev.mysql.com/downloads/workbench/).
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

# Instalação
## Clone este repositório
$ git clone <https://github.com/DeividhyTonetti/encLink_back.git>

## Crie uma base de dados MySQL
Existem "N" forma de realizar essa criação, a maneira que eu acho mais fácil é utilizar a ferramenta MySQL Workbech. <br>
-> Crie ou entre em uma connection já existente; <br>
-> Na lateral esquerda (navigator) clique com o botão direiro na parte vazia; <br>
-> Clique em create schema; <br>
-> Preencha o campo name e aplique. <br>

## Navegue até a pasta do projeto via terminal terminal/cmd
$ cd (diretórtio...)

## Crie um arquivo chamado .env na raiz do projeto e insira as seguintes variáveis de ambiente:
### Database
    DB_HOST= Nome do HOST - Exemplo: localhost
    DB_USER= Nome do Usuário - Exemplo: root  
    DB_PASS= Senha do banco - Exemplo: 123456789
    DB_NAME= Nome do banco criado - Exemplo enclink
  
### Pota
    PORT= Número da porta - Exemplo: 3000
  
### Name
    APP_NAME= Nome do projeto - Exemplo: enclink
  
### Desenvololvimento ou produção
    NODE_ENV=dev  (dev | production)
    APP_URL=http://localhost 
    
    //(Altere as flags caso for produção)
 
# Instale as dependências do projeto
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ npm start

# O servidor inciará na porta que você escolheu
Acesse no seu navegador <http://localhost:PORTA>

# Rotas acessíveis
  ## Gerando um novo link
   ### /createLink 
    // É necessário passar ao corpo da requisição um json informando sua url:
   
    {
      "url": "https://statusinvest.com.br/acoes/sula11"
    }
    
    // Está rota nos resultará no retorno da url encurtada
  ## Acessando o novo link
  ### /:code
    // É necesário informar a url encurtada
    // O retorno será o redirecionamento para a página solicida
  
### 🛠 Tecnologias

As seguintes ferramentas e bibliotecas foram usadas na construção do projeto:

- [Node.js](https://nodejs.org/en/)
- [Sequelize](https://sequelize.org/master/)
- [Express](https://expressjs.com/pt-br/)

### Autor
---

<a href="https://www.linkedin.com/in/deividhytonetti6/">
 <img style="border-radius: 50%;" src=https://avatars.githubusercontent.com/u/34030150?s=96&v=4" width="100px;" alt=""/>
 <br />
 <sub><b>Deividhy Tonetti</b></sub></a> <a href="https://github.com/DeividhyTonetti" title="Rocketseat">🚀</a>


Feito com ❤️ por Deividhy J. Tonetti 👋🏽 Entre em contato!

[![Linkedin Badge](https://img.shields.io/badge/-Thiago-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/deividhytonetti6/)](https://www.linkedin.com/in/deividhytonetti6/) 
[![Hotmail Badge](https://img.shields.io/badge/-deividhytonetti@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:deividhytonetti@gmail.com)](mailto:deividhytonetti@gmail.com)
