const cursosDisponiveis = document.querySelector(".cursos-disponiveis");
const todosCursos = [...document.querySelectorAll(".curso")];
const curso = ["HTML", "CSS", "JavaScript", "PHP", "React", "MySQL"];

curso.map((el, index) => {
    const novoElemento = document.createElement("div");
    novoElemento.setAttribute("id", `c${index+1}`);
    novoElemento.setAttribute("class", "curso");
    novoElemento.innerHTML= el;
    cursosDisponiveis.appendChild(novoElemento);
});