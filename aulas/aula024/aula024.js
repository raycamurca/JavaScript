const f= new Function("v1","v2","v3","return v1+v2+v3"); //Função construtor anônimo

console.log(f(50,25,25))


/*
const f= function(...valores){ //função anônima
    soma=0
    for(let v of valores) {
        soma+=v
    } 
    return soma
}

console.log(f(50,25,25))
*/