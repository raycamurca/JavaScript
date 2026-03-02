// 17.Extraia todas as hashtags de uma frase:
// "Aprendendo #JavaScript e #Regex hoje"

let str = "Aprendendo #JavaScript e #Regex hoje";

let resp = str.match(/#\w+/g);
console.log(resp);