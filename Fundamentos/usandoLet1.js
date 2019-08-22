/*
*variavel var tem escopo global e de função
* variável let tem escopo global, 
*de função 
*e de bloco*/

//o JS sempre procura a variavel que está no escopo menor, está tem prioridade, aí depois vem a var global. 


var numero = 1; 
{
    let numero = 2; 
    console.log('dentro = ', numero)
}

console.log('fora = ', numero)