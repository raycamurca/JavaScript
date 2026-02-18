// 9. Crie um objeto cliente que possua:
// • nome
// • idade
// • endereço (objeto com rua e cidade).

const cliente = {
    nome: "Kaper",
    idade: 29,
    endereco: {
        rua: "Rua dos bom",
        numero: "S/N",
        cidade: "Desconhecida"
    }
}

console.log(cliente.endereco.rua);