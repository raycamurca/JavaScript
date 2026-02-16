const cliente = {
    nome: "Jesse", 
    idade: 17, 
    sexo: "M", 
    gasto: 3000,
    frase(){
        let msg = `${this.nome} tem ${this.idade} anos`
        return msg
    }
};

// 6. Crie um método no objeto que exiba uma frase no formato:
// "Nome tem X anos".

console.log(cliente.frase());