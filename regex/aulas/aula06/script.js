let busca = "nemo";
let str  ="procurando nemo nessas palavras";

let regex =  new RegExp(busca, "g");

console.log(regex.exec(str));