const objs = [
  {
    nome: "Jezz",
    idade: 33,
    trabalhando: true,
    detalhes_profissao: {
      profissao: "Programador",
      empresa: "monte dos ventos",
    },
    hobbies: ["fut", "ver anime", "programar"],
  },
  {
    nome: "Marte",
    idade: 18,
    trabalhando: true,
    detalhes_profissao: {
      profissao: "Astronauta",
      empresa: "Space Black",
    },
    hobbies: ["estudar", "video games", "xadrez"],
  },
  {
    nome: "Mário",
    idade: 21,
    trabalhando: false,
    detalhes_profissao: {
      profissao: null,
      empresa: null,
    },
    hobbies: ["basquete", "ver séries", "pescar"],
  },
]

// Converter obj para json
const jsonDate = JSON.stringify(objs)

console.log(jsonDate)
console.log(typeof jsonDate)

// Converter json para obj
const objDate = JSON.parse(jsonDate)

console.log(objDate)
console.log(typeof objDate)