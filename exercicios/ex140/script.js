const cliente = {
    nome: "ana",
    idade: 27,
    sexo: "F",
    endereco: {
        rua: "Monte dos magos",
        numero: 777,
        cidade: "cidade Z"
    }
};

// 20.Use desestruturação para extrair propriedades de um objeto.

const {endereco: {rua, numero, cidade}} = cliente;

console.log(`rua: ${rua} | numero: ${numero} | cidade: ${cidade}`);