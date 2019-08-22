// Factory é uma função fábrica, isto é, para evitar repetição do mesmo código, faz-se factory, que é uma função que sempre retorna um objeto!

//factory simples:
function criarPessoa(){
    return{
        nome: 'Jessica', 
        sobrenome: 'Ramos'
    }
}

console.log(criarPessoa())