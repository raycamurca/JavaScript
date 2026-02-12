const clientes = [
    { nome: "Ana Souza", idade: 28, sexo: "F", gasto: 450.75 },
    { nome: "Carlos Lima", idade: 35, sexo: "M", gasto: 620.00 },
    { nome: "Mariana Alves", idade: 22, sexo: "F", gasto: 300.40 },
    { nome: "João Pereira", idade: 41, sexo: "M", gasto: 890.90 }
];

// 2. Use for para somar o gasto total dos clientes.

let soma = 0;
for(let i = 0; i<clientes.length; i++){
    soma+=clientes[i].gasto
}

console.log(`Gasto tot dos clientes: ${soma}`);