// 16.Crie um objeto que represente um produto e tenha:
// • nome
// • preço
// • quantidade
// Crie um método que calcule o valor total em estoque.

const produto = {
    nome: "impressora Hp 581 tank", 
    preco: 810, 
    quantidade: 7,
    valorTotal(){
        return this.preco * this.quantidade
    }
};

produto.quantidade = 10;

console.log(produto.valorTotal());