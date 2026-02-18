// 13.Crie um array de objetos produtos e use map para retornar apenas os nomes.

const produtos = [
    {nome: "computador", preco: 1000, quantidade: 3},
    {nome: "Impressora", preco: 800, quantidade: 7},
    {nome: "monitor", preco: 450, quantidade: 5}
]

const names = produtos.map((produto)=>{
    return produto.nome
})

console.log(names);
