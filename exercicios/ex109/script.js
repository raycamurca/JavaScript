const clientes = [
    { nome: "Ana Souza", idade: 28, sexo: "F", gasto: 450.75 },
    { nome: "Carlos Lima", idade: 16, sexo: "M", gasto: 620.00 },
    { nome: "Mariana Alves", idade: 22, sexo: "F", gasto: 300.40 },
    { nome: "João Pereira", idade: 17, sexo: "M", gasto: 890.90 }
];

// 3. Crie um array vazio e use forEach para adicionar apenas os nomes dos clientes.

let arrayNome = [];

clientes.forEach((item) => {
    arrayNome.push(item.nome)
});

console.log(arrayNome);