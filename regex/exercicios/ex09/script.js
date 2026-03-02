//9. Valide um telefone brasileiro: (99) 99999-9999

let str = "(99) 99999-9999";
let regex = /^\(\d{2}\)\s\d{5}-\d{4}$/;

console.log(regex.test(str));