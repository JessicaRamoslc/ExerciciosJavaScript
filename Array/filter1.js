// Serve para filtrar uma array. é uma função callback que retorna true or false

const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true }, 
    { nome: 'iPad Pro', preco: 4199, fragil: true }, 
    { nome: 'Copo de vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de plástico', preco: 18.99, fragil: false }
]

console.log(produtos.filter(function(p){
    return p.preco > 40.0 //precisa ser true or false
}))

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil

console.log(produtos.filter(caro).filter(fragil))