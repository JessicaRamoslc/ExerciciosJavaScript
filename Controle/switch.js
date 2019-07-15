//constante que recebe função, que recebe uma nota:
const imprimirResultado = function(nota){
    switch(Math.floor(nota)){//arredondar p/ baixo
        case 10: 
        case 9: 
            console.log('Quadro de honra')//se for 9 ou 10
            break;
        case 8: case 7: //pode ser na mesma linha
            console.log('Aprovado')
            break; 
        case 6: case 5: case 4: 
            console.log('Recuperação')
            break;
        case 3: case 2: case 1: case 0: 
            console.log('Reprovado')
            break;
        default:
            console.log('Nota Inválida')
    }       

}

imprimirResultado(10)
imprimirResultado(8.9)//arredonda para 8
imprimirResultado(6.55)
imprimirResultado(2.4)
imprimirResultado(-1)
imprimirResultado(11)

//switch é feito para multiplas seleçoes