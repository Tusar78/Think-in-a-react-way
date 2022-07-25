import React from "react";

const celOrFahrenheit = {
  c: 'Celsius',
  f: 'Fahrenheit'
}

const TemperatureInput = ({scale, temperature, onTemperatureChange}) => {
  return (
    <fieldset>
      <legend>Enter temperature in {celOrFahrenheit[scale]}</legend>
      <input type="text" value={temperature} onChange={(e) => onTemperatureChange(e, scale)} />
    </fieldset>
  );
};

export default TemperatureInput;
