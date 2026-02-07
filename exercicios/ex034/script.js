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

// 3. Calcule o gasto médio mensal total apenas dos clientes do sexo masculino.

const gastoMasculino = clientes.reduce ((acumulador, atual)=>{
    if (atual.sexo=="M"){
        return acumulador + atual.gastoMedioMensal
    }
    return acumulador
}, 0)

let msg = `Gasto total de pessoas do sexo Masculino: ${gastoMasculino.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`

console.log(msg);