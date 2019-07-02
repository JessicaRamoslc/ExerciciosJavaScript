const escola = 'cod3r'//pode ser aspas duplas, ou simples, ou crase(mas aí é template)

//Aplicando várias funções em cima dessa constante:

console.log(escola.charAt(4))//buscar a letra que se encontra no índice 4
console.log(escola.charAt(5))//nesse caso não há  nada no índice 5, mas o JS retorna um valor nulo. e não um erro!
console.log(escola.charCodeAt(3))//pega o valo na tabela unicode.
console.log(escola.indexOf('3'))//mostra em qual índice o 3 está.
console.log(escola.substring(1))//corta a partir do índice, incluindo ele mesmo. retornou: od3r
console.log(escola.substring(0,3))//passa o primeiro e o último, para cortar, retorna: cod, isto é, não pega o ultimo
console.log('Escola '.concat(escola).concat('!'))//concatenação
console.log(escola.replace(3, 'e'))//substitui o primeiro parâmetro passado pelo segundo. Retorna: coder
console.log(escola.replace(/\w/g, 'e'))//utiliza o regex, substitui todas as letras por e. 
//convertendo para array, que é uma estrutura linear: 
console.log('maria, joao, jessica'.split(','))//chamei função split, e passei de separador a virgula como parâmetro