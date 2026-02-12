const clientes = [
    { nome: "Ana Souza", idade: 28, sexo: "F", gasto: 450.75 },
    { nome: "Carlos Lima", idade: 35, sexo: "M", gasto: 620.00 },
    { nome: "Mariana Alves", idade: 22, sexo: "F", gasto: 300.40 },
    { nome: "João Pereira", idade: 41, sexo: "M", gasto: 890.90 }
];

// 9. Use for...of para criar um array apenas com as idades.

let arrayIdades = [];

for(v of clientes){
    arrayIdades.push(v.idade);
};

console.log(arrayIdades);