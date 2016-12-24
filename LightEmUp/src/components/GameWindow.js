import React, { Component } from 'react';
import LightSquare from './LightSquare';

export default class GameWindow extends Component {
  constructor() {
    super();

    this.state = {
      winState: false,
      lightState: Array(16).fill(false)
    };
  }
  componentDidUpdate(prevProps, prevState) {
    if (!prevState.winState) this.checkForWinState();
  }
  getLightNeighbors(target) {
    let lightNeighbors = [target];

    // could just hard code a switch statement for performance
    if (target > 3) lightNeighbors.push(target-4);
    if (target < 12) lightNeighbors.push(target+4);
    if ((target % 4) > 0) lightNeighbors.push(target-1);
    if ((target % 4) < 3) lightNeighbors.push(target+1);

    return lightNeighbors;
  }
  toggleLight(index) {
    let changedLights = [].concat(this.getLightNeighbors(index));
    let newState = this.state.lightState.slice();

    for (let light of changedLights) {
      newState[light] = !newState[light];
    }

    this.setState({ lightState: newState });
  }
  checkForWinState() {
    let youWon = this.state.lightState.slice().every(light => light);
    if (youWon) this.setState({ winState: true });
  }
  render() {
    let currentScreen = (this.state.winState)
      ? <div>YOU WON!</div>
      : (
        <div className="LightGrid">
          {
            this.state.lightState.map((isOn,i) =>
              (<LightSquare key={i}
                            toggle={() => this.toggleLight(i)}
                            lightOn={isOn} />)
            )
          }
        </div>
      );
    return (
      <div className="GameWindow">
        {currentScreen}
      </div>
    );
  }
}
