import { Pedido } from "./pedido.js";

let p1 = new Pedido()

p1.adicionarItem("arroz", 20)
p1.adicionarItem("feijao", 30)

console.log(p1.calcularTotal());