// Chamando funções: 
function getPreco(imposto = 0, moeda = 'R$'){
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 4589, 
    desc: 0.15, 
    getPreco

}

global.preco = 20
global.desc = 0.1
console.log(getPreco())//chamada direta
console.log(produto.getPreco())//chamada a partir de um objeto

const Carro = { preco: 49990, desc: 0.20}
console.log(getPreco.call(Carro))//call para chamar a função, e passar como contexto Carro
console.log(getPreco.apply(Carro))//apply tb vai executar a função
console.log(getPreco.call(Carro, 0.17, '$'))//chamei a função mas posso passar outros valores direto nos parâmetros. primeiro parâmetro é sempre o contexto(Carro), 0.17 é o desconto, '$' = é a moeda
console.log(getPreco.apply(global, [0.17, '$']))//os parâmetros dessa vez eu passo dentro de um array