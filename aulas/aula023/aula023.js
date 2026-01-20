/*
function soma (...valores) {
    let pos = 0;
    for (let v in valores) {
        console.log(v)
    }
}

soma(7,5,4,3,2)
*/


function soma(...valores) {
    let res=0;
    for(let v of valores) {
        res+=v
    }
    return res
}

console.log(soma(3,4))
/*
function soma(...valores) {
    let tam=valores.length;
    for(i=0; i<tam; i++) {
    console.log(valores[i])
    }
}
*/