const a = 1
const b = 2
const c = 3

const obj1 = {a: a, b: b, c: c} //não necessário
console.log(obj1)
const obj2 = {a, b, c}
console.log(obj2)


const nomeAtributo = 'nota'
const valorAtributo = 8.87

const obj3 = {}
obj3[nomeAtributo] = valorAtributo
console.log(obj3)

const obj4 = {[nomeAtributo]: valorAtributo}
console.log(obj4)


const obj5 = {
    function1: function() {console.log('function1')},
    function2() {console.log('function2')} //forma nova de se atribuir uma função a um atributo de um objeto
}

obj5.function1()
obj5.function2()