import React from "react";
import ReactDOM from "react-dom";

class Clock extends React.Component{
  render() {
    return (
      <h2>
        Hello {new Date().toLocaleTimeString(this.props.locale)}
      </h2>
    )
  }
}

ReactDOM.render(<Clock locale='bn-BD' />, document.getElementById('root'))