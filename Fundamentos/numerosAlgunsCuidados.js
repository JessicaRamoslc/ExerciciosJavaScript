console.log(7/0)//isso resulta em infinito. que é um type de number. 

/*no caso abaixo, a operação dá resultado correto, pois o JS entende que como há um divisor, 
ele pega o valor da string, se ele reconhecer como numérico, e converte em number */
console.log("10"/2) 
console.log("show"*2)//resultado é NaN (Not A Number)
console.log(0.1 + 0.7)//não retorna 0.8, pois n tem especificação necessária, e gera sim algumas imprecisões
//console.log(10.toString()) aqui gera um erro
console.log(10).toFixed(2)//duas casas decimais, colocando o 10 direto(chamamos literal, quando não há variável), sem guarda-lo em variavel, isso dá certo.

