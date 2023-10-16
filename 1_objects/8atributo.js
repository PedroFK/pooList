// Toda propriedade já tem atributos criados pela linguagem

let pessoa = {
  nome: 'Pedro'
}

console.log(Object.getOwnPropertyDescriptor(pessoa, 'nome'))
//{
//  value: 'Pedro',
//  writable: true,
//  enumerable: true,
//  configurable: true
//}