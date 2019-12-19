import React, { Component } from 'react';
import logo from './logo.svg';
import Xmas1 from './icons/Xmas1.svg';
import Xmas2 from './icons/Xmas2.svg';
import Xmas3 from './icons/Xmas3.svg';
import Xmas4 from './icons/Xmas4.svg';
import './App.css';
import Icon from './components/Icon.js';
import { Board, Game, Square } from './components/tictactoe/Game.js';

class App extends Component {
  constructor() {
    super()
    this.state = {
      selected: Xmas1
    }
    this.style = { backgroundColor: '#d4bea7' };
    this.icons = [Xmas1, Xmas2, Xmas3, Xmas4];
  }

  onSelect = (event) => {
    this.setState({
      selected: event.target.name
    });
  }

  showPage = () => {
    // if (this.state.selected === Xmas1) return <Starter logo={logo}/>;
    if (this.state.selected === Xmas2) return <Game />;
    // if (this.state.selected === bankIcon) return <AccountsApp />;
    // if (this.state.selected === communityIcon) return <CitiesApp />;
    // if (this.state.selected === linkIcon) return <LinkedListApp />;
  }

  renderIcons = () => {
    return this.icons.map((icon) => {
      return <Icon key={icon} name={icon} image={icon} 
      style={this.state.selected === icon ? this.style : null}
        onClick={this.onSelect} />
    })
  }

  render() {
    return (
      <div className="App" >
        <div>
          <nav className="Nav">
            {this.renderIcons()}
          </nav>
          {this.showPage()}
        </div>
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
