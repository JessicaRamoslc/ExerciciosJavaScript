import React, {Component} from 'react';

// const Equipe = (props) => {
//     return (
//         <di>
//             <Sobre nome={props.nome} cargo={props.cargo} idade={props.idade}/>
//             <Social />
//             <hr />
//         </di>
//     );
// }

// const Sobre = (props) => {
//     return(
//         <div>
//             <h2>Olá sou a {props.nome}</h2>
//             <h3>Cargo: {props.cargo}</h3>
//             <h3>Idade: {props.idade}</h3>
//         </div>
//     )
// }

// const Social = () => {
//     return(
//         <div>
//             <a>Facebook</a>
//             <a>LinkedIn</a>
//             <a>Youtube</a>
//         </div>
//     )
// }

// class Equipe extends Component {
//     render(){
//         return(
//         <div>
//             <Sobre nome={this.props.nome} cargo={this.props.cargo} idade={this.props.idade}/>
//         </div>);
//     }
// }

// class Sobre extends Component {
//     render(){
//         return(
//             <div>
//                 <h2>Olá sou {this.props.nome} </h2>
//                 <h4> Cargo: {this.props.cargo} </h4>
//                 <h4> Idade: {this.props.idade} </h4>
//             </div>
//         );
//     }
// }

// function App(){
//     return (
//         <div>
//             <h1>Conheça nossa equipe: </h1>
//             {/* <Equipe nome="Jessica" cargo="Programador" idade="29"/>
//             <Equipe nome="Cristhiane" cargo="Programador" idade="31"/> */}
//             < Equipe nome="Jessica" cargo="Programadora" idade="24"/>
//         </div>
//     );
// }

// export default App; //precisa exportar

/* --------------------------------------------------------- */

// class App extends Component {

//     constructor(props){
//         super(props);
//         this.state={
//             nome: "Jessica",
//             contador: 0
//         };

//         this.aumentar = this.aumentar.bind(this)//colocar as funções visiveis! BIND!!!!!

//         this.diminuir = this.diminuir.bind(this);
//     }

//     //função do contador:
//     aumentar(){
//         let state = this.state;
//         state.contador += 1;
//         state.nome= 'Julia'
//         this.setState(state)
//     }

//     diminuir(){
//         let state = this.state;
//         if(state.contador === 0){
//             alert('Opa chegou a zero!')
//             return;
//         }
//         state.contador -= 1;
//         this.setState(state)
//     }

//     render(){
//         return(
//             <div>
//                 <h1>Contador</h1>
//                 {this.state.nome}
//                 <h3>

//                     <button onClick={this.diminuir}>-</button>      {this.state.contador}<button onClick={this.aumentar}>+</button></h3>
//             </div>
//         )
//     }
// }

/* ------------------------------------ */
class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            hora: '00:00:00'
          };
    }
    //depois que o componente for montado pode fazer oq tiver dentro desta função, e depois n roda mais.
    componentDidMount(){//ciclo de vida
        //timer com setInterval e abre função anônima
        setInterval(() =>{
            this.setState({hora: new Date().toLocaleTimeString()})
        }, 1000);
    }
    //ciclo de vida de componente
    componentDidUpdate(){//SE teve atualização faço uma ação com essa função
        // alert('atualizou!')
    }

    // shouldComponentUpdate(){

    // }

    render(){
        return(
            <div>
                <h1>Meu projeto {this.state.hora}</h1>
            </div>
        )
    }
}
export default App;