function Pessoa(nome) {
    this.falar = function() {
        console.log(`Meu nome é ${nome}`)
    }
}

const p1 = new Pessoa('Lara')
p1.falar()
console.log(p1.nome)

function Pessoa1(nome) {
    this.nome = nome

    this.falar = function() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p2 = new Pessoa1('Lara')
p2.falar()
console.log(p2.nome)