console.log(typeof Object)//function
console.log(typeof new Object())//object

const Cliente = function (){}
console.log(typeof Cliente)//function
console.log(typeof new Cliente())//Object a partir da função

class Produto {} // ES 2015 (ES6)
console.log(typeof Produto)//function
console.log(typeof new Produto())//Object

