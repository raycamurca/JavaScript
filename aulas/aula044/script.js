const pArray = document.querySelector("#array");
const inputPesquisar = document.querySelector("#ipesquisar");
const btPesquisar = document.querySelector(".bt-pesquisar");
const pResultado = document.querySelector("#resultado");

const elementosArr = ["html", "css", "JavaScript"];
pArray.innerHTML =  `[${elementosArr}]`;

btPesquisar.addEventListener("click", ()=>{
    const txt = inputPesquisar.value
    elementosArr.find((el, index)=>{
        pResultado.innerHTML = "Resultado:<br> Valor não encontrado"
        if(el.toUpperCase()==txt.toUpperCase()){
            pResultado.innerHTML = ` `
            pResultado.innerHTML = `Resultado: `
            pResultado.innerHTML += `<br> Valor ${el} encontrado na posição ${index}`
            return el
        }
    })
})