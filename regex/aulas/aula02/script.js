let userText = document.querySelector("#iuser");
const btVereficar = document.querySelector(".verificar");
const padraoEmail = /\w{3,}@\w{3,}\.\w{3,10}/;
const padraoCPF = /\d{3}\.\d{3}\.\d{3}-\d{2}/
let resposta = document.querySelector(".resp")

btVereficar.addEventListener("click", ()=> {
    if(padraoEmail.test(userText.value.trim())===true){
        return resposta.innerHTML = "✅ E-mail validado com sucesso."
    }else if(padraoCPF.test(userText.value.trim())===true){
        return resposta.innerHTML = "✅ CPF validado com sucesso."
    }else{
        return resposta.innerHTML = "❌ Usuario inválido. Verifique os dados."
    }
});