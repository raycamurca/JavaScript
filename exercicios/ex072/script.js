const clientes = [
    { nome: "Ana Souza", idade: 28, sexo: "F", gastoMedioMensal: 450.75 },
    { nome: "Carlos Lima", idade: 35, sexo: "M", gastoMedioMensal: 620.00 },
    { nome: "Mariana Alves", idade: 22, sexo: "F", gastoMedioMensal: 300.40 },
    { nome: "João Pereira", idade: 41, sexo: "M", gastoMedioMensal: 890.90 }
];

// 6. Filtre os clientes do sexo masculino e gere um relatório final com:
// • total de clientes
// • gasto total

const masRelatorio = clientes.filter((cliente)=>{
    return cliente.sexo=="M"
}).reduce((acc, cliente)=>{
    acc.total_de_clientes++
    acc.gasto_total+=cliente.gastoMedioMensal
    return acc
}, {total_de_clientes: 0, gasto_total: 0})

let msg = `Relatório de clientes do sexo Masculino
Total de clientes: ${masRelatorio.total_de_clientes}
Gasto total: ${masRelatorio.gasto_total.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`


console.log(msg);