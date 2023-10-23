// Ao alterar prototype as instancias recebem o novo método ou propriedade.

function Pessoa(peso, idade) {
  this.peso = peso;
  this.idade = idade;
}

let pedro = new Pessoa(80, 20);
Pessoa.prototype.pernas = 2;
console.log(pedro); // Pessoa { peso: 80, idade: 20 }

// -----------------------------------------
// Se proto e obj tiverem mesma propriedade, o objeto tem prioridade

function Carro(cor) {
  this.cor = cor;
}

Carro.prototype.cor = "Branco";
let punto = new Carro("Preto");
console.log(punto.cor); // Preto

delete punto.cor;
console.log(punto.cor); // Branco

// Podemos usar o método de verificar se o objeto ou o proto tem uma propriedade

console.log(punto.hasOwnProperty('cor')); // false, pois eu deletei
console.log(punto.constructor.prototype.hasOwnProperty('cor')); // true
