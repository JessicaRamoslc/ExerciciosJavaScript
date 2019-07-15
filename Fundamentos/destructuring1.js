//OPERADOR DE DESESTRUTURAÇÃO: 

/*
Tem 2 formas de escrita: 
 - quando voce trabalha no âmbito de objeto, vc usa chaves
 - no âmbito de array voce usa o colchete.
*/

//novo recurso do ES2015

const pessoa = {
    nome: 'ana', 
    idade: 5,
    endereco: {
        logradouro: 'rua abc',
        numero: 123
    }
}

const {nome, idade} = pessoa //as chaves aqui simbolizam a desestruturação
console.log(nome, idade)

 const {nome: n, idade: i} = pessoa //aqui estou criando novas variáveis (n e i), retirando do objeto pessoa. 
 console.log(n, i)//retorna ana 5

 const {sobrenome, bemHumorada = true} = pessoa
 console.log(sobrenome, bemHumorada)

 const { endereco: {logradouro, numero, cep } } = pessoa
 console.log(logradouro, numero, cep)

