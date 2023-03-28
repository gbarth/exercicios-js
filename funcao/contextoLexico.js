const valor = 'Global'

//a função vai primeiro verificar se ha um parametro "valor" definido nela(que seria o contexto mais próximo), se não houver ela usará o que está definido no contexto onde ela está inserida
function minhaFuncao() {
    console.log(valor)
}

minhaFuncao()

function exec() {
    const valor = 'Local'
    minhaFuncao()
}

exec()