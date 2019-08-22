function MeuObjeto(){

}
console.log(MeuObjeto.prototype)

const obj1 = new MeuObjeto //criando objeto a partir de uma função
const obj2 = new MeuObjeto

console.log(obj1.__proto__ === obj2.__proto__) //os 2 objs apontam para o mesmo prototype padrão de Object(global)
//todos os objetos criados a partir de uma mesma função construtora apontam para o mesmo local

//função construtora 
console.log(MeuObjeto.prototype === obj1.__proto__) //true

MeuObjeto.prototype.nome = 'Anônimo' //atribuindo valores diretamente através do prototype da função
MeuObjeto.prototype.falar = function() {
    console.log(`Bom dia, meu nome é ${this.nome}`)
}

obj1.falar()

obj2.nome = 'Rafa'
obj2.falar()

const obj3 = {}
obj3.__proto__ = MeuObjeto.prototype
obj3.nome = 'Obj3'
obj3.falar()

// Resumindo...

console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype)//quando um objeto é instanciado a partir da função, eles são iguais
console.log(MeuObjeto.__proto__ === Function.prototype) // true
console.log(Function.prototype.__proto__ === Object.prototype)//true
console.log(Object.prototype.__proto__ === null) // true


