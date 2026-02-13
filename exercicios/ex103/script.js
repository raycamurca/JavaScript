const cliente = {
    nome: "Ana Souza",
    idade: 28,
    sexo: "F",
    gasto: 450.75
};

// 18.Percorra um objeto cliente e exiba somente os valores
// (use for...in).

for(i in cliente){
    console.log(cliente[i]);
}