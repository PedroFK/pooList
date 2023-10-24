// Soluçao para o efeito colateral da alterar algum método
// Usar um construtor temporário
// Alocamos um método no construtor (placeholder), e alteramos esse construtor

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

let F = function() {} // Esse é um construtor temporário
F.prototype = Veiculo.prototype
Carro.prototype = new F()


let tremBala = new Trem('TremBala')
let ferrari = new Carro()

// 
// vou alterar a funcao de ligar do carro, o  PROBLEMA é que vai alterar a funcao LIGAR de veiculo
Carro.prototype.ligar = function() { // Tem um efeito colateral
  console.log('O carro ligou')
}


tremBala.ligar() // Ligou
ferrari.ligar() // O carro ligou