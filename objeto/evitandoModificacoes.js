//Objeto que não se pode adicionar novos atributos
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'Promoção'
})
console.log('Extensível:', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tag
console.log(produto)

//Objeto que não se pode adicionar nem remover atributos
const pessoa = {nome: 'Ana', idade: 34}
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'
delete pessoa.idade
pessoa.nome = 'Laís'
console.log(pessoa)

//Objeto que não se pode adicionar e remover novos atributos nem modificá-los
const carro = Object.freeze({})