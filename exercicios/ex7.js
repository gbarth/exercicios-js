//Criar uma função que receba como parâmetro um array de números e 
//retorne um array contendo somente números positivos 

const numeros = [1, -5, 11, 6, -9, -10, -13]
const numerosPositivos = numeros.filter((e) => e > 0)

console.log(numerosPositivos)