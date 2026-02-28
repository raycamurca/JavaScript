let str = "http://teste.com.br/index.html?ola=mundo&user=goku&id=123777"
let regex = /[?&](\w+)=(\w+)/g;

let arr;
let parametros = {};

while(arr = regex.exec(str)){
    parametros[arr[1]] = arr[2]
}

console.log(parametros);