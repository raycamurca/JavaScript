const clientes = [
    { nome: "Ana Souza", idade: 28, sexo: "F", gastoMedioMensal: 450.75 },
    { nome: "Carlos Lima", idade: 35, sexo: "M", gastoMedioMensal: 620.00 },
    { nome: "Mariana Alves", idade: 22, sexo: "F", gastoMedioMensal: 300.40 },
    { nome: "João Pereira", idade: 41, sexo: "M", gastoMedioMensal: 890.90 }
];

// 7. Filtre os clientes com idade menor que 30 e calcule o gasto médio mensal total.

const jovemGasto = clientes.filter((cliente)=>{
    return cliente.idade<30
}).reduce((acc, cliente)=>{
    return acc + cliente.gastoMedioMensal
}, 0)

console.log(jovemGasto);