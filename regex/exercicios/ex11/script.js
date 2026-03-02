//11.Crie uma regex que valide uma senha com:
// • mínimo 6 caracteres
// • pelo menos 1 número

let strSenha = "asenhadohomi7";
let regex = /\w{5,}\d+/;

console.log(regex.test(strSenha));