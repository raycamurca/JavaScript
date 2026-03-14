const pArray = document.querySelector("#array");
const btVerificar = document.querySelector(".bt-verificar");
const pResultado = document.querySelector("#resultado");

const elementosArr = [21, 25, 18, 20, 18, 18, 22];

pArray.innerHTML = `[${elementosArr}]`

btVerificar.addEventListener("click", ()=>{
    const resp = elementosArr.every((el, index)=>{
        if(el<18){
            pResultado.innerHTML = ` `
            pResultado.innerHTML += `Array não conforme! elemento na posição ${index+1}<br>`;
        }
        return el >= 18
    })
    if(resp){
        pResultado.innerHTML = `Tudo certo!!`;
    }
})