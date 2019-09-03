//componentes são PascalCase (começam com letra maiuscula sempre)

import React from 'react'

//usamos props como uma convenção. pode ser x por exemplo. mas melhor deixar props como padrão, pois são as propriedades passadas como parâmetros
export default props => 
/*
<h1>Bom dia  {props.nome}!</h1>
<h2>Até breve</h2>
*/
// Atenção: não pode ter mais de 1 tag em cada componente. mas posso colocar tags dentro de uma só, como a div!

/*<div>
    <h1>Bom dia {props.nome}</h1>
    <h2>Até Breve</h2>
</div>*/

//Posso usar o react fragmente para usar mais de uma tag
/*<React.Fragment>
    <h1>Bom dia {props.nome}</h1>
    <h2>Até breve</h2>
</React.Fragment>*/

//OU usar uma array:

[
    <h1 key='h1'>Bom dia {props.nome}</h1> , //separando por vírgula
    <h2 key='h2'>Até breve</h2> //usa-se a palavra key para que array funcione de forma mais otimizada
]