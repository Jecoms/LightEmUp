import React, { Component } from 'react';
import LightSquare from './LightSquare';

export default class GameWindow extends Component {
  constructor() {
    super();

    this.state = {
      lightState: Array(16).fill(false)
    };
  }
  toggleLight(index) {
    let newState = this.state.lightState.slice();
    newState[index] = !newState[index];
    this.setState({ lightState: newState });
  }
  render() {
    return (
      <div className="GameWindow">
        <div className="LightGrid">
          {
            this.state.lightState.map((isOn,i) =>
              (<LightSquare key={i}
                            toggle={() => this.toggleLight(i)}
                            lightOn={isOn} />)
            )
          }
        </div>
      </div>
    );
  }
}
