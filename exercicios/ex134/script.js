const cliente = {nome: "Ana", idade: 17, sexo: "F", gasto: 1000};
    
// 14.Crie uma função que receba um objeto cliente e:
// • adicione a propriedade status (Premium ou Comum).

const statusCliente = (cliente)=>{
    if(cliente.gasto>5000){
        cliente.status = "Premium"
    } else {
        cliente.status = "Comum"
    }
}
statusCliente(cliente)

console.log(cliente);





