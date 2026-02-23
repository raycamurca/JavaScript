// Crie uma classe Playlist:
// • nome
// • array musicas
// • método tocar() (retorna a lista)

export class Playlist {
  constructor(nome) {
    this.nome = nome;
    this.musicas = [];
  }

  adicionar(...musica) {
    this.musicas.push(...musica);
    return this.musicas;
  }

  tocar() {
    return this.musicas;
  }
}
