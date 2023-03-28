//cadeia de protótipos (prototype chain)
Object.prototype.atributo0 = 'Z' //não recomendado!!!
const avo = {atributo1: 'A'}
const pai = {__proto__: avo, atributo2: 'B', atributo3: 'C2'}
const filho = {__proto__: pai, atributo3: 'C'}
console.log(pai.atributo1, filho.atributo0, filho.atributo3)
console.log(avo.atributo3)


const carro = {
    velAtual: 0,
    velMax: 200,
    acelerar(delta) {
        if(this.velAtual + delta < this.velMax) {
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: '320'
}

const volvo = {
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)

ferrari.acelerar(350)
console.log(ferrari.status())
volvo.acelerar(100)
console.log(volvo.status())