const compras = [
  { produto: "feijão", valor: 7, quantidade: 3 },
  { produto: "arroz", valor: 5, quantidade: 2 },
  { produto: "macarrão", valor: 4, quantidade: 4 }
];

//1° total da compra

const valorCompra = compras.reduce((acumulador, produto)=>{
    return acumulador + produto.valor * produto.quantidade
}, 0)

const msgValor = `Valor total da compra: ${valorCompra.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`

console.log(msgValor);