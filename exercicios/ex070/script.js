const clientes = [
    { nome: "Ana Souza", idade: 28, sexo: "F", gastoMedioMensal: 450.75 },
    { nome: "Carlos Lima", idade: 35, sexo: "M", gastoMedioMensal: 620.00 },
    { nome: "Mariana Alves", idade: 22, sexo: "F", gastoMedioMensal: 300.40 },
    { nome: "João Pereira", idade: 41, sexo: "M", gastoMedioMensal: 890.90 }
];

// 4. Filtre os clientes Jovens e calcule a soma das idades.
// jovem: menor de 30 anos
const jovemIdade = clientes.filter((cliente)=>{
    return cliente.idade<30
}).reduce((acc, cliente)=>{
    return acc + cliente.idade
}, 0)

console.log(jovemIdade);