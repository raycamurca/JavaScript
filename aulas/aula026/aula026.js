function caixaEletronico(saldo) {
    function sacar(valor) {
        return saldo - valor;
    }

    return sacar(100);
}

console.log(caixaEletronico(500));







/*
const soma= (...valores) => {
    const somar= (val) =>{
        let resp = 0;
        for (let i of val) {
            resp+=i
        }
        return resp
    }
    return somar(valores)
}

console.log(soma(25,50,25))
*/