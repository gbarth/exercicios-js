const pilotos = ['Vettel', 'Alonso', 'Massa', 'Raikkonen']
pilotos.pop() //remove o ultimo elemento do array
console.log(pilotos)

pilotos.push('Verstappen') //adiciona na ultima posição
console.log(pilotos)

pilotos.shift() //remove o primeiro elemento
console.log(pilotos)

pilotos.unshift('Hamilton') //adiciona no primeiro elemento
console.log(pilotos)

pilotos.splice(2, 0, 'Bottas', 'Raikkonen') //explicado no arquivo 'array.js'
console.log(pilotos)
pilotos.splice(4, 1)
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) //retorna uma parte do array, do indice 2 até o final
console.log(algunsPilotos1)
const algunsPilotos2 = pilotos.slice(1, 4) //retorna uma parte do array, do indice 1 até o indice 4, sem contar o indice 4
console.log(algunsPilotos2)