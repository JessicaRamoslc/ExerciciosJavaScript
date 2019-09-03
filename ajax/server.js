const bodyParser = require('body-parser')
const express = require('express')
//colocar o express em uma constante:
const app = express();
//mider que provê para arquivos estáticos presentes na pasta:
app.use(express.static('.'))
app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json())

app.get('/teste', (req, res) => res.send('Ok'))

//startar o servidor:

app.get('/parOuImpar', (req, res) => {
    
})

app.listen(8080, () => console.log('Executando...'))//só para ter controle se o servidor iniciou. 
//após isso, na pasta do projeto, escreva npm start no terminal, caso a porta 8080 por exemplo, já esteja sendo usada, altere para 8081, e assim sucessivamente até que ache uma porta livre.