//1. Crie uma regex que valide se a string contém apenas números.

let regexPadrao = /^\d+$/;
let resp = "777";

let resultado = regexPadrao.test(resp);

console.log(resultado);