// Distructuring também funciona em arrays

let arr = [1, 2, 3]

let [num1, num2, num3] = arr

console.log(num1) // 1
console.log(typeof(num1)) // Number

// _________________________________________________________

// Destructuring com rest operator. Rest pega o primeiro elemento do array e cria um array com o restante

let meuArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let [a, ...b] = meuArray
// tudo que esta depois dos 3pontos vira array

console.log(a) // 1