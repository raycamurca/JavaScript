const carro = {
  marca: "Fiat",
  modelo: "Uno",
  ano: 2001,
};
// transforma obj em JSON
let texto = JSON.stringify(carro);

// transforma JSON em obj
let obj = JSON.parse(texto);