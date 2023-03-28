const produtos = [
    {nome: 'Notebook', preco: 2199, fragil: true},
    {nome: 'iPad Pro', preco: 4300, fragil: true},
    {nome: 'Copo de Vidro', preco: 15.50, fragil: true},
    {nome: 'Copo de Plástico', preco: 3.99, fragil: false},
]

//função no próprio método
console.log(produtos.filter(function(p) {
    return p.fragil == false
}))

//uma função apenas
const fragilCaro = p => p.fragil && p.preco >= 500
const lista = produtos.filter(fragilCaro)
console.log(lista)


//duas funções
const frageis = p => p.fragil
const caros = p => p.preco >= 500
const lista2 = produtos.filter(frageis).filter(caros)
console.log(lista2)
