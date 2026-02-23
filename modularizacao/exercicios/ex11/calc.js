// Crie uma classe Calculadora com métodos static:
// • somar()
// • subtrair()

export class Calculadora {
    static soma(...numeros){
        return numeros.reduce((soma, numero)=>{
            return soma + numero
        }, 0)
    }

    static subtrair(...numeros){
        return numeros.reduce((subtracao, numero)=>{
            return subtracao - numero
        })
    }
}