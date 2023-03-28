//implementação do map
Array.prototype.map2 = function(callback) {
    const newArray = []
    for(let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i], i, this))
    }
    return newArray
}

const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de Lapis", "preco": 41.25}',
    '{"nome": "Caneta", "preco": 7.50}',
]

const jsonToObj = e => JSON.parse(e)
const getPreco = e => e.preco

const resultado = carrinho.map2(jsonToObj).map2(getPreco)
console.log(resultado)