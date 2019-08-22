console.log(soma(3, 4))//essa função é boa pq pode ser chamada antes, pois o JS carrega todas as funções primeiro e aí executa o código

//function declaration(declaração de função)

function soma(x, y){
    return x + y
}

// function expression: função anônima dentro de uma constante

const sub = function( x, y){// é útil por causa de organização de código, se precisar de uma lineariedade. 
    return x - y
}
console.log(soma(3, 4)) //quando tá dentro de uma constante, só posso chamar depois de declarar.

//named function expression: além de ter uma função dentro de uma constante, ela pode ser nomeada(a função)
//forma pouco usada, é interessante pq quando for debugar o código, ela aparece nomeada, mais fácil achar um erro, se houver

const mult = function mult (x, y){
    return x * y
}
console.log(soma(3, 4))//aqui tb só pode chamar depois de declarar






