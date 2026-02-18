// 11.Crie uma função que receba um objeto cliente e adicione a propriedade status
// (Premium ou Comum).

const cliente = {
    nome: "Kaper",
    idade: 29,
    endereco: {
        rua: "Rua dos bom",
        numero: "S/N",
        cidade: "Desconhecida"
    },
    gasto: 770,
    clienteStatus(){
        this.status = this.gasto>=500 ? "Premium" : "Comum";
    }
};

cliente.clienteStatus();

console.log(cliente);