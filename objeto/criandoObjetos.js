//usando a notação literal
const obj1 = {}

//a partir do object
const obj2 = new Object

//funções construtoras
function Produto(nome, preco, desc) {
    this.nome = nome //quando usa o "this" significa que o atributo é um atributo publico
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}

const p1 = new Produto('Iphone', 3900, 0.2)
const p2 = new Produto('Notebook', 2998.99, 0.25)
console.log(p1.getPrecoComDesconto())
console.log(p2.getPrecoComDesconto())

//função factory
function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome: nome,
        salarioBase: salarioBase,
        faltas: faltas,
        getSalario() {
            return salarioBase / 30 * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('Lara', '5000', 3)
const f2 = criarFuncionario('Junior', '5000', 5)
console.log(`${f1.nome} recebeu ${f1.getSalario().toFixed(2)}.`)
console.log(`${f2.nome} recebeu ${f2.getSalario().toFixed(2)}.`)

//Object.create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

//uma função famosa que retorna objeto
const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON)
console.log(fromJSON.info)