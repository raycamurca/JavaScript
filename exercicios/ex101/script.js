const cliente = {
    nome: "Ana Souza",
    idade: 28,
    sexo: "F",
    gasto: 450.75
};

// 16.Use for...in para verificar se existe a propriedade email.

let existe = false;

for (i in cliente){
    if(i==="email"){
        existe = true;
        break
    }
}

console.log(existe);

