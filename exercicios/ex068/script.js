const clientes = [
    { nome: "Ana Souza", idade: 28, sexo: "F", gastoMedioMensal: 450.75 },
    { nome: "Carlos Lima", idade: 35, sexo: "M", gastoMedioMensal: 620.00 },
    { nome: "Mariana Alves", idade: 22, sexo: "F", gastoMedioMensal: 300.40 },
    { nome: "João Pereira", idade: 41, sexo: "M", gastoMedioMensal: 890.90 }
];

// 2. Filtre os clientes do sexo feminino e calcule a média de gasto mensal.

const femMedia = clientes.reduce((acc, cliente)=>{
    if(cliente.sexo=="F"){
        acc.soma+=cliente.gastoMedioMensal
        acc.qtd++
    }
    return acc
}, {soma: 0, qtd: 0})

let media = femMedia.soma/femMedia.qtd
let msg = `A média de gasto feminino é: ${media.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`
console.log(msg);