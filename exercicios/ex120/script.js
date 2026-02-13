const clientes = [
    { nome: "Ana Souza", idade: 33, sexo: "F", gasto: 450.75 },
    { nome: "Carlos Lima", idade: 16, sexo: "M", gasto: 620.00 },
    { nome: "Mariana Alves", idade: 22, sexo: "F", gasto: 300.40 },
    { nome: "João Pereira", idade: 17, sexo: "M", gasto: 890.90 }
];

// 14.Use forEach para verificar se existe algum cliente Premium
// (gasto > 500).

let qtdPremium = 0;

clientes.forEach(item => {
    if(item.gasto > 500){
        qtdPremium++
    }
});

let msg = `Quantidade de clientes Premium: ${qtdPremium}`

console.log(msg);