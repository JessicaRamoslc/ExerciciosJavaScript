const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

// Sem callback: 

const notasBaixas1 = []
for(let i in notas){
    if(notas[i] < 7){
        //push = adiciona
        notasBaixas1.push(notas[i])
    }
} 
console.log(notasBaixas1)

// Com Callback: 
//filter: função de filtrar em um array
const notasBaixas2 = notas.filter(function(nota){
    return nota < 7 //aqui retorna true or false, se true, entra no array (notasBaixas)
})
console.log(notasBaixas2)

//usando arrow: 

notasBaixas3 = notas.filter(nota => nota < 7)
console.log(notasBaixas3)