let pessoa = {
  nome: 'Pedro',
  idade: 20,
  falar: function() {
    console.log(`Meu nome é ${this.nome}`)
  },
  aniversario() {
    this.idade += 1
  }
}

console.log(pessoa.idade)
pessoa.aniversario()
console.log(pessoa.idade)
pessoa.aniversario()
pessoa.falar()