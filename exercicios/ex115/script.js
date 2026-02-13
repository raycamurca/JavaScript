const clientes = [
    { nome: "Ana Souza", idade: 28, sexo: "F", gasto: 450.75 },
    { nome: "Carlos Lima", idade: 16, sexo: "M", gasto: 620.00 },
    { nome: "Mariana Alves", idade: 22, sexo: "F", gasto: 300.40 },
    { nome: "João Pereira", idade: 17, sexo: "M", gasto: 890.90 }
];

// 9. Usando forEach, encontre o menorGasto gasto.

let menorGasto = null;

clientes.forEach(item => {
    if(menorGasto === null || menorGasto>item.gasto){
        menorGasto = item.gasto
    }
});

console.log(menorGasto);