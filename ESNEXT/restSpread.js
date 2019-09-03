// Operador REST/SPREAD: se for espalhar - spread, se for juntar é rest.
//operador ... 


// rest(juntar)/spread(espalhar)


//usar rest com parâmetro de função


//usar spread com objeto
const funcionario = { nome: 'Maria', salario: 12348.99 }
const clone = { ativo: true, ...funcionario} //estou espalhando as propriedades de funcionário dentro do objeto clone
console.log(clone)

// usar spread com array

const grupoA = ['Joao', 'Pedro', 'Glória']
const grupoFinal = ['Maria', 'rafaela', ...grupoA]
console.log(grupoFinal)