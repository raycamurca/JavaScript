// 17.Crie um objeto contador com:
// • uma propriedade valor
// • métodos incrementar e decrementar.

const contador = {
    valor: 100,
    incrementar(numero){
        return this.valor += numero;
    },
    decrementar(numero){
        return this.valor -= numero;
    }
};

console.log(contador.incrementar(10));
console.log(contador.decrementar(10));