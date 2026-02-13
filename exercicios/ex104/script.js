const clientes = [
    { nome: "Ana Souza", idade: 28, sexo: "F", gasto: 450.75 },
    { nome: "Carlos Lima", idade: 35, sexo: "M", gasto: 620.00 },
    { nome: "Mariana Alves", idade: 22, sexo: "F", gasto: 300.40 },
    { nome: "João Pereira", idade: 41, sexo: "M", gasto: 890.90 }
];

// 19.Percorra clientes e crie um relatório com:
// • nome
// • gasto

for(v of clientes){
    console.log(`nome: ${v.nome} | Gasto: ${v.gasto}`);
}