/*
     ["Cypress","Selenium","Playwright"]

      "Cypress é um item"
      "Selenium é um item"
      "Playwright é um item"
*/

//Condiumate: Options | Test this function
const listItemsSemLaco = (itens) => {
  console.log(`${itens[0]}  é um item`);
  console.log(`${itens[1]}  é um item`);
  console.log(`${itens[2]}  é um item`);
};

const listarItens = (itens) => {
  const quantidadeItens = itens.length;

  for (let indice = 0; indice < quantidadeItens; indice++) {
    console.log(`${itens[indice]} é um item`);
  }
};

const pesquisarNoVetor = (vetorDePalavras, termoPesquisa) => {
  let encontrou = false;
  for (let indice = 0; indice < vetorDePalavras.length; indice++) {
    if (vetorDePalavras[indice] == termoPesquisa) {
      encontrou = true;
      break;
    }
  }
  return encontrou;
};

const preencherVetor = (vetorDePalavras) => {
  for (let indice = 0; indice <= 10; indice++) {
    vetorDePalavras[indice] = "Palavra " + indice;
  }
  return vetorDePalavras;
};
const criarVetor = () => {
  console.log("estou aqui");
  const vetorDePalavras = null;
  for (let indice = 0; indice <= 10; indice++) {
    vetorDePalavras[indice] = "Palavra " + indice;
  }
  return vetorDePalavras;
};
module.exports = {
  listItemsSemLaco,
  listarItens,
  pesquisarNoVetor,
  preencherVetor,
  criarVetor,
};
