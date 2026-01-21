function* numeros(){
    yield 10
    yield 40
    yield 77
    yield 49
}
let y=numeros()

console.log(y.next())
console.log(y.next())
console.log(y.next())
console.log(y.next())
console.log(y.next())




/*
function* contador(){
    let i=0;
    while(true){
        yield i++
    }
}
const itc=contador()
console.log(itc.next().value)
*/

/*
function* cores(){
    yield 'vermelho'
    yield 'verde'
    yield 'azul'
}

let itc=cores()
console.log(itc.next().value)
console.log(itc.next().value)
console.log(itc.next().value)
*/