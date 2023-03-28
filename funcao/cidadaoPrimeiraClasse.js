//Js trata função como um dado

//criar de forma literal
function funcao1() {}

//armazenar em uma variável
const funcao2 = function() {}

//armazenar em um array
const array = [function(a, b) {return a + b}, funcao1, funcao2]
console.log(array[0](5, 5))

//armazenar em um atributo de um objeto-
const obj = {}
obj.falar = function() {return 'Olá'}
console.log(obj.falar())

//passar como parâmetro para uma função
function run(fun) {
    fun()
}
run(function() {console.log('Executou a função!')})

//retornar e/ou conter uma função
function soma(a, b) {
    return function(c) {
        console.log(a + b + c)
    }
}
soma(1, 2)(3)
const aux = soma(1, 2)
aux(3)