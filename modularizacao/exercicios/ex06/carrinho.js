// Crie uma classe Carrinho:
// • array produtos
// • método adicionar()• método remover()

export class Carrinho {
    produtos = [];

    adicionar(...produto){
        this.produtos.push(...produto)
        return this.produtos
    }

    remover(...produtoRemover){
        this.produtos = this.produtos.filter((produto)=>{
            return !produtoRemover.includes(produto);
        })
        return this.produtos
    }
}