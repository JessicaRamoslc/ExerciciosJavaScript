/* 

Objetivo: ser mais curta/sintaxe reduzida e ter um this associado ao contexto no qual a função foi escrita. 

*/


// Função convencional: 
let dobro = function(a){//com let consigo sobrescrever
    return 2 * a
}

// Função com Arrow:

dobro = (a) => {
   return 2 * a
}

console.log(dobro(3))

// Na função arrow, se voce tiver um único parâmetro, pode tirar os parênteses e chaves e return:

dobro = a => 2 * a //return fica implícito.  
console.log(dobro(Math.PI))
//outro exemplo: 
let ola = function(){
    return 'Olá'
}
console.log(ola())
//função arrow: 
ola = () => 'Olá'//como a função não tem parâmetros, precisa dos parenteses sim. OU _ (que seria o parâmetro vazio), ficaria: ola = _ => 'Olá'
console.log(ola())

