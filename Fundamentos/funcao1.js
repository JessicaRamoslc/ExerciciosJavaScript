//função sem retorno: 
function imprimirSoma(a, b){
    console.log(a+b)
}

imprimirSoma(2, 3)//retorna 5
imprimirSoma(2)//retorna um NaN
imprimirSoma()//retorna NaN

//Função com retorno

function soma(a, b=0){
    return a + b
}
console.log(soma(2,3))
console.log(soma(2))//ele considera o valor de b, como zero, nos parametros, e retorna 2
