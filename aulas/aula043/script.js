// Adicionar CURSO

const btAddCurso = document.querySelector(".add-curso");
const sectionCursos = document.querySelector(".cursos");

btAddCurso.addEventListener("click", ()=>{
  const textoInput = document.querySelector("#inome");
  if(textoInput.value.trim() === "") return;
  const div = document.createElement("div");
  div.setAttribute("class", "curso");
  div.innerHTML = `${textoInput.value}`;
  sectionCursos.appendChild(div);

  div.addEventListener("click", ()=>{
    div.classList.toggle("selecionado")
  })
})

// Remover Curso Selecionado

const btRemoverCurso = document.querySelector(".remover-curso");

btRemoverCurso.addEventListener("click", ()=>{
  const cursosSelecionados = [...document.querySelectorAll(".selecionado")];
  cursosSelecionados.forEach(el => {
    el.remove()
  });
})

//Add ou Remover Classe Selecionado

const cursos = [...document.querySelectorAll(".curso")];

cursos.forEach(el => {
  el.addEventListener("click", ()=>{
    el.classList.toggle("selecionado")
  })
});

// Mostra os Cursos Selecionados

const btCursoSelecionado = document.querySelector(".select-curso");
const resultadoSelecionado = document.querySelector(".resultado");

btCursoSelecionado.addEventListener("click", ()=>{
  resultadoSelecionado.innerHTML = " ";
  resultadoSelecionado.innerHTML = "<h2>Cursos Selecionados</h2>"
  const cursosSelecionados = [...document.querySelectorAll(".selecionado")];
  cursosSelecionados.forEach((el, index) => {
    const divResultado = document.createElement("div");
    divResultado.setAttribute("class", "curso-select");
    divResultado.innerHTML = `${cursosSelecionados[index].textContent}`;
    resultadoSelecionado.appendChild(divResultado);
  });
})