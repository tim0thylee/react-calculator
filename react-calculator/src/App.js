import React, { Component } from 'react';
import './App.css';
import MainCalculator from "./components/MainCalculator/MainCalculator";

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainCalculator />
      </div>
    );
  }
}

export default App;
