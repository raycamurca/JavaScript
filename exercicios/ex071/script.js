const clientes = [
    { nome: "Ana Souza", idade: 28, sexo: "F", gastoMedioMensal: 450.75 },
    { nome: "Carlos Lima", idade: 35, sexo: "M", gastoMedioMensal: 620.00 },
    { nome: "Mariana Alves", idade: 22, sexo: "F", gastoMedioMensal: 300.40 },
    { nome: "João Pereira", idade: 41, sexo: "M", gastoMedioMensal: 890.90 }
];

//5. Filtre os clientes com gasto maior que 500 e crie um array com:
// • nome
// • gastoMedioMensal

const premium = clientes.filter((cliente)=>{
    return cliente.gastoMedioMensal>500
}).reduce((acc, cliente)=>{
    acc.push(cliente.nome, cliente.gastoMedioMensal)
    return acc
}, [])

console.log(premium);
