import React, { Component } from 'react';

class ClickContainer extends Component {
  state = {count : 0}
  incrementCount = () => {
    this.setState((prev, props) => {
      return {
        count: prev.count + 1
      }
    })
  }
  render() {
    const { count } = this.state;
    return (
      <div>
        <button type='button' onClick={this.incrementCount}>Click {count} Times</button>
      </div>
    );
  }
}

export default ClickContainer;