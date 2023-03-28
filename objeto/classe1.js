class Lancamento {
    constructor(nome = 'Genérico', valor = 0) {
        this.nome = nome,
        this.valor = valor
    }
}

class CicloFinanceiro {
    constructor(mes, ano) {
        this.mes = mes,
        this.ano = ano,
        this.lancamentos = []
    }

    addLancamento(...lancamentos) {
        lancamentos.forEach(l => this.lancamentos.push(l))
    }

    sumario() {
        let valorConsolidado = 0
        this.lancamentos.forEach(l => {
            valorConsolidado += l.valor
        })
        return valorConsolidado
    }
}

const salario = new Lancamento('Salário', 25000)
const contaLuz = new Lancamento('Luz', -220)

const contas = new CicloFinanceiro(11, 2022)
contas.addLancamento(salario, contaLuz)
console.log(contas.sumario())