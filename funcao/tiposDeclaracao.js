console.log(soma(3, 4)) //pode ser convocada antes da função
//function declaration
function soma(x, y) {
    return x + y
}

console.log(sub(3, 4)) //não pode ser convocada antes da função
//function expression
const sub = function(x, y) {
    return x - y
}

console.log(mult(3, 4)) //não pode ser convocada antes da função
//named function expression
const mult = function mult(x, y) {
    return x * y
}

