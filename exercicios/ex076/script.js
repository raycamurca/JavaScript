const clientes = [
    { nome: "Ana Souza", idade: 38, sexo: "F", gastoMedioMensal: 450.75 },
    { nome: "Carlos Lima", idade: 35, sexo: "M", gastoMedioMensal: 620.00 },
    { nome: "Mariana Alves", idade: 22, sexo: "F", gastoMedioMensal: 300.40 },
    { nome: "João Pereira", idade: 41, sexo: "M", gastoMedioMensal: 890.90 }
];

// 10.Filtre os clientes do sexo feminino e conte quantas são Jovens e quantas são Adultas.

const femQtd = clientes.filter((cliente)=>{
    return cliente.sexo=="F"
}).reduce((acc, cliente)=>{
    cliente.idade>=30 ? acc.adultos++ : acc.jovens++;
    return acc
}, {jovens: 0, adultos: 0});

console.log(femQtd);