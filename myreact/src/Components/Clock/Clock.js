import React, { Component } from "react";

class Clock extends Component {
  state = { date: new Date() };

  componentDidMount() {
    this.clockTimer = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.clockTimer);
  }

  tick() {
    this.setState((state, props) => {
      return { date: new Date() };
    });
  }

  render() {
    return (
      <div>
        <h2>Hello React!</h2>
        <p>It's {this.state.date.toLocaleTimeString(this.props.locale)}</p>
      </div>
    );
  }
}

export default Clock;
