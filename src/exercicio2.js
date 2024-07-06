/*
Crie uma função que retorna true caso um texto pesquisado seja um dos itens de um vetor fornecido. 
A função deve estar dentro de um arquivo e o uso dela deve estar em outro arquivo
no qual teremos um condicional que mostra o texto "Achou" em casos onde a função retorna true.
*/
const prompt = require("prompt-sync")();
const {
  listItemsSemLaco,
  listarItens,
  pesquisarNoVetor,
  preencherVetor,
  criarVetor,
} = require("./funcoes/vetores");

let termoPesquisa = prompt("O que deseja pesquisar no vetor? ");
//let termoPesquisa="Casa"
let vetorPalavras = ["Casa", "Quarto", "Ana"];
//console.log(vetorPalavras.length);
vetorPalavras = preencherVetor(vetorPalavras);
let vetorPalavras2 = criarVetor();
let encontrou = pesquisarNoVetor(vetorPalavras, termoPesquisa);
console.log(`${encontrou}`);
