// Crie uma classe Time:
// • nome do time
// • array jogadores
// • método adicionarJogador()

export class Time {
  constructor(nomeTime) {
    this.nome = nomeTime;
    this.jogadores = [];
  }

  adicionarJogador(...jogador) {
    this.jogadores.push(...jogador);
    return this.jogadores;
  }
}