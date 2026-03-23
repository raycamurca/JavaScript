class Carro { // classe pai/base
    constructor(pnome, pportas){
        this.nome = pnome
        this.portas = pportas
        this.ligado = false
        this.vel = 0
        this.cor = undefined
    }

    ligar(){
        this.ligado = true
    }

    desligar(){
        this.ligado = false
    }

    setCor(pcor){
        this.cor = pcor
    }
}

const c1 = new Carro("normal", 4);
c1.ligar()
c1.setCor("black")

console.log(`Nome: ${c1.nome}`);
console.log(`Portas: ${c1.portas}`);
console.log(`Ligado: ${(c1.ligado ? "Sim" : "Não")}`);
console.log(`Velocidade: ${c1.vel}`);
console.log(`Cor: ${c1.cor}`);
console.log("-----------------------------------");

class Militar extends Carro { // classe filho
    constructor(pnome, pportas, pblidagem, pmunicao){
        super(pnome, pportas)
        this.blidagem = pblidagem
        this.municao = pmunicao
        this.setCor("verde")
    }

    atirar(){
        if(this.municao>0){
            this.municao--
        }
    }
}

const c2 = new Militar("lutador", 8, 100, 7)

c2.atirar()
c2.atirar()
c2.atirar()
c2.atirar()

console.log(`Nome: ${c2.nome}`);
console.log(`Portas: ${c2.portas}`);
console.log(`Blidagem: ${c2.blidagem}`);
console.log(`Munição: ${c2.municao}`);
console.log(`Ligado: ${(c2.ligado ? "Sim" : "Não")}`);
console.log(`Velocidade: ${c2.vel}`);
console.log(`Cor: ${c2.cor}`);