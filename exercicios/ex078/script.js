const clientes = [
    { nome: "Ana Souza", idade: 38, sexo: "F", gastoMedioMensal: 450.75 },
    { nome: "Marlos Lima", idade: 35, sexo: "M", gastoMedioMensal: 620.00 },
    { nome: "Mariana Alves", idade: 22, sexo: "F", gastoMedioMensal: 300.40 },
    { nome: "João Pereira", idade: 41, sexo: "M", gastoMedioMensal: 890.90 }
];

// 12.Filtre os clientes cujo nome começa com “M” e calcule o gasto total. 

const nomeM = clientes.filter((cliente)=>{
    return cliente.nome[0]=="M"
}).reduce((acc, cliente)=>{
    return acc + cliente.gastoMedioMensal
}, 0)

console.log(nomeM.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}));