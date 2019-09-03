//instancia o map() a partir do new:
const tecnologias = new Map()
//estrutura chave-valor:
tecnologias.set('react', { framework: false })
tecnologias.set('angular', { framework: true })
console.log(tecnologias)
//para pegar pelo nome do objeto, usa o get
console.log(tecnologias.get('react'))
console.log(tecnologias.get('react').framework)

//estipulando chaves variadas:

const chavesVariadas = new Map([
    [function ( ) {}, 'Função'], 
    [{}, 'Objeto'], 
    [123, 'Numero'], 
])

chavesVariadas.forEach((vl, ch) => {
    console.log(ch, vl)
})

console.log(chavesVariadas.has(123))//has = está ou não contido dentro desse map. No caso do 123, vai retornar true!
//excluir elemento dentro de um map()
chavesVariadas.delete(123)
console.log(chavesVariadas.has(123))
//quantos elementos tem um array
console.log(chavesVariadas.size)

//não pode ter repetição de chaves!