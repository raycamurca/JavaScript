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

//13.Gere um relatório final com:
// • total de clientes
// • gasto total
// • média de gasto

const relatorio = clientes.reduce((acc, atual)=>{
    acc.total_clientes++
    acc.gasto_total += atual.gastoMedioMensal
    acc.media_gasto = acc.gasto_total/acc.total_clientes
    return acc
}, {total_clientes: 0, gasto_total: 0, media_gasto: 0})

let msg = `Relatório Final:`
let msgTotCliente = `Total de Clientes: ${relatorio.total_clientes}`
let msgGastoTot = `Gasto Total dos Clientes: ${relatorio.gasto_total.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`
let msgMediaGasto =  `Média do Gasto: ${relatorio.media_gasto.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`

console.log(`
Relatório Final
Total de Clientes: ${relatorio.total_clientes}
Gasto Total dos Clientes: ${relatorio.gasto_total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
Média do Gasto: ${relatorio.media_gasto.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
`);