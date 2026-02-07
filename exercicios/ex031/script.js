//contador de nomes por iniciais
const nomes = ["Daniel", "Maria", "Marta", "Juca", "João", "Jéssica"]

const nomesContador = nomes.reduce((nomes, nomeAtual)=>{
    const primeiraLetra = nomeAtual[0]
    if(nomes[primeiraLetra]){
        nomes[primeiraLetra]++
    } else {
        nomes[primeiraLetra] = 1;
    }

    return nomes
}, {})

console.log(nomesContador);
