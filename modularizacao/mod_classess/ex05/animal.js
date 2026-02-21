// Crie uma classe Animal com:
// • nome
// Método emitirSom() que retorna uma frase.

export class Animal {
    constructor(nome){
        this.nome = nome
    }

    emitirSom(){
        return `eu sou a ${this.nome} de 9 caudas`
    }
}