export class Animes {
  static animes = [
    "Dragon ball",
    "Naruto",
    "One piece",
    "Jojo",
    "Death note",
    "Fullmetal alchemist",
    "Hunter x Hunter",
  ];

  static animeSelect(i_anime) {
    return this.animes[i_anime];
  }

  static addAnime(...novoAnime) {
    this.animes.push(...novoAnime);
    return this.animes;
  }

  static removerAnime(...animeRemover) {
    this.animes = this.animes.filter(anime => {
      return !animeRemover.includes(anime);
    });
    return this.animes;
  }
}