const numeros = [2, 5, 7, 10, 14, 21];

const novosValores = numeros.filter ((item)=>{
    return item%2==0;
})

console.log(novosValores);