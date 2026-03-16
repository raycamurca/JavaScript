const valores = [10, 8, 9, 2];
const itValores = valores[Symbol.iterator]()

const texto = "Dragon ball";
const itTexto = texto[Symbol.iterator]()

console.log(texto);
console.log(itTexto.next());
console.log(itTexto.next());
console.log(itTexto.next());
console.log(itTexto.next());
console.log(itTexto.next());
console.log(itTexto.next());
console.log(itTexto.next());
console.log(itTexto.next());
console.log(itTexto.next());
console.log(itTexto.next());
console.log(itTexto.next());
console.log(itTexto.next());