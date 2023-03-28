function area(largura, altura) {
    const area = largura * altura
    if(area > 20) {
        console.log('Altura máxima excedida: ' + area + 'm2')
    } else {
        return area
    }
}

console.log(area(2, 2))
console.log(area(2))
console.log(area())
console.log(area(2, 3, 17, 22, 53))
console.log(area(5, 5))
area(5, 5)