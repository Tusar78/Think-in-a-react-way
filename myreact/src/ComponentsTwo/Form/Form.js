import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: "",
      message: "",
      flavor: "",
      isGoing: true,
      numberOfGuests: 2,
    };
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  handleChange(event) {
    // console.log(event.target);
    console.log(event.target.type);
    const eventTarget = event.target;
    const value = eventTarget.type === 'checkbox' ? eventTarget.checked : eventTarget.value;
    const name = eventTarget.name;
    this.setState({
      [name] : value
    })
    switch (eventTarget.type) {
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
      case "select-one":
        this.setState({ flavor: event.target.value });
        break;
      default:
        break;
    }
  }

  onSubmit(event) {
    const { userName, message, flavor, isGoing, numberOfGuests } = this.state;
    const isUserName = userName ? `A name was submitted ${userName}` : "";
    console.log(`${isUserName} and i love ${flavor}${isGoing}. Number of guests is : ${numberOfGuests} ${message}`);
    event.preventDefault();
    this.setState({ userName: "" });
  }
  render() {
    const { userName, message, flavor, isGoing, numberOfGuests } = this.state;
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
        <label htmlFor="flavor" onChange={this.handleChange}>
          Select Your Favorite Item:
          <select id="flavor" value={flavor} onChange={this.handleChange}>
            <option value="Choose">Choose</option>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        <label htmlFor="isGoing">
          Is Going:
          <input
            type="checkbox"
            name="isGoing"
            id="isGoing"
            checked={isGoing}
            onChange={this.handleChange}
          />
        </label>

        <label htmlFor="numberOfGuests">
          Number of guests:
          <input
            type="number"
            name="numberOfGuests"
            id="numberOfGuests"
            value={numberOfGuests}
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
