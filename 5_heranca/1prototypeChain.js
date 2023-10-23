// Maneira padrão do JS de fazer herança
// Podemos instanciar objetos no proto da outra criando herança

function Pessoa() {
  this.classe = 'Mamifero'
  this.falar = function() {
    console.log('Olá')
  }
} 

function Advogado() { 
  this.profissao = 'Advogado'
}

Advogado.prototype = new Pessoa() // Tornei pessoa prototypo de 

let joao = new Advogado()

joao.falar() // Funcao falar é de Pessoa e João é filho de advogado

// ----------------------------------------------

// Podemos checar herança
console.log(joao instanceof Advogado) // True
console.log(joao instanceof Pessoa) // True