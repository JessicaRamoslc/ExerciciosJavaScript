const Pessoa = {nome: 'Joao'}
Pessoa.nome = 'Pedro'
console.log(Pessoa)//o que é constante é a Pessoa, e não seu valor


// tentar fazer com q o objeto aponte para outro endereço:
//pessoa = { nome: 'Ana'} // mas não posso alterar como objeto

Object.freeze(Pessoa)//congelei o objeto

Pessoa.nome = 'Maria'
console.log(Pessoa.nome) //continua como Pedro! 

// se eu quisesse congelar o objeto logo ao instanciar:

const pessoaConstante = Object.freeze({nome: 'Jessica'})
pessoaConstante.nome = 'Joana'
console.log(pessoaConstante)// Congelou como 'Jessica'