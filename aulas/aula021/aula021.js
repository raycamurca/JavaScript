function teste() {
    let n1= 10
    let n2 = 2
    let resp = n1/n2

    if (resp%2 == 0) {
        return "PAR"
    } else {
        return "IMPAR"
    }
}

let resposta = teste()

console.log (resposta) //variável "resposta" recebeu o return da função teste.
console.log (teste()) //mostra o return da função teste




