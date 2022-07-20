import React, { Component } from 'react';

class HandleEvent extends Component {
  constructor(props) {
    super(props)
    this.state = {date: new Date(), locale: 'en-US'};
    this.clickHandle = this.clickHandle.bind(this)
  }

  componentDidMount = () => {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillMount = () => {
    clearInterval(this.timerID)
  }

  tick = () => {
    this.setState((state, props) => {
      return {
        date: new Date()
      }
    })
  }

  // clickHandle = () => {
  //   console.log('Hello React!');
  //   this.setState((state, props) => {
  //     return {
  //       locale: 'bn-BD'
  //     }
  //   })
  // }

  clickHandle() {
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