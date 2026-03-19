class Personagem {
    constructor(pnome, psexo){
        this.nome = pnome;
        if(psexo=="M"){
            this.sexo = "Masculino"
        }else if(psexo=="F"){
            this.sexo = "Feminino"
        }else{
            this.sexo = "Inválido"
        }
    }

    //PEGAR ELEMENTO
    getNome(){
        return this.nome
    }

    getSexo(){
        return this.sexo
    }

    // INFO GERAL

    getInfo(){
        return [this.nome, this.sexo]
    }

    info(){
        console.log(`Nome: ${this.nome} | Sexo: ${this.sexo}`);
    }

    //ALTERAR ELEMENTO

    setNome(pnome){
        this.nome = pnome;
    }

    setSexo(psexo){
    if(psexo=="M"){
        this.sexo = "Masculino"
    }else if(psexo=="F"){
        this.sexo = "Feminino"
    }else{
        this.sexo = "Inválido"
    }
}
}

let p1 = new Personagem("goku", "M")
let p2 = new Personagem("Bulma", "F")
let p3 = new Personagem("Vegeta", "M")

p1.setNome("Kakaroto")
p1.setSexo("M")

p1.info()