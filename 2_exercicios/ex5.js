// Crie dois objetos que  compartilhem propriedades por obj Literals

let cont = 'numeroDe'

let carro = {
  [cont+'Portas']: 4
}

let pessoa = {
  [cont+'Pernas']: 3
}

console.log(carro) // { numeroDePortas: 4 }
console.log(pessoa) // { numeroDePernas: 3 }
