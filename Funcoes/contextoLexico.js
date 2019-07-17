const valor ='Global';

function minhaFuncao(){
    console.log(valor)
}

function exec(){
    const valor = 'Local'
    minhaFuncao()
}

exec()//ele retorna o valor 'global', mesmo tendo declarado uma constante mais próxima dessa função, pois a função minhaFuncao é maior, e ela carrega consigo um contexto. Ou seja, ela não vai procurar no local de execução, mas sim no local que foi criada, por isso ela pega a constante no escopo maior. 