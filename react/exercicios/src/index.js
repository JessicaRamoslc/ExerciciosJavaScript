import React from 'react'
import ReactDOM from 'react-dom'
//const elemento = <h1>React 2</h1> //colocar o código dentro da variável
//import BomDia from './componentes/BomDia'

// import {BoaTarde, BoaNoite} from './componentes/Multiplos'
//ReactDOM.render(<BoaTarde nome="Jessica" />, document.getElementById('root')) 
//algo semelhante a jQuery: $('<h1>').html('React')

// import Saudacao from './componentes/Saudacao'

import Pai from './componentes/Pai'
import Filho from './componentes/Filho'
ReactDOM.render(
    <div>
        {/* <BoaTarde nome= "Ana"/>
        <BoaNoite nome= "Bia"/> */}
        {/* <Saudacao tipo="Bom dia" nome="João"/> */}
        {/* <Pai nome="Paulo" sobrenome="Silva" /> */}
        <div>
            <Pai nome="Paulo" sobrenome="Silva">
            {/* Como passo os componentes Filho aqui? */}
                <Filho nome="Pedro" />
                <Filho nome="Paulo" />
                <Filho nome="Carla" />
                {/* <Filho nome="Paulo" sobrenome="Silva" />
                <Filho nome="Carla" sobrenome="Silva" /> */}
            </Pai>
        </div>
    </div>
, document.getElementById('root'))


