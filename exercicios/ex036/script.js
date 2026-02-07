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

// 5. Calcule a média de idade dos clientes

let somaIdade = 0
const mediaIdade = clientes.reduce ((acumulador, atual)=>{
    return acumulador + atual.idade
}, 0)

let msg = `a media de idade dos clientes é ${mediaIdade/clientes.length} anos`

console.log(msg);