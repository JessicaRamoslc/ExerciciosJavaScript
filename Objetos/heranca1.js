//prototype é só para funções
const ferrari = {
    modelo: 'F40', 
    velMax: 324
}

const volvo = {
    modelo: 'v40', 
    velMax: 200
}

console.log(ferrari.__proto__)//a partir disso consigo acessar quem seria o protótipo do meu objeto, ou seja, meu objeto pai. Retorna: {} que é um objeto vazio, está presente. 
console.log(ferrari.__proto__ === Object.prototype)//retorna true, pq significa que eu aponto para esse object. 
console.log(volvo.__proto__ === Object.prototype)//true
console.log(Object.prototype.__proto__)//o Object.prototype não tem um nível acima dele. Retorna null

//protótipo é bom para reuso de códigos

function MeuObjeto(){

}

console.log(typeof Object, typeof MeuObjeto)
console.log(Object.prototype, MeuObjeto.prototype)