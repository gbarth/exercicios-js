const notas = [8, 7, 6, 9, 10, 5, 4]

//sem callback
const notasBaixas = []
for(let i in notas) {
    if(notas[i] < 7) {
        notasBaixas.push(notas[i])
    }
}
console.log(notasBaixas)

//com callback
const notasBaixas2 = notas.filter((nota) => nota < 7)
console.log(notasBaixas2)

const obj1 = {
    nome: 'A',
    local: 'Rua 1'
}
const obj2 = {
    nome: 'B',
    local: 'Rua 2'
}
const obj3 = {
    nome: 'C',
    local: 'Rua 2'
}
const obj4 = {
    nome: 'D',
    local: 'Rua 1'
}

const objs = [obj1, obj2, obj3, obj4]

const objsRua1 = objs.filter((obj) => obj.local == 'Rua 1')
objsRua1.forEach((a) => console.log(a.nome))