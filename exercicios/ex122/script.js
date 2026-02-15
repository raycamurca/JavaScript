// Objetos

const carro = {
    marca: "ford",
    modelo: "Ka",
    ano: 2015,
    placa: "ABC-1234",
    completo(){
        return `marca: ${this.marca} | modelo: ${this.modelo}`
    }
};

console.log(carro.completo());