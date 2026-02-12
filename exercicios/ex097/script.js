const clientes = [
    { nome: "Ana Souza", idade: 28, sexo: "F", gasto: 450.75 },
    { nome: "Carlos Lima", idade: 35, sexo: "M", gasto: 620.00 },
    { nome: "Mariana Alves", idade: 22, sexo: "F", gasto: 300.40 },
    { nome: "João Pereira", idade: 41, sexo: "M", gasto: 890.90 }
];

// 12.Use for...of para criar um array de objetos contendo:
// • nome
// • faixaEtaria

let arrayObj = [];

for(v of clientes){
    if(v.idade>=30){
        arrayObj.push({nome: v.nome, faixaEtaria: "Adulto"})
    } else{
        arrayObj.push({nome: v.nome, faixaEtaria: "Jovem"})
    }
}

console.log(arrayObj);