const numeros = [...document.querySelectorAll(".number")];
const campoResp = document.querySelector(".resultado");
let valores = [];

numeros.map((el)=>{
    el.addEventListener("click", ()=>{
        valores.push(el.value)
        campoResp.innerHTML += `${el.value}`
    })
})

const op = [...document.querySelectorAll(".bt-operacao")];
const operadores = ['+', '-', 'x', '÷'];

op.map((el)=>{
    el.addEventListener("click", ()=>{
        let texto = campoResp.innerHTML.trim();
        let ultimo = texto.slice(-1);
        
        if(operadores.includes(ultimo) || texto == ``) return;
        
        campoResp.innerHTML += `${el.textContent}`
    })
})