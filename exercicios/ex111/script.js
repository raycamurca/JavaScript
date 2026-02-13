const clientes = [
    { nome: "Ana Souza", idade: 28, sexo: "F", gasto: 450.75 },
    { nome: "Carlos Lima", idade: 16, sexo: "M", gasto: 620.00 },
    { nome: "Mariana Alves", idade: 22, sexo: "F", gasto: 300.40 },
    { nome: "João Pereira", idade: 17, sexo: "M", gasto: 890.90 }
];

// 5. Crie um array vazio e use forEach para adicionar objetos com nome e idade.

let array = []

clientes.forEach(item => {
    array.push({
        nome: item.nome, 
        idade: item.idade
    })
});
console.log(array);