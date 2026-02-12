const clientes = [
    { nome: "Ana Souza", idade: 28, sexo: "F", gasto: 450.75 },
    { nome: "Carlos Lima", idade: 35, sexo: "M", gasto: 620.00 },
    { nome: "Mariana Alves", idade: 22, sexo: "F", gasto: 300.40 },
    { nome: "João Pereira", idade: 41, sexo: "M", gasto: 890.90 }
];

//7. Use for para verificar se existe algum cliente Premium
//(gasto > 500).

let existePremium = false;

for(let i = 0; i<clientes.length; i++){
    if(clientes[i].gasto>500){
        existePremium = true;
        break
    }
}

console.log(existePremium);