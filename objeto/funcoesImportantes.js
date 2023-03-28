const pessoa = {
    nome: 'Rebecca',
    idade: 21,
    peso: 65,
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(e => {
    console.log(`${e[0]}: ${e[1]}`)
})


Object.defineProperty(pessoa, 'dataNascimento', { //cria um atributo com algumas propriedades
    enumerable: true,
    writable: false,
    value: '01/04/2001'
})

console.log(pessoa) //se "enumerable tivesse false 'dataNascimento não apareceria aqui"

const destino = {a: 4}
const obj1 = {c: 2}
const obj2 = {a: 1, b: 3}
Object.assign(destino, obj1, obj2)
console.log(destino)

Object.freeze(destino)
destino.c = 7
console.log(destino)