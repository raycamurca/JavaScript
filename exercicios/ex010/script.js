//map ex inicial
const numeros = [1, 2, 3, 4, 5];

const dobro = numeros.map((item, pos, array) => {
    return item*2
})

console.log(dobro);