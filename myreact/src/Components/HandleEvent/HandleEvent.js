import React, { Component } from 'react';

class HandleEvent extends Component {
  state = {date: new Date(), locale: 'en-US'};

  componentDidMount = () => {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillMount() {
    clearInterval(this.timerID)
  }

  tick = () => {
    this.setState((state, props) => {
      return {
        date: new Date()
      }
    })
  }

  clickHandle = () => {
    console.log('Hello React!');
    this.setState((state, props) => {
      return {
        locale: 'bn-BD'
      }
    })
  }

  render() {
    const {date, locale} = this.state;
    return (
      <div>
        <h2>Hello, React!</h2>
        <h3>It is {date.toLocaleTimeString(locale)}</h3>
        <button onClick={this.clickHandle}>Click</button>
      </div>
    );
  }
}

export default HandleEvent;