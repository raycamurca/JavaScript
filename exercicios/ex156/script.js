const divPai = document.querySelector("#pai");
const buttonFilho = document.querySelector("#filho");

// sem Stop propagation

// divPai.addEventListener("click", () => {
//   console.log("Pai");
// });

// buttonFilho.addEventListener("click", () => {
//   console.log("Filho");
// });

// com Stop propagation

pai.addEventListener("click", (e) => {
  console.log("Pai");
});

filho.addEventListener("click", (e) => {
  e.stopPropagation();
  console.log("Filho");
});