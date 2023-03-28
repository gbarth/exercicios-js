console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Thomas', 'Livia') //forma não recomedada
console.log(aprovados)

aprovados = ['Gustavo', 'Julia', 'Hugo']
console.log(aprovados)
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'Paulo' //forma mais comum para substituição
aprovados.push('João') //forma mais comum para atribuição em um array
console.log(aprovados)

aprovados[9] = 'Rafael'
console.log(aprovados.length)
console.log(aprovados[5] === undefined)

console.log(aprovados)
aprovados.sort() //ordena o array
console.log(aprovados)

delete aprovados[0]
console.log(aprovados)
console.log(aprovados[0])
aprovados.sort()
console.log(aprovados)

aprovados = ['Bia', 'Lucas', 'Ana']
aprovados.splice(1, 1) //lê-se: a partir do elemento de indice 1, exclua 1
console.log(aprovados)

aprovados = ['Bia', 'Lucas', 'Ana']
aprovados.splice(1, 2) //lê-se: a partir do elemento de indice 1, exclua 2
console.log(aprovados)

aprovados = ['Bia', 'Lucas', 'Ana']
aprovados.splice(1, 0, 'AddElemento') //lê-se: a partir do elemento de indice 1, exclua 0 e adicione o elemento 'AddElemento'
console.log(aprovados)