const btAdd = document.querySelector(".add-curso");

const btRemover = document.querySelector(".remover-curso");

const btSelecionado = document.querySelector(".select-curso");

const sectionCursos = document.querySelector(".cursos");

const todosCursos = [...document.querySelectorAll(".curso")];

// ADD CLASSE SELECIONADO

todosCursos.map(el => {
  el.addEventListener("click", () => {
    el.classList.toggle("selecionado");
  });
});

// CURSOS SELECIONADOS

btSelecionado.addEventListener("click", () => {
  const cursosSelecionados = [...document.querySelectorAll(".selecionado")];
  const nomes = cursosSelecionados.map(el => {
    return el.textContent;
  });

  const resultado = document.querySelector(".resultado");

  resultado.innerHTML = ``;
  resultado.innerHTML = `<h2>Cursos Selecionados</h2>`;
  nomes.forEach(el => {
    resultado.innerHTML += `<p class= "curso-select">${el}</p>`;
  });
});

// REMOVER CURSOS SELECIONADOS

btRemover.addEventListener("click", () => {
  const cursosSelecionados = [...document.querySelectorAll(".selecionado")];
  cursosSelecionados.map(el => {
    el.remove();
  });
});

// ADD CURSO

btAdd.addEventListener("click", () => {
  const textoCurso = document.querySelector("#inome");
  if (textoCurso.value.trim() === "") return;
  const novoCurso = document.createElement("div");
  novoCurso.textContent = textoCurso.value;
  novoCurso.setAttribute("class", "curso");
  sectionCursos.appendChild(novoCurso);
  const todosCursos = [...document.querySelectorAll(".curso")];
  novoCurso.addEventListener("click", () => {
    novoCurso.classList.toggle("selecionado");
  });
});
