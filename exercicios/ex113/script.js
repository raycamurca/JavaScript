const clientes = [
    { nome: "Ana Souza", idade: 28, sexo: "F", gasto: 450.75 },
    { nome: "Carlos Lima", idade: 16, sexo: "M", gasto: 620.00 },
    { nome: "Mariana Alves", idade: 22, sexo: "F", gasto: 300.40 },
    { nome: "João Pereira", idade: 17, sexo: "M", gasto: 890.90 }
];

// 7. Usando forEach, calcule a média de idade dos clientes.

let idadeSoma = 0;
let qtd = 0;

clientes.forEach(item => {
    idadeSoma += item.idade
    qtd++
});

let media = idadeSoma / qtd;

console.log(media);