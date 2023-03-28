//funçao sem retorno
function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2) //segundo valor fica como undefined
imprimirSoma(2, 10, 2, 4, 4) //vai ignorar o resto


//funcao com retorno
function soma(a, b = 0) {
    return a + b
}

console.log(soma(2, 3))
console.log(soma(2))

function somaSemParametro(a = 1, b = 1) {
    return a + b
}
console.log(somaSemParametro(2, 6))
console.log(somaSemParametro())
