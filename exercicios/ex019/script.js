const clientes = [
  {
    nome: "Ana Souza",
    idade: 28,
    sexo: "F",
    gastoMedioMensal: 450.75
  },
  {
    nome: "Carlos Lima",
    idade: 35,
    sexo: "M",
    gastoMedioMensal: 620.00
  },
  {
    nome: "Mariana Alves",
    idade: 22,
    sexo: "F",
    gastoMedioMensal: 300.40
  },
  {
    nome: "João Pereira",
    idade: 41,
    sexo: "M",
    gastoMedioMensal: 890.90
  }
];

const addStatus = clientes.map ((cliente)=>{
    let statusCliente = cliente.gastoMedioMensal > 500 ? "Premium" : "Comum";
    return {
        nome: cliente.nome,
        idade: cliente.idade,
        Gasto: cliente.gastoMedioMensal.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}),
        status: statusCliente
    }
})

console.log(addStatus);