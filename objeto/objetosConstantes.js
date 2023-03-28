//pessoa -> 123(endereço na memoria) -> {...}(objeto criado)
const pessoa = {nome: 'João'}
pessoa.nome = 'Gabriel'
console.log(pessoa)

//pessoa -> 456 -> {...}
// pessoa = {nome: 'Ana'} //gera erro pois está fazendo com que a constante pessoa aponte para outro endereço na memoria
// console.log(pessoa)

Object.freeze(pessoa) //não consegue mais modificar o objeto, ou seja, torna o objeto em si constante
pessoa.nome = 'Rafaela'
pessoa.endereco = 'Rua A'
delete pessoa.nome

console.log(pessoa)