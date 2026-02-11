const clientes = [
    { nome: "Ana Souza", idade: 38, sexo: "F", gastoMedioMensal: 450.75 },
    { nome: "Marlos Souza", idade: 25, sexo: "M", gastoMedioMensal: 620.00 },
    { nome: "Mariana Alves", idade: 22, sexo: "F", gastoMedioMensal: 300.40 },
    { nome: "João Pereira", idade: 41, sexo: "M", gastoMedioMensal: 890.90 }
];

// 15.Filtre todos os clientes e gere um objeto final de estatísticas contendo:
// • total de clientes
// • gasto total
// • média de gasto
// • maior gasto
// • menor gasto

const relatorio = clientes.reduce((acc, cliente)=>{
    acc.totclientes++ // total de clientes
    acc.gastotot+=cliente.gastoMedioMensal // gasto total
    if(acc.maiorgasto < cliente.gastoMedioMensal){ //maior gasto
        acc.maiorgasto = cliente.gastoMedioMensal
    }
    if(acc.menorgasto===null || acc.menorgasto>cliente.gastoMedioMensal){ // menor gasto
        acc.menorgasto = cliente.gastoMedioMensal
    }
    return acc
}, {totclientes: 0, gastotot: 0, maiorgasto: 0, menorgasto: null})

let media = relatorio.gastotot / relatorio.totclientes

let msg = `Relatório Final
Total de clientes: ${relatorio.totclientes}
Gasto total:  ${relatorio.gastotot.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}
Média de gasto: ${media.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}
Maior gasto: ${relatorio.maiorgasto.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}
Menor gasto: ${relatorio.menorgasto.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`

console.log(msg);