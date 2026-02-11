const clientes = [
    { nome: "Ana Souza", idade: 28, sexo: "F", gastoMedioMensal: 450.75 },
    { nome: "Carlos Lima", idade: 35, sexo: "M", gastoMedioMensal: 620.00 },
    { nome: "Mariana Alves", idade: 22, sexo: "F", gastoMedioMensal: 300.40 },
    { nome: "João Pereira", idade: 41, sexo: "M", gastoMedioMensal: 890.90 }
];

// 1. Filtre os clientes Premium e calcule o gasto total deles.
// premium>500

const gastoPremium = clientes.filter((cliente) => {
    return cliente.gastoMedioMensal > 500
}).reduce((acc, cliente) => {
    return acc + cliente.gastoMedioMensal
}, 0)

console.log(gastoPremium.toLocaleString('pt-BR', {style: 'currency',currency:'BRL'}));