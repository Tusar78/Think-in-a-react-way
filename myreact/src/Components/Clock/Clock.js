import React, { Component } from "react";
import Button from "./Button";

class Clock extends Component {
  constructor(props) {
    super(props);
    this.tick = this.tick.bind(this)
    this.handleClick = this.handleClick.bind(this)
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

  handleClick(locale) {
    this.setState((prevState, props) => {
      return {
        locale,
      }
    })
  }



  render() {
    const { date, locale } = this.state;
    let button;
    button = locale === 'en-US' 
          ? <Button onClick={this.handleClick} locale='bn-BD' />
          : <Button onClick={this.handleClick} locale='en-US' />
    return (
      <div className="container">
        <h2>Hello React!</h2>
        <h3>
          {
            locale === 'en-US' 
                ? 'It is: '
                : 'এখন সময়ঃ '
          }
          {date.toLocaleTimeString(locale)}          
          </h3>
        {button}
      </div>
    );
  }
}

export default Clock;
