import { Produto } from "./produtos.js";

const p1 = new Produto("notebook", 45000);

console.log(p1);
console.log(p1.desconto(10));