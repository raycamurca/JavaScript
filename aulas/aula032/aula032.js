const todosCursos=[...document.getElementsByClassName("curso")]
const cursosc1=[...document.getElementsByClassName("c1")]
const cursosc2=[...document.getElementsByClassName("c2")]

console.log(todosCursos);
console.log(cursosc1);
console.log(cursosc2);

cursosc1.map(el=>{
    el.classList.add("destaque")
})