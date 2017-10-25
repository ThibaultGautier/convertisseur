import React, { Component } from 'react';
import './App.css';

function convert_dollars(euro){
  var inteuro = parseInt(euro,10);
  inteuro = inteuro*1.17;
  return inteuro.toString();
}


class App extends Component {
  
  constructor(){
    super();
    this.state = {
      euro_value: "",
      dollar_value: "",
    }
  };



  handleChange = (event) => {
    console.log("3");
    this.setState({
      euro_value: event.target.value,
      dollar_value: convert_dollars(this.state.euro_value),
    });
  }


  render() {
    return (
      <div className="App">
        <input type="text" placeholder="Valeur en €" value={this.state.euro_value} onChange={this.handleChange}/>
        <input type="text" placeholder="Valeur en $" value={this.state.dollar_value} onChange={this.handleChange}/>
      </div>
    );
  }
}

export default App;
