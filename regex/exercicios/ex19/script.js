// 19.Crie uma regex que impeça espaços no começo e no final da string.

let str = "fdda "
let regex = /^\S(.*\S$)$/

console.log(regex.test(str));