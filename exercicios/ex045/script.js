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

// 14.Crie um objeto onde:
// • a chave seja o nome do cliente
// • o valor seja o gasto médio mensal

const clienteValor = clientes.reduce((acc, atual)=>{
    acc[atual.nome] = atual.gastoMedioMensal.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
    return acc
}, {})

console.log(clienteValor);