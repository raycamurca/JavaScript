class Npc {
    static alerta = false
    constructor(penergia){
        this.energia = penergia
    }
    getInfo(){
        console.log(`Energia: ${this.energia} | Alerta: ${Npc.alerta?"sim":"não"}`);
    }

    static alertar(){ // pertence a class
        Npc.alerta = true
    }
}

const npc1 = new Npc(70);
const npc2 = new Npc(90);
const npc3 = new Npc(20);

Npc.alertar(); // pertence a class - Mudar geral

npc1.getInfo();
npc2.getInfo();
npc3.getInfo();