Array.prototype.forEach2 = function(callback){
    for(let i = 0; i < this.length; i++){
        //1° parametro: proprio valor, 2° é o índice e o terceiro é o array completo(this)
        callback(this[i], i, this)//os 3 parâmetros para o foreach funcionar
    }

}

const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach2(function(nome, indice){

    console.log(`${indice + 1}) ${nome}`)
})