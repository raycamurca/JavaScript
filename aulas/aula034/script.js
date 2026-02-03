"use strict";

const css = document.querySelector("#c1")
console.log(css);
const cursos = [...document.querySelectorAll(".curso")]

css.addEventListener("click", clicou)
css.addEventListener("dblclick", doubleClick)
css.addEventListener("mouseover", mouseEntrou)
css.addEventListener("mouseout", mouseSaiu)

for (let curso of cursos){
    curso.addEventListener("click", ()=>{
        curso.classList.add("destaque")
    })
}




function clicou() {
    css.innerHTML= "voce clicou"
}

function doubleClick() {
    css.innerHTML= "click duplo"
}

function mouseEntrou(){
    css.innerHTML= "o mouse entrou"
}

function mouseSaiu(){
    css.innerHTML= "o mouse saiu"
}