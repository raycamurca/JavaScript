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

//15.Verifique se o gasto total dos clientes ultrapassa R$ 2.000
//(retorne true ou false).

const ultrapassa2000 = clientes.reduce((acc, atual) => {
  return acc + atual.gastoMedioMensal;
}, 0) > 2000;

console.log(ultrapassa2000);


// const totGasto = clientes.reduce((acc, atual)=>{
//     return acc + atual.gastoMedioMensal
// }, 0)

// let resp = totGasto > 2000
// console.log(resp);