const caixa = document.querySelector(".caixa");
let frutas = ["maça", "uva", "banana", ["escuro", "claro"]]
let cursos = ["HTML", "CSS", "JavaScript", frutas];

console.log(cursos[3][3][0]);

cursos.forEach((el, index) => {
  caixa.innerHTML += `${cursos[index]} <br>`;
});

cursos.push("TypeSript", "React"); // add o elemento entre "" na ultima posição.
cursos.pop(); // remover o ultimo elemento do array.
cursos.unshift("Lógica"); //  add o elemento entre "" na primeira posição.
cursos.shift(); // remover o primeiro elemento do array.