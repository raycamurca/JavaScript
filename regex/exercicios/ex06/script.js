// 6. Crie uma regex que encontre palavras com exatamente 5 letras.

let str = "ABCDE doenf";

console.log(str.match(/\b[A-Za-z]{5}\b/g));