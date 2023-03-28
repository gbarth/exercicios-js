const escola = [{
    nome: 'Turma A',
    alunos: [{
        nome: 'Gustavo',
        nota: 9.8
    }, {
        nome: 'Ana Julia',
        nota: 8.2
    }]
}, {
    nome: 'Turma B',
    alunos: [{
        nome: 'Luiz',
        nota: 8.3
    }, {
        nome: 'Maria',
        nota: 8.6
    }]
}]

const getNotasAlunos = aluno => aluno.nota
const getNotasDaTurma = turma => turma.alunos.map(getNotasAlunos)

const notas1 = escola.map(getNotasDaTurma)
console.log(notas1)

Array.prototype.flatMap = function(callback) {
    return Array.prototype.concat.apply([], this.map(callback))
}

const notas2 = escola.flatMap(getNotasDaTurma)
console.log(notas2)