    const normalRadio = document.querySelector("#normal");

    normalRadio.addEventListener("click", ()=>{
        const campoBlindagem = document.querySelector("#iblidagem");
        campoBlindagem.setAttribute("disabled", "disabled")
        campoBlindagem.setAttribute("placeholder", "BLOQUEADO");
        campoBlindagem.removeAttribute("value", "value");
        const campoMunicao = document.querySelector("#imunicao");
        campoMunicao.setAttribute("disabled", "disabled");
        campoMunicao.setAttribute("placeholder", "BLOQUEADO");
        campoMunicao.removeAttribute("value", "value");
    })

    const militarRadio = document.querySelector("#militar");

    militarRadio.addEventListener("click", ()=>{
        const campoBlindagem = document.querySelector("#iblidagem");
        campoBlindagem.removeAttribute("disabled", "disabled")
        campoBlindagem.removeAttribute("placeholder", "BLOQUEADO");
        campoBlindagem.setAttribute("value", "0");
        const campoMunicao = document.querySelector("#imunicao");
        campoMunicao.removeAttribute("disabled", "disabled")
        campoMunicao.removeAttribute("placeholder", "BLOQUEADO");
        campoMunicao.setAttribute("value", "0");
    })

    class Carro {
        constructor(pnome, pportas){
            this.nome = pnome;
            this.portas = pportas;
        }

        getNome(){
            return this.nome;
        }

        getPortas(){
            return this.portas;
        }
    }

    class Militar extends Carro {
        constructor(pnome, pportas, pblindagem, pmunicao){
            super(pnome, pportas);
            this.blindagem = pblindagem;
            this.municao = pmunicao;
        }

        getBlindagem(){
            return this.blindagem
        }

        getMunicao(){
            return this.municao
        }
    }

    const btAdd = document.querySelector(".adicionar");

    btAdd.addEventListener("click", (el)=>{
        el.preventDefault();
        let radioSelect = document.querySelector("input[name=tipo-carro]:checked");
        if(!radioSelect) return;
        const inputNome = document.querySelector("#inome");
        const inputPortas = document.querySelector("#iportas");
        if(radioSelect.value == "normal"){
            const inputBlindagem = document.querySelector("#iblidagem");
            const inputMunicao = document.querySelector("#imunicao");
            inputBlindagem.value = "";
            inputMunicao.value = "";
            const resp = document.querySelector(".resp");
            const carroNormal = new Carro(inputNome.value, inputPortas.value)
            const div = document.createElement("div");
            div.innerHTML += `<br>Nome: ${carroNormal.getNome()} | Portas: ${carroNormal.getPortas()}`
            div.setAttribute("class", "carro")
            resp.appendChild(div);
            inputNome.value = "";
            inputPortas.value = "";
            inputNome.focus()

            div.addEventListener("click", ()=>{
                div.classList.toggle("selecionado")
            })
        } else{
            const inputNome = document.querySelector("#inome");
            const inputPortas = document.querySelector("#iportas");
            const inputBlindagem = document.querySelector("#iblidagem");
            const inputMunicao = document.querySelector("#imunicao");
            if(inputBlindagem.value == "" || inputMunicao.value == "" || inputNome.value == "" || inputPortas.value == "") return
            const resp = document.querySelector(".resp");
            const carroMilitar = new Militar (inputNome.value, inputPortas.value, inputBlindagem.value, inputMunicao.value);
            const div = document.createElement("div");
            div.innerHTML += `<br>Nome: ${carroMilitar.getNome()} | Portas: ${carroMilitar.getPortas()} | Blindagem: ${carroMilitar.getBlindagem()} | Munição: ${carroMilitar.getMunicao()} <br>`
            div.setAttribute("class", "carro")
            resp.appendChild(div);
            inputNome.value = "";
            inputPortas.value = "";
            inputBlindagem.value = "";
            inputMunicao.value = "";
            inputNome.focus();

            div.addEventListener("click", ()=>{
                div.classList.toggle("selecionado")
            })
        }
    })

    const btRemove = document.querySelector(".remove");

    btRemove.addEventListener("click", ()=>{
        const selecionados = document.querySelectorAll(".selecionado");
        selecionados.forEach(el=>{
            el.remove()
        })  
    })