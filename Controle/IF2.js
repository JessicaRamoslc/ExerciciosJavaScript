function teste1(num){
    if(num > 7)
        console.log(num)//o bloco if só leva em consideração a primeira sentença. 
    console.log('Final')//sempre será executado
}

teste1(6)
teste1(8)


//muito cuidado ao colocar ponto e virgula dentro de if, pois
//pode alterar o resultado final!
function teste2(num){
    if(num>7);{//separou o código!
        console.log(num)
    }
}