// Forma de criar herança com classes. Usamos extends

class Animal {
  correr() {
    console.log('O animal está correndo')
  }
}

class Cachorro extends Animal {
  constructor(nome) {
    super()
    this.nome = nome
  }
}

let bob = new Cachorro('bob')

bob.correr()