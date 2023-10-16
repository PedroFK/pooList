// As classes apresentam as caracteristicas gerais dos objetos, é um tipo de molde

// ENCAPSULAÇÃO - utilizada para proteger o OBJ de métodos externos
// Propriedades e métodos: públicos, privados e protegidos 

//AGREGAÇÃO - Utiliza objetos menores par compor objetos maiores

// HERANÇA - Quando um objeto ou class deriva de outra classe, herdando props e methods

// POLIMORFISMO - Utilizar methods da class pai alerando algumas coisas

// -----------------------------------------------------------

// Posso objetos e array usando prototype. 

let obj = new Object // obj recebe características e métodos padrões de Objecto
obj.nome = 'Pedro'

let arr = new Array // arr recebe características e métodos padrões de Array, que é um proto de OBJ
arr[0] = 2
console.log(arr[0]) // 2