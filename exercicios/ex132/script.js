const cliente = [
    {nome: "Ana", idade: 17, sexo: "F", gasto: 1000},
    {nome: "Bia", idade: 30, sexo: "F", gasto: 7300},
    {nome: "Carla", idade: 77, sexo: "F", gasto: 73000}
];

// 12.Percorra o array e exiba o nome de cada cliente.

for(let v of cliente){
    console.log(`${v.nome}`);
}