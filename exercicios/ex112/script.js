const clientes = [
    { nome: "Ana Souza", idade: 28, sexo: "F", gasto: 450.75 },
    { nome: "Carlos Lima", idade: 16, sexo: "M", gasto: 620.00 },
    { nome: "Mariana Alves", idade: 22, sexo: "F", gasto: 300.40 },
    { nome: "João Pereira", idade: 17, sexo: "M", gasto: 890.90 }
];

// 6. Usando forEach, some o gasto total dos clientes.

let soma = 0; 

clientes.forEach(item => {
    soma += item.gasto
});

console.log(soma);