const { concatenarPalavras, darBoasVindas } = require("./funcoes/texto");
const { mediaEntreDoisNumeros } = require("./funcoes/calculos");
const { listarItens } = require("./funcoes/vetores");

const nomeConcatenado = concatenarPalavras("Cleiton", "Reis");
console.log(nomeConcatenado);
console.log(concatenarPalavras("Cleiton", "Reis"));
darBoasVindas();
console.log(mediaEntreDoisNumeros(12, 15));
console.log();

const tecnologias = ["Cypress", "Selenium", "Playwright"];
listarItens(tecnologias);
