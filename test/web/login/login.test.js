//Teste da lojinha do Júlio http://165.227.93.41/lojinha-web/v2/
/*Para rodar só um arquivo de teste
    npm test -- --g "describe"
         npm test -- --g "Login da lojinha"
*/
const assert = require("assert");
const { hasUncaughtExceptionCaptureCallback } = require("process");
const WebDriver = require("selenium-webdriver");

describe("Login da lojinha", function () {
  describe("#login", function () {
    it("#validar se o login deu certo", async function () {
      //cy.visit('http://165.227.93.41/lojinha-web/v2/')

      //Abrir o Navegador
      const navegador = new WebDriver.Builder()
        .forBrowser(WebDriver.Browser.CHROME)
        .build();
      //Navegar para http://165.227.93.41/lojinha-web/v2/
      await navegador.get("http://165.227.93.41/lojinha-web/v2/");
      navegador.quit;
      //Preencher o campo usuário
      navegador.findElement(WebDriver.By.id("usuario")).sendKeys("admin");
      //Preencher o campo senha
      navegador.findElement(WebDriver.By.id("senha")).sendKeys("admin");

      //Clicar no botão Entrar
      navegador.findElement(WebDriver.By.css("btn")).click;

      //Validar se o login deu certo
      const urlEsperada = "http://165.227.93.41/lojinha-web/v2/";
      const urlAtual = await navegador.getCurrentUrl();
      assert.equal(urlAtual, urlEsperada);

      //Fechar o navegador
      await navegador.quit();
    });
  });
});



const { performance }= require('perf_hooks')
describe('Teste de exemplo', function() {
    it('Mostrando tempo de execução', function() {
      const start = performance.now(); // começando a cronometrar o tempo
  
      // Coloque aqui o código do teste que deseja medir o tempo de execução
      // Por exemplo, uma operação assíncrona ou uma série de operações síncronas
      
      const end = performance.now(); // finalizando o cronometro
      const tempoDeExecucao = end - start; // calculando o tempo
  
      console.log(`O teste levou ${tempoDeExecucao} milissegundos para ser executado.`);
  
    });
  });