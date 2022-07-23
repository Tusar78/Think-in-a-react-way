import React, { Component } from "react";

class HandleEvent extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(this.tick, 1000);
  }

  componentWillUnmount = () => clearInterval(this.timerID);

  tick = () => {
    this.setState((state, props) => {
      return {
        date: new Date()
      }
    })
  }
    

  render() {
    return (
      <div>
        <h2>Hello, I'm Tusar</h2>
        <h4>It's: {this.state.date.toLocaleTimeString()}</h4>
      </div>
    );
  }
}

export default HandleEvent;
