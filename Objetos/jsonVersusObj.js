const obj = { a: 1, b: 2, c: 3, soma(){ return a + b + c}}
console.log(JSON.stringify(obj)) // retorna em formato de dados, a função é excluída

// Objeto gerado a partir de um texto: 
console.log(JSON.parse('{"a": 1, "b": 2, "c": 3}')) //JSON deve ser escrito com aspas DUPLAS

console.log(JSON.parse('{"a": 1.7, "b": "string", "c": true, "d": {}, "e": [] }')) // formatos válidos para JSON, atributos devem estar delimitados por aspas duplas, e qualquer texto(string) tbm por aspas duplas


