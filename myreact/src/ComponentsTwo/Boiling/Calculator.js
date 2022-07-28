import React, { Component } from "react";
import BoilingVerdict from "./BoilingVerdict";

class Calculator extends Component {
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
    return (
      <>
        <fieldset>
          <legend>Enter temperature in celsius:</legend>
          <input
            type="text"
            name="temperature"
            id="celsius"
            placeholder="Enter celsius."
            onChange={this.handleChange}
          />

          <BoilingVerdict celsius={temperature} />
        </fieldset>
      </>
    );
  }
}

export default Calculator;
