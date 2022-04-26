<span align="center">

#  {REPROGRAMA} Projeto Guiado 1 - S5 </h2>

</span>

## Repositório com o projeto guiado iniciado em aula pela professora Simara utilizando Lógica aplicada e JavaScript

Contexto
O objetivo foi criar um sistema onde deverá ser possível gerenciar informações sobre os livros que já lemos e os livros que estão na nossa listinha de desejos, ou não.

`Como criar o projeto`

Siga os passos abaixo:

- Inicie um projeto node -	npm init -y
- No package.json, crie o script start	- "start": "node app.js"
- Instale as dependências -	npm i readline-sync
- Crie o .gitignore	node_modules


`Tecnologias`

    Javascript:	Linguagem de programação
    Nodejs:	Ambiente de execução do javascript
    npm:	Gerenciador de pacotes
    readline-sync:	Dependência para receber inputs no terminal


`Aparência`

    📁 projeto-de-livros
 
    |- 📁 controllers
   
        ||- 📄 buscarLivros.js
   
        ||- 📄 listarRecomendados.js
   
        ||- 📄 listarLivrosNaoLidos.js
   
        ||- 📄 listarLivrosOrdenados.js
   
    |- 📁 node_modules
   
    |- 📄 app.js
   
    |- 📄 database.js
   
    |- 📄 .gitignore
   
    |- 📄 package.json  
   
    |- 📄 package-lock.json
  
  
`Requisitos`

 - buscarLivros: Deverá ser possível buscar livros pela categoria;
 - listarLivrosOrdenados: Deverá retornar todos os livros ordenados de forma crescente por quantidade de páginas;
 - listarRecomendados: Deverá listar livros que já foram lidos e que são recomendados;
 - listarLivrosNaoLidos: Deverá listar livros que ainda não foram lidos;


`REGRAS`

- Inicia o algoritmo escolhendo a forma de busca no menu.
- Caso a pessoa usuária escolha alguma opção inexistente deverá mostrar no console a string 'Opção inválida'.
- O comportamento esperado deve ser o pedido da entrada e a impressão das tabelas buscadas no console, conforme requisitos acima.


`Dados`
 
 Criar dados mocados, um array de objetos de livros com a modelagem abaixo.


`LIVRO`

nome: string
categoria: string
paginas: number
recomenda: boolean
leu: boolean


<span align="center">

#  Muito obrigada a você que chegou até aqui! </h2>

</span>

</span>
<div align="center">
<img src="https://user-images.githubusercontent.com/101025726/165316662-4017a64c-061b-431e-af3a-141b7208b999.gif" width="400px" />
</div>
