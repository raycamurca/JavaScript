// Crie uma classe Biblioteca:
// • array livros
// • método adicionarLivro()
// • método listarLivros()

export class Biblioteca{
    livros = [];

    adicionarLivro(...livros){
        this.livros.push(...livros)
        return this.livros
    }

    listarLivros(){
        return this.livros
    }
}