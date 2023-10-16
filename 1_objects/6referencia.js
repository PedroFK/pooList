// Os objetos fazem referencia a outro

let carro = {
  porta: 4
}

let carriola = carro // Eu nao criei carriola, ela só faz referencia a carro

console.log(carriola.porta) // 4

carriola.porta = 2 // O valor da quantidade de portas de carro tbm será alterado

console.log(carro.porta) // 2

// ----------------------------------------------------------------

// Um objeto só é igual a outro quando um é referencia do outro
// Se dois objetos forem filhos de outro, esses dois nao serao considerados iguais mesmo tendo mesmas propriedades

//teste

console.log(carriola === carro) // true