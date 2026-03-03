const cursosDisponiveis = document.querySelector(".cursos-disponiveis");
const btTransferir = document.querySelector(".bt-transferir");
const cursosSelecionados = document.querySelector(".cursos-selecionados");
const todosCursos = [...document.querySelectorAll(".curso")];

todosCursos.map(el => {
  el.addEventListener("click", evt => {
    const curso = evt.target;
    curso.classList.toggle("selecionado");
  });
});

btTransferir.addEventListener("click", () => {
  const selecionados = [...document.querySelectorAll(".selecionado")];
  const naoSelecionados = [
    ...document.querySelectorAll(".curso:not(.selecionado)"),
  ];
  selecionados.map(el => {
    cursosSelecionados.appendChild(el);
  });
  naoSelecionados.map(el => {
    cursosDisponiveis.appendChild(el);
  });
});