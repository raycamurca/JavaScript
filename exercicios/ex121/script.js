const clientes = [
    { nome: "Ana Souza", idade: 33, sexo: "F", gasto: 450.75 },
    { nome: "Carlos Lima", idade: 16, sexo: "M", gasto: 620.00 },
    { nome: "Mariana Alves", idade: 22, sexo: "F", gasto: 300.40 },
    { nome: "João Pereira", idade: 17, sexo: "M", gasto: 890.90 }
];

// 15.Use forEach para criar um objeto final contendo:
// • total de clientes
// • gasto total
// • média de gasto

let totClientes = 0;
let gastoTot = 0;

clientes.forEach(item => {
    totClientes++
    gastoTot += item.gasto
});

let mediaGasto = gastoTot / totClientes;

let obj = {
    total_clientes: totClientes,
    gasto_total: gastoTot.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }),
    media_de_gasto: mediaGasto.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
};

console.log(obj);