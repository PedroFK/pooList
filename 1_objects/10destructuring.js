// Podemos criar variáveis a partir de propriedades
let pc = {
  tela: 15.6,
  teclado: 'abnt',
  mouse: false
}

// Estou criando variáveis com os nomes das props
let {tela, teclado, mouse} = pc

console.log(teclado)