const disponiveis = document.querySelector(".cursos-disponiveis");
const cursoC1 = document.querySelector("#c1");
const todosCursos = [...document.querySelectorAll(".curso")]

disponiveis.addEventListener("click", evt => {
  console.log("clicou");
  console.log(evt);
});

todosCursos.map((el)=>{
  el.addEventListener("click", (evt)=>{
    evt.stopPropagation()
  })
})

// todosCursos.addEventListener("click", (evt) => {
//   evt.stopPropagation()
// });