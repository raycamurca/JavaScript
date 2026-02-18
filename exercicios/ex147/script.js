// 7. Crie um objeto contador com:
// • propriedade valor
// • métodos incrementar e decrementar.

const cont = {
    valor: 0,
    incrementar(valor){
        this.valor+=valor
    },
    decrementar(valor){
        this.valor-=this.valor
    }
}

cont.incrementar(5);
console.log(cont.valor);