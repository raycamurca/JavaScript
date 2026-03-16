const pArray = document.querySelector("#array");
const btReduzir = document.querySelector(".bt-reduzir");
const pResultado = document.querySelector("#resultado");

const elementosArr = [1, 2, 3, 4, 5];

pArray.innerHTML = `[${elementosArr}]`;

btReduzir.addEventListener("click", () => {
  const resp = elementosArr.reduce((acc, el) => {
    return acc + el;
  }, 0);
  pResultado.innerHTML = `a soma do array é ${resp}`;
});
