import React from "react";
import ReactDOM from "react-dom";

function Clock({locale}) {
  return (
    <h2>
      Hello <span>{new Date().toLocaleTimeString(locale)}</span>
    </h2>
  )
}

ReactDOM.render(<Clock locale="bn-BD" />, document.getElementById('root'));