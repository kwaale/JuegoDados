import './App.css';
import React, { Component } from 'react';
// import Dado from './Dado.jsx';
import Input from './components/Input';



class App extends Component {
  constructor(props) {
    super(props)
    // this.state = {
    //   valor1: this.generator(),
    //   valor2: this.generator(),
    //   valor3: this.generator(),
    // }
    // this.tirar = this.tirar.bind(this);
    // this.winerGame = this.winerGame.bind(this);
  }

  render() {
    
    return (
      <div className="App">
        <h1>- Juego de dados -</h1>
        <p>Coloca el numero de dados que vas a usar y luego lanzalos todas las veces que necesites.</p>
        <Input/>
      </div>
    );
  }
}

export default App;