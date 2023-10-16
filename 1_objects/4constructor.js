// Forma de criar objeto pela constructor function, é uma forma antiga

function Pessoa(nome, idade){
  this.nome = nome
  this.idade = idade
}

let Pessoa1 = new Pessoa('Matheus', 23) // Deve utilizar o new
let Pessoa2 = new Pessoa('Carla')

console.log(Pessoa1.nome) // matheus
console.log(Pessoa1.idade) //23
console.log(Pessoa2.nome) // Carla
console.log(Pessoa1.constructor) // Function: pessoa
console.log(Pessoa1 instanceof Pessoa) // true

// Forma atual utiliza class

//class Pessoa {
//  constructor(nome) {
//    this.nome = nome
//  }
//}