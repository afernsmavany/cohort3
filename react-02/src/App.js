import React, { Component } from 'react';
import logo from './logo.svg';
import Xmas1 from './icons/Xmas1.svg';
import Xmas2 from './icons/Xmas2.svg';
import Xmas3 from './icons/Xmas3.svg';
import Xmas4 from './icons/Xmas4.svg';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      selected: Xmas1
    }
  }

  render() {
  return(
    <div className = "App" >
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
}

export default App;
