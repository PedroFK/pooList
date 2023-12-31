// Podemos copiar apenas o prototype e nao a instancia do objeto. LINHAS 21 e 22
// dessa forma forma o código fica mais otimizado

// Nesse código estou adicionando as propriedades fora da funcao, por meio de prototype
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

tremBala.ligar() // Ligou
ferrari.ligar() // Ligou