//rodar no console
const a = {name: 'Teste'}
const b = a
//com primitivos o apontamento é por valor
//ao contrário de objetos, etc que o apontamento de variáveis é por referencia


let valor   //não inicializada, mas declarada
console.log(valor)  //undefined
//console.log(valor2) -> is not defined, o valor2 não foi nem declarado
valor = null    //n tem valor dentro dela, nem endereço que aponta um local de memório, mas ela foi definida. Ela está vazia.  Sempre use nulo caso você queira zerar o valor de uma variável!
console.log(valor)
//console.log(valor.toString()) -> ao acessar variável nula, gera problema, o ideal é sempre ter um valor associado
const produto = {}  //o produto está definido, mas o preço não
console.log(produto.preco)  //o valor do preço não está setado, mas não dará erro, ele retorna undefined
produto.preco = 3.50    //agora sim definindo um valor
console.log(produto)    //mostra no console

produto.preco = undefined   //evite atribuir undefined

console.log(!!produto.preco)    //retorna false

console.log(produto)//de fato tem atributo, mas n é definido

