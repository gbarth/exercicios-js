function contarPalavras(frase) {
    const arrayPalavras = frase.split(' ')
    return(arrayPalavras.length)
}
console.log(contarPalavras('Sou uma frase'))
console.log(contarPalavras('Messi é melhor que Cristiano Ronaldo'))