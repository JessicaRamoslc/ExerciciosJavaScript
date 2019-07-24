const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa'] // é constante pq nao posso apontar nada para pilotos, isso nao quer dizer que o conteúdo do array é constante, apenas SEU ENDEREÇO.
pilotos.pop()//Remove último elemento do array
console.log(pilotos)
pilotos.push('Verstappen')
console.log(pilotos)
pilotos.shift() // Remove o primeiro elemento 
console.log(pilotos)
pilotos.unshift('Hamilton') // Adiciona no primeiro índice do array
console.log(pilotos)

// splice pode adicionar e remover elementos

// Apenas adicionar:
pilotos.splice(2, 0, 'Bottas', 'Massa') // a partir do índice 2, não removi ninguém (0), adicionei o bottas no [2] e massa no [3]
console.log(pilotos[2])

// Remover a partir do método splice:

pilotos.splice(3, 1) // a partir do índice 3 eu quero remover 1 elemento
console.log(pilotos)

// Método slice: aqui retorna um novo array

const algunsPilotos = pilotos.slice(2) // a partir do índice 2 eu corte os elementos e joguei em uma nova array
console.log(algunsPilotos)

const algunsPilotos1 = pilotos.slice(1, 4) // pega a partir do primeiro até o 4 índice, mas o 4 não vai embora
console.log(algunsPilotos1)