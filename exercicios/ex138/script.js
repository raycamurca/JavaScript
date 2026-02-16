// 18.Crie um objeto que armazene notas de um aluno e tenha um método que calcule a média.

const notas = {
    aluno: "Mário", 
    valores: [7, 8, 6],
    media(){
        return this.valores.reduce((acc, nota)=>{
            return acc + nota
        }, 0) / this.valores.length
    }
}

console.log(notas.media());