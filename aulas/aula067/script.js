class CelularPadrao{
    constructor(armazenamento, ram){
        // Class abstratas
        if(this.constructor===CelularPadrao){
            throw new TypeError("Classe nao pode ser instânciada | Abstract");
        }
        this.armazenamento = armazenamento
        this.ram = ram
        this.estado = "desligado"
        this.ligado = null
        this.desligado = null
    }
    ligar(){
        if(this.estado == "desligado"){
            this.ligado = true;
            this.desligado = false;
            this.estado = "ligado";
        }
    }
    desligar(){
        if(this.estado == "ligado"){
            this.desligado = true;
            this.ligado = false;
            this.estado = "desligado";
        }
    }
}

class SamsungA32 extends CelularPadrao{
    constructor(armazenamento, ram){
        super(armazenamento, ram)
    }
}

const c1 = new SamsungA32(128, 4)
const c2 = new CelularPadrao(11, 12)

// c1.ligar()
// c1.desligar()

// console.log(c1);

console.log(c2);