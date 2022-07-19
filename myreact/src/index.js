import React from "react";
import ReactDOM from "react-dom";

// const element = React.createElement("h2", { title: "Hello World" }, [
//   "Hello World",
//   React.createElement("span", { title: "Hello Span" }, "Hello Span"),
// ]);


setInterval(() => {
  const element = (
    <h2 title="hello world">
      Hello React! <span title="Hello span">{new Date().toLocaleTimeString()}</span>
    </h2>
  );
  ReactDOM.render(element, document.getElementById('root'));
}, 1000)

