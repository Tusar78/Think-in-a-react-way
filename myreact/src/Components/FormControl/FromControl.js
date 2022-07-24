import React, { Component } from "react";
import Greeting from "./Greeting";
import LoggedInButton from "./LoggedInButton";
import LoggedOutButton from "./LoggedOutButton";

class FromControl extends Component {
  constructor(props) {
    super(props);

    this.loginButton = this.loginButton.bind(this);
    this.logoutButton = this.logoutButton.bind(this);

    this.state = { isLoggedIn: false };
  }

  loginButton () {
    this.setState({isLoggedIn: true})
  }

  logoutButton () {
    this.setState({isLoggedIn: false})
  }

  render() {
    const { isLoggedIn } = this.state;
    let button;
    if (isLoggedIn) {
      button = <LoggedOutButton onClick={this.logoutButton} />
    } else {
      button = <LoggedInButton onClick={this.loginButton} />
    }
    return (
      <>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </>
    );
  }
}

export default FromControl;
