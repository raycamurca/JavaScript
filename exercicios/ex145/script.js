// 5. Crie um objeto carro com:
// • marca
// • modelo
// • ano
// Crie um método que exiba uma frase com essas informações.

const carro = {
    marca: "Ferrari", 
    modelo: "F7", 
    ano: 2050,
    info(){
        return `marca: ${this.marca} | modelo: ${this.modelo} | ano: ${this.ano}`;
    }
}

console.log(carro.info());