//json quer dizer java script object notation
//um object em js não é a mesma coisa que json
const prod1 = {}//par de chaves, significa que ali é objeto. aqui temos um objeto vazio, se fosse colchete seria array
prod1.nome = 'Celular Ultra Mega'// o nome foi criado dinamicamente dentro de um objeto
prod1.preco = 4000.90
prod1['Desconto Legal: '] = 0.40//evitar atributos com espaço!
console.log(prod1)
//Objeto é um conjunto de pares: chave - valor. 
//estrutura aninhada de objetos
const prod2 = {
    nome: 'Camisa Polo',
    preco: 29.00,
    cor: 'rosa', 
    tamanhos: {
        pequeno: 'kids', 
        medio: 'adolescente', 
        grande: 'adulto'
    }
}

console.log(prod2)
