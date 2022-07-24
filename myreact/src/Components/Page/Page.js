import React, { Component } from "react";
import Warning from "./Warning/Warning";

class Page extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.state = { isWarning: true };
  }

  handleClick() {
    this.setState((prevState, props) => {
      return {
        isWarning: !prevState.isWarning,
      };
    });
  }
  render() {
    const { isWarning } = this.state;
    return (
      <>
        <Warning isWarning={isWarning} />
        <button onClick={this.handleClick}>
          {
            isWarning ? 'Hide' : 'Show'
          }
        </button>
      </>
    );
  }
}

export default Page;
