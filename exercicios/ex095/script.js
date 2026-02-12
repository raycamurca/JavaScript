const clientes = [
    { nome: "Ana Souza", idade: 28, sexo: "F", gasto: 450.75 },
    { nome: "Carlos Lima", idade: 35, sexo: "M", gasto: 620.00 },
    { nome: "Mariana Alves", idade: 22, sexo: "F", gasto: 300.40 },
    { nome: "João Pereira", idade: 41, sexo: "M", gasto: 890.90 }
];

// 10.Use for...of para somar o gasto total.

let gastoTotal = 0;
for(v of clientes){
    gastoTotal+=v.gasto
} 

console.log(gastoTotal);

// const soma = clientes.reduce((acc, cliente)=>{
//     return acc + cliente.gasto
// }, 0)

// console.log(soma);