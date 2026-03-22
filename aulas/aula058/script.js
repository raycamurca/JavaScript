const Pessoa = {
    nome: "ROC",
    Idade: 777,
    getIdade() {
        return this.Idade;
    },
    setNome(pnome) {
        this.nome = pnome;
        return `nome alterado com sucesso!!`;
    }
}

// Formas de accesar propriedades

console.log(Pessoa["nome"]);
console.log(Pessoa.nome);
console.log(Pessoa.getIdade());
console.log(Pessoa.setNome("Bico Vivo"));
console.log(Pessoa.nome);