import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
  }

  handleChange = (e) => {
    this.setState((prevState, props) => {
      return {
        value: e.target.value,
      };
    });
  };
  render() {
    const { value } = this.state;
    let display = (value && value.trim().length > 0)
                      ? <p className="display__input">{value}</p>
                      : null;

    return (
      <form>
        <input
          type="text"
          name="username"
          id="user-name"
          value={value}
          onChange={this.handleChange}
        />

        {display}
      </form>
    );
  }
}

export default Form;
