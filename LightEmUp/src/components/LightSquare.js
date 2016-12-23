import React, { Component } from 'react';

export default class LightSquare extends Component {
  render() {
    return (
      <div className={`LightSquare ${this.props.lightOn ? 'light-on' : 'light-off'}`}
           onClick={() => this.props.toggle()} >
        {
          this.props.lightOn
            ? <span className="glyphicon glyphicon-plus-sign"></span>
            : <span className="glyphicon glyphicon-minus-sign"></span>
        }
      </div>
    );
  }
}
