const resp = document.querySelector(".resp");

const op = [
    (val1, val2)=>{
        let soma = val1 + val2;
        return soma
    },
    (val1, val2)=>{
        let menos = val1 - val2;
        return menos
    },
    (val1, val2)=>{
        let multi = val1 * val2;
        return multi
    }, 
    (val1, val2)=>{
        let divi = val1 / val2;
        return divi
    }
]

// ADIÇÃO

const btSoma = document.querySelector(".btsoma");

btSoma.addEventListener("click", ()=>{
    let valor1 = Number(document.querySelector("#valor1").value);
    let valor2 = Number(document.querySelector("#valor2").value);
    resp.innerHTML = ``
    resp.innerHTML = `Resultado: `
    resp.innerHTML += `<br> ${valor1} + ${valor2} = ${op[0](valor1, valor2)}`
})

// SUBTRAÇÃO

const btMenos = document.querySelector(".btmenos");

btMenos.addEventListener("click", ()=>{
    let valor1 = Number(document.querySelector("#valor1").value);
    let valor2 = Number(document.querySelector("#valor2").value);
    resp.innerHTML = ``
    resp.innerHTML = `Resultado: `
    resp.innerHTML += `<br> ${valor1} - ${valor2} = ${op[1](valor1, valor2)}`
})

// MULTIPLICAÇÃO

const btMulti = document.querySelector(".btvezes");

btMulti.addEventListener("click", ()=>{
    let valor1 = Number(document.querySelector("#valor1").value);
    let valor2 = Number(document.querySelector("#valor2").value);
    resp.innerHTML = ``
    resp.innerHTML = `Resultado: `
    resp.innerHTML += `<br> ${valor1} x ${valor2} = ${op[2](valor1, valor2)}`
})

// DIVISÃO

const btDivi = document.querySelector(".btdivisao");

btDivi.addEventListener("click", ()=>{
    let valor1 = Number(document.querySelector("#valor1").value);
    let valor2 = Number(document.querySelector("#valor2").value);
    resp.innerHTML = ``
    resp.innerHTML = `Resultado: `
    resp.innerHTML += `<br> ${valor1} / ${valor2} = ${op[3](valor1, valor2).toFixed(1)}`
})