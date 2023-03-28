class Pessoa {
    constructor() {
        let idade
    }
    aumentaIdade() {
        this.idade += 5
    }
}

const eduardo = new Pessoa
eduardo.idade = 10
eduardo.aumentaIdade()

const lais = new Pessoa
lais.idade = 18
lais.aumentaIdade()

console.log(eduardo.idade)
console.log(lais.idade)