// 8. Converta este JSON para objeto usando JSON.parse:

const pessoa = {"nome":"Ana","idade":30}

let objToJson = JSON.stringify(pessoa)

let jsonToObj = JSON.parse(objToJson)

console.log(jsonToObj);