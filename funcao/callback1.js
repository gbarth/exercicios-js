const fabricantes = ['Mercedes', 'McLaren', 'BMW']

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir)
fabricantes.forEach((a, b) => console.log(`${b + 1}. ${a}`))
fabricantes.forEach((a, b, c) => console.log(`${b + 1}. ${a} -- ${c}`))
fabricantes.forEach((a, b, c, d) => console.log(`${b + 1}. ${a} -- ${c} -- ${d}`))