let comparaComThis = function(param){
    console.log(this === param)
}

comparaComThis(global)//retorna true

const obj = {} //objeto
comparaComThis = comparaComThis.bind(obj)//agora o this vai se referenciar ao obj, por causa do bind
comparaComThis(global)//retorna false
comparaComThis(obj)//o this agora aponta para o obj, por causa do BIND!

// Agora com arrow function: 

let comparaComThisArrow = param => console.log(this === param)

comparaComThisArrow(global)//no caso de uma arrow function o this não é global
comparaComThisArrow(module.exports)//pro node cada módulo é isolado, então o this está aqui neste módulo, o this sera igual ao this.

//bind dentro de uma função arrow pra ver se eu consigo mudar a referencia do this
comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj)//retorn false, ou seja, vc não consegue mudar para onde o this aponta através do bind


/*

let comparaComThis = function(param){
    console.log(this === param)
}
 
comparaComThis(global)
//Console: true
Nesse primeiro caso aqui ele vai retornar true pois esse global é como o próprio nome diz, é um objeto global. Depois verifica se o this e o global são estritamente iguais e exibe true, pois ambos estão nesse contexto global (tanto o this quanto o global). No navegador segue o mesmo estilo, só que ao invés de usarmos global usaremos o window que é a mesma coisa (no contexto do navegador).



Vamos para a próxima implementação:

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
//Console: false
Tá, mas por que isso aqui da false? A resposta é simples, nesse exemplo o comparaComThis irá ser apontado para o obj (nessa linha aqui comparaComThis = comparaComThis.bind(obj)) e não mais para o escopo global, ou seja, quando passamos o objeto global "global" e comparamos com o "this" ele da false, já que o escopo foi alterado.



E agora, por que isso dá true?

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(obj)
//Console: true
Pois agora estamos passando o obj (Vale lembrar que agora estamos referenciando a função para o obj e não mais para o escopo global) e consequentemente quando passamos o obj ele retorna true.



Agora vamos para as ArrowFunction:

let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global)
//Console: false
Ele vai imprimir false aqui, pois esse this se referencia ao seu próprio modulo (coisa da arrow function) e não ao objeto global da aplicação, sacou? Para fazer isso retornar true pra gente é só fazer isso:

let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(module.exports)
//Console: true
 
let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(this)
//Console: true
Isso quer dizer que estamos referenciando a esse mesmo modulo da arrow function (digamos que estamos referenciando ao seu escopo local da função). As duas implementações acima estão corretas.



E por fim, o Léo tenta forçar a mudança de referencia da Arrow function para vermos o que acontece, só que como ele fala no vídeo, o comportamento da arrow permanece intacta, ou seja, se tentarmos isso aqui:

let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj)
//Console: false
Não vai dar certo, pois não podemos usar o bind para mudar esse escopo da arrow.
*/