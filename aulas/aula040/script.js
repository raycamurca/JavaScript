const cursosDisponiveis = document.querySelector(".cursos-disponiveis");
const todosCursos = [...document.querySelectorAll(".curso")];
const divBt = document.querySelector(".btdelete");

const bt = document.createElement("i");
bt.setAttribute("class", "fa-solid fa-trash-can");
divBt.appendChild(bt);

todosCursos.map(el => {
  el.addEventListener("click", () => {
    el.classList.toggle("selecionado");
  });
});

bt.addEventListener("click", () => {
  const selecionados = document.querySelectorAll(".selecionado");

  selecionados.forEach(el => {
    cursosDisponiveis.removeChild(el);
  });
});
