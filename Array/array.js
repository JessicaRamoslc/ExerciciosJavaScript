// Array na verdade é um objeto

console.log(typeof Array) //function
console.log(typeof new Array) // object
//array literal:
console.log(typeof []) //object

// A boa prática diz que devo trabalhar com objetos homogêneos dentro de uma array, apesar de array em JS aceitar varios tipos de dados (string, boolean, numbers, etc)

// Array em JS é dinâmico e não estático. Pode ser manipulado de forma flexível. 

// Criando array: 

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

//criando array na notação literal e reatribuindo (consigo reatribuir pois usei let) valores a mesma array

aprovados = ['Bia', 'Carlos', 'Ana']
//array é uma estrutura indexada:
console.log(aprovados[0])// retorna 'Bia'
console.log(aprovados[3]) //retorna undefined, pois só tenho 3 elementos

aprovados[3] = 'Paulo' //forma válida de adicionar um novo elemento no array, assim é mais comum para substituir a partir de um índice já existente
console.log(aprovados)
aprovados.push('Jessica')//forma mais usual de adicionar ao último índice do array
console.log(aprovados)
console.log(aprovados.length) //saber o tamanho do array

aprovados[9] = 'Rafael' 
console.log(aprovados.length)// vai retornar 10 elementos, pois como adicionei no índice 9, todos os elementos anteriores estarão lá, porem undefined
console.log(aprovados[7]) //undefined
console.log(aprovados[7] === null) // falso, pois existe, mas não foi definido
console.log(aprovados) // <4 empty items> que são os undefined, antes do 'Rafael' que está no índice 9, ao todo 10 elementos no array

aprovados.sort() // ordena os elementos
console.log(aprovados)

delete aprovados[1] // apagando índice 1 no array, mas o local fica 'empty', e esse índice agora é undefined
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana'] // sombreando novamente a array
aprovados.splice(1,2, 'Elemento1', 'Elemento2')//serve para remover, adicionar, ou ambos ao mesmo tempo, nesse caso, vou no índice 1 e removo o 'Carlos' e 'Ana'. Sintaxe: array.splice(y, x) => Ou seja: A partir do índice (y) ele exclui (x) elementos. Ao final adicionei 2 elementos. Se não quisesse excluir nada, colocaria no segundo parâmetro(x) o valor 0, e continua o código normalmente.
console.log(aprovados)
