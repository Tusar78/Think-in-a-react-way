import React, { Component } from 'react';

class Click extends Component {
  state = {count: 0};

  incrementCount = () => {
    this.setState((prevState, props) => ({count: prevState.count + 1}));
  }

  render() {
    const { count } = this.state;
    return (
      <div style={{margin: '1rem'}}>
        <button onClick={this.incrementCount}> Clicked: {count}</button>
      </div>
    );
  }
}

export default Click;