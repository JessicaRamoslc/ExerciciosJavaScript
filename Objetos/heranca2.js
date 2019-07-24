// Criando cadeia de protótipos (prototype chain)
Object.prototype.atributo0 = 'Z' // não faça isso, pois Object é global e pode repercurtir de diversas formas no programa inteiro. 



const avo = { atributo1: 'A'}//O avo tem um atributo prototype do Object
const pai = { __proto__: avo, atributo2: 'B', atributo3: '4'}
const filho = { __proto__: pai, atributo3: 'C'}
console.log(filho.atributo1)//o filho não tem o atributo1, mas ele procuta no pai, que tb não tem, e aí procura no avô. Encontra e retorna o valor: A
console.log(filho.atributo0)//busca do prototype de Object, e acha o valor do atributo.
console.log(filho.atributo3)//o pai tem um atributo3 também, mas ele procura aonde estiver mais perto e retorna o valor MAIS perto. ou seja, retorna 'C' e não '4'. A isso chamamos de sombreamento, isto é, o atributo3 do filho sombreou o atributo3 do pai. 

// mais complexo:

const carro = {
    velAtual: 0, 
    velMax: 200, 
    acelerarMais(delta){
        if(this.velAtual + delta <= this.velMax){
            this.velAtual += delta
        }else{
            this.velAtual = this.velMax
        }
    }, 

    status(){
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const ferrari = {
    modelo: 'F40', 
    velMax: 324 // shaddowing (sombreamento)
}

const volvo = {
    modelo: 'V40', 
    status(){    // fala do modelo atual (contexto)
        return ` ${this.modelo}: ${super.status()}` //sombreando minha função status lá de cima, o super chama o método do meu protótipo
    }
}

// Estabelecendo relação de protótipo: 
                      //objeto, protótipo
Object.setPrototypeOf(ferrari, carro) // nesse momento, estabalece uma relação entre ferrari e carro, ou seja, ferrari tem carro como seu prototipo, é a mesma coisa que usar o __proto__: ....
Object.setPrototypeOf(volvo, carro) // mesma coisa, referenciando carro como protótipo de volvo

console.log(ferrari)
console.log(volvo)

volvo.acelerarMais(100)
console.log(volvo.status())

ferrari.acelerarMais(300)
console.log(ferrari.status())