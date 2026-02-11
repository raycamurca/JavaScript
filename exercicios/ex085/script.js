const usuarios = { nome: "João", idade: 34, rua: "Monte Myoboku" }

for(let key in usuarios){
    console.log(`${key} : ${usuarios[key]}`);
}