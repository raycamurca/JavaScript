let pessoa = {
    nome: null,
    idade: null,
    setNome(pnome){
        this.nome = pnome
    },
    setIdade(pidade){
        this.idade = pidade
    },
    getNome(){
        return this.nome
    },
    getIdade(){
        return this.idade
    }
}

const resp = document.querySelector(".resultado");

const add = ()=> {
    let inputNome = document.querySelector("#inome");
    let inputIdade = document.querySelector("#iidade");
    pessoa.setNome(inputNome.value);
    pessoa.setIdade(inputIdade.value);
    const div = document.createElement("div");
    div.setAttribute("class", "pessoa");
    div.innerHTML = `Nome: ${pessoa.getNome()} | Idade: ${pessoa.getIdade()}`
    resp.appendChild(div);
}

const btAdd = document.querySelector(".bt-add");

btAdd.addEventListener("click", (el)=>{
    el.preventDefault();
    let inputNome = document.querySelector("#inome");
    let inputIdade = document.querySelector("#iidade");
    add();
    inputNome.value = "";
    inputIdade.value = "";
    inputNome.focus()
})