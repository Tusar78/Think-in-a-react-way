import React, { Component } from "react";

const scaleName = {
  c: "Celsius",
  f: "Fahrenheit",
};

class TemperatureInput extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.state = { temperature: "" };
  }

  handleChange(e) {
    this.setState({ temperature: e.target.value });
  }
  render() {
    const { temperature } = this.state;
    const { scale } = this.props;
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
            onChange={this.handleChange}
          />
        </fieldset>
      </>
    );
  }
}

export default TemperatureInput;
