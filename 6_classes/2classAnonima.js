// deixo a class sem nome, ela fica encapsulada à uma variável

let Tenis = class {
  constructor(modelo, cor) {
    this.modelo = modelo
    this.cor = cor
  }
  get modeloDoTenis() { // Método que fica fora do constructork
  return this.modelo
  }
}

let vans = new Tenis('Ultra Range', 'Branco')
console.log(vans)
console.log(vans.modeloDoTenis)