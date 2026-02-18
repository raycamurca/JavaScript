const cliente = {
    nome: "Kaper",
    idade: 29,
    endereco: {
        rua: "Rua dos bom",
        numero: "S/N",
        cidade: "Desconhecida"
    }
};

// 10.Use desestruturação para extrair nome e rua do objeto cliente.

const {nome, endereco: {rua}} = cliente;

console.log(rua);

