// 10.Valide um e-mail simples (usuario@dominio.com).

let str = "usuario@dominio.com";
let regex = /^[A-Za-z0-9._-]+@[A-Za-z0-9-]+\.com$/;

console.log(regex.test(str));