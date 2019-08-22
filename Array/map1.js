// Map é o for com propósito

const nums = [1, 2, 3, 4, 5]

// FOR com propósito

let resultado = nums.map(function(e){
    return e * 2; 
})

// o resultado é um array de mesmo tamanho. Lembrando o Map não altera o array atual, ele gera outro array que aí sím é modificado. 
console.log(resultado, nums)

const soma10 = e => e +10 //função arrow
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`


//Maps encadeados:

resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado) // transformando valores suscessivamente