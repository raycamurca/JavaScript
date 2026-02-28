let str = "o pato chato tem sapato de gato";
let regex = /([pg]|ch)ato/g;
let resultado;

while ((resultado = regex.exec(str)) !== null) {
  console.log(resultado);
}
