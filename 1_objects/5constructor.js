// criando um objeto com function e return

function Pessoa(nome, idade) {
  return {
  nome: nome,
  idade: idade
  }
}
let Pessoa1 = new Pessoa('Junin', 23)

// Operador para descobrir se uma funçao é instancia de outra

function Automovel(nome, ano) {
  this.nome = nome
  this.ano = ano
}

let Carro = new Automovel('ferrari', 2012) 


console.log(Carro instanceof Automovel) // true

