// Usar destructuring para separar as propriedades com obj em variaveis

let caminhao = {
  cabine: 'temCama',
  luz: 'led',
  radio: true
}

let {cabine, luz, radio} = caminhao

console.log(cabine)
console.log(luz)
console.log(radio)