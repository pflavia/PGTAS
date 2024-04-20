



const prompt = require("prompt-sync")();
const pessoa = {
    nome: null,
    idade: null,
    peso: null,
    altura: null,
    classificacao: null,
    imc: null
}
pessoa.nome = prompt("Qual seu nome?  ");
pessoa.idade = prompt("Qual sua idade?  ");
if (pessoa.idade >= 20 && pessoa.idade <= 60) {
    pessoa.peso = prompt("Qual seu peso em KG? Ex 85.4  ");
    pessoa.altura = prompt("Qual sua altura em metros? Ex 1.64  ");
    pessoa.imc = pessoa.peso / (pessoa.altura * pessoa.altura);

    if (pessoa.imc < 18.5)
        pessoa.classificacao = "abaixo do peso";
    else if (pessoa.imc < 25)
        pessoa.classificacao = "com peso Normal";
    else if (pessoa.imc < 30)
        pessoa.classificacao = "acima do peso";
    else
        pessoa.classificacao = "obeso";
    console.log(`${pessoa.nome} seu IMC é ${pessoa.imc.toFixed(2)} e você está ${pessoa.classificacao} `);
}
else console.log(`${pessoa.nome}, você não tem idade para calcular o IMC. Idade aceitavel entre 20 e 60 anos.`)