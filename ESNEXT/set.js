//Estrutura indexada (array, objeto) e que não aceita repetição

const times = new Set()
times.add('Vasco')
times.add('São Paulo').add('Corinthians').add('Comercial')
times.add('Flamengo')
times.add('Vasco')

console.log(times)
console.log(times.size)
console.log(times.has('Corinthians'))

// if(times.has('Corinthians')){
//     return console.log('TIMÃO')
// }

times.delete('Flamengo')

console.log(times.has('Flamengo'))