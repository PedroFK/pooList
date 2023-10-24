// Métodos que só funcionam se utilizar o nome classe
// Não preciso instanciar um objeto, posso fazer direto na classe

class Calc {
  static soma(a, b) {
    return a + b
  }
}

console.log(Calc.soma(2, 3)) // 5

class Falar {
  static comprimentar(turno, nome) {
    console.log(`${turno}, seja bem vindo ${nome}`)
  }
}

Falar.comprimentar('Bom dia', 'Pedro') // Bom dia, seja bem vindo Pedro