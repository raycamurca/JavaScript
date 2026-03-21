
function Pessoa(pnome, pidade) {
  this.nome = pnome,
  this.idade = pidade;
 
  this.getInfo = function() {
    return `Nome: ${this.nome} | Idade: ${this.idade}`;
  }
}

let pessoas = [];

const add = () => {
  let resp = document.querySelector(".resultado");
  resp.innerHTML = "";
  pessoas.forEach(el => {
    const div = document.createElement("div");
    div.setAttribute("class", "pessoa");
    div.innerHTML = el.getInfo();
    resp.appendChild(div);
  });
};

const btAdd = document.querySelector(".bt-add");

btAdd.addEventListener("click", el => {
  el.preventDefault();
  const inputNome = document.querySelector("#inome");
  const inputIdade = document.querySelector("#iidade");
  if (inputNome.value == "" || inputIdade.value == "") return;
  const pessoa = new Pessoa(inputNome.value, Number(inputIdade.value));
  pessoas.push(pessoa);
  add();
  inputNome.value = "";
  inputIdade.value = "";
  inputNome.focus();
});
