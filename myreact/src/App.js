import React from "react";
import Comment from "./Components/Comment/Comment";
import Toggle from "./Components/Toggle/Toggle";

const comment = {
  date: new Date(),
  text: "I hope you enjoy learning React!",
  author: {
    name: "Hello Kittu",
    avatarURL: "http://placekitten.com/g/64/64",
  },
};

const App = () => {
  return (
    <>
      <Comment comment={comment}></Comment>
      <Toggle></Toggle>
    </>
  );
};

export default App;
