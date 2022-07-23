import React, { Component } from "react";

class HandleEvent extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date(), locale: 'en-US' };
    this.clickHandle = this.clickHandle.bind(this)
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

  clickHandle () {
    console.log(this);
    this.setState((state, props) => {
      return {
        locale: 'bn-BD'
      }
    })
  }
    

  render() {
    return (
      <div>
        <h2>Hello, I'm Tusar</h2>
        <h4>It's: {this.state.date.toLocaleTimeString(this.state.locale)}</h4>
        <button onClick={this.clickHandle}>Change</button>
      </div>
    );
  }
}

export default HandleEvent;
