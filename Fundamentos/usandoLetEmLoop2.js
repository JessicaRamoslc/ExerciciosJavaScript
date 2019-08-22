const funcs = [] 
//o let tem a memória do escopo de bloco, então ele lembra que o i é mutável e vai variando. 
for (let i = 0; i < 10; i++){
    funcs.push(function(){
        console.log(i)
    })
}
funcs[2]()//agora sim, em let imprime o valor no índice 2.
funcs[8]()