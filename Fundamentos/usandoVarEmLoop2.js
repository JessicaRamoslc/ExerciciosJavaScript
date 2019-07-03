const funcs = [] //poderia ser com var também
//com var o i ficou com 10 em memória. não consegue puxar do bloco de cima. 
for (var i = 0; i < 10; i++){
    funcs.push(function(){
        console.log(i)
    })
}
funcs[2]()//Não imprime, pois ele pega o valor onde o for acaba, e i vale 10. Isso é diferente em let

