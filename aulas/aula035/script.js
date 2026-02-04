let select = document.querySelector(".cursos"); // cursos
let cursosCopy = document.querySelector(".copy-cursos"); // cursos copiados
let bt = document.querySelector(".bt-copiar"); // botão copiar

bt.addEventListener("click", ()=>{ // evento copiar curso
    let optionSelect = select.selectedOptions[0]; // opção selecionada
    let existe = false; // verificar se o curso já foi copiado
    for(let option of cursosCopy.options){
        if (option.text === optionSelect.text){
            existe = true;
            break;
        }
    }
    if (existe){
        alert("Curso já copiado!!")
    } else {
        cursosCopy.innerHTML+=`<option>${optionSelect.text}</option>`
    }
})