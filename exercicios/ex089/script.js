const clientes = [
    { nome: "Ana Souza", idade: 28, sexo: "F", gasto: 450.75 },
    { nome: "Carlos Lima", idade: 35, sexo: "M", gasto: 620.00 },
    { nome: "Mariana Alves", idade: 22, sexo: "F", gasto: 300.40 },
    { nome: "João Pereira", idade: 41, sexo: "M", gasto: 890.90 }
];

// 4. Use for para criar um novo array apenas com os nomes.

let novoArray = []

for(let i = 0; i<clientes.length; i++){
    novoArray.push(clientes[i].nome)
}

console.log(novoArray);

// const novoArray = clientes.map((cliente)=>{
//     return cliente.nome
// })