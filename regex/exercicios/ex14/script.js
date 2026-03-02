//14.Use match() para retornar todos os números de:
// "Produto 123 custa 45 reais e 67 centavos"

let str = "Produto 123 custa 45 reais e 67 centavos";

let resp = str.match(/\d+/g);

console.log(resp);