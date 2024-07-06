/*Para rodar só um arquivo de teste
    npm test -- --g "describe"
         npm test -- --g "Calculos"
*/
const assert = require("assert");
const {
  calcularIMC,
  somar,
  mediaEntreDoisNumeros,
} = require("./../../../src/funcoes/calculos");

describe("Calculos", function () {
  //Tudo aqui é sobre calculo
  describe("#mediaEntreDoisNumeros", function () {
    //Tudo aqui é sobre a função mediaEntreDoisNumeros
    it("#Validar se saida entre 10 e 21", function () {
      const resultadoDaMedia = mediaEntreDoisNumeros(10, 2);
      assert.equal(resultadoDaMedia, 6);
    });
    it("#validar se a media de 10 e 2 é igual a 6", () => {
      const resultado = mediaEntreDoisNumeros(10, 2);
      assert.equal(resultado, 6);
    });
  });

  describe("#mediaEntreDoisNumerosPodeFalhar", function () {
    it("#validar se a media de 10 e 2 é diferente de 4", () => {
      const resultado = mediaEntreDoisNumeros(10, 2);
      assert.equal(resultado, 4);
    });
    it("#validar se a media de a e zero é igual a NaN", () => {
      const resultado = mediaEntreDoisNumeros("a", "");
      assert.equal(resultado, NaN);
    });
  });
});
