import React, { Component } from 'react';
import { converter, toCelsius, toFahrenheit } from '../../lib/converter';
import BoilingVerdict from './BoilingVerdict';
import TemperatureInput from './TemperatureInput';

class Calculator extends Component {
  state = {
    temperature: '',
    scale: 'c'
  }

  onTemperatureChange = (e, scale) => {
    this.setState((prevState, props) => {
      return {
        temperature: e.target.value,
        scale
      }
    })
  }
  render() {
    const {temperature, scale } = this.state;
    const celsius = scale === 'f' ? converter(temperature, toCelsius) : temperature;
    const fahrenheit = scale === 'c' ? converter(temperature, toFahrenheit) : temperature;
    return (
      <>
        <TemperatureInput scale='f' temperature={fahrenheit} onTemperatureChange={this.onTemperatureChange} />
        <TemperatureInput scale='c' temperature={celsius} onTemperatureChange={this.onTemperatureChange} />
        <BoilingVerdict celsius={celsius} />        
      </>      
    )
  }
}

export default Calculator;