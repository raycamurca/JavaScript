// 14.Crie um objeto pedido com:
// • cliente
// • array de produtos (cada produto com nome e preco)
// Crie um método que calcule o valor total do pedido.

const pedido = {
    cliente: "Elon Musk",
    produtos: [
        {nome: "Foguete Ultra", valor: 700},
        {nome: "alien", valor: 1000}
    ],
    valorPedido(){
        return this.produtos.reduce((acc, atual)=>{
            return acc + atual.valor
        }, 0)
    }
}

console.log(`valor do pedido: ${pedido.valorPedido()}`);

