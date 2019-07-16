// Voce pode nomear funções ou criar funções anônimas ou pode armazenar essas funções anônimas dentro de uma variável
// Função anônima significa Função Sem Nome!

const soma = function(x, y){
    return x + y
}

const imprimirResultado = function (a, b, operacao = soma){
    console.log(operacao(a, b))
}

imprimirResultado(3, 4)//como não passo um terceiro valor, ele assume a operação soma como default(padrão)
imprimirResultado(3, 4, soma)//dá o mesmo resultado, mas agora passando todos os parâmetros
imprimirResultado(3, 4, function (x, y){//passa a usar a operação da função anônima, no lugar da soma!
    return x - y
})
//arrow function: 
imprimirResultado(3, 4, (x, y) => x * y)//retorna 12 como resultado. função arrow é sempre anonima. 

//função anonima dentro de objeto:

const pessoa = {
    falar: function(){
        console.log("oie")
    }
}

pessoa.falar()