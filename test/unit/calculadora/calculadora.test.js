/*Para rodar só um arquivo de teste
    npm test -- --g "describe"
         npm test -- --g "Calculadora"
*/
const assert = require("assert");
const { Calculadora } = require("../../../src/calculadora/calculadora");

describe("Calculadora", function () {
    const calculadora = new Calculadora();
  describe("#somar", function () {
    it("#validar se a soma de 10 e 2 é igual a 12", function () {
      let soma = calculadora.somar(10, 2);
      assert.equal(12, soma);
    });
  });

  describe("#multiplicar", function () {
    it("#validar se a multiplicação de 10 e 2 é igual a 20", function () {
        let multiplique = Calculadora.multiplicar(10, 2);
      assert.equal(20, multiplique);
    });
  });
  describe("#divisão", function () {
    
    it("#validar se a divisão por zero é tratada", function () {
              let divisão = calculadora.dividir(10, 0);
      assert.equal(divisão, 0);
    });
    it("#validar se a divisão resultado inteiro", function () {
      let divisão = calculadora.dividir(10, 5);
      assert.equal(divisão, 2);
    });
    it("#validar se a divisão resultado fracionado", function () {
      let divisão = calculadora.dividir(10, 3);
      assert.equal(divisão, 3.33);
    });
    it("#validar se a divisão resultado menor que 1", function () {
      let divisão = calculadora.dividir(5, 15);
      assert.equal(divisão, 0.33);
    });
  });

});
