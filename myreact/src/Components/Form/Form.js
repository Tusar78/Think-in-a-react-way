import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this)
    this.state = { value: "" };
  }

  handleChange(event) {
    this.setState((prevState, props) => {
      return {
        value: event.target.value,
      };
    });
  }
  render() {
    const { value } = this.state;
    return (
      <form>
        <input
          type="text"
          name="userName"
          id="user-name"
          value={value}
          onChange={this.handleChange}
        />
      </form>
    );
  }
}

export default Form;
