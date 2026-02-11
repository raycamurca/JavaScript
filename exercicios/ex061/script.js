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

// 12.Crie um novo array contendo apenas os clientes que gastam mais que a média geral.


const gastoTotal = clientes.reduce((acc, atual)=>{
  return acc + atual.gastoMedioMensal
}, 0)

let media = gastoTotal/clientes.length;

const maiorMedia = clientes.filter((cliente)=>{
  return cliente.gastoMedioMensal > media
})

console.log(maiorMedia);