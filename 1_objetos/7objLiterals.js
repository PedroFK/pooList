// Criando objetos mais rápido, usando nomes de variáveis como nome de propriedades

let number1 = 12
let number2 = 22

let object = {number1, number2}

console.log(object.number1) // 12

// ------------------------------------------------------

// Retornando uma variável para economizar tempo na criação de uma propriedade

let tipo = 'tipoDe'

let carro = {
  [tipo+'Carro']: 'Sedan'
}

console.log(carro.tipoDeCarro) // Sedan