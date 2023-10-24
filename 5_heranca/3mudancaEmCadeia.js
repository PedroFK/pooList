// Mesmo código anterior
// Se formos utilizar o método de prototype chain, temos que usar métodos e propriedades que nao vao ser alteradas

function Veiculo() {}
Veiculo.prototype.carenagem = 'aço'
Veiculo.prototype.ligar = function() {
 console.log('Ligou') 
}

function Trem(tipo) {
  this.tipo = tipo
}
Trem.prototype.vagoes = 5

function Carro() {}
Carro.prototype.pneus = 4

// Copiando o prototype sem instanciar a classe
Trem.prototype = Veiculo.prototype // forma antiga = new Veiculo
Carro.prototype = Veiculo.prototype // forma antiga = new Veiculo

let tremBala = new Trem('TremBala')
let ferrari = new Carro()

// 
// vou alterar a funcao de ligar do carro, o  PROBLEMA é que vai alterar a funcao LIGAR de veiculo
Carro.prototype.ligar = function() { // Tem um efeito colateral
  console.log('O carro ligou')
}


tremBala.ligar() // O carro ligou
ferrari.ligar() // O carro ligou