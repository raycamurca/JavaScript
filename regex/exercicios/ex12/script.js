// 12.Use .test() para verificar se uma string contém a palavra "erro".

let str = "o gato e o rato são amigos!! erro!!";
let regex = /erro/g;

console.log(regex.test(str));