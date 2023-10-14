// Crie um funcao que verifica se um objeto é instancia de outro objeto
// O console deve mostrar se é positivo ou negativo

function Carro(nome, ano) {
  this.nome = nome
  this.ano = ano
}

let carriola = new Carro('camaro', 2020)

function verify() {
  if(carriola instanceof Carro) {
    console.log('positivo')
  }
  else {
    console.log('negativo')
  }
}

verify()