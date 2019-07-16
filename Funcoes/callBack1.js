// Quer dizer "chamar de volta"

const fabricantes = ['Mercedez' , 'Audi', 'BMW']

function imprimir(nome, indice){
    console.log(`${indice +1}. ${nome}`)
}

fabricantes.forEach(imprimir)//fiz o callback da função imprimir!!!!!!!

//callback chama a função de volta quando ocorre um evento, nesse caso era o loop do foreach, quando ele encontrava o elemento, ele trazia de volta os parâmetros.





