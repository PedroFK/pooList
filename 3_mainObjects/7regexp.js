// Usamos expressões regulares para encontrar padrões em texto que temos. Nao vamos aprofundar aqui

let str = 'Eu gosto de batata frita'
let newwStr = str.split(/[ ,]+/)
console.log(newwStr)

// Testar se uma palavra tem alguma combinação de letras
let palavra = new RegExp(/t/) // Contem letra t

console.log(palavra.test('Camelo')) // false
console.log(palavra.test('trator')) // true