const clientes = [
    { nome: "Ana Souza", idade: 38, sexo: "F", gastoMedioMensal: 450.75 },
    { nome: "Marlos Souza", idade: 25, sexo: "M", gastoMedioMensal: 620.00 },
    { nome: "Mariana Alves", idade: 22, sexo: "F", gastoMedioMensal: 300.40 },
    { nome: "João Pereira", idade: 41, sexo: "M", gastoMedioMensal: 890.90 }
];

// 13.Filtre os clientes que possuem sobrenome “Souza” e gere um array com:
// • nome
// • faixaEtaria

const sobrenome = clientes.filter((cliente)=>{
    return cliente.nome.includes("Souza");
}).reduce((acc, cliente)=>{
    acc.push(cliente.nome)
    acc.push(cliente.idade<30 ? "Jovem" : "Adulto");
    return acc
}, [])

console.log(sobrenome);