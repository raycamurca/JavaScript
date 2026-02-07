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

// 12.Crie um objeto que mostre o total gasto por faixa etária (Jovem e Adulto).

const gastoIdade = clientes.reduce((acc, atual)=>{
    if(atual.idade<=29){
        acc.jovem+= atual.gastoMedioMensal
    }else {
        acc.adulto+= atual.gastoMedioMensal
    }
    return acc
}, {jovem: 0, adulto: 0})

let msg = `Total gasto por faixa etária | jovem: ${gastoIdade.jovem} | adulto: ${gastoIdade.adulto}`
console.log(msg);