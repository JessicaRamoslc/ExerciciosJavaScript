// Coleção dinâmica de pares chave/valor

const produto = new Object
produto.nome = 'cadeira'
produto['marca do produto'] = 'Generica'
produto.preco = 220

console.log(produto)
delete produto.preco
delete produto['marca do produto']
console.log(produto)

//

const carro = {
    modelo: 'A4', 
    valor: 89000, 
    proprietario: {
        nome: 'Jessica', 
        idade: 28, 
        endereco: {
            logradouro: 'Rua gravataí', 
            numero: 23
        }
    }, 

    condutores: [{
       nome: 'Cris', 
       idade: 31, 
    }, {
        nome: 'Maria', 
        idade: 64
     }], 

     calcularValorSeguro: function(){

     }
}

//acessar atributos a partir da notação ponto
carro.proprietario.endereco.numero = 1000; 
carro['proprietario']['endereco']['logradouro'] = 'Av Gigante'
console.log(carro)
// pode deletar tudo que estiver debaixo do atributo

//delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularValorSeguro

console.log(carro)
console.log(carro.condutores)
console.log(carro.condutores.length)//cuidado ao acessar atributos inexistentes