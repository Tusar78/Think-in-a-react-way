import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: "",
      message: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  handleChange(event) {
    // console.log(event.target);
    console.log(event.target.type);
    const eventType = event.target.type;
    switch (eventType) {
      case "text":
        this.setState((prevState, props) => {
          return {
            userName: event.target.value,
          };
        });
        break;
      case "textarea":
        this.setState({ message: event.target.value });
        break;
      default:
        break;
    }
  }

  onSubmit(event) {
    const { userName, message } = this.state;
    event.preventDefault();
    const isUserName = userName ? `A name was submitted ${userName}` : "";
    console.log(`${isUserName} and ${message}`);
    this.setState({ userName: "" });
  }
  render() {
    const { userName, message } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <label htmlFor="userName">
          Name:
          <input
            type="text"
            name="name"
            id="userName"
            placeholder="Enter you name."
            value={userName}
            onChange={this.handleChange}
          />
        </label>
        <label htmlFor="description">
          Message:
          <textarea
            name="message"
            id="description"
            placeholder="Enter your Message."
            value={message}
            onChange={this.handleChange}
          ></textarea>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Form;
