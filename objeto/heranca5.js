//toda função tem um atributo prototype, logo, todos abaixo possuem este atributo
console.log(typeof String)
console.log(typeof Object)
console.log(typeof Array)

String.prototype.reverse = function() { //vc meio que cria um método para esses tipos
    return this.split('').reverse().join('')
}
console.log('Hello World'.reverse())

Array.prototype.first = function() {
    return this[0]
}
const array1 = [1, 2, 3, 4, 5]
console.log(array1.first())

String.prototype.toString = function() { //não fazer isso!! (sobrescrever metodos ja presentes nesses tipos de dados)
    //{...}
}