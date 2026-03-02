// 8. Valide um CPF no formato: 000.000.000-00

let str = "000.000.000-00";
let regex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/

console.log(regex.test(str));