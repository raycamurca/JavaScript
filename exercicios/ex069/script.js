const clientes = [
    { nome: "Ana Souza", idade: 28, sexo: "F", gastoMedioMensal: 450.75 },
    { nome: "Carlos Lima", idade: 35, sexo: "M", gastoMedioMensal: 620.00 },
    { nome: "Mariana Alves", idade: 22, sexo: "F", gastoMedioMensal: 300.40 },
    { nome: "João Pereira", idade: 41, sexo: "M", gastoMedioMensal: 890.90 }
];

// 3. Filtre os clientes Adultos e gere um array apenas com os nomes.
// adulto igual ou maior de 30 anos

const adultosNomes = clientes.filter((cliente)=>{
    return cliente.idade>=30
}).reduce((acc, cliente)=>{
    acc.push(cliente.nome)
    return acc
}, [])

console.log(adultosNomes);