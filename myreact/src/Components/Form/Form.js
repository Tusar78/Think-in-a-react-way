import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      message: "",
      option: '',
      term: false
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
    } else if (type === 'select-one') {
      this.setState((prevState, props) => {
        return {
          option: e.target.value,
        };
      });
    } else if (type === 'checkbox') {
      this.setState((prevState, props) => {
        return {
          term: e.target.checked,
        };
      });
    } else {
      console.log('Nothing type');
    }
  };

  submitChange = e => {
    const { value, message, term, option } = this.state;
    e.preventDefault();
    console.log(value, message, term, option);
  }
  render() {
    const { value, message, option, term } = this.state;
    let display =
      value && value.trim().length > 0 ? (
        <p className="display__input">{value}</p>
      ) : null;

    return (
      <form onSubmit={this.submitChange}>
        <input
          type="text"
          name="username"
          id="user-name"
          placeholder="Enter your name"
          value={value}
          onChange={this.handleChange}
        />
        <select value={option} onChange={this.handleChange}>
          <option value="React">React</option>
          <option value="Angular">Angular</option>
        </select>
        <textarea
          name="message"
          placeholder="Type message"
          value={message}
          onChange={this.handleChange}
        ></textarea>       

        <div className="terms__condition">
          <input type="checkbox" id="term" checked={term} onChange={this.handleChange}/>  
          <label htmlFor="term">Term's and condition</label>
        </div> 
        {display}

        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Form;
