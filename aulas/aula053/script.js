const caixa = document.querySelector(".conteiner p");

let setCollection = new Set(["Dragon Ball", "Death Note", "Fullmetal"]);

setCollection.add("One Piece");

setCollection.add("Dragon Ball") // NAO ACEITA DUPLICADOS.

setCollection.delete("One Piece") // deletar

setCollection.clear() // limpar tudo

setCollection.forEach((el, index) => {
    caixa.innerHTML += `<br> ${el}`
});