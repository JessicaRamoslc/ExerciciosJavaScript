// Exemplo de callback no browser (executa no f12)


/* a resposta dessa função abaixo é um array */
document.getElementsByTagName('body')[0].onclick = function (e){
    console.log('O evento ocorreu...')
}