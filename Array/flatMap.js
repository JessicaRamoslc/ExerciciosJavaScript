//array de objetos:
const escola = [{
    nome: 'turma M1', 
    alunos: [{
        nome: 'Jessica', 
        nota: 9.2
    }, {
        nome: 'Ana', 
        nota: 6.7
    }]
}, {
    nome: 'turma M2', 
    alunos: [{
        nome: 'Joana',
        nota: 7.7
    }, {
        nome: 'Roberta', 
        nota: 7.3
    }]
}]

const getNotaDoAluno = aluno => aluno.nota
const getNotasDaTurma = turma => turma.alunos.map(getNotaDoAluno)

const notas1 = escola.map(getNotasDaTurma)
console.log(notas1)

console.log([].concat(([1,2], [3, 4], 5, [[6, 7]])))

// flatmap: junção de concat com map()
Array.prototype.flatMap = function(callback){
    return Array.prototype.concat.apply([], this.map(callback))
}

const notas2 = escola.flatMap(getNotasDaTurma)
console.log(notas2)