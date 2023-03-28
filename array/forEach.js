const aprovados = ['Luisa', 'Pablo', 'Zé', 'Júnior']

aprovados.forEach(function(nome, indice, array) { //primeiro elemento da função é o elemento, o segundo é o índice e o tericeiro é o array
    console.log(`${indice + 1}) ${nome}`)
    console.log(array)
});

aprovados.forEach(nome => console.log(nome));

let cont = 1
aprovados.forEach(nome => {
    console.log(`${cont}) ${nome}`)
    cont++
});

const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)