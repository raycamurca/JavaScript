// Icon senha (olho)

const iconsPassword = document.querySelectorAll(".password-icon");

iconsPassword.forEach(icon => {
    icon.addEventListener("click", ()=>{
        const input = icon.previousElementSibling;
        input.type = input.type === "password" ? "text" : "password";
        icon.classList.toggle("fa-eye");
        icon.classList.toggle("fa-eye-slash");
    })
})

const form = document.querySelector("#form");

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    const erroIcon = '<i class="fa-solid fa-circle-exclamation"></i>';

    const nome = document.querySelector("#inome");
    const nomeValue = nome.value;
    const paiNome = nome.closest(".input-box");

    paiNome.classList.remove("invalido");
    paiNome.classList.add("valido");

    const erroSpan = paiNome.querySelector(".erro");
    erroSpan.innerHTML = "";

    if(!nomeValido(nomeValue).valido){
        erroSpan.innerHTML = `${erroIcon} ${nomeValido(nomeValue).msgErro}`;
        paiNome.classList.add("invalido");
        paiNome.classList.remove("valido");
        return
    }
})

const nomeValido = (value)=>{

    const validar = {
        valido: true,
        msgErro: null
    }

    const paiNome = nome.closest(".input-box");
    const label = paiNome.childNodes[1].innerHTML;


    if(value === ""){
        validar.valido = false;
        validar.msgErro = `${label} Obrigatório`;
        return validar
    }

    const min = 3;
    if(value.length < min){
        validar.valido = false;
        validar.msgErro = `${label} com no mínimo ${min} letras!`;
        return validar
    }

    const regex = /^[a-zA-Z]+$/;
    if(!regex.test(value)){
        validar.valido = false;
        validar.msgErro = `${label} só pode conter letras!`;
        return validar
    }

    return validar;
}