// ES8: Object.values/Object.entries
const obj = {a: 1, b: 2, c: 3}
console.log(Object.keys(obj))//retorna as chaves
console.log(Object.values(obj))//retorna os valores
console.log(Object.entries(obj))//retorna chave-valor(tudo) - uma array de arrays

// Melhorias na Notação Literal

const nome = 'Carla'
const pessoa = {
    nome, 
    //não precisa colocar a palavra function:
    ola(){
        return 'Oi gente'
    }
}

console.log(pessoa.nome, pessoa.ola())

// Class

class Animal {}//criei classe
class Cachorro extends Animal {//herança
    falar(){
        return 'Au au'
    }
}

console.log(new Cachorro().falar())