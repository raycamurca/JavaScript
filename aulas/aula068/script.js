// numeros

const teclasNum = document.querySelectorAll(".num");
const display = document.querySelector("#display");

let decimal = false;
let op = ["+", "-", "*", "/"];

teclasNum.forEach(numero => {
  numero.addEventListener("click", evt => {
    const valor = evt.target.innerHTML;

    if (valor != ",") {
      if (display.innerHTML == "0") {
        display.innerHTML = valor;
      } else {
        display.innerHTML += valor;
      }
      return;
    }

    if (valor == ",") {
      let ultimo = display.innerHTML.slice(-1);
      if (decimal) return;
      if (op.includes(ultimo) || ultimo == ",") return;
      decimal = true;

      if (display.innerHTML == "0") {
        display.innerHTML = "0,";
      } else {
        display.innerHTML += valor;
      }
      return;
    }
  });
});

// operadores

const teclaOp = document.querySelectorAll(".ope");

teclaOp.forEach(operador => {
  operador.addEventListener("click", evt => {
    const valor = evt.target.innerHTML;
    let ultimo = display.innerHTML.slice(-1);
    if (op.includes(ultimo) || ultimo == ",") return;
    decimal = false;
    if (valor == "x") {
      display.innerHTML += "*";
    } else {
      display.innerHTML += valor;
    }
  });
});

// botao clear

const btLimpar = document.querySelector(".limpar");

btLimpar.addEventListener("click", () => {
  decimal = false;
  display.innerHTML = "0";
});

// botao apagar

const btApagar = document.querySelector(".apagar");

btApagar.addEventListener("click", () => {
  let texto = display.innerHTML;
  let ultimo = display.innerHTML.slice(-1);
  if (display.innerHTML == "0") return;
  if (ultimo == ",") {
    decimal = false;
  }
  display.innerHTML = texto.slice(0, -1);
  if (display.innerHTML == "") {
    display.innerHTML = "0";
  }
});

// Copiar

const btCopy = document.querySelector(".copy");

btCopy.addEventListener("click", ()=>{
  navigator.clipboard.writeText(display.innerHTML);
  alert(`Copiado: ${display.innerHTML}`);
})

// resultado

const btIgual = document.querySelector(".igual");

btIgual.addEventListener("click", () => {
  decimal = false;
  let conta = display.innerHTML.replaceAll(",", ".");
  const resp = eval(conta);
  display.innerHTML = resp;
});
