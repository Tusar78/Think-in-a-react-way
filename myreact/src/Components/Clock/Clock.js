import React, { Component } from "react";

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        date: new Date()
      })
    }, 1000);
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
