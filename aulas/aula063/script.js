const pessoa = {
    nome: "ROC",
    idade: 777,
    curso: "JavaScript",
    aulas: {
        aula01: "logica",
        aula02: "dados",
        aula03: "variaveis"
    },
    requisitos: [
        "html", "css"
    ]
}

const objToJson = JSON.stringify(pessoa); //json

const jsonToObj = JSON.parse(objToJson); //obj

console.log(jsonToObj);