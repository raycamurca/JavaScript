const cliente = {nome: "Jesse", idade: 17, sexo: "M", gasto: 3000};

// 10.Use for...in para listar todas as chaves e valores.

for(let i in cliente){
    console.log(`${i}: ${cliente[i]}`);
}