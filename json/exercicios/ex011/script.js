// Transforme um array de objetos em JSON.

const pessoas = [
  { nome: "Ana", idade: 25 },
  { nome: "Carlos", idade: 30 },
  { nome: "Marina", idade: 22 }
];

const objToJson = JSON.stringify(pessoas)

console.log(objToJson);
