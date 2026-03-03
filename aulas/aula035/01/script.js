const cursoDisponiveis = document.querySelector(".cursos-disponiveis");
const btTransferir = document.querySelector(".bt-transferir");
const cursosSelecionados = document.querySelector(".cursos-selecionados");
const todosCursos = [...document.querySelectorAll(".curso")];

todosCursos.map(el => {
  el.addEventListener("click", evt => {
    const curso = evt.target;
    if (curso.classList.contains("selecionado")) {
      curso.classList.remove("selecionado");
      curso.classList.add("disponivel");
    } else {
      curso.classList.remove("disponivel");
      curso.classList.add("selecionado");
    }
  });
});

btTransferir.addEventListener("click", () => {
  const selecionados = [...document.querySelectorAll(".selecionado")];
  selecionados.map(el => {
    cursosSelecionados.appendChild(el);
  });
});

btTransferir.addEventListener("click", () => {
  const disponiveis = [...document.querySelectorAll(".disponivel")];
  disponiveis.map(el => {
    cursoDisponiveis.appendChild(el);
  });
});
