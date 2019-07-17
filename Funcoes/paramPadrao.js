// Estratégia 1 para gerar valor padrão
function soma1(a, b, c){
    a = a || 1 //a é igual ao valor passado, senão passar vale 1
    b = b || 1 //Estratégia de trazer um valor pra variável de qualquer forma
    c = c || 1

    return a + b + c
}

console.log(soma1(), soma1(3), soma1(1, 2, 3), soma1(0, 0, 0))//no caso do zero, é valor inválido para esta operação, então retornará a soma 1 + 1 + 1



// Estratégia 2, 3 e 4 para gerar valor padrão

function soma2(a, b, c){
    //Estratégia: Usando operador ternário:
    a = a !== undefined ? a : 1 //se a for estritamente diferente de undefined
    //outra estratégia é o arguments:
    b = 1 in arguments ? b : 1 //se dentro de arguments existir o índice 1 pegue o valor, se não o valor será 1, se fosse a seria índice 0 no lugar de 1, se fosse b seria indice 2 no lugar de 1, é a partir de ÍNDICES da array (arguments)
     //outra estratégia: testando se uma variável passada is NaN:
    c = isNaN(c) ? 1 : c // se for: retorna o valor padrão(1), mas caso seja um número, retorna c(que é o numero), de todas as estratégias a mais segura é esta(depois do es2015)
    return a + b + c
}

console.log(soma2(), soma2(3), soma2(1, 2, 3), soma2(0, 0, 0))//aqui o zero é lido como número

// valor padrão do es2015
//forma mais adequada.
function soma3(a = 1, b = 1, c = 1){
    return a + b + c
}

console.log(soma3(), soma3(3), soma3(1, 2, 3), soma3(0, 0, 0))