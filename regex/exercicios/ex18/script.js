//18.Crie uma regex que valide datas no formato:
// dd/mm/yyyy

let str = "31/02/2100";
let regex = /^\d{2}\/\d{2}\/\d{4}$/;

console.log(regex.test(str));