let isAtivo = false
console.log(isAtivo)//retorna false

isAtivo = true

console.log(isAtivo)//retorna true

//o let me permite mudar as variáveis

isAtivo = 1

console.log(isAtivo != 1)//retorna false

console.log(!!isAtivo)//retorna true, duas negações

console.log('os verdadeiros...')
console.log(!!3)//não não 3 é verdadeiro
console.log(!!-1)//não não -1 é verdadeiro
console.log(!!' ')//não não string, mas deve ter um espaço pelo menos,  é vdd
console.log(!![])//não não array, mesmo em branco é vdd
console.log(!!Infinity)//não não infinito é verdadeiro
console.log(!!(isAtivo=true))//atribui valor a variável isAtivo. Aqui é diferente com 0

console.log('os falsos...')
console.log(!!0)//0 retorna false
console.log(!!'')//string vazia retorna false
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('Pra finalizar...')
//uso de variáveis booleanas: 
console.log(!!'' || null || 'EPA')//retorna EPA, pq é o único valor verdadeiro, ele retorna o valor verdadeiro que encontra
