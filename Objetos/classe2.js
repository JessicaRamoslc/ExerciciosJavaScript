class Avo {
    constructor(sobrenome){
        this.sobrenome = sobrenome
    }
}

//extends: forma de dizer que uma classe tem outra classe como protótipo
class Pai extends Avo {
    constructor(sobrenome, profissao = 'Professor'){
    //chamando a superclasse:
        super(sobrenome)
        this.profissao = profissao
        
    
    }
}

class Filho extends Pai {
    constructor(){
        super('Silva')
    }
}

const filho = new Filho
console.log(filho)