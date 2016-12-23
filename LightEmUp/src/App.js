import React, { Component } from 'react';
import GameWindow from './components/GameWindow';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Light Em Up</h2>
        </div>
        <p className="App-intro">
          Colorful Mobile Game of Speed and HighScores
        </p>

        <GameWindow />
      </div>
    );
  }
}

export default App;
