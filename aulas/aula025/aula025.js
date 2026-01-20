const soma =(...valores)=>{
    ressoma=0;
    for(v of valores) {
        ressoma+=v
    }
    return ressoma
};

console.log(soma(10,5,35))