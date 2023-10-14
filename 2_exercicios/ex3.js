// crie um ladrao com propriedades nome e vivo
// Quando o oficial atirar o vivo passa para false (ladrao morre)

let bandit = {
  nome: 'JuninDoPCG',
  alive: true
}

function Oficer(ammo) {
  this.Ammo = ammo
  this.shoot = function() {
    bandit.alive = false
  }
}

let policeman = new Oficer()

policeman.shoot()

console.log(bandit.alive)