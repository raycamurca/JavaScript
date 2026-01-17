let valorCompra = 77;
let membro = "sim";

if((valorCompra>=100) && (membro=="sim")) {
    console.log("valor: " + valorCompra + "; com 20% de desconto fica: " + ( 200 - (200*20)/100));
} else {
    console.log("a compra deu: " + valorCompra);
}