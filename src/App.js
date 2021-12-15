import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.increase = this.increase.bind(this);
    this.state = {
      counter: 0,
    };
  }
  
  increase() {
    this.setState({
      counter: this.state.counter + 1,
    });
  }

  render() {
    return (
      <div>
        <span className="value">{this.state.counter}</span>
        <button id="inc" onClick={this.increase}>
          Incrementa
        </button>
      </div>
    );
  }
}

export default App;
