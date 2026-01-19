const valpadrao = 0;

function eq2grau(a=valpadrao, b=valpadrao, c=valpadrao) {
    x1=((-b+((b**2-4*a*c)**0.5)) / (2*a));

    x2=((-b-((b**2-4*a*c)**0.5)) / (2*a));
}

eq2grau(1, -5, 6)

console.log("o valor da 1° raiz é: " + x1)
console.log("o valor da 2° raiz é: " + x2)







function add(v) {
    valor+=v
}

let valor=0
console.log(valor)

add(10)
console.log(valor)

add(-3)
console.log(valor)



const valorPadrao=0;

function soma(n1=valorPadrao,n2=valorPadrao) {
    let res = n1+n2
    return res
}

let resultado = soma(2)

console.log (resultado) 