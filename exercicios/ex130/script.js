const cliente = {nome: "Jesse", idade: 17, sexo: "M", gasto: 3000};

// 9. Use for...in para listar todas as propriedades do objeto.

for (i in cliente){
    console.log(`${i}: ${cliente[i]}`);
}