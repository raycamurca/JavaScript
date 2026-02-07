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

//10.Crie um objeto que mostre o total gasto por sexo.
//{ M: valor, F: valor }

const totGastoSexo = clientes.reduce ((acc, atual)=>{
    if(atual.sexo=="M"){
        acc.masculino += atual.gastoMedioMensal
    } else {
        acc.feminino += atual.gastoMedioMensal
    }
    return acc
}, {masculino: 0, feminino: 0})

let msg = `Masculino: ${totGastoSexo.masculino.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} | Feminino: ${totGastoSexo.feminino.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`

console.log(`Total gasto por sexo | ${msg}`);