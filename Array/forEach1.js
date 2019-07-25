// Forma para percorrer uma array
const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

//passar uma função callback para o foreach, recebe 3 parâmetros(nome, índice, array), mas voce pode suprimir quantos parâmetro quiser!
//o índice sempre é passado como segundo parâmetro, então o primeiro é obrigatório, o array é um terceiro parâmetro passado para o forEach
aprovados.forEach(function(nome, indice, /*array*/) {
    console.log(`${indice + 1}) ${nome}`)
    //console.log(array)
})

console.log("----------------------")

// passando uma arrow function com um único parâmetro:
aprovados.forEach(nome => console.log(nome))
console.log("----------------------")

// armazenar função em uma constante
const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)