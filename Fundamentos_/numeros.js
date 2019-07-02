const peso1 = 1.0//o tipo number em JS serve para inteiro ou quebrado(double em c#)
const peso2 = Number('2.2')//transformar string em número, é um número quebrado! 

console.log(peso1, peso2)//imprimindo no console

console.log(Number.isInteger(peso1))//usando função para saber se é valor inteiro
console.log(Number.isInteger(peso2))//false, pois 2.2 é quebrado né

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2))//Imprimindo com 2 casas decimais
console.log(media.toString())//convertendo para string
console.log(media.toString(2))//converte em binário
console.log(typeof media)
console.log(typeof Number)//Number com maiúscula é uma função!

