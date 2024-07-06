/*Para rodar só um arquivo de teste
    npm test -- --g "describe"
         npm test -- --g "Vetores"
*/
const assert = require("assert");
const { pesquisarNoVetor } = require("../../../src/funcoes/vetores");

describe("Vetores", function () {
  //Tudo aqui é sobre js Vetores
  describe("#funçãoEncontraTextoNoVetor", function () {    
    //Tudo aqui é sobre a função pesquisarNoVetor
    const vetorComPalavras = [
      "Casa",
      "Quarto",
      "Banheiro",
      "Sala",
      "Cozinha",
      "Escritorio",
    ];
    it("#Validar se encontra palavra existente", function () {
            const encontrou = pesquisarNoVetor(vetorComPalavras, "Quarto");
      assert.ok(encontrou);
    });
    it("#Validar se avisa quando não encontra a palavra existente", () => {
           const encontrou = pesquisarNoVetor(vetorComPalavras, "Escritório");
      assert.notEqual(encontrou, true);
    });
    it("#Validar se diferencia palavras com acento e sem", () => {
          const encontrou = pesquisarNoVetor(vetorComPalavras, "Escritório");
      assert.equal(encontrou, false);
    });
    it("#Validar se diferencia palavras com letra minuscula", () => {
      const encontrou = pesquisarNoVetor(vetorComPalavras, "escritório");
      assert.equal(encontrou, false);
    });
  });
});

