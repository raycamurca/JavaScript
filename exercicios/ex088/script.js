const clientes = [
    { nome: "Ana Souza", idade: 28, sexo: "F", gasto: 450.75 },
    { nome: "Carlos Lima", idade: 35, sexo: "M", gasto: 620.00 },
    { nome: "Mariana Alves", idade: 22, sexo: "F", gasto: 300.40 },
    { nome: "João Pereira", idade: 41, sexo: "M", gasto: 890.90 }
];

// 3. Use for para calcular a média de idade dos clientes.

let somaIdade = 0;
let qtdClientes = 0;

for(let i = 0; i<clientes.length; i++){
    somaIdade+=clientes[i].idade
    qtdClientes++
}

let media = somaIdade/qtdClientes
console.log(`a media de idade é: ${media}`);