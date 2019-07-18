class Pessoa {
    constructor(nome){
        this.nome = nome
    }

    falar(){
        console.log(`Meu nome é ${this.nome}`)//haverá um problema com o this, de escopo
    }
}

const p1 = new Pessoa('Joao')
p1.falar()


// factory: funciona melhor, pois tem escopo mais abrangente

const criarPessoa = nome =>{
    return{
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const p2 = criarPessoa('joao')
p2.falar()

