//coleção dinamica de pares chave/valor
const produto = new Object
produto.nome = 'Iphone'
produto['marca'] = 'Apple'
produto.preco = 3300
console.log(produto)

delete produto.preco
delete produto['marca']
console.log(produto)


const carro = {
    modelo: 'A4',
    valor: 8900,
    proprietario: {
        nome: 'Raul',
        idade: 56,
        endereco: {
            rua: 'Rua A',
            numero: 13,
        }
    },
    condutores: [{
        nome: 'Ana',
        idade: 32,
    }, {
        nome: 'Lucas',
        idade: 23
    }],
    calcularValorSeguro: function() {
        //...
    }
}

carro.proprietario.endereco.numero = 14
console.log(carro)

console.log(carro.condutores)
delete carro.condutores[1]
console.log(carro.condutores)

console.log(carro.condutores[0].nome)
