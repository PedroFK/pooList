// Propriedades interessantes do NUMBER

let nmb = 12.7693
let frase = '12.7683'

console.log(parseInt(nmb)) // 12
console.log(Number.parseFloat(frase)) //12.7683
// transforma texto para número

// ----------------------------------------------

console.log(nmb.toFixed(2)) // Arredonda para duas casas depois da virgula
console.log(nmb.toFixed()) // Arredonda para inteiro
console.log(nmb.toExponential()) 