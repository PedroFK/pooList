// Foram criadas para substituir algumas funçoes
// Declaração é bem parecida com a constructor function
// As propriedades ficam em um método especial (constructor)

class Tenis {
  constructor(modelo, cor) {
    this.modelo = modelo
    this.cor = cor
  }  
}

console.log(typeof Tenis) // function

let vans = new Tenis('Ultra Range', 'Branco')
console.log(vans) // Tenis { modelo: 'Ultra Range', cor: 'Branco' }

// ------------------------------------------------------------

// Existem métodos que podem ser usados nas classes, get and set

class Humano {
  constructor(nome, idade) {
    this.nome = nome
    this.idade = idade  
  }
  nomeDaPessoa() {
    return this.nome
  }

  set trocarNome(novoNome) {
    this.nome = novoNome
  } 

  get obterNome() {
    return `O nome é ${this.nome}`
  }
}

let pessoa = new Humano('Pedro', 20)
console.log(pessoa.obterNome) // O nome é Pedro

pessoa.trocarNome = 'Gabriela'
console.log(pessoa.obterNome) // O nome é Gabriela