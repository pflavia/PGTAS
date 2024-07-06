class Calculadora {
  //const valorFixo = 0;
  //método privado
  somar(primeiroNumero, segundoNumero) {
    return primeiroNumero + segundoNumero;
  }
  subtrai(primeiroNumero, segundoNumero) {
    return primeiroNumero - segundoNumero;
  }
  static multiplicar(primeiroNumero, segundoNumero) {
    return primeiroNumero * segundoNumero;
  }
  dividir(primeiroNumero, segundoNumero) {
    if(segundoNumero !=0)
    return (primeiroNumero / segundoNumero).toFixed(2);
else
    return 0
  }
};
module.exports = {
  Calculadora
};
