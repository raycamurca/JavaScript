// 20.Crie uma regex que detecte se a string contém apenas letras e números (sem símbolos).

let str = "dkld84";

let regex = /^[A-Za-z0-9]+$/g;

console.log(regex.test(str));