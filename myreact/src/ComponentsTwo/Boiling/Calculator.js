import React, { Component } from "react";
import TemperatureInput from "./TemperatureInput";
// import BoilingVerdict from "./BoilingVerdict";

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
    // const { temperature } = this.state;
    return (
      <>
        <TemperatureInput scale="c" />
        <TemperatureInput scale="f" />
        {/* <BoilingVerdict celsius={temperature} /> */}
      </>
    );
  }
}

export default Calculator;
