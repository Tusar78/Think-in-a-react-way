import React, { Component } from "react";

class HoverContainer extends Component {
  state = { count: 0 };

  incrementCount = () => {
    this.setState((prevState, props) => {
      return {
        count: prevState.count + 1
      }
    })
  }


  render() {
    const { count } = this.state;    
    return (
      <div>
        <h2 onMouseOver={this.incrementCount}>Hello React {count}</h2>
      </div>
    );
  }
}

export default HoverContainer;
