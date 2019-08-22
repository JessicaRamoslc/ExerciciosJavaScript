function criarProduto(nome, preco){
    return {
        nome, 
        preco, 
        desconto: 0.1
    }
}

console.log(criarProduto('Notebook', 2300.00))
console.log(criarProduto('Celular', 200.00))
console.log(criarProduto('TV', 4600.00))