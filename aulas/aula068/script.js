// Teclas numericas (0-9 | ,)

const teclaNum = document.querySelectorAll(".num");
const display = document.querySelector("#display");
let decimal = false;

let op = ["+", "-", "*", "/"];

teclaNum.forEach(tecla => {
  tecla.addEventListener("click", evt => {
    // virgula

    let valor = evt.target.innerHTML;
    let ultimo = display.innerHTML.slice(-1);

    if (valor == ",") {
      if (decimal || op.includes(ultimo)) return;
      decimal = true;

      if (display.innerHTML == "0") {
        display.innerHTML = "0,";
      } else {
        display.innerHTML += valor;
      }

      return;
    }

    // Número

    if (display.innerHTML == "0") {
      display.innerHTML = valor;
    } else {
      display.innerHTML += valor;
    }
  });
});

// Botão Limpar

const limpar = document.querySelector(".limpar");

limpar.addEventListener("click", () => {
  decimal = false;
  display.innerHTML = "0";
});

// Teclas operacoes

const teclaOp = document.querySelectorAll(".ope");

teclaOp.forEach(tecla => {
  tecla.addEventListener("click", evt => {
    let valor = evt.target.innerHTML;
    let ultimo = display.innerHTML.slice(-1);
    decimal = false;

    if (display.innerHTML == "0" || ultimo == "," || op.includes(ultimo))
      return;

    if (valor == "x") {
      display.innerHTML += "*";
    } else {
      display.innerHTML += valor;
    }
  });
});

// Resultado

const btIgual = document.querySelector(".igual");

btIgual.addEventListener("click", evt => {
  decimal = false;
  let conta = display.innerHTML.replaceAll(",", ".");
  const resp = eval(conta);
  display.innerHTML = resp;
});
