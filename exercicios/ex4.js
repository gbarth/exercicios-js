//Calcular a média de todos os números de um array 
const numeros = [1, 5, 11, 6, 9, 10, 13]

const somaNumeros = numeros.reduce((acumulador, atual) => acumulador + atual)

let media = somaNumeros/numeros.length

console.log(media.toFixed(2))