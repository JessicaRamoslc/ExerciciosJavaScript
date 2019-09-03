import React from 'react'
// import Filho from './Filho'
//importando Util atraves de uma função destructuring
import { childreWithProps } from '../utils/Utils'

export default props =>
    <div>
        <h1> {props.nome} {props.sobrenome} </h1>
        <h2>Filhos</h2>
            {/* <Filho nome="Pedro" sobrenome={props.sobrenome} />
            <Filho {...props } />
            <Filho {...props} nome="Carla" /> */}
            <ul>
                        
            { childreWithProps(props)//o primeiro parâm é a lista de elementos na qual quero trabalhar, 2° parâm é a callback que vai chamar pra transformar cada um dos elementos filhos(child). Como é map() eu preciso dar um return
               
            }
            
            </ul>
        
        
    </div>