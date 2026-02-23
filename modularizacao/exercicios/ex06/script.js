import { Carrinho } from "./carrinho.js";

let c1 = new Carrinho()

c1.adicionar("arroz", "carne", "pizza")
console.log(c1);

c1.remover("carne", "arroz")

console.log(c1);