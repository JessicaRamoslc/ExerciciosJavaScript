const nome = 'jessica'
const concatenacao = 'olá ' + nome + '!'
console.log(concatenacao)

//template string ele interpola(converte a variável dentro do proprio texto) permite quebra de linha. utiliza-se crase e chaves

const template = `
    olá
    ${nome}`
console.log(template)

//expressões:
console.log(`1+1 = ${1 + 1}`)

const up = Texto => Texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}!`)//cuidado com letra maiúscula. 
