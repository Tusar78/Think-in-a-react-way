import React, { Component } from 'react';

class Toggle extends Component {
  constructor(props) {
    super(props);

    this.state = {isToggleOn: true}
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState, props) => {
      return {
        isToggleOn: !prevState.isToggleOn
      }
    })
  }
  render() {
    return (
      <div>
        <button style={{cursor: 'pointer'}} onClick={this.handleClick}>{this.state.isToggleOn ? 'ON' : 'OFF'}</button>
      </div>
    );
  }
}

export default Toggle;