import React, { Component } from 'react';
import BoilingVerdict from './BoilingVerdict';

class Calculator extends Component {
  state = {
    temperature: ''
  }

  onTemperature = e => {
    this.setState((prevState, props) => {
      return {
        temperature: e.target.value
      }
    })
  }
  render() {
    const {temperature} = this.state;
    return (
      <>
        <fieldset>
          <legend>Enter temperature in celsius</legend>
          <input type="text" value={temperature} onChange={this.onTemperature} />
        </fieldset> 
        <BoilingVerdict celsius={temperature} />
      </>
    );
  }
}

export default Calculator;