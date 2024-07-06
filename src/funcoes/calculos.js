function calcularIMC(altura, peso) {
  return peso / (altura * altura);
}
function somar(valor1, valor2) {
  return valor1 + valor2;
}

module.exports = {
  calcularIMC,
  somar,
};

const mediaEntreDoisNumeros = (primeiroNumero, segundoNumero) => {
  return (primeiroNumero + segundoNumero) / 2;
};

module.exports = {
  calcularIMC,
  somar,
  mediaEntreDoisNumeros,
};
