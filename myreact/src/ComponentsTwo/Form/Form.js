import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = { userName: "" };
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this)
  }

  handleChange(event) {
    this.setState((prevState, props) => {
      return {
        userName: event.target.value,
      };
    });
  }

  onSubmit(event) {
    const { userName } = this.state;
    event.preventDefault();
    const isUserName = userName 
      ? `A name was submitted ${userName}`
      : '';
    console.log(isUserName);
    this.setState({userName: ''})
  }
  render() {
    const { userName } = this.state;
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
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Form;
