const clientes = [
    { nome: "Ana Souza", idade: 28, sexo: "F", gasto: 450.75 },
    { nome: "Carlos Lima", idade: 16, sexo: "M", gasto: 620.00 },
    { nome: "Mariana Alves", idade: 22, sexo: "F", gasto: 300.40 },
    { nome: "João Pereira", idade: 17, sexo: "M", gasto: 890.90 }
];

console.log(`|Clientes menores de idade|`);

clientes.forEach((item, pos) => {
    if(item.idade<18){
        console.log(`nome: ${item.nome} | idade: ${item.idade}`);
    }
});