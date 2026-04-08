const btEnviar = document.querySelector(".bt-enviar");

btEnviar.addEventListener("click", ()=>{
    let inputEmail = document.querySelector("#iemail").value;
    let inputSenha = document.querySelector("#isenha").value;

    if(inputEmail == "" || inputSenha == ""){
        alert("prenchar os campos")
        return
    }

    if(inputSenha.length < 5){
        alert("senha curta!! minimo caracteres: 5")
        return
    }

    alert("Login válido!");
})