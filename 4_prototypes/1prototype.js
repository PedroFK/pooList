// vamos inserir métodos e propriedades no prototype para usar posteriormente em objetos

function Carro(marca, preco) {
  this.marca = marca
  this.preco = preco
}

// Se eu der log(x6), nao vao aparecer rodas nem ligar. Elas sao uma herança do objeto pai
// Roda é uma propriedade da classe, e nao do obj Carro
Carro.prototype.rodas = 4
Carro.prototype.ligar = function() {console.log('O carro ligou')}

let x6 = new Carro('BMW', 20000)

console.log(x6) // Imprimi apenas marca e preço
console.log(x6.rodas) //4
// Rodas é uma herança do obj pai que é carro

//---------------------------------------

// EXEMPLO CORRETO
class Moto {
  constructor(marca, preco) {
    this.marca = marca
    this.preco = preco
  }
  ligar() { console.log('A moto ligou') }
}

// Se eu der log(mt07), nao vao aparecer rodas nem ligar. Elas sao uma herança do objeto pai
// Roda é uma propriedade da classe, e nao do obj Carro
Moto.prototype.rodas = 2

let mt07 = new Moto('yamaha', 20000)

console.log(mt07) // Imprimi apenas marca e preço
console.log(mt07.rodas) //4
// Rodas é uma herança do obj pai que é carro