//closure é o escopo criado quando uma função é declarada

const x = 'Global'

function fora() {
    const x = 'Local' //se comentada esta linha, seria impresso "Global" pela função dentro()
    function dentro() {
        console.log(x)
    }
    return dentro()
}

fora()