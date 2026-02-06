const clientes = [
  {
    nome: "Ana Souza",
    idade: 28,
    sexo: "F",
    gastoMedioMensal: 450.75
  },
  {
    nome: "Carlos Lima",
    idade: 35,
    sexo: "M",
    gastoMedioMensal: 620.00
  },
  {
    nome: "Mariana Alves",
    idade: 22,
    sexo: "F",
    gastoMedioMensal: 300.40
  },
  {
    nome: "João Pereira",
    idade: 41,
    sexo: "M",
    gastoMedioMensal: 890.90
  }
];

const novoArray = clientes.map((cliente, pos)=>{
    let sex = cliente.sexo == "M" ? "Masculino" : "Feminino"
    return {
        id: pos+1,
        nome: cliente.nome,
        idade: cliente.idade,
        sexo: sex,
        gastoMedioMensal: cliente.gastoMedioMensal.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
    }
})
console.log(novoArray);