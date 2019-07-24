//toda função tem um atributo chamado prototype
console.log(typeof String) // string é função
console.log(typeof Array)  // Array é função
console.log(typeof Object) // Função tb

String.prototype.reverse = function(){
    return this.split('').reverse()//reverte(inverte) o array ao contrário
}

console.log('Escola Cod3r'.reverse()) //reverteu todo o texto

Array.prototype.first = function(){
    return this[0]
}

console.log([1, 2, 3, 4, 5].first()) // retorna o valor 1
console.log(['a', 'b', 'c'].first()) // retorna o valor 'a'

String.prototype.toString = function(){
    return 'Lascou tudo'
}

console.log('Escola Cod3r'.reverse())
