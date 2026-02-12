const clientes = [
    { nome: "Ana Souza", idade: 28, sexo: "F", gasto: 450.75 },
    { nome: "Carlos Lima", idade: 35, sexo: "M", gasto: 620.00 },
    { nome: "Mariana Alves", idade: 22, sexo: "F", gasto: 300.40 },
    { nome: "João Pereira", idade: 41, sexo: "M", gasto: 890.90 }
];

// 1. Percorra o array clientes e exiba o índice e o nome de cada cliente.

for(let i = 0; i<clientes.length; i++){
    console.log(`Índice: ${i} | nome: ${clientes[i].nome}`);
}