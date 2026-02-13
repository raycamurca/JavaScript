const cliente = {
    nome: "Ana Souza",
    idade: 28,
    sexo: "F",
    gasto: 450.75
};

// 14.Use for...in para listar todas as chaves e valores.

for(i in cliente){
    console.log(`${i}: ${cliente[i]}`);
}