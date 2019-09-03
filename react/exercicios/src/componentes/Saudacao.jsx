// COMPONENTE DE CLASSE #01
import React, {Component } from 'react'

export default class Saudacao extends Component{
    //no state posso alterar os valores, pos é dinâmico
    state = {
        tipo: this.props.tipo, 
        nome: this.props.nome
         
    }

    constructor(props){
        super(props)//tem que chamar dentro do construtor

        this.setTipo = this.setTipo.bind(this)//bind para garantir um this fixo
        this.setNome = this.setNome.bind(this)
        
    }

    setTipo(e){
        // let i = 1
        // setInterval(() =>{
        //     this.setState({ tipo: ++i})
        // }, 1000)
        //props não pode ser alterado no input, pois é somente leitura
        // this.props.tipo(e.target.value)//target é o input
        this.setState({ tipo: e.target.value})//função que altera o estado
    }

    setNome(e){
        this.setState({ nome: e.target.value})
    }
    //função responsável por renderizar o componente
    render() {
        //parâmetros que estão dentro de props:
        //usar função destructuring para tirar os 2 atributos
        const { tipo, nome} = this.state //mas posso usar o this.props(porém aqui n consigo alterar os valores)
        return (
            <di>
                <h1> { tipo} {nome} !</h1>
                <hr/>
                <input type="text" placeholder="Tipo.." value={tipo} onChange={this.setTipo}/>
                <input type="text" placeholder="Nome" value={nome} onChange={this.setNome}/>
            </di>
        )

    }
}