let num = 1; 
let num2 = 2; 

num1++ //pós fixada (incremento)
console.log(num1);

--num1// pré fixada (decremento), é executado antes
console.log(++num1=== num2--)//true, pq o num2 só vai decrementar DEPOIS da comparação
console.log(num1 === num2)//false

//obs: evite colocar incrementos/decrementos em uma comparação, fica de dificil leitura e mais confuso. 
