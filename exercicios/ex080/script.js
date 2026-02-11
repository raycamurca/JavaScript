const clientes = [
    { nome: "Ana Souza", idade: 38, sexo: "F", gastoMedioMensal: 450.75 },
    { nome: "Marlos Souza", idade: 25, sexo: "M", gastoMedioMensal: 620.00 },
    { nome: "Mariana Alves", idade: 22, sexo: "F", gastoMedioMensal: 300.40 },
    { nome: "João Pereira", idade: 41, sexo: "M", gastoMedioMensal: 890.90 }
];

// 14.Filtre os clientes que gastam mais que a média geral e gere um array apenas com os nomes.

const mediaGeral = clientes.reduce((acc, cliente)=>{
    acc.soma+=cliente.gastoMedioMensal
    acc.qtd++
    return acc
}, {soma: 0, qtd: 0})

let media = mediaGeral.soma / mediaGeral.qtd

const clienteMaiorMedia = clientes.filter((cliente)=>{
    return cliente.gastoMedioMensal > media
}).reduce((acc, cliente)=>{
    acc.push(cliente.nome)
    return acc
}, [])

console.log(clienteMaiorMedia);