//Armazenando uma função em uma variável:
//Usando uma function anônima, isto é, ela não tem nome!
const imprimirSoma = function(a,b){
    console.log(a + b)
}

imprimirSoma(2, 3)

//Armazenando uma função Arrow em uma variável: 
//A seta é uma forma reduzida de falar função: 
const soma = (a, b) => {
    return a + b; 
}
console.log(soma(2,3))

//retorno implicito
//Atenção, se não tenho chaves em uma função, isso significa que terá apenas uma única linha! Como exemplo abaixo. Que é outra forma de escrever uma função. Se eu tivesse apenas 1 parâmetro, não haveria necessidade de colocar os parênteses.              

                //arrow function
const subtracao = (a,b) => a - b
console.log(subtracao(2,3))

//arrow function de uma linha:
const imprimir2 = a => console.log(a)
imprimir2("Legal!!!")

