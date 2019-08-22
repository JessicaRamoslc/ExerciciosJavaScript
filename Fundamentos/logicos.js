//operandos E (&&)
/*
 v && v -> v
 v && f -> f
 f && ? -> f

 */

 //Operando OU (||)
 /*
 
 V || ? -> V
 V || F -> V
 V || V -> V
 F || F -> F
 F || ? -> ?
 
 */

 //o 'OU EXCLUSIVO' -> os 2 obrigatoriamente precisam ser diferentes, se for igual dá falso

 //NEGAÇÃO LÓGICA(operador unário)
 /*
 !v = f
 !f = v
 */

 function compras(trabalho1, trabalho2){
     const comprarSorvete = trabalho1 || trabalho2;
     const comprarTV50 = trabalho1 && trabalho2;
     //const comprarTV32 = !!(trabalho1 ^ trabalho2) //bitwise xor
     const comprarTV32 = trabalho1 != trabalho2; //(OU EXCLUSIVO pode ser simulado com negação)
     const manterSaudavel = !comprarSorvete;//operador unário

     return {comprarSorvete, comprarTV50, comprarTV32, manterSaudavel}//criei objeto(formação chave - valor)
 }

 console.log(compras(true, true))
 console.log(compras(true, false))
 console.log(compras(false, true))
 console.log(compras(false, false))