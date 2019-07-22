const sequencia  = {
    _valor: 1, // convenção, para avisar que essa variável será acessada apenas nesse módulo(objeto sequencia)
    get valor(){ return this._valor++},// pegando o _valor e incrementando
    set valor(valor) {
        if(valor > this._valor){//regra de validação
            this._valor = valor
        }
    }
}

console.log(sequencia.valor, sequencia.valor) //já incrementa no segundo
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 900 //não passa pela regra de validação, então não altera o valor