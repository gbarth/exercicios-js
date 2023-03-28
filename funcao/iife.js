//iife = Immediately Invoked Function Expression

(function() {
    console.log('Será executado na hora!')
    console.log('Foge do escopo global!')
    const x = 1
    console.log(x)
})()

// console.log(x) //erro pois o que é criado na função iife é disponivel apenas dentro da função