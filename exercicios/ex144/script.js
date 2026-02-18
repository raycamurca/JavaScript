const pessoa = {nome: "Maria", idade: 33};

// 4. Use for...in para listar todas as propriedades e valores do objeto pessoa.

for(i in pessoa){
    console.log(`${i}: ${pessoa[i]}`);
}