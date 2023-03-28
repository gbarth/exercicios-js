const peso1 = 1.0
const peso2 = Number('2.1')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

const avaliacao1 = 6.987
const avaliacao2 = 9.029

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const nota = total / (peso1 + peso2)

console.log(nota.toFixed(2))
console.log(nota.toString())
console.log(nota.toString(2)) //converte em binario
console.log(typeof nota)