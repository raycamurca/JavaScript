//7. Valide um CEP brasileiro no formato: 00000-000

let str = "03859-033";

let regex = /^\d{5}-\d{3}$/;

let resultado = regex.test(str);

console.log(resultado);