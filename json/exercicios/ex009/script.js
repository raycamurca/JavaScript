// 09.Dado o JSON;
// Converta para objeto e calcule a média.

const pessoaNotas = {"nome": "Ana", "notas": [7,8,9]}

const ObjToJson = JSON.stringify(pessoaNotas);

const jsonToObj = JSON.parse(ObjToJson);

let soma = 0;
let qtd = 0;
for(let notas of jsonToObj.notas){
    soma += notas
    qtd++
}

console.log(soma/qtd);