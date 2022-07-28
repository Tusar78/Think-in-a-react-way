import React, { Component } from "react";

const scaleName = {
  c: "Celsius",
  f: "Fahrenheit",
};

class TemperatureInput extends Component {
  render() {
    const { scale, temperature, onTemperatureChange } = this.props;
    return (
      <>
        <fieldset>
          <legend>Enter temperature in {scaleName[scale]}:</legend>
          <input
            type="text"
            name="temperature"
            id="celsius"
            placeholder= {scaleName[scale]}
            value={temperature}
            onChange={(e) => onTemperatureChange(e, scale)}
          />
        </fieldset>
      </>
    );
  }
}

export default TemperatureInput;
