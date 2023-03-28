//o map usa uma função que transforma cada um dos elementos do array passado (como se ele tivesse um for por si so)

const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de Lapis", "preco": 41.25}',
    '{"nome": "Caneta", "preco": 7.50}',
]

const jsonToObj = e => JSON.parse(e)
const getPreco = e => e.preco

const resultado = carrinho.map(jsonToObj).map(getPreco)
console.log(resultado)