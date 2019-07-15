function tratarErroELancar(erro){
    throw new Error('erro encontrado')//é como lançamos o erro!
}

function imprimirNomeGritado(obj){
    //try: bloco que pode trazer algum tipo de erro:
    try{
        console.log(obje.name.toUpperCase() +'!!!!')
    }catch(e){//tratar no catch, ou relançar o erro... 
        tratarErroELancar(e)
    }finally{//finally será executado ao final do try ou catch
        console.log('Final')
    }
}

const obj = { nome: 'Jessica'}
imprimirNomeGritado(obj)