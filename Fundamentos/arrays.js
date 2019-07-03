//Em JS o array é heterogêneo, pois é fracamente tipada, vc n tem tipo nas variáveis. vc pode colocar qualquer coisa. e ele cresce de forma flexível. 

const valores = [7.7, 8.9, 6.3, 9.2]//array com 4 posições, separados por vírgulas
console.log(valores[0], valores[3])//passa os índices! e eles retornam os valores que estão nesses índices
console.log(valores[4])//não existe índice [4], mas ele não retorna um erro, retorna 'undefined'
valores[4]=10//adiciona o valor 10 ao índice 4
console.log(valores)//e retorna a array agora com o valor 10 no índice 4 que anteriormente não existia!!
valores[10]=100
console.log(valores)//ele não retorna erro, e diz que até o índice 10, está vazio, retorna que 5 itens estão vazios!!!!
console.log(valores.length)//para ver o tamanho da array(ele inclui os índices vazios)
valores.push({id: 3}, false, null, 'teste')//adicionando valores misturados pra array
console.log(valores)
console.log(valores.length)
console.log(valores.pop())//retira e imprime o ultimo valor do array
console.log(valores)//agora sem o ultimo valor, que foi retirado pelo pop()
delete valores[0]//deleta a partir do indice da array e deixa o lugar vazio
console.log(valores)
console.log(typeof valores)// é um objeto