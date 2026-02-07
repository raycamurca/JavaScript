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

// 9. Conte quantos clientes são Jovens e quantos são Adultos
// adulto: 30 anos pra cima | jovem: 29 anos pra baixo

const faixaEtaria = clientes.reduce ((acc, atual)=>{
    if (atual.idade>=30){
        acc.adulto++;
    }else {
        acc.jovem++;
    }
    return acc
}, {adulto: 0, jovem: 0})

let msg = `clientes divididos por faixa etária; 
adulto: ${faixaEtaria.adulto}
jovem: ${faixaEtaria.jovem}`
console.log(msg);