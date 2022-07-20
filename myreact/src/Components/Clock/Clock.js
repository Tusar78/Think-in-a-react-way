import React, { Component } from 'react';

class Clock extends Component {
  render() {
    return (
      <div>
        <h2>Hello React!</h2>
        <p>It's {new Date().toLocaleTimeString()}</p>
      </div>
    );
  }
}

export default Clock;