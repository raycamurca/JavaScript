class Pessoa {
    constructor(pnome, pidade){
        this.nome = pnome,
        this.idade = pidade
    }

    getInfo(){
        return `Nome: ${this.nome} | Idade: ${this.idade}`
    }
}

let pessoas = [];

const btAdd = document.querySelector(".bt-add");

btAdd.addEventListener("click", (el)=>{
    el.preventDefault()
    const inputNome = document.querySelector("#inome");
    const inputIdade = document.querySelector("#iidade");
    const pessoa = new Pessoa(inputNome.value, Number(inputIdade.value))
    pessoas.push(pessoa);
    let resp = document.querySelector(".resultado")
    resp.innerHTML = "";

    pessoas.forEach((el)=>{
        const div = document.createElement("div");
        div.setAttribute("class", "pessoa");
        div.innerHTML = el.getInfo();
        resp.appendChild(div);
    })
    inputNome.value = "";
    inputIdade.value = "";
    inputNome.focus();
})