// Object.preventExtensions (previne o aumento de atributos, pode diminuir, mas aumentar não)

const produto = Object.preventExtensions({//não conseguirei adicionar mais nenhum atributo a não ser estes que estão abaixo:
    nome: 'qualquer', preco: 1.99, tag: 'promoçao'
})

console.log('Extensível: ', Object.isExtensible(produto)) //false
produto.nome = 'borracha' //consigo sobrescrever
produto.descricao = 'borracha escolar branca' //descricao n existe no objeto original, então não surtirá efeito essa linha de código
delete produto.tag //consigo deletar
console.log(produto)

// Object.seal (vem de selar)

const pessoa = {
    nome: 'Juliana', 
    idade: 35
}
Object.seal(pessoa)//o seal não deixa adicionar nem excluir, mas pode modificar o que já existe
console.log('Selado: ', Object.isSealed(pessoa)) // true

pessoa.nome = 'jessica'
delete pessoa.nome
pessoa.sobrenome = 'Silva'

console.log(pessoa)

// Object.freeze = selado + valores constantes
// tudo aqui é congelado e constante. 
