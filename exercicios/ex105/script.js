const clientes = [
    { nome: "Ana Souza", idade: 28, sexo: "F", gasto: 450.75 },
    { nome: "Carlos Lima", idade: 35, sexo: "M", gasto: 620.00 },
    { nome: "Mariana Alves", idade: 22, sexo: "F", gasto: 300.40 },
    { nome: "João Pereira", idade: 41, sexo: "M", gasto: 890.90 }
];

// 20.Percorra clientes e encontre o cliente com maior gasto
// (escolha o for que achar melhor).

let maiorGasto = clientes[0];

for(v of clientes){
    if(maiorGasto.gasto < v.gasto){
        maiorGasto = v;
    }
}

console.log(maiorGasto);