let userText = document.querySelector("#iuser");
const btVereficar = document.querySelector(".verificar");
const padraoEmail = /^\w+@\w+\.\w+$/;
const padraoCPF = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/
let resposta = document.querySelector(".resp")

btVereficar.addEventListener("click", ()=> {
    if(padraoEmail.test(userText.value.trim())){
        return resposta.innerHTML = "✅ E-mail validado com sucesso."
    }else if(padraoCPF.test(userText.value.trim())){
        return resposta.innerHTML = "✅ CPF validado com sucesso."
    }else{
        return resposta.innerHTML = "❌ Usuario inválido. Verifique os dados."
    }
});