// Crie uma classe Pedido:
// • array itens
// • adicionarItem()
// • calcularTotal()

export class Pedido {
  itens = [];

  adicionarItem(item, valor) {
    this.itens.push({
      nome: item,
      preco: valor,
    });
    return this.itens;
  }

  calcularTotal() {
    return this.itens.reduce((total, valor) => {
      return total + valor.preco;
    }, 0);
  }
}