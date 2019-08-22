//par nome/valor
const saudacao = "oie";//contexto léxico(lugar onde sua variável foi inserida no código). Exemplo: uma função define um contexto local em que a variável se encontra. 

//definindo outra função:
function exec(){
    const saudacao = 'Opa!';//aqui temos outro contexto léxico
    return saudacao; //a variavel saudacao é a mesma da de cima, mas como estão em contextos diferentes, não vão se sobrescrever. O caminho do JS é procurar pelo contexto mais restrito, se achar, já executa, caso contrario vai para os contextos maiores, até achar ou não a variável, e então diz que a variável não foi definida!
}
    //objetos são grupos aninhados de pares nome/valor:
    const cliente = {
        nome: 'Pedro',
        idade: 32,
        peso: 90,
        endereco: {
            logradouro: "Rua tananan",
            numero: 123
        }
    }


console.log(saudacao)
console.log(exec())
console.log(cliente)
