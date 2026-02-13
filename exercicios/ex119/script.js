const clientes = [
    { nome: "Ana Souza", idade: 33, sexo: "F", gasto: 450.75 },
    { nome: "Carlos Lima", idade: 16, sexo: "M", gasto: 620.00 },
    { nome: "Mariana Alves", idade: 22, sexo: "F", gasto: 300.40 },
    { nome: "João Pereira", idade: 17, sexo: "M", gasto: 890.90 }
];

// 13.Use forEach para criar um relatório em texto com os dados dos clientes.

clientes.forEach((item, index) => {
    console.log(`=========================================================`);
    console.log(`Cliente 0${index+1}`);

    console.log(`Cliente ${item.nome}, do sexo ${item.sexo}, possui ${item.idade} anos de idade`)
    
    console.log(`e realizou um gasto no valor de ${item.gasto.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})})`);
});