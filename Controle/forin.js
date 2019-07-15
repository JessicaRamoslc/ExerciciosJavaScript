//FOR IN
//pode ser feito em cima de array

const notas = [6.7, 7.4, 9.8, 8.1, 7.7]

//o for/in vai te dar o índice

for(let i in notas){
    console.log(i, notas[i])
}

//e em cima de objeto:

const pessoa = {
    nome: 'jessica', 
    sobrenome: 'ramos', 
    idade: 28, 
    peso: 70
}

for(let atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)
}