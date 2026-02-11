const clientes = [
    { nome: "Ana Souza", idade: 28, sexo: "F", gastoMedioMensal: 450.75 },
    { nome: "Carlos Lima", idade: 35, sexo: "M", gastoMedioMensal: 620.00 },
    { nome: "Mariana Alves", idade: 22, sexo: "F", gastoMedioMensal: 300.40 },
    { nome: "João Pereira", idade: 41, sexo: "M", gastoMedioMensal: 890.90 }
];

// 8. Filtre os clientes com gasto entre 300 e 700 e gere um array apenas com os nomes em letras maiúsculas.

const gastoEntre = clientes.filter((cliente)=>{
    return cliente.gastoMedioMensal>300 && cliente.gastoMedioMensal<700
}).reduce((acc, cliente)=>{
    acc.push(cliente.nome.toUpperCase())
    return acc
}, [])

let msg = `clientes com gasto entre 300 e 700:
===${gastoEntre}===`

console.log(msg);