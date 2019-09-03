// Arrow function: sintaxe mais reduzida
//nome da constante = (parâmetros) => return
const soma = (a, b) => a + b // função arrow não tem nome, é sempre anônima
console.log(soma(2, 3))

//Arrow function para trabalhar o conceito this

// const lexico1 = () => console.log(this === exports)
// const lexico2 = lexico1.bind({})//ainda aponta pro exports
// lexico1()
// lexico2()

// parâmetro default -> em cima de um atributo ou função voce pode definir um valor para ele, um valor padrão
function log(texto = 'node'){
    console.log(texto)
}
log()
log('Sou mais forte')//se passar outro parâmetro será mais forte que o valor padrão

// Operador rest/spread : a ideia é ter varios parâmetros na chamada da função e esses parâmetros serão agrupados em um array internamente na função

//leia-se função total recebe um grupo de números:
function total(...numeros){
    let total = 0 
    numeros.forEach(n => total += n)//para cada item: soma
    return total
}
console.log(total(2, 3, 4, 5))//resulta na soma desses elementos. //é rest pois passei os parâmetros espalhados na função e esse operador fez com q eles juntassem em uma estrutura tipo array e então podemos trabalhar com eles, no caso foi uma soma +=
