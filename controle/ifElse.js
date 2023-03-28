const imprimeResultado = function(nota) {
    if(nota >= 7) {
        console.log('Aprovado')
    } else {
        console.log('Reprovado')
    }
}

imprimeResultado(10)
imprimeResultado(5)
imprimeResultado('Epa!') //atente aos parâmetros