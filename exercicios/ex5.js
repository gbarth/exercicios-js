function receberPrimeiroEUltimoElemento(array) {
    let tam = array.length - 1
    const array2 = []
    array2.push(array[0])
    array2.push(array[tam])
    return array2
}
console.log(receberPrimeiroEUltimoElemento([1, 2, 3, 4, 5]))