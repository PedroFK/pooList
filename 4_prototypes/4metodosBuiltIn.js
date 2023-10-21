// Podemos criar métodos para usar com qualquer objeto
// Vou criar um método para ler o n1 do array

Array.prototype.firstElement = function() {
  return this[0]
}

Array.prototype.sum2 = function() {
  return this[0] + this[1]
}


let arr = [22, 23, 24]

console.log(arr.firstElement()) // 22
console.log(arr.sum2()) // 45

// Se o JS atualizar e criar uma funcao com o mesmo nome, o sistema vai parar de funcionar como planejado
// Podemos proteger o código, verificando se a funcao ja existe

if(Array.prototype.firstElement !== 'function') { // Se meu método nao for uma funcao, ele vai ser criado
  Array.prototype.firstElement = function() {
    return this[0]
  }
}