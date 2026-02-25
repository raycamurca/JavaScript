let cep = "01234-000";

const obterCepValido = str => {
  let padraoCep = /^\d{5}-\d{3}$/;
  return padraoCep.test(str);
};

console.log(obterCepValido("74803784"));