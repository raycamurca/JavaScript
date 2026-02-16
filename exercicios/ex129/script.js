const cliente = {
    nome: "Jesse", 
    idade: 17, 
    sexo: "M", 
    gasto: 3000,
    usarThis(){
        let msg = `relatório 
        nome: ${this.nome} | idade: ${this.idade} | sexo: ${this.sexo} | gasto: ${this.gasto}`
        return msg
    }
};

// 8. Crie um método que use this para acessar as propriedades do objeto.

console.log(cliente.usarThis());
