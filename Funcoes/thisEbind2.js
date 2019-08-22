function Pessoa(){
    this.idade = 0
    const self = this//por padrão chama self a constante, para poder chama-la em seguida, assim o this NÃO VARIA. é uma forma de driblar a inconstancia de this
    //dispara uma outra função a partir de um intervalo determinado
    setInterval(function(){
        self.idade++//NÃO aponta para pessoa, pois quem estão disparando é um temporizador
        console.log(self.idade)//ao invés de ser this.idade
        //amarra o this de Pessoa
    }/*.bind(this)*/,1000)//intervalo de 1 segundo
}

new Pessoa

//RESUMO: ou usar BIND ou criando a constante SELF(mas pode ser outro nome, mas por padrão é self) e utilizando a no lugar de this!