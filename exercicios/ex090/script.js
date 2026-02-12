const clientes = [
    { nome: "Ana Souza", idade: 28, sexo: "F", gasto: 450.75 },
    { nome: "Carlos Lima", idade: 35, sexo: "M", gasto: 620.00 },
    { nome: "Mariana Alves", idade: 22, sexo: "F", gasto: 300.40 },
    { nome: "João Pereira", idade: 41, sexo: "M", gasto: 890.90 }
];

// 5. Use for para encontrar o maior gasto.

let maiorGasto = null;

for(let i = 0; i<clientes.length; i++){
    if(maiorGasto===null || maiorGasto < clientes[i].gasto){
        maiorGasto = clientes[i].gasto
    }
}

console.log(maiorGasto);