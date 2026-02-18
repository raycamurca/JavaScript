// 15.Crie um objeto que possua outro objeto e um método que use this para acessar dados dos dois níveis.

const cliente = {
    nome: "Kaper",
    idade: 29,
    endereco: {
        rua: "Rua dos bom",
        numero: "S/N",
        cidade: "Desconhecida"
    },
    acessar(){
        return `o cliente ${this.nome} mora na ${this.endereco.rua}, ${this.endereco.numero}`
    }
};

console.log(cliente.acessar());