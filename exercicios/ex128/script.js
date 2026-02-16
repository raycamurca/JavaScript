const cliente = {
    nome: "Jesse", 
    idade: 17, 
    sexo: "M", 
    gasto: 3000,
    gastoAnual(){
        return this.gasto * 12;
    }
};

// 7. Crie um método que retorne o gasto anual do cliente

console.log(cliente.gastoAnual());