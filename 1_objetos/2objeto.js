// Objeto dentro de objeto

let pessoa = {
  nome: 'Pedro',
  caracteristica: {
    olho: 'azul',
    cabelo: 'Loiro',
    altura: 1.84,
    brinco: false    
  }
}

console.log(pessoa.caracteristica.cabelo)

// Posso criar nova propriedade ou método para o objeto

pessoa.idade = 14

console.log(pessoa)
console.log(pessoa.idade)

// Posso deletar propriedades ou métodos

delete pessoa.idade // Não é muito recomendado
console.log(pessoa.idade)
