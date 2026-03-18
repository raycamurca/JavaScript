// SOMAR

const oneSoma = document.querySelector("#onesoma");
const twoSoma = document.querySelector("#twosoma");
const btSomar = document.querySelector(".bt-somar");
const respSoma = document.querySelector(".resp-soma");

btSomar.addEventListener("click", ()=>{
    const typeOneSoma = Number(oneSoma.value);
    const typeTwoSoma = Number(twoSoma.value);
    let soma = typeOneSoma + typeTwoSoma;
    respSoma.innerHTML = `${typeOneSoma} + ${typeTwoSoma} = ${soma}`
    respMenos.innerHTML = ``
})

// SUBTRAÇÃO

const oneMenos = document.querySelector("#onemenos");
const twoMenos = document.querySelector("#twomenos");
const btMenos = document.querySelector(".bt-menos");
const respMenos = document.querySelector(".resp-menos");

btMenos.addEventListener("click", ()=>{
    const typeOneMenos = Number(oneMenos.value);
    const typeTwoMenos = Number(twoMenos.value);
    let menos = typeOneMenos - typeTwoMenos;
    respMenos.innerHTML = `${typeOneMenos} - ${typeTwoMenos} = ${menos}`
    respSoma.innerHTML = ``
})