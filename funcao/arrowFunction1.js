let dobro = function(a) {
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a //retorno implícito
console.log(dobro(Math.PI))

let ola = function() {
    return 'Olá'
}
ola = () => 'Olá'
ola = _ => 'Olá' //possui um paramêtro mas vc pode ignorar se quiser

console.log(ola())

metade = a => a/2
console.log(metade(10))