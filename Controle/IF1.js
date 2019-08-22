function soBoaNoticia(nota){
    if(nota >= 7){
        console.log('Aprovado com '+ nota)
    }
}

soBoaNoticia(8.1)
soBoaNoticia(6.1)

function seForVerdadeEuFalo(valor){
    if(valor){
        console.log('É verdade... ' + valor)
    }
}

seForVerdadeEuFalo()//vazio
seForVerdadeEuFalo(null)
seForVerdadeEuFalo(undefined)
seForVerdadeEuFalo(NaN)
seForVerdadeEuFalo('')//string vazia
seForVerdadeEuFalo(0)//zero é o unico numero que retorna false
seForVerdadeEuFalo(-1)
seForVerdadeEuFalo(' ')//string com um espaço
seForVerdadeEuFalo('?')
seForVerdadeEuFalo([])//array vazia
seForVerdadeEuFalo([1, 2])
seForVerdadeEuFalo({})//objeto