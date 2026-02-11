const clientes = [
    {nome: "ana", sexo: "F", idade: 25, patrimonio: 40000},
    {nome: "carlos", sexo: "M", idade: 49, patrimonio: 300000},
    {nome: "francisco", sexo: "M", idade: 70, patrimonio: 1000000},
    {nome: "joao", sexo: "M", idade: 15, patrimonio: 0},
    {nome: "roberto", sexo: "M", idade: 30, patrimonio: 2000},
    {nome: "grazi", sexo: "F", idade: 22, patrimonio: 5000},
    {nome: "gabriella", sexo: "F", idade: 19, patrimonio: 3000}
];

const select = clientes.filter((item)=>{
    return (item.idade>40)
}).map ((item)=>{
    return {
        nome: item.nome,
        idade: item.idade
    }
})

console.log(select);