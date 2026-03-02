// 13.Use .exec() para capturar nome e idade da string:
// Nome: Carlos, Idade: 35

let str = "Nome: Carlos, Idade: 35";
let regex = /Nome:\s(\w+),\sIdade:\s(\d+)/;
let arr = regex.exec(str);
let parametros = {
    nome: arr[1],
    idade: arr[2]
}

console.log(parametros);