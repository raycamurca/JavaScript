// Crie uma classe Pessoa com:
// • nome
// • idade
// Crie método maiorDeIdade().

export class Pessoa{
    constructor(nome, idade){
        this.nome = nome,
        this.idade = idade
    }
    maiorDeIdade(){
        if(this.idade>=18){
            return `${this.nome} tem ${this.idade} anos | Maior de idade`
        }else{
            return `${this.nome} tem ${this.idade} anos | Menor de idade`
        }
    }
};