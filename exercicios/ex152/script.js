// 12.Crie uma função que receba um objeto e retorne apenas nome e idade.

const cliente = {
    nome: "Kaper",
    idade: 29,
    endereco: {
        rua: "Rua dos bom",
        numero: "S/N",
        cidade: "Desconhecida"
    }
}

const nameAge = (obj)=>{
    return {
        nome: obj.nome,
        idade: obj.idade
    }
}
console.log(nameAge(cliente));

