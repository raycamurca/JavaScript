import { Banco } from "./bank.js";

let p1 = new Banco(777);

console.log(p1.saldo);

console.log(p1.sacar(700));

console.log(p1.sacar(100));