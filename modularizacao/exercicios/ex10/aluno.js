// Crie uma classe Turma:
// • nome
// • array alunos
// • método totalAlunos()

export class Turma{
    constructor(nome){
        this.nome = nome
        this.alunos = [];
    }

    adicionarAluno(...aluno){
        this.alunos.push(...aluno)
        return this.alunos
    }

    totalAlunos(){
        return this.alunos.length
    }
}