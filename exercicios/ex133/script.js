const cliente = [
    {nome: "Ana", idade: 17, sexo: "F", gasto: 1000},
    {nome: "Bia", idade: 30, sexo: "F", gasto: 7300},
    {nome: "Carla", idade: 77, sexo: "F", gasto: 73000}
];

// 13.Percorra o array e exiba apenas os clientes com gasto maior que 500.

const maior = cliente.filter((atual)=>{
    return atual.gasto > 500
})

console.log(maior);