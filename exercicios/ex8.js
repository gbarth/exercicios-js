function funcaoSorte(num) {
    let numSorteado = Math.floor(Math.random() * 10) + 1

    return (num == numSorteado ? 
        `Parabéns, o numero sorteado foi o ${numSorteado}` :
        `Que pena, o número sorteado foi o ${numSorteado}`
    )
}

console.log(funcaoSorte(8))