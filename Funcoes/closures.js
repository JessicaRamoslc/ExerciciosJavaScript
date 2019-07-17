// Closure é o escopo quando uma função é declarada.
// Esse escopo permite a função acessar e manipular variáveis externas à função.

// Contexto léxico em ação!:

const x = 'Global';

function fora(){
    const x = 'Local'
    function dentro(){
        return x
    }
    return dentro()
}

const minhaFuncao = fora()

console.log(minhaFuncao)//retorna o valor  'local' pois o lugar/escopo aonde a função foi declarada é determinante para agrupar os valores próximo a ela. 
