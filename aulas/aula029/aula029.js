function aluno(nome,nota){
    this.nome=nome
    this.nota=nota
    console.log(nome)
    console.log(nota)

    this.dados= ()=>{
        setTimeout(()=>{
            console.log(this.nome)
            console.log(this.nota)
        }, 2000);
    }
}

const al1= new aluno("reginaldo", 100)
al1.dados()