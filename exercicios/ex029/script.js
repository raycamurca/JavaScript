// retornar a soma de um array de números

// oque eu tenho?
const numeros = [4, 3, 3, 5, 7];

// oque eu espero? 22

const total = numeros.reduce ((acumulador, numeroAtual)=>{
    return acumulador + numeroAtual
}, 0) // numero que o acumulador começa; caso não declare o acumulador pega o valor do indice[0] e o valor atual pega o indice[1]

console.log(total);