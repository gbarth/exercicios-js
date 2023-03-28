// a função map retorna um novo array sempre de mesmo tamanho porém transformado
const nums = [1, 2, 3, 4, 5]

const resultado = nums.map(function(e) {
    return e * 2
})
console.log(nums, resultado)

const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$${parseFloat(e).toFixed(2).replace('.', ',')}`

const reais = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(reais)