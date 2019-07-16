//THIS dentro de function Arrow é FIXO, é baseado no contexto no qual a função foi escrita e caso seja chamado "fora do contexto" ela será executada.

function Pessoa(){
    this.idade = 0

    setInterval(() => {//criei uma arrow function diretamente dentro de setInverval
        this.idade++//vou acessar o this.idade e incrementar
        console.log(this.idade)

    }, 1000)
}

new Pessoa

//Ou seja, no arrow, mesmo sendo chamado a partir de um temporizador, e não dentro do contexto Pessoa, o código funcionará normalmente!