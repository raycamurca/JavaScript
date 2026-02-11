const clientes = [
    { nome: "Ana Souza", idade: 38, sexo: "F", gastoMedioMensal: 450.75 },
    { nome: "Carlos Lima", idade: 35, sexo: "M", gastoMedioMensal: 620.00 },
    { nome: "Mariana Alves", idade: 22, sexo: "F", gastoMedioMensal: 300.40 },
    { nome: "João Pereira", idade: 41, sexo: "M", gastoMedioMensal: 890.90 }
];

// 11.Filtre os clientes Adultos e calcule a média de idade deles.

const adultosMedia = clientes.filter((cliente)=>{
    return cliente.idade>=30
}).reduce((acc, cliente)=>{
    acc.somaidade+=cliente.idade
    acc.qtd++
    return acc
}, {somaidade: 0, qtd: 0});

let media = adultosMedia.somaidade/adultosMedia.qtd
let msg = `a media de idade dos adultos é: ${media}`
console.log(msg);