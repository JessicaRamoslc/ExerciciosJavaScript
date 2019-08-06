//para percorrer um array. é uma função. transformar um array em 1 unico elemento, ou em 1 único array. é uma acumulação. 
// Sempre o primeiro elemento é o acumulador e o segundo o array atual:

const alunos = [
    { nome: 'Joao', nota: 7.3, bolsista: false},
    { nome: 'Maria', nota: 9.2, bolsista: true},
    { nome: 'Pedro', nota: 9.8, bolsista: false},
    { nome: 'Ana', nota: 8.7, bolsista: true}
]

// Extrair dos alunos, apenas as notas:

console.log(alunos.map(a => a.nota))
const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual){
    console.log(acumulador, atual)
    return acumulador + atual
}, 0)

console.log(resultado)//soma de todas as notas