// Objeto lida com datas
console.log(new Date()) // Essa instância epresenta a data e hora atuais no momento em que o código é executado
console.log(new Date(2000, 11, 23)) //  

let data = new Date() // Guada a data atual nessa variável
let horas = data.getHours() // Acessa a hora que aparece na data atual
console.log(horas)

console.log(new Date(data.setMonth(0)))