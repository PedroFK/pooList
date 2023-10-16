// Posso usar dois métodos interessantes de function
// CALL - Pegar métodos emprestados de outros objetos
// APPLY - Igual call, porém parâmetros são transformados em array

let pessoa1 = {
  nome: 'Pedro',
  falar() {
    console.log(`Meu nome é ${this.nome}`) // método de pessoa1
  }
}

let pessoa2 = {
  nome: 'Carlos'
}

// Usando call
pessoa1.falar.call(pessoa2)