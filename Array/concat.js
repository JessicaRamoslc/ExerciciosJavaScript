const filhas = ['Valesca', 'Vania']
const filhos = [ 'Uesley', 'Uescley']
const todos = filhas.concat(filhos, "fulano") //posso passar vários parametros para o concat
console.log(todos)

console.log([].concat([1,2], [3, 4], 5, [[6, 7]]))