const a = 1
const b = 2
const c = 3

const obj1 = {a: a, b: b, c: c} //aqui permite-se que mude o nome do atributo
const obj2 = {a, b, c} // aqui assume o nome da constante -> mas é uma melhoria na escrita do código

console.log(obj1, obj2)

const nomeAttr = 'nota'
const valorAttr = '7.87'

const obj3 = {}
obj3[nomeAttr] = valorAttr //notação literal de objetos
console.log(obj3)

const obj4 = {[nomeAttr]: valorAttr}
console.log(obj4)

// como definir funções dentro de um objeto literal: 

const obj5 = {
    //forma antiga(chave : valor)
    funcao1: function(){

    }, 
    //forma nova ecmascript, mais reduzida
    funcao2(){

    }
}

console.log(obj5)//percebemos que tem 2 funções, ambas funcionam