const alunos = [
    {nome: 'Jõao', nota: 7.3, bolsista: false},
    {nome: 'Luisa', nota: 9.2, bolsista: true},
    {nome: 'Ana', nota: 9.8, bolsista: false},
    {nome: 'Mariana', nota: 8.7, bolsista: true},
]

const saoBolsistas = alunos.map(a => a.bolsista).reduce((acumulador, atual) => acumulador && atual)
console.log(saoBolsistas)

const algumBolsista = alunos.map(a => a.bolsista).reduce((acumulador, atual) => acumulador || atual)
console.log(algumBolsista)