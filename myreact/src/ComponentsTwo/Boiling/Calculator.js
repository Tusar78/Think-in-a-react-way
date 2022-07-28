import React, { Component } from "react";
import TemperatureInput from "./TemperatureInput";
import BoilingVerdict from "./BoilingVerdict";
import { tryConvert, toCelsius, toFahrenheit } from "../../lib/converter";

class Calculator extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.state = { temperature: "", scale : 'c' };
  }

  handleChange(e, scale) {
    this.setState({ 
      temperature: e.target.value,
      scale 
    });
    
  }
  render() {
    const { temperature, scale } = this.state;
    const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;
    return (
      <>
        <TemperatureInput scale="c" temperature={celsius} onTemperatureChange={this.handleChange} />
        <TemperatureInput scale="f" temperature={fahrenheit} onTemperatureChange={this.handleChange}  />
        <BoilingVerdict celsius={temperature} />
      </>
    );
  }
}

export default Calculator;
