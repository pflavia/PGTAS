//console.log("Vou criar matriz de comida");
const almocos = [
  ["Salada", "Carne", "Bolo", "Vinho", "Sorvete"],
  ["Arroz", "Feijão", "Frango"],
  ["Salada", null, ""],
];
//console.log(almocos[2][1]);
//console.log(`${almocos[1][1]}`);
//console.log(almocos[0][0]);
//console.log(`${almocos[0][1]} e ${almocos[0][3]}`);
almocos[0][3] = "Lasanha";
//console.log(almocos[0][1] + " e " + almocos[0][3]);

//Exercicio
// Vetor com 3 comidas

let minhaComidasFavoritas = ["Churrasco", "Hamburguer", "Pizza"];
//console.log("Eu gosto muito de: " + minhaComidasFavoritas[0] + ", " + minhaComidasFavoritas[1] + " e " + minhaComidasFavoritas[2]);
//console.log(minhaComidasFavoritas)
var matrizNumeros = [
  [7, 8, 9],
  [4, 5, 6],
  [1, 2, 3],
  ["#", 0, "*"],
];
//console.log(matrizNumeros)
//console.log("Os números são: " + matrizNumeros[0][1] + ", " + matrizNumeros[1][1] + ", " + matrizNumeros[2][1] + " e " + matrizNumeros[3][1])

//Objeto
const pessoa = {
  nome: "Pedro André",
  idade: 35,
  comidasFavoritas: ["Massa", "Pizza", "Lasanha"],
};

const pessoas = [
  {
    nome: "Pedro André",
    idade: 35,
    comidasFavoritas: ["Massa", "Pizza", "Lasanha"],
  },
  {
    nome: "Pedro André",
    idade: 35,
    comidasFavoritas: ["Massa", "Pizza", "Lasanha"],
  },
];

//Exercio dos objetos
const minhaSalaTem = [
  {
    id: 1,
    objeto: "estante",
    peso: "3kg",
    cores: ["vermelho", "preto", "verde", "marrom"],
  },
  {
    id: 2,
    objeto: "mesa",
    peso: "2,5KG",
    cores: ["vermelho", "preto", "verde", "marrom"],
  },
  {
    id: 3,
    objeto: "Cuia",
    peso: "100gr",
    cores: ["vermelho", "preto", "verde"],
  },
  {
    id: 4,
    objeto: "Sofá",
    peso: "10kg",
    cores: ["vermelho", "preto"],
  },
];

console.log(`Lista de itens da sala:
    ${minhaSalaTem[0].id}º item ${minhaSalaTem[0].nome} que pesa ${
  minhaSalaTem[0].peso
} e tem as cores ${minhaSalaTem[0].cores.join(", ")} 
    ${minhaSalaTem[1].id}º item ${minhaSalaTem[1].nome} que pesa ${
  minhaSalaTem[1].peso
} e tem as cores ${minhaSalaTem[1].cores.join(", ")}
    ${minhaSalaTem[2].id}º item ${minhaSalaTem[2].nome} que pesa ${
  minhaSalaTem[2].peso
} e tem as cores ${minhaSalaTem[2].cores.join(", ")}
    ${minhaSalaTem[3].id}º item ${minhaSalaTem[3].nome} que pesa ${
  minhaSalaTem[3].peso
} e tem as cores ${minhaSalaTem[3].cores.join(", ")}
    `);
