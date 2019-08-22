 function soma(){
     let soma = 0
     for (i in arguments){//arguments como array
        soma+= arguments[i]
     }
     return soma
 }

 console.log(soma())
 console.log(soma(1.2, 3.4, 2.2))
//  console.log(soma(1.1, 2.2, "Teste"))//concatena
//  console.log(soma('a', 'b', 'c'))//concatena com o 0 que já está em soma

 