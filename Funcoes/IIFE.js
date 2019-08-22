// IIFE -> Immediately Invoked Function Expression
// Função autoInvocada

//dentro de parênteses declaro uma function anônima

(function(){
    console.log('Será executado na hora')
    console.log('Foge do escopo mais abrangente')
})()//no final chamo com parênteses, pois é uma função