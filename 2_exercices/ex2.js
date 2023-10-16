// Criar um obj policial que a cada vez que ele dispara a munição diminui até que ele nao consiga mai disparar

function Oficer(ammo) {
  this.Ammo = ammo
  this.shoot = function() {
    for(let i = ammo; i > 0; i--) {
      console.log('bannn, tiro')
    }
  }
}

let policeman = new Oficer(2)

policeman.shoot()