const clientes = [
    { nome: "Ana Souza", idade: 28, sexo: "F", gasto: 450.75 },
    { nome: "Carlos Lima", idade: 16, sexo: "M", gasto: 620.00 },
    { nome: "Mariana Alves", idade: 22, sexo: "F", gasto: 300.40 },
    { nome: "João Pereira", idade: 17, sexo: "M", gasto: 890.90 }
];

// 10.Use forEach para contar quantos clientes são do sexo feminino.

let qtdFem = 0;

clientes.forEach(item => {
    if(item.sexo==="F"){
        qtdFem++
    }
});

console.log(qtdFem);