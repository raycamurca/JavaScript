// 8. Crie um objeto aluno com:
// • nome
// • array de notas
// Crie um método que calcule a média.

const aluno = {
    nome: "Gohan",
    notas: [7, 8, 9],
    media(){
        return this.notas.reduce((acc, nota)=>{
            return acc + nota;
        },0)/this.notas.length;
    }
};

let resultado = aluno.media()>=6 ? "Aprovado" : "Recuperação";
let msg = `a media do aluno(a) ${aluno.nome} foi ${aluno.media()} pontos! ${resultado}!`;
console.log(msg);