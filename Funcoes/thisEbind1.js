const pessoa = {
    saudacao: 'Bom dia!', 
    falar(){//para acessar nesse contexto eu preciso do this
        console.log(this.saudacao)
    }
}

pessoa.falar()

//armazenar função falar em uma variável

const falar = pessoa.falar
falar()//conflito ente programação funcional e OO

const falarDePessoa = pessoa.falar.bind(pessoa)//passando pessoa como argumento da função bind, eu consigo acessar fora do contexto
falarDePessoa()
//o bind serve para amarrar um determinado objeto, para ele ser o dono da execução daquele método