// Crie um objeto ninja  com constructor
// Nome e function atirar shuriken
function Ninja(nome, ataque) {
  this.nome = nome
  this.atirarShuriken = function() {
  console.log('atacou')
  }
}

let ninja1 = new Ninja('Naruto')

console.log(ninja1)