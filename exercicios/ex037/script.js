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

// 6. Encontre o maior gasto médio mensal.

let maior = 0;
const maiorGasto = clientes.reduce((acumulador, atual)=>{
    if(maior<atual.gastoMedioMensal){
        maior = atual.gastoMedioMensal;
    } else {
        maior = maior;
    }
    acumulador = maior;
    return acumulador
}, 0)

let msg = `o maior gasto medio mensal foi ${maiorGasto.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}.`
console.log(msg)