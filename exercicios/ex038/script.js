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

// 7. Encontre o menor gasto médio mensal.

const menorGasto = clientes.reduce((menor, atual)=>{
    return menor<atual.gastoMedioMensal ? menor : atual.gastoMedioMensal
}, clientes[0].gastoMedioMensal);

const msg = `o menor gasto foi de: ${menorGasto.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`

console.log(msg);