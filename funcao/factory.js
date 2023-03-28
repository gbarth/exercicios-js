//função factory é uma função que retorna um objeto
function criarPessoa(nome, sobrenome) {
    return {
        nome: nome,
        sobrenome: sobrenome
    }
}
console.log(criarPessoa('Ana', 'Moreira'))
console.log(criarPessoa('Harry', 'Styles'))

function criarProduto(nome, preco, desconto = 0.2) {
    return {
        nome: nome,
        preco: preco - preco * desconto
    }
}
console.log(criarProduto('Iphone', '3100'))
console.log(criarProduto('Trakinas', '6.80', 0.5))