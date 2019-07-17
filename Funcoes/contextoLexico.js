const valor ='Global';

function minhaFuncao(){
    console.log(valor)
}

function exec(){
    const valor = 'Local'
    minhaFuncao()
}

exec()//ele retorna o valor 'global', mesmo tendo declarado uma constante mais próxima dessa função, pois a função minhaFuncao é maior, e ela carrega consigo um contexto