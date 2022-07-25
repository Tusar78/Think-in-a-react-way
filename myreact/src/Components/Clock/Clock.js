import React, { Component } from "react";
import Button from "./Button";

class Clock extends Component {
  constructor(props) {
    super(props);
    this.tick = this.tick.bind(this)
    this.state = { date: new Date(), locale: 'en-US' };
  }

  componentDidMount() {
    this.timerID = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  tick() {
    this.setState((prevState, props) => {
      return {
        date : new Date()
      }
    })
  }

  handleClick() {

  }

  render() {
    const { date, locale } = this.state;
    return (
      <div className="container">
        <h2>Hello React!</h2>
        <h3>It is: {date.toLocaleTimeString(locale)}</h3>
        <Button />
      </div>
    );
  }
}

export default Clock;
