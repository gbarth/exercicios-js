//funciona mais ou menos como uma classe
function Carro(velocidadeMax = 200, delta = 5) {
    //atributo privado
    let velocidadeAtual = 0

    //metodo publico
    this.acelerar = function() {
        if(velocidadeAtual + delta <= velocidadeMax) {
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMax
        }
    }

    //metodo publico
    this.getVelocidade = () => velocidadeAtual
}

const uno = new Carro
console.log(uno.getVelocidade())
uno.acelerar()
uno.acelerar()
console.log(uno.getVelocidade())

const ferrari = new Carro(350, 40)
console.log(ferrari.getVelocidade())
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidade())

console.log(typeof Carro)
console.log(typeof ferrari)
