const cliente = {nome: "Ana", idade: 17, sexo: "F", gasto: 1000};

// 15.Crie uma função que receba um objeto e retorne apenas:
// • nome
// • idade

const funNameAge = (cliente)=>{
    return {
        nome: cliente.nome,
        idade: cliente.idade
    }
}

console.log(funNameAge(cliente));