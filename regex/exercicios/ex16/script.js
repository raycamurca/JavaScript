//16.Crie uma regex que capture parâmetros de URL:
// ?nome=ana&idade=28

let str = "?nome=ana&idade=28"
let regex = /[?&](\w+)=(\w+)/g;

let arr;
let parametros = {};

while(arr = regex.exec(str)){
    parametros[arr[1]] = arr[2]
}

console.log(parametros);    