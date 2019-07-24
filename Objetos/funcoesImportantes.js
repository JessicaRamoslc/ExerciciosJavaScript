// notação literal: 
const pessoa = {
    nome: 'Rebeca', 
    idade: '23', 
    peso: 69
}

console.log(Object.keys(pessoa)) // pega todas as chaves do objeto
console.log(Object.values(pessoa)) // pega os valores
console.log(Object.entries(pessoa)) // pega todos os registros em forma de array
//para percorrer uma array como esta:
Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
});

// para definir uma propriedade do objeto
                                //nome da propriedade que quero criar, entre aspas:
Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true, // passível de ser listada
    writable: false, // não pode ser modificada
    value: '01/01/2019' //já seta o valor aqui
})

pessoa.dataNascimento = '01/01/2017' 
console.log(pessoa.dataNascimento) // não aceita ser sobrescrita/modificada
console.log(Object.keys(pessoa))

// Object.assign (ECMAScript 2015)

const dest = { a: 1} // objeto destino
const o1 = { b: 2}
const o2 = { c: 3, a: 4}
                        //primeiro parâmetro: objeto destino (dest)
                        //e tudo que vier depois da virgula (o1 e 02 e assim por diante) será adicionado neste objeto de destino: 
const obj = Object.assign(dest, o1, o2) // seria a concatenação de todos os atributos que vc passou, inclusive podendo sobrescrever valores já instanciados no objeto de destino

Object.freeze(obj)
obj.c = 1234
console.log(obj)