import './App.css';
import React, { Component } from 'react';
import Dado from './Dado.jsx';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      valor1: this.generator(),
      valor2: this.generator(),
      valor3: this.generator(),
    }
    this.tirar = this.tirar.bind(this);
    this.winerGame = this.winerGame.bind(this);
  }

  render() {
    
    return (
      <div className="App">
        <h1>Juego de dados</h1>
        <p>Darle click en "Generar" si asiertas los tres dados iguales, ganas.</p>
        <Dado valor={this.state.valor1} />
        <Dado valor={this.state.valor2} />
        <Dado valor={this.state.valor3} />
        <button onClick={this.tirar}>Generar</button>
        {this.winerGame()}
      </div>
    );
  }
  tirar(e){
    e.preventDefault();
    this.setState({
      valor1:this.generator(),      
      valor2:this.generator(),      
      valor3:this.generator(),      
    })
  }
  generator() {
    return Math.trunc(Math.random() * 7);
  }
  winerGame(){
    if(this.state.valor1 === this.state.valor2 && this.state.valor3 === this.state.valor2){
      return (<h3>Ganaste</h3>)
    }else return (<h3>Intenta de nuevo</h3>)
  }
}

export default App;