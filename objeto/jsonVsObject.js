const obj = {a: 1, b: 2, c: 3, soma() {return a + b + c}}
console.log(JSON.stringify(obj)) //cria um json com um objeto

//texto dentro do JSON tem que estar com aspas duplas
console.log(JSON.parse('{"a": 1, "b": 2, "c": 3}')) //cria um objeto com um json
console.log(JSON.parse('{"a": 1, "b": "string", "c": true, "d": {}, "e": []}')) //cria um objeto com um json