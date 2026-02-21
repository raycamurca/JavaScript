// Crie uma classe Aluno com:
// • nome
// • nota
// Crie um método aprovado() que retorna true se nota ≥ 7.

export class Aluno {
    constructor(nome, nota){
        this.nome = nome,
        this.nota = nota
    }

    aprovado(){
        return this.nota>=7;
    }
}