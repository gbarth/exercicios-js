const alunos = [
    {nome: 'Jõao', nota: 7.3, bolsista: false},
    {nome: 'Luisa', nota: 9.2, bolsista: true},
    {nome: 'Ana', nota: 9.8, bolsista: false},
    {nome: 'Mariana', nota: 8.7, bolsista: true},
]

const resultados = alunos.map(a => a.nota).reduce(function(acumulador, atual) {
    console.log(acumulador, atual)
    return acumulador + atual
})
console.log(resultados)