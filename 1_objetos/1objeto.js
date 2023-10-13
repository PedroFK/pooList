// O objeto é um par, chave e valor

let carro = {
  portas: 4,
  cor: 'vermelha'
}

// Utilizando lógica com um objeto
if(carro.portas == 4) {
  console.log(`Esse carro tem ${carro.portas} portas`)
}

let corCarro = carro.cor

console.log(carro.cor) // Forma de acessar uma propriedade do objeto
console.log(corCarro.length) // Analizar uma propriedade como string

// Um objeto aceita todos os tipos dentro dele: number, array, string e etc...

let moto = {
  rodas: 2,
  cor: 'Preta',
  adicionais: ['escape', 'manopla', 'farolLed'],
  temSeguro: false
}


console.log(moto.adicionais[2]) // seleciona o último adicional
if(moto.temSeguro) {
  console.log('Você não vai gastar nada a mais')
}
else{
  console.log('Precisa contratar seguro para a sua moto')
}

// Escrevendo lista de adicionais

for (let i = 0; i < moto.adicionais.length; i++) {
  console.log(moto.adicionais[i])
}