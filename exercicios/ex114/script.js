const clientes = [
    { nome: "Ana Souza", idade: 28, sexo: "F", gasto: 450.75 },
    { nome: "Carlos Lima", idade: 16, sexo: "M", gasto: 620.00 },
    { nome: "Mariana Alves", idade: 22, sexo: "F", gasto: 300.40 },
    { nome: "João Pereira", idade: 17, sexo: "M", gasto: 890.90 }
];

// 8. Usando forEach, encontre o maior gasto.

let maiorGasto = null;

clientes.forEach(item => {
    if(maiorGasto === null || maiorGasto<item.gasto){
        maiorGasto = item.gasto;
    }
});

console.log(maiorGasto);