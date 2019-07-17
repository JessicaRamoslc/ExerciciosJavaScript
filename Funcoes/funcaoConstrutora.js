function Carro(velocidadeMaxima = 200, delta = 5){
    //atributo privado: apenas no escopo carro
    let velocidadeAtual = 0; 

    //método público a partir do this

    this.acelerar = function(){
        if(velocidadeAtual + delta <= velocidadeMaxima){
            velocidadeAtual += delta
        }else {
            velocidadeAtual = velocidadeMaxima;
        }
    }

    //método público dentro da estrutura carro
    this.getVelocidadeAtual = function(){//o this é o que torna público
        return velocidadeAtual; 
    }
}

const uno = new Carro
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(120, 20)
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())