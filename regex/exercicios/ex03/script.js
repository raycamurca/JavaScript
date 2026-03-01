// 3. Crie uma regex que verifique se a string termina com ".br".

let str = "site.teste.com.br";

let regex = /\.br$/

console.log(regex.test(str));