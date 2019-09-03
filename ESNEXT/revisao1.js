//let e const => palavras reservadas para definir variáveis
//o let tem escopo de bloco. 

{
    var a = 2 //consigo acessar fora do bloco
    let b = 3 //disponivel apenas nesse bloco/contexto
}

//acesso aqui fora:
//console.log(a) 
// não acesso essa variável let pois está fora do contexto!:
//console.log(b)


//atalho para rodar no console do vscode: ctrl + alt + N

/* Template String */

const produto = 'iPad'
console.log(`${produto} é caro`) //interpolação

// Operador destructuring: tirar de uma estrutura(objeto, array, string)
                        //palavra que será desestruturada
const [l, e, ...tras] = "Cod3r"

//imprimir no console.(primeira letra, segunda letra, e o resto - com o operador rest(...))
console.log(l, e, tras) //retorna no console: C o ['d' '3' 'r']

const [x, y] = [1, 2, 3]
console.log(x, y)

//tiro 2 constantes(noome e idade) a partir de uma estrutura array, posso renomear uma constante idade: i ou apenas deixar um nome(nome). Para desestruturar atributos de um objeto eu uso chaves. de uma array eu uso colchetes
const {idade: i, nome} = {nome: 'Ana', idade: '9'}
console.log(i, nome)
