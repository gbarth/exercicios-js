const filhas = ['Luisa', 'Mariana']
const filhos = ['Fabio', 'Jonas']

const cria = filhas.concat(filhos)
console.log(cria)

const cria2 = filhas.concat(filhos, 'Junior')
console.log(cria2)

console.log(['a', 'b'].concat([1, 2], [3, 4], 5, [[6, 7]]))