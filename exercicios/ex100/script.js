const cliente = {
    nome: "Ana Souza",
    idade: 28,
    sexo: "F",
    gasto: 450.75
};

// 15.Use for...in para contar quantas propriedades o objeto possui.

let qtd = 0;

for(i in cliente){
    qtd++
}

console.log(qtd);