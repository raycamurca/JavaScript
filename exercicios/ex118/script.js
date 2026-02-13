const clientes = [
    { nome: "Ana Souza", idade: 33, sexo: "F", gasto: 450.75 },
    { nome: "Carlos Lima", idade: 16, sexo: "M", gasto: 620.00 },
    { nome: "Mariana Alves", idade: 22, sexo: "F", gasto: 300.40 },
    { nome: "João Pereira", idade: 17, sexo: "M", gasto: 890.90 }
];

// 12.Use forEach para separar clientes Jovens e Adultos em dois arrays diferentes.
// jovem: 29 anos pra baixo | adulto: 30 anos pra cima

let jovem = [];
let adulto = [];

clientes.forEach(item => {
    if(item.idade>=30){
        adulto.push({
            ...item
        })
    } else{
        jovem.push({
            ...item
        })
    }
});

console.log(`==ADULTOS==`);
console.log(adulto);

console.log(`==JOVENS==`);
console.log(jovem);