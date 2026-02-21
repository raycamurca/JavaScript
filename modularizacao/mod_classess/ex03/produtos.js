// Crie uma classe Produto com:
// • nome
// • preco
// Crie método desconto(porcentagem).

export class Produto {
    constructor(nome, preco){
        this.nome = nome,
        this.preco = preco
    }

    desconto(porcentagem){
        return `Preço com desconto: ${this.preco - (this.preco * (porcentagem/100))}`;
    }
};