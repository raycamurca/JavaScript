const produtos = [
  { id: 1, nome: "Notebook Acer", valor: 3000, temDesconto: true, quantidade: 3 },
  { id: 2, nome: "Mouse Gamer", valor: 150, temDesconto: false, quantidade: 10 },
  { id: 3, nome: "Teclado Mecânico", valor: 450, temDesconto: true, quantidade: 5 },
  { id: 4, nome: "Monitor 24'", valor: 1200, temDesconto: false, quantidade: 4 },
  { id: 5, nome: "Headset", valor: 350, temDesconto: true, quantidade: 6 },
  { id: 6, nome: "Webcam Full HD", valor: 280, temDesconto: false, quantidade: 8 },
  { id: 7, nome: "Cadeira Gamer", valor: 900, temDesconto: true, quantidade: 2 }
];

// 1° colocar valor R$ 00,00
// 2° aplicar um desconto de 10%

const novoArray = produtos.map ((produto)=>{
    let novoValor = produto.temDesconto ? produto.valor - (produto.valor*10/100) : produto.valor;

    return {
        id: produto.id,
        nome: produto.nome,
        valor: novoValor.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}),
        quantidade: produto.quantidade
    }
})

console.log(novoArray);