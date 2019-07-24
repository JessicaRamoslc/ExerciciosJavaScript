const pai = { nome: 'Pedro', corCabelo: 'preto'}

const filha1 = Object.create(pai) // criou um novo objeto tendo como protótipo o objeto pai

console.log(filha1.nome) // traz 'Pedro'

//agora vou alterar o objeto filha1: 

filha1.nome = 'Ana'
console.log(filha1.nome, filha1.corCabelo) 
                                 //2° parâmetro é um objeto:
const filha2 = Object.create(pai, {
        //valor      // ñ aceita ser mudado //permite ser listado            
    nome: {value: 'Bia', writable: false, enumerable: true}
})

console.log(filha2.nome, filha2.corCabelo)
filha2.nome = 'Carla' //tentando mudar o nome de bia para carla, não é possível por writable é false
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)

console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

for(let key in filha2){
    console.log(key)// mostra nome e corCabelo
}

// ou

for(let key in filha2) {
        //propriedade que pertence a ela, se pertencer a ela mesma
    filha2.hasOwnProperty(key) ?
        // coloca a key, senao, coloca o que veio por herança
        console.log(key) : console.log(`Por herança: ${key}`)
}