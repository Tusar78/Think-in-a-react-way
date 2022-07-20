import React, { Component } from 'react';

class Clock extends Component {
  render() {
    return (
      <div>
        <h2>Hello React!</h2>
        <p>It's {new Date().toLocaleTimeString(this.props.locale)}</p>
      </div>
    );
  }
}

export default Clock;