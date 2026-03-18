const caixa = document.querySelector(".conteiner p");

let collectionMap = new Map();

collectionMap.set("curso", "JavaScript");
collectionMap.set(77, "ROC");
collectionMap.set(1, 2);
collectionMap.set("inscritos", 777);

caixa.innerHTML = `${collectionMap.get("inscritos")}`

let pes = 77

if(collectionMap.has(pes)){
    caixa.innerHTML = `a chave <strong>${pes}</strong> existe; valor: <strong>${collectionMap.get(pes)}</strong>`
    caixa.innerHTML += `<br> tamanho da coleção: ${collectionMap.size}`
}else {
    caixa.innerHTML = `a chave <strong>${pes}</strong> NÃO existe`
}