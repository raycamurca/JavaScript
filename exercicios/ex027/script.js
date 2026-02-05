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

const novoArray = clientes.map ((cliente)=>{
    // separa o nome onde tem espaço em branco e criar o array, ex: ["Ana", "Souza"].
    let separa = cliente.nome.split(" "); 
    // pega a primeira letra de cada elemento do array, ex: (A)na (S)ouza = AS.
    let primeiraLetra = separa.map(p=>p[0]); 
    // junta todas as primeiras letras = AS.
    let respJuntar = primeiraLetra.join("")
    return {
        id: respJuntar,
        cliente: cliente.nome,
    }
})

console.log(novoArray);