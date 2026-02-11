const produtos = [
  { id: 1, nome: "Notebook Acer", valor: 3000, temDesconto: true, quantidade: 3 },
  { id: 2, nome: "Mouse Gamer", valor: 150, temDesconto: false, quantidade: 10 },
  { id: 3, nome: "Teclado Mecânico", valor: 450, temDesconto: true, quantidade: 5 },
  { id: 4, nome: "Monitor 24'", valor: 1200, temDesconto: false, quantidade: 4 },
  { id: 5, nome: "Headset", valor: 350, temDesconto: true, quantidade: 6 },
  { id: 6, nome: "Webcam Full HD", valor: 280, temDesconto: false, quantidade: 8 },
  { id: 7, nome: "Cadeira Gamer", valor: 900, temDesconto: true, quantidade: 2 }
];

// 1. adicionar +10 em todo mundo. 
// 2. filtrar os produtos que tem desconto.
// 3. saber o faturamento total somento dos produtos com desconto.

const novoEstoque = produtos.map((produto)=>{
    return {
        ...produto,
        quantidade: produto.quantidade + 10
    }
}).filter((produto)=>{
    return produto.temDesconto
}).reduce((acc, produto)=>{
    return acc + (produto.valor * produto.quantidade)
}, 0)

let msg = `Se vende todo o estoque somente dos produtos com desconto o faturamento será de: ${novoEstoque.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`

console.log(msg);