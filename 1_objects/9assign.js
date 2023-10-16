// Podemos copiar atributos de outro objeto

let glock = {
  type: 'semiAuto'
}

let awp = {
  reload: 2
}

// 1- Objeto que recebe, 2- Objeto que fornece
// Se já tiver uma de mesmo nome, o nome será trocado pelo novo
Object.assign(awp, glock)

console.log(awp) // { reload: 2, type: 'semiAuto' }

// ---------------------------------------------------------

// Outra forma de comparar objetos, usando o método IS. O funcionamento é basicaly o mesmo que '==='

let glock2 = glock

console.log(Object.is(glock, glock2)) // true
