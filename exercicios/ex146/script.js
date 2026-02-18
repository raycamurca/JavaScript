// 6. Crie um objeto produto com:
// • nome
// • preco
// • quantidade
// Crie um método que calcule o valor total em estoque.

const produto = {
    nome: "monitor", 
    preco: 489, 
    quantidade: 7,
    valorTot(){
        return this.preco * this.quantidade
    }
}

let totEstoque = produto.valorTot().toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})

console.log(`valor total em estoque: ${totEstoque}`);