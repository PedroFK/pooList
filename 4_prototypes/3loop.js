// Formas de percorrer as propriedades de um objeto

function Pessoa(name, age, height) {
  this.name = name
  this.age = age
  this.height = height
}

let human = new Pessoa('Pedro', 20, 1.84)

for (key in human) {
  if (human.hasOwnProperty.call(human, key)) {
    const element = human[key];
    console.log(element, key)
  }
}

// ------------------------------------------

// Podemos checar se um objeto é proto de outro

let features = {
  teto: 'solar'
}

function Car(name) {
  this.name = name
}

Car.prototype = features

let suv = new Car('hrv')

console.log(suv.teto) // solar
console.log(features.isPrototypeOf(suv)) // true