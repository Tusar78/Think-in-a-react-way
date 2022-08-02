import React, { Component } from 'react';

class Hover extends Component {
  state = {count: 0};

  incrementCount = () => {
    this.setState((prevState, props) => ({count: prevState.count + 1}));
  }

  render() {
    const { count } = this.state;
    return (
      <div style={{margin: '1rem'}}>
        <h2 onMouseOver={this.incrementCount}> Hover: {count}</h2>
      </div>
    );
  }
}

export default Hover;