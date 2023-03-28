const alunos = [
    {nome: 'Jõao', nota: 7.3, bolsista: false},
    {nome: 'Luisa', nota: 9.2, bolsista: true},
    {nome: 'Ana', nota: 9.8, bolsista: false},
    {nome: 'Mariana', nota: 8.7, bolsista: true},
]

//Imperativo => focado no processo, em como você quer
let total1 = 0
for(let i = 0; i < alunos.length; i++) {
    total1 += alunos[i].nota
}
console.log(total1 / alunos.length)

//Declarativo => focado em o que você quer
const getNota = a => a.nota
const total2 = (acumulador, atual) => acumulador + atual

const resultado = alunos.map(getNota).reduce(total2)
console.log(resultado / alunos.length)
//=> melhor a ser usado pois as funções criadas podem ser reaproveitadas
//=> não coloca muito no código, deixa a linguagem resolver por você