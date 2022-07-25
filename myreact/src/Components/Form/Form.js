import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      message: "",
    };
  }

  handleChange = (e) => {
    const type = e.target.type;
    if (type === 'text') {
      this.setState((prevState, props) => {
        return {
          value: e.target.value,
        };
      })
    } else if (type === 'textarea') {
      this.setState((prevState, props) => {
        return {
          message: e.target.value,
        };
      });
    } else {
      console.log('Nothing type');
    }
  };
  render() {
    const { value, message } = this.state;
    let display =
      value && value.trim().length > 0 ? (
        <p className="display__input">{value}</p>
      ) : null;

    return (
      <form>
        <input
          type="text"
          name="username"
          id="user-name"
          placeholder="Enter your name"
          value={value}
          onChange={this.handleChange}
        />

        <textarea
          name="message"
          placeholder="Type message"
          value={message}
          onChange={this.handleChange}
        ></textarea>

        {display}
      </form>
    );
  }
}

export default Form;
