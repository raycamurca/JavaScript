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

// 11.Crie um objeto que mostre o total de clientes por sexo.

const totalSexo = clientes.reduce ((acc, atual)=>{
    if (atual.sexo=="M"){
        acc.homem+=1
    }else {
        acc.mulher+=1
    }
    return acc
}, {homem: 0, mulher: 0})

let msg = `clientes divididos por sexo | Homem: ${totalSexo.homem} | Mulher: ${totalSexo.mulher}`

console.log(msg);