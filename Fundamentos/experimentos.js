let a = 3; 

global.b = 123; 

this.c = 456; 
this.d = false; 
this.e = 'teste';

console.log(a)
console.log(global.b)
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports === this)
console.log(module.exports)

//criando uma variável maluca: ser var e let!:
abc = 3; //não faça isso!
console.log(global.abc)

/* importante

a) entenda o runtime(aonde vc está executando o código)
b) Sempre que possível, fuja do escopo global, se precisar, trabalhe com constante

*/